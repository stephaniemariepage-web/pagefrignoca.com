import { useMemo, useState } from 'react';
import {
  CLASS_COLOR,
  CLASS_ORDER,
  FIELDS,
  FLOOR,
  SOURCES,
  TIMEFRAMES,
  type AccountRecord,
  type ReadinessClass,
} from '../scorecard/model';
import { generateDataset, INITIAL_SEED, randomSeed } from '../scorecard/generate';
import { rollup, scoreRecord, type RecordScore, type Rollup } from '../scorecard/score';

const OK = '#4fd1a5';
const BAD = '#ec6a4d';
const WARN = '#e0894b';

// Hover definitions, baselined from Stephanie's Mica CAP info-icon copy.
const DEF = {
  completeness:
    'Completeness checks whether the required fields have usable values. A complete field is populated, but that does not mean it is standardized or accurate.',
  standardization:
    'Standardization checks whether populated values follow approved formats and categories. A standardized value is consistently structured, but it still may not be accurate.',
  accuracy:
    'Accuracy checks whether populated values can be trusted. A value can be complete and standardized and still be wrong if it conflicts with better evidence.',
  tier:
    'Field tiering classifies fields by business importance so critical attributes carry more weight than nice-to-have metadata. Core fields carry the most weight, Supplemental the least.',
  composite:
    'The plain average of the three dimension scores. It is the single number most data quality tools report, and the one a weak dimension can hide behind two strong ones.',
  gated:
    'Each dimension must clear a floor on its own. A weak critical dimension caps the final result, so a strong average cannot override it. The record is classed by its weakest dimension.',
  gateCaught:
    'A record a composite score would call ready, that gated readiness flags as not ready, because one dimension fell below the floor.',
  source:
    'Groups records by the channel or process that created them, to identify which sources produce reliable records and which introduce risk.',
  timeframe:
    'Groups records by when they were created, which separates older legacy data debt from the quality of current processes.',
  distribution:
    'Records grouped into five readiness classes by their final, gated score: Ready, Near Ready, Partially Ready, Low Readiness, and Not Ready.',
};

interface Scored {
  rec: AccountRecord;
  score: RecordScore;
}

/* ---------- small pieces ---------- */

function InfoTip({ text }: { text: string }) {
  return (
    <span className="group/tip relative inline-flex align-middle">
      <button
        type="button"
        aria-label="Definition"
        className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-line text-[10px] font-semibold leading-none text-muted transition hover:border-accent hover:text-accent"
      >
        i
      </button>
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 w-64 -translate-x-1/2 rounded-lg border border-line bg-elevated p-3 text-xs font-normal leading-relaxed text-muted opacity-0 shadow-xl transition-opacity duration-150 group-hover/tip:opacity-100 group-focus-within/tip:opacity-100"
      >
        {text}
      </span>
    </span>
  );
}

function Term({ children, tip }: { children: React.ReactNode; tip: string }) {
  return (
    <span className="inline-flex items-center gap-1">
      {children}
      <InfoTip text={tip} />
    </span>
  );
}

function DimBar({ label, value }: { label: string; value: number }) {
  const color = value >= FLOOR ? OK : BAD;
  return (
    <div className="min-w-0">
      <div className="flex items-baseline justify-between gap-1">
        <span className="text-[11px] uppercase tracking-wide text-muted">{label}</span>
        <span className="text-xs font-semibold" style={{ color }}>{value}</span>
      </div>
      <div className="relative mt-1 h-1.5 rounded-full bg-white/[0.07]">
        <div className="h-full rounded-full" style={{ width: `${value}%`, background: color }} />
        <div
          className="absolute -top-0.5 -bottom-0.5 w-px bg-white/35"
          style={{ left: `${FLOOR}%` }}
        />
      </div>
    </div>
  );
}

