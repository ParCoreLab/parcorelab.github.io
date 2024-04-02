/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/d3-color@3.1.0/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function t(t, e, i) {
  (t.prototype = e.prototype = i), (i.constructor = t);
}
function e(t, e) {
  var i = Object.create(t.prototype);
  for (var n in e) i[n] = e[n];
  return i;
}
function i() {}
var n = 0.7,
  r = 1 / n,
  a = "\\s*([+-]?\\d+)\\s*",
  s = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  h = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  o = /^#([0-9a-f]{3,8})$/,
  l = new RegExp(`^rgb\\(${a},${a},${a}\\)$`),
  u = new RegExp(`^rgb\\(${h},${h},${h}\\)$`),
  c = new RegExp(`^rgba\\(${a},${a},${a},${s}\\)$`),
  g = new RegExp(`^rgba\\(${h},${h},${h},${s}\\)$`),
  p = new RegExp(`^hsl\\(${s},${h},${h}\\)$`),
  b = new RegExp(`^hsla\\(${s},${h},${h},${s}\\)$`),
  d = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
function f() {
  return this.rgb().formatHex();
}
function w() {
  return this.rgb().formatRgb();
}
function y(t) {
  var e, i;
  return (
    (t = (t + "").trim().toLowerCase()),
    (e = o.exec(t))
      ? ((i = e[1].length),
        (e = parseInt(e[1], 16)),
        6 === i
          ? m(e)
          : 3 === i
          ? new M(
              ((e >> 8) & 15) | ((e >> 4) & 240),
              ((e >> 4) & 15) | (240 & e),
              ((15 & e) << 4) | (15 & e),
              1,
            )
          : 8 === i
          ? $((e >> 24) & 255, (e >> 16) & 255, (e >> 8) & 255, (255 & e) / 255)
          : 4 === i
          ? $(
              ((e >> 12) & 15) | ((e >> 8) & 240),
              ((e >> 8) & 15) | ((e >> 4) & 240),
              ((e >> 4) & 15) | (240 & e),
              (((15 & e) << 4) | (15 & e)) / 255,
            )
          : null)
      : (e = l.exec(t))
      ? new M(e[1], e[2], e[3], 1)
      : (e = u.exec(t))
      ? new M((255 * e[1]) / 100, (255 * e[2]) / 100, (255 * e[3]) / 100, 1)
      : (e = c.exec(t))
      ? $(e[1], e[2], e[3], e[4])
      : (e = g.exec(t))
      ? $((255 * e[1]) / 100, (255 * e[2]) / 100, (255 * e[3]) / 100, e[4])
      : (e = p.exec(t))
      ? E(e[1], e[2] / 100, e[3] / 100, 1)
      : (e = b.exec(t))
      ? E(e[1], e[2] / 100, e[3] / 100, e[4])
      : d.hasOwnProperty(t)
      ? m(d[t])
      : "transparent" === t
      ? new M(NaN, NaN, NaN, 0)
      : null
  );
}
function m(t) {
  return new M((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
}
function $(t, e, i, n) {
  return n <= 0 && (t = e = i = NaN), new M(t, e, i, n);
}
function N(t) {
  return (
    t instanceof i || (t = y(t)),
    t ? new M((t = t.rgb()).r, t.g, t.b, t.opacity) : new M()
  );
}
function k(t, e, i, n) {
  return 1 === arguments.length ? N(t) : new M(t, e, i, null == n ? 1 : n);
}
function M(t, e, i, n) {
  (this.r = +t), (this.g = +e), (this.b = +i), (this.opacity = +n);
}
function v() {
  return `#${R(this.r)}${R(this.g)}${R(this.b)}`;
}
function x() {
  const t = q(this.opacity);
  return `${1 === t ? "rgb(" : "rgba("}${H(this.r)}, ${H(this.g)}, ${H(
    this.b,
  )}${1 === t ? ")" : `, ${t})`}`;
}
function q(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function H(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function R(t) {
  return ((t = H(t)) < 16 ? "0" : "") + t.toString(16);
}
function E(t, e, i, n) {
  return (
    n <= 0
      ? (t = e = i = NaN)
      : i <= 0 || i >= 1
      ? (t = e = NaN)
      : e <= 0 && (t = NaN),
    new O(t, e, i, n)
  );
}
function j(t) {
  if (t instanceof O) return new O(t.h, t.s, t.l, t.opacity);
  if ((t instanceof i || (t = y(t)), !t)) return new O();
  if (t instanceof O) return t;
  var e = (t = t.rgb()).r / 255,
    n = t.g / 255,
    r = t.b / 255,
    a = Math.min(e, n, r),
    s = Math.max(e, n, r),
    h = NaN,
    o = s - a,
    l = (s + a) / 2;
  return (
    o
      ? ((h =
          e === s
            ? (n - r) / o + 6 * (n < r)
            : n === s
            ? (r - e) / o + 2
            : (e - n) / o + 4),
        (o /= l < 0.5 ? s + a : 2 - s - a),
        (h *= 60))
      : (o = l > 0 && l < 1 ? 0 : h),
    new O(h, o, l, t.opacity)
  );
}
function I(t, e, i, n) {
  return 1 === arguments.length ? j(t) : new O(t, e, i, null == n ? 1 : n);
}
function O(t, e, i, n) {
  (this.h = +t), (this.s = +e), (this.l = +i), (this.opacity = +n);
}
function P(t) {
  return (t = (t || 0) % 360) < 0 ? t + 360 : t;
}
function S(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function z(t, e, i) {
  return (
    255 *
    (t < 60
      ? e + ((i - e) * t) / 60
      : t < 180
      ? i
      : t < 240
      ? e + ((i - e) * (240 - t)) / 60
      : e)
  );
}
t(i, y, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: f,
  formatHex: f,
  formatHex8: function () {
    return this.rgb().formatHex8();
  },
  formatHsl: function () {
    return j(this).formatHsl();
  },
  formatRgb: w,
  toString: w,
}),
  t(
    M,
    k,
    e(i, {
      brighter(t) {
        return (
          (t = null == t ? r : Math.pow(r, t)),
          new M(this.r * t, this.g * t, this.b * t, this.opacity)
        );
      },
      darker(t) {
        return (
          (t = null == t ? n : Math.pow(n, t)),
          new M(this.r * t, this.g * t, this.b * t, this.opacity)
        );
      },
      rgb() {
        return this;
      },
      clamp() {
        return new M(H(this.r), H(this.g), H(this.b), q(this.opacity));
      },
      displayable() {
        return (
          -0.5 <= this.r &&
          this.r < 255.5 &&
          -0.5 <= this.g &&
          this.g < 255.5 &&
          -0.5 <= this.b &&
          this.b < 255.5 &&
          0 <= this.opacity &&
          this.opacity <= 1
        );
      },
      hex: v,
      formatHex: v,
      formatHex8: function () {
        return `#${R(this.r)}${R(this.g)}${R(this.b)}${R(
          255 * (isNaN(this.opacity) ? 1 : this.opacity),
        )}`;
      },
      formatRgb: x,
      toString: x,
    }),
  ),
  t(
    O,
    I,
    e(i, {
      brighter(t) {
        return (
          (t = null == t ? r : Math.pow(r, t)),
          new O(this.h, this.s, this.l * t, this.opacity)
        );
      },
      darker(t) {
        return (
          (t = null == t ? n : Math.pow(n, t)),
          new O(this.h, this.s, this.l * t, this.opacity)
        );
      },
      rgb() {
        var t = (this.h % 360) + 360 * (this.h < 0),
          e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
          i = this.l,
          n = i + (i < 0.5 ? i : 1 - i) * e,
          r = 2 * i - n;
        return new M(
          z(t >= 240 ? t - 240 : t + 120, r, n),
          z(t, r, n),
          z(t < 120 ? t + 240 : t - 120, r, n),
          this.opacity,
        );
      },
      clamp() {
        return new O(P(this.h), S(this.s), S(this.l), q(this.opacity));
      },
      displayable() {
        return (
          ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
          0 <= this.l &&
          this.l <= 1 &&
          0 <= this.opacity &&
          this.opacity <= 1
        );
      },
      formatHsl() {
        const t = q(this.opacity);
        return `${1 === t ? "hsl(" : "hsla("}${P(this.h)}, ${
          100 * S(this.s)
        }%, ${100 * S(this.l)}%${1 === t ? ")" : `, ${t})`}`;
      },
    }),
  );
const C = Math.PI / 180,
  L = 180 / Math.PI,
  A = 0.96422,
  B = 1,
  D = 0.82521,
  F = 4 / 29,
  G = 6 / 29,
  J = 3 * G * G,
  K = G * G * G;
function Q(t) {
  if (t instanceof V) return new V(t.l, t.a, t.b, t.opacity);
  if (t instanceof it) return nt(t);
  t instanceof M || (t = N(t));
  var e,
    i,
    n = Z(t.r),
    r = Z(t.g),
    a = Z(t.b),
    s = W((0.2225045 * n + 0.7168786 * r + 0.0606169 * a) / B);
  return (
    n === r && r === a
      ? (e = i = s)
      : ((e = W((0.4360747 * n + 0.3850649 * r + 0.1430804 * a) / A)),
        (i = W((0.0139322 * n + 0.0971045 * r + 0.7141733 * a) / D))),
    new V(116 * s - 16, 500 * (e - s), 200 * (s - i), t.opacity)
  );
}
function T(t, e) {
  return new V(t, 0, 0, null == e ? 1 : e);
}
function U(t, e, i, n) {
  return 1 === arguments.length ? Q(t) : new V(t, e, i, null == n ? 1 : n);
}
function V(t, e, i, n) {
  (this.l = +t), (this.a = +e), (this.b = +i), (this.opacity = +n);
}
function W(t) {
  return t > K ? Math.pow(t, 1 / 3) : t / J + F;
}
function X(t) {
  return t > G ? t * t * t : J * (t - F);
}
function Y(t) {
  return (
    255 * (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055)
  );
}
function Z(t) {
  return (t /= 255) <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
}
function _(t) {
  if (t instanceof it) return new it(t.h, t.c, t.l, t.opacity);
  if ((t instanceof V || (t = Q(t)), 0 === t.a && 0 === t.b))
    return new it(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
  var e = Math.atan2(t.b, t.a) * L;
  return new it(
    e < 0 ? e + 360 : e,
    Math.sqrt(t.a * t.a + t.b * t.b),
    t.l,
    t.opacity,
  );
}
function tt(t, e, i, n) {
  return 1 === arguments.length ? _(t) : new it(i, e, t, null == n ? 1 : n);
}
function et(t, e, i, n) {
  return 1 === arguments.length ? _(t) : new it(t, e, i, null == n ? 1 : n);
}
function it(t, e, i, n) {
  (this.h = +t), (this.c = +e), (this.l = +i), (this.opacity = +n);
}
function nt(t) {
  if (isNaN(t.h)) return new V(t.l, 0, 0, t.opacity);
  var e = t.h * C;
  return new V(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity);
}
t(
  V,
  U,
  e(i, {
    brighter(t) {
      return new V(
        this.l + 18 * (null == t ? 1 : t),
        this.a,
        this.b,
        this.opacity,
      );
    },
    darker(t) {
      return new V(
        this.l - 18 * (null == t ? 1 : t),
        this.a,
        this.b,
        this.opacity,
      );
    },
    rgb() {
      var t = (this.l + 16) / 116,
        e = isNaN(this.a) ? t : t + this.a / 500,
        i = isNaN(this.b) ? t : t - this.b / 200;
      return new M(
        Y(
          3.1338561 * (e = A * X(e)) -
            1.6168667 * (t = B * X(t)) -
            0.4906146 * (i = D * X(i)),
        ),
        Y(-0.9787684 * e + 1.9161415 * t + 0.033454 * i),
        Y(0.0719453 * e - 0.2289914 * t + 1.4052427 * i),
        this.opacity,
      );
    },
  }),
),
  t(
    it,
    et,
    e(i, {
      brighter(t) {
        return new it(
          this.h,
          this.c,
          this.l + 18 * (null == t ? 1 : t),
          this.opacity,
        );
      },
      darker(t) {
        return new it(
          this.h,
          this.c,
          this.l - 18 * (null == t ? 1 : t),
          this.opacity,
        );
      },
      rgb() {
        return nt(this).rgb();
      },
    }),
  );
var rt = -0.14861,
  at = 1.78277,
  st = -0.29227,
  ht = -0.90649,
  ot = 1.97294,
  lt = ot * ht,
  ut = ot * at,
  ct = at * st - ht * rt;
function gt(t, e, i, n) {
  return 1 === arguments.length
    ? (function (t) {
        if (t instanceof pt) return new pt(t.h, t.s, t.l, t.opacity);
        t instanceof M || (t = N(t));
        var e = t.r / 255,
          i = t.g / 255,
          n = t.b / 255,
          r = (ct * n + lt * e - ut * i) / (ct + lt - ut),
          a = n - r,
          s = (ot * (i - r) - st * a) / ht,
          h = Math.sqrt(s * s + a * a) / (ot * r * (1 - r)),
          o = h ? Math.atan2(s, a) * L - 120 : NaN;
        return new pt(o < 0 ? o + 360 : o, h, r, t.opacity);
      })(t)
    : new pt(t, e, i, null == n ? 1 : n);
}
function pt(t, e, i, n) {
  (this.h = +t), (this.s = +e), (this.l = +i), (this.opacity = +n);
}
t(
  pt,
  gt,
  e(i, {
    brighter(t) {
      return (
        (t = null == t ? r : Math.pow(r, t)),
        new pt(this.h, this.s, this.l * t, this.opacity)
      );
    },
    darker(t) {
      return (
        (t = null == t ? n : Math.pow(n, t)),
        new pt(this.h, this.s, this.l * t, this.opacity)
      );
    },
    rgb() {
      var t = isNaN(this.h) ? 0 : (this.h + 120) * C,
        e = +this.l,
        i = isNaN(this.s) ? 0 : this.s * e * (1 - e),
        n = Math.cos(t),
        r = Math.sin(t);
      return new M(
        255 * (e + i * (rt * n + at * r)),
        255 * (e + i * (st * n + ht * r)),
        255 * (e + i * (ot * n)),
        this.opacity,
      );
    },
  }),
);
export {
  y as color,
  gt as cubehelix,
  T as gray,
  et as hcl,
  I as hsl,
  U as lab,
  tt as lch,
  k as rgb,
};
export default null;
