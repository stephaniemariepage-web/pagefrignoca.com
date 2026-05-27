// Synthetic CRM account data. Generated, not sourced: no licensing question,
// and because we author every value we hold the answer key, so the Accuracy
// dimension is genuinely scoreable. Reseeding produces a fresh dataset.

import {
  FIELDS,
  SOURCES,
  type AccountRecord,
  type Cell,
  type Source,
  type Timeframe,
} from './model';

// Small, fast seeded PRNG. Same seed in, same dataset out.
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Rand = () => number;
const pick = <T>(r: Rand, arr: T[]): T => arr[Math.floor(r() * arr.length)];
const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));

const PREFIX = [
  'Northwind', 'Cobalt', 'Brightline', 'Meridian', 'Granite', 'Vantage', 'Harbor',
  'Lumen', 'Ironwood', 'Cedar', 'Atlas', 'Beacon', 'Sterling', 'Pinnacle',
  'Riverstone', 'Quantic', 'Everpeak', 'Halcyon', 'Tideway', 'Kestrel', 'Summit',
  'Blackbird', 'Marigold', 'Orchard',
];
const DESC = [
  'Logistics', 'Robotics', 'Analytics', 'Systems', 'Networks', 'Labs', 'Health',
  'Capital', 'Materials', 'Software', 'Dynamics', 'Partners', 'Technologies',
  'Industries', 'Solutions', 'Foundry',
];
const LEGAL = ['Inc.', 'LLC', 'Corp.', 'Co.'];
const OWNERS = [
  'A. Reyes', 'J. Park', 'M. Donnelly', 'S. Okafor', 'T. Bauer', 'L. Nguyen',
  'R. Castellano', 'D. Whitfield', 'P. Sandoval', 'K. Abara', 'C. Mercer', 'E. Volkov',
];

const COUNTRY_STD = ['United States', 'United Kingdom', 'Germany', 'Canada', 'Australia'];
const COUNTRY_BAD: Record<string, string[]> = {
  'United States': ['USA', 'US', 'u.s.a.', 'United States of America'],
  'United Kingdom': ['UK', 'U.K.', 'England', 'Great Britain'],
  Germany: ['DE', 'Deutschland', 'GER'],
  Canada: ['CA', 'CAN', 'canada'],
  Australia: ['AU', 'AUS', 'australia'],
};
const INDUSTRY_STD = ['Software', 'Financial Services', 'Manufacturing', 'Healthcare', 'Retail', 'Logistics'];
const INDUSTRY_BAD: Record<string, string[]> = {
  Software: ['SaaS', 'software & tech', 'Tech', 'IT'],
  'Financial Services': ['Finance', 'FinTech', 'fin svcs', 'Banking'],
  Manufacturing: ['mfg', 'Industrial', 'manufacturing co'],
  Healthcare: ['Health', 'Medical', 'health care', 'HC'],
  Retail: ['retail & ecommerce', 'E-commerce', 'Consumer'],
  Logistics: ['Supply Chain', 'logistics / transport', 'Transportation'],
};
const REGION_STD = ['California', 'Texas', 'New York', 'Washington', 'Illinois', 'Massachusetts'];
const REGION_BAD: Record<string, string[]> = {
  California: ['CA', 'Calif.', 'calif'],
  Texas: ['TX', 'Tex.'],
  'New York': ['NY', 'N.Y.'],
  Washington: ['WA', 'Wash.'],
  Illinois: ['IL', 'Ill.'],
  Massachusetts: ['MA', 'Mass.'],
};
const EMP = ['12', '35', '80', '140', '320', '650', '1,200', '2,400', '5,200'];
const REV = ['$3M', '$8M', '$15M', '$30M', '$60M', '$120M', '$240M', '$500M'];

// Standardization quality leans on where the record came from.
const STD_BASE: Record<Source, number> = {
  Enrichment: 0.93,
  Integration: 0.87,
  'Web form': 0.74,
  'List import': 0.6,
  'Conference scan': 0.5,
  'Manual entry': 0.52,
};
// Accuracy decays with age: values are rarely revalidated once populated.
const ACC_BASE: Record<Timeframe, number> = {
  'Last 90 days': 0.93,
  'Last 12 months': 0.83,
  'Last 3 years': 0.63,
  Older: 0.46,
};

const TIMEFRAME_POOL: Timeframe[] = [
  'Last 90 days', 'Last 90 days',
  'Last 12 months', 'Last 12 months', 'Last 12 months',
  'Last 3 years', 'Last 3 years', 'Last 3 years',
  'Older', 'Older',
];

