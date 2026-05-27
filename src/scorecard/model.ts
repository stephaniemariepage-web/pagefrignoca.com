// Core Account Profile, generalized. The data model behind the public Scorecard.

export type Tier = 'core' | 'supporting' | 'supplemental';
export type Dimension = 'completeness' | 'standardization' | 'accuracy';

export interface FieldDef {
  key: string;
  label: string;
  tier: Tier;
  dimensions: Dimension[];
}

// Tier weighting: not every field counts equally toward a dimension score.
export const TIER_WEIGHT: Record<Tier, number> = {
  core: 3,
  supporting: 2,
  supplemental: 1,
};

// The gated-readiness floor. Any dimension below this fails the gate.
export const FLOOR = 60;
// "GTM-ready" threshold: Near Ready or better.
export const READY = 70;

export const FIELDS: FieldDef[] = [
  { key: 'companyName', label: 'Company Name', tier: 'core', dimensions: ['completeness', 'standardization', 'accuracy'] },
  { key: 'domain', label: 'Website Domain', tier: 'core', dimensions: ['completeness', 'standardization', 'accuracy'] },
  { key: 'country', label: 'Country', tier: 'core', dimensions: ['completeness', 'standardization', 'accuracy'] },
  { key: 'industry', label: 'Industry', tier: 'core', dimensions: ['completeness', 'standardization', 'accuracy'] },
  { key: 'employees', label: 'Employee Count', tier: 'supporting', dimensions: ['completeness', 'accuracy'] },
  { key: 'revenue', label: 'Annual Revenue', tier: 'supporting', dimensions: ['completeness', 'accuracy'] },
  { key: 'region', label: 'State / Region', tier: 'supporting', dimensions: ['completeness', 'standardization', 'accuracy'] },
  { key: 'phone', label: 'Phone', tier: 'supplemental', dimensions: ['completeness', 'standardization'] },
  { key: 'parent', label: 'Parent Account', tier: 'supplemental', dimensions: ['completeness', 'accuracy'] },
];

export type Source =
  | 'Web form'
  | 'Manual entry'
  | 'List import'
  | 'Enrichment'
  | 'Integration'
  | 'Conference scan';
export type Timeframe = 'Last 90 days' | 'Last 12 months' | 'Last 3 years' | 'Older';

export const SOURCES: Source[] = [
  'Web form',
  'Manual entry',
  'List import',
  'Enrichment',
  'Integration',
  'Conference scan',
];
export const TIMEFRAMES: Timeframe[] = ['Last 90 days', 'Last 12 months', 'Last 3 years', 'Older'];

// One field on one record. populated/standardized/accurate ARE the answer key:
// the generator decides them, so Accuracy is genuinely scoreable.
export interface Cell {
  value: string; // shown to the visitor; '' when not populated
  populated: boolean;
  standardized: boolean; // meaningful only when populated and the field has 'standardization'
  accurate: boolean; // meaningful only when populated and the field has 'accuracy'
}

export interface AccountRecord {
  id: string;
  name: string;
  source: Source;
  timeframe: Timeframe;
  cells: Record<string, Cell>;
}

// Readiness classes label the overall (composite/gated) result, not any one
// dimension. Completeness is a dimension; readiness is the verdict above it.
export type ReadinessClass =
  | 'Ready'
  | 'Near Ready'
  | 'Partially Ready'
  | 'Low Readiness'
  | 'Not Ready';

export const CLASS_ORDER: ReadinessClass[] = [
  'Ready',
  'Near Ready',
  'Partially Ready',
  'Low Readiness',
  'Not Ready',
];

// Green to red, five steps.
export const CLASS_COLOR: Record<ReadinessClass, string> = {
  Ready: '#4fd1a5',
  'Near Ready': '#86c97f',
  'Partially Ready': '#e3b341',
  'Low Readiness': '#e0894b',
  'Not Ready': '#ec6a4d',
};
