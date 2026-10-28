export const skyVert = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`

export const skyFrag = /* glsl */ `
precision highp float;
uniform float uTime;
uniform float uScroll;
uniform float uLow;
varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p *= 2.03;
    a *= 0.5;
  }
  return v;
}

void skyPalette(float t, out vec3 zenith, out vec3 horizon) {
  vec3 noonZ = vec3(0.33, 0.60, 0.88);
  vec3 noonH = vec3(0.80, 0.91, 0.97);
  vec3 goldZ = vec3(0.62, 0.32, 0.28);
  vec3 goldH = vec3(1.00, 0.74, 0.34);
  vec3 setZ  = vec3(0.28, 0.07, 0.16);
  vec3 setH  = vec3(0.95, 0.30, 0.10);
  vec3 twiZ  = vec3(0.10, 0.06, 0.20);
  vec3 twiH  = vec3(0.45, 0.20, 0.40);
  vec3 nitZ  = vec3(0.035, 0.05, 0.10);
  vec3 nitH  = vec3(0.086, 0.129, 0.247);

  if (t < 0.22) {
    float k = smoothstep(0.0, 0.22, t);
    zenith = mix(noonZ, goldZ, k);
    horizon = mix(noonH, goldH, k);
  } else if (t < 0.48) {
    float k = smoothstep(0.22, 0.48, t);
    zenith = mix(goldZ, setZ, k);
    horizon = mix(goldH, setH, k);
  } else if (t < 0.70) {
    float k = smoothstep(0.48, 0.70, t);
    zenith = mix(setZ, twiZ, k);
    horizon = mix(setH, twiH, k);
  } else {
    float k = smoothstep(0.70, 1.0, t);
    zenith = mix(twiZ, nitZ, k);
    horizon = mix(twiH, nitH, k);
  }
}

void main() {
  vec2 uv = vUv;
  float t = clamp(uScroll, 0.0, 1.0);
  float horizon = 0.40;
  vec3 zenith;
  vec3 horiz;
  skyPalette(t, zenith, horiz);

  float h = clamp((uv.y - horizon) / (1.0 - horizon), 0.0, 1.0);
  vec3 sky = mix(horiz, zenith, pow(h, 0.75));

  if (uLow < 0.5) {
    float cloud = fbm(vec2(uv.x * 3.0 + uTime * 0.02, uv.y * 6.0));
    float cloudMask = smoothstep(horizon + 0.04, 0.85, uv.y) * (1.0 - t);
    sky += vec3(1.0, 0.95, 0.9) * (cloud - 0.45) * 0.18 * cloudMask;
  }

  float sunY = mix(0.78, 0.28, smoothstep(0.0, 0.62, t));
  sunY = mix(sunY, 0.18, smoothstep(0.62, 1.0, t));
  float sunX = 0.62 + sin(t * 2.2) * 0.04;
  vec2 sunPos = vec2(sunX, sunY);
  float sunDist = length((uv - sunPos) * vec2(1.0, 1.35));
  vec3 sunCol = mix(vec3(1.0, 0.96, 0.82), vec3(1.0, 0.45, 0.12), smoothstep(0.15, 0.6, t));
  float disc = smoothstep(0.055, 0.03, sunDist);
  float glow = exp(-sunDist * mix(6.0, 3.2, t)) * mix(0.55, 1.15, smoothstep(0.2, 0.55, t));
  float above = smoothstep(horizon - 0.02, horizon + 0.02, sunY);
  sky += sunCol * (disc * 1.4 + glow) * above;

  if (t > 0.62 && uLow < 0.5) {
    float star = step(0.9955, hash(floor(uv * vec2(220.0, 140.0))));
    float twinkle = 0.6 + 0.4 * sin(uTime * 2.0 + hash(floor(uv * 80.0)) * 20.0);
    sky += star * twinkle * smoothstep(0.62, 0.88, t);
  }

  if (t > 0.72) {
    vec2 moon = vec2(0.22, 0.78);
    float md = length((uv - moon) * vec2(1.0, 1.2));
    sky += vec3(0.85, 0.9, 1.0) * smoothstep(0.03, 0.012, md) * smoothstep(0.72, 0.9, t);
  }

  float waterY = 1.0 - (horizon - uv.y) / horizon;
  if (uv.y < horizon) {
    float waves = sin((uv.x * 40.0 + uTime * 0.6) + noise(vec2(uv.x * 8.0, uTime * 0.15)) * 3.0);
    float yWave = uv.y + waves * 0.008;
    float reflY = horizon * 2.0 - yWave;
    vec2 ruv = vec2(uv.x, reflY);
    float rh = clamp((ruv.y - horizon) / (1.0 - horizon), 0.0, 1.0);
    vec3 refl = mix(horiz, zenith, pow(rh, 0.75));
    float sunR = length((ruv - sunPos) * vec2(1.0, 1.35));
    refl += sunCol * exp(-sunR * 4.0) * 0.8 * above;
    vec3 water = mix(vec3(0.03, 0.06, 0.12), refl, 0.55);
    water *= 0.72;
    float foam = smoothstep(0.012, 0.0, abs(uv.y - horizon + waves * 0.004));
    water = mix(water, mix(horiz, vec3(0.95, 0.9, 0.8), 0.35), foam * 0.65);
    float depth = smoothstep(horizon, 0.0, uv.y);
    water = mix(water, vec3(0.02, 0.04, 0.08), depth * 0.45);
    sky = water;
  }

  float vig = smoothstep(1.15, 0.35, length((uv - 0.5) * vec2(1.1, 1.0)));
  sky *= mix(0.82, 1.0, vig);

  gl_FragColor = vec4(sky, 1.0);
}
`