interface Ctx {
  prefix: string;
  desc: string;
  legal: string;
  country: number;
  industry: number;
  region: number;
  owner: string;
  emp: string;
  rev: string;
  parent: string;
}

function makeValue(key: string, standardized: boolean, c: Ctx, r: Rand): string {
  const base = (c.prefix + c.desc).toLowerCase();
  switch (key) {
    case 'companyName': {
      const clean = `${c.prefix} ${c.desc}, ${c.legal}`;
      if (standardized) return clean;
      return pick(r, [
        `${c.prefix} ${c.desc} ${c.legal.replace('.', '')}`.toLowerCase(),
        `${c.prefix} ${c.desc} ${c.legal}`.toUpperCase(),
        ` ${c.prefix}  ${c.desc}  ${c.legal} `,
      ]);
    }
    case 'domain':
      return standardized
        ? `${base}.com`
        : pick(r, [`https://www.${base}.com/`, `${base}.com`.toUpperCase(), `www.${base}.com`]);
    case 'country':
      return standardized ? COUNTRY_STD[c.country] : pick(r, COUNTRY_BAD[COUNTRY_STD[c.country]]);
    case 'industry':
      return standardized ? INDUSTRY_STD[c.industry] : pick(r, INDUSTRY_BAD[INDUSTRY_STD[c.industry]]);
    case 'region':
      return standardized ? REGION_STD[c.region] : pick(r, REGION_BAD[REGION_STD[c.region]]);
    case 'employees':
      return c.emp;
    case 'revenue':
      return c.rev;
    case 'phone': {
      const area = 400 + Math.floor(r() * 200);
      const line = 100 + Math.floor(r() * 800);
      if (standardized) return `+1 ${area}-555-0${line}`;
      return pick(r, [`(${area}) 555.0${line}`, `${area}5550${line}`, `${area}-555-0${line} x14`]);
    }
    case 'owner':
      return c.owner;
    case 'parent':
      return c.parent;
    default:
      return '';
  }
}

function generateRecord(r: Rand, i: number): AccountRecord {
  const q = 0.45 + r() * 0.55; // base record quality
  const source = pick(r, SOURCES);
  const timeframe = pick(r, TIMEFRAME_POOL);

  const ctx: Ctx = {
    prefix: pick(r, PREFIX),
    desc: pick(r, DESC),
    legal: pick(r, LEGAL),
    country: Math.floor(r() * COUNTRY_STD.length),
    industry: Math.floor(r() * INDUSTRY_STD.length),
    region: Math.floor(r() * REGION_STD.length),
    owner: pick(r, OWNERS),
    emp: pick(r, EMP),
    rev: pick(r, REV),
    parent: `${pick(r, PREFIX)} ${pick(r, DESC)} Holdings`,
  };

  const stdBase = STD_BASE[source];
  const accBase = ACC_BASE[timeframe];
  const cells: Record<string, Cell> = {};

  for (const f of FIELDS) {
    const tierPop = f.tier === 'core' ? 0.2 : f.tier === 'supporting' ? 0.04 : -0.14;
    const pPop = clamp(q + tierPop + (r() - 0.5) * 0.22, 0.03, 0.99);
    const populated = r() < pPop;

    let standardized = false;
    let accurate = false;
    if (populated) {
      standardized = !f.dimensions.includes('standardization')
        ? true
        : r() < clamp(stdBase + (q - 0.7) * 0.35 + (r() - 0.5) * 0.24, 0.04, 0.98);
      accurate = !f.dimensions.includes('accuracy')
        ? true
        : r() < clamp(accBase + (q - 0.7) * 0.28 + (r() - 0.5) * 0.24, 0.04, 0.98);
    }

    cells[f.key] = {
      value: populated ? makeValue(f.key, standardized, ctx, r) : '',
      populated,
      standardized,
      accurate,
    };
  }

  return {
    id: `rec-${i}`,
    name: `${ctx.prefix} ${ctx.desc}, ${ctx.legal}`,
    source,
    timeframe,
    cells,
  };
}

export function generateDataset(seed: number, count = 60): AccountRecord[] {
  const r = mulberry32(seed);
  return Array.from({ length: count }, (_, i) => generateRecord(r, i));
}

// Deterministic first load (no hydration mismatch); refresh picks a live seed.
export const INITIAL_SEED = 20260520;
export const randomSeed = () => Math.floor(Math.random() * 1e9) + 1;
