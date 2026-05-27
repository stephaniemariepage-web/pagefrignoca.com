// The scoring engine. Each dimension is scored on its own, tier-weighted.
// The composite is their plain average, the number that lies. The gate is
// what stops a strong average from hiding a fatal weakness.

import {
  FIELDS,
  FLOOR,
  READY,
  TIER_WEIGHT,
  type AccountRecord,
  type Dimension,
  type ReadinessClass,
} from './model';

export interface RecordScore {
  completeness: number;
  standardization: number;
  accuracy: number;
  composite: number;
  weakest: number;
  weakestDim: Dimension;
  gated: boolean;
  naiveClass: ReadinessClass; // what the composite alone would say
  readinessClass: ReadinessClass; // what gated readiness says
  gateCaught: boolean; // looked ready on average, failed the gate
}

export function classify(score: number): ReadinessClass {
  if (score >= 90) return 'Ready';
  if (score >= 70) return 'Near Ready';
  if (score >= 50) return 'Partially Ready';
  if (score >= 30) return 'Low Readiness';
  return 'Not Ready';
}

function dimensionScore(rec: AccountRecord, dim: Dimension): number {
  let weight = 0;
  let hit = 0;
  for (const f of FIELDS) {
    if (!f.dimensions.includes(dim)) continue;
    const cell = rec.cells[f.key];
    const w = TIER_WEIGHT[f.tier];
    if (dim === 'completeness') {
      weight += w;
      if (cell.populated) hit += w;
    } else {
      // Standardization and accuracy only apply to populated fields.
      // An empty field is a completeness problem, not double-counted here.
      if (!cell.populated) continue;
      weight += w;
      if (dim === 'standardization' ? cell.standardized : cell.accurate) hit += w;
    }
  }
  return weight === 0 ? 100 : Math.round((hit / weight) * 100);
}

export function scoreRecord(rec: AccountRecord): RecordScore {
  const completeness = dimensionScore(rec, 'completeness');
  const standardization = dimensionScore(rec, 'standardization');
  const accuracy = dimensionScore(rec, 'accuracy');
  const composite = Math.round((completeness + standardization + accuracy) / 3);

  const dims: [Dimension, number][] = [
    ['completeness', completeness],
    ['standardization', standardization],
    ['accuracy', accuracy],
  ];
  let weakestDim: Dimension = 'completeness';
  let weakest = 100;
  for (const [d, v] of dims) {
    if (v < weakest) {
      weakest = v;
      weakestDim = d;
    }
  }

  const gated = weakest < FLOOR;
  const naiveClass = classify(composite);
  // Gated: the class is set by the weakest dimension, not the average.
  const readinessClass = classify(gated ? weakest : composite);
  const gateCaught = gated && composite >= READY;

  return {
    completeness,
    standardization,
    accuracy,
    composite,
    weakest,
    weakestDim,
    gated,
    naiveClass,
    readinessClass,
    gateCaught,
  };
}

export interface Rollup {
  total: number;
  readyByComposite: number;
  readyByGate: number;
  gateCaught: number;
  avgComposite: number;
  distribution: Record<ReadinessClass, number>;
}

export function rollup(scores: RecordScore[]): Rollup {
  const distribution: Record<ReadinessClass, number> = {
    Ready: 0,
    'Near Ready': 0,
    'Partially Ready': 0,
    'Low Readiness': 0,
    'Not Ready': 0,
  };
  let readyByComposite = 0;
  let readyByGate = 0;
  let gateCaught = 0;
  let compositeSum = 0;

  for (const s of scores) {
    distribution[s.readinessClass]++;
    compositeSum += s.composite;
    if (s.composite >= READY) readyByComposite++;
    if (!s.gated && s.composite >= READY) readyByGate++;
    if (s.gateCaught) gateCaught++;
  }

  return {
    total: scores.length,
    readyByComposite,
    readyByGate,
    gateCaught,
    avgComposite: scores.length ? Math.round(compositeSum / scores.length) : 0,
    distribution,
  };
}
