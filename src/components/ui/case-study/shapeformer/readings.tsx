import cx from '@/utils/cx';

import { type Sample, toPath, TRUE_WEIGHT_G } from './simulation';

const W = 320;
const H = 120;
const CHART_MIN = TRUE_WEIGHT_G - 1;
const CHART_MAX = TRUE_WEIGHT_G + 5;

interface ReadingsProps {
  samples: Array<Sample>;
  tempC: number;
  onTempChange: (tempC: number) => void;
}

export const Readings = ({ samples, tempC, onTempChange }: ReadingsProps) => {
  const last = samples.at(-1);
  const drift = last ? last.raw - last.comp : 0;
  const referenceY =
    H - ((TRUE_WEIGHT_G - CHART_MIN) / (CHART_MAX - CHART_MIN)) * H;
  const stats = [
    { label: 'Temp', value: `${tempC.toFixed(1)} °C`, accent: false },
    {
      label: 'Raw',
      value: last ? `${last.raw.toFixed(2)} g` : '—',
      accent: false,
    },
    {
      label: 'Compensated',
      value: last ? `${last.comp.toFixed(2)} g` : '—',
      accent: true,
    },
  ];

  return (
    <div
      className={
        'flex flex-col gap-3 rounded-3 bg-background p-3 ring-1 ring-inset ring-divider'
      }
    >
      <dl className={'grid grid-cols-3 gap-2'}>
        {stats.map((it) => (
          <div key={it.label} className={'flex flex-col gap-0.5'}>
            <dt className={'text-3xs text-tertiary-txt'}>{it.label}</dt>
            <dd
              className={cx(
                'm-0 text-xs font-semibold tabular-nums',
                it.accent ? 'text-[rgb(var(--tint))]' : 'text-primary-txt',
              )}
            >
              {it.value}
            </dd>
          </div>
        ))}
      </dl>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className={'w-full h-32 overflow-visible'}
        role={'img'}
        aria-label={`Weight readings. Raw drifts ${drift.toFixed(2)} g from the compensated value.`}
      >
        <line
          x1={0}
          x2={W}
          y1={referenceY}
          y2={referenceY}
          className={'stroke-divider'}
          strokeDasharray={'3 4'}
        />
        <text
          x={W}
          y={referenceY - 4}
          textAnchor={'end'}
          className={'fill-tertiary-txt text-[9px]'}
        >
          {TRUE_WEIGHT_G} g reference
        </text>
        <path
          d={toPath(
            samples.map((s) => s.raw),
            CHART_MIN,
            CHART_MAX,
            W,
            H,
          )}
          fill={'none'}
          className={'stroke-tertiary-txt'}
          strokeWidth={1.5}
          strokeLinejoin={'round'}
        />
        <path
          d={toPath(
            samples.map((s) => s.comp),
            CHART_MIN,
            CHART_MAX,
            W,
            H,
          )}
          fill={'none'}
          stroke={'rgb(var(--tint))'}
          strokeWidth={2}
          strokeLinejoin={'round'}
        />
        {samples.length === 0 ? (
          <text
            x={W / 2}
            y={H / 2}
            textAnchor={'middle'}
            className={'fill-tertiary-txt text-[11px]'}
          >
            Start a cycle to stream readings
          </text>
        ) : null}
      </svg>

      <div
        className={'flex flex-wrap gap-x-4 gap-y-1 text-3xs text-secondary-txt'}
      >
        <span className={'flex items-center gap-1.5'}>
          <span className={'h-0.5 w-3 rounded-full bg-tertiary-txt'} />
          Raw reading
        </span>
        <span className={'flex items-center gap-1.5'}>
          <span className={'h-0.5 w-3 rounded-full bg-[rgb(var(--tint))]'} />
          Temperature-compensated
        </span>
      </div>

      <label className={'flex flex-col gap-1.5'}>
        <span
          className={
            'flex justify-between text-3xs text-secondary-txt tabular-nums'
          }
        >
          <span>Heat the rig</span>
          <span>
            drift {drift >= 0 ? '+' : ''}
            {drift.toFixed(2)} g
          </span>
        </span>
        <input
          type={'range'}
          min={15}
          max={50}
          step={0.5}
          value={tempC}
          onChange={(e) => onTempChange(Number(e.target.value))}
          className={'w-full accent-[rgb(var(--tint))]'}
          aria-label={'Rig temperature in degrees Celsius'}
        />
      </label>
    </div>
  );
};
