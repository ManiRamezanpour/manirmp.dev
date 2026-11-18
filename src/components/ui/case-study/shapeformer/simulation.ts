// Constants mirrored from the firmware (scale.ino / Motor.ino)
export const CAL_TEMP_C = 25.0;
export const TEMP_COEFF = 0.0002;
export const STEPS_PER_MOVE = 200;

export const TRUE_WEIGHT_G = 500;
export const MAX_SAMPLES = 48;
const NOISE_G = 0.12;

export type Phase = 'measure' | 'forward' | 'backward';
export const phases: Array<Phase> = ['measure', 'forward', 'backward'];

export interface Sample {
  raw: number;
  comp: number;
}

// Same formula as compensateWeight() in the firmware
export const compensate = (raw: number, tempC: number) =>
  raw / (1.0 + TEMP_COEFF * (tempC - CAL_TEMP_C));

// A strain gauge that drifts with temperature, plus a little noise
export const readRaw = (tempC: number) =>
  TRUE_WEIGHT_G * (1.0 + TEMP_COEFF * (tempC - CAL_TEMP_C)) +
  (Math.random() * 2 - 1) * NOISE_G;

export const formatReading = (tempC: number, s: Sample) =>
  `Temp: ${tempC.toFixed(2)} C, Weight raw: ${s.raw.toFixed(2)} g, ` +
  `Weight compensated: ${s.comp.toFixed(2)} g`;

export const toPath = (
  values: Array<number>,
  min: number,
  max: number,
  w: number,
  h: number,
) => {
  if (values.length < 2) return '';
  const step = w / (MAX_SAMPLES - 1);
  const offset = (MAX_SAMPLES - values.length) * step;
  return values
    .map((v, i) => {
      const x = offset + i * step;
      const y = h - ((v - min) / (max - min)) * h;
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
};