function ClassBadge({ cls }: { cls: ReadinessClass }) {
  const color = CLASS_COLOR[cls];
  return (
    <span
      className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold"
      style={{ color, background: `${color}1a`, border: `1px solid ${color}40` }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
      {cls}
    </span>
  );
}

function Flag({ ok, label }: { ok: boolean; label: string }) {
  const color = ok ? OK : BAD;
  return (
    <span
      className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[11px] font-medium"
      style={{ color, background: `${color}1a` }}
    >
      {label} {ok ? '✓' : '✕'}
    </span>
  );
}

function FieldDetail({ rec }: { rec: AccountRecord }) {
  return (
    <div className="border-t border-line px-4 pb-4 pt-3">
      <p className="mb-2 text-[11px] uppercase tracking-[0.15em] text-muted">Field breakdown</p>
      <div className="grid gap-1.5">
        {FIELDS.map((f) => {
          const cell = rec.cells[f.key];
          return (
            <div
              key={f.key}
              className="flex items-center gap-3 rounded-lg bg-bg px-3 py-2 text-sm"
            >
              <span className="w-32 shrink-0 text-muted">{f.label}</span>
              <span className="shrink-0 rounded border border-line px-1.5 py-px text-[10px] uppercase tracking-wide text-muted">
                {f.tier}
              </span>
              <span className="min-w-0 flex-1 truncate">
                {cell.populated ? (
                  <span className="font-mono text-[13px]">{cell.value}</span>
                ) : (
                  <span style={{ color: BAD }}>Missing</span>
                )}
              </span>
              <span className="flex shrink-0 gap-1.5">
                {f.dimensions.includes('standardization') && cell.populated && (
                  <Flag ok={cell.standardized} label="Std" />
                )}
                {f.dimensions.includes('accuracy') && cell.populated && (
                  <Flag ok={cell.accurate} label="Acc" />
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function RecordRow({
  rec,
  score,
  open,
  onToggle,
}: {
  rec: AccountRecord;
  score: RecordScore;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-xl border border-line bg-surface">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start gap-3 p-4 text-left transition hover:bg-elevated"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="mt-1 shrink-0 text-muted transition-transform"
          style={{ transform: open ? 'rotate(90deg)' : 'none' }}
        >
          <path d="m6 4 4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold">{rec.name}</span>
            {score.gateCaught && (
              <span
                className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] font-medium"
                style={{ color: WARN, background: `${WARN}1a`, border: `1px solid ${WARN}40` }}
                title="A composite score would call this record ready. It failed the gate."
              >
                Gate caught
              </span>
            )}
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-muted">
            <span>{rec.source}</span>
            <span aria-hidden="true">·</span>
            <span>{rec.timeframe}</span>
          </div>
          <div className="mt-3 grid max-w-md grid-cols-3 gap-3">
            <DimBar label="Compl." value={score.completeness} />
            <DimBar label="Std." value={score.standardization} />
            <DimBar label="Acc." value={score.accuracy} />
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-2">
          <ClassBadge cls={score.readinessClass} />
          <span className="text-xs text-muted">composite {score.composite}</span>
        </div>
      </button>
      {open && <FieldDetail rec={rec} />}
    </div>
  );
}

function Select({
  label,
  tip,
  value,
  options,
  onChange,
}: {
  label: string;
  tip?: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1 text-xs text-muted">
      <span className="flex items-center gap-1">
        {label}
        {tip && <InfoTip text={tip} />}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-line bg-bg px-3 py-2 text-sm text-fg outline-none focus:border-accent"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o === 'all' ? 'All' : o}
          </option>
        ))}
      </select>
    </label>
  );
}

function DistributionBar({ roll }: { roll: Rollup }) {
  const total = roll.total || 1;
  return (
    <div>
      <p className="mb-2 flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
        Readiness distribution
        <InfoTip text={DEF.distribution} />
      </p>
      <div className="flex h-3 overflow-hidden rounded-full bg-white/[0.05]">
        {CLASS_ORDER.map((cls) => {
          const n = roll.distribution[cls];
          if (!n) return null;
          return (
            <div
              key={cls}
              style={{ width: `${(n / total) * 100}%`, background: CLASS_COLOR[cls] }}
            />
          );
        })}
      </div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
        {CLASS_ORDER.map((cls) => (
          <span key={cls} className="flex items-center gap-1.5 text-xs text-muted">
            <span className="h-2 w-2 rounded-full" style={{ background: CLASS_COLOR[cls] }} />
            {cls} <span className="font-semibold text-fg">{roll.distribution[cls]}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- main island ---------- */

export default function Scorecard() {
  const [seed, setSeed] = useState(INITIAL_SEED);
  const [source, setSource] = useState('all');
  const [timeframe, setTimeframe] = useState('all');
  const [onlyCaught, setOnlyCaught] = useState(false);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const records = useMemo(() => generateDataset(seed), [seed]);
  const scored = useMemo<Scored[]>(
    () => records.map((rec) => ({ rec, score: scoreRecord(rec) })),
    [records],
  );

  const filtered = useMemo(() => {
    const f = scored.filter(
      ({ rec, score }) =>
        (source === 'all' || rec.source === source) &&
        (timeframe === 'all' || rec.timeframe === timeframe) &&
        (!onlyCaught || score.gateCaught),
    );
    return f.sort((a, b) => {
      if (a.score.gateCaught !== b.score.gateCaught) return a.score.gateCaught ? -1 : 1;
      return b.score.composite - a.score.composite;
    });
  }, [scored, source, timeframe, onlyCaught]);

  const roll = useMemo(() => rollup(filtered.map((s) => s.score)), [filtered]);

  const refresh = () => {
    setSeed(randomSeed());
    setExpanded(new Set());
  };
  const resetFilters = () => {
    setSource('all');
    setTimeframe('all');
    setOnlyCaught(false);
  };
  const toggle = (id: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const filtersOn = source !== 'all' || timeframe !== 'all' || onlyCaught;

  return (
    <div className="mt-10">
      {/* controls */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted">
          {records.length} synthetic records · a fresh set on every refresh · scored entirely in your browser
        </p>
        <button
          type="button"
          onClick={refresh}
          className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-semibold text-fg transition hover:border-accent hover:text-accent"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M13 8a5 5 0 1 1-1.5-3.6M13 2v3h-3"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Refresh sample
        </button>
      </div>

      {/* dimensions key */}
      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-line bg-surface px-4 py-3 text-sm">
        <span className="text-muted">Scored on three dimensions:</span>
        <span className="font-medium"><Term tip={DEF.completeness}>Completeness</Term></span>
        <span className="text-muted/40" aria-hidden="true">·</span>
        <span className="font-medium"><Term tip={DEF.standardization}>Standardization</Term></span>
        <span className="text-muted/40" aria-hidden="true">·</span>
        <span className="font-medium"><Term tip={DEF.accuracy}>Accuracy</Term></span>
        <span className="text-muted">weighted by</span>
        <span className="font-medium"><Term tip={DEF.tier}>field tier</Term></span>
      </div>

      {/* rollup */}
      <div className="mt-5 rounded-2xl border border-line bg-surface p-6 sm:p-8">
        {roll.total === 0 ? (
          <p className="text-muted">No records match these filters.</p>
        ) : (
          <>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-md">
                <p className="flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                  <Term tip={DEF.gated}>Gated readiness</Term>
                </p>
                <p className="mt-3 text-lg leading-relaxed">
                  A <Term tip={DEF.composite}>composite score</Term> calls{' '}
                  <strong className="font-semibold text-fg">{roll.readyByComposite}</strong> of{' '}
                  {roll.total} records ready. Gated readiness calls{' '}
                  <strong className="font-semibold text-fg">{roll.readyByGate}</strong> ready.
                </p>
                <p className="mt-2 text-sm text-muted">
                  Average composite score: {roll.avgComposite}. The gap is records that look
                  ready and are not.
                </p>
              </div>
              <div
                className="shrink-0 rounded-xl p-4 text-center sm:w-52"
                style={{ background: `${WARN}12`, border: `1px solid ${WARN}40` }}
              >
                <div className="text-4xl font-bold" style={{ color: WARN }}>
                  {roll.gateCaught}
                </div>
                <div className="mt-1 flex items-center justify-center gap-1 text-sm text-muted">
                  <Term tip={DEF.gateCaught}>
                    {roll.gateCaught === 1 ? 'record looks' : 'records look'} ready and{' '}
                    {roll.gateCaught === 1 ? 'is' : 'are'} not
                  </Term>
                </div>
              </div>
            </div>
            <div className="mt-6 border-t border-line pt-5">
              <DistributionBar roll={roll} />
            </div>
          </>
        )}
      </div>

      {/* filters */}
      <div className="mt-6 flex flex-wrap items-end gap-3">
        <Select
          label="Source"
          tip={DEF.source}
          value={source}
          options={['all', ...SOURCES]}
          onChange={setSource}
        />
        <Select
          label="Created"
          tip={DEF.timeframe}
          value={timeframe}
          options={['all', ...TIMEFRAMES]}
          onChange={setTimeframe}
        />
        <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-line bg-bg px-3 py-2 text-sm text-fg">
          <input
            type="checkbox"
            checked={onlyCaught}
            onChange={(e) => setOnlyCaught(e.target.checked)}
            className="accent-accent"
          />
          Only gate-caught
        </label>
        {filtersOn && (
          <button
            type="button"
            onClick={resetFilters}
            className="px-2 py-2 text-sm font-medium text-accent transition hover:brightness-110"
          >
            Reset
          </button>
        )}
      </div>

      {/* records */}
      <p className="mt-6 text-sm text-muted">
        Showing {filtered.length} {filtered.length === 1 ? 'record' : 'records'}. Gate-caught
        records sort to the top. Click any record for its field breakdown.
      </p>
      <div className="mt-3 space-y-2.5">
        {filtered.map(({ rec, score }) => (
          <RecordRow
            key={rec.id}
            rec={rec}
            score={score}
            open={expanded.has(rec.id)}
            onToggle={() => toggle(rec.id)}
          />
        ))}
      </div>
    </div>
  );
}
