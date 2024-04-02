/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@observablehq/plot@0.6.13/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import {
  ascending as t,
  descending as n,
  timeSecond as e,
  timeMinute as r,
  timeHour as o,
  timeDay as i,
  timeMonday as a,
  timeTuesday as l,
  timeWednesday as s,
  timeThursday as c,
  timeFriday as u,
  timeSaturday as f,
  timeSunday as h,
  timeWeek as d,
  timeMonth as p,
  timeYear as m,
  utcSecond as y,
  utcMinute as g,
  utcHour as v,
  unixDay as x,
  utcMonday as w,
  utcTuesday as b,
  utcWednesday as k,
  utcThursday as $,
  utcFriday as M,
  utcSaturday as L,
  utcSunday as A,
  utcWeek as E,
  utcMonth as z,
  utcYear as O,
  bisector as S,
  max as N,
  pairs as C,
  timeFormat as T,
  utcFormat as R,
  range as I,
  quantile as W,
  symbolAsterisk as j,
  symbolCircle as B,
  symbolCross as F,
  symbolDiamond as D,
  symbolDiamond2 as q,
  symbolPlus as _,
  symbolSquare as P,
  symbolSquare2 as V,
  symbolStar as Y,
  symbolTimes as U,
  symbolTriangle as H,
  symbolTriangle2 as X,
  symbolWye as G,
  randomLcg as Z,
  sort as J,
  group as K,
  rollup as Q,
  sum as tt,
  InternSet as nt,
  mode as et,
  variance as rt,
  median as ot,
  mean as at,
  maxIndex as lt,
  minIndex as st,
  min as ct,
  deviation as ut,
  rollups as ft,
  namespaces as ht,
  geoPath as dt,
  select as pt,
  creator as mt,
  geoTransform as yt,
  geoClipRectangle as gt,
  geoStream as vt,
  geoTransverseMercator as xt,
  geoStereographic as wt,
  geoOrthographic as bt,
  geoMercator as kt,
  geoGnomonic as $t,
  geoEquirectangular as Mt,
  geoEqualEarth as Lt,
  geoAzimuthalEquidistant as At,
  geoAzimuthalEqualArea as Et,
  geoAlbersUsa as zt,
  geoConicEquidistant as Ot,
  geoConicEqualArea as St,
  geoConicConformal as Nt,
  geoAlbers as Ct,
  quantize as Tt,
  schemeAccent as Rt,
  schemeCategory10 as It,
  schemeDark2 as Wt,
  schemePaired as jt,
  schemePastel1 as Bt,
  schemePastel2 as Ft,
  schemeSet1 as Dt,
  schemeSet2 as qt,
  schemeSet3 as _t,
  schemeTableau10 as Pt,
  interpolateBrBG as Vt,
  schemeBrBG as Yt,
  interpolatePRGn as Ut,
  schemePRGn as Ht,
  interpolatePiYG as Xt,
  schemePiYG as Gt,
  interpolatePuOr as Zt,
  schemePuOr as Jt,
  interpolateRdBu as Kt,
  schemeRdBu as Qt,
  interpolateRdGy as tn,
  schemeRdGy as nn,
  interpolateRdYlBu as en,
  schemeRdYlBu as rn,
  interpolateRdYlGn as on,
  schemeRdYlGn as an,
  interpolateSpectral as ln,
  schemeSpectral as sn,
  interpolateBlues as cn,
  schemeBlues as un,
  interpolateGreens as fn,
  schemeGreens as hn,
  interpolateGreys as dn,
  schemeGreys as pn,
  interpolateOranges as mn,
  schemeOranges as yn,
  interpolatePurples as gn,
  schemePurples as vn,
  interpolateReds as xn,
  schemeReds as wn,
  interpolateTurbo as bn,
  interpolateViridis as kn,
  interpolateMagma as $n,
  interpolateInferno as Mn,
  interpolatePlasma as Ln,
  interpolateCividis as An,
  interpolateCubehelixDefault as En,
  interpolateWarm as zn,
  interpolateCool as On,
  interpolateBuGn as Sn,
  schemeBuGn as Nn,
  interpolateBuPu as Cn,
  schemeBuPu as Tn,
  interpolateGnBu as Rn,
  schemeGnBu as In,
  interpolateOrRd as Wn,
  schemeOrRd as jn,
  interpolatePuBu as Bn,
  schemePuBu as Fn,
  interpolatePuBuGn as Dn,
  schemePuBuGn as qn,
  interpolatePuRd as _n,
  schemePuRd as Pn,
  interpolateRdPu as Vn,
  schemeRdPu as Yn,
  interpolateYlGn as Un,
  schemeYlGn as Hn,
  interpolateYlGnBu as Xn,
  schemeYlGnBu as Gn,
  interpolateYlOrBr as Zn,
  schemeYlOrBr as Jn,
  interpolateYlOrRd as Kn,
  schemeYlOrRd as Qn,
  interpolateRainbow as te,
  interpolateSinebow as ne,
  scaleLinear as ee,
  scalePow as re,
  scaleLog as oe,
  scaleSymlog as ie,
  scaleQuantile as ae,
  extent as le,
  ticks as se,
  interpolateNumber as ce,
  reverse as ue,
  scaleThreshold as fe,
  scaleIdentity as he,
  piecewise as de,
  interpolateRgb as pe,
  interpolateRound as me,
  interpolateHsl as ye,
  interpolateHcl as ge,
  interpolateLab as ve,
  scaleDiverging as xe,
  scaleDivergingPow as we,
  scaleDivergingLog as be,
  scaleDivergingSymlog as ke,
  scaleTime as $e,
  scaleUtc as Me,
  scaleImplicit as Le,
  scaleOrdinal as Ae,
  scalePoint as Ee,
  scaleBand as ze,
  symbolsStroke as Oe,
  symbolsFill as Se,
  cross as Ne,
  InternMap as Ce,
  pointer as Te,
  format as Re,
  axisBottom as Ie,
  pathRound as We,
  rgb as je,
  curveLinear as Be,
  curveBasis as Fe,
  curveBasisClosed as De,
  curveBasisOpen as qe,
  curveBundle as _e,
  curveBumpX as Pe,
  curveBumpY as Ve,
  curveCardinal as Ye,
  curveCardinalClosed as Ue,
  curveCardinalOpen as He,
  curveCatmullRom as Xe,
  curveCatmullRomClosed as Ge,
  curveCatmullRomOpen as Ze,
  curveLinearClosed as Je,
  curveMonotoneX as Ke,
  curveMonotoneY as Qe,
  curveNatural as tr,
  curveStep as nr,
  curveStepAfter as er,
  curveStepBefore as rr,
  thresholdSturges as or,
  thresholdScott as ir,
  thresholdFreedmanDiaconis as ar,
  utcTickInterval as lr,
  tickIncrement as sr,
  bisect as cr,
  cumsum as ur,
  groupSort as fr,
  greatest as hr,
  area as dr,
  line as pr,
  rank as mr,
  count as yr,
  blurImage as gr,
  Delaunay as vr,
  blur2 as xr,
  contours as wr,
  nice as br,
  contourDensity as kr,
  geoGraticule10 as $r,
  stratify as Mr,
  tree as Lr,
  cluster as Ar,
  geoCentroid as Er,
  least as zr,
} from "../../d3@7.8.5/+esm.js";
import { parse as Or, format as Sr } from "../../isoformat@0.2.1/+esm.js";
import Nr from "../../interval-tree-1d@1.0.4/+esm.js";
function Cr(t) {
  return null != t && !Number.isNaN(t);
}
function Tr(n, e) {
  return +Cr(e) - +Cr(n) || t(n, e);
}
function Rr(t, e) {
  return +Cr(e) - +Cr(t) || n(t, e);
}
function Ir(t) {
  return null != t && "" != `${t}`;
}
function Wr(t) {
  return isFinite(t) ? t : NaN;
}
function jr(t) {
  return t > 0 && isFinite(t) ? t : NaN;
}
function Br(t) {
  return t < 0 && isFinite(t) ? t : NaN;
}
const Fr = 1e3,
  Dr = 6e4,
  qr = 36e5,
  _r = 864e5,
  Pr = 7 * _r,
  Vr = 30 * _r,
  Yr = 365 * _r,
  Ur = [
    ["millisecond", 1],
    ["2 milliseconds", 2],
    ["5 milliseconds", 5],
    ["10 milliseconds", 10],
    ["20 milliseconds", 20],
    ["50 milliseconds", 50],
    ["100 milliseconds", 100],
    ["200 milliseconds", 200],
    ["500 milliseconds", 500],
    ["second", Fr],
    ["5 seconds", 5e3],
    ["15 seconds", 15e3],
    ["30 seconds", 3e4],
    ["minute", Dr],
    ["5 minutes", 3e5],
    ["15 minutes", 9e5],
    ["30 minutes", 18e5],
    ["hour", qr],
    ["3 hours", 108e5],
    ["6 hours", 216e5],
    ["12 hours", 432e5],
    ["day", _r],
    ["2 days", 2 * _r],
    ["week", Pr],
    ["2 weeks", 2 * Pr],
    ["month", Vr],
    ["3 months", 3 * Vr],
    ["6 months", 6 * Vr],
    ["year", Yr],
    ["2 years", 2 * Yr],
    ["5 years", 5 * Yr],
    ["10 years", 10 * Yr],
    ["20 years", 20 * Yr],
    ["50 years", 50 * Yr],
    ["100 years", 100 * Yr],
  ],
  Hr = new Map([
    ["second", Fr],
    ["minute", Dr],
    ["hour", qr],
    ["day", _r],
    ["monday", Pr],
    ["tuesday", Pr],
    ["wednesday", Pr],
    ["thursday", Pr],
    ["friday", Pr],
    ["saturday", Pr],
    ["sunday", Pr],
    ["week", Pr],
    ["month", Vr],
    ["year", Yr],
  ]),
  Xr = new Map([
    ["second", e],
    ["minute", r],
    ["hour", o],
    ["day", i],
    ["monday", a],
    ["tuesday", l],
    ["wednesday", s],
    ["thursday", c],
    ["friday", u],
    ["saturday", f],
    ["sunday", h],
    ["week", d],
    ["month", p],
    ["year", m],
  ]),
  Gr = new Map([
    ["second", y],
    ["minute", g],
    ["hour", v],
    ["day", x],
    ["monday", w],
    ["tuesday", b],
    ["wednesday", k],
    ["thursday", $],
    ["friday", M],
    ["saturday", L],
    ["sunday", A],
    ["week", E],
    ["month", z],
    ["year", O],
  ]),
  Zr = Symbol("intervalDuration"),
  Jr = Symbol("intervalType");
for (const [t, n] of Xr) (n[Zr] = Hr.get(t)), (n[Jr] = "time");
for (const [t, n] of Gr) (n[Zr] = Hr.get(t)), (n[Jr] = "utc");
const Kr = [
    ["year", O, "utc"],
    ["month", z, "utc"],
    ["day", x, "utc", 6 * Vr],
    ["hour", v, "utc", 3 * _r],
    ["minute", g, "utc", 216e5],
    ["second", y, "utc", 18e5],
  ],
  Qr = [
    ["year", m, "time"],
    ["month", p, "time"],
    ["day", i, "time", 6 * Vr],
    ["hour", o, "time", 3 * _r],
    ["minute", r, "time", 216e5],
    ["second", e, "time", 18e5],
  ],
  to = [Kr[0], Qr[0], Kr[1], Qr[1], Kr[2], Qr[2], ...Kr.slice(3)];
function no(t) {
  let n = `${t}`.toLowerCase();
  n.endsWith("s") && (n = n.slice(0, -1));
  let e = 1;
  const r = /^(?:(\d+)\s+)/.exec(n);
  switch ((r && ((n = n.slice(r[0].length)), (e = +r[1])), n)) {
    case "quarter":
      (n = "month"), (e *= 3);
      break;
    case "half":
      (n = "month"), (e *= 6);
  }
  let o = Gr.get(n);
  if (!o) throw new Error(`unknown interval: ${t}`);
  if (e > 1 && !o.every) throw new Error(`non-periodic interval: ${n}`);
  return [n, e];
}
function eo(t) {
  return oo(no(t), "time");
}
function ro(t) {
  return oo(no(t), "utc");
}
function oo([t, n], e) {
  let r = ("time" === e ? Xr : Gr).get(t);
  return n > 1 && ((r = r.every(n)), (r[Zr] = Hr.get(t) * n), (r[Jr] = e)), r;
}
function io(t, n) {
  if (!(n > 1)) return;
  const e = t[Zr];
  if (!Ur.some(([, t]) => t === e)) return;
  if (e % _r == 0 && _r < e && e < Vr) return;
  const [r] = Ur[S(([, t]) => Math.log(t)).center(Ur, Math.log(e * n))];
  return ("time" === t[Jr] ? eo : ro)(r);
}
function ao(t, n, e) {
  const r = "time" === n ? T : R;
  if (null == e)
    return r(
      "year" === t
        ? "%Y"
        : "month" === t
        ? "%Y-%m"
        : "day" === t
        ? "%Y-%m-%d"
        : "hour" === t || "minute" === t
        ? "%Y-%m-%dT%H:%M"
        : "second" === t
        ? "%Y-%m-%dT%H:%M:%S"
        : "%Y-%m-%dT%H:%M:%S.%L",
    );
  const o = (function (t) {
    return "left" === t || "right" === t
      ? (t, n) => `\n${t}\n${n}`
      : "top" === t
      ? (t, n) => `${n}\n${t}`
      : (t, n) => `${t}\n${n}`;
  })(e);
  switch (t) {
    case "millisecond":
      return so(r(".%L"), r(":%M:%S"), o);
    case "second":
      return so(r(":%S"), r("%-I:%M"), o);
    case "minute":
      return so(r("%-I:%M"), r("%p"), o);
    case "hour":
      return so(r("%-I %p"), r("%b %-d"), o);
    case "day":
      return so(r("%-d"), r("%b"), o);
    case "month":
      return so(r("%b"), r("%Y"), o);
    case "year":
      return r("%Y");
  }
  throw new Error("unable to format time ticks");
}
function lo(t, n, e) {
  const r = N(C(n, (t, n) => Math.abs(n - t)));
  if (r < 1e3) return ao("millisecond", "utc", e);
  for (const [o, i, a, l] of (function (t) {
    return "time" === t ? Qr : "utc" === t ? Kr : to;
  })(t)) {
    if (r > l) break;
    if ("hour" === o && !r) break;
    if (n.every((t) => i.floor(t) >= t)) return ao(o, a, e);
  }
}
function so(t, n, e) {
  return (r, o, i) => {
    const a = t(r, o),
      l = n(r, o),
      s = o - Ei(i);
    return o !== s && void 0 !== i[s] && l === n(i[s], s) ? a : e(a, l);
  };
}
const co = Object.getPrototypeOf(Uint8Array),
  uo = Object.prototype.toString,
  fo = Symbol("reindex");
function ho(t, n, e) {
  const r = typeof n;
  return "string" === r
    ? po(t, go(n), e)
    : "function" === r
    ? po(t, n, e)
    : "number" === r || n instanceof Date || "boolean" === r
    ? Bo(t, Eo(n), e)
    : "function" == typeof n?.transform
    ? mo(n.transform(t), e)
    : (function (t, n) {
        return n ? Jo(t, n) : t;
      })(mo(n, e), t?.[fo]);
}
function po(t, n, e) {
  return Bo(
    t,
    e?.prototype instanceof co
      ? (function (t) {
          return (n, e) => So(t(n, e));
        })(n)
      : n,
    e,
  );
}
function mo(t, n) {
  return void 0 === n
    ? jo(t)
    : t instanceof n
    ? t
    : n.prototype instanceof co && !(t instanceof co)
    ? n.from(t, So)
    : n.from(t);
}
const yo = [null],
  go = (t) => (n) => n[t],
  vo = { transform: Zo },
  xo = { transform: (t) => t },
  wo = () => 1,
  bo = () => !0,
  ko = (t) => (null == t ? t : `${t}`),
  $o = (t) => (null == t ? t : +t),
  Mo = (t) => (t ? t[0] : void 0),
  Lo = (t) => (t ? t[1] : void 0),
  Ao = (t) => (t ? t[2] : void 0),
  Eo = (t) => () => t;
function zo(t) {
  const n = +`${t}`.slice(1) / 100;
  return (t, e) => W(t, n, e);
}
function Oo(t) {
  return t instanceof co ? t : Bo(t, So, Float64Array);
}
function So(t) {
  return null == t ? NaN : Number(t);
}
function No(t) {
  return Bo(t, Co);
}
function Co(t) {
  return t instanceof Date && !isNaN(t)
    ? t
    : "string" == typeof t
    ? Or(t)
    : null == t || isNaN((t = +t))
    ? void 0
    : new Date(t);
}
function To(t, n) {
  return (
    void 0 === t && (t = n),
    null === t ? [void 0, "none"] : bi(t) ? [void 0, t] : [t, void 0]
  );
}
function Ro(t, n) {
  return (
    void 0 === t && (t = n),
    null === t || "number" == typeof t ? [void 0, t] : [t, void 0]
  );
}
function Io(t, n, e) {
  if (null != t) return Wo(t, n, e);
}
function Wo(t, n, e) {
  const r = `${t}`.toLowerCase();
  if (!e.includes(r)) throw new Error(`invalid ${n}: ${t}`);
  return r;
}
function jo(t) {
  return null == t || t instanceof Array || t instanceof co ? t : Array.from(t);
}
function Bo(t, n, e = Array) {
  return null == t ? t : t instanceof e ? t.map(n) : e.from(t, n);
}
function Fo(t, n = Array) {
  return t instanceof n ? t.slice() : n.from(t);
}
function Do({ x: t, x1: n, x2: e }) {
  return void 0 !== t || void 0 !== n || void 0 !== e;
}
function qo({ y: t, y1: n, y2: e }) {
  return void 0 !== t || void 0 !== n || void 0 !== e;
}
function _o(t) {
  return Do(t) || qo(t) || void 0 !== t.interval;
}
function Po(t) {
  return t?.toString === uo;
}
function Vo(t) {
  return Po(t) && (void 0 !== t.type || void 0 !== t.domain);
}
function Yo(t) {
  return Po(t) && "function" != typeof t.transform;
}
function Uo(t) {
  return Yo(t) && void 0 === t.value && void 0 === t.channel;
}
function Ho(t, n, e, r = xo) {
  return (
    void 0 === n && void 0 === e
      ? ((n = 0), (e = void 0 === t ? r : t))
      : void 0 === n
      ? (n = void 0 === t ? 0 : t)
      : void 0 === e && (e = void 0 === t ? 0 : t),
    [n, e]
  );
}
function Xo(t, n) {
  return void 0 === t && void 0 === n ? [Mo, Lo] : [t, n];
}
function Go({ z: t, fill: n, stroke: e } = {}) {
  return void 0 === t && ([t] = To(n)), void 0 === t && ([t] = To(e)), t;
}
function Zo(t) {
  const n = t.length,
    e = new Uint32Array(n);
  for (let t = 0; t < n; ++t) e[t] = t;
  return e;
}
function Jo(t, n) {
  return Bo(n, (n) => t[n], t.constructor);
}
function Ko(t) {
  return 1 === t.length ? (n, e) => t(Jo(e, n)) : t;
}
function Qo(t, n, e) {
  return t.subarray ? t.subarray(n, e) : t.slice(n, e);
}
function ti(t) {
  return null !== t && "object" == typeof t ? t.valueOf() : t;
}
function ni(t, n) {
  if (void 0 !== n[t]) return n[t];
  switch (t) {
    case "x1":
    case "x2":
      t = "x";
      break;
    case "y1":
    case "y2":
      t = "y";
  }
  return n[t];
}
function ei(t) {
  let n;
  return [{ transform: () => n, label: oi(t) }, (t) => (n = t)];
}
function ri(t) {
  return null == t ? [t] : ei(t);
}
function oi(t, n) {
  return "string" == typeof t ? t : t && void 0 !== t.label ? t.label : n;
}
function ii(t, n) {
  return {
    transform(e) {
      const r = t.transform(e),
        o = n.transform(e);
      return mi(r) || mi(o)
        ? Bo(r, (t, n) => new Date((+r[n] + +o[n]) / 2))
        : Bo(r, (t, n) => (+r[n] + +o[n]) / 2, Float64Array);
    },
    label: t.label,
  };
}
function ai(t, n) {
  const e = li(n?.interval, n?.type);
  return e ? Bo(t, e) : t;
}
function li(t, n) {
  const e = si(t, n);
  return e && ((t) => (Cr(t) ? e.floor(t) : t));
}
function si(t, n) {
  if (null != t) {
    if ("number" == typeof t) {
      0 < t && t < 1 && Number.isInteger(1 / t) && (t = -1 / t);
      const n = Math.abs(t);
      return t < 0
        ? {
            floor: (t) => Math.floor(t * n) / n,
            offset: (t) => (t * n + 1) / n,
            range: (t, e) => I(Math.ceil(t * n), e * n).map((t) => t / n),
          }
        : {
            floor: (t) => Math.floor(t / n) * n,
            offset: (t) => t + n,
            range: (t, e) => I(Math.ceil(t / n), e / n).map((t) => t * n),
          };
    }
    if ("string" == typeof t) return ("time" === n ? eo : ro)(t);
    if ("function" != typeof t.floor)
      throw new Error("invalid interval; missing floor method");
    if ("function" != typeof t.offset)
      throw new Error("invalid interval; missing offset method");
    return t;
  }
}
function ci(t, n) {
  if ((t = si(t, n)) && "function" != typeof t.range)
    throw new Error("invalid interval: missing range method");
  return t;
}
function ui(t) {
  return "function" == typeof t?.range;
}
function fi(t) {
  return void 0 === t || Yo(t) ? t : { value: t };
}
function hi(t) {
  return t && "function" == typeof t[Symbol.iterator];
}
function di(t) {
  for (const n of t)
    if (null != n) return "object" != typeof n || n instanceof Date;
}
function pi(t) {
  for (const n of t) {
    if (null == n) continue;
    const t = typeof n;
    return "string" === t || "boolean" === t;
  }
}
function mi(t) {
  for (const n of t) if (null != n) return n instanceof Date;
}
function yi(t) {
  for (const n of t)
    if (null != n) return "string" == typeof n && isNaN(n) && Or(n);
}
function gi(t) {
  for (const n of t)
    if (null != n) {
      if ("string" != typeof n) return !1;
      if (n.trim()) return !isNaN(n);
    }
}
function vi(t) {
  for (const n of t) if (null != n) return "number" == typeof n;
}
function xi(t, n) {
  let e;
  for (const r of t)
    if (null != r) {
      if (!n(r)) return !1;
      e = !0;
    }
  return e;
}
const wi = new Set(
  "none,currentcolor,transparent,aliceblue,antiquewhite,aqua,aquamarine,azure,beige,bisque,black,blanchedalmond,blue,blueviolet,brown,burlywood,cadetblue,chartreuse,chocolate,coral,cornflowerblue,cornsilk,crimson,cyan,darkblue,darkcyan,darkgoldenrod,darkgray,darkgreen,darkgrey,darkkhaki,darkmagenta,darkolivegreen,darkorange,darkorchid,darkred,darksalmon,darkseagreen,darkslateblue,darkslategray,darkslategrey,darkturquoise,darkviolet,deeppink,deepskyblue,dimgray,dimgrey,dodgerblue,firebrick,floralwhite,forestgreen,fuchsia,gainsboro,ghostwhite,gold,goldenrod,gray,green,greenyellow,grey,honeydew,hotpink,indianred,indigo,ivory,khaki,lavender,lavenderblush,lawngreen,lemonchiffon,lightblue,lightcoral,lightcyan,lightgoldenrodyellow,lightgray,lightgreen,lightgrey,lightpink,lightsalmon,lightseagreen,lightskyblue,lightslategray,lightslategrey,lightsteelblue,lightyellow,lime,limegreen,linen,magenta,maroon,mediumaquamarine,mediumblue,mediumorchid,mediumpurple,mediumseagreen,mediumslateblue,mediumspringgreen,mediumturquoise,mediumvioletred,midnightblue,mintcream,mistyrose,moccasin,navajowhite,navy,oldlace,olive,olivedrab,orange,orangered,orchid,palegoldenrod,palegreen,paleturquoise,palevioletred,papayawhip,peachpuff,peru,pink,plum,powderblue,purple,rebeccapurple,red,rosybrown,royalblue,saddlebrown,salmon,sandybrown,seagreen,seashell,sienna,silver,skyblue,slateblue,slategray,slategrey,snow,springgreen,steelblue,tan,teal,thistle,tomato,turquoise,violet,wheat,white,whitesmoke,yellow".split(
    ",",
  ),
);
function bi(t) {
  return (
    "string" == typeof t &&
    ((t = t.toLowerCase().trim()),
    /^#[0-9a-f]{3,8}$/.test(t) ||
      /^(?:url|var|rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color|color-mix)\(.*\)$/.test(
        t,
      ) ||
      wi.has(t))
  );
}
function ki(t) {
  return "number" == typeof t && ((0 <= t && t <= 1) || isNaN(t));
}
function $i(t) {
  return null == t || Mi(t);
}
function Mi(t) {
  return /^\s*none\s*$/i.test(t);
}
function Li(t, n) {
  return Io(t, n, [
    "middle",
    "top-left",
    "top",
    "top-right",
    "right",
    "bottom-right",
    "bottom",
    "bottom-left",
    "left",
  ]);
}
function Ai(t = "middle") {
  return Li(t, "frameAnchor");
}
function Ei(t) {
  if (null == t) return;
  const e = t[0],
    r = t[t.length - 1];
  return n(e, r);
}
function zi(t) {
  return hi(t)
    ? (function (t) {
        console.warn(
          "named iterables are deprecated; please use an object instead",
        );
        const n = new Set();
        return Object.fromEntries(
          Array.from(t, (t) => {
            const { name: e } = t;
            if (null == e) throw new Error("missing name");
            const r = `${e}`;
            if ("__proto__" === r) throw new Error(`illegal name: ${r}`);
            if (n.has(r)) throw new Error(`duplicate name: ${r}`);
            return n.add(r), [e, t];
          }),
        );
      })(t)
    : t;
}
const Oi = Symbol("position"),
  Si = Symbol("color"),
  Ni = Symbol("radius"),
  Ci = Symbol("length"),
  Ti = Symbol("opacity"),
  Ri = Symbol("symbol"),
  Ii = Symbol("projection"),
  Wi = new Map([
    ["x", Oi],
    ["y", Oi],
    ["fx", Oi],
    ["fy", Oi],
    ["r", Ni],
    ["color", Si],
    ["opacity", Ti],
    ["symbol", Ri],
    ["length", Ci],
    ["projection", Ii],
  ]);
const ji = Math.sqrt(3),
  Bi = 2 / ji,
  Fi = new Map([
    ["asterisk", j],
    ["circle", B],
    ["cross", F],
    ["diamond", D],
    ["diamond2", q],
    [
      "hexagon",
      {
        draw(t, n) {
          const e = Math.sqrt(n / Math.PI),
            r = e * Bi,
            o = r / 2;
          t.moveTo(0, r),
            t.lineTo(e, o),
            t.lineTo(e, -o),
            t.lineTo(0, -r),
            t.lineTo(-e, -o),
            t.lineTo(-e, o),
            t.closePath();
        },
      },
    ],
    ["plus", _],
    ["square", P],
    ["square2", V],
    ["star", Y],
    ["times", U],
    ["triangle", H],
    ["triangle2", X],
    ["wye", G],
  ]);
function Di(t) {
  return t && "function" == typeof t.draw;
}
function qi(t) {
  return !!Di(t) || ("string" == typeof t && Fi.has(t.toLowerCase()));
}
function _i(t) {
  if (null == t || Di(t)) return t;
  const n = Fi.get(`${t}`.toLowerCase());
  if (n) return n;
  throw new Error(`invalid symbol: ${t}`);
}
function Pi(
  { filter: t, sort: n, reverse: e, transform: r, initializer: o, ...i } = {},
  a,
) {
  if (
    (void 0 === r &&
      (null != t && (r = Gi(t)),
      null == n || Uo(n) || (r = Yi(r, ta(n))),
      e && (r = Yi(r, Ji))),
    null != a && null != o)
  )
    throw new Error("transforms cannot be applied after initializers");
  return {
    ...i,
    ...((null === n || Uo(n)) && { sort: n }),
    transform: Yi(r, a),
  };
}
function Vi({ filter: t, sort: n, reverse: e, initializer: r, ...o } = {}, i) {
  return (
    void 0 === r &&
      (null != t && (r = Gi(t)),
      null == n || Uo(n) || (r = Ui(r, ta(n))),
      e && (r = Ui(r, Ji))),
    { ...o, ...((null === n || Uo(n)) && { sort: n }), initializer: Ui(r, i) }
  );
}
function Yi(t, n) {
  return null == t
    ? null === n
      ? void 0
      : n
    : null == n
    ? null === t
      ? void 0
      : t
    : function (e, r, o) {
        return (
          ({ data: e, facets: r } = t.call(this, e, r, o)),
          n.call(this, jo(e), r, o)
        );
      };
}
function Ui(t, n) {
  return null == t
    ? null === n
      ? void 0
      : n
    : null == n
    ? null === t
      ? void 0
      : t
    : function (e, r, o, ...i) {
        let a, l, s, c, u, f;
        return (
          ({
            data: l = e,
            facets: s = r,
            channels: a,
          } = t.call(this, e, r, o, ...i)),
          ({
            data: u = l,
            facets: f = s,
            channels: c,
          } = n.call(this, l, s, { ...o, ...a }, ...i)),
          { data: u, facets: f, channels: { ...a, ...c } }
        );
      };
}
function Hi(t, n) {
  return (null != t.initializer ? Vi : Pi)(t, n);
}
function Xi(t, n) {
  return Hi(n, Gi(t));
}
function Gi(t) {
  return (n, e) => {
    const r = ho(n, t);
    return { data: n, facets: e.map((t) => t.filter((t) => r[t])) };
  };
}
function Zi({ sort: t, ...n } = {}) {
  return { ...Hi(n, Ji), sort: Uo(t) ? t : null };
}
function Ji(t, n) {
  return { data: t, facets: n.map((t) => t.slice().reverse()) };
}
function Ki({ seed: t, sort: n, ...e } = {}) {
  return {
    ...Hi(e, ea(null == t ? Math.random : Z(t))),
    sort: Uo(n) ? n : null,
  };
}
function Qi(t, { sort: n, ...e } = {}) {
  return {
    ...(Yo(t) && void 0 !== t.channel ? Vi : Hi)(e, ta(t)),
    sort: Uo(n) ? n : null,
  };
}
function ta(t) {
  return ("function" == typeof t && 1 !== t.length ? na : ea)(t);
}
function na(t) {
  return (n, e) => {
    const r = (e, r) => t(n[e], n[r]);
    return { data: n, facets: e.map((t) => t.slice().sort(r)) };
  };
}
function ea(t) {
  let n, e;
  ({ channel: n, value: t, order: e } = { ...fi(t) });
  const r = n?.startsWith("-");
  if (
    (r && (n = n.slice(1)),
    void 0 === e && (e = r ? Rr : Tr),
    "function" != typeof e)
  )
    switch (`${e}`.toLowerCase()) {
      case "ascending":
        e = Tr;
        break;
      case "descending":
        e = Rr;
        break;
      default:
        throw new Error(`invalid order: ${e}`);
    }
  return (r, o, i) => {
    let a;
    if (void 0 === n) a = ho(r, t);
    else {
      if (void 0 === i) throw new Error("channel sort requires an initializer");
      if (((a = i[n]), !a)) return {};
      a = a.value;
    }
    const l = (t, n) => e(a[t], a[n]);
    return { data: r, facets: o.map((t) => t.slice().sort(l)) };
  };
}
function ra(t, n) {
  return la(null, null, t, n);
}
function oa(t = { y: "count" }, n = {}) {
  const { x: e = xo } = n;
  if (null == e) throw new Error("missing channel: x");
  return la(e, null, t, n);
}
function ia(t = { x: "count" }, n = {}) {
  const { y: e = xo } = n;
  if (null == e) throw new Error("missing channel: y");
  return la(null, e, t, n);
}
function aa(t = { fill: "count" }, n = {}) {
  let { x: e, y: r } = n;
  if ((([e, r] = Xo(e, r)), null == e)) throw new Error("missing channel: x");
  if (null == r) throw new Error("missing channel: y");
  return la(e, r, t, n);
}
function la(
  t,
  n,
  { data: e = Ma, filter: r, sort: o, reverse: i, ...a } = {},
  l = {},
) {
  (a = ma(a, l)),
    (e = va(e, xo)),
    (o = null == o ? void 0 : ya("sort", o, l)),
    (r = null == r ? void 0 : ga("filter", r, l));
  const [s, c] = ri(t),
    [u, f] = ri(n),
    { z: h, fill: d, stroke: p, x1: m, x2: y, y1: g, y2: v, ...x } = l,
    [w, b] = ri(h),
    [k] = To(d),
    [$] = To(p),
    [M, L] = ri(k),
    [A, E] = ri($);
  return {
    ...("z" in l && { z: w || h }),
    ...("fill" in l && { fill: M || d }),
    ...("stroke" in l && { stroke: A || p }),
    ...Pi(x, (l, s, u) => {
      const d = ai(ho(l, t), u?.x),
        p = ai(ho(l, n), u?.y),
        m = ho(l, h),
        y = ho(l, k),
        g = ho(l, $),
        v = wa(a, { z: m, fill: y, stroke: g }),
        x = [],
        w = [],
        M = d && c([]),
        A = p && f([]),
        z = m && b([]),
        O = y && L([]),
        S = g && E([]);
      let N = 0;
      for (const t of a) t.initialize(l);
      o && o.initialize(l), r && r.initialize(l);
      for (const t of s) {
        const n = [];
        for (const n of a) n.scope("facet", t);
        o && o.scope("facet", t), r && r.scope("facet", t);
        for (const [i, s] of ha(t, v))
          for (const [t, c] of ha(s, p))
            for (const [s, u] of ha(c, d)) {
              const c = { data: l };
              if ((d && (c.x = s), p && (c.y = t), !r || r.reduce(u, c))) {
                n.push(N++),
                  w.push(e.reduceIndex(u, l, c)),
                  d && M.push(s),
                  p && A.push(t),
                  m && z.push(v === m ? i : m[u[0]]),
                  y && O.push(v === y ? i : y[u[0]]),
                  g && S.push(v === g ? i : g[u[0]]);
                for (const t of a) t.reduce(u, c);
                o && o.reduce(u, c);
              }
            }
        x.push(n);
      }
      return ba(x, o, i), { data: w, facets: x };
    }),
    ...(!sa(a, "x") && (s ? { x: s } : { x1: m, x2: y })),
    ...(!sa(a, "y") && (u ? { y: u } : { y1: g, y2: v })),
    ...Object.fromEntries(a.map(({ name: t, output: n }) => [t, n])),
  };
}
function sa(t, ...n) {
  for (const { name: e } of t) if (n.includes(e)) return !0;
  return !1;
}
function ca(t, n, e = ua) {
  const r = Object.entries(t);
  return (
    null != n.title && void 0 === t.title && r.push(["title", Aa]),
    null != n.href && void 0 === t.href && r.push(["href", La]),
    r
      .filter(([, t]) => void 0 !== t)
      .map(([t, r]) =>
        null === r
          ? (function (t) {
              return { name: t, initialize() {}, scope() {}, reduce() {} };
            })(t)
          : e(t, r, n),
      )
  );
}
function ua(t, n, e, r = fa) {
  let o;
  Po(n) && "reduce" in n && ((o = n.scale), (n = n.reduce));
  const i = r(t, n, e),
    [a, l] = ei(i.label);
  let s;
  return {
    name: t,
    output: void 0 === o ? a : { value: a, scale: o },
    initialize(t) {
      i.initialize(t), (s = l([]));
    },
    scope(t, n) {
      i.scope(t, n);
    },
    reduce(t, n) {
      s.push(i.reduce(t, n));
    },
  };
}
function fa(t, n, e, r = da) {
  const o = ni(t, e),
    i = r(n, o);
  let a, l;
  return {
    label: oi(i === za ? null : o, i.label),
    initialize(t) {
      (a = void 0 === o ? t : ho(t, o)),
        "data" === i.scope && (l = i.reduceIndex(Zo(t), a));
    },
    scope(t, n) {
      i.scope === t && (l = i.reduceIndex(n, a));
    },
    reduce: (t, n) =>
      null == i.scope ? i.reduceIndex(t, a, n) : i.reduceIndex(t, a, l, n),
  };
}
function ha(t, n) {
  return n
    ? J(
        K(t, (t) => n[t]),
        Mo,
      )
    : [[, t]];
}
function da(t, n, e = pa) {
  if (null == t) return e(t);
  if ("function" == typeof t.reduceIndex) return t;
  if ("function" == typeof t.reduce && Po(t))
    return (function (t) {
      return (
        console.warn(
          "deprecated reduce interface; implement reduceIndex instead.",
        ),
        { ...t, reduceIndex: t.reduce.bind(t) }
      );
    })(t);
  if ("function" == typeof t)
    return (r = t), { reduceIndex: (t, n, e) => r(Jo(n, t), e) };
  var r;
  if (/^p\d{2}$/i.test(t)) return ka(zo(t));
  switch (`${t}`.toLowerCase()) {
    case "first":
      return La;
    case "last":
      return Ea;
    case "identity":
      return Ma;
    case "count":
      return za;
    case "distinct":
      return Oa;
    case "sum":
      return null == n ? za : Sa;
    case "proportion":
      return Na(n, "data");
    case "proportion-facet":
      return Na(n, "facet");
    case "deviation":
      return ka(ut);
    case "min":
      return ka(ct);
    case "min-index":
      return ka(st);
    case "max":
      return ka(N);
    case "max-index":
      return ka(lt);
    case "mean":
      return $a(at);
    case "median":
      return $a(ot);
    case "variance":
      return ka(rt);
    case "mode":
      return ka(et);
  }
  return e(t);
}
function pa(t) {
  throw new Error(`invalid reduce: ${t}`);
}
function ma(t, n) {
  return ca(t, n, ya);
}
function ya(t, n, e) {
  return ua(t, n, e, ga);
}
function ga(t, n, e) {
  return fa(t, n, e, va);
}
function va(t, n) {
  return da(t, n, xa);
}
function xa(t) {
  switch (`${t}`.toLowerCase()) {
    case "x":
      return Ca;
    case "y":
      return Ta;
  }
  throw new Error(`invalid group reduce: ${t}`);
}
function wa(t, n) {
  for (const e in n) {
    const r = n[e];
    if (void 0 !== r && !t.some((t) => t.name === e)) return r;
  }
}
function ba(t, n, e) {
  if (n) {
    const e = n.output.transform(),
      r = (t, n) => Tr(e[t], e[n]);
    t.forEach((t) => t.sort(r));
  }
  e && t.forEach((t) => t.reverse());
}
function ka(t) {
  return { reduceIndex: (n, e) => t(n, (t) => e[t]) };
}
function $a(t) {
  return {
    reduceIndex(n, e) {
      const r = t(n, (t) => e[t]);
      return mi(e) ? new Date(r) : r;
    },
  };
}
const Ma = { reduceIndex: (t, n) => Jo(n, t) },
  La = { reduceIndex: (t, n) => n[t[0]] },
  Aa = {
    reduceIndex(t, n) {
      const e = J(
          Q(
            t,
            (t) => t.length,
            (t) => n[t],
          ),
          Lo,
        ),
        r = e.slice(-5).reverse();
      if (r.length < e.length) {
        const t = e.slice(0, -4);
        r[4] = [`… ${t.length.toLocaleString("en-US")} more`, tt(t, Lo)];
      }
      return r
        .map(([t, n]) => `${t} (${n.toLocaleString("en-US")})`)
        .join("\n");
    },
  },
  Ea = { reduceIndex: (t, n) => n[t[t.length - 1]] },
  za = { label: "Frequency", reduceIndex: (t) => t.length },
  Oa = {
    label: "Distinct",
    reduceIndex(t, n) {
      const e = new nt();
      for (const r of t) e.add(n[r]);
      return e.size;
    },
  },
  Sa = ka(tt);
function Na(t, n) {
  return null == t
    ? {
        scope: n,
        label: "Frequency",
        reduceIndex: (t, n, e = 1) => t.length / e,
      }
    : { scope: n, reduceIndex: (t, n, e = 1) => tt(t, (t) => n[t]) / e };
}
const Ca = { reduceIndex: (t, n, { x: e }) => e },
  Ta = { reduceIndex: (t, n, { y: e }) => e };
function Ra(t) {
  if ("function" != typeof t) throw new Error(`invalid test function: ${t}`);
  return {
    reduceIndex: (n, e, { data: r }) => e[n.find((n) => t(r[n], n, r))],
  };
}
function Ia(
  t,
  { scale: n, type: e, value: r, filter: o, hint: i, label: a = oi(r) },
  l,
) {
  return (
    void 0 === i && "function" == typeof r?.transform && (i = r.hint),
    Ba(l, { scale: n, type: e, value: ho(t, r), label: a, filter: o, hint: i })
  );
}
function Wa(t, n) {
  return Object.fromEntries(
    Object.entries(t).map(([t, e]) => [t, Ia(n, e, t)]),
  );
}
function ja(t, n) {
  const e = Object.fromEntries(
    Object.entries(t).map(([t, { scale: e, value: r }]) => {
      const o = null == e ? null : n[e];
      return [t, null == o ? r : Bo(r, o)];
    }),
  );
  return (e.channels = t), e;
}
function Ba(t, n) {
  const { scale: e, value: r } = n;
  if (!0 === e || "auto" === e)
    switch (t) {
      case "fill":
      case "stroke":
      case "color":
        n.scale = !0 !== e && xi(r, bi) ? null : "color";
        break;
      case "fillOpacity":
      case "strokeOpacity":
      case "opacity":
        n.scale = !0 !== e && xi(r, ki) ? null : "opacity";
        break;
      case "symbol":
        !0 !== e && xi(r, qi)
          ? ((n.scale = null), (n.value = Bo(r, _i)))
          : (n.scale = "symbol");
        break;
      default:
        n.scale = Wi.has(t) ? t : null;
    }
  else if (!1 === e) n.scale = null;
  else if (null != e && !Wi.has(e)) throw new Error(`unknown scale: ${e}`);
  return n;
}
function Fa(t, n) {
  for (const e in t) {
    const r = t[e];
    if (r.scale === n) return r;
  }
}
function Da(t, n) {
  const e = t.original;
  if (e === t) return n;
  const r = n.value,
    o = (n.value = []);
  for (let n = 0; n < e.length; ++n) {
    const i = r[e[n][0]];
    for (const e of t[n]) o[e] = i;
  }
  return n;
}
function qa(t, n, e) {
  const r = _a(t, n);
  return Bo(_a(t, e), (t, n) => Math.abs(t - r[n]), Float64Array);
}
function _a(t, n, e) {
  let r = t[n];
  if ((r || void 0 === e || (r = t[e]), r)) return r.value;
  throw new Error(`missing channel: ${n}`);
}
function Pa(t) {
  if (null == t || "function" == typeof t) return t;
  switch (`${t}`.toLowerCase()) {
    case "ascending":
      return Va;
    case "descending":
      return Ya;
  }
  throw new Error(`invalid order: ${t}`);
}
function Va([t, n], [e, r]) {
  return Tr(n, r) || Tr(t, e);
}
function Ya([t, n], [e, r]) {
  return Rr(n, r) || Tr(t, e);
}
function Ua(t, n) {
  let e = t[n];
  if (e) {
    for (; e.source; ) e = e.source;
    return null === e.source ? null : e;
  }
}
function Ha(t) {
  let n, e;
  return (...r) => (
    (e?.length !== r.length || e.some((t, n) => t !== r[n])) &&
      ((e = r), (n = t(...r))),
    n
  );
}
const Xa = Ha((t) => new Intl.NumberFormat(t)),
  Ga = Ha(
    (t, n) =>
      new Intl.DateTimeFormat(t, { timeZone: "UTC", ...(n && { month: n }) }),
  ),
  Za = Ha(
    (t, n) =>
      new Intl.DateTimeFormat(t, { timeZone: "UTC", ...(n && { weekday: n }) }),
  );
function Ja(t = "en-US", n = "short") {
  const e = Ga(t, n);
  return (t) =>
    null == t || isNaN((t = +new Date(Date.UTC(2e3, +t))))
      ? void 0
      : e.format(t);
}
function Ka(t = "en-US", n = "short") {
  const e = Za(t, n);
  return (t) =>
    null == t || isNaN((t = +new Date(Date.UTC(2001, 0, +t))))
      ? void 0
      : e.format(t);
}
function Qa(t) {
  return Sr(t, "Invalid Date");
}
const tl = (function (t = "en-US") {
  const n = (function (t = "en-US") {
    const n = Xa(t);
    return (t) => (null == t || isNaN(t) ? void 0 : n.format(t));
  })(t);
  return (t) => (t instanceof Date ? Qa : "number" == typeof t ? n : ko)(t);
})();
let nl,
  el = 0;
function rl(t) {
  t !== nl && ((nl = t), console.warn(t), ++el);
}
const ol = (
  "undefined" != typeof window
    ? window.devicePixelRatio > 1
    : "undefined" == typeof it
)
  ? 0
  : 0.5;
let il = 0;
function al() {
  return "plot-clip-" + ++il;
}
function ll(
  t,
  {
    title: n,
    href: e,
    ariaLabel: r,
    ariaDescription: o,
    ariaHidden: i,
    target: a,
    fill: l,
    fillOpacity: s,
    stroke: c,
    strokeWidth: u,
    strokeOpacity: f,
    strokeLinejoin: h,
    strokeLinecap: d,
    strokeMiterlimit: p,
    strokeDasharray: m,
    strokeDashoffset: y,
    opacity: g,
    mixBlendMode: v,
    imageFilter: x,
    paintOrder: w,
    pointerEvents: b,
    shapeRendering: k,
    channels: $,
  },
  {
    ariaLabel: M,
    fill: L = "currentColor",
    fillOpacity: A,
    stroke: E = "none",
    strokeOpacity: z,
    strokeWidth: O,
    strokeLinecap: S,
    strokeLinejoin: N,
    strokeMiterlimit: C,
    paintOrder: T,
  },
) {
  null === L && ((l = null), (s = null)),
    null === E && ((c = null), (f = null)),
    $i(L)
      ? $i(E) || ($i(l) && !$?.fill) || (E = "none")
      : !$i(E) || ($i(c) && !$?.stroke) || (L = "none");
  const [R, I] = To(l, L),
    [W, j] = Ro(s, A),
    [B, F] = To(c, E),
    [D, q] = Ro(f, z),
    [_, P] = Ro(g);
  Mi(F) ||
    (void 0 === u && (u = O),
    void 0 === d && (d = S),
    void 0 === h && (h = N),
    void 0 !== p || /^\s*round\s*$/i.test(h) || (p = C),
    Mi(I) || void 0 !== w || (w = T));
  const [V, Y] = Ro(u);
  return (
    null !== L &&
      ((t.fill = wl(I, "currentColor")), (t.fillOpacity = bl(j, 1))),
    null !== E &&
      ((t.stroke = wl(F, "none")),
      (t.strokeWidth = bl(Y, 1)),
      (t.strokeOpacity = bl(q, 1)),
      (t.strokeLinejoin = wl(h, "miter")),
      (t.strokeLinecap = wl(d, "butt")),
      (t.strokeMiterlimit = bl(p, 4)),
      (t.strokeDasharray = wl(m, "none")),
      (t.strokeDashoffset = wl(y, "0"))),
    (t.target = ko(a)),
    (t.ariaLabel = ko(M)),
    (t.ariaDescription = ko(o)),
    (t.ariaHidden = ko(i)),
    (t.opacity = bl(P, 1)),
    (t.mixBlendMode = wl(v, "normal")),
    (t.imageFilter = wl(x, "none")),
    (t.paintOrder = wl(w, "normal")),
    (t.pointerEvents = wl(b, "auto")),
    (t.shapeRendering = wl(k, "auto")),
    {
      title: { value: n, optional: !0, filter: null },
      href: { value: e, optional: !0, filter: null },
      ariaLabel: { value: r, optional: !0, filter: null },
      fill: { value: R, scale: "auto", optional: !0 },
      fillOpacity: { value: W, scale: "auto", optional: !0 },
      stroke: { value: B, scale: "auto", optional: !0 },
      strokeOpacity: { value: D, scale: "auto", optional: !0 },
      strokeWidth: { value: V, optional: !0 },
      opacity: { value: _, scale: "auto", optional: !0 },
    }
  );
}
function sl(t, n) {
  n && t.text((t) => tl(n[t]));
}
function cl(t, n) {
  n && t.text(([t]) => tl(n[t]));
}
function ul(
  t,
  { target: n, tip: e },
  {
    ariaLabel: r,
    title: o,
    fill: i,
    fillOpacity: a,
    stroke: l,
    strokeOpacity: s,
    strokeWidth: c,
    opacity: u,
    href: f,
  },
) {
  r && vl(t, "aria-label", (t) => r[t]),
    i && vl(t, "fill", (t) => i[t]),
    a && vl(t, "fill-opacity", (t) => a[t]),
    l && vl(t, "stroke", (t) => l[t]),
    s && vl(t, "stroke-opacity", (t) => s[t]),
    c && vl(t, "stroke-width", (t) => c[t]),
    u && vl(t, "opacity", (t) => u[t]),
    f && gl(t, (t) => f[t], n),
    e ||
      (function (t, n) {
        n &&
          t
            .filter((t) => Ir(n[t]))
            .append("title")
            .call(sl, n);
      })(t, o);
}
function fl(
  t,
  { target: n, tip: e },
  {
    ariaLabel: r,
    title: o,
    fill: i,
    fillOpacity: a,
    stroke: l,
    strokeOpacity: s,
    strokeWidth: c,
    opacity: u,
    href: f,
  },
) {
  r && vl(t, "aria-label", ([t]) => r[t]),
    i && vl(t, "fill", ([t]) => i[t]),
    a && vl(t, "fill-opacity", ([t]) => a[t]),
    l && vl(t, "stroke", ([t]) => l[t]),
    s && vl(t, "stroke-opacity", ([t]) => s[t]),
    c && vl(t, "stroke-width", ([t]) => c[t]),
    u && vl(t, "opacity", ([t]) => u[t]),
    f && gl(t, ([t]) => f[t], n),
    e ||
      (function (t, n) {
        n &&
          t
            .filter(([t]) => Ir(n[t]))
            .append("title")
            .call(cl, n);
      })(t, o);
}
function hl(t, n, e) {
  const r = K(t, (t) => n[t]);
  return (
    void 0 === e &&
      r.size > (1 + t.length) >> 1 &&
      rl(
        "Warning: the implicit z channel has high cardinality. This may occur when the fill or stroke channel is associated with quantitative data rather than ordinal or categorical data. You can suppress this warning by setting the z option explicitly; if this data represents a single series, set z to null.",
      ),
    r.values()
  );
}
function* dl(t, n, e, r) {
  const { z: o } = e,
    { z: i } = r,
    a = (function (
      {
        ariaLabel: t,
        title: n,
        fill: e,
        fillOpacity: r,
        stroke: o,
        strokeOpacity: i,
        strokeWidth: a,
        opacity: l,
        href: s,
      },
      { tip: c },
    ) {
      return [t, c ? void 0 : n, e, r, o, i, a, l, s].filter(
        (t) => void 0 !== t,
      );
    })(r, e),
    l = [...n, ...a];
  for (const n of i ? hl(t, i, o) : [t]) {
    let t, e;
    t: for (const r of n) {
      for (const t of l)
        if (!Cr(t[r])) {
          e && e.push(-1);
          continue t;
        }
      if (void 0 !== t) {
        e.push(r);
        for (let n = 0; n < a.length; ++n) {
          if (ti(a[n][r]) !== t[n]) {
            yield e, (t = a.map((t) => ti(t[r]))), (e = [r]);
            continue t;
          }
        }
      } else e && (yield e), (t = a.map((t) => ti(t[r]))), (e = [r]);
    }
    e && (yield e);
  }
}
function pl(t) {
  return (
    !0 === t
      ? (t = "frame")
      : !1 === t
      ? (t = null)
      : null != t && (t = Wo(t, "clip", ["frame", "sphere"])),
    t
  );
}
function ml(t, n, e, r) {
  !(function (t, n, e, r) {
    let o;
    const { clip: i = r.clip } = n;
    switch (i) {
      case "frame": {
        const {
            width: n,
            height: i,
            marginLeft: a,
            marginRight: l,
            marginTop: s,
            marginBottom: c,
          } = e,
          u = al();
        (o = `url(#${u})`),
          (t = El("svg:g", r)
            .call((t) =>
              t
                .append("svg:clipPath")
                .attr("id", u)
                .append("rect")
                .attr("x", a)
                .attr("y", s)
                .attr("width", n - l - a)
                .attr("height", i - s - c),
            )
            .each(function () {
              this.appendChild(t.node()), (t.node = () => this);
            }));
        break;
      }
      case "sphere": {
        const { projection: n } = r;
        if (!n)
          throw new Error('the "sphere" clip option requires a projection');
        const e = al();
        (o = `url(#${e})`),
          t
            .append("clipPath")
            .attr("id", e)
            .append("path")
            .attr("d", dt(n)({ type: "Sphere" }));
        break;
      }
    }
    vl(t, "aria-label", n.ariaLabel),
      vl(t, "aria-description", n.ariaDescription),
      vl(t, "aria-hidden", n.ariaHidden),
      vl(t, "clip-path", o);
  })(t, n, e, r),
    vl(t, "fill", n.fill),
    vl(t, "fill-opacity", n.fillOpacity),
    vl(t, "stroke", n.stroke),
    vl(t, "stroke-width", n.strokeWidth),
    vl(t, "stroke-opacity", n.strokeOpacity),
    vl(t, "stroke-linejoin", n.strokeLinejoin),
    vl(t, "stroke-linecap", n.strokeLinecap),
    vl(t, "stroke-miterlimit", n.strokeMiterlimit),
    vl(t, "stroke-dasharray", n.strokeDasharray),
    vl(t, "stroke-dashoffset", n.strokeDashoffset),
    vl(t, "shape-rendering", n.shapeRendering),
    vl(t, "filter", n.imageFilter),
    vl(t, "paint-order", n.paintOrder);
  const { pointerEvents: o = !1 === r.pointerSticky ? "none" : void 0 } = n;
  vl(t, "pointer-events", o);
}
function yl(t, n) {
  !(function (t, n, e) {
    null != e && t.style(n, e);
  })(t, "mix-blend-mode", n.mixBlendMode),
    vl(t, "opacity", n.opacity);
}
function gl(t, n, e) {
  t.each(function (t) {
    const r = n(t);
    if (null != r) {
      const t = this.ownerDocument.createElementNS(ht.svg, "a");
      t.setAttribute("fill", "inherit"),
        t.setAttributeNS(ht.xlink, "href", r),
        null != e && t.setAttribute("target", e),
        this.parentNode.insertBefore(t, this).appendChild(this);
    }
  });
}
function vl(t, n, e) {
  null != e && t.attr(n, e);
}
function xl(t, n, { x: e, y: r }, o = ol, i = ol) {
  (o += n.dx),
    (i += n.dy),
    e?.bandwidth && (o += e.bandwidth() / 2),
    r?.bandwidth && (i += r.bandwidth() / 2),
    (o || i) && t.attr("transform", `translate(${o},${i})`);
}
function wl(t, n) {
  if ((t = ko(t)) !== n) return t;
}
function bl(t, n) {
  if ((t = $o(t)) !== n) return t;
}
const kl =
  /^-?([_a-z]|[\240-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])([_a-z0-9-]|[\240-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])*$/i;
function $l(t) {
  if (void 0 === t) return "plot-d6a7b5";
  if (((t = `${t}`), !kl.test(t))) throw new Error(`invalid class name: ${t}`);
  return t;
}
function Ml(t, n) {
  if ("string" == typeof n) t.property("style", n);
  else if (null != n) for (const e of t) Object.assign(e.style, n);
}
function Ll(
  { frameAnchor: t },
  {
    width: n,
    height: e,
    marginTop: r,
    marginRight: o,
    marginBottom: i,
    marginLeft: a,
  },
) {
  return [
    /left$/.test(t) ? a : /right$/.test(t) ? n - o : (a + n - o) / 2,
    /^top/.test(t) ? r : /^bottom/.test(t) ? e - i : (r + e - i) / 2,
  ];
}
function Al(t = {}) {
  const {
    document: n = "undefined" != typeof window ? window.document : void 0,
    clip: e,
  } = t;
  return { document: n, clip: pl(e) };
}
function El(t, { document: n }) {
  return pt(mt(t).call(n.documentElement));
}
const zl = Math.PI,
  Ol = 2 * zl,
  Sl = 0.618;
function Nl(
  {
    projection: t,
    inset: n = 0,
    insetTop: e = n,
    insetRight: r = n,
    insetBottom: o = n,
    insetLeft: i = n,
  } = {},
  a,
) {
  if (null == t) return;
  if ("function" == typeof t.stream) return t;
  let l,
    s,
    c = "frame";
  if (Po(t)) {
    let n;
    if (
      (({
        type: t,
        domain: s,
        inset: n,
        insetTop: e = void 0 !== n ? n : e,
        insetRight: r = void 0 !== n ? n : r,
        insetBottom: o = void 0 !== n ? n : o,
        insetLeft: i = void 0 !== n ? n : i,
        clip: c = c,
        ...l
      } = t),
      null == t)
    )
      return;
  }
  "function" != typeof t && ({ type: t } = Cl(t));
  const {
      width: u,
      height: f,
      marginLeft: h,
      marginRight: d,
      marginTop: p,
      marginBottom: m,
    } = a,
    y = u - h - d - i - r,
    g = f - p - m - e - o;
  if (((t = t?.({ width: y, height: g, clip: c, ...l })), null == t)) return;
  c = (function (t, n, e, r, o) {
    if (!1 === t || null == t || "number" == typeof t) return (t) => t;
    !0 === t && (t = "frame");
    if ("frame" === `${t}`.toLowerCase()) return gt(n, e, r, o);
    throw new Error(`unknown projection clip type: ${t}`);
  })(c, h, p, u - d, f - m);
  let v,
    x = h + i,
    w = p + e;
  if (null != s) {
    const [[n, e], [r, o]] = dt(t).bounds(s),
      i = Math.min(y / (r - n), g / (o - e));
    i > 0
      ? ((x -= (i * (n + r) - y) / 2),
        (w -= (i * (e + o) - g) / 2),
        (v = yt({
          point(t, n) {
            this.stream.point(t * i + x, n * i + w);
          },
        })))
      : rl(
          "Warning: the projection could not be fit to the specified domain; using the default scale.",
        );
  }
  return (
    (v ??=
      0 === x && 0 === w
        ? Il()
        : yt({
            point(t, n) {
              this.stream.point(t + x, n + w);
            },
          })),
    { stream: (n) => t.stream(v.stream(c(n))) }
  );
}
function Cl(t) {
  switch (`${t}`.toLowerCase()) {
    case "albers-usa":
      return Tl(zt, 0.7463, 0.4673);
    case "albers":
      return Rl(Ct, 0.7463, 0.4673);
    case "azimuthal-equal-area":
      return Tl(Et, 4, 4);
    case "azimuthal-equidistant":
      return Tl(At, Ol, Ol);
    case "conic-conformal":
      return Rl(Nt, Ol, Ol);
    case "conic-equal-area":
      return Rl(St, 6.1702, 2.9781);
    case "conic-equidistant":
      return Rl(Ot, 7.312, 3.6282);
    case "equal-earth":
      return Tl(Lt, 5.4133, 2.6347);
    case "equirectangular":
      return Tl(Mt, Ol, zl);
    case "gnomonic":
      return Tl($t, 3.4641, 3.4641);
    case "identity":
      return { type: Il };
    case "reflect-y":
      return { type: Wl };
    case "mercator":
      return Tl(kt, Ol, Ol);
    case "orthographic":
      return Tl(bt, 2, 2);
    case "stereographic":
      return Tl(wt, 2, 2);
    case "transverse-mercator":
      return Tl(xt, Ol, Ol);
    default:
      throw new Error(`unknown projection type: ${t}`);
  }
}
function Tl(t, n, e) {
  return {
    type: ({
      width: r,
      height: o,
      rotate: i,
      precision: a = 0.15,
      clip: l,
    }) => {
      const s = t();
      return (
        null != a && s.precision?.(a),
        null != i && s.rotate?.(i),
        "number" == typeof l && s.clipAngle?.(l),
        s.scale(Math.min(r / n, o / e)),
        s.translate([r / 2, o / 2]),
        s
      );
    },
    aspectRatio: e / n,
  };
}
function Rl(t, n, e) {
  const { type: r, aspectRatio: o } = Tl(t, n, e);
  return {
    type: (t) => {
      const { parallels: n, domain: e, width: o, height: i } = t,
        a = r(t);
      return (
        null != n &&
          (a.parallels(n),
          void 0 === e && a.fitSize([o, i], { type: "Sphere" })),
        a
      );
    },
    aspectRatio: o,
  };
}
const Il = Eo({ stream: (t) => t }),
  Wl = Eo(
    yt({
      point(t, n) {
        this.stream.point(t, -n);
      },
    }),
  );
function jl(t, n, e, r) {
  const o = e[t],
    i = e[n],
    a = o.length,
    l = (e[t] = new Float64Array(a).fill(NaN)),
    s = (e[n] = new Float64Array(a).fill(NaN));
  let c;
  const u = r.stream({
    point(t, n) {
      (l[c] = t), (s[c] = n);
    },
  });
  for (c = 0; c < a; ++c) u.point(o[c], i[c]);
}
function Bl({ projection: t } = {}) {
  return (
    null != t &&
    ("function" == typeof t.stream || (Po(t) && (t = t.type), null != t))
  );
}
function Fl(t, n, { projection: e }) {
  const { x: r, y: o } = t;
  let i = {};
  return (
    r && (i.x = r),
    o && (i.y = o),
    (i = ja(i, n)),
    e && "x" === r?.scale && "y" === o?.scale && jl("x", "y", i, e),
    r && (i.x = Oo(i.x)),
    o && (i.y = Oo(i.y)),
    i
  );
}
function Dl(t) {
  const n = [],
    e = [],
    r = { scale: "x", value: n },
    o = { scale: "y", value: e },
    i = {
      point(t, r) {
        n.push(t), e.push(r);
      },
      lineStart() {},
      lineEnd() {},
      polygonStart() {},
      polygonEnd() {},
      sphere() {},
    };
  for (const n of t.value) vt(n, i);
  return [r, o];
}
const ql = new Map([
  ["accent", Rt],
  ["category10", It],
  ["dark2", Wt],
  [
    "observable10",
    [
      "#4269d0",
      "#efb118",
      "#ff725c",
      "#6cc5b0",
      "#3ca951",
      "#ff8ab7",
      "#a463f2",
      "#97bbf5",
      "#9c6b4e",
      "#9498a0",
    ],
  ],
  ["paired", jt],
  ["pastel1", Bt],
  ["pastel2", Ft],
  ["set1", Dt],
  ["set2", qt],
  ["set3", _t],
  ["tableau10", Pt],
]);
const _l = new Map([
  ...ql,
  ["brbg", Vl(Yt, Vt)],
  ["prgn", Vl(Ht, Ut)],
  ["piyg", Vl(Gt, Xt)],
  ["puor", Vl(Jt, Zt)],
  ["rdbu", Vl(Qt, Kt)],
  ["rdgy", Vl(nn, tn)],
  ["rdylbu", Vl(rn, en)],
  ["rdylgn", Vl(an, on)],
  ["spectral", Vl(sn, ln)],
  ["burd", Yl(Qt, Kt)],
  ["buylrd", Yl(rn, en)],
  ["blues", Pl(un, cn)],
  ["greens", Pl(hn, fn)],
  ["greys", Pl(pn, dn)],
  ["oranges", Pl(yn, mn)],
  ["purples", Pl(vn, gn)],
  ["reds", Pl(wn, xn)],
  ["turbo", Ul(bn)],
  ["viridis", Ul(kn)],
  ["magma", Ul($n)],
  ["inferno", Ul(Mn)],
  ["plasma", Ul(Ln)],
  ["cividis", Ul(An)],
  ["cubehelix", Ul(En)],
  ["warm", Ul(zn)],
  ["cool", Ul(On)],
  ["bugn", Pl(Nn, Sn)],
  ["bupu", Pl(Tn, Cn)],
  ["gnbu", Pl(In, Rn)],
  ["orrd", Pl(jn, Wn)],
  ["pubu", Pl(Fn, Bn)],
  ["pubugn", Pl(qn, Dn)],
  ["purd", Pl(Pn, _n)],
  ["rdpu", Pl(Yn, Vn)],
  ["ylgn", Pl(Hn, Un)],
  ["ylgnbu", Pl(Gn, Xn)],
  ["ylorbr", Pl(Jn, Zn)],
  ["ylorrd", Pl(Qn, Kn)],
  ["rainbow", Hl(te)],
  ["sinebow", Hl(ne)],
]);
function Pl(t, n) {
  return ({ length: e }) =>
    1 === e
      ? [t[3][1]]
      : 2 === e
      ? [t[3][1], t[3][2]]
      : (e = Math.max(3, Math.floor(e))) > 9
      ? Tt(n, e)
      : t[e];
}
function Vl(t, n) {
  return ({ length: e }) =>
    2 === e
      ? [t[3][0], t[3][2]]
      : (e = Math.max(3, Math.floor(e))) > 11
      ? Tt(n, e)
      : t[e];
}
function Yl(t, n) {
  return ({ length: e }) =>
    2 === e
      ? [t[3][2], t[3][0]]
      : (e = Math.max(3, Math.floor(e))) > 11
      ? Tt((t) => n(1 - t), e)
      : t[e].slice().reverse();
}
function Ul(t) {
  return ({ length: n }) => Tt(t, Math.max(2, Math.floor(n)));
}
function Hl(t) {
  return ({ length: n }) => Tt(t, Math.floor(n) + 1).slice(0, -1);
}
function Xl(t) {
  const n = `${t}`.toLowerCase();
  if (!_l.has(n)) throw new Error(`unknown ordinal scheme: ${n}`);
  return _l.get(n);
}
function Gl(t, n) {
  const e = Xl(t),
    r = "function" == typeof e ? e({ length: n }) : e;
  return r.length !== n ? r.slice(0, n) : r;
}
const Zl = new Map([
  ["brbg", Vt],
  ["prgn", Ut],
  ["piyg", Xt],
  ["puor", Zt],
  ["rdbu", Kt],
  ["rdgy", tn],
  ["rdylbu", en],
  ["rdylgn", on],
  ["spectral", ln],
  ["burd", (t) => Kt(1 - t)],
  ["buylrd", (t) => en(1 - t)],
  ["blues", cn],
  ["greens", fn],
  ["greys", dn],
  ["purples", gn],
  ["reds", xn],
  ["oranges", mn],
  ["turbo", bn],
  ["viridis", kn],
  ["magma", $n],
  ["inferno", Mn],
  ["plasma", Ln],
  ["cividis", An],
  ["cubehelix", En],
  ["warm", zn],
  ["cool", On],
  ["bugn", Sn],
  ["bupu", Cn],
  ["gnbu", Rn],
  ["orrd", Wn],
  ["pubugn", Dn],
  ["pubu", Bn],
  ["purd", _n],
  ["rdpu", Vn],
  ["ylgnbu", Xn],
  ["ylgn", Un],
  ["ylorbr", Zn],
  ["ylorrd", Kn],
  ["rainbow", te],
  ["sinebow", ne],
]);
function Jl(t) {
  const n = `${t}`.toLowerCase();
  if (!Zl.has(n)) throw new Error(`unknown quantitative scheme: ${n}`);
  return Zl.get(n);
}
const Kl = new Set([
  "brbg",
  "prgn",
  "piyg",
  "puor",
  "rdbu",
  "rdgy",
  "rdylbu",
  "rdylgn",
  "spectral",
  "burd",
  "buylrd",
]);
const Ql = (t) => (n) => t(1 - n),
  ts = [0, 1],
  ns = new Map([
    ["number", ce],
    ["rgb", pe],
    ["hsl", ye],
    ["hcl", ge],
    ["lab", ve],
  ]);
function es(t) {
  const n = `${t}`.toLowerCase();
  if (!ns.has(n)) throw new Error(`unknown interpolator: ${n}`);
  return ns.get(n);
}
function rs(
  t,
  n,
  e,
  {
    type: r,
    nice: o,
    clamp: i,
    zero: a,
    domain: l = ls(t, e),
    unknown: s,
    round: c,
    scheme: u,
    interval: f,
    range: h = Wi.get(t) === Ni
      ? cs(e, l)
      : Wi.get(t) === Ci
      ? us(e, l)
      : Wi.get(t) === Ti
      ? ts
      : void 0,
    interpolate: d = Wi.get(t) === Si
      ? null == u && void 0 !== h
        ? pe
        : Jl(void 0 !== u ? u : "cyclical" === r ? "rainbow" : "turbo")
      : c
      ? me
      : ce,
    reverse: p,
  },
) {
  if (
    ((f = ci(f, r)),
    ("cyclical" !== r && "sequential" !== r) || (r = "linear"),
    "function" != typeof d && (d = es(d)),
    (p = !!p),
    void 0 !== h)
  ) {
    if ((l = jo(l)).length !== (h = jo(h)).length) {
      if (1 === d.length) throw new Error("invalid piecewise interpolator");
      (d = de(d, h)), (h = void 0);
    }
  }
  if (
    (1 === d.length
      ? (p && ((d = Ql(d)), (p = !1)),
        void 0 === h &&
          2 ===
            (h = Float64Array.from(l, (t, n) => n / (l.length - 1))).length &&
          (h = ts),
        n.interpolate((h === ts ? Eo : ds)(d)))
      : n.interpolate(d),
    a)
  ) {
    const [t, n] = le(l);
    (t > 0 || n < 0) &&
      (Ei((l = Fo(l))) !== Math.sign(t) ? (l[l.length - 1] = 0) : (l[0] = 0));
  }
  return (
    p && (l = ue(l)),
    n.domain(l).unknown(s),
    o &&
      (n.nice(
        (function (t, n) {
          return !0 === t
            ? void 0
            : "number" == typeof t
            ? t
            : (function (t, n) {
                if ((t = ci(t, n)) && "function" != typeof t.ceil)
                  throw new Error("invalid interval: missing ceil method");
                return t;
              })(t, n);
        })(o, r),
      ),
      (l = n.domain())),
    void 0 !== h && n.range(h),
    i && n.clamp(i),
    { type: r, domain: l, range: h, scale: n, interpolate: d, interval: f }
  );
}
function os(t, n, { exponent: e = 1, ...r }) {
  return rs(t, re().exponent(e), n, { ...r, type: "pow" });
}
function is(
  t,
  e,
  {
    domain: r = [0],
    unknown: o,
    scheme: i = "rdylbu",
    interpolate: a,
    range: l = void 0 !== a
      ? Tt(a, r.length + 1)
      : Wi.get(t) === Si
      ? Gl(i, r.length + 1)
      : void 0,
    reverse: s,
  },
) {
  const c = Ei((r = jo(r)));
  if (
    !isNaN(c) &&
    !(function (t, e) {
      for (let r = 1, o = t.length, i = t[0]; r < o; ++r) {
        const o = n(i, (i = t[r]));
        if (0 !== o && o !== e) return !1;
      }
      return !0;
    })(r, c)
  )
    throw new Error(`the ${t} scale has a non-monotonic domain`);
  return (
    s && (l = ue(l)),
    {
      type: "threshold",
      scale: fe(c < 0 ? ue(r) : r, void 0 === l ? [] : l).unknown(o),
      domain: r,
      range: l,
    }
  );
}
function as(t, n = Wr) {
  return t.length
    ? [
        ct(t, ({ value: t }) => (void 0 === t ? t : ct(t, n))),
        N(t, ({ value: t }) => (void 0 === t ? t : N(t, n))),
      ]
    : [0, 1];
}
function ls(t, n) {
  const e = Wi.get(t);
  return (e === Ni || e === Ti || e === Ci ? ss : as)(n);
}
function ss(t) {
  return [
    0,
    t.length ? N(t, ({ value: t }) => (void 0 === t ? t : N(t, Wr))) : 1,
  ];
}
function cs(t, n) {
  const e = t.find(({ radius: t }) => void 0 !== t);
  if (void 0 !== e) return [0, e.radius];
  const r = W(t, 0.5, ({ value: t }) => (void 0 === t ? NaN : W(t, 0.25, jr))),
    o = n.map((t) => 3 * Math.sqrt(t / r)),
    i = 30 / N(o);
  return i < 1 ? o.map((t) => t * i) : o;
}
function us(t, n) {
  const e = ot(t, ({ value: t }) => (void 0 === t ? NaN : ot(t, Math.abs))),
    r = n.map((t) => (12 * t) / e),
    o = 60 / N(r);
  return o < 1 ? r.map((t) => t * o) : r;
}
function fs(t) {
  for (const { value: n } of t)
    if (void 0 !== n)
      for (let e of n) {
        if (e > 0) return as(t, jr);
        if (e < 0) return as(t, Br);
      }
  return [1, 10];
}
function hs(t) {
  const n = [];
  for (const { value: e } of t) if (void 0 !== e) for (const t of e) n.push(t);
  return n;
}
function ds(t) {
  return (n, e) => (r) => t(n + r * (e - n));
}
function ps(
  t,
  e,
  r,
  o,
  {
    type: i,
    nice: a,
    clamp: l,
    domain: s = as(o),
    unknown: c,
    pivot: u = 0,
    scheme: f,
    range: h,
    symmetric: d = !0,
    interpolate: p = Wi.get(t) === Si
      ? null == f && void 0 !== h
        ? pe
        : Jl(void 0 !== f ? f : "rdbu")
      : ce,
    reverse: m,
  },
) {
  (u = +u), (s = jo(s));
  let [y, g] = s;
  if (
    (s.length > 2 &&
      rl(`Warning: the diverging ${t} scale domain contains extra elements.`),
    n(y, g) < 0 && (([y, g] = [g, y]), (m = !m)),
    (y = Math.min(y, u)),
    (g = Math.max(g, u)),
    "function" != typeof p && (p = es(p)),
    void 0 !== h && (p = 1 === p.length ? ds(p)(...h) : de(p, h)),
    m && (p = Ql(p)),
    d)
  ) {
    const t = r.apply(u),
      n = t - r.apply(y),
      e = r.apply(g) - t;
    n < e ? (y = r.invert(t - e)) : n > e && (g = r.invert(t + n));
  }
  return (
    e.domain([y, u, g]).unknown(c).interpolator(p),
    l && e.clamp(l),
    a && e.nice(a),
    { type: i, domain: [y, g], pivot: u, interpolate: p, scale: e }
  );
}
function ms(t, n, { exponent: e = 1, ...r }) {
  return ps(
    t,
    we().exponent((e = +e)),
    (function (t) {
      return 0.5 === t
        ? xs
        : {
            apply: (n) => Math.sign(n) * Math.pow(Math.abs(n), t),
            invert: (n) => Math.sign(n) * Math.pow(Math.abs(n), 1 / t),
          };
    })(e),
    n,
    { ...r, type: "diverging-pow" },
  );
}
function ys(t, n, { constant: e = 1, ...r }) {
  return ps(
    t,
    ke().constant((e = +e)),
    (function (t) {
      return {
        apply: (n) => Math.sign(n) * Math.log1p(Math.abs(n / t)),
        invert: (n) => Math.sign(n) * Math.expm1(Math.abs(n)) * t,
      };
    })(e),
    n,
    r,
  );
}
const gs = { apply: (t) => t, invert: (t) => t },
  vs = { apply: Math.log, invert: Math.exp },
  xs = {
    apply: (t) => Math.sign(t) * Math.sqrt(Math.abs(t)),
    invert: (t) => Math.sign(t) * (t * t),
  };
function ws(t, n, e, r) {
  return rs(t, n, e, r);
}
const bs = Symbol("ordinal");
function ks(
  t,
  n,
  e,
  { type: r, interval: o, domain: i, range: a, reverse: l, hint: s },
) {
  return (
    (o = ci(o, r)),
    void 0 === i && (i = Ls(e, o, t)),
    ("categorical" !== r && r !== bs) || (r = "ordinal"),
    l && (i = ue(i)),
    (i = n.domain(i).domain()),
    void 0 !== a && ("function" == typeof a && (a = a(i)), n.range(a)),
    { type: r, domain: i, range: a, scale: n, hint: s, interval: o }
  );
}
function $s(
  t,
  n,
  { type: e, interval: r, domain: o, range: i, scheme: a, unknown: l, ...s },
) {
  let c;
  if (((r = ci(r, e)), void 0 === o && (o = Ls(n, r, t)), Wi.get(t) === Ri))
    (c = (function (t) {
      return { fill: As(t, "fill"), stroke: As(t, "stroke") };
    })(n)),
      (i =
        void 0 === i
          ? (function (t) {
              return $i(t.fill) ? Oe : Se;
            })(c)
          : Bo(i, _i));
  else if (
    Wi.get(t) === Si &&
    (void 0 !== i ||
      ("ordinal" !== e && e !== bs) ||
      ((i = (function (t, n = "greys") {
        const e = new Set(),
          [r, o] = Gl(n, 2);
        for (const n of t)
          if (null != n)
            if (!0 === n) e.add(o);
            else {
              if (!1 !== n) return;
              e.add(r);
            }
        return [...e];
      })(o, a)),
      void 0 !== i && (a = void 0)),
    void 0 === a &&
      void 0 === i &&
      (a = "ordinal" === e ? "turbo" : "observable10"),
    void 0 !== a)
  )
    if (void 0 !== i) {
      const t = Jl(a),
        n = i[0],
        e = i[1] - i[0];
      i = ({ length: r }) => Tt((r) => t(n + e * r), r);
    } else i = Xl(a);
  if (l === Le)
    throw new Error(`implicit unknown on ${t} scale is not supported`);
  return ks(t, Ae().unknown(l), n, {
    ...s,
    type: e,
    domain: o,
    range: i,
    hint: c,
  });
}
function Ms(t, n, e, r) {
  let { round: o } = e;
  return (
    void 0 !== o && t.round((o = !!o)), ((t = ks(r, t, n, e)).round = o), t
  );
}
function Ls(t, n, e) {
  const r = new nt();
  for (const { value: n, domain: e } of t) {
    if (void 0 !== e) return e();
    if (void 0 !== n) for (const t of n) r.add(t);
  }
  if (void 0 !== n) {
    const [t, e] = le(r).map(n.floor, n);
    return n.range(t, n.offset(e));
  }
  if (r.size > 1e4 && Wi.get(e) === Oi)
    throw new Error(
      `implicit ordinal domain of ${e} scale has more than 10,000 values`,
    );
  return J(r, Tr);
}
function As(t, n) {
  let e;
  for (const { hint: r } of t) {
    const t = r?.[n];
    if (void 0 !== t)
      if (void 0 === e) e = t;
      else if (e !== t) return;
  }
  return e;
}
function Es(
  t,
  {
    label: n,
    inset: e = 0,
    insetTop: r = e,
    insetRight: o = e,
    insetBottom: i = e,
    insetLeft: a = e,
    round: l,
    nice: s,
    clamp: c,
    zero: u,
    align: f,
    padding: h,
    projection: d,
    facet: { label: p = n } = {},
    ...m
  } = {},
) {
  const y = {};
  for (const [e, g] of t) {
    const t = m[e],
      v = Bs(e, g, {
        round: Wi.get(e) === Oi ? l : void 0,
        nice: s,
        clamp: c,
        zero: u,
        align: f,
        padding: h,
        projection: d,
        ...t,
      });
    if (v) {
      let {
        label: l = "fx" === e || "fy" === e ? p : n,
        percent: s,
        transform: c,
        inset: u,
        insetTop: f = void 0 !== u ? u : "y" === e ? r : 0,
        insetRight: h = void 0 !== u ? u : "x" === e ? o : 0,
        insetBottom: d = void 0 !== u ? u : "y" === e ? i : 0,
        insetLeft: m = void 0 !== u ? u : "x" === e ? a : 0,
      } = t || {};
      if (null == c) c = void 0;
      else if ("function" != typeof c)
        throw new Error("invalid scale transform; not a function");
      (v.percent = !!s),
        (v.label = void 0 === l ? Os(g, v) : l),
        (v.transform = c),
        "x" === e || "fx" === e
          ? ((v.insetLeft = +m), (v.insetRight = +h))
          : ("y" !== e && "fy" !== e) ||
            ((v.insetTop = +f), (v.insetBottom = +d)),
        (y[e] = v);
    }
  }
  return y;
}
function zs(t) {
  const n = {},
    e = { scales: n };
  for (const [r, o] of Object.entries(t)) {
    const { scale: t, type: i, interval: a, label: l } = o;
    (n[r] = Gs(o)),
      (e[r] = t),
      (t.type = i),
      null != a && (t.interval = a),
      null != l && (t.label = l);
  }
  return e;
}
function Os(t = [], n) {
  let e;
  for (const { label: n } of t)
    if (void 0 !== n)
      if (void 0 === e) e = n;
      else if (e !== n) return;
  if (void 0 !== e)
    return (
      !Ps(n) && n.percent && (e = `${e} (%)`),
      { inferred: !0, toString: () => e }
    );
}
function Ss(t) {
  return Math.sign(Ei(t.domain())) * Math.sign(Ei(t.range()));
}
function Ns(t) {
  const {
    marginTop: n,
    marginRight: e,
    marginBottom: r,
    marginLeft: o,
    width: i,
    height: a,
    facet: { marginTop: l, marginRight: s, marginBottom: c, marginLeft: u },
  } = t;
  return {
    marginTop: Math.max(n, l),
    marginRight: Math.max(e, s),
    marginBottom: Math.max(r, c),
    marginLeft: Math.max(o, u),
    width: i,
    height: a,
  };
}
function Cs({ fx: t, fy: n }, e) {
  const {
    marginTop: r,
    marginRight: o,
    marginBottom: i,
    marginLeft: a,
    width: l,
    height: s,
  } = Ns(e);
  return {
    marginTop: r,
    marginRight: o,
    marginBottom: i,
    marginLeft: a,
    width: t ? t.scale.bandwidth() + a + o : l,
    height: n ? n.scale.bandwidth() + r + i : s,
    facet: { width: l, height: s },
  };
}
function Ts(t, n) {
  if (void 0 === t.range) {
    const { insetLeft: e, insetRight: r } = t,
      { width: o, marginLeft: i = 0, marginRight: a = 0 } = n,
      l = i + e,
      s = o - a - r;
    (t.range = [l, Math.max(l, s)]),
      Ps(t) || (t.range = Ws(t)),
      t.scale.range(t.range);
  }
  Is(t);
}
function Rs(t, n) {
  if (void 0 === t.range) {
    const { insetTop: e, insetBottom: r } = t,
      { height: o, marginTop: i = 0, marginBottom: a = 0 } = n,
      l = i + e,
      s = o - a - r;
    (t.range = [Math.max(l, s), l]),
      Ps(t) ? t.range.reverse() : (t.range = Ws(t)),
      t.scale.range(t.range);
  }
  Is(t);
}
function Is(t) {
  void 0 === t.round &&
    (function ({ type: t }) {
      return "point" === t || "band" === t;
    })(t) &&
    (function ({ scale: t }) {
      const n = t.domain().length,
        [e, r] = t.range(),
        o = t.paddingInner ? t.paddingInner() : 1,
        i = t.paddingOuter ? t.paddingOuter() : t.padding(),
        a = n - o,
        l = Math.abs(r - e) / Math.max(1, a + 2 * i);
      return (l - Math.floor(l)) * a;
    })(t) <= 30 &&
    t.scale.round(!0);
}
function Ws(t) {
  const n = t.scale.domain().length + Vs(t);
  if (!(n > 2)) return t.range;
  const [e, r] = t.range;
  return Array.from({ length: n }, (t, o) => e + (o / (n - 1)) * (r - e));
}
function js(t, n, e) {
  return Bs(t, void 0 === e ? void 0 : [{ hint: e }], { ...n });
}
function Bs(t, n = [], e = {}) {
  const r = (function (
    t,
    n,
    { type: e, domain: r, range: o, scheme: i, pivot: a, projection: l },
  ) {
    if (((e = Ds(e)), "fx" === t || "fy" === t)) return "band";
    ("x" !== t && "y" !== t) || null == l || (e = qs);
    for (const t of n) {
      const n = Ds(t.type);
      if (void 0 !== n)
        if (void 0 === e) e = n;
        else if (e !== n)
          throw new Error(`scale incompatible with channel: ${e} !== ${n}`);
    }
    if (e === qs) return;
    if (void 0 !== e) return e;
    if (void 0 === r && !n.some(({ value: t }) => void 0 !== t)) return;
    const s = Wi.get(t);
    if (s === Ni) return "sqrt";
    if (s === Ti || s === Ci) return "linear";
    if (s === Ri) return "ordinal";
    if ((r || o || []).length > 2) return _s(s);
    if (void 0 !== r) {
      if (pi(r)) return _s(s);
      if (mi(r)) return "utc";
    } else {
      const t = n.map(({ value: t }) => t).filter((t) => void 0 !== t);
      if (t.some(pi)) return _s(s);
      if (t.some(mi)) return "utc";
    }
    if (s === Si) {
      if (
        null != a ||
        (function (t) {
          return null != t && Kl.has(`${t}`.toLowerCase());
        })(i)
      )
        return "diverging";
      if (
        (function (t) {
          return null != t && ql.has(`${t}`.toLowerCase());
        })(i)
      )
        return "categorical";
    }
    return "linear";
  })(t, n, e);
  if (
    void 0 === e.type &&
    void 0 === e.domain &&
    void 0 === e.range &&
    null == e.interval &&
    "fx" !== t &&
    "fy" !== t &&
    Ps({ type: r })
  ) {
    const e = n.map(({ value: t }) => t).filter((t) => void 0 !== t);
    e.some(mi)
      ? rl(
          `Warning: some data associated with the ${t} scale are dates. Dates are typically associated with a "utc" or "time" scale rather than a "${Fs(
            r,
          )}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can specify the interval of the ${t} scale (e.g., d3.utcDay), or you can suppress this warning by setting the type of the ${t} scale to "${Fs(
            r,
          )}".`,
        )
      : e.some(yi)
      ? rl(
          `Warning: some data associated with the ${t} scale are strings that appear to be dates (e.g., YYYY-MM-DD). If these strings represent dates, you should parse them to Date objects. Dates are typically associated with a "utc" or "time" scale rather than a "${Fs(
            r,
          )}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can suppress this warning by setting the type of the ${t} scale to "${Fs(
            r,
          )}".`,
        )
      : e.some(gi) &&
        rl(
          `Warning: some data associated with the ${t} scale are strings that appear to be numbers. If these strings represent numbers, you should parse or coerce them to numbers. Numbers are typically associated with a "linear" scale rather than a "${Fs(
            r,
          )}" scale. If you want to treat this data as ordinal, you can specify the interval of the ${t} scale (e.g., 1 for integers), or you can suppress this warning by setting the type of the ${t} scale to "${Fs(
            r,
          )}".`,
        );
  }
  switch (((e.type = r), r)) {
    case "diverging":
    case "diverging-sqrt":
    case "diverging-pow":
    case "diverging-log":
    case "diverging-symlog":
    case "cyclical":
    case "sequential":
    case "linear":
    case "sqrt":
    case "threshold":
    case "quantile":
    case "pow":
    case "log":
    case "symlog":
      e = Us(n, e, Oo);
      break;
    case "identity":
      switch (Wi.get(t)) {
        case Oi:
          e = Us(n, e, Oo);
          break;
        case Ri:
          e = Us(n, e, Hs);
      }
      break;
    case "utc":
    case "time":
      e = Us(n, e, No);
  }
  switch (r) {
    case "diverging":
      return (function (t, n, e) {
        return ps(t, xe(), gs, n, e);
      })(t, n, e);
    case "diverging-sqrt":
      return (function (t, n, e) {
        return ms(t, n, { ...e, exponent: 0.5 });
      })(t, n, e);
    case "diverging-pow":
      return ms(t, n, e);
    case "diverging-log":
      return (function (
        t,
        n,
        {
          base: e = 10,
          pivot: r = 1,
          domain: o = as(n, r < 0 ? Br : jr),
          ...i
        },
      ) {
        return ps(t, be().base((e = +e)), vs, n, { domain: o, pivot: r, ...i });
      })(t, n, e);
    case "diverging-symlog":
      return ys(t, n, e);
    case "categorical":
    case "ordinal":
    case bs:
      return $s(t, n, e);
    case "cyclical":
    case "sequential":
    case "linear":
      return (function (t, n, e) {
        return rs(t, ee(), n, e);
      })(t, n, e);
    case "sqrt":
      return (function (t, n, e) {
        return os(t, n, { ...e, exponent: 0.5 });
      })(t, n, e);
    case "threshold":
      return is(t, 0, e);
    case "quantile":
      return (function (
        t,
        n,
        {
          range: e,
          quantiles: r = void 0 === e ? 5 : (e = [...e]).length,
          n: o = r,
          scheme: i = "rdylbu",
          domain: a = hs(n),
          unknown: l,
          interpolate: s,
          reverse: c,
        },
      ) {
        return (
          void 0 === e &&
            (e =
              void 0 !== s ? Tt(s, o) : Wi.get(t) === Si ? Gl(i, o) : void 0),
          a.length > 0 &&
            (a = ae(a, void 0 === e ? { length: o } : e).quantiles()),
          is(t, 0, { domain: a, range: e, reverse: c, unknown: l })
        );
      })(t, n, e);
    case "quantize":
      return (function (
        t,
        n,
        {
          range: e,
          n: r = void 0 === e ? 5 : (e = [...e]).length,
          scheme: o = "rdylbu",
          domain: i = ls(t, n),
          unknown: a,
          interpolate: l,
          reverse: s,
        },
      ) {
        const [c, u] = le(i);
        let f;
        return (
          void 0 === e
            ? ((f = se(c, u, r)),
              f[0] <= c && f.splice(0, 1),
              f[f.length - 1] >= u && f.pop(),
              (r = f.length + 1),
              (e =
                void 0 !== l ? Tt(l, r) : Wi.get(t) === Si ? Gl(o, r) : void 0))
            : ((f = Tt(ce(c, u), r + 1).slice(1, -1)),
              c instanceof Date && (f = f.map((t) => new Date(t)))),
          Ei(jo(i)) < 0 && f.reverse(),
          is(t, 0, { domain: f, range: e, reverse: s, unknown: a })
        );
      })(t, n, e);
    case "pow":
      return os(t, n, e);
    case "log":
      return (function (t, n, { base: e = 10, domain: r = fs(n), ...o }) {
        return rs(t, oe().base(e), n, { ...o, domain: r });
      })(t, n, e);
    case "symlog":
      return (function (t, n, { constant: e = 1, ...r }) {
        return rs(t, ie().constant(e), n, r);
      })(t, n, e);
    case "utc":
      return (function (t, n, e) {
        return ws(t, Me(), n, e);
      })(t, n, e);
    case "time":
      return (function (t, n, e) {
        return ws(t, $e(), n, e);
      })(t, n, e);
    case "point":
      return (function (t, n, { align: e = 0.5, padding: r = 0.5, ...o }) {
        return Ms(Ee().align(e).padding(r), n, o, t);
      })(t, n, e);
    case "band":
      return (function (
        t,
        n,
        {
          align: e = 0.5,
          padding: r = 0.1,
          paddingInner: o = r,
          paddingOuter: i = "fx" === t || "fy" === t ? 0 : r,
          ...a
        },
      ) {
        return Ms(ze().align(e).paddingInner(o).paddingOuter(i), n, a, t);
      })(t, n, e);
    case "identity":
      return (function (t) {
        return {
          type: "identity",
          scale:
            ((n = Wi.get(t)),
            n === Oi || n === Ni || n === Ci || n === Ti ? he() : (t) => t),
        };
        var n;
      })(t);
    case void 0:
      return;
    default:
      throw new Error(`unknown scale type: ${r}`);
  }
}
function Fs(t) {
  return "symbol" == typeof t ? t.description : t;
}
function Ds(t) {
  return "string" == typeof t ? `${t}`.toLowerCase() : t;
}
const qs = { toString: () => "projection" };
function _s(t) {
  switch (t) {
    case Oi:
      return "point";
    case Si:
      return bs;
    default:
      return "ordinal";
  }
}
function Ps({ type: t }) {
  return "ordinal" === t || "point" === t || "band" === t || t === bs;
}
function Vs({ type: t }) {
  return "threshold" === t;
}
function Ys(t) {
  if (void 0 === t) return !0;
  const n = t.domain(),
    e = t(n[0]);
  for (let r = 1, o = n.length; r < o; ++r) if (t(n[r]) - e) return !1;
  return !0;
}
function Us(t, { domain: n, ...e }, r) {
  for (const e of t)
    void 0 !== e.value &&
      (void 0 === n && (n = e.value?.domain), (e.value = r(e.value)));
  return { domain: void 0 === n ? n : r(n), ...e };
}
function Hs(t) {
  return Bo(t, _i);
}
function Xs(t = {}) {
  let n;
  for (const e in t)
    if (Wi.has(e) && Vo(t[e])) {
      if (void 0 !== n)
        throw new Error("ambiguous scale definition; multiple scales found");
      n = Gs(js(e, t[e]));
    }
  if (void 0 === n) throw new Error("invalid scale definition; no scale found");
  return n;
}
function Gs({
  scale: t,
  type: n,
  domain: e,
  range: r,
  interpolate: o,
  interval: i,
  transform: a,
  percent: l,
  pivot: s,
}) {
  if ("identity" === n)
    return { type: "identity", apply: (t) => t, invert: (t) => t };
  const c = t.unknown ? t.unknown() : void 0;
  return {
    type: n,
    domain: Fo(e),
    ...(void 0 !== r && { range: Fo(r) }),
    ...(void 0 !== a && { transform: a }),
    ...(l && { percent: l }),
    ...(void 0 !== c && { unknown: c }),
    ...(void 0 !== i && { interval: i }),
    ...(void 0 !== o && { interpolate: o }),
    ...(t.clamp && { clamp: t.clamp() }),
    ...(void 0 !== s && { pivot: s, symmetric: !1 }),
    ...(t.base && { base: t.base() }),
    ...(t.exponent && { exponent: t.exponent() }),
    ...(t.constant && { constant: t.constant() }),
    ...(t.align && { align: t.align(), round: t.round() }),
    ...(t.padding &&
      (t.paddingInner
        ? { paddingInner: t.paddingInner(), paddingOuter: t.paddingOuter() }
        : { padding: t.padding() })),
    ...(t.bandwidth && { bandwidth: t.bandwidth(), step: t.step() }),
    apply: (n) => t(n),
    ...(t.invert && { invert: (n) => t.invert(n) }),
  };
}
function Zs(
  { x: t, y: n, fy: e, fx: r },
  { projection: o, aspectRatio: i },
  {
    width: a,
    marginTopDefault: l,
    marginRightDefault: s,
    marginBottomDefault: c,
    marginLeftDefault: u,
  },
) {
  const f = e ? e.scale.domain().length : 1,
    h = (function (t) {
      if ("function" == typeof t?.stream) return Sl;
      if ((Po(t) && (t = t.type), null != t)) {
        if ("function" != typeof t) {
          const { aspectRatio: n } = Cl(t);
          if (n) return n;
        }
        return Sl;
      }
    })(o);
  if (h) {
    const t =
        ((1.1 * f - 0.1) / (1.1 * (r ? r.scale.domain().length : 1) - 0.1)) * h,
      n = Math.max(0.1, Math.min(10, t));
    return Math.round((a - u - s) * n + l + c);
  }
  const d = n ? (Ps(n) ? n.scale.domain().length : Math.max(7, 17 / f)) : 1;
  if (null != i) {
    if (((i = +i), !(isFinite(i) && i > 0)))
      throw new Error(`invalid aspectRatio: ${i}`);
    const o = Js("y", n) / (Js("x", t) * i),
      f = r ? r.scale.bandwidth() : 1,
      h = e ? e.scale.bandwidth() : 1;
    return (
      (o * (f * (a - u - s) - t.insetLeft - t.insetRight) +
        n.insetTop +
        n.insetBottom) /
        h +
      l +
      c
    );
  }
  return !(!n && !e) * Math.max(1, Math.min(60, d * f)) * 20 + 30 * !!r + 60;
}
function Js(t, n) {
  if (!n) throw new Error(`aspectRatio requires ${t} scale`);
  const { type: e, domain: r } = n;
  let o;
  switch (e) {
    case "linear":
    case "utc":
    case "time":
      o = Number;
      break;
    case "pow": {
      const t = n.scale.exponent();
      o = (n) => Math.pow(n, t);
      break;
    }
    case "log":
      o = Math.log;
      break;
    case "point":
    case "band":
      return r.length;
    default:
      throw new Error(`unsupported ${t} scale for aspectRatio: ${e}`);
  }
  const [i, a] = le(r);
  return Math.abs(o(a) - o(i));
}
function Ks(t, { fx: n, fy: e }) {
  const r = Zo(t),
    o = n?.value,
    i = e?.value;
  return n && e
    ? Q(
        r,
        (t) => ((t.fx = o[t[0]]), (t.fy = i[t[0]]), t),
        (t) => o[t],
        (t) => i[t],
      )
    : n
    ? Q(
        r,
        (t) => ((t.fx = o[t[0]]), t),
        (t) => o[t],
      )
    : Q(
        r,
        (t) => ((t.fy = i[t[0]]), t),
        (t) => i[t],
      );
}
function Qs(t) {
  const n = [],
    e = new Uint32Array(tt(t, (t) => t.length));
  for (const r of t) {
    let o = 0;
    for (const n of t) r !== n && (e.set(n, o), (o += n.length));
    n.push(e.slice(0, o));
  }
  return n;
}
const tc = new Map([
  ["top", ic],
  ["right", sc],
  ["bottom", ac],
  ["left", lc],
  ["top-left", cc(ic, lc)],
  ["top-right", cc(ic, sc)],
  ["bottom-left", cc(ac, lc)],
  ["bottom-right", cc(ac, sc)],
  [
    "top-empty",
    function (t, { y: n }, { x: e, y: r, empty: o }) {
      if (o) return !1;
      if (!n) return;
      const i = rc(n, r);
      if (i > 0) return oc(t, e, n[i - 1]);
    },
  ],
  [
    "right-empty",
    function (t, { x: n }, { x: e, y: r, empty: o }) {
      if (o) return !1;
      if (!n) return;
      const i = rc(n, e);
      if (i < n.length - 1) return oc(t, n[i + 1], r);
    },
  ],
  [
    "bottom-empty",
    function (t, { y: n }, { x: e, y: r, empty: o }) {
      if (o) return !1;
      if (!n) return;
      const i = rc(n, r);
      if (i < n.length - 1) return oc(t, e, n[i + 1]);
    },
  ],
  [
    "left-empty",
    function (t, { x: n }, { x: e, y: r, empty: o }) {
      if (o) return !1;
      if (!n) return;
      const i = rc(n, e);
      if (i > 0) return oc(t, n[i - 1], r);
    },
  ],
  [
    "empty",
    function (t, n, { empty: e }) {
      return e;
    },
  ],
]);
const nc = new WeakMap();
function ec(t) {
  let n = nc.get(t);
  return n || nc.set(t, (n = new Ce(Bo(t, (t, n) => [t, n])))), n;
}
function rc(t, n) {
  return ec(t).get(n);
}
function oc(t, n, e) {
  return (function (t, n, e) {
    return (
      (n = ti(n)),
      (e = ti(e)),
      t.find((t) => Object.is(ti(t.x), n) && Object.is(ti(t.y), e))
    );
  })(t, n, e)?.empty;
}
function ic(t, { y: n }, { y: e }) {
  return !n || 0 === rc(n, e);
}
function ac(t, { y: n }, { y: e }) {
  return !n || rc(n, e) === n.length - 1;
}
function lc(t, { x: n }, { x: e }) {
  return !n || 0 === rc(n, e);
}
function sc(t, { x: n }, { x: e }) {
  return !n || rc(n, e) === n.length - 1;
}
function cc(t, n) {
  return function () {
    return t.apply(null, arguments) && n.apply(null, arguments);
  };
}
function uc(t, { channels: { fx: n, fy: e }, groups: r }) {
  return n && e
    ? t.map(({ x: t, y: n }) => r.get(t)?.get(n) ?? [])
    : n
    ? t.map(({ x: t }) => r.get(t) ?? [])
    : t.map(({ y: t }) => r.get(t) ?? []);
}
class fc {
  constructor(t, n = {}, e = {}, r) {
    const {
      facet: o = "auto",
      facetAnchor: i,
      fx: a,
      fy: l,
      sort: s,
      dx: c = 0,
      dy: u = 0,
      margin: f = 0,
      marginTop: h = f,
      marginRight: d = f,
      marginBottom: p = f,
      marginLeft: m = f,
      clip: y = r?.clip,
      channels: g,
      tip: v,
      render: x,
    } = e;
    if (
      ((this.data = t),
      (this.sort = Uo(s) ? s : null),
      (this.initializer = Vi(e).initializer),
      (this.transform = this.initializer ? e.transform : Pi(e).transform),
      null === o || !1 === o
        ? (this.facet = null)
        : ((this.facet = Wo(!0 === o ? "include" : o, "facet", [
            "auto",
            "include",
            "exclude",
            "super",
          ])),
          (this.fx = t === yo && "string" == typeof a ? [a] : a),
          (this.fy = t === yo && "string" == typeof l ? [l] : l)),
      (this.facetAnchor = (function (t) {
        if (null == t) return null;
        const n = tc.get(`${t}`.toLowerCase());
        if (n) return n;
        throw new Error(`invalid facet anchor: ${t}`);
      })(i)),
      (n = zi(n)),
      void 0 !== g && (n = { ...pc(g), ...n }),
      void 0 !== r && (n = { ...ll(this, e, r), ...n }),
      (this.channels = Object.fromEntries(
        Object.entries(n)
          .map(([n, e]) => {
            if (Yo(e.value)) {
              const {
                value: t,
                label: n = e.label,
                scale: r = e.scale,
              } = e.value;
              e = { ...e, label: n, scale: r, value: t };
            }
            if (t === yo && "string" == typeof e.value) {
              const { value: t } = e;
              e = { ...e, value: [t] };
            }
            return [n, e];
          })
          .filter(([t, { value: n, optional: e }]) => {
            if (null != n) return !0;
            if (e) return !1;
            throw new Error(`missing channel value: ${t}`);
          }),
      )),
      (this.dx = +c),
      (this.dy = +u),
      (this.marginTop = +h),
      (this.marginRight = +d),
      (this.marginBottom = +p),
      (this.marginLeft = +m),
      (this.clip = pl(y)),
      (this.tip = (function (t) {
        return !0 === t
          ? "xy"
          : !1 === t || null == t
          ? null
          : "string" == typeof t
          ? Wo(t, "tip", ["x", "y", "xy"])
          : t;
      })(v)),
      "super" === this.facet)
    ) {
      if (a || l) throw new Error("super-faceting cannot use fx or fy");
      for (const t in this.channels) {
        const { scale: e } = n[t];
        if ("x" === e || "y" === e)
          throw new Error("super-faceting cannot use x or y");
      }
    }
    null != x && (this.render = dc(x, this.render));
  }
  initialize(t, n, e) {
    let r = jo(this.data);
    void 0 === t && null != r && (t = [Zo(r)]);
    const o = t;
    null != this.transform &&
      (({ facets: t, data: r } = this.transform(r, t, e)), (r = jo(r))),
      void 0 !== t && (t.original = o);
    const i = Wa(this.channels, r);
    return (
      null != this.sort &&
        (function (t, n, e, r, o) {
          const { order: i, reverse: a, reduce: l = !0, limit: s } = o;
          for (const c in o) {
            if (!Wi.has(c)) continue;
            let {
              value: u,
              order: f = i,
              reverse: h = a,
              reduce: d = l,
              limit: p = s,
            } = fi(o[c]);
            const m = u?.startsWith("-");
            if (
              (m && (u = u.slice(1)),
              (f =
                void 0 === f
                  ? m !== ("width" === u || "height" === u)
                    ? Ya
                    : Va
                  : Pa(f)),
              null == d || !1 === d)
            )
              continue;
            const y = "fx" === c || "fy" === c ? Da(n, r[c]) : Fa(e, c);
            if (!y) throw new Error(`missing channel for scale: ${c}`);
            const g = y.value,
              [v = 0, x = 1 / 0] = hi(p) ? p : p < 0 ? [p] : [0, p];
            if (null == u)
              y.domain = () => {
                let t = Array.from(new nt(g));
                return (
                  h && (t = t.reverse()),
                  (0 === v && x === 1 / 0) || (t = t.slice(v, x)),
                  t
                );
              };
            else {
              const n =
                  "data" === u
                    ? t
                    : "height" === u
                    ? qa(e, "y1", "y2")
                    : "width" === u
                    ? qa(e, "x1", "x2")
                    : _a(e, u, "y" === u ? "y2" : "x" === u ? "x2" : void 0),
                r = da(!0 === d ? "max" : d, n);
              y.domain = () => {
                let t = ft(
                  Zo(g),
                  (t) => r.reduceIndex(t, n),
                  (t) => g[t],
                );
                return (
                  f && t.sort(f),
                  h && t.reverse(),
                  (0 === v && x === 1 / 0) || (t = t.slice(v, x)),
                  t.map(Mo)
                );
              };
            }
          }
        })(r, t, i, n, this.sort),
      { data: r, facets: t, channels: i }
    );
  }
  filter(t, n, e) {
    for (const r in n) {
      const { filter: o = Cr } = n[r];
      if (null !== o) {
        const n = e[r];
        t = t.filter((t) => o(n[t]));
      }
    }
    return t;
  }
  project(t, n, e) {
    for (const r in t)
      if ("x" === t[r].scale && /^x|x$/.test(r)) {
        const o = r.replace(/^x|x$/, "y");
        o in t && "y" === t[o].scale && jl(r, o, n, e.projection);
      }
  }
  scale(t, n, e) {
    const r = ja(t, n);
    return e.projection && this.project(t, r, e), r;
  }
}
function hc(...t) {
  return (t.plot = fc.prototype.plot), t;
}
function dc(t, n) {
  if (null == t) return null === n ? void 0 : n;
  if (null == n) return null === t ? void 0 : t;
  if ("function" != typeof t)
    throw new TypeError(`invalid render transform: ${t}`);
  if ("function" != typeof n)
    throw new TypeError(`invalid render transform: ${n}`);
  return function (e, r, o, i, a, l) {
    return t.call(this, e, r, o, i, a, (t, e, r, o, i) =>
      n.call(this, t, e, r, o, i, l),
    );
  };
}
function pc(t) {
  return Object.fromEntries(
    Object.entries(zi(t)).map(
      ([t, n]) => (
        void 0 ===
          (n = "string" == typeof n ? { value: n, label: t } : fi(n)).filter &&
          null == n.scale &&
          (n = { ...n, filter: null }),
        [t, n]
      ),
    ),
  );
}
function mc(t, n) {
  return !0 === t?.tip
    ? { ...t, tip: n }
    : Po(t?.tip) && void 0 === t.tip.pointer
    ? { ...t, tip: { ...t.tip, pointer: n } }
    : t;
}
const yc = new WeakMap();
function gc(
  t,
  n,
  {
    x: e,
    y: r,
    px: o,
    py: i,
    maxRadius: a = 40,
    channels: l,
    render: s,
    ...c
  } = {},
) {
  return (
    (a = +a),
    null != o && ((e ??= null), (l = { ...l, px: { value: o, scale: "x" } })),
    null != i && ((r ??= null), (l = { ...l, py: { value: i, scale: "y" } })),
    {
      x: e,
      y: r,
      channels: l,
      ...c,
      render: dc(function (e, r, o, i, l, s) {
        const c = (l = { ...l, pointerSticky: !1 }).ownerSVGElement,
          { data: u } = l.getMarkState(this);
        let f = yc.get(c);
        f || yc.set(c, (f = { sticky: !1, roots: [], renders: [] }));
        let h = f.renders.push(C) - 1;
        const { x: d, y: p, fx: m, fy: y } = r;
        let g = m ? m(e.fx) - i.marginLeft : 0,
          v = y ? y(e.fy) - i.marginTop : 0;
        d?.bandwidth && (g += d.bandwidth() / 2),
          p?.bandwidth && (v += p.bandwidth() / 2);
        const x = null != e.fi;
        let w;
        if (x) {
          let t = f.facetStates;
          t || (f.facetStates = t = new Map()),
            (w = t.get(this)),
            w || t.set(this, (w = new Map()));
        }
        const [b, k] = Ll(this, i),
          { px: $, py: M } = o,
          L = $ ? (t) => $[t] : bc(o, b),
          A = M ? (t) => M[t] : kc(o, k);
        let E, z, O, S;
        function N(t, n) {
          if (x) {
            if ((S && (S = cancelAnimationFrame(S)), null != t))
              return (
                w.set(e.fi, n),
                void (S = requestAnimationFrame(() => {
                  S = null;
                  for (const [r, o] of w)
                    if (o < n || (o === n && r < e.fi)) {
                      t = null;
                      break;
                    }
                  C(t);
                }))
              );
            w.delete(e.fi);
          }
          C(t);
        }
        function C(t) {
          if (E === t && O === f.sticky) return;
          (E = t), (O = l.pointerSticky = f.sticky);
          const n = null == E ? [] : [E];
          x && ((n.fx = e.fx), (n.fy = e.fy), (n.fi = e.fi));
          const a = s(n, r, o, i, l);
          if (z) {
            if (x) {
              const t = z.parentNode,
                n = z.getAttribute("transform"),
                e = a.getAttribute("transform");
              n
                ? a.setAttribute("transform", n)
                : a.removeAttribute("transform"),
                e
                  ? t.setAttribute("transform", e)
                  : t.removeAttribute("transform"),
                a.removeAttribute("aria-label"),
                a.removeAttribute("aria-description"),
                a.removeAttribute("aria-hidden");
            }
            z.replaceWith(a);
          }
          return (
            (f.roots[h] = z = a),
            (null == E && w?.size > 1) ||
              l.dispatchValue(null == E ? null : u[E]),
            a
          );
        }
        function T(r) {
          if (f.sticky || ("mouse" === r.pointerType && 1 === r.buttons))
            return;
          let [o, l] = Te(r);
          (o -= g), (l -= v);
          const s = o < i.marginLeft || o > i.width - i.marginRight ? 1 : t,
            c = l < i.marginTop || l > i.height - i.marginBottom ? 1 : n;
          let u = null,
            h = a * a;
          for (const t of e) {
            const n = s * (L(t) - o),
              e = c * (A(t) - l),
              r = n * n + e * e;
            r <= h && ((u = t), (h = r));
          }
          if (null != u && (1 !== t || 1 !== n)) {
            const t = L(u) - o,
              n = A(u) - l;
            h = t * t + n * n;
          }
          N(u, h);
        }
        return (
          c.addEventListener("pointerenter", T),
          c.addEventListener("pointermove", T),
          c.addEventListener("pointerdown", function (t) {
            "mouse" === t.pointerType &&
              null != E &&
              ((f.sticky && f.roots.some((n) => n?.contains(t.target))) ||
                (f.sticky
                  ? ((f.sticky = !1), f.renders.forEach((t) => t(null)))
                  : ((f.sticky = !0), C(E)),
                t.stopImmediatePropagation()));
          }),
          c.addEventListener("pointerleave", function (t) {
            "mouse" === t.pointerType && (f.sticky || N(null));
          }),
          C(null)
        );
      }, s),
    }
  );
}
function vc(t) {
  return gc(1, 1, t);
}
function xc(t) {
  return gc(1, 0.01, t);
}
function wc(t) {
  return gc(0.01, 1, t);
}
function bc({ x1: t, x2: n, x: e = t }, r) {
  return t && n ? (e) => (t[e] + n[e]) / 2 : e ? (t) => e[t] : () => r;
}
function kc({ y1: t, y2: n, y: e = t }, r) {
  return t && n ? (e) => (t[e] + n[e]) / 2 : e ? (t) => e[t] : () => r;
}
function $c(t) {
  return Ps(t) && void 0 === t.interval ? void 0 : "tabular-nums";
}
const Mc = Math.PI / 180;
function Lc(
  t,
  { marker: n, markerStart: e = n, markerMid: r = n, markerEnd: o = n } = {},
) {
  (t.markerStart = Ac(e)), (t.markerMid = Ac(r)), (t.markerEnd = Ac(o));
}
function Ac(t) {
  if (null == t || !1 === t) return null;
  if (!0 === t) return Oc;
  if ("function" == typeof t) return t;
  switch (`${t}`.toLowerCase()) {
    case "none":
      return null;
    case "arrow":
      return Ec("auto");
    case "arrow-reverse":
      return Ec("auto-start-reverse");
    case "dot":
      return zc;
    case "circle":
    case "circle-fill":
      return Oc;
    case "circle-stroke":
      return Sc;
    case "tick":
      return Nc("auto");
    case "tick-x":
      return Nc(90);
    case "tick-y":
      return Nc(0);
  }
  throw new Error(`invalid marker: ${t}`);
}
function Ec(t) {
  return (n, e) =>
    El("svg:marker", e)
      .attr("viewBox", "-5 -5 10 10")
      .attr("markerWidth", 6.67)
      .attr("markerHeight", 6.67)
      .attr("orient", t)
      .attr("fill", "none")
      .attr("stroke", n)
      .attr("stroke-width", 1.5)
      .attr("stroke-linecap", "round")
      .attr("stroke-linejoin", "round")
      .call((t) => t.append("path").attr("d", "M-1.5,-3l3,3l-3,3"))
      .node();
}
function zc(t, n) {
  return El("svg:marker", n)
    .attr("viewBox", "-5 -5 10 10")
    .attr("markerWidth", 6.67)
    .attr("markerHeight", 6.67)
    .attr("fill", t)
    .attr("stroke", "none")
    .call((t) => t.append("circle").attr("r", 2.5))
    .node();
}
function Oc(t, n) {
  return El("svg:marker", n)
    .attr("viewBox", "-5 -5 10 10")
    .attr("markerWidth", 6.67)
    .attr("markerHeight", 6.67)
    .attr("fill", t)
    .attr("stroke", "var(--plot-background)")
    .attr("stroke-width", 1.5)
    .call((t) => t.append("circle").attr("r", 3))
    .node();
}
function Sc(t, n) {
  return El("svg:marker", n)
    .attr("viewBox", "-5 -5 10 10")
    .attr("markerWidth", 6.67)
    .attr("markerHeight", 6.67)
    .attr("fill", "var(--plot-background)")
    .attr("stroke", t)
    .attr("stroke-width", 1.5)
    .call((t) => t.append("circle").attr("r", 3))
    .node();
}
function Nc(t) {
  return (n, e) =>
    El("svg:marker", e)
      .attr("viewBox", "-3 -3 6 6")
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", t)
      .attr("stroke", n)
      .call((t) => t.append("path").attr("d", "M0,-3v6"))
      .node();
}
let Cc = 0;
function Tc(t, n, { stroke: e }, r) {
  return Ic(t, n, e && ((t) => e[t]), r);
}
function Rc(t, n, { stroke: e }, r) {
  return Ic(t, n, e && (([t]) => e[t]), r);
}
function Ic(
  t,
  { markerStart: n, markerMid: e, markerEnd: r, stroke: o },
  i = () => o,
  a,
) {
  const l = new Map();
  function s(t) {
    return function (n) {
      const e = i(n);
      let r = l.get(t);
      r || l.set(t, (r = new Map()));
      let o = r.get(e);
      if (!o) {
        const n = this.parentNode.insertBefore(t(e, a), this),
          i = "plot-marker-" + ++Cc;
        n.setAttribute("id", i), r.set(e, (o = `url(#${i})`));
      }
      return o;
    };
  }
  n && t.attr("marker-start", s(n)),
    e && t.attr("marker-mid", s(e)),
    r && t.attr("marker-end", s(r));
}
function Wc({ inset: t, insetLeft: n, insetRight: e, ...r } = {}) {
  return (
    ([n, e] = Bc(t, n, e)), { inset: t, insetLeft: n, insetRight: e, ...r }
  );
}
function jc({ inset: t, insetTop: n, insetBottom: e, ...r } = {}) {
  return (
    ([n, e] = Bc(t, n, e)), { inset: t, insetTop: n, insetBottom: e, ...r }
  );
}
function Bc(t, n, e) {
  return void 0 === t && void 0 === n && void 0 === e
    ? ol
      ? [1, 0]
      : [0.5, 0.5]
    : [n, e];
}
function Fc(t, { interval: n }) {
  return (
    ((t = { ...fi(t) }).interval = si(void 0 === t.interval ? n : t.interval)),
    t
  );
}
function Dc(t, n, e, r) {
  const { [t]: o, [`${t}1`]: i, [`${t}2`]: a } = e,
    { value: l, interval: s } = Fc(o, e);
  if (null == l || (null == s && !r)) return e;
  const c = oi(o);
  if (null == s) {
    let n;
    const o = { transform: (t) => n || (n = ho(t, l)), label: c };
    return {
      ...e,
      [t]: void 0,
      [`${t}1`]: void 0 === i ? o : i,
      [`${t}2`]: void 0 !== a || (i === a && r) ? a : o,
    };
  }
  let u, f;
  function h(t) {
    return void 0 !== f && t === u
      ? f
      : (f = Bo(ho((u = t), l), (t) => s.floor(t)));
  }
  return n({
    ...e,
    [t]: void 0,
    [`${t}1`]: void 0 === i ? { transform: h, label: c } : i,
    [`${t}2`]:
      void 0 === a
        ? { transform: (t) => h(t).map((t) => s.offset(t)), label: c }
        : a,
  });
}
function qc(t, n, e) {
  const { [t]: r } = e,
    { value: o, interval: i } = Fc(r, e);
  return null == o || null == i
    ? e
    : n({
        ...e,
        [t]: {
          label: oi(r),
          transform: (t) => {
            const n = Bo(ho(t, o), (t) => i.floor(t)),
              e = n.map((t) => i.offset(t));
            return n.map(
              mi(n)
                ? (t, n) =>
                    null == t ||
                    isNaN((t = +t)) ||
                    null == (n = e[n]) ||
                    isNaN((n = +n))
                      ? void 0
                      : new Date((t + n) / 2)
                : (t, n) =>
                    null == t || null == (n = e[n]) ? NaN : (+t + +n) / 2,
            );
          },
        },
      });
}
function _c(t = {}) {
  return Dc("x", Wc, t, !0);
}
function Pc(t = {}) {
  return Dc("y", jc, t, !0);
}
function Vc(t = {}) {
  return Dc("x", Wc, t);
}
function Yc(t = {}) {
  return Dc("y", jc, t);
}
function Uc(t = {}) {
  return qc("x", Wc, t);
}
function Hc(t = {}) {
  return qc("y", jc, t);
}
const Xc = { ariaLabel: "rule", fill: null, stroke: "currentColor" };
class Gc extends fc {
  constructor(t, n = {}) {
    const {
      x: e,
      y1: r,
      y2: o,
      inset: i = 0,
      insetTop: a = i,
      insetBottom: l = i,
    } = n;
    super(
      t,
      {
        x: { value: e, scale: "x", optional: !0 },
        y1: { value: r, scale: "y", optional: !0 },
        y2: { value: o, scale: "y", optional: !0 },
      },
      mc(n, "x"),
      Xc,
    ),
      (this.insetTop = $o(a)),
      (this.insetBottom = $o(l)),
      Lc(this, n);
  }
  render(t, n, e, r, o) {
    const { x: i, y: a } = n,
      { x: l, y1: s, y2: c } = e,
      {
        width: u,
        height: f,
        marginTop: h,
        marginRight: d,
        marginLeft: p,
        marginBottom: m,
      } = r,
      { insetTop: y, insetBottom: g } = this;
    return El("svg:g", o)
      .call(ml, this, r, o)
      .call(xl, this, { x: l && i }, ol, 0)
      .call((n) =>
        n
          .selectAll()
          .data(t)
          .enter()
          .append("line")
          .call(yl, this)
          .attr("x1", l ? (t) => l[t] : (p + u - d) / 2)
          .attr("x2", l ? (t) => l[t] : (p + u - d) / 2)
          .attr("y1", s && !Ys(a) ? (t) => s[t] + y : h + y)
          .attr(
            "y2",
            c && !Ys(a)
              ? a.bandwidth
                ? (t) => c[t] + a.bandwidth() - g
                : (t) => c[t] - g
              : f - m - g,
          )
          .call(ul, this, e)
          .call(Tc, this, e, o),
      )
      .node();
  }
}
class Zc extends fc {
  constructor(t, n = {}) {
    const {
      x1: e,
      x2: r,
      y: o,
      inset: i = 0,
      insetRight: a = i,
      insetLeft: l = i,
    } = n;
    super(
      t,
      {
        y: { value: o, scale: "y", optional: !0 },
        x1: { value: e, scale: "x", optional: !0 },
        x2: { value: r, scale: "x", optional: !0 },
      },
      mc(n, "y"),
      Xc,
    ),
      (this.insetRight = $o(a)),
      (this.insetLeft = $o(l)),
      Lc(this, n);
  }
  render(t, n, e, r, o) {
    const { x: i, y: a } = n,
      { y: l, x1: s, x2: c } = e,
      {
        width: u,
        height: f,
        marginTop: h,
        marginRight: d,
        marginLeft: p,
        marginBottom: m,
      } = r,
      { insetLeft: y, insetRight: g } = this;
    return El("svg:g", o)
      .call(ml, this, r, o)
      .call(xl, this, { y: l && a }, 0, ol)
      .call((n) =>
        n
          .selectAll()
          .data(t)
          .enter()
          .append("line")
          .call(yl, this)
          .attr("x1", s && !Ys(i) ? (t) => s[t] + y : p + y)
          .attr(
            "x2",
            c && !Ys(i)
              ? i.bandwidth
                ? (t) => c[t] + i.bandwidth() - g
                : (t) => c[t] - g
              : u - d - g,
          )
          .attr("y1", l ? (t) => l[t] : (h + f - m) / 2)
          .attr("y2", l ? (t) => l[t] : (h + f - m) / 2)
          .call(ul, this, e)
          .call(Tc, this, e, o),
      )
      .node();
  }
}
function Jc(t, n) {
  let { x: e = xo, y: r, y1: o, y2: i, ...a } = Yc(n);
  return ([o, i] = Qc(r, o, i)), new Gc(t, { ...a, x: e, y1: o, y2: i });
}
function Kc(t, n) {
  let { y: e = xo, x: r, x1: o, x2: i, ...a } = Vc(n);
  return ([o, i] = Qc(r, o, i)), new Zc(t, { ...a, y: e, x1: o, x2: i });
}
function Qc(t, n, e) {
  if (null == t) {
    if (void 0 === n) {
      if (void 0 !== e) return [0, e];
    } else if (void 0 === e) return [0, n];
  } else {
    if (void 0 === n) return void 0 === e ? [0, t] : [t, e];
    if (void 0 === e) return [t, n];
  }
  return [n, e];
}
function tu(t, ...n) {
  let e = n.length;
  for (let r = 0, o = !0; r < e; ++r)
    "function" != typeof n[r] &&
      (o && ((t = t.slice()), (o = !1)),
      t.splice(r, 2, t[r] + n[r] + t[r + 1]),
      n.splice(r, 1),
      --r,
      --e);
  return (r) => {
    let o = t[0];
    for (let i = 0; i < e; ++i) o += n[i](r) + t[i + 1];
    return o;
  };
}
const nu = {
    ariaLabel: "text",
    strokeLinejoin: "round",
    strokeWidth: 3,
    paintOrder: "stroke",
  },
  eu = "­";
class ru extends fc {
  constructor(t, n = {}) {
    const {
        x: e,
        y: r,
        text: o = hi(t) && di(t) ? xo : vo,
        frameAnchor: i,
        textAnchor: a = /right$/i.test(i)
          ? "end"
          : /left$/i.test(i)
          ? "start"
          : "middle",
        lineAnchor: l = /^top/i.test(i)
          ? "top"
          : /^bottom/i.test(i)
          ? "bottom"
          : "middle",
        lineHeight: s = 1,
        lineWidth: c = 1 / 0,
        textOverflow: u,
        monospace: f,
        fontFamily: h = f ? "ui-monospace, monospace" : void 0,
        fontSize: d,
        fontStyle: p,
        fontVariant: m,
        fontWeight: y,
        rotate: g,
      } = n,
      [v, x] = Ro(g, 0),
      [w, b] = (function (t) {
        return null == t || "number" == typeof t
          ? [void 0, t]
          : "string" != typeof t
          ? [t, void 0]
          : ((t = t.trim().toLowerCase()),
            uu.has(t) || /^[+-]?\d*\.?\d+(e[+-]?\d+)?(\w*|%)$/.test(t)
              ? [void 0, t]
              : [t, void 0]);
      })(d);
    var k;
    if (
      (super(
        t,
        {
          x: { value: e, scale: "x", optional: !0 },
          y: { value: r, scale: "y", optional: !0 },
          fontSize: { value: w, optional: !0 },
          rotate: {
            value:
              ((k = v),
              null == k
                ? null
                : { transform: (t) => ho(t, k, Float64Array), label: oi(k) }),
            optional: !0,
          },
          text: { value: o, filter: Ir, optional: !0 },
        },
        n,
        nu,
      ),
      (this.rotate = x),
      (this.textAnchor = wl(a, "middle")),
      (this.lineAnchor = Wo(l, "lineAnchor", ["top", "middle", "bottom"])),
      (this.lineHeight = +s),
      (this.lineWidth = +c),
      (this.textOverflow = ou(u)),
      (this.monospace = !!f),
      (this.fontFamily = ko(h)),
      (this.fontSize = b),
      (this.fontStyle = ko(p)),
      (this.fontVariant = ko(m)),
      (this.fontWeight = ko(y)),
      (this.frameAnchor = Ai(i)),
      !(this.lineWidth >= 0))
    )
      throw new Error(`invalid lineWidth: ${c}`);
    (this.splitLines = mu(this)), (this.clipLine = yu(this));
  }
  render(t, n, e, r, o) {
    const { x: i, y: a } = n,
      { x: l, y: s, rotate: c, text: u, title: f, fontSize: h } = e,
      { rotate: d } = this,
      [p, m] = Ll(this, r);
    return El("svg:g", o)
      .call(ml, this, r, o)
      .call(cu, this, u, r)
      .call(xl, this, { x: l && i, y: s && a })
      .call((n) =>
        n
          .selectAll()
          .data(t)
          .enter()
          .append("text")
          .call(yl, this)
          .call(iu, this, u, f)
          .attr(
            "transform",
            tu`translate(${l ? (t) => l[t] : p},${s ? (t) => s[t] : m})${
              c ? (t) => ` rotate(${c[t]})` : d ? ` rotate(${d})` : ""
            }`,
          )
          .call(vl, "font-size", h && ((t) => h[t]))
          .call(ul, this, e),
      )
      .node();
  }
}
function ou(t) {
  return null == t
    ? null
    : Wo(t, "textOverflow", [
        "clip",
        "ellipsis",
        "clip-start",
        "clip-end",
        "ellipsis-start",
        "ellipsis-middle",
        "ellipsis-end",
      ]).replace(/^(clip|ellipsis)$/, "$1-end");
}
function iu(t, n, e, r) {
  if (!e) return;
  const {
    lineAnchor: o,
    lineHeight: i,
    textOverflow: a,
    splitLines: l,
    clipLine: s,
  } = n;
  t.each(function (t) {
    const n = l(tl(e[t]) ?? "").map(s),
      c = n.length,
      u = "top" === o ? 0.71 : "bottom" === o ? 1 - c : (164 - 100 * c) / 200;
    if (c > 1) {
      let t = 0;
      for (let e = 0; e < c; ++e) {
        if ((++t, !n[e])) continue;
        const r = this.ownerDocument.createElementNS(ht.svg, "tspan");
        r.setAttribute("x", 0),
          e === t - 1
            ? r.setAttribute("y", (u + e) * i + "em")
            : r.setAttribute("dy", t * i + "em"),
          (r.textContent = n[e]),
          this.appendChild(r),
          (t = 0);
      }
    } else u && this.setAttribute("y", u * i + "em"), (this.textContent = n[0]);
    if (a && !r && n[0] !== e[t]) {
      const n = this.ownerDocument.createElementNS(ht.svg, "title");
      (n.textContent = e[t]), this.appendChild(n);
    }
  });
}
function au(t, { x: n, y: e, ...r } = {}) {
  return (
    void 0 === r.frameAnchor && ([n, e] = Xo(n, e)),
    new ru(t, { ...r, x: n, y: e })
  );
}
function lu(t, { x: n = xo, ...e } = {}) {
  return new ru(t, Hc({ ...e, x: n }));
}
function su(t, { y: n = xo, ...e } = {}) {
  return new ru(t, Uc({ ...e, y: n }));
}
function cu(t, n, e) {
  vl(t, "text-anchor", n.textAnchor),
    vl(t, "font-family", n.fontFamily),
    vl(t, "font-size", n.fontSize),
    vl(t, "font-style", n.fontStyle),
    vl(
      t,
      "font-variant",
      void 0 === n.fontVariant
        ? (function (t) {
            return t && (vi(t) || mi(t)) ? "tabular-nums" : void 0;
          })(e)
        : n.fontVariant,
    ),
    vl(t, "font-weight", n.fontWeight);
}
const uu = new Set([
  "inherit",
  "initial",
  "revert",
  "unset",
  "xx-small",
  "x-small",
  "small",
  "medium",
  "large",
  "x-large",
  "xx-large",
  "xxx-large",
  "larger",
  "smaller",
]);
function fu(t, n, e) {
  const r = [];
  let o,
    i = 0;
  for (const [a, l, s] of (function* (t) {
    let n = 0,
      e = 0;
    const r = t.length;
    for (; e < r; ) {
      let r = 1;
      switch (t[e]) {
        case eu:
        case "-":
          ++e, yield [n, e, !1], (n = e);
          break;
        case " ":
          for (yield [n, e, !1]; " " === t[++e]; );
          n = e;
          break;
        case "\r":
          "\n" === t[e + 1] && ++r;
        case "\n":
          yield [n, e, !0], (e += r), (n = e);
          break;
        default:
          ++e;
      }
    }
    yield [n, e, !0];
  })(t))
    void 0 === o && (o = a),
      i > o &&
        e(t, o, l) > n &&
        (r.push(t.slice(o, i) + (t[i - 1] === eu ? "-" : "")), (o = a)),
      s ? (r.push(t.slice(o, l)), (o = void 0)) : (i = l);
  return r;
}
const hu = {
  a: 56,
  b: 63,
  c: 57,
  d: 63,
  e: 58,
  f: 37,
  g: 62,
  h: 60,
  i: 26,
  j: 26,
  k: 55,
  l: 26,
  m: 88,
  n: 60,
  o: 60,
  p: 62,
  q: 62,
  r: 39,
  s: 54,
  t: 38,
  u: 60,
  v: 55,
  w: 79,
  x: 54,
  y: 55,
  z: 55,
  A: 69,
  B: 67,
  C: 73,
  D: 74,
  E: 61,
  F: 58,
  G: 76,
  H: 75,
  I: 28,
  J: 55,
  K: 67,
  L: 58,
  M: 89,
  N: 75,
  O: 78,
  P: 65,
  Q: 78,
  R: 67,
  S: 65,
  T: 65,
  U: 75,
  V: 69,
  W: 98,
  X: 69,
  Y: 67,
  Z: 67,
  0: 64,
  1: 48,
  2: 62,
  3: 64,
  4: 66,
  5: 63,
  6: 65,
  7: 58,
  8: 65,
  9: 65,
  " ": 29,
  "!": 32,
  '"': 49,
  "'": 31,
  "(": 39,
  ")": 39,
  ",": 31,
  "-": 48,
  ".": 31,
  "/": 32,
  ":": 31,
  ";": 31,
  "?": 52,
  "‘": 31,
  "’": 31,
  "“": 47,
  "”": 47,
  "…": 82,
};
function du(t, n = 0, e = t.length) {
  let r = 0;
  for (let o = n; o < e; o = $u(t, o)) r += hu[t[o]] ?? (Lu(t, o) ? 120 : hu.e);
  return r;
}
function pu(t, n = 0, e = t.length) {
  let r = 0;
  for (let o = n; o < e; o = $u(t, o)) r += Lu(t, o) ? 126 : 63;
  return r;
}
function mu({ monospace: t, lineWidth: n, textOverflow: e }) {
  if (null != e || n == 1 / 0) return (t) => t.split(/\r\n?|\n/g);
  const r = t ? pu : du,
    o = 100 * n;
  return (t) => fu(t, o, r);
}
function yu({ monospace: t, lineWidth: n, textOverflow: e }) {
  if (null == e || n == 1 / 0) return (t) => t;
  const r = t ? pu : du,
    o = 100 * n;
  switch (e) {
    case "clip-start":
      return (t) => wu(t, o, r, "");
    case "clip-end":
      return (t) => xu(t, o, r, "");
    case "ellipsis-start":
      return (t) => wu(t, o, r, gu);
    case "ellipsis-middle":
      return (t) =>
        (function (t, n, e, r) {
          t = t.trim();
          const o = e(t);
          if (o <= n) return t;
          const i = e(r) / 2,
            [a, l] = vu(t, n / 2, e, i),
            [s] = vu(t, o - n / 2 - l + i, e, -i);
          return s < 0
            ? r
            : t.slice(0, a).trimEnd() + r + t.slice($u(t, s)).trimStart();
        })(t, o, r, gu);
    case "ellipsis-end":
      return (t) => xu(t, o, r, gu);
  }
}
const gu = "…";
function vu(t, n, e, r) {
  const o = [];
  let i = 0;
  for (let a = 0, l = 0, s = t.length; a < s; a = l) {
    l = $u(t, a);
    const s = e(t, a, l);
    if (i + s > n) {
      for (i += r; i > n && a > 0; ) (l = a), (a = o.pop()), (i -= e(t, a, l));
      return [a, n - i];
    }
    (i += s), o.push(a);
  }
  return [-1, 0];
}
function xu(t, n, e, r) {
  t = t.trim();
  const o = e(r),
    [i] = vu(t, n, e, o);
  return i < 0 ? t : t.slice(0, i).trimEnd() + r;
}
function wu(t, n, e, r) {
  const o = e((t = t.trim()));
  if (o <= n) return t;
  const i = e(r),
    [a] = vu(t, o - n + i, e, -i);
  return a < 0 ? r : r + t.slice($u(t, a)).trimStart();
}
const bu = /[\p{Combining_Mark}\p{Emoji_Modifier}]+/uy,
  ku = /\p{Extended_Pictographic}/uy;
function $u(t, n) {
  return (
    (n += (function (t, n) {
      const e = t.charCodeAt(n);
      if (e >= 55296 && e < 56320) {
        const e = t.charCodeAt(n + 1);
        return e >= 56320 && e < 57344;
      }
      return !1;
    })(t, n)
      ? 2
      : 1),
    (function (t, n) {
      return !Mu(t, n) && ((bu.lastIndex = n), bu.test(t));
    })(t, n) && (n = bu.lastIndex),
    (function (t, n) {
      return 8205 === t.charCodeAt(n);
    })(t, n)
      ? $u(t, n + 1)
      : n
  );
}
function Mu(t, n) {
  return t.charCodeAt(n) < 128;
}
function Lu(t, n) {
  return !Mu(t, n) && ((ku.lastIndex = n), ku.test(t));
}
const Au = {
    ariaLabel: "vector",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinejoin: "round",
    strokeLinecap: "round",
  },
  Eu = 3.5,
  zu = 5 * Eu,
  Ou = {
    draw(t, n, e) {
      const r = (n * e) / zu;
      t.moveTo(0, 0),
        t.lineTo(0, -n),
        t.moveTo(-r, r - n),
        t.lineTo(0, -n),
        t.lineTo(r, r - n);
    },
  },
  Su = {
    draw(t, n, e) {
      t.moveTo(-e, 0), t.lineTo(0, -n), t.lineTo(e, 0);
    },
  },
  Nu = new Map([
    ["arrow", Ou],
    ["spike", Su],
  ]);
class Cu extends fc {
  constructor(t, n = {}) {
    const {
        x: e,
        y: r,
        r: o = Eu,
        length: i,
        rotate: a,
        shape: l = Ou,
        anchor: s = "middle",
        frameAnchor: c,
      } = n,
      [u, f] = Ro(i, 12),
      [h, d] = Ro(a, 0);
    super(
      t,
      {
        x: { value: e, scale: "x", optional: !0 },
        y: { value: r, scale: "y", optional: !0 },
        length: { value: u, scale: "length", optional: !0 },
        rotate: { value: h, optional: !0 },
      },
      n,
      Au,
    ),
      (this.r = +o),
      (this.length = f),
      (this.rotate = d),
      (this.shape = (function (t) {
        if (
          (function (t) {
            return t && "function" == typeof t.draw;
          })(t)
        )
          return t;
        const n = Nu.get(`${t}`.toLowerCase());
        if (n) return n;
        throw new Error(`invalid shape: ${t}`);
      })(l)),
      (this.anchor = Wo(s, "anchor", ["start", "middle", "end"])),
      (this.frameAnchor = Ai(c));
  }
  render(t, n, e, r, o) {
    const { x: i, y: a } = n,
      { x: l, y: s, length: c, rotate: u } = e,
      { length: f, rotate: h, anchor: d, shape: p, r: m } = this,
      [y, g] = Ll(this, r);
    return El("svg:g", o)
      .call(ml, this, r, o)
      .call(xl, this, { x: l && i, y: s && a })
      .call((n) =>
        n
          .selectAll()
          .data(t)
          .enter()
          .append("path")
          .call(yl, this)
          .attr(
            "transform",
            tu`translate(${l ? (t) => l[t] : y},${s ? (t) => s[t] : g})${
              u ? (t) => ` rotate(${u[t]})` : h ? ` rotate(${h})` : ""
            }${
              "start" === d
                ? ""
                : "end" === d
                ? c
                  ? (t) => ` translate(0,${c[t]})`
                  : ` translate(0,${f})`
                : c
                ? (t) => ` translate(0,${c[t] / 2})`
                : ` translate(0,${f / 2})`
            }`,
          )
          .attr(
            "d",
            c
              ? (t) => {
                  const n = We();
                  return p.draw(n, c[t], m), n;
                }
              : (() => {
                  const t = We();
                  return p.draw(t, f, m), t;
                })(),
          )
          .call(ul, this, e),
      )
      .node();
  }
}
function Tu(t, n = {}) {
  let { x: e, y: r, ...o } = n;
  return (
    void 0 === n.frameAnchor && ([e, r] = Xo(e, r)),
    new Cu(t, { ...o, x: e, y: r })
  );
}
function Ru(t, n = {}) {
  const { x: e = xo, ...r } = n;
  return new Cu(t, { ...r, x: e });
}
function Iu(t, n = {}) {
  const { y: e = xo, ...r } = n;
  return new Cu(t, { ...r, y: e });
}
function Wu(t, n = {}) {
  const {
    shape: e = Su,
    stroke: r = Au.stroke,
    strokeWidth: o = 1,
    fill: i = r,
    fillOpacity: a = 0.3,
    anchor: l = "start",
    ...s
  } = n;
  return Tu(t, {
    ...s,
    shape: e,
    stroke: r,
    strokeWidth: o,
    fill: i,
    fillOpacity: a,
    anchor: l,
  });
}
function ju(t, n) {
  return (
    arguments.length < 2 && !hi(t) && ((n = t), (t = null)),
    void 0 === n && (n = {}),
    [t, n]
  );
}
function Bu({ anchor: t } = {}, n) {
  return void 0 === t ? n[0] : Wo(t, "anchor", n);
}
function Fu(t) {
  return Bu(t, ["left", "right"]);
}
function Du(t) {
  return Bu(t, ["right", "left"]);
}
function qu(t) {
  return Bu(t, ["bottom", "top"]);
}
function _u(t) {
  return Bu(t, ["top", "bottom"]);
}
function Pu() {
  const [t, n] = ju(...arguments);
  return Hu("y", Fu(n), t, n);
}
function Vu() {
  const [t, n] = ju(...arguments);
  return Hu("fy", Du(n), t, n);
}
function Yu() {
  const [t, n] = ju(...arguments);
  return Xu("x", qu(n), t, n);
}
function Uu() {
  const [t, n] = ju(...arguments);
  return Xu("fx", _u(n), t, n);
}
function Hu(
  t,
  n,
  e,
  {
    color: r = "currentColor",
    opacity: o = 1,
    stroke: i = r,
    strokeOpacity: a = o,
    strokeWidth: l = 1,
    fill: s = r,
    fillOpacity: c = o,
    textAnchor: u,
    textStroke: f,
    textStrokeOpacity: h,
    textStrokeWidth: d,
    tickSize: p = "y" === t ? 6 : 0,
    tickPadding: m,
    tickRotate: y,
    x: g,
    margin: v,
    marginTop: x = void 0 === v ? 20 : v,
    marginRight: w = void 0 === v ? ("right" === n ? 40 : 0) : v,
    marginBottom: b = void 0 === v ? 20 : v,
    marginLeft: k = void 0 === v ? ("left" === n ? 40 : 0) : v,
    label: $,
    labelAnchor: M,
    labelArrow: L,
    labelOffset: A,
    ...E
  },
) {
  return (
    (p = $o(p)),
    (m = $o(m)),
    (y = $o(y)),
    void 0 !== M && (M = Wo(M, "labelAnchor", ["center", "top", "bottom"])),
    (L = pf(L)),
    hc(
      p && !$i(i)
        ? (function (
            t,
            n,
            e,
            {
              strokeWidth: r = 1,
              strokeLinecap: o = null,
              strokeLinejoin: i = null,
              facetAnchor: a = n + ("y" === t ? "-empty" : ""),
              frameAnchor: l = n,
              tickSize: s,
              inset: c = 0,
              insetLeft: u = c,
              insetRight: f = c,
              dx: h = 0,
              y: d = "y" === t ? void 0 : null,
              ...p
            },
          ) {
            return rf(Iu, t, n, `${t}-axis tick`, e, {
              strokeWidth: r,
              strokeLinecap: o,
              strokeLinejoin: i,
              facetAnchor: a,
              frameAnchor: l,
              y: d,
              ...p,
              dx: "left" === n ? +h - ol + +u : +h + ol - f,
              anchor: "start",
              length: s,
              shape: "left" === n ? uf : ff,
            });
          })(t, n, e, {
            stroke: i,
            strokeOpacity: a,
            strokeWidth: l,
            tickSize: p,
            tickPadding: m,
            tickRotate: y,
            x: g,
            ...E,
          })
        : null,
      $i(s)
        ? null
        : (function (
            t,
            n,
            e,
            {
              facetAnchor: r = n + ("y" === t ? "-empty" : ""),
              frameAnchor: o = n,
              tickSize: i,
              tickRotate: a = 0,
              tickPadding: l = Math.max(3, 9 - i) +
                (Math.abs(a) > 60 ? 4 * Math.cos(a * Mc) : 0),
              text: s,
              textAnchor: c = Math.abs(a) > 60
                ? "middle"
                : "left" === n
                ? "end"
                : "start",
              lineAnchor: u = a > 60 ? "top" : a < -60 ? "bottom" : "middle",
              fontVariant: f,
              inset: h = 0,
              insetLeft: d = h,
              insetRight: p = h,
              dx: m = 0,
              y: y = "y" === t ? void 0 : null,
              ...g
            },
          ) {
            return rf(
              su,
              t,
              n,
              `${t}-axis tick label`,
              e,
              {
                facetAnchor: r,
                frameAnchor: o,
                text: s,
                textAnchor: c,
                lineAnchor: u,
                fontVariant: f,
                rotate: a,
                y: y,
                ...g,
                dx: "left" === n ? +m - i - l + +d : +m + +i + +l - p,
              },
              function (t, e, r, o, i) {
                void 0 === f && (this.fontVariant = hf(t)),
                  void 0 === s && (i.text = of(t, e, r, o, n));
              },
            );
          })(t, n, e, {
            fill: s,
            fillOpacity: c,
            stroke: f,
            strokeOpacity: h,
            strokeWidth: d,
            textAnchor: u,
            tickSize: p,
            tickPadding: m,
            tickRotate: y,
            x: g,
            marginTop: x,
            marginRight: w,
            marginBottom: b,
            marginLeft: k,
            ...E,
          }),
      $i(s) || null === $
        ? null
        : au(
            [],
            ef({ fill: s, fillOpacity: c, ...E }, function (e, r, o, i, a) {
              const l = i[t],
                {
                  marginTop: s,
                  marginRight: c,
                  marginBottom: u,
                  marginLeft: f,
                } = ("y" === t && a.inset) || a,
                h = M ?? (l.bandwidth ? "center" : "top"),
                d = A ?? ("right" === n ? c : f) - 3;
              return (
                "center" === h
                  ? ((this.textAnchor = void 0),
                    (this.lineAnchor = "right" === n ? "bottom" : "top"),
                    (this.frameAnchor = n),
                    (this.rotate = -90))
                  : ((this.textAnchor = "right" === n ? "end" : "start"),
                    (this.lineAnchor = h),
                    (this.frameAnchor = `${h}-${n}`),
                    (this.rotate = 0)),
                (this.dy = "top" === h ? 3 - s : "bottom" === h ? u - 3 : 0),
                (this.dx = "right" === n ? d : -d),
                (this.ariaLabel = `${t}-axis label`),
                {
                  facets: [[0]],
                  channels: {
                    text: {
                      value: [
                        df(t, l, {
                          anchor: n,
                          label: $,
                          labelAnchor: h,
                          labelArrow: L,
                        }),
                      ],
                    },
                  },
                }
              );
            }),
          ),
    )
  );
}
function Xu(
  t,
  n,
  e,
  {
    color: r = "currentColor",
    opacity: o = 1,
    stroke: i = r,
    strokeOpacity: a = o,
    strokeWidth: l = 1,
    fill: s = r,
    fillOpacity: c = o,
    textAnchor: u,
    textStroke: f,
    textStrokeOpacity: h,
    textStrokeWidth: d,
    tickSize: p = "x" === t ? 6 : 0,
    tickPadding: m,
    tickRotate: y,
    y: g,
    margin: v,
    marginTop: x = void 0 === v ? ("top" === n ? 30 : 0) : v,
    marginRight: w = void 0 === v ? 20 : v,
    marginBottom: b = void 0 === v ? ("bottom" === n ? 30 : 0) : v,
    marginLeft: k = void 0 === v ? 20 : v,
    label: $,
    labelAnchor: M,
    labelArrow: L,
    labelOffset: A,
    ...E
  },
) {
  return (
    (p = $o(p)),
    (m = $o(m)),
    (y = $o(y)),
    void 0 !== M && (M = Wo(M, "labelAnchor", ["center", "left", "right"])),
    (L = pf(L)),
    hc(
      p && !$i(i)
        ? (function (
            t,
            n,
            e,
            {
              strokeWidth: r = 1,
              strokeLinecap: o = null,
              strokeLinejoin: i = null,
              facetAnchor: a = n + ("x" === t ? "-empty" : ""),
              frameAnchor: l = n,
              tickSize: s,
              inset: c = 0,
              insetTop: u = c,
              insetBottom: f = c,
              dy: h = 0,
              x: d = "x" === t ? void 0 : null,
              ...p
            },
          ) {
            return rf(Ru, t, n, `${t}-axis tick`, e, {
              strokeWidth: r,
              strokeLinejoin: i,
              strokeLinecap: o,
              facetAnchor: a,
              frameAnchor: l,
              x: d,
              ...p,
              dy: "bottom" === n ? +h - ol - f : +h + ol + +u,
              anchor: "start",
              length: s,
              shape: "bottom" === n ? sf : cf,
            });
          })(t, n, e, {
            stroke: i,
            strokeOpacity: a,
            strokeWidth: l,
            tickSize: p,
            tickPadding: m,
            tickRotate: y,
            y: g,
            ...E,
          })
        : null,
      $i(s)
        ? null
        : (function (
            t,
            n,
            e,
            {
              facetAnchor: r = n + ("x" === t ? "-empty" : ""),
              frameAnchor: o = n,
              tickSize: i,
              tickRotate: a = 0,
              tickPadding: l = Math.max(3, 9 - i) +
                (Math.abs(a) >= 10 ? 4 * Math.cos(a * Mc) : 0),
              text: s,
              textAnchor: c = Math.abs(a) >= 10
                ? (a < 0) ^ ("bottom" === n)
                  ? "start"
                  : "end"
                : "middle",
              lineAnchor: u = Math.abs(a) >= 10
                ? "middle"
                : "bottom" === n
                ? "top"
                : "bottom",
              fontVariant: f,
              inset: h = 0,
              insetTop: d = h,
              insetBottom: p = h,
              dy: m = 0,
              x: y = "x" === t ? void 0 : null,
              ...g
            },
          ) {
            return rf(
              lu,
              t,
              n,
              `${t}-axis tick label`,
              e,
              {
                facetAnchor: r,
                frameAnchor: o,
                text: void 0 === s ? null : s,
                textAnchor: c,
                lineAnchor: u,
                fontVariant: f,
                rotate: a,
                x: y,
                ...g,
                dy: "bottom" === n ? +m + +i + +l - p : +m - i - l + +d,
              },
              function (t, e, r, o, i) {
                void 0 === f && (this.fontVariant = hf(t)),
                  void 0 === s && (i.text = of(t, e, r, o, n));
              },
            );
          })(t, n, e, {
            fill: s,
            fillOpacity: c,
            stroke: f,
            strokeOpacity: h,
            strokeWidth: d,
            textAnchor: u,
            tickSize: p,
            tickPadding: m,
            tickRotate: y,
            y: g,
            marginTop: x,
            marginRight: w,
            marginBottom: b,
            marginLeft: k,
            ...E,
          }),
      $i(s) || null === $
        ? null
        : au(
            [],
            ef({ fill: s, fillOpacity: c, ...E }, function (e, r, o, i, a) {
              const l = i[t],
                {
                  marginTop: s,
                  marginRight: c,
                  marginBottom: u,
                  marginLeft: f,
                } = ("x" === t && a.inset) || a,
                h = M ?? (l.bandwidth ? "center" : "right"),
                d = A ?? ("top" === n ? s : u) - 3;
              return (
                "center" === h
                  ? ((this.frameAnchor = n), (this.textAnchor = void 0))
                  : ((this.frameAnchor = `${n}-${h}`),
                    (this.textAnchor = "right" === h ? "end" : "start")),
                (this.lineAnchor = n),
                (this.dy = "top" === n ? -d : d),
                (this.dx = "right" === h ? c - 3 : "left" === h ? 3 - f : 0),
                (this.ariaLabel = `${t}-axis label`),
                {
                  facets: [[0]],
                  channels: {
                    text: {
                      value: [
                        df(t, l, {
                          anchor: n,
                          label: $,
                          labelAnchor: h,
                          labelArrow: L,
                        }),
                      ],
                    },
                  },
                }
              );
            }),
          ),
    )
  );
}
function Gu() {
  const [t, n] = ju(...arguments);
  return Qu("y", Fu(n), t, n);
}
function Zu() {
  const [t, n] = ju(...arguments);
  return Qu("fy", Du(n), t, n);
}
function Ju() {
  const [t, n] = ju(...arguments);
  return tf("x", qu(n), t, n);
}
function Ku() {
  const [t, n] = ju(...arguments);
  return tf("fx", _u(n), t, n);
}
function Qu(
  t,
  n,
  e,
  {
    y: r = "y" === t ? void 0 : null,
    x: o = null,
    x1: i = "left" === n ? o : null,
    x2: a = "right" === n ? o : null,
    ...l
  },
) {
  return rf(Kc, t, n, `${t}-grid`, e, { y: r, x1: i, x2: a, ...nf(l) });
}
function tf(
  t,
  n,
  e,
  {
    x: r = "x" === t ? void 0 : null,
    y: o = null,
    y1: i = "top" === n ? o : null,
    y2: a = "bottom" === n ? o : null,
    ...l
  },
) {
  return rf(Jc, t, n, `${t}-grid`, e, { x: r, y1: i, y2: a, ...nf(l) });
}
function nf({
  color: t = "currentColor",
  opacity: n = 0.1,
  stroke: e = t,
  strokeOpacity: r = n,
  strokeWidth: o = 1,
  ...i
}) {
  return { stroke: e, strokeOpacity: r, strokeWidth: o, ...i };
}
function ef(
  {
    fill: t,
    fillOpacity: n,
    fontFamily: e,
    fontSize: r,
    fontStyle: o,
    fontVariant: i,
    fontWeight: a,
    monospace: l,
    pointerEvents: s,
    shapeRendering: c,
    clip: u = !1,
  },
  f,
) {
  return (
    ([, t] = To(t)),
    ([, n] = Ro(n)),
    {
      facet: "super",
      x: null,
      y: null,
      fill: t,
      fillOpacity: n,
      fontFamily: e,
      fontSize: r,
      fontStyle: o,
      fontVariant: i,
      fontWeight: a,
      monospace: l,
      pointerEvents: s,
      shapeRendering: c,
      clip: u,
      initializer: f,
    }
  );
}
function rf(t, n, e, r, o, i, a) {
  let l;
  const s = Vi(i).initializer,
    c = t(
      o,
      Vi(
        {
          ...i,
          initializer: function (t, e, r, o, s, c) {
            const u = null == t && ("fx" === n || "fy" === n),
              { [n]: f } = o;
            if (!f) throw new Error(`missing scale: ${n}`);
            const h = f.domain();
            let {
              interval: d,
              ticks: p,
              tickFormat: m,
              tickSpacing: y = "x" === n ? 80 : 35,
            } = i;
            if (
              ("string" == typeof p && mf(f) && ((d = p), (p = void 0)),
              void 0 === p &&
                (p =
                  ci(d, f.type) ??
                  (function (t, n) {
                    const [e, r] = le(t.range());
                    return (r - e) / n;
                  })(f, y)),
              null == t)
            ) {
              if (hi(p)) t = jo(p);
              else if (ui(p)) t = lf(p, ...le(h));
              else if (f.interval) {
                let n = f.interval;
                if (f.ticks) {
                  const [e, r] = le(h);
                  (n = io(n, (r - e) / n[Zr] / p) ?? n), (t = lf(n, e, r));
                } else {
                  (n = io(n, (t = h).length / p) ?? n),
                    n !== f.interval && (t = lf(n, ...le(t)));
                }
                if (n === f.interval) {
                  const n = Math.round(t.length / p);
                  n > 1 && (t = t.filter((t, e) => e % n == 0));
                }
              } else t = f.ticks ? f.ticks(p) : h;
              if (!f.ticks && t.length && t !== h) {
                const e = new nt(h);
                (t = t.filter((t) => e.has(t))).length ||
                  rl(
                    `Warning: the ${n}-axis ticks appear to not align with the scale domain, resulting in no ticks. Try different ticks?`,
                  );
              }
              "y" === n || "x" === n
                ? (e = [Zo(t)])
                : (l[n] = { scale: n, value: xo });
            }
            a?.call(this, f, t, p, m, l);
            const g = Object.fromEntries(
              Object.entries(l).map(([n, e]) => [
                n,
                { ...e, value: ho(t, e.value) },
              ]),
            );
            return (
              u && (e = c.filterFacets(t, g)),
              { data: t, facets: e, channels: g }
            );
          },
        },
        s,
      ),
    );
  return (
    null == o ? ((l = c.channels), (c.channels = {})) : (l = {}),
    (c.ariaLabel = r),
    void 0 === c.clip && (c.clip = !1),
    c
  );
}
function of(t, n, e, r, o) {
  return { value: af(t, n, e, r, o) };
}
function af(t, n, e, r, o) {
  return "function" == typeof r
    ? r
    : void 0 === r && n && mi(n)
    ? lo(t.type, n, o) ?? tl
    : t.tickFormat
    ? t.tickFormat("number" == typeof e ? e : null, r)
    : void 0 === r
    ? tl
    : "string" == typeof r
    ? (mi(t.domain()) ? R : Re)(r)
    : Eo(r);
}
function lf(t, n, e) {
  return t.range(n, t.offset(t.floor(e)));
}
const sf = {
    draw(t, n) {
      t.moveTo(0, 0), t.lineTo(0, n);
    },
  },
  cf = {
    draw(t, n) {
      t.moveTo(0, 0), t.lineTo(0, -n);
    },
  },
  uf = {
    draw(t, n) {
      t.moveTo(0, 0), t.lineTo(-n, 0);
    },
  },
  ff = {
    draw(t, n) {
      t.moveTo(0, 0), t.lineTo(n, 0);
    },
  };
function hf(t) {
  return t.bandwidth && !t.interval ? void 0 : "tabular-nums";
}
function df(
  t,
  n,
  { anchor: e, label: r = n.label, labelAnchor: o, labelArrow: i } = {},
) {
  if (!(null == r || (r.inferred && mf(n) && /^(date|time|year)$/i.test(r)))) {
    if (
      ((r = String(r)),
      "auto" === i && (i = (!n.bandwidth || n.interval) && !/[↑↓→←]/.test(r)),
      !i)
    )
      return r;
    if (!0 === i) {
      const e = Ss(n);
      e &&
        (i =
          /x$/.test(t) || "center" === o
            ? /x$/.test(t) === e < 0
              ? "left"
              : "right"
            : e < 0
            ? "up"
            : "down");
    }
    switch (i) {
      case "left":
        return `← ${r}`;
      case "right":
        return `${r} →`;
      case "up":
        return "right" === e ? `${r} ↑` : `↑ ${r}`;
      case "down":
        return "right" === e ? `${r} ↓` : `↓ ${r}`;
    }
    return r;
  }
}
function pf(t = "auto") {
  return (
    !$i(t) &&
    ("boolean" == typeof t
      ? t
      : Wo(t, "labelArrow", ["auto", "up", "right", "down", "left"]))
  );
}
function mf(t) {
  return mi(t.domain());
}
function yf(t, n) {
  if (null == n) return n;
  const e = t(n);
  if (!e) throw new Error(`scale not found: ${n}`);
  return e;
}
function gf(t, n = {}, e) {
  let {
    columns: r,
    tickFormat: o,
    fontVariant: i = $c(t),
    swatchSize: a = 15,
    swatchWidth: l = a,
    swatchHeight: s = a,
    marginLeft: c = 0,
    className: u,
    style: f,
    width: h,
  } = n;
  const d = Al(n);
  (u = $l(u)), (o = af(t.scale, t.domain, void 0, o));
  const p = El("div", d).attr(
    "class",
    `${u}-swatches ${u}-swatches-${null != r ? "columns" : "wrap"}`,
  );
  let m;
  return (
    null != r
      ? ((m = `:where(.${u}-swatches-columns .${u}-swatch) {\n  display: flex;\n  align-items: center;\n  break-inside: avoid;\n  padding-bottom: 1px;\n}\n:where(.${u}-swatches-columns .${u}-swatch::before) {\n  flex-shrink: 0;\n}\n:where(.${u}-swatches-columns .${u}-swatch-label) {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}`),
        p
          .style("columns", r)
          .selectAll()
          .data(t.domain)
          .enter()
          .append("div")
          .attr("class", `${u}-swatch`)
          .call(e, t, l, s)
          .call((t) =>
            t
              .append("div")
              .attr("class", `${u}-swatch-label`)
              .attr("title", o)
              .text(o),
          ))
      : ((m = `:where(.${u}-swatches-wrap) {\n  display: flex;\n  align-items: center;\n  min-height: 33px;\n  flex-wrap: wrap;\n}\n:where(.${u}-swatches-wrap .${u}-swatch) {\n  display: inline-flex;\n  align-items: center;\n  margin-right: 1em;\n}`),
        p
          .selectAll()
          .data(t.domain)
          .enter()
          .append("span")
          .attr("class", `${u}-swatch`)
          .call(e, t, l, s)
          .append(function () {
            return this.ownerDocument.createTextNode(o.apply(this, arguments));
          })),
    p
      .call((t) =>
        t
          .insert("style", "*")
          .text(
            `:where(.${u}-swatches) {\n  font-family: system-ui, sans-serif;\n  font-size: 10px;\n  margin-bottom: 0.5em;\n}\n:where(.${u}-swatch > svg) {\n  margin-right: 0.5em;\n  overflow: visible;\n}\n${m}`,
          ),
      )
      .style("margin-left", c ? +c + "px" : null)
      .style("width", void 0 === h ? null : +h + "px")
      .style("font-variant", wl(i, "normal"))
      .call(Ml, f)
      .node()
  );
}
const vf = new Map([
  [
    "symbol",
    function (
      t,
      {
        fill: n = void 0 !== t.hint?.fill ? t.hint.fill : "none",
        fillOpacity: e = 1,
        stroke: r = void 0 !== t.hint?.stroke
          ? t.hint.stroke
          : $i(n)
          ? "currentColor"
          : "none",
        strokeOpacity: o = 1,
        strokeWidth: i = 1.5,
        r: a = 4.5,
        ...l
      } = {},
      s,
    ) {
      const [c, u] = To(n),
        [f, h] = To(r),
        d = yf(s, c),
        p = yf(s, f),
        m = a * a * Math.PI;
      return (
        (e = Ro(e)[1]),
        (o = Ro(o)[1]),
        (i = Ro(i)[1]),
        gf(t, l, (n, r, a, l) =>
          n
            .append("svg")
            .attr("viewBox", "-8 -8 16 16")
            .attr("width", a)
            .attr("height", l)
            .attr("fill", "color" === c ? (t) => d.scale(t) : u)
            .attr("fill-opacity", e)
            .attr("stroke", "color" === f ? (t) => p.scale(t) : h)
            .attr("stroke-opacity", o)
            .attr("stroke-width", i)
            .append("path")
            .attr("d", (n) => {
              const e = We();
              return t.scale(n).draw(e, m), e;
            }),
        )
      );
    },
  ],
  ["color", bf],
  [
    "opacity",
    function (
      { type: t, interpolate: n, ...e },
      { legend: r = !0, color: o = je(0, 0, 0), ...i },
    ) {
      if (!n) throw new Error(`${t} opacity scales are not supported`);
      !0 === r && (r = "ramp");
      if ("ramp" !== `${r}`.toLowerCase())
        throw new Error(`${r} opacity legends are not supported`);
      return bf({ type: t, ...e, interpolate: kf(o) }, { legend: r, ...i });
    },
  ],
]);
function xf(t = {}) {
  for (const [n, e] of vf) {
    const r = t[n];
    if (Vo(r)) {
      const o = Al(t);
      let i;
      if ("symbol" === n) {
        const {
          fill: n,
          stroke: e = void 0 === n && Vo(t.color) ? "color" : void 0,
        } = t;
        i = { fill: n, stroke: e };
      }
      return e(js(n, r, i), wf(o, r, t), (n) =>
        Vo(t[n]) ? js(n, t[n]) : null,
      );
    }
  }
  throw new Error("unknown legend type; no scale found");
}
function wf(
  { className: t, ...n },
  { label: e, ticks: r, tickFormat: o } = {},
  i,
) {
  return (function (t = {}, ...n) {
    let e = t;
    for (const r of n)
      for (const n in r)
        if (void 0 === e[n]) {
          const o = r[n];
          e === t ? (e = { ...e, [n]: o }) : (e[n] = o);
        }
    return e;
  })(i, { className: t, ...n }, { label: e, ticks: r, tickFormat: o });
}
function bf(t, { legend: n = !0, ...e }) {
  if (
    (!0 === n && (n = "ordinal" === t.type ? "swatches" : "ramp"),
    void 0 !== t.domain)
  )
    switch (`${n}`.toLowerCase()) {
      case "swatches":
        return (function (t, { opacity: n, ...e } = {}) {
          if (!Ps(t) && !Vs(t))
            throw new Error(
              `swatches legend requires ordinal or threshold color scale (not ${t.type})`,
            );
          return gf(t, e, (t, e, r, o) =>
            t
              .append("svg")
              .attr("width", r)
              .attr("height", o)
              .attr("fill", e.scale)
              .attr("fill-opacity", Ro(n)[1])
              .append("rect")
              .attr("width", "100%")
              .attr("height", "100%"),
          );
        })(t, e);
      case "ramp":
        return (function (t, n) {
          let {
            label: e = t.label,
            tickSize: r = 6,
            width: o = 240,
            height: i = 44 + r,
            marginTop: a = 18,
            marginRight: l = 0,
            marginBottom: s = 16 + r,
            marginLeft: c = 0,
            style: u,
            ticks: f = (o - c - l) / 64,
            tickFormat: h,
            fontVariant: d = $c(t),
            round: p = !0,
            opacity: m,
            className: y,
          } = n;
          const g = Al(n);
          (y = $l(y)), (m = Ro(m)[1]), null === h && (h = () => null);
          const v = El("svg", g)
            .attr("class", `${y}-ramp`)
            .attr("font-family", "system-ui, sans-serif")
            .attr("font-size", 10)
            .attr("width", o)
            .attr("height", i)
            .attr("viewBox", `0 0 ${o} ${i}`)
            .call((t) =>
              t
                .append("style")
                .text(
                  `:where(.${y}-ramp) {\n  display: block;\n  height: auto;\n  height: intrinsic;\n  max-width: 100%;\n  overflow: visible;\n}\n:where(.${y}-ramp text) {\n  white-space: pre;\n}`,
                ),
            )
            .call(Ml, u);
          let x,
            w = (t) => t.selectAll(".tick line").attr("y1", a + s - i);
          const b = p ? (t, n) => t.rangeRound(n) : (t, n) => t.range(n),
            {
              type: k,
              domain: $,
              range: M,
              interpolate: L,
              scale: A,
              pivot: E,
            } = t;
          if (L) {
            const t = void 0 === M ? L : de(1 === L.length ? ds(L) : L, M);
            x = b(
              A.copy(),
              Tt(
                ce(c, o - l),
                Math.min(
                  $.length + (void 0 !== E),
                  void 0 === M ? 1 / 0 : M.length,
                ),
              ),
            );
            const n = 256,
              e = g.document.createElement("canvas");
            (e.width = n), (e.height = 1);
            const r = e.getContext("2d");
            for (let e = 0, o = n - 1; e < n; ++e)
              (r.fillStyle = t(e / o)), r.fillRect(e, 0, 1, 1);
            v.append("image")
              .attr("opacity", m)
              .attr("x", c)
              .attr("y", a)
              .attr("width", o - c - l)
              .attr("height", i - a - s)
              .attr("preserveAspectRatio", "none")
              .attr("xlink:href", e.toDataURL());
          } else if ("threshold" === k) {
            const t = $,
              n = void 0 === h ? (t) => t : "string" == typeof h ? Re(h) : h;
            (x = b(ee().domain([-1, M.length - 1]), [c, o - l])),
              v
                .append("g")
                .attr("fill-opacity", m)
                .selectAll()
                .data(M)
                .enter()
                .append("rect")
                .attr("x", (t, n) => x(n - 1))
                .attr("y", a)
                .attr("width", (t, n) => x(n) - x(n - 1))
                .attr("height", i - a - s)
                .attr("fill", (t) => t),
              (f = Bo(t, (t, n) => n)),
              (h = (e) => n(t[e], e));
          } else
            (x = b(ze().domain($), [c, o - l])),
              v
                .append("g")
                .attr("fill-opacity", m)
                .selectAll()
                .data($)
                .enter()
                .append("rect")
                .attr("x", x)
                .attr("y", a)
                .attr("width", Math.max(0, x.bandwidth() - 1))
                .attr("height", i - a - s)
                .attr("fill", A),
              (w = () => {});
          return (
            v
              .append("g")
              .attr("transform", `translate(0,${i - s})`)
              .call(
                Ie(x)
                  .ticks(
                    Array.isArray(f) ? null : f,
                    "string" == typeof h ? h : void 0,
                  )
                  .tickFormat("function" == typeof h ? h : void 0)
                  .tickSize(r)
                  .tickValues(Array.isArray(f) ? f : null),
              )
              .attr("font-size", null)
              .attr("font-family", null)
              .attr("font-variant", wl(d, "normal"))
              .call(w)
              .call((t) => t.select(".domain").remove()),
            void 0 !== e &&
              v
                .append("text")
                .attr("x", c)
                .attr("y", a - 6)
                .attr("fill", "currentColor")
                .attr("font-weight", "bold")
                .text(e),
            v.node()
          );
        })(t, e);
      default:
        throw new Error(`unknown legend type: ${n}`);
    }
}
function kf(t) {
  const { r: n, g: e, b: r } = je(t) || je(0, 0, 0);
  return (t) => `rgba(${n},${e},${r},${t})`;
}
const $f = {
    ariaLabel: "frame",
    fill: "none",
    stroke: "currentColor",
    clip: !1,
  },
  Mf = {
    ariaLabel: "frame",
    fill: null,
    stroke: "currentColor",
    strokeLinecap: "square",
    clip: !1,
  };
class Lf extends fc {
  constructor(t = {}) {
    const {
      anchor: n = null,
      inset: e = 0,
      insetTop: r = e,
      insetRight: o = e,
      insetBottom: i = e,
      insetLeft: a = e,
      rx: l,
      ry: s,
    } = t;
    super(yo, void 0, t, null == n ? $f : Mf),
      (this.anchor = Io(n, "anchor", ["top", "right", "bottom", "left"])),
      (this.insetTop = $o(r)),
      (this.insetRight = $o(o)),
      (this.insetBottom = $o(i)),
      (this.insetLeft = $o(a)),
      (this.rx = $o(l)),
      (this.ry = $o(s));
  }
  render(t, n, e, r, o) {
    const {
        marginTop: i,
        marginRight: a,
        marginBottom: l,
        marginLeft: s,
        width: c,
        height: u,
      } = r,
      {
        anchor: f,
        insetTop: h,
        insetRight: d,
        insetBottom: p,
        insetLeft: m,
        rx: y,
        ry: g,
      } = this,
      v = s + m,
      x = c - a - d,
      w = i + h,
      b = u - l - p;
    return El(f ? "svg:line" : "svg:rect", o)
      .datum(0)
      .call(ml, this, r, o)
      .call(yl, this)
      .call(ul, this, e)
      .call(xl, this, {})
      .call(
        "left" === f
          ? (t) => t.attr("x1", v).attr("x2", v).attr("y1", w).attr("y2", b)
          : "right" === f
          ? (t) => t.attr("x1", x).attr("x2", x).attr("y1", w).attr("y2", b)
          : "top" === f
          ? (t) => t.attr("x1", v).attr("x2", x).attr("y1", w).attr("y2", w)
          : "bottom" === f
          ? (t) => t.attr("x1", v).attr("x2", x).attr("y1", b).attr("y2", b)
          : (t) =>
              t
                .attr("x", v)
                .attr("y", w)
                .attr("width", x - v)
                .attr("height", b - w)
                .attr("rx", y)
                .attr("ry", g),
      )
      .node();
  }
}
function Af(t) {
  return new Lf(t);
}
const Ef = {
    ariaLabel: "tip",
    fill: "var(--plot-background)",
    stroke: "currentColor",
  },
  zf = new Set(["geometry", "href", "src", "ariaLabel", "scales"]);
class Of extends fc {
  constructor(t, n = {}) {
    n.tip && (n = { ...n, tip: !1 }),
      void 0 === n.title && hi(t) && di(t) && (n = { ...n, title: xo });
    const {
      x: e,
      y: r,
      x1: o,
      x2: i,
      y1: a,
      y2: l,
      anchor: s,
      preferredAnchor: c = "bottom",
      monospace: u,
      fontFamily: f = u ? "ui-monospace, monospace" : void 0,
      fontSize: h,
      fontStyle: d,
      fontVariant: p,
      fontWeight: m,
      lineHeight: y = 1,
      lineWidth: g = 20,
      frameAnchor: v,
      format: x,
      textAnchor: w = "start",
      textOverflow: b,
      textPadding: k = 8,
      title: $,
      pointerSize: M = 12,
      pathFilter: L = "drop-shadow(0 3px 4px rgba(0,0,0,0.2))",
    } = n;
    super(
      t,
      {
        x: {
          value: null != o && null != i ? null : e,
          scale: "x",
          optional: !0,
        },
        y: {
          value: null != a && null != l ? null : r,
          scale: "y",
          optional: !0,
        },
        x1: { value: o, scale: "x", optional: null == i },
        y1: { value: a, scale: "y", optional: null == l },
        x2: { value: i, scale: "x", optional: null == o },
        y2: { value: l, scale: "y", optional: null == a },
        title: { value: $, optional: !0 },
      },
      n,
      Ef,
    ),
      (this.anchor = Li(s, "anchor")),
      (this.preferredAnchor = Li(c, "preferredAnchor")),
      (this.frameAnchor = Ai(v)),
      (this.textAnchor = wl(w, "middle")),
      (this.textPadding = +k),
      (this.pointerSize = +M),
      (this.pathFilter = ko(L)),
      (this.lineHeight = +y),
      (this.lineWidth = +g),
      (this.textOverflow = ou(b)),
      (this.monospace = !!u),
      (this.fontFamily = ko(f)),
      (this.fontSize = $o(h)),
      (this.fontStyle = ko(d)),
      (this.fontVariant = ko(p)),
      (this.fontWeight = ko(m));
    for (const t in Ef) t in this.channels && (this[t] = Ef[t]);
    (this.splitLines = mu(this)),
      (this.clipLine = yu(this)),
      (this.format = { ...x });
  }
  render(t, n, e, r, o) {
    const i = this,
      { x: a, y: l, fx: s, fy: c } = n,
      { ownerSVGElement: u, document: f } = o,
      { anchor: h, monospace: d, lineHeight: p, lineWidth: m } = this,
      { textPadding: y, pointerSize: g, pathFilter: v } = this,
      { marginTop: x, marginLeft: w } = r,
      { x1: b, y1: k, x2: $, y2: M, x: L = b ?? $, y: A = k ?? M } = e,
      E = s ? s(t.fx) - w : 0,
      z = c ? c(t.fy) - x : 0,
      [O, S] = Ll(this, r),
      N = bc(e, O),
      C = kc(e, S),
      T = d ? pu : du,
      R = T(gu);
    let I, W;
    "title" in e
      ? ((I = e.channels), (W = Tf))
      : ((I = Nf.call(this, e, n)), (W = Rf));
    const j = El("svg:g", o)
      .call(ml, this, r, o)
      .call(cu, this)
      .call(xl, this, { x: L && a, y: A && l })
      .call((r) =>
        r
          .selectAll()
          .data(t)
          .enter()
          .append("g")
          .attr(
            "transform",
            (t) => `translate(${Math.round(N(t))},${Math.round(C(t))})`,
          )
          .call(yl, this)
          .call((t) => t.append("path").attr("filter", v))
          .call((r) =>
            r.append("text").each(function (r) {
              const o = pt(this);
              this.setAttribute("fill", "currentColor"),
                this.setAttribute("fill-opacity", 1),
                this.setAttribute("stroke", "none");
              const a = W.call(i, r, t, I, n, e);
              if ("string" == typeof a)
                for (const t of i.splitLines(a)) B(o, { value: i.clipLine(t) });
              else {
                const t = new Set();
                for (const n of a) {
                  const { label: e = "" } = n;
                  (e && t.has(e)) || (t.add(e), B(o, n));
                }
              }
            }),
          ),
      );
    function B(t, { label: n, value: e, color: r, opacity: o }) {
      (n ??= ""), (e ??= "");
      const i = null != r || null != o;
      let a,
        l = 100 * m;
      const [s] = vu(n, l, T, R);
      if (s >= 0) (n = n.slice(0, s).trimEnd() + gu), (a = e.trim()), (e = "");
      else {
        (n || (!e && !i)) && (e = " " + e);
        const [t] = vu(e, l - T(n), T, R);
        t >= 0 && ((a = e.trim()), (e = e.slice(0, t).trimEnd() + gu));
      }
      const c = t.append("tspan").attr("x", 0).attr("dy", `${p}em`).text("​");
      n && c.append("tspan").attr("font-weight", "bold").text(n),
        e && c.append(() => f.createTextNode(e)),
        i &&
          c
            .append("tspan")
            .text(" ■")
            .attr("fill", r)
            .attr("fill-opacity", o)
            .style("user-select", "none"),
        a && c.append("title").text(a);
    }
    function F() {
      const { width: t, height: n } = r.facet ?? r;
      j.selectChildren().each(function (e) {
        let { x: r, width: o, height: a } = this.getBBox();
        (o = Math.round(o)), (a = Math.round(a));
        let l = h;
        if (void 0 === l) {
          const r = N(e) + E,
            s = C(e) + z,
            c = r + o + g + 2 * y < t,
            u = r - o - g - 2 * y > 0,
            f = s + a + g + 2 * y < n,
            h = s - a - g - 2 * y > 0;
          l =
            c && u
              ? f && h
                ? i.preferredAnchor
                : h
                ? "bottom"
                : "top"
              : f && h
              ? c
                ? "left"
                : "right"
              : (c || u) && (f || h)
              ? `${h ? "bottom" : "top"}-${c ? "left" : "right"}`
              : i.preferredAnchor;
        }
        const s = this.firstChild,
          c = this.lastChild;
        if (
          (s.setAttribute(
            "d",
            (function (t, n, e, r, o) {
              const i = r + 2 * e,
                a = o + 2 * e;
              switch (t) {
                case "middle":
                  return `M${-i / 2},${-a / 2}h${i}v${a}h${-i}z`;
                case "top-left":
                  return `M0,0l${n},${n}h${i - n}v${a}h${-i}z`;
                case "top":
                  return `M0,0l${n / 2},${n / 2}h${
                    (i - n) / 2
                  }v${a}h${-i}v${-a}h${(i - n) / 2}z`;
                case "top-right":
                  return `M0,0l${-n},${n}h${n - i}v${a}h${i}z`;
                case "right":
                  return `M0,0l${-n / 2},${-n / 2}v${
                    n / 2 - a / 2
                  }h${-i}v${a}h${i}v${n / 2 - a / 2}z`;
                case "bottom-left":
                  return `M0,0l${n},${-n}h${i - n}v${-a}h${-i}z`;
                case "bottom":
                  return `M0,0l${n / 2},${-n / 2}h${
                    (i - n) / 2
                  }v${-a}h${-i}v${a}h${(i - n) / 2}z`;
                case "bottom-right":
                  return `M0,0l${-n},${-n}h${n - i}v${-a}h${i}z`;
                case "left":
                  return `M0,0l${n / 2},${-n / 2}v${
                    n / 2 - a / 2
                  }h${i}v${a}h${-i}v${n / 2 - a / 2}z`;
              }
            })(l, g, y, o, a),
          ),
          r)
        )
          for (const t of c.childNodes) t.setAttribute("x", -r);
        c.setAttribute(
          "y",
          +(function (t, n, e) {
            return /^top(?:-|$)/.test(t) ? 0.94 - e : -0.29 - n * e;
          })(l, c.childNodes.length, p).toFixed(6) + "em",
        ),
          c.setAttribute(
            "transform",
            `translate(${(function (t, n, e, r, o) {
              switch (t) {
                case "middle":
                  return [-r / 2, o / 2];
                case "top-left":
                  return [e, n + e];
                case "top":
                  return [-r / 2, n / 2 + e];
                case "top-right":
                  return [-r - e, n + e];
                case "right":
                  return [-n / 2 - r - e, o / 2];
                case "bottom-left":
                  return [e, -n - e];
                case "bottom":
                  return [-r / 2, -n / 2 - e];
                case "bottom-right":
                  return [-r - e, -n - e];
                case "left":
                  return [e + n / 2, o / 2];
              }
            })(l, g, y, o, a)})`,
          );
      }),
        j.attr("visibility", null);
    }
    return (
      t.length &&
        (j.attr("visibility", "hidden"),
        u.isConnected
          ? Promise.resolve().then(F)
          : "undefined" != typeof requestAnimationFrame &&
            requestAnimationFrame(F)),
      j.node()
    );
  }
}
function Sf(t, { x: n, y: e, ...r } = {}) {
  return (
    void 0 === r.frameAnchor && ([n, e] = Xo(n, e)),
    new Of(t, { ...r, x: n, y: e })
  );
}
function Nf({ channels: t }, n) {
  const e = {};
  let r = this.format;
  (r = Cf(r, t, "x")), (r = Cf(r, t, "y")), (this.format = r);
  for (const n in r) {
    const o = r[n];
    if (null !== o && !1 !== o)
      if ("fx" === n || "fy" === n) e[n] = !0;
      else {
        const r = Ua(t, n);
        r && (e[n] = r);
      }
  }
  for (const n in t) {
    if (n in e || n in r || zf.has(n)) continue;
    const o = Ua(t, n);
    o && (e[n] = o);
  }
  this.facet &&
    (n.fx && !("fx" in r) && (e.fx = !0), n.fy && !("fy" in r) && (e.fy = !0));
  for (const t in e) {
    const r = this.format[t];
    if ("string" == typeof r) {
      const o = e[t]?.value ?? n[t]?.domain() ?? [];
      this.format[t] = (mi(o) ? R : Re)(r);
    } else if (void 0 === r || !0 === r) {
      const e = n[t];
      this.format[t] = e?.bandwidth ? af(e, e.domain()) : tl;
    }
  }
  return e;
}
function Cf(t, n, e) {
  if (!(e in t)) return t;
  const r = `${e}1`,
    o = `${e}2`;
  if (!((!(r in t) && r in n) || (!(o in t) && o in n))) return t;
  const i = Object.entries(t),
    a = t[e];
  return (
    i.splice(i.findIndex(([t]) => t === e) + 1, 0, [r, a], [o, a]),
    Object.fromEntries(i)
  );
}
function Tf(t, n, { title: e }) {
  return tl(e.value[t], t);
}
function* Rf(t, n, e, r, o) {
  for (const i in e) {
    if ("fx" === i || "fy" === i) {
      yield { label: jf(r, e, i), value: this.format[i](n[i], t) };
      continue;
    }
    if ("x1" === i && "x2" in e) continue;
    if ("y1" === i && "y2" in e) continue;
    const a = e[i];
    if ("x2" === i && "x1" in e)
      yield { label: Wf(r, e, "x"), value: If(this.format.x2, e.x1, a, t) };
    else if ("y2" === i && "y1" in e)
      yield { label: Wf(r, e, "y"), value: If(this.format.y2, e.y1, a, t) };
    else {
      const n = a.value[t],
        l = a.scale;
      if (!Cr(n) && null == l) continue;
      yield {
        label: jf(r, e, i),
        value: this.format[i](n, t),
        color: "color" === l ? o[i][t] : null,
        opacity: "opacity" === l ? o[i][t] : null,
      };
    }
  }
}
function If(t, n, e, r) {
  return e.hint?.length
    ? `${t(e.value[r] - n.value[r], r)}`
    : `${t(n.value[r], r)}–${t(e.value[r], r)}`;
}
function Wf(t, n, e) {
  const r = jf(t, n, `${e}1`, e),
    o = jf(t, n, `${e}2`, e);
  return r === o ? r : `${r}–${o}`;
}
function jf(t, n, e, r = e) {
  const o = n[e],
    i = t[o?.scale ?? e];
  return String(i?.label ?? o?.label ?? r);
}
function Bf(t = {}) {
  const {
      facet: n,
      style: e,
      title: r,
      subtitle: o,
      caption: i,
      ariaLabel: a,
      ariaDescription: l,
    } = t,
    s = $l(t.className),
    c = void 0 === t.marks ? [] : Df(t.marks);
  c.push(
    ...(function (t) {
      const n = [];
      for (const e of t) {
        let t = e.tip;
        if (t) {
          !0 === t ? (t = {}) : "string" == typeof t && (t = { pointer: t });
          let { pointer: r, preferredAnchor: o } = t;
          (r = /^x$/i.test(r) ? xc : /^y$/i.test(r) ? wc : vc),
            (t = r(Gf(e, t))),
            (t.title = null),
            void 0 === o && (t.preferredAnchor = r === wc ? "left" : "bottom");
          const i = Sf(e.data, t);
          (i.facet = e.facet), (i.facetAnchor = e.facetAnchor), n.push(i);
        }
      }
      return n;
    })(c),
  );
  const u = (function (t, n) {
      if (null == t) return;
      const { x: e, y: r } = t;
      if (null == e && null == r) return;
      const o = jo(t.data);
      if (null == o) throw new Error("missing facet data");
      const i = {};
      null != e && (i.fx = Ia(o, { value: e, scale: "fx" }));
      null != r && (i.fy = Ia(o, { value: r, scale: "fy" }));
      Pf(i, n);
      const a = Ks(o, i);
      return { channels: i, groups: a, data: t.data };
    })(n, t),
    f = new Map();
  for (const n of c) {
    const e = Xf(n, u, t);
    e && f.set(n, e);
  }
  const h = new Map();
  u && Uf(h, [u], t), Uf(h, f, t);
  const d = Df(
    (function (t, n, e) {
      let {
        projection: r,
        x: o = {},
        y: i = {},
        fx: a = {},
        fy: l = {},
        axis: s,
        grid: c,
        facet: u = {},
        facet: { axis: f = s, grid: h } = u,
        x: { axis: d = s, grid: p = null === d ? null : c } = o,
        y: { axis: m = s, grid: y = null === m ? null : c } = i,
        fx: { axis: g = f, grid: v = null === g ? null : h } = a,
        fy: { axis: x = f, grid: w = null === x ? null : h } = l,
      } = e;
      (r || (!Vo(o) && !th("x", t))) && (d = p = null);
      (r || (!Vo(i) && !th("y", t))) && (m = y = null);
      n.has("fx") || (g = v = null);
      n.has("fy") || (x = w = null);
      void 0 === d && (d = !Qf(t, "x"));
      void 0 === m && (m = !Qf(t, "y"));
      void 0 === g && (g = !Qf(t, "fx"));
      void 0 === x && (x = !Qf(t, "fy"));
      !0 === d && (d = "bottom");
      !0 === m && (m = "left");
      !0 === g && (g = "top" === d || null === d ? "bottom" : "top");
      !0 === x && (x = "right" === m || null === m ? "left" : "right");
      const b = [];
      return (
        Jf(b, w, Zu, l),
        Zf(b, x, Vu, "right", "left", u, l),
        Jf(b, v, Ku, a),
        Zf(b, g, Uu, "top", "bottom", u, a),
        Jf(b, y, Gu, i),
        Zf(b, m, Pu, "left", "right", e, i),
        Jf(b, p, Ju, o),
        Zf(b, d, Yu, "bottom", "top", e, o),
        b
      );
    })(c, h, t),
  );
  for (const n of d) {
    const e = Xf(n, u, t);
    e && f.set(n, e);
  }
  c.unshift(...d);
  let p = (function (t, n) {
    const { fx: e, fy: r } = Es(t, n),
      o = e?.scale.domain(),
      i = r?.scale.domain();
    return o && i
      ? Ne(o, i).map(([t, n], e) => ({ x: t, y: n, i: e }))
      : o
      ? o.map((t, n) => ({ x: t, i: n }))
      : i
      ? i.map((t, n) => ({ y: t, i: n }))
      : void 0;
  })(h, t);
  if (void 0 !== p) {
    const t = u ? uc(p, u) : void 0;
    for (const n of c) {
      if (null === n.facet || "super" === n.facet) continue;
      const e = f.get(n);
      void 0 !== e &&
        (e.facetsIndex = null != n.fx || null != n.fy ? uc(p, e) : t);
    }
    const n = new Set();
    for (const { facetsIndex: t } of f.values())
      t?.forEach((t, e) => {
        t?.length > 0 && n.add(e);
      });
    p.forEach(
      0 < n.size && n.size < p.length
        ? (t, e) => (t.empty = !n.has(e))
        : (t) => (t.empty = !1),
    );
    for (const t of c)
      if ("exclude" === t.facet) {
        const n = f.get(t);
        void 0 !== n && (n.facetsIndex = Qs(n.facetsIndex));
      }
  }
  for (const n of Wi.keys())
    Vo(t[n]) && "fx" !== n && "fy" !== n && h.set(n, []);
  const m = new Map();
  for (const n of c) {
    if (m.has(n)) throw new Error("duplicate mark; each mark must be unique");
    const { facetsIndex: e, channels: r } = f.get(n) ?? {},
      { data: o, facets: i, channels: a } = n.initialize(e, r, t);
    Pf(a, t), m.set(n, { data: o, facets: i, channels: a });
  }
  const y = Es(Uf(h, m, t), t),
    g = (function (t, n, e = {}) {
      let r = 0.5 - ol,
        o = 0.5 + ol,
        i = 0.5 + ol,
        a = 0.5 - ol;
      for (const {
        marginTop: t,
        marginRight: e,
        marginBottom: l,
        marginLeft: s,
      } of n)
        t > r && (r = t), e > o && (o = e), l > i && (i = l), s > a && (a = s);
      let {
        margin: l,
        marginTop: s = void 0 !== l ? l : r,
        marginRight: c = void 0 !== l ? l : o,
        marginBottom: u = void 0 !== l ? l : i,
        marginLeft: f = void 0 !== l ? l : a,
      } = e;
      (s = +s), (c = +c), (u = +u), (f = +f);
      let {
        width: h = 640,
        height: d = Zs(t, e, {
          width: h,
          marginTopDefault: r,
          marginRightDefault: o,
          marginBottomDefault: i,
          marginLeftDefault: a,
        }) + Math.max(0, s - r + u - i),
      } = e;
      (h = +h), (d = +d);
      const p = {
        width: h,
        height: d,
        marginTop: s,
        marginRight: c,
        marginBottom: u,
        marginLeft: f,
      };
      if (t.fx || t.fy) {
        let {
          margin: t,
          marginTop: n = void 0 !== t ? t : s,
          marginRight: r = void 0 !== t ? t : c,
          marginBottom: o = void 0 !== t ? t : u,
          marginLeft: i = void 0 !== t ? t : f,
        } = e.facet ?? {};
        (n = +n),
          (r = +r),
          (o = +o),
          (i = +i),
          (p.facet = {
            marginTop: n,
            marginRight: r,
            marginBottom: o,
            marginLeft: i,
          });
      }
      return p;
    })(y, c, t);
  !(function (t, n) {
    const { x: e, y: r, fx: o, fy: i } = t,
      a = o || i ? Ns(n) : n;
    o && Ts(o, a), i && Rs(i, a);
    const l = o || i ? Cs(t, n) : n;
    e && Ts(e, l), r && Rs(r, l);
  })(y, g);
  const v = zs(y),
    { fx: x, fy: w } = v,
    b = x || w ? Cs(y, g) : g,
    k =
      x || w
        ? (function ({ fx: t, fy: n }, e) {
            const {
                marginTop: r,
                marginRight: o,
                marginBottom: i,
                marginLeft: a,
                width: l,
                height: s,
              } = Ns(e),
              c = t && nh(t),
              u = n && nh(n);
            return {
              marginTop: n ? u[0] : r,
              marginRight: t ? l - c[1] : o,
              marginBottom: n ? s - u[1] : i,
              marginLeft: t ? c[0] : a,
              inset: {
                marginTop: e.marginTop,
                marginRight: e.marginRight,
                marginBottom: e.marginBottom,
                marginLeft: e.marginLeft,
              },
              width: l,
              height: s,
            };
          })(v, g)
        : g,
    $ = Al(t),
    M = $.document,
    L = mt("svg").call(M.documentElement);
  let A = L;
  ($.ownerSVGElement = L),
    ($.className = s),
    ($.projection = Nl(t, b)),
    ($.filterFacets = (t, n) => uc(p, { channels: n, groups: Ks(t, n) })),
    ($.getMarkState = (t) => {
      const n = m.get(t),
        e = f.get(t);
      return { ...n, channels: { ...n.channels, ...e?.channels } };
    }),
    ($.dispatchValue = (t) => {
      A.value !== t &&
        ((A.value = t), A.dispatchEvent(new Event("input", { bubbles: !0 })));
    });
  const E = new Set();
  for (const [n, e] of m)
    if (null != n.initializer) {
      const r = "super" === n.facet ? k : b,
        o = n.initializer(e.data, e.facets, e.channels, v, r, $);
      if (
        (void 0 !== o.data && (e.data = o.data),
        void 0 !== o.facets && (e.facets = o.facets),
        void 0 !== o.channels)
      ) {
        const { fx: r, fy: i, ...a } = o.channels;
        Yf(a), Object.assign(e.channels, a);
        for (const n of Object.values(a)) {
          const { scale: e } = n;
          null != e &&
            (z = Wi.get(e)) !== Oi &&
            z !== Ii &&
            (Vf(n, t), E.add(e));
        }
        (null == r && null == i) || f.set(n, !0);
      }
    }
  var z;
  if (E.size) {
    const n = new Map();
    Uf(n, m, t, (t) => E.has(t)), Uf(h, m, t, (t) => E.has(t));
    const e = (function (t, n) {
        for (const e in t) {
          const r = t[e],
            o = n[e];
          void 0 === r.label && o && (r.label = o.label);
        }
        return t;
      })(Es(n, t), y),
      { scales: r, ...o } = zs(e);
    Object.assign(y, e), Object.assign(v, o), Object.assign(v.scales, r);
  }
  let O, S;
  void 0 !== p &&
    ((O = { x: x?.domain(), y: w?.domain() }),
    (p = (function (t, { x: n, y: e }) {
      return (
        (n &&= ec(n)),
        (e &&= ec(e)),
        t
          .filter(
            n && e
              ? (t) => n.has(t.x) && e.has(t.y)
              : n
              ? (t) => n.has(t.x)
              : (t) => e.has(t.y),
          )
          .sort(
            n && e
              ? (t, r) => n.get(t.x) - n.get(r.x) || e.get(t.y) - e.get(r.y)
              : n
              ? (t, e) => n.get(t.x) - n.get(e.x)
              : (t, n) => e.get(t.y) - e.get(n.y),
          )
      );
    })(p, O)),
    (S = (function (t, n, { marginTop: e, marginLeft: r }) {
      return t && n
        ? ({ x: o, y: i }) => `translate(${t(o) - r},${n(i) - e})`
        : t
        ? ({ x: n }) => `translate(${t(n) - r},0)`
        : ({ y: t }) => `translate(0,${n(t) - e})`;
    })(x, w, g)));
  for (const [t, n] of m) n.values = t.scale(n.channels, v, $);
  const { width: N, height: C } = g;
  pt(L)
    .attr("class", s)
    .attr("fill", "currentColor")
    .attr("font-family", "system-ui, sans-serif")
    .attr("font-size", 10)
    .attr("text-anchor", "middle")
    .attr("width", N)
    .attr("height", C)
    .attr("viewBox", `0 0 ${N} ${C}`)
    .attr("aria-label", a)
    .attr("aria-description", l)
    .call((t) =>
      t
        .append("style")
        .text(
          `:where(.${s}) {\n  --plot-background: white;\n  display: block;\n  height: auto;\n  height: intrinsic;\n  max-width: 100%;\n}\n:where(.${s} text),\n:where(.${s} tspan) {\n  white-space: pre;\n}`,
        ),
    )
    .call(Ml, e);
  for (const t of c) {
    const { channels: n, values: e, facets: r } = m.get(t);
    if (void 0 === p || "super" === t.facet) {
      let o = null;
      if (r && ((o = r[0]), (o = t.filter(o, n, e)), 0 === o.length)) continue;
      const i = t.render(o, v, e, k, $);
      if (null == i) continue;
      L.appendChild(i);
    } else {
      let o;
      for (const i of p) {
        if (!(t.facetAnchor?.(p, O, i) ?? !i.empty)) continue;
        let a = null;
        if (r) {
          const o = f.has(t);
          if (((a = r[o ? i.i : 0]), (a = t.filter(a, n, e)), 0 === a.length))
            continue;
          o || a !== r[0] || (a = Qo(a)),
            (a.fx = i.x),
            (a.fy = i.y),
            (a.fi = i.i);
        }
        const l = t.render(a, v, e, b, $);
        if (null != l) {
          (o ??= pt(L).append("g")).append(() => l).datum(i);
          for (const t of [
            "aria-label",
            "aria-description",
            "aria-hidden",
            "transform",
          ])
            l.hasAttribute(t) &&
              (o.attr(t, l.getAttribute(t)), l.removeAttribute(t));
        }
      }
      o?.selectChildren().attr("transform", S);
    }
  }
  const T = (function (t, n, e) {
      const r = [];
      for (const [o, i] of vf) {
        const a = e[o];
        if (a?.legend && o in t) {
          const e = i(t[o], wf(n, t[o], a), (n) => t[n]);
          null != e && r.push(e);
        }
      }
      return r;
    })(y, $, t),
    { figure: R = null != r || null != o || null != i || T.length > 0 } = t;
  R &&
    ((A = M.createElement("figure")),
    (A.className = `${s}-figure`),
    (A.style.maxWidth = "initial"),
    null != r && A.append(Ff(M, r, "h2")),
    null != o && A.append(Ff(M, o, "h3")),
    A.append(...T, L),
    null != i &&
      A.append(
        (function (t, n) {
          const e = t.createElement("figcaption");
          return e.append(n), e;
        })(M, i),
      )),
    (A.scale = (function (t) {
      return (n) => {
        if (!Wi.has((n = `${n}`))) throw new Error(`unknown scale: ${n}`);
        return t[n];
      };
    })(v.scales)),
    (A.legend = (function (t, n, e = {}) {
      return (r, o) => {
        if (!vf.has(r)) throw new Error(`unknown legend type: ${r}`);
        if (r in t) return vf.get(r)(t[r], wf(n, e[r], o), (n) => t[n]);
      };
    })(y, $, t));
  const I = (function () {
    const t = el;
    return (el = 0), (nl = void 0), t;
  })();
  return (
    I > 0 &&
      pt(L)
        .append("text")
        .attr("x", N)
        .attr("y", 20)
        .attr("dy", "-1em")
        .attr("text-anchor", "end")
        .attr("font-family", "initial")
        .text("⚠️")
        .append("title")
        .text(
          `${I.toLocaleString("en-US")} warning${
            1 === I ? "" : "s"
          }. Please check the console.`,
        ),
    A
  );
}
function Ff(t, n, e) {
  if (n.ownerDocument) return n;
  const r = t.createElement(e);
  return r.append(n), r;
}
function Df(t) {
  return t
    .flat(1 / 0)
    .filter((t) => null != t)
    .map(qf);
}
function qf(t) {
  return "function" == typeof t.render ? t : new _f(t);
}
fc.prototype.plot = function ({ marks: t = [], ...n } = {}) {
  return Bf({ ...n, marks: [...t, this] });
};
class _f extends fc {
  constructor(t) {
    if ("function" != typeof t)
      throw new TypeError("invalid mark; missing render function");
    super(), (this.render = t);
  }
  render() {}
}
function Pf(t, n) {
  for (const e in t) Vf(t[e], n);
  return t;
}
function Vf(t, n) {
  const { scale: e, transform: r = !0 } = t;
  if (null == e || !r) return;
  const {
    type: o,
    percent: i,
    interval: a,
    transform: l = i ? (t) => 100 * t : li(a, o),
  } = n[e] ?? {};
  null != l && ((t.value = Bo(t.value, l)), (t.transform = !1));
}
function Yf(t) {
  for (const n in t) Ba(n, t[n]);
}
function Uf(t, n, e, r = bo) {
  for (const { channels: o } of n.values())
    for (const n in o) {
      const i = o[n],
        { scale: a } = i;
      if (null != a && r(a))
        if ("projection" === a) {
          if (!Bl(e)) {
            const n = void 0 === e.x?.domain,
              r = void 0 === e.y?.domain;
            if (n || r) {
              const [e, o] = Dl(i);
              n && Hf(t, "x", e), r && Hf(t, "y", o);
            }
          }
        } else Hf(t, a, i);
    }
  return t;
}
function Hf(t, n, e) {
  const r = t.get(n);
  void 0 !== r ? r.push(e) : t.set(n, [e]);
}
function Xf(t, n, e) {
  if (null === t.facet || "super" === t.facet) return;
  const { fx: r, fy: o } = t;
  if (null != r || null != o) {
    const n = jo(t.data ?? r ?? o);
    if (void 0 === n) throw new Error(`missing facet data in ${t.ariaLabel}`);
    if (null === n) return;
    const i = {};
    return (
      null != r && (i.fx = Ia(n, { value: r, scale: "fx" })),
      null != o && (i.fy = Ia(n, { value: o, scale: "fy" })),
      Pf(i, e),
      { channels: i, groups: Ks(n, i) }
    );
  }
  if (void 0 === n) return;
  const { channels: i, groups: a, data: l } = n;
  if ("auto" !== t.facet || t.data === l) return { channels: i, groups: a };
  l.length > 0 &&
    (a.size > 1 || (1 === a.size && i.fx && i.fy && [...a][0][1].size > 1)) &&
    jo(t.data)?.length === l.length &&
    rl(
      `Warning: the ${t.ariaLabel} mark appears to use faceted data, but isn’t faceted. The mark data has the same length as the facet data and the mark facet option is "auto", but the mark data and facet data are distinct. If this mark should be faceted, set the mark facet option to true; otherwise, suppress this warning by setting the mark facet option to false.`,
    );
}
function Gf(t, n = {}) {
  return Vi({ ...n, x: null, y: null }, (n, e, r, o, i, a) =>
    a.getMarkState(t),
  );
}
function Zf(t, n, e, r, o, i, a) {
  if (!n) return;
  const l = /^\s*both\s*$/i.test(n);
  a = (function (
    t,
    n,
    {
      line: e = n.line,
      ticks: r,
      tickSize: o,
      tickSpacing: i,
      tickPadding: a,
      tickFormat: l,
      tickRotate: s,
      fontVariant: c,
      ariaLabel: u,
      ariaDescription: f,
      label: h = n.label,
      labelAnchor: d,
      labelArrow: p = n.labelArrow,
      labelOffset: m,
    },
  ) {
    return {
      anchor: t,
      line: e,
      ticks: r,
      tickSize: o,
      tickSpacing: i,
      tickPadding: a,
      tickFormat: l,
      tickRotate: s,
      fontVariant: c,
      ariaLabel: u,
      ariaDescription: f,
      label: h,
      labelAnchor: d,
      labelArrow: p,
      labelOffset: m,
    };
  })(l ? r : n, i, a);
  const { line: s } = a;
  (e !== Pu && e !== Yu) ||
    !s ||
    Mi(s) ||
    t.push(
      Af(
        (function (t) {
          const { anchor: n, line: e } = t;
          return {
            anchor: n,
            facetAnchor: n + "-empty",
            stroke: !0 === e ? void 0 : e,
          };
        })(a),
      ),
    ),
    t.push(e(a)),
    l && t.push(e({ ...a, anchor: o, label: null }));
}
function Jf(t, n, e, r) {
  n &&
    !Mi(n) &&
    t.push(
      e(
        (function (
          t,
          {
            stroke: n = bi(t) ? t : void 0,
            ticks: e = Kf(t) ? t : void 0,
            tickSpacing: r,
            ariaLabel: o,
            ariaDescription: i,
          },
        ) {
          return {
            stroke: n,
            ticks: e,
            tickSpacing: r,
            ariaLabel: o,
            ariaDescription: i,
          };
        })(n, r),
      ),
    );
}
function Kf(t) {
  switch (typeof t) {
    case "number":
      return !0;
    case "string":
      return !bi(t);
  }
  return hi(t) || "function" == typeof t?.range;
}
function Qf(t, n) {
  const e = `${n}-axis `;
  return t.some((t) => t.ariaLabel?.startsWith(e));
}
function th(t, n) {
  for (const e of n)
    for (const n in e.channels) {
      const { scale: r } = e.channels[n];
      if (r === t || "projection" === r) return !0;
    }
  return !1;
}
function nh(t) {
  const n = t.domain();
  let e = t(n[0]),
    r = t(n[n.length - 1]);
  return r < e && ([e, r] = [r, e]), [e, r + t.bandwidth()];
}
const eh = new Map([
  ["basis", Fe],
  ["basis-closed", De],
  ["basis-open", qe],
  ["bundle", _e],
  ["bump-x", Pe],
  ["bump-y", Ve],
  ["cardinal", Ye],
  ["cardinal-closed", Ue],
  ["cardinal-open", He],
  ["catmull-rom", Xe],
  ["catmull-rom-closed", Ge],
  ["catmull-rom-open", Ze],
  ["linear", Be],
  ["linear-closed", Je],
  ["monotone-x", Ke],
  ["monotone-y", Qe],
  ["natural", tr],
  ["step", nr],
  ["step-after", er],
  ["step-before", rr],
]);
function rh(t = Be, n) {
  if ("function" == typeof t) return t;
  const e = eh.get(`${t}`.toLowerCase());
  if (!e) throw new Error(`unknown curve: ${t}`);
  if (void 0 !== n) {
    if ("beta" in e) return e.beta(n);
    if ("tension" in e) return e.tension(n);
    if ("alpha" in e) return e.alpha(n);
  }
  return e;
}
function oh(t = ih, n) {
  return "function" != typeof t && "auto" === `${t}`.toLowerCase()
    ? ih
    : rh(t, n);
}
function ih(t) {
  return Be(t);
}
function ah(t = { y: "count" }, n = {}) {
  [t, n] = dh(t, n);
  const { x: e, y: r } = n;
  return hh(ph(e, n, xo), null, null, r, t, Wc(n));
}
function lh(t = { x: "count" }, n = {}) {
  [t, n] = dh(t, n);
  const { x: e, y: r } = n;
  return hh(null, ph(r, n, xo), e, null, t, jc(n));
}
function sh(t = { fill: "count" }, n = {}) {
  [t, n] = dh(t, n);
  const { x: e, y: r } = (function (t) {
    let { x: n, y: e } = t;
    return (
      (n = ph(n, t)),
      (e = ph(e, t)),
      ([n.value, e.value] = Xo(n.value, e.value)),
      { x: n, y: e }
    );
  })(n);
  return hh(e, r, null, null, t, Wc(jc(n)));
}
function ch(t, n, e = {}) {
  if (null == e?.interval) return e;
  const { reduce: r = La } = e,
    o = { filter: null };
  return (
    null != e[n] && (o[n] = r),
    null != e[`${n}1`] && (o[`${n}1`] = r),
    null != e[`${n}2`] && (o[`${n}2`] = r),
    t(o, e)
  );
}
function uh(t = {}) {
  return ch(ah, "y", mc(t, "x"));
}
function fh(t = {}) {
  return ch(lh, "x", mc(t, "y"));
}
function hh(
  t,
  n,
  e,
  r,
  { data: o = Ma, filter: i = za, sort: a, reverse: l, ...s } = {},
  c = {},
) {
  (t = mh(t)),
    (n = mh(n)),
    (s = (function (t, n) {
      return ca(t, n, gh);
    })(s, c)),
    (o = xh(o, xo)),
    (a = null == a ? void 0 : gh("sort", a, c)),
    (i = null == i ? void 0 : vh("filter", i, c)),
    null != e && sa(s, "x", "x1", "x2") && (e = null),
    null != r && sa(s, "y", "y1", "y2") && (r = null);
  const [u, f] = ri(t),
    [h, d] = ri(t),
    [p, m] = ri(n),
    [y, g] = ri(n),
    [v, x] = null != e ? [e, "x"] : null != r ? [r, "y"] : [],
    [w, b] = ri(v),
    {
      x: k,
      y: $,
      z: M,
      fill: L,
      stroke: A,
      x1: E,
      x2: z,
      y1: O,
      y2: S,
      domain: N,
      cumulative: C,
      thresholds: T,
      interval: R,
      ...I
    } = c,
    [W, j] = ri(M),
    [B] = To(L),
    [F] = To(A),
    [D, q] = ri(B),
    [_, P] = ri(F);
  return {
    ...("z" in c && { z: W || M }),
    ...("fill" in c && { fill: D || L }),
    ...("stroke" in c && { stroke: _ || A }),
    ...Pi(I, (e, r, c) => {
      const u = ai(ho(e, v), c?.[x]),
        h = ho(e, M),
        p = ho(e, B),
        y = ho(e, F),
        w = wa(s, { z: h, fill: p, stroke: y }),
        k = [],
        $ = [],
        L = u && b([]),
        A = h && j([]),
        E = p && q([]),
        z = y && P([]),
        O = t && f([]),
        S = t && d([]),
        N = n && m([]),
        C = n && g([]),
        T = (function (t, n, e) {
          const r = t?.(e),
            o = n?.(e);
          return r && o
            ? function* (t) {
                const n = r.bin(t);
                for (const [t, [i, a]] of r.entries()) {
                  const r = o.bin(n[t]);
                  for (const [t, [n, l]] of o.entries())
                    yield [r[t], { data: e, x1: i, y1: n, x2: a, y2: l }];
                }
              }
            : r
            ? function* (t) {
                const n = r.bin(t);
                for (const [t, [o, i]] of r.entries())
                  yield [n[t], { data: e, x1: o, x2: i }];
              }
            : function* (t) {
                const n = o.bin(t);
                for (const [t, [r, i]] of o.entries())
                  yield [n[t], { data: e, y1: r, y2: i }];
              };
        })(t, n, e);
      let R = 0;
      for (const t of s) t.initialize(e);
      a && a.initialize(e), i && i.initialize(e);
      for (const t of r) {
        const n = [];
        for (const n of s) n.scope("facet", t);
        a && a.scope("facet", t), i && i.scope("facet", t);
        for (const [r, l] of ha(t, w))
          for (const [t, c] of ha(l, u))
            for (const [l, f] of T(c))
              if (!i || i.reduce(l, f)) {
                n.push(R++),
                  $.push(o.reduceIndex(l, e, f)),
                  u && L.push(t),
                  h && A.push(w === h ? r : h[(l.length > 0 ? l : c)[0]]),
                  p && E.push(w === p ? r : p[(l.length > 0 ? l : c)[0]]),
                  y && z.push(w === y ? r : y[(l.length > 0 ? l : c)[0]]),
                  O && (O.push(f.x1), S.push(f.x2)),
                  N && (N.push(f.y1), C.push(f.y2));
                for (const t of s) t.reduce(l, f);
                a && a.reduce(l);
              }
        k.push(n);
      }
      return ba(k, a, l), { data: $, facets: k };
    }),
    ...(!sa(s, "x") &&
      (u ? { x1: u, x2: h, x: ii(u, h) } : { x: k, x1: E, x2: z })),
    ...(!sa(s, "y") &&
      (p ? { y1: p, y2: y, y: ii(p, y) } : { y: $, y1: O, y2: S })),
    ...(w && { [x]: w }),
    ...Object.fromEntries(s.map(({ name: t, output: n }) => [t, n])),
  };
}
function dh({ cumulative: t, domain: n, thresholds: e, interval: r, ...o }, i) {
  return [o, { cumulative: t, domain: n, thresholds: e, interval: r, ...i }];
}
function ph(t, { cumulative: n, domain: e, thresholds: r, interval: o }, i) {
  return (
    void 0 === (t = { ...fi(t) }).domain && (t.domain = e),
    void 0 === t.cumulative && (t.cumulative = n),
    void 0 === t.thresholds && (t.thresholds = r),
    void 0 === t.interval && (t.interval = o),
    void 0 === t.value && (t.value = i),
    (t.thresholds = yh(t.thresholds, t.interval)),
    t
  );
}
function mh(t) {
  if (null == t) return;
  const { value: n, cumulative: e, domain: r = le, thresholds: o } = t,
    i = (t) => {
      let i,
        a = ho(t, n);
      if (
        mi(a) ||
        (function (t) {
          return (
            ui(t) && "function" == typeof t?.floor && t.floor() instanceof Date
          );
        })((l = o)) ||
        (hi(l) && mi(l))
      ) {
        a = Bo(a, Co, Float64Array);
        let [t, n] = "function" == typeof r ? r(a) : r,
          e = "function" != typeof o || ui(o) ? o : o(a, t, n);
        "number" == typeof e && (e = lr(t, n, e)),
          ui(e) &&
            (r === le && ((t = e.floor(t)), (n = e.offset(e.floor(n)))),
            (e = e.range(t, e.offset(n)))),
          (i = e);
      } else {
        a = Oo(a);
        let [t, n] = "function" == typeof r ? r(a) : r,
          e = "function" != typeof o || ui(o) ? o : o(a, t, n);
        if ("number" == typeof e)
          if (r === le) {
            let r = sr(t, n, e);
            if (isFinite(r))
              if (r > 0) {
                let o = Math.round(t / r),
                  i = Math.round(n / r);
                o * r <= t || --o, i * r > n || ++i;
                let a = i - o + 1;
                e = new Float64Array(a);
                for (let t = 0; t < a; ++t) e[t] = (o + t) * r;
              } else if (r < 0) {
                r = -r;
                let o = Math.round(t * r),
                  i = Math.round(n * r);
                o / r <= t || --o, i / r > n || ++i;
                let a = i - o + 1;
                e = new Float64Array(a);
                for (let t = 0; t < a; ++t) e[t] = (o + t) / r;
              } else e = [t];
            else e = [t];
          } else e = se(t, n, e);
        else
          ui(e) &&
            (r === le && ((t = e.floor(t)), (n = e.offset(e.floor(n)))),
            (e = e.range(t, e.offset(n))));
        i = e;
      }
      var l;
      const s = [];
      if (1 === i.length) s.push([i[0], i[0]]);
      else for (let t = 1; t < i.length; ++t) s.push([i[t - 1], i[t]]);
      return (s.bin = (e < 0 ? Mh : e > 0 ? $h : kh)(s, i, a)), s;
    };
  return (i.label = oi(n)), i;
}
function yh(t, n, e = bh) {
  if (void 0 === t) return void 0 === n ? e : ci(n);
  if ("string" == typeof t) {
    switch (t.toLowerCase()) {
      case "freedman-diaconis":
        return ar;
      case "scott":
        return ir;
      case "sturges":
        return or;
      case "auto":
        return bh;
    }
    return ro(t);
  }
  return t;
}
function gh(t, n, e) {
  return ua(t, n, e, vh);
}
function vh(t, n, e) {
  return fa(t, n, e, xh);
}
function xh(t, n) {
  return da(t, n, wh);
}
function wh(t) {
  switch (`${t}`.toLowerCase()) {
    case "x":
      return Ah;
    case "x1":
      return zh;
    case "x2":
      return Oh;
    case "y":
      return Eh;
    case "y1":
      return Sh;
    case "y2":
      return Nh;
  }
  throw new Error(`invalid bin reduce: ${t}`);
}
function bh(t, n, e) {
  return Math.min(200, ir(t, n, e));
}
function kh(t, n, e) {
  return (
    (n = Oo(n)),
    (r) => {
      const o = t.map(() => []);
      for (const t of r) o[cr(n, e[t]) - 1]?.push(t);
      return o;
    }
  );
}
function $h(t, n, e) {
  const r = kh(t, n, e);
  return (t) => {
    const n = r(t);
    for (let t = 1, e = n.length; t < e; ++t) {
      const e = n[t - 1],
        r = n[t];
      for (const t of e) r.push(t);
    }
    return n;
  };
}
function Mh(t, n, e) {
  const r = kh(t, n, e);
  return (t) => {
    const n = r(t);
    for (let t = n.length - 2; t >= 0; --t) {
      const e = n[t + 1],
        r = n[t];
      for (const t of e) r.push(t);
    }
    return n;
  };
}
function Lh(t, n) {
  const e = (+t + +n) / 2;
  return t instanceof Date ? new Date(e) : e;
}
const Ah = { reduceIndex: (t, n, { x1: e, x2: r }) => Lh(e, r) },
  Eh = { reduceIndex: (t, n, { y1: e, y2: r }) => Lh(e, r) },
  zh = { reduceIndex: (t, n, { x1: e }) => e },
  Oh = { reduceIndex: (t, n, { x2: e }) => e },
  Sh = { reduceIndex: (t, n, { y1: e }) => e },
  Nh = { reduceIndex: (t, n, { y2: e }) => e };
function Ch(t = {}) {
  return Do(t) ? t : { ...t, x: xo };
}
function Th(t = {}) {
  return qo(t) ? t : { ...t, y: xo };
}
function Rh(t = {}, n = {}) {
  1 === arguments.length && ([t, n] = _h(t));
  const { y1: e, y: r = e, x: o, ...i } = n,
    [a, l, s, c] = Vh(r, o, "y", "x", t, i);
  return { ...a, y1: e, y: l, x1: s, x2: c, x: ii(s, c) };
}
function Ih(t = {}, n = {}) {
  1 === arguments.length && ([t, n] = _h(t));
  const { y1: e, y: r = e, x: o } = n,
    [i, a, l] = Vh(r, o, "y", "x", t, n);
  return { ...i, y1: e, y: a, x: l };
}
function Wh(t = {}, n = {}) {
  1 === arguments.length && ([t, n] = _h(t));
  const { y1: e, y: r = e, x: o } = n,
    [i, a, , l] = Vh(r, o, "y", "x", t, n);
  return { ...i, y1: e, y: a, x: l };
}
function jh(t = {}, n = {}) {
  1 === arguments.length && ([t, n] = _h(t));
  const { x1: e, x: r = e, y: o, ...i } = n,
    [a, l, s, c] = Vh(r, o, "x", "y", t, i);
  return { ...a, x1: e, x: l, y1: s, y2: c, y: ii(s, c) };
}
function Bh(t = {}, n = {}) {
  1 === arguments.length && ([t, n] = _h(t));
  const { x1: e, x: r = e, y: o } = n,
    [i, a, l] = Vh(r, o, "x", "y", t, n);
  return { ...i, x1: e, x: a, y: l };
}
function Fh(t = {}, n = {}) {
  1 === arguments.length && ([t, n] = _h(t));
  const { x1: e, x: r = e, y: o } = n,
    [i, a, , l] = Vh(r, o, "x", "y", t, n);
  return { ...i, x1: e, x: a, y: l };
}
function Dh({ x: t, x1: n, x2: e, ...r } = {}) {
  return (
    (r = mc(r, "y")),
    void 0 === n && void 0 === e
      ? Rh({ x: t, ...r })
      : (([n, e] = Ho(t, n, e)), { ...r, x1: n, x2: e })
  );
}
function qh({ y: t, y1: n, y2: e, ...r } = {}) {
  return (
    (r = mc(r, "x")),
    void 0 === n && void 0 === e
      ? jh({ y: t, ...r })
      : (([n, e] = Ho(t, n, e)), { ...r, y1: n, y2: e })
  );
}
function _h(t) {
  const { offset: n, order: e, reverse: r, ...o } = t;
  return [{ offset: n, order: e, reverse: r }, o];
}
const Ph = { length: !0 };
function Vh(t, n = wo, e, r, { offset: o, order: i, reverse: a }, l) {
  if (null === n) throw new Error(`stack requires ${r}`);
  const s = Go(l),
    [c, u] = ri(t),
    [f, h] = ei(n),
    [d, p] = ei(n);
  return (
    (f.hint = d.hint = Ph),
    (o = (function (t) {
      if (null == t) return;
      if ("function" == typeof t) return t;
      switch (`${t}`.toLowerCase()) {
        case "expand":
        case "normalize":
          return Uh;
        case "center":
        case "silhouette":
          return Hh;
        case "wiggle":
          return Xh;
      }
      throw new Error(`unknown offset: ${t}`);
    })(o)),
    (i = (function (t, n, e) {
      if (void 0 === t && n === Xh) return Jh(Tr);
      if (null == t) return;
      if ("string" == typeof t) {
        const n = t.startsWith("-"),
          r = n ? Rr : Tr;
        switch ((n ? t.slice(1) : t).toLowerCase()) {
          case "value":
          case e:
            return (function (t) {
              return (n, e, r) => (n, e) => t(r[n], r[e]);
            })(r);
          case "z":
            return (function (t) {
              return (n, e, r, o) => (n, e) => t(o[n], o[e]);
            })(r);
          case "sum":
            return (function (t) {
              return td(t, (t, n, e, r) =>
                fr(
                  Zo(t),
                  (t) => tt(t, (t) => e[t]),
                  (t) => r[t],
                ),
              );
            })(r);
          case "appearance":
            return (function (t) {
              return td(t, (t, n, e, r) =>
                fr(
                  Zo(t),
                  (t) => n[hr(t, (t) => e[t])],
                  (t) => r[t],
                ),
              );
            })(r);
          case "inside-out":
            return Jh(r);
        }
        return Kh(go(t));
      }
      if ("function" == typeof t) return (1 === t.length ? Kh : Qh)(t);
      if (Array.isArray(t)) return (r = t), td(Tr, () => r);
      var r;
      throw new Error(`invalid order: ${t}`);
    })(i, o, r)),
    [
      Pi(l, (r, l, c) => {
        ({ data: r, facets: l } = (function (t, n) {
          if (1 === n.length) return { data: t, facets: n };
          const e = t.length,
            r = new Uint8Array(e);
          let o = 0;
          for (const t of n) for (const n of t) r[n] && ++o, (r[n] = 1);
          if (0 === o) return { data: t, facets: n };
          const i = ((t = Fo(t))[fo] = new Uint32Array(e + o));
          n = n.map((t) => Fo(t, Uint32Array));
          let a = e;
          r.fill(0);
          for (const e of n)
            for (let n = 0, o = e.length; n < o; ++n) {
              const o = e[n];
              r[o] ? ((e[n] = a), (t[a] = t[o]), (i[a] = o), ++a) : (i[o] = o),
                (r[o] = 1);
            }
          return { data: t, facets: n };
        })(r, l));
        const f = null == t ? void 0 : u(ai(ho(r, t), c?.[e])),
          d = ho(r, n, Float64Array),
          m = ho(r, s),
          y = i && i(r, f, d, m),
          g = r.length,
          v = h(new Float64Array(g)),
          x = p(new Float64Array(g)),
          w = [];
        for (const t of l) {
          const n = f ? Array.from(K(t, (t) => f[t]).values()) : [t];
          if (y) for (const t of n) t.sort(y);
          for (const t of n) {
            let n = 0,
              e = 0;
            a && t.reverse();
            for (const r of t) {
              const t = d[r];
              t < 0
                ? (n = x[r] = (v[r] = n) + t)
                : t > 0
                ? (e = x[r] = (v[r] = e) + t)
                : (x[r] = v[r] = e);
            }
          }
          w.push(n);
        }
        return o && o(w, v, x, m), { data: r, facets: l };
      }),
      c,
      f,
      d,
    ]
  );
}
function Yh(t, n) {
  let e = 0,
    r = 0;
  for (const o of t) {
    const t = n[o];
    t < e && (e = t), t > r && (r = t);
  }
  return [e, r];
}
function Uh(t, n, e) {
  for (const r of t)
    for (const t of r) {
      const [r, o] = Yh(t, e);
      for (const i of t) {
        const t = 1 / (o - r || 1);
        (n[i] = t * (n[i] - r)), (e[i] = t * (e[i] - r));
      }
    }
}
function Hh(t, n, e) {
  for (const r of t) {
    for (const t of r) {
      const [r, o] = Yh(t, e);
      for (const i of t) {
        const t = (o + r) / 2;
        (n[i] -= t), (e[i] -= t);
      }
    }
    Gh(r, n, e);
  }
  Zh(t, n, e);
}
function Xh(t, n, e, r) {
  for (const o of t) {
    const t = new Ce();
    let i = 0;
    for (const a of o) {
      let o = -1;
      const l = a.map((t) => Math.abs(e[t] - n[t])),
        s = a.map((i) => {
          o = r ? r[i] : ++o;
          const a = e[i] - n[i],
            l = t.has(o) ? a - t.get(o) : 0;
          return t.set(o, a), l;
        }),
        c = [0, ...ur(s)];
      for (const t of a) (n[t] += i), (e[t] += i);
      const u = tt(l);
      u && (i -= tt(l, (t, n) => (s[n] / 2 + c[n]) * t) / u);
    }
    Gh(o, n, e);
  }
  Zh(t, n, e);
}
function Gh(t, n, e) {
  const r = ct(t, (t) => ct(t, (t) => n[t]));
  for (const o of t) for (const t of o) (n[t] -= r), (e[t] -= r);
}
function Zh(t, n, e) {
  const r = t.length;
  if (1 === r) return;
  const o = t.map((t) => t.flat()),
    i = o.map((t) => (ct(t, (t) => n[t]) + N(t, (t) => e[t])) / 2),
    a = ct(i);
  for (let t = 0; t < r; t++) {
    const r = a - i[t];
    for (const i of o[t]) (n[i] += r), (e[i] += r);
  }
}
function Jh(t) {
  return td(t, (t, n, e, r) => {
    const o = Zo(t),
      i = fr(
        o,
        (t) => n[hr(t, (t) => e[t])],
        (t) => r[t],
      ),
      a = Q(
        o,
        (t) => tt(t, (t) => e[t]),
        (t) => r[t],
      ),
      l = [],
      s = [];
    let c = 0;
    for (const t of i)
      c < 0 ? ((c += a.get(t)), l.push(t)) : ((c -= a.get(t)), s.push(t));
    return s.reverse().concat(l);
  });
}
function Kh(t) {
  return (n) => {
    const e = ho(n, t);
    return (t, n) => Tr(e[t], e[n]);
  };
}
function Qh(t) {
  return (n) => (e, r) => t(n[e], n[r]);
}
function td(t, n) {
  return (e, r, o, i) => {
    if (!i) throw new Error("missing channel: z");
    const a = new Ce(n(e, r, o, i).map((t, n) => [t, n]));
    return (n, e) => t(a.get(i[n]), a.get(i[e]));
  };
}
const nd = {
  ariaLabel: "area",
  strokeWidth: 1,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 1,
};
class ed extends fc {
  constructor(t, n = {}) {
    const { x1: e, y1: r, x2: o, y2: i, z: a, curve: l, tension: s } = n;
    super(
      t,
      {
        x1: { value: e, scale: "x" },
        y1: { value: r, scale: "y" },
        x2: { value: o, scale: "x", optional: !0 },
        y2: { value: i, scale: "y", optional: !0 },
        z: { value: Go(n), optional: !0 },
      },
      n,
      nd,
    ),
      (this.z = a),
      (this.curve = rh(l, s));
  }
  filter(t) {
    return t;
  }
  render(t, n, e, r, o) {
    const { x1: i, y1: a, x2: l = i, y2: s = a } = e;
    return El("svg:g", o)
      .call(ml, this, r, o)
      .call(xl, this, n, 0, 0)
      .call((n) =>
        n
          .selectAll()
          .data(dl(t, [i, a, l, s], this, e))
          .enter()
          .append("path")
          .call(yl, this)
          .call(fl, this, e)
          .attr(
            "d",
            dr()
              .curve(this.curve)
              .defined((t) => t >= 0)
              .x0((t) => i[t])
              .y0((t) => a[t])
              .x1((t) => l[t])
              .y1((t) => s[t]),
          ),
      )
      .node();
  }
}
function rd(t, n) {
  return void 0 === n ? id(t, { x: Mo, y: Lo }) : new ed(t, n);
}
function od(t, n) {
  const { y: e = vo, ...r } = fh(n);
  return new ed(t, Dh(Ch({ ...r, y1: e, y2: void 0 })));
}
function id(t, n) {
  const { x: e = vo, ...r } = uh(n);
  return new ed(t, qh(Th({ ...r, x1: e, x2: void 0 })));
}
const ad = {
  ariaLabel: "link",
  fill: "none",
  stroke: "currentColor",
  strokeMiterlimit: 1,
};
class ld extends fc {
  constructor(t, n = {}) {
    const { x1: e, y1: r, x2: o, y2: i, curve: a, tension: l } = n;
    super(
      t,
      {
        x1: { value: e, scale: "x" },
        y1: { value: r, scale: "y" },
        x2: { value: o, scale: "x", optional: !0 },
        y2: { value: i, scale: "y", optional: !0 },
      },
      n,
      ad,
    ),
      (this.curve = oh(a, l)),
      Lc(this, n);
  }
  project(t, n, e) {
    this.curve !== ih && super.project(t, n, e);
  }
  render(t, n, e, r, o) {
    const { x1: i, y1: a, x2: l = i, y2: s = a } = e,
      { curve: c } = this;
    return El("svg:g", o)
      .call(ml, this, r, o)
      .call(xl, this, n)
      .call((n) =>
        n
          .selectAll()
          .data(t)
          .enter()
          .append("path")
          .call(yl, this)
          .attr(
            "d",
            c === ih && o.projection
              ? (function (t, n, e, r, o) {
                  const i = dt(t);
                  return (
                    (n = Oo(n)),
                    (e = Oo(e)),
                    (r = Oo(r)),
                    (o = Oo(o)),
                    (t) =>
                      i({
                        type: "LineString",
                        coordinates: [
                          [n[t], e[t]],
                          [r[t], o[t]],
                        ],
                      })
                  );
                })(o.projection, i, a, l, s)
              : (t) => {
                  const n = We(),
                    e = c(n);
                  return (
                    e.lineStart(),
                    e.point(i[t], a[t]),
                    e.point(l[t], s[t]),
                    e.lineEnd(),
                    n
                  );
                },
          )
          .call(ul, this, e)
          .call(Tc, this, e, o),
      )
      .node();
  }
}
function sd(t, { x: n, x1: e, x2: r, y: o, y1: i, y2: a, ...l } = {}) {
  return (
    ([e, r] = cd(n, e, r)),
    ([i, a] = cd(o, i, a)),
    new ld(t, { ...l, x1: e, x2: r, y1: i, y2: a })
  );
}
function cd(t, n, e) {
  if (void 0 === t) {
    if (void 0 === n) {
      if (void 0 !== e) return [e];
    } else if (void 0 === e) return [n];
  } else {
    if (void 0 === n) return void 0 === e ? [t] : [t, e];
    if (void 0 === e) return [t, n];
  }
  return [n, e];
}
const ud = {
  ariaLabel: "arrow",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeMiterlimit: 1,
  strokeWidth: 1.5,
};
class fd extends fc {
  constructor(e, r = {}) {
    const {
      x1: o,
      y1: i,
      x2: a,
      y2: l,
      bend: s = 0,
      headAngle: c = 60,
      headLength: u = 8,
      inset: f = 0,
      insetStart: h = f,
      insetEnd: d = f,
      sweep: p,
    } = r;
    super(
      e,
      {
        x1: { value: o, scale: "x" },
        y1: { value: i, scale: "y" },
        x2: { value: a, scale: "x", optional: !0 },
        y2: { value: l, scale: "y", optional: !0 },
      },
      r,
      ud,
    ),
      (this.bend = !0 === s ? 22.5 : Math.max(-90, Math.min(90, s))),
      (this.headAngle = +c),
      (this.headLength = +u),
      (this.insetStart = +h),
      (this.insetEnd = +d),
      (this.sweep = (function (e = 1) {
        if ("number" == typeof e) return Eo(Math.sign(e));
        if ("function" == typeof e)
          return (t, n, r, o) => Math.sign(e(t, n, r, o));
        switch (Wo(e, "sweep", ["+x", "-x", "+y", "-y"])) {
          case "+x":
            return (n, e, r) => t(n, r);
          case "-x":
            return (t, e, r) => n(t, r);
          case "+y":
            return (n, e, r, o) => t(e, o);
          case "-y":
            return (t, e, r, o) => n(e, o);
        }
      })(p));
  }
  render(t, n, e, r, o) {
    const { x1: i, y1: a, x2: l = i, y2: s = a, SW: c } = e,
      {
        strokeWidth: u,
        bend: f,
        headAngle: h,
        headLength: d,
        insetStart: p,
        insetEnd: m,
      } = this,
      y = c ? (t) => c[t] : Eo(void 0 === u ? 1 : u),
      g = (h * Mc) / 2,
      v = d / 1.5;
    return El("svg:g", o)
      .call(ml, this, r, o)
      .call(xl, this, n)
      .call((n) =>
        n
          .selectAll()
          .data(t)
          .enter()
          .append("path")
          .call(yl, this)
          .attr("d", (t) => {
            let n = i[t],
              e = a[t],
              r = l[t],
              o = s[t];
            const c = Math.hypot(r - n, o - e);
            if (c <= p + m) return null;
            let u = Math.atan2(o - e, r - n);
            const h = Math.min(v * y(t), c / 3),
              d = this.sweep(n, e, r, o) * f * Mc,
              x = Math.hypot(c / Math.tan(d), c) / 2;
            if (p || m)
              if (x < 1e5) {
                const t = Math.sign(d),
                  [i, a] = (function ([t, n], [e, r], o, i) {
                    const a = e - t,
                      l = r - n,
                      s = Math.hypot(a, l),
                      c = (i * Math.sqrt(o * o - (s * s) / 4)) / s;
                    return [(t + e) / 2 - l * c, (n + r) / 2 + a * c];
                  })([n, e], [r, o], x, t);
                if (
                  (p && ([n, e] = hd([i, a, x], [n, e, p], -t * Math.sign(p))),
                  m)
                ) {
                  const [n, e] = hd([i, a, x], [r, o, m], t * Math.sign(m));
                  (u += Math.atan2(e - a, n - i) - Math.atan2(o - a, r - i)),
                    (r = n),
                    (o = e);
                }
              } else {
                const t = r - n,
                  i = o - e,
                  a = Math.hypot(t, i);
                p && ((n += (t / a) * p), (e += (i / a) * p)),
                  m && ((r -= (t / a) * m), (o -= (i / a) * m));
              }
            const w = u + d,
              b = w + g,
              k = w - g,
              $ = r - h * Math.cos(b),
              M = o - h * Math.sin(b),
              L = r - h * Math.cos(k),
              A = o - h * Math.sin(k);
            return `M${n},${e}${
              x < 1e5 ? `A${x},${x} 0,0,${d > 0 ? 1 : 0} ` : "L"
            }${r},${o}${h ? `M${$},${M}L${r},${o}L${L},${A}` : ""}`;
          })
          .call(ul, this, e),
      )
      .node();
  }
}
function hd([t, n, e], [r, o, i], a) {
  const l = r - t,
    s = o - n,
    c = Math.hypot(l, s),
    u = (l * l + s * s - i * i + e * e) / (2 * c),
    f = a * Math.sqrt(e * e - u * u);
  return [t + (l * u + s * f) / c, n + (s * u - l * f) / c];
}
function dd(t, { x: n, x1: e, x2: r, y: o, y1: i, y2: a, ...l } = {}) {
  return (
    ([e, r] = cd(n, e, r)),
    ([i, a] = cd(o, i, a)),
    new fd(t, { ...l, x1: e, x2: r, y1: i, y2: a })
  );
}
class pd extends fc {
  constructor(t, n, e = {}, r) {
    super(t, n, e, r);
    const {
      inset: o = 0,
      insetTop: i = o,
      insetRight: a = o,
      insetBottom: l = o,
      insetLeft: s = o,
      rx: c,
      ry: u,
    } = e;
    (this.insetTop = $o(i)),
      (this.insetRight = $o(a)),
      (this.insetBottom = $o(l)),
      (this.insetLeft = $o(s)),
      (this.rx = wl(c, "auto")),
      (this.ry = wl(u, "auto"));
  }
  render(t, n, e, r, o) {
    const { rx: i, ry: a } = this;
    return El("svg:g", o)
      .call(ml, this, r, o)
      .call(this._transform, this, n)
      .call((o) =>
        o
          .selectAll()
          .data(t)
          .enter()
          .append("rect")
          .call(yl, this)
          .attr("x", this._x(n, e, r))
          .attr("width", this._width(n, e, r))
          .attr("y", this._y(n, e, r))
          .attr("height", this._height(n, e, r))
          .call(vl, "rx", i)
          .call(vl, "ry", a)
          .call(ul, this, e),
      )
      .node();
  }
  _x(t, { x: n }, { marginLeft: e }) {
    const { insetLeft: r } = this;
    return n ? (t) => n[t] + r : e + r;
  }
  _y(t, { y: n }, { marginTop: e }) {
    const { insetTop: r } = this;
    return n ? (t) => n[t] + r : e + r;
  }
  _width({ x: t }, { x: n }, { marginRight: e, marginLeft: r, width: o }) {
    const { insetLeft: i, insetRight: a } = this,
      l = n && t ? t.bandwidth() : o - e - r;
    return Math.max(0, l - i - a);
  }
  _height({ y: t }, { y: n }, { marginTop: e, marginBottom: r, height: o }) {
    const { insetTop: i, insetBottom: a } = this,
      l = n && t ? t.bandwidth() : o - e - r;
    return Math.max(0, l - i - a);
  }
}
const md = { ariaLabel: "bar" };
class yd extends pd {
  constructor(t, n = {}) {
    const { x1: e, x2: r, y: o } = n;
    super(
      t,
      {
        x1: { value: e, scale: "x" },
        x2: { value: r, scale: "x" },
        y: { value: o, scale: "y", type: "band", optional: !0 },
      },
      n,
      md,
    );
  }
  _transform(t, n, { x: e }) {
    t.call(xl, n, { x: e }, 0, 0);
  }
  _x({ x: t }, { x1: n, x2: e }, { marginLeft: r }) {
    const { insetLeft: o } = this;
    return Ys(t) ? r + o : (t) => Math.min(n[t], e[t]) + o;
  }
  _width(
    { x: t },
    { x1: n, x2: e },
    { marginRight: r, marginLeft: o, width: i },
  ) {
    const { insetLeft: a, insetRight: l } = this;
    return Ys(t)
      ? i - r - o - a - l
      : (t) => Math.max(0, Math.abs(e[t] - n[t]) - a - l);
  }
}
class gd extends pd {
  constructor(t, n = {}) {
    const { x: e, y1: r, y2: o } = n;
    super(
      t,
      {
        y1: { value: r, scale: "y" },
        y2: { value: o, scale: "y" },
        x: { value: e, scale: "x", type: "band", optional: !0 },
      },
      n,
      md,
    );
  }
  _transform(t, n, { y: e }) {
    t.call(xl, n, { y: e }, 0, 0);
  }
  _y({ y: t }, { y1: n, y2: e }, { marginTop: r }) {
    const { insetTop: o } = this;
    return Ys(t) ? r + o : (t) => Math.min(n[t], e[t]) + o;
  }
  _height(
    { y: t },
    { y1: n, y2: e },
    { marginTop: r, marginBottom: o, height: i },
  ) {
    const { insetTop: a, insetBottom: l } = this;
    return Ys(t)
      ? i - r - o - a - l
      : (t) => Math.max(0, Math.abs(e[t] - n[t]) - a - l);
  }
}
function vd(t, n = {}) {
  return _o(n) || (n = { ...n, y: vo, x2: xo }), new yd(t, Dh(Vc(Ch(n))));
}
function xd(t, n = {}) {
  return _o(n) || (n = { ...n, x: vo, y2: xo }), new gd(t, qh(Yc(Th(n))));
}
const wd = { ariaLabel: "cell" };
class bd extends pd {
  constructor(t, { x: n, y: e, ...r } = {}) {
    super(
      t,
      {
        x: { value: n, scale: "x", type: "band", optional: !0 },
        y: { value: e, scale: "y", type: "band", optional: !0 },
      },
      r,
      wd,
    );
  }
  _transform(t, n) {
    t.call(xl, n, {}, 0, 0);
  }
}
function kd(t, { x: n, y: e, ...r } = {}) {
  return ([n, e] = Xo(n, e)), new bd(t, { ...r, x: n, y: e });
}
function $d(t, { x: n = vo, fill: e, stroke: r, ...o } = {}) {
  return (
    void 0 === e && void 0 === To(r)[0] && (e = xo),
    new bd(t, { ...o, x: n, fill: e, stroke: r })
  );
}
function Md(t, { y: n = vo, fill: e, stroke: r, ...o } = {}) {
  return (
    void 0 === e && void 0 === To(r)[0] && (e = xo),
    new bd(t, { ...o, y: n, fill: e, stroke: r })
  );
}
const Ld = {
  ariaLabel: "dot",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
};
function Ad(t) {
  return void 0 === t.sort && void 0 === t.reverse
    ? Qi({ channel: "-r" }, t)
    : t;
}
class Ed extends fc {
  constructor(t, n = {}) {
    const { x: e, y: r, r: o, rotate: i, symbol: a = B, frameAnchor: l } = n,
      [s, c] = Ro(i, 0),
      [u, f] = (function (t) {
        if (null == t || Di(t)) return [void 0, t];
        if ("string" == typeof t) {
          const n = Fi.get(`${t}`.toLowerCase());
          if (n) return [void 0, n];
        }
        return [t, void 0];
      })(a),
      [h, d] = Ro(o, null == u ? 3 : 4.5);
    super(
      t,
      {
        x: { value: e, scale: "x", optional: !0 },
        y: { value: r, scale: "y", optional: !0 },
        r: { value: h, scale: "r", filter: jr, optional: !0 },
        rotate: { value: s, optional: !0 },
        symbol: { value: u, scale: "auto", optional: !0 },
      },
      Ad(n),
      Ld,
    ),
      (this.r = d),
      (this.rotate = c),
      (this.symbol = f),
      (this.frameAnchor = Ai(l));
    const { channels: p } = this,
      { symbol: m } = p;
    if (m) {
      const { fill: t, stroke: n } = p;
      m.hint = {
        fill: t
          ? t.value === m.value
            ? "color"
            : "currentColor"
          : this.fill ?? "currentColor",
        stroke: n
          ? n.value === m.value
            ? "color"
            : "currentColor"
          : this.stroke ?? "none",
      };
    }
  }
  render(t, n, e, r, o) {
    const { x: i, y: a } = n,
      { x: l, y: s, r: c, rotate: u, symbol: f } = e,
      { r: h, rotate: d, symbol: p } = this,
      [m, y] = Ll(this, r),
      g = p === B,
      v = c ? void 0 : h * h * Math.PI;
    return (
      Br(h) && (t = []),
      El("svg:g", o)
        .call(ml, this, r, o)
        .call(xl, this, { x: l && i, y: s && a })
        .call((n) =>
          n
            .selectAll()
            .data(t)
            .enter()
            .append(g ? "circle" : "path")
            .call(yl, this)
            .call(
              g
                ? (t) => {
                    t.attr("cx", l ? (t) => l[t] : m)
                      .attr("cy", s ? (t) => s[t] : y)
                      .attr("r", c ? (t) => c[t] : h);
                  }
                : (t) => {
                    t.attr(
                      "transform",
                      tu`translate(${l ? (t) => l[t] : m},${
                        s ? (t) => s[t] : y
                      })${
                        u ? (t) => ` rotate(${u[t]})` : d ? ` rotate(${d})` : ""
                      }`,
                    ).attr(
                      "d",
                      c && f
                        ? (t) => {
                            const n = We();
                            return f[t].draw(n, c[t] * c[t] * Math.PI), n;
                          }
                        : c
                        ? (t) => {
                            const n = We();
                            return p.draw(n, c[t] * c[t] * Math.PI), n;
                          }
                        : f
                        ? (t) => {
                            const n = We();
                            return f[t].draw(n, v), n;
                          }
                        : (() => {
                            const t = We();
                            return p.draw(t, v), t;
                          })(),
                    );
                  },
            )
            .call(ul, this, e),
        )
        .node()
    );
  }
}
function zd(t, { x: n, y: e, ...r } = {}) {
  return (
    void 0 === r.frameAnchor && ([n, e] = Xo(n, e)),
    new Ed(t, { ...r, x: n, y: e })
  );
}
function Od(t, { x: n = xo, ...e } = {}) {
  return new Ed(t, Hc({ ...e, x: n }));
}
function Sd(t, { y: n = xo, ...e } = {}) {
  return new Ed(t, Uc({ ...e, y: n }));
}
function Nd(t, n) {
  return zd(t, { ...n, symbol: "circle" });
}
function Cd(t, n) {
  return zd(t, { ...n, symbol: "hexagon" });
}
const Td = {
  ariaLabel: "line",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 1,
};
class Rd extends fc {
  constructor(t, n = {}) {
    const { x: e, y: r, z: o, curve: i, tension: a } = n;
    super(
      t,
      {
        x: { value: e, scale: "x" },
        y: { value: r, scale: "y" },
        z: { value: Go(n), optional: !0 },
      },
      n,
      Td,
    ),
      (this.z = o),
      (this.curve = oh(i, a)),
      Lc(this, n);
  }
  filter(t) {
    return t;
  }
  project(t, n, e) {
    this.curve !== ih && super.project(t, n, e);
  }
  render(t, n, e, r, o) {
    const { x: i, y: a } = e,
      { curve: l } = this;
    return El("svg:g", o)
      .call(ml, this, r, o)
      .call(xl, this, n)
      .call((n) =>
        n
          .selectAll()
          .data(dl(t, [i, a], this, e))
          .enter()
          .append("path")
          .call(yl, this)
          .call(fl, this, e)
          .call(Rc, this, e, o)
          .attr(
            "d",
            l === ih && o.projection
              ? (function (t, n, e) {
                  const r = dt(t);
                  return (
                    (n = Oo(n)),
                    (e = Oo(e)),
                    (t) => {
                      let o = [];
                      const i = [o];
                      for (const r of t)
                        -1 === r ? ((o = []), i.push(o)) : o.push([n[r], e[r]]);
                      return r({ type: "MultiLineString", coordinates: i });
                    }
                  );
                })(o.projection, i, a)
              : pr()
                  .curve(l)
                  .defined((t) => t >= 0)
                  .x((t) => i[t])
                  .y((t) => a[t]),
          ),
      )
      .node();
  }
}
function Id(t, { x: n, y: e, ...r } = {}) {
  return ([n, e] = Xo(n, e)), new Rd(t, { ...r, x: n, y: e });
}
function Wd(t, { x: n = xo, y: e = vo, ...r } = {}) {
  return new Rd(t, fh({ ...r, x: n, y: e }));
}
function jd(t, { x: n = vo, y: e = xo, ...r } = {}) {
  return new Rd(t, uh({ ...r, x: n, y: e }));
}
const Bd = { ariaLabel: "rect" };
class Fd extends fc {
  constructor(t, n = {}) {
    const {
      x1: e,
      y1: r,
      x2: o,
      y2: i,
      inset: a = 0,
      insetTop: l = a,
      insetRight: s = a,
      insetBottom: c = a,
      insetLeft: u = a,
      rx: f,
      ry: h,
    } = n;
    super(
      t,
      {
        x1: {
          value: e,
          scale: "x",
          type: null != e && null == o ? "band" : void 0,
          optional: !0,
        },
        y1: {
          value: r,
          scale: "y",
          type: null != r && null == i ? "band" : void 0,
          optional: !0,
        },
        x2: { value: o, scale: "x", optional: !0 },
        y2: { value: i, scale: "y", optional: !0 },
      },
      n,
      Bd,
    ),
      (this.insetTop = $o(l)),
      (this.insetRight = $o(s)),
      (this.insetBottom = $o(c)),
      (this.insetLeft = $o(u)),
      (this.rx = wl(f, "auto")),
      (this.ry = wl(h, "auto"));
  }
  render(t, n, e, r, o) {
    const { x: i, y: a } = n,
      { x1: l, y1: s, x2: c, y2: u } = e,
      {
        marginTop: f,
        marginRight: h,
        marginBottom: d,
        marginLeft: p,
        width: m,
        height: y,
      } = r,
      { projection: g } = o,
      {
        insetTop: v,
        insetRight: x,
        insetBottom: w,
        insetLeft: b,
        rx: k,
        ry: $,
      } = this,
      M = (i?.bandwidth ? i.bandwidth() : 0) - b - x,
      L = (a?.bandwidth ? a.bandwidth() : 0) - v - w;
    return El("svg:g", o)
      .call(ml, this, r, o)
      .call(xl, this, {}, 0, 0)
      .call((n) =>
        n
          .selectAll()
          .data(t)
          .enter()
          .append("rect")
          .call(yl, this)
          .attr(
            "x",
            !l || (!g && Ys(i))
              ? p + b
              : c
              ? (t) => Math.min(l[t], c[t]) + b
              : (t) => l[t] + b,
          )
          .attr(
            "y",
            !s || (!g && Ys(a))
              ? f + v
              : u
              ? (t) => Math.min(s[t], u[t]) + v
              : (t) => s[t] + v,
          )
          .attr(
            "width",
            !l || (!g && Ys(i))
              ? m - h - p - x - b
              : c
              ? (t) => Math.max(0, Math.abs(c[t] - l[t]) + M)
              : M,
          )
          .attr(
            "height",
            !s || (!g && Ys(a))
              ? y - f - d - v - w
              : u
              ? (t) => Math.max(0, Math.abs(s[t] - u[t]) + L)
              : L,
          )
          .call(vl, "rx", k)
          .call(vl, "ry", $)
          .call(ul, this, e),
      )
      .node();
  }
}
function Dd(t, n) {
  return new Fd(t, _c(Pc(n)));
}
function qd(t, n = {}) {
  return (
    _o(n) || (n = { ...n, y: vo, x2: xo, interval: 1 }),
    new Fd(t, Dh(Pc(Ch(n))))
  );
}
function _d(t, n = {}) {
  return (
    _o(n) || (n = { ...n, x: vo, y2: xo, interval: 1 }),
    new Fd(t, qh(_c(Th(n))))
  );
}
function Pd(t, n) {
  n = (function ({
    x: t,
    y: n,
    color: e,
    size: r,
    fx: o,
    fy: i,
    mark: a,
  } = {}) {
    Yo(t) || (t = Hd(t));
    Yo(n) || (n = Hd(n));
    Yo(e) || (e = bi(e) ? { color: e } : Hd(e));
    Yo(r) || (r = Hd(r));
    Yo(o) && ({ value: o } = Hd(o));
    Yo(i) && ({ value: i } = Hd(i));
    null != a && (a = `${a}`.toLowerCase());
    return { x: t, y: n, color: e, size: r, fx: o, fy: i, mark: a };
  })(n);
  const { x: e, y: r, color: o, size: i } = n,
    a = Ud(t, e),
    l = Ud(t, r),
    s = Ud(t, o),
    c = Ud(t, i);
  let u,
    f,
    h,
    {
      fx: d,
      fy: p,
      x: { value: m, reduce: y, zero: g, ...v },
      y: { value: x, reduce: w, zero: b, ...k },
      color: { value: $, color: M, reduce: L },
      size: { value: A, reduce: E },
      mark: z,
    } = n;
  if (
    (void 0 === y &&
      (y = null == w && null == m && null == A && null != x ? "count" : null),
    void 0 === w &&
      (w = null == y && null == x && null == A && null != m ? "count" : null),
    void 0 !== E ||
      null != A ||
      null != L ||
      null != y ||
      null != w ||
      (null != m && !pi(a)) ||
      (null != x && !pi(l)) ||
      (E = "count"),
    void 0 === g && (g = !!Xd(y) || void 0),
    void 0 === b && (b = !!Xd(w) || void 0),
    null == m && null == x)
  )
    throw new Error("must specify x or y");
  if (null != y && null == x) throw new Error("reducing x requires y");
  if (null != w && null == m) throw new Error("reducing y requires x");
  switch (
    (void 0 === z &&
      (z =
        null != A || null != E
          ? "dot"
          : Xd(y) || Xd(w) || null != L
          ? "bar"
          : null != m && null != x
          ? pi(a) || pi(l) || (null == y && null == w && !Yd(a) && !Yd(l))
            ? "dot"
            : "line"
          : null != m || null != x
          ? "rule"
          : null),
    z)
  ) {
    case "dot":
      (h = zd), (f = "stroke");
      break;
    case "line":
      (h =
        (a && l) || null != y || null != w
          ? b || null != w || (a && Yd(a))
            ? jd
            : g || null != y || (l && Yd(l))
            ? Wd
            : Id
          : a
          ? Wd
          : jd),
        (f = "stroke"),
        Zd(s) && (u = null);
      break;
    case "area":
      (h = !b && null == w && (g || null != y || (l && Yd(l))) ? od : id),
        (f = "fill"),
        Zd(s) && (u = null);
      break;
    case "rule":
      (h = a ? Jc : Kc), (f = "stroke");
      break;
    case "bar":
      (h =
        null != y
          ? pi(l)
            ? Gd(y) && a && pi(a)
              ? kd
              : vd
            : qd
          : null != w
          ? pi(a)
            ? Gd(w) && l && pi(l)
              ? kd
              : xd
            : _d
          : null != L || null != E
          ? a && pi(a) && l && pi(l)
            ? kd
            : a && pi(a)
            ? xd
            : l && pi(l)
            ? vd
            : Dd
          : !a || !vi(a) || (l && vi(l))
          ? !l || !vi(l) || (a && vi(a))
            ? kd
            : xd
          : vd),
        (f = "fill");
      break;
    default:
      throw new Error(`invalid mark: ${z}`);
  }
  let O,
    S = {
      fx: d,
      fy: p,
      x: a ?? void 0,
      y: l ?? void 0,
      [f]: s ?? M,
      z: u,
      r: c ?? void 0,
      tip: !0,
    },
    N = { [f]: L ?? void 0, r: E ?? void 0 };
  if (null != y && null != w) throw new Error("cannot reduce both x and y");
  return (
    null != w
      ? ((N.y = w), (O = pi(a) ? oa : ah))
      : null != y
      ? ((N.x = y), (O = pi(l) ? ia : lh))
      : (null == L && null == E) ||
        (a && l
          ? (O = pi(a) && pi(l) ? aa : pi(a) ? lh : pi(l) ? ah : sh)
          : a
          ? (O = pi(a) ? oa : ah)
          : l && (O = pi(l) ? ia : lh)),
    (O !== sh && O !== ah) || (S.x = { value: a, ...v }),
    (O !== sh && O !== lh) || (S.y = { value: l, ...k }),
    void 0 === g &&
      (g =
        a &&
        !(O === sh || O === ah) &&
        (h === vd || h === od || h === qd || h === Kc)),
    void 0 === b &&
      (b =
        l &&
        !(O === sh || O === lh) &&
        (h === xd || h === id || h === _d || h === Jc)),
    {
      fx: d ?? null,
      fy: p ?? null,
      x: { value: m ?? null, reduce: y ?? null, zero: !!g, ...v },
      y: { value: x ?? null, reduce: w ?? null, zero: !!b, ...k },
      color: {
        value: $ ?? null,
        reduce: L ?? null,
        ...(void 0 !== M && { color: M }),
      },
      size: { value: A ?? null, reduce: E ?? null },
      mark: z,
      markImpl: Kd[h],
      markOptions: S,
      transformImpl: Kd[O],
      transformOptions: N,
      colorMode: f,
    }
  );
}
function Vd(t, n) {
  const e = Pd(t, n),
    {
      fx: r,
      fy: o,
      x: { zero: i },
      y: { zero: a },
      markOptions: l,
      transformOptions: s,
      colorMode: c,
    } = e,
    u = Jd[e.markImpl],
    f = Jd[e.transformImpl],
    h = null != r || null != o ? Af({ strokeOpacity: 0.1 }) : null,
    d = [i ? Jc([0]) : null, a ? Kc([0]) : null],
    p = u(t, f ? f(s, l) : l);
  return "stroke" === c ? hc(h, d, p) : hc(h, p, d);
}
function Yd(n) {
  let e, r;
  for (const o of n) {
    if (null == o) continue;
    if (void 0 === e) {
      e = o;
      continue;
    }
    const n = Math.sign(t(e, o));
    if (n) {
      if (void 0 !== r && n !== r) return !1;
      (e = o), (r = n);
    }
  }
  return !0;
}
function Ud(t, n) {
  const e = ho(t, n.value);
  return e && (e.label = oi(n.value)), e;
}
function Hd(t) {
  return (function (t) {
    if (null == t) return !1;
    if ("function" == typeof t.reduceIndex) return !0;
    if ("function" == typeof t.reduce && Po(t)) return !0;
    if (/^p\d{2}$/i.test(t)) return !0;
    switch (`${t}`.toLowerCase()) {
      case "first":
      case "last":
      case "count":
      case "distinct":
      case "sum":
      case "proportion":
      case "proportion-facet":
      case "deviation":
      case "min":
      case "min-index":
      case "max":
      case "max-index":
      case "mean":
      case "median":
      case "variance":
      case "mode":
        return !0;
    }
    return !1;
  })(t)
    ? { reduce: t }
    : { value: t };
}
function Xd(t) {
  return /^(?:distinct|count|sum|proportion)$/i.test(t);
}
function Gd(t) {
  return /^(?:first|last|mode)$/i.test(t);
}
function Zd(t) {
  return !!t && new nt(t).size > t.length >> 1;
}
const Jd = {
    dot: zd,
    line: Id,
    lineX: Wd,
    lineY: jd,
    areaX: od,
    areaY: id,
    ruleX: Jc,
    ruleY: Kc,
    barX: vd,
    barY: xd,
    rect: Dd,
    rectX: qd,
    rectY: _d,
    cell: kd,
    bin: sh,
    binX: ah,
    binY: lh,
    group: aa,
    groupX: oa,
    groupY: ia,
  },
  Kd = Object.fromEntries(Object.entries(Jd).map(([t, n]) => [n, t]));
function Qd(t, n = {}) {
  let { x: e, x1: r, x2: o } = n;
  void 0 === e && void 0 === r && void 0 === o && (n = { ...n, x: (e = xo) });
  const i = {};
  return (
    null != e && (i.x = t),
    null != r && (i.x1 = t),
    null != o && (i.x2 = t),
    np(i, n)
  );
}
function tp(t, n = {}) {
  let { y: e, y1: r, y2: o } = n;
  void 0 === e && void 0 === r && void 0 === o && (n = { ...n, y: (e = xo) });
  const i = {};
  return (
    null != e && (i.y = t),
    null != r && (i.y1 = t),
    null != o && (i.y2 = t),
    np(i, n)
  );
}
function np(t = {}, n = {}) {
  const e = Go(n),
    r = Object.entries(t).map(([t, e]) => {
      const r = ni(t, n);
      if (null == r) throw new Error(`missing channel: ${t}`);
      const [o, i] = ei(r);
      return { key: t, input: r, output: o, setOutput: i, map: ep(e) };
    });
  return {
    ...Pi(n, (t, n) => {
      const o = ho(t, e),
        i = r.map(({ input: n }) => ho(t, n)),
        a = r.map(({ setOutput: n }) => n(new Array(t.length)));
      for (const t of n)
        for (const n of o ? K(t, (t) => o[t]).values() : [t])
          r.forEach(({ map: t }, e) => t.mapIndex(n, i[e], a[e]));
      return { data: t, facets: n };
    }),
    ...Object.fromEntries(r.map(({ key: t, output: n }) => [t, n])),
  };
}
function ep(t) {
  if (null == t) throw new Error("missing map");
  if ("function" == typeof t.mapIndex) return t;
  if ("function" == typeof t.map && Po(t))
    return (function (t) {
      return (
        console.warn("deprecated map interface; implement mapIndex instead."),
        { mapIndex: t.map.bind(t) }
      );
    })(t);
  if ("function" == typeof t) return rp(Ko(t));
  switch (`${t}`.toLowerCase()) {
    case "cumsum":
      return op;
    case "rank":
      return rp((t, n) => mr(t, (t) => n[t]));
    case "quantile":
      return rp((t, n) =>
        (function (t, n) {
          const e = yr(t, n) - 1;
          return mr(t, n).map((t) => t / e);
        })(t, (t) => n[t]),
      );
  }
  throw new Error(`invalid map: ${t}`);
}
function rp(t) {
  return {
    mapIndex(n, e, r) {
      const o = t(n, e);
      if (o.length !== n.length)
        throw new Error("map function returned a mismatched length");
      for (let t = 0, e = n.length; t < e; ++t) r[n[t]] = o[t];
    },
  };
}
const op = {
  mapIndex(t, n, e) {
    let r = 0;
    for (const o of t) e[o] = r += n[o];
  },
};
function ip(t = {}, n) {
  return 1 === arguments.length && (n = t), Qd(lp(t), n);
}
function ap(t = {}, n) {
  return 1 === arguments.length && (n = t), tp(lp(t), n);
}
function lp(t = {}) {
  "number" == typeof t && (t = { k: t });
  let { k: n, reduce: e, shift: r, anchor: o, strict: i } = t;
  if (
    (void 0 === o &&
      void 0 !== r &&
      ((o = (function (t) {
        switch (`${t}`.toLowerCase()) {
          case "centered":
            return "middle";
          case "leading":
            return "start";
          case "trailing":
            return "end";
        }
        throw new Error(`invalid shift: ${t}`);
      })(r)),
      rl(
        `Warning: the shift option is deprecated; please use anchor "${o}" instead.`,
      )),
    !((n = Math.floor(n)) > 0))
  )
    throw new Error(`invalid k: ${n}`);
  return (function (t = "mean") {
    if ("string" == typeof t) {
      if (/^p\d{2}$/i.test(t)) return sp(zo(t));
      switch (t.toLowerCase()) {
        case "deviation":
          return sp(ut);
        case "max":
          return cp((t, n) => N(t, (t) => n[t]));
        case "mean":
          return fp;
        case "median":
          return sp(ot);
        case "min":
          return cp((t, n) => ct(t, (t) => n[t]));
        case "mode":
          return cp((t, n) => et(t, (t) => n[t]));
        case "sum":
          return up;
        case "variance":
          return sp(rt);
        case "difference":
          return yp;
        case "ratio":
          return gp;
        case "first":
          return vp;
        case "last":
          return xp;
      }
    }
    if ("function" != typeof t) throw new Error(`invalid reduce: ${t}`);
    return cp(Ko(t));
  })(e)(
    n,
    (function (t = "middle", n) {
      switch (`${t}`.toLowerCase()) {
        case "middle":
          return (n - 1) >> 1;
        case "start":
          return 0;
        case "end":
          return n - 1;
      }
      throw new Error(`invalid anchor: ${t}`);
    })(o, n),
    i,
  );
}
function sp(t) {
  return (n, e, r) =>
    r
      ? {
          mapIndex(r, o, i) {
            const a = (t) => (null == o[t] ? NaN : +o[t]);
            let l = 0;
            for (let t = 0; t < n - 1; ++t) isNaN(a(t)) && ++l;
            for (let o = 0, s = r.length - n + 1; o < s; ++o)
              isNaN(a(o + n - 1)) && ++l,
                (i[r[o + e]] = 0 === l ? t(Qo(r, o, o + n), a) : NaN),
                isNaN(a(o)) && --l;
          },
        }
      : {
          mapIndex(r, o, i) {
            const a = (t) => (null == o[t] ? NaN : +o[t]);
            for (let o = -e; o < 0; ++o) i[r[o + e]] = t(Qo(r, 0, o + n), a);
            for (let o = 0, l = r.length - e; o < l; ++o)
              i[r[o + e]] = t(Qo(r, o, o + n), a);
          },
        };
}
function cp(t) {
  return (n, e, r) =>
    r
      ? {
          mapIndex(r, o, i) {
            let a = 0;
            for (let t = 0; t < n - 1; ++t) a += Cr(o[r[t]]);
            for (let l = 0, s = r.length - n + 1; l < s; ++l)
              (a += Cr(o[r[l + n - 1]])),
                a === n && (i[r[l + e]] = t(Qo(r, l, l + n), o)),
                (a -= Cr(o[r[l]]));
          },
        }
      : {
          mapIndex(r, o, i) {
            for (let a = -e; a < 0; ++a) i[r[a + e]] = t(Qo(r, 0, a + n), o);
            for (let a = 0, l = r.length - e; a < l; ++a)
              i[r[a + e]] = t(Qo(r, a, a + n), o);
          },
        };
}
function up(t, n, e) {
  return e
    ? {
        mapIndex(e, r, o) {
          let i = 0,
            a = 0;
          for (let n = 0; n < t - 1; ++n) {
            const t = r[e[n]];
            null === t || isNaN(t) ? ++i : (a += +t);
          }
          for (let l = 0, s = e.length - t + 1; l < s; ++l) {
            const s = r[e[l]],
              c = r[e[l + t - 1]];
            null === c || isNaN(c) ? ++i : (a += +c),
              (o[e[l + n]] = 0 === i ? a : NaN),
              null === s || isNaN(s) ? --i : (a -= +s);
          }
        },
      }
    : {
        mapIndex(e, r, o) {
          let i = 0;
          const a = e.length;
          for (let o = 0, l = Math.min(a, t - n - 1); o < l; ++o)
            i += +r[e[o]] || 0;
          for (let l = -n, s = a - n; l < s; ++l)
            (i += +r[e[l + t - 1]] || 0),
              (o[e[l + n]] = i),
              (i -= +r[e[l]] || 0);
        },
      };
}
function fp(t, n, e) {
  if (e) {
    const r = up(t, n, e);
    return {
      mapIndex(e, o, i) {
        r.mapIndex(e, o, i);
        for (let r = 0, o = e.length - t + 1; r < o; ++r) i[e[r + n]] /= t;
      },
    };
  }
  return {
    mapIndex(e, r, o) {
      let i = 0,
        a = 0;
      const l = e.length;
      for (let o = 0, s = Math.min(l, t - n - 1); o < s; ++o) {
        let t = r[e[o]];
        null === t || isNaN((t = +t)) || ((i += t), ++a);
      }
      for (let s = -n, c = l - n; s < c; ++s) {
        let l = r[e[s + t - 1]],
          c = r[e[s]];
        null === l || isNaN((l = +l)) || ((i += l), ++a),
          (o[e[s + n]] = i / a),
          null === c || isNaN((c = +c)) || ((i -= c), --a);
      }
    },
  };
}
function hp(t, n, e, r) {
  for (let o = e + r; e < o; ++e) {
    const r = t[n[e]];
    if (Cr(r)) return r;
  }
}
function dp(t, n, e, r) {
  for (let o = e + r - 1; o >= e; --o) {
    const e = t[n[o]];
    if (Cr(e)) return e;
  }
}
function pp(t, n, e, r) {
  for (let o = e + r; e < o; ++e) {
    let r = t[n[e]];
    if (null !== r && !isNaN((r = +r))) return r;
  }
}
function mp(t, n, e, r) {
  for (let o = e + r - 1; o >= e; --o) {
    let e = t[n[o]];
    if (null !== e && !isNaN((e = +e))) return e;
  }
}
function yp(t, n, e) {
  return e
    ? {
        mapIndex(e, r, o) {
          for (let i = 0, a = e.length - t; i < a; ++i) {
            const a = r[e[i]],
              l = r[e[i + t - 1]];
            o[e[i + n]] = null === a || null === l ? NaN : l - a;
          }
        },
      }
    : {
        mapIndex(e, r, o) {
          for (let i = -n, a = e.length - t + n + 1; i < a; ++i)
            o[e[i + n]] = mp(r, e, i, t) - pp(r, e, i, t);
        },
      };
}
function gp(t, n, e) {
  return e
    ? {
        mapIndex(e, r, o) {
          for (let i = 0, a = e.length - t; i < a; ++i) {
            const a = r[e[i]],
              l = r[e[i + t - 1]];
            o[e[i + n]] = null === a || null === l ? NaN : l / a;
          }
        },
      }
    : {
        mapIndex(e, r, o) {
          for (let i = -n, a = e.length - t + n + 1; i < a; ++i)
            o[e[i + n]] = mp(r, e, i, t) / pp(r, e, i, t);
        },
      };
}
function vp(t, n, e) {
  return e
    ? {
        mapIndex(e, r, o) {
          for (let i = 0, a = e.length - t; i < a; ++i) o[e[i + n]] = r[e[i]];
        },
      }
    : {
        mapIndex(e, r, o) {
          for (let i = -n, a = e.length - t + n + 1; i < a; ++i)
            o[e[i + n]] = hp(r, e, i, t);
        },
      };
}
function xp(t, n, e) {
  return e
    ? {
        mapIndex(e, r, o) {
          for (let i = 0, a = e.length - t; i < a; ++i)
            o[e[i + n]] = r[e[i + t - 1]];
        },
      }
    : {
        mapIndex(e, r, o) {
          for (let i = -n, a = e.length - t + n + 1; i < a; ++i)
            o[e[i + n]] = dp(r, e, i, t);
        },
      };
}
const wp = {
  n: 20,
  k: 2,
  color: "currentColor",
  opacity: 0.2,
  strict: !0,
  anchor: "end",
};
function bp(
  t,
  {
    x: n = xo,
    y: e,
    k: r = wp.k,
    color: o = wp.color,
    opacity: i = wp.opacity,
    fill: a = o,
    fillOpacity: l = i,
    stroke: s = o,
    strokeOpacity: c,
    strokeWidth: u,
    ...f
  } = {},
) {
  return hc(
    $i(a)
      ? null
      : od(
          t,
          np(
            { x1: $p({ k: -r, ...f }), x2: $p({ k: r, ...f }) },
            { x1: n, x2: n, y: e, fill: a, fillOpacity: l, ...f },
          ),
        ),
    $i(s)
      ? null
      : Wd(
          t,
          np(
            { x: $p(f) },
            { x: n, y: e, stroke: s, strokeOpacity: c, strokeWidth: u, ...f },
          ),
        ),
  );
}
function kp(
  t,
  {
    x: n,
    y: e = xo,
    k: r = wp.k,
    color: o = wp.color,
    opacity: i = wp.opacity,
    fill: a = o,
    fillOpacity: l = i,
    stroke: s = o,
    strokeOpacity: c,
    strokeWidth: u,
    ...f
  } = {},
) {
  return hc(
    $i(a)
      ? null
      : id(
          t,
          np(
            { y1: $p({ k: -r, ...f }), y2: $p({ k: r, ...f }) },
            { x: n, y1: e, y2: e, fill: a, fillOpacity: l, ...f },
          ),
        ),
    $i(s)
      ? null
      : jd(
          t,
          np(
            { y: $p(f) },
            { x: n, y: e, stroke: s, strokeOpacity: c, strokeWidth: u, ...f },
          ),
        ),
  );
}
function $p({
  n: t = wp.n,
  k: n = 0,
  strict: e = wp.strict,
  anchor: r = wp.anchor,
} = {}) {
  return lp({
    k: t,
    reduce: (t) => at(t) + n * (ut(t) || 0),
    strict: e,
    anchor: r,
  });
}
const Mp = { ariaLabel: "tick", fill: null, stroke: "currentColor" };
class Lp extends fc {
  constructor(t, n, e) {
    super(t, n, e, Mp), Lc(this, e);
  }
  render(t, n, e, r, o) {
    return El("svg:g", o)
      .call(ml, this, r, o)
      .call(this._transform, this, n)
      .call((i) =>
        i
          .selectAll()
          .data(t)
          .enter()
          .append("line")
          .call(yl, this)
          .attr("x1", this._x1(n, e, r))
          .attr("x2", this._x2(n, e, r))
          .attr("y1", this._y1(n, e, r))
          .attr("y2", this._y2(n, e, r))
          .call(ul, this, e)
          .call(Tc, this, e, o),
      )
      .node();
  }
}
class Ap extends Lp {
  constructor(t, n = {}) {
    const { x: e, y: r, inset: o = 0, insetTop: i = o, insetBottom: a = o } = n;
    super(
      t,
      {
        x: { value: e, scale: "x" },
        y: { value: r, scale: "y", type: "band", optional: !0 },
      },
      n,
    ),
      (this.insetTop = $o(i)),
      (this.insetBottom = $o(a));
  }
  _transform(t, n, { x: e }) {
    t.call(xl, n, { x: e }, ol, 0);
  }
  _x1(t, { x: n }) {
    return (t) => n[t];
  }
  _x2(t, { x: n }) {
    return (t) => n[t];
  }
  _y1({ y: t }, { y: n }, { marginTop: e }) {
    const { insetTop: r } = this;
    return n && t ? (t) => n[t] + r : e + r;
  }
  _y2({ y: t }, { y: n }, { height: e, marginBottom: r }) {
    const { insetBottom: o } = this;
    return n && t ? (e) => n[e] + t.bandwidth() - o : e - r - o;
  }
}
class Ep extends Lp {
  constructor(t, n = {}) {
    const { x: e, y: r, inset: o = 0, insetRight: i = o, insetLeft: a = o } = n;
    super(
      t,
      {
        y: { value: r, scale: "y" },
        x: { value: e, scale: "x", type: "band", optional: !0 },
      },
      n,
    ),
      (this.insetRight = $o(i)),
      (this.insetLeft = $o(a));
  }
  _transform(t, n, { y: e }) {
    t.call(xl, n, { y: e }, 0, ol);
  }
  _x1({ x: t }, { x: n }, { marginLeft: e }) {
    const { insetLeft: r } = this;
    return n && t ? (t) => n[t] + r : e + r;
  }
  _x2({ x: t }, { x: n }, { width: e, marginRight: r }) {
    const { insetRight: o } = this;
    return n && t ? (e) => n[e] + t.bandwidth() - o : e - r - o;
  }
  _y1(t, { y: n }) {
    return (t) => n[t];
  }
  _y2(t, { y: n }) {
    return (t) => n[t];
  }
}
function zp(t, { x: n = xo, ...e } = {}) {
  return new Ap(t, { ...e, x: n });
}
function Op(t, { y: n = xo, ...e } = {}) {
  return new Ep(t, { ...e, y: n });
}
function Sp(
  t,
  {
    x: n = xo,
    y: e = null,
    fill: r = "#ccc",
    fillOpacity: o,
    stroke: i = "currentColor",
    strokeOpacity: a,
    strokeWidth: l = 2,
    sort: s,
    ...c
  } = {},
) {
  const u = null != e ? ia : ra;
  return hc(
    Kc(
      t,
      u({ x1: Tp, x2: Rp }, { x: n, y: e, stroke: i, strokeOpacity: a, ...c }),
    ),
    vd(
      t,
      u(
        { x1: "p25", x2: "p75" },
        { x: n, y: e, fill: r, fillOpacity: o, ...c },
      ),
    ),
    zp(
      t,
      u(
        { x: "p50" },
        {
          x: n,
          y: e,
          stroke: i,
          strokeOpacity: a,
          strokeWidth: l,
          sort: s,
          ...c,
        },
      ),
    ),
    zd(
      t,
      np({ x: Cp }, { x: n, y: e, z: e, stroke: i, strokeOpacity: a, ...c }),
    ),
  );
}
function Np(
  t,
  {
    y: n = xo,
    x: e = null,
    fill: r = "#ccc",
    fillOpacity: o,
    stroke: i = "currentColor",
    strokeOpacity: a,
    strokeWidth: l = 2,
    sort: s,
    ...c
  } = {},
) {
  const u = null != e ? oa : ra;
  return hc(
    Jc(
      t,
      u({ y1: Tp, y2: Rp }, { x: e, y: n, stroke: i, strokeOpacity: a, ...c }),
    ),
    xd(
      t,
      u(
        { y1: "p25", y2: "p75" },
        { x: e, y: n, fill: r, fillOpacity: o, ...c },
      ),
    ),
    Op(
      t,
      u(
        { y: "p50" },
        {
          x: e,
          y: n,
          stroke: i,
          strokeOpacity: a,
          strokeWidth: l,
          sort: s,
          ...c,
        },
      ),
    ),
    zd(
      t,
      np({ y: Cp }, { x: e, y: n, z: e, stroke: i, strokeOpacity: a, ...c }),
    ),
  );
}
function Cp(t) {
  const n = Tp(t),
    e = Rp(t);
  return t.map((t) => (t < n || t > e ? t : NaN));
}
function Tp(t) {
  const n = 2.5 * Ip(t) - 1.5 * Wp(t);
  return ct(t, (t) => (t >= n ? t : NaN));
}
function Rp(t) {
  const n = 2.5 * Wp(t) - 1.5 * Ip(t);
  return N(t, (t) => (t <= n ? t : NaN));
}
function Ip(t) {
  return W(t, 0.25);
}
function Wp(t) {
  return W(t, 0.75);
}
const jp = { ariaLabel: "raster", stroke: null, pixelSize: 1 };
function Bp(t, n) {
  const e = +t;
  if (isNaN(e)) throw new Error(`invalid ${n}: ${t}`);
  return e;
}
function Fp(t, n) {
  const e = Math.floor(t);
  if (isNaN(e)) throw new Error(`invalid ${n}: ${t}`);
  return e;
}
class Dp extends fc {
  constructor(t, n, e = {}, r) {
    let {
      width: o,
      height: i,
      x: a,
      y: l,
      x1: s = null == a ? 0 : void 0,
      y1: c = null == l ? 0 : void 0,
      x2: u = null == a ? o : void 0,
      y2: f = null == l ? i : void 0,
      pixelSize: h = r.pixelSize,
      blur: d = 0,
      interpolate: p,
    } = e;
    if (
      (null != o && (o = Fp(o, "width")),
      null != i && (i = Fp(i, "height")),
      null != s && (s = Bp(s, "x1")),
      null != c && (c = Bp(c, "y1")),
      null != u && (u = Bp(u, "x2")),
      null != f && (f = Bp(f, "y2")),
      null == a && (null == s || null == u))
    )
      throw new Error("missing x");
    if (null == l && (null == c || null == f)) throw new Error("missing y");
    null != t &&
      null != o &&
      null != i &&
      (void 0 === a &&
        null != s &&
        null != u &&
        (a = (function (t, n, e) {
          return {
            transform(r) {
              const o = r.length,
                i = new Float64Array(o),
                a = (n - t) / e,
                l = t + a / 2;
              for (let t = 0; t < o; ++t) i[t] = (t % e) * a + l;
              return i;
            },
          };
        })(s, u, o)),
      void 0 === l &&
        null != c &&
        null != f &&
        (l = (function (t, n, e, r) {
          return {
            transform(o) {
              const i = o.length,
                a = new Float64Array(i),
                l = (n - t) / r,
                s = t + l / 2;
              for (let t = 0; t < i; ++t)
                a[t] = (Math.floor(t / e) % r) * l + s;
              return a;
            },
          };
        })(c, f, o, i))),
      super(
        t,
        {
          x: { value: a, scale: "x", optional: !0 },
          y: { value: l, scale: "y", optional: !0 },
          x1: {
            value: null == s ? null : [s],
            scale: "x",
            optional: !0,
            filter: null,
          },
          y1: {
            value: null == c ? null : [c],
            scale: "y",
            optional: !0,
            filter: null,
          },
          x2: {
            value: null == u ? null : [u],
            scale: "x",
            optional: !0,
            filter: null,
          },
          y2: {
            value: null == f ? null : [f],
            scale: "y",
            optional: !0,
            filter: null,
          },
          ...n,
        },
        e,
        r,
      ),
      (this.width = o),
      (this.height = i),
      (this.pixelSize = Bp(h, "pixelSize")),
      (this.blur = Bp(d, "blur")),
      (this.interpolate =
        null == a || null == l
          ? null
          : (function (t) {
              if ("function" == typeof t) return t;
              if (null == t) return Hp;
              switch (`${t}`.toLowerCase()) {
                case "none":
                  return Hp;
                case "nearest":
                  return Jp;
                case "barycentric":
                  return Xp();
                case "random-walk":
                  return Kp();
              }
              throw new Error(`invalid interpolate: ${t}`);
            })(p));
  }
}
class qp extends Dp {
  constructor(t, n = {}) {
    const { imageRendering: e } = n;
    if (null == t) {
      const { fill: t, fillOpacity: e } = n;
      void 0 !== Ro(e)[0] && (n = Up("fillOpacity", n)),
        void 0 !== To(t)[0] && (n = Up("fill", n));
    }
    super(t, void 0, n, jp), (this.imageRendering = wl(e, "auto"));
  }
  scale(t, { color: n, ...e }, r) {
    return super.scale(t, e, r);
  }
  render(t, n, e, r, o) {
    const i = n[e.channels.fill?.scale] ?? ((t) => t),
      { x: a, y: l } = e,
      { document: s } = o,
      [c, u, f, h] = Vp(e, r, o),
      d = f - c,
      p = h - u,
      {
        pixelSize: m,
        width: y = Math.round(Math.abs(d) / m),
        height: g = Math.round(Math.abs(p) / m),
      } = this,
      v = y * g;
    let { fill: x, fillOpacity: w } = e,
      b = 0;
    if (this.interpolate) {
      const n = y / d,
        e = g / p,
        r = Bo(a, (t) => (t - c) * n, Float64Array),
        o = Bo(l, (t) => (t - u) * e, Float64Array);
      x && (x = this.interpolate(t, y, g, r, o, x)),
        w && (w = this.interpolate(t, y, g, r, o, w));
    } else null == this.data && t && (b = t.fi * v);
    const k = s.createElement("canvas");
    (k.width = y), (k.height = g);
    const $ = k.getContext("2d"),
      M = $.createImageData(y, g),
      L = M.data;
    let { r: A, g: E, b: z } = je(this.fill) ?? { r: 0, g: 0, b: 0 },
      O = 255 * (this.fillOpacity ?? 1);
    for (let t = 0; t < v; ++t) {
      const n = t << 2;
      if (x) {
        const e = i(x[t + b]);
        if (null == e) {
          L[n + 3] = 0;
          continue;
        }
        ({ r: A, g: E, b: z } = je(e));
      }
      w && (O = 255 * w[t + b]),
        (L[n + 0] = A),
        (L[n + 1] = E),
        (L[n + 2] = z),
        (L[n + 3] = O);
    }
    return (
      this.blur > 0 && gr(M, this.blur),
      $.putImageData(M, 0, 0),
      El("svg:g", o)
        .call(ml, this, r, o)
        .call(xl, this, n)
        .call((t) =>
          t
            .append("image")
            .attr(
              "transform",
              `translate(${c},${u}) scale(${Math.sign(f - c)},${Math.sign(
                h - u,
              )})`,
            )
            .attr("width", Math.abs(d))
            .attr("height", Math.abs(p))
            .attr("preserveAspectRatio", "none")
            .call(vl, "image-rendering", this.imageRendering)
            .call(yl, this)
            .attr("xlink:href", k.toDataURL()),
        )
        .node()
    );
  }
}
function _p(t, n, e) {
  arguments.length < 3 && ((e = n), (n = null));
  let { x: r, y: o, [t]: i, ...a } = e;
  return (
    void 0 === r &&
      void 0 === o &&
      (function (t) {
        if (!hi(t)) return !1;
        for (const n of t)
          if (null != n) return "object" == typeof n && "0" in n && "1" in n;
      })(n) &&
      ((r = Mo), (o = Lo), void 0 === i && (i = Ao)),
    [n, { ...a, x: r, y: o, [t]: i }]
  );
}
function Pp() {
  const [t, n] = _p("fill", ...arguments);
  return new qp(
    t,
    null == t || void 0 !== n.fill || void 0 !== n.fillOpacity
      ? n
      : { ...n, fill: xo },
  );
}
function Vp({ x1: t, y1: n, x2: e, y2: r }, o, { projection: i }) {
  const {
    width: a,
    height: l,
    marginTop: s,
    marginRight: c,
    marginBottom: u,
    marginLeft: f,
  } = o;
  return [
    t && null == i ? t[0] : f,
    n && null == i ? n[0] : s,
    e && null == i ? e[0] : a - c,
    r && null == i ? r[0] : l - u,
  ];
}
function Yp({ x1: t, y1: n, x2: e, y2: r }, o, i, a) {
  const l = {};
  return (
    t && (l.x1 = t),
    n && (l.y1 = n),
    e && (l.x2 = e),
    r && (l.y2 = r),
    Vp(ja(l, o), i, a)
  );
}
function Up(t, n = {}) {
  const { [t]: e } = n;
  if ("function" != typeof e) throw new Error(`invalid ${t}: not a function`);
  return Vi({ ...n, [t]: void 0 }, function (r, o, i, a, l, s) {
    const { x: c, y: u } = a;
    if (!c) throw new Error("missing scale: x");
    if (!u) throw new Error("missing scale: y");
    const [f, h, d, p] = Yp(i, a, l, s),
      m = d - f,
      y = p - h,
      { pixelSize: g } = this,
      {
        width: v = Math.round(Math.abs(m) / g),
        height: x = Math.round(Math.abs(y) / g),
      } = n,
      w = new Array(v * x * (o ? o.length : 1)),
      b = m / v,
      k = y / x;
    let $ = 0;
    for (const t of o ?? [void 0])
      for (let n = 0.5; n < x; ++n)
        for (let r = 0.5; r < v; ++r, ++$)
          w[$] = e(c.invert(f + r * b), u.invert(h + n * k), t);
    return {
      data: w,
      facets: o,
      channels: { [t]: { value: w, scale: "auto" } },
    };
  });
}
function Hp(t, n, e, r, o, i) {
  const a = new Array(n * e);
  for (const l of t)
    r[l] < 0 ||
      r[l] >= n ||
      o[l] < 0 ||
      o[l] >= e ||
      (a[Math.floor(o[l]) * n + Math.floor(r[l])] = i[l]);
  return a;
}
function Xp({ random: t = Z(42) } = {}) {
  return (n, e, r, o, i, a) => {
    const {
        points: l,
        triangles: s,
        hull: c,
      } = vr.from(
        n,
        (t) => o[t],
        (t) => i[t],
      ),
      u = new a.constructor(e * r).fill(NaN),
      f = new Uint8Array(e * r),
      h = (function (t, n) {
        return vi(t) || mi(t)
          ? Qp
          : (function (t) {
              return (n, e, r, o, i, a, l, s) => {
                const c = t(l, s);
                return c < e ? n : c < e + o ? r : i;
              };
            })(n);
      })(a, t);
    for (let t = 0; t < s.length; t += 3) {
      const o = s[t],
        i = s[t + 1],
        c = s[t + 2],
        d = l[2 * o],
        p = l[2 * i],
        m = l[2 * c],
        y = l[2 * o + 1],
        g = l[2 * i + 1],
        v = l[2 * c + 1],
        x = Math.min(d, p, m),
        w = Math.max(d, p, m),
        b = Math.min(y, g, v),
        k = Math.max(y, g, v),
        $ = (g - v) * (d - m) + (y - v) * (m - p);
      if (!$) continue;
      const M = a[n[o]],
        L = a[n[i]],
        A = a[n[c]];
      for (let t = Math.floor(x); t < w; ++t)
        for (let n = Math.floor(b); n < k; ++n) {
          if (t < 0 || t >= e || n < 0 || n >= r) continue;
          const o = t + 0.5,
            i = n + 0.5,
            a = ((g - v) * (o - m) + (i - v) * (m - p)) / $;
          if (a < 0) continue;
          const l = ((v - y) * (o - m) + (i - v) * (d - m)) / $;
          if (l < 0) continue;
          const s = 1 - a - l;
          if (s < 0) continue;
          const c = t + e * n;
          (u[c] = h(M, a, L, l, A, s, t, n)), (f[c] = 1);
        }
    }
    return (
      (function (t, n, e, r, o, i, a, l, s, c) {
        (e = Float64Array.from(l, (t) => e[s[t]])),
          (r = Float64Array.from(l, (t) => r[s[t]])),
          (o = Array.from(l, (t) => o[s[t]]));
        const u = e.length,
          f = Array.from({ length: u }, (t, n) =>
            (function (t, n, e) {
              const r = n.length,
                o = n.at(t - 2),
                i = e.at(t - 2),
                a = n.at(t - 1),
                l = e.at(t - 1),
                s = n[t],
                c = e[t],
                u = n.at(t + 1 - r),
                f = e.at(t + 1 - r),
                h = a - s,
                d = l - c,
                p = o - a,
                m = i - l,
                y = s - u,
                g = c - f,
                v = Math.hypot(h, d),
                x = Math.hypot(p, m),
                w = Math.hypot(y, g);
              return (t, n) => {
                const e = t - a,
                  r = n - l,
                  o = t - s,
                  i = n - c;
                return (
                  Zp(e, r, o, i) > -1e-6 &&
                  Zp(e, r, h, d) * x - Zp(e, r, p, m) * v > -1e-6 &&
                  Zp(o, i, y, g) * v - Zp(o, i, h, d) * w <= 0
                );
              };
            })(n, e, r),
          );
        let h = 0;
        for (let l = 0; l < a; ++l) {
          const a = l + 0.5;
          for (let s = 0; s < i; ++s) {
            const d = s + i * l;
            if (!n[d]) {
              const n = s + 0.5;
              for (let i = 0; i < u; ++i) {
                const p = (u + h + (i % 2 ? (i + 1) / 2 : -i / 2)) % u;
                if (f[p](n, a)) {
                  const i = Gp(e.at(p - 1), r.at(p - 1), e[p], r[p], n, a);
                  (t[d] = c(o.at(p - 1), i, o[p], 1 - i, o[p], 0, s, l)),
                    (h = p);
                  break;
                }
              }
            }
          }
        }
      })(u, f, o, i, a, e, r, c, n, h),
      u
    );
  };
}
function Gp(t, n, e, r, o, i) {
  const a = e - t,
    l = r - n,
    s = a * (e - o) + l * (r - i),
    c = a * (o - t) + l * (i - n);
  return s > 0 && c > 0 ? s / (s + c) : +(s > c);
}
function Zp(t, n, e, r) {
  return t * r - e * n;
}
function Jp(t, n, e, r, o, i) {
  const a = new i.constructor(n * e),
    l = vr.from(
      t,
      (t) => r[t],
      (t) => o[t],
    );
  let s, c;
  for (let r = 0.5, o = 0; r < e; ++r) {
    c = s;
    for (let e = 0.5; e < n; ++e, ++o)
      (c = l.find(e, r, c)), 0.5 === e && (s = c), (a[o] = i[t[c]]);
  }
  return a;
}
function Kp({ random: t = Z(42), minDistance: n = 0.5, maxSteps: e = 2 } = {}) {
  return (r, o, i, a, l, s) => {
    const c = new s.constructor(o * i),
      u = vr.from(
        r,
        (t) => a[t],
        (t) => l[t],
      );
    let f, h, d;
    for (let p = 0.5, m = 0; p < i; ++p) {
      h = f;
      for (let i = 0.5; i < o; ++i, ++m) {
        let o,
          y = i,
          g = p;
        (d = h = u.find(y, g, h)), 0.5 === i && (f = h);
        let v = 0;
        for (; (o = Math.hypot(a[r[d]] - y, l[r[d]] - g)) > n && v < e; ) {
          const n = 2 * t(i, p, v) * Math.PI;
          (y += Math.cos(n) * o),
            (g += Math.sin(n) * o),
            (d = u.find(y, g, d)),
            ++v;
        }
        c[m] = s[r[d]];
      }
    }
    return c;
  };
}
function Qp(t, n, e, r, o, i) {
  return n * t + r * e + i * o;
}
const tm = {
  ariaLabel: "contour",
  fill: "none",
  stroke: "currentColor",
  strokeMiterlimit: 1,
  pixelSize: 2,
};
class nm extends Dp {
  constructor(t, { smooth: n = !0, value: e, ...r } = {}) {
    const o = ll({}, r, tm);
    if (void 0 === e)
      for (const t in o)
        if (null != o[t].value) {
          if (void 0 !== e) throw new Error("ambiguous contour value");
          (e = r[t]), (r[t] = "value");
        }
    if (null != e) {
      const t = { transform: (t) => t.map((t) => t.value), label: oi(e) };
      for (const n in o) "value" === r[n] && (r[n] = t);
    }
    if (null == t) {
      if (null == e) throw new Error("missing contour value");
      (r = Up("value", { value: e, ...r })), (e = null);
    } else {
      let { interpolate: t } = r;
      void 0 === e && (e = xo), void 0 === t && (r.interpolate = "nearest");
    }
    super(
      t,
      { value: { value: e, optional: !0 } },
      (function ({ thresholds: t, interval: n, ...e }) {
        return (
          (t = yh(t, n, or)),
          Vi(e, function (n, e, r, o, i, a) {
            const [l, s, c, u] = Yp(r, o, i, a),
              f = c - l,
              h = u - s,
              {
                pixelSize: d,
                width: p = Math.round(Math.abs(f) / d),
                height: m = Math.round(Math.abs(h) / d),
              } = this,
              y = p / f,
              g = m / h,
              v = r.value.value,
              x = [];
            if (this.interpolate) {
              const { x: t, y: n } = Fl(r, o, a),
                i = Bo(t, (t) => (t - l) * y, Float64Array),
                c = Bo(n, (t) => (t - s) * g, Float64Array),
                u = [r.x, r.y, r.value],
                f = [i, c, v];
              for (const t of e) {
                const n = this.filter(t, u, f);
                x.push(this.interpolate(n, p, m, i, c, v));
              }
            } else if (e) {
              const t = p * m,
                n = e.length;
              for (let e = 0; e < n; ++e) x.push(v.slice(e * t, e * t + t));
            } else x.push(v);
            if (this.blur > 0)
              for (const t of x)
                xr({ data: t, width: p, height: m }, this.blur);
            const w = (function (t, n, e, r) {
              if ("function" == typeof t?.range) return t.range(t.floor(e), r);
              "function" == typeof t && (t = t(n, e, r));
              if ("number" != typeof t) return jo(t);
              const o = se(...br(e, r, t), t);
              for (; o[o.length - 1] >= r; ) o.pop();
              for (; o[1] < e; ) o.shift();
              return o;
            })(
              t,
              v,
              ...(function (t) {
                return [ct(t, (t) => ct(t, rm)), N(t, (t) => N(t, rm))];
              })(x),
            );
            if (null === w) throw new Error(`unsupported thresholds: ${t}`);
            const { contour: b } = wr().size([p, m]).smooth(this.smooth),
              k = [],
              $ = [];
            for (const t of x)
              $.push(I(k.length, k.push(...Bo(w, (n) => b(t, n)))));
            for (const { coordinates: t } of k)
              for (const n of t)
                for (const t of n)
                  for (const n of t)
                    (n[0] = n[0] / y + l), (n[1] = n[1] / g + s);
            return {
              data: k,
              facets: $,
              channels: Wa(this.contourChannels, k),
            };
          })
        );
      })(r),
      tm,
    );
    const i = { geometry: { value: xo } };
    for (const t in this.channels) {
      const n = this.channels[t],
        { scale: e } = n;
      "x" !== e &&
        "y" !== e &&
        "value" !== t &&
        ((i[t] = n), delete this.channels[t]);
    }
    (this.contourChannels = i), (this.smooth = !!n);
  }
  filter(t, { x: n, y: e, value: r, ...o }, i) {
    return super.filter(t, o, i);
  }
  render(t, n, e, r, o) {
    const { geometry: i } = e,
      a = dt();
    return El("svg:g", o)
      .call(ml, this, r, o)
      .call(xl, this, n)
      .call((n) => {
        n.selectAll()
          .data(t)
          .enter()
          .append("path")
          .call(yl, this)
          .attr("d", (t) => a(i[t]))
          .call(ul, this, e);
      })
      .node();
  }
}
function em() {
  return new nm(..._p("value", ...arguments));
}
function rm(t) {
  return isFinite(t) ? t : NaN;
}
function om(t, n) {
  return lm(vc, t, n);
}
function im(t, n = {}) {
  return lm(xc, t, n);
}
function am(t, n = {}) {
  return lm(wc, t, n);
}
function lm(t, n, e = {}) {
  const { x: r, y: o, maxRadius: i } = e,
    a = t({ px: r, py: o, maxRadius: i }),
    l = [];
  null != r && l.push(Jc(n, um("x", { ...a, inset: -6 }, e))),
    null != o && l.push(Kc(n, um("y", { ...a, inset: -6 }, e))),
    null != r &&
      l.push(
        au(
          n,
          fm("x", { ...a, dy: 9, frameAnchor: "bottom", lineAnchor: "top" }, e),
        ),
      ),
    null != o &&
      l.push(
        au(
          n,
          fm("y", { ...a, dx: -9, frameAnchor: "left", textAnchor: "end" }, e),
        ),
      );
  for (const t of l) t.ariaLabel = `crosshair ${t.ariaLabel}`;
  return hc(...l);
}
function sm(
  t,
  { channels: n, ...e },
  {
    facet: r,
    facetAnchor: o,
    fx: i,
    fy: a,
    [t]: l,
    channels: s,
    transform: c,
    initializer: u,
  },
) {
  return {
    ...e,
    facet: r,
    facetAnchor: o,
    fx: i,
    fy: a,
    [t]: l,
    channels: { ...n, ...s },
    transform: c,
    initializer: cm(t, u),
  };
}
function cm(t, n) {
  return null == n
    ? n
    : function (e, r, { x: o, y: i, px: a, py: l, ...s }, ...c) {
        const { channels: { x: u, y: f, ...h } = {}, ...d } = n.call(
          this,
          e,
          r,
          { ...s, x: a, y: l },
          ...c,
        );
        return {
          channels: {
            ...h,
            ...(u && { px: u, ...("x" === t && { x: u }) }),
            ...(f && { py: f, ...("y" === t && { y: f }) }),
          },
          ...d,
        };
      };
}
function um(t, n, e) {
  const {
    color: r = "currentColor",
    opacity: o = 0.2,
    ruleStroke: i = r,
    ruleStrokeOpacity: a = o,
    ruleStrokeWidth: l,
  } = e;
  return { ...sm(t, n, e), stroke: i, strokeOpacity: a, strokeWidth: l };
}
function fm(t, n, e) {
  const {
    color: r = "currentColor",
    textFill: o = r,
    textFillOpacity: i,
    textStroke: a = "var(--plot-background)",
    textStrokeOpacity: l,
    textStrokeWidth: s = 5,
  } = e;
  return {
    ...sm(t, n, hm(t, e)),
    fill: o,
    fillOpacity: i,
    stroke: a,
    strokeOpacity: l,
    strokeWidth: s,
  };
}
function hm(t, n) {
  return Vi(n, (n, e, r) => ({
    channels: { text: { value: Ua(r, t)?.value } },
  }));
}
const dm = {
    ariaLabel: "delaunay link",
    fill: "none",
    stroke: "currentColor",
    strokeMiterlimit: 1,
  },
  pm = {
    ariaLabel: "delaunay mesh",
    fill: null,
    stroke: "currentColor",
    strokeOpacity: 0.2,
  },
  mm = {
    ariaLabel: "hull",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeMiterlimit: 1,
  },
  ym = {
    ariaLabel: "voronoi",
    fill: "none",
    stroke: "currentColor",
    strokeMiterlimit: 1,
  },
  gm = {
    ariaLabel: "voronoi mesh",
    fill: null,
    stroke: "currentColor",
    strokeOpacity: 0.2,
  };
class vm extends fc {
  constructor(t, n = {}) {
    const { x: e, y: r, z: o, curve: i, tension: a } = n;
    super(
      t,
      {
        x: { value: e, scale: "x", optional: !0 },
        y: { value: r, scale: "y", optional: !0 },
        z: { value: o, optional: !0 },
      },
      n,
      dm,
    ),
      (this.curve = rh(i, a)),
      Lc(this, n);
  }
  render(t, n, e, r, o) {
    const { x: i, y: a } = n,
      { x: l, y: s, z: c } = e,
      { curve: u } = this,
      [f, h] = Ll(this, r),
      d = l ? (t) => l[t] : Eo(f),
      p = s ? (t) => s[t] : Eo(h),
      m = this;
    function y(t) {
      let n = -1;
      const r = [],
        i = {};
      for (const t in e) i[t] = [];
      const a = [],
        l = [],
        s = [],
        c = [];
      function f(o, u) {
        (o = t[o]),
          (u = t[u]),
          r.push(++n),
          (a[n] = d(o)),
          (s[n] = p(o)),
          (l[n] = d(u)),
          (c[n] = p(u));
        for (const t in e) i[t].push(e[t][u]);
      }
      const { halfedges: h, hull: y, triangles: g } = vr.from(t, d, p);
      for (let t = 0; t < h.length; ++t) {
        const n = h[t];
        n > t && f(g[t], g[n]);
      }
      for (let t = 0; t < y.length; ++t) f(y[t], y[(t + 1) % y.length]);
      pt(this)
        .selectAll()
        .data(r)
        .enter()
        .append("path")
        .call(yl, m)
        .attr("d", (t) => {
          const n = We(),
            e = u(n);
          return (
            e.lineStart(),
            e.point(a[t], s[t]),
            e.point(l[t], c[t]),
            e.lineEnd(),
            n
          );
        })
        .call(ul, m, i)
        .call(Tc, m, i, o);
    }
    return El("svg:g", o)
      .call(ml, this, r, o)
      .call(xl, this, { x: l && i, y: s && a })
      .call(
        c
          ? (n) =>
              n
                .selectAll()
                .data(K(t, (t) => c[t]).values())
                .enter()
                .append("g")
                .each(y)
          : (n) => n.datum(t).each(y),
      )
      .node();
  }
}
class xm extends fc {
  constructor(t, n = {}, e, r = ({ z: t }) => t) {
    const { x: o, y: i } = n;
    super(
      t,
      {
        x: { value: o, scale: "x", optional: !0 },
        y: { value: i, scale: "y", optional: !0 },
        z: { value: r(n), optional: !0 },
      },
      n,
      e,
    );
  }
  render(t, n, e, r, o) {
    const { x: i, y: a } = n,
      { x: l, y: s, z: c } = e,
      [u, f] = Ll(this, r),
      h = l ? (t) => l[t] : Eo(u),
      d = s ? (t) => s[t] : Eo(f),
      p = this;
    function m(t) {
      const n = vr.from(t, h, d);
      pt(this)
        .append("path")
        .datum(t[0])
        .call(yl, p)
        .attr("d", p._render(n, r))
        .call(ul, p, e);
    }
    return El("svg:g", o)
      .call(ml, this, r, o)
      .call(xl, this, { x: l && i, y: s && a })
      .call(
        c
          ? (n) =>
              n
                .selectAll()
                .data(K(t, (t) => c[t]).values())
                .enter()
                .append("g")
                .each(m)
          : (n) => n.datum(t).each(m),
      )
      .node();
  }
}
class wm extends xm {
  constructor(t, n = {}) {
    super(t, n, pm), (this.fill = "none");
  }
  _render(t) {
    return t.render();
  }
}
class bm extends xm {
  constructor(t, n = {}) {
    super(t, n, mm, Go);
  }
  _render(t) {
    return t.renderHull();
  }
}
class km extends fc {
  constructor(t, n = {}) {
    const { x: e, y: r, z: o } = n;
    super(
      t,
      {
        x: { value: e, scale: "x", optional: !0 },
        y: { value: r, scale: "y", optional: !0 },
        z: { value: o, optional: !0 },
      },
      n,
      ym,
    );
  }
  render(t, n, e, r, o) {
    const { x: i, y: a } = n,
      { x: l, y: s, z: c } = e,
      [u, f] = Ll(this, r),
      h = l ? (t) => l[t] : Eo(u),
      d = s ? (t) => s[t] : Eo(f),
      p = this;
    function m(t) {
      const n = Mm(vr.from(t, h, d), r);
      pt(this)
        .selectAll()
        .data(t)
        .enter()
        .append("path")
        .call(yl, p)
        .attr("d", (t, e) => n.renderCell(e))
        .call(ul, p, e);
    }
    return El("svg:g", o)
      .call(ml, this, r, o)
      .call(xl, this, { x: l && i, y: s && a })
      .call(
        c
          ? (n) =>
              n
                .selectAll()
                .data(K(t, (t) => c[t]).values())
                .enter()
                .append("g")
                .each(m)
          : (n) => n.datum(t).each(m),
      )
      .node();
  }
}
class $m extends xm {
  constructor(t, n) {
    super(t, n, gm), (this.fill = "none");
  }
  _render(t, n) {
    return Mm(t, n).render();
  }
}
function Mm(t, n) {
  const {
    width: e,
    height: r,
    marginTop: o,
    marginRight: i,
    marginBottom: a,
    marginLeft: l,
  } = n;
  return t.voronoi([l, o, e - i, r - a]);
}
function Lm(t, n, { x: e, y: r, ...o } = {}) {
  return ([e, r] = Xo(e, r)), new t(n, { ...o, x: e, y: r });
}
function Am(t, n) {
  return Lm(vm, t, n);
}
function Em(t, n) {
  return Lm(wm, t, n);
}
function zm(t, n) {
  return Lm(bm, t, n);
}
function Om(t, n) {
  return Lm(km, t, n);
}
function Sm(t, n) {
  return Lm($m, t, n);
}
const Nm = {
  ariaLabel: "density",
  fill: "none",
  stroke: "currentColor",
  strokeMiterlimit: 1,
};
class Cm extends fc {
  constructor(
    t,
    { x: n, y: e, z: r, weight: o, fill: i, stroke: a, ...l } = {},
  ) {
    const s = Im(i) && ((i = "currentColor"), !0),
      c = Im(a) && ((a = "currentColor"), !0);
    super(
      t,
      {
        x: { value: n, scale: "x", optional: !0 },
        y: { value: e, scale: "y", optional: !0 },
        z: { value: Go({ z: r, fill: i, stroke: a }), optional: !0 },
        weight: { value: o, optional: !0 },
      },
      (function (t, n, e) {
        const r = 100;
        let { bandwidth: o, thresholds: i } = t;
        return (
          (o = void 0 === o ? 20 : +o),
          (i =
            void 0 === i
              ? 20
              : "function" == typeof i?.[Symbol.iterator]
              ? Oo(i)
              : +i),
          Vi(t, function (t, a, l, s, c, u) {
            const f = l.weight ? Oo(l.weight.value) : null,
              h = l.z?.value,
              { z: d } = this,
              [p, m] = Ll(this, c),
              { width: y, height: g } = c,
              { x: v, y: x } = Fl(l, s, u),
              w = Object.fromEntries(
                Object.entries(l)
                  .filter(([t]) => !Rm.has(t))
                  .map(([t, n]) => [t, { ...n, value: [] }]),
              ),
              b = n && [],
              k = e && [],
              $ = kr()
                .x(v ? (t) => v[t] : p)
                .y(x ? (t) => x[t] : m)
                .weight(f ? (t) => f[t] : 1)
                .size([y, g])
                .bandwidth(o),
              M = [];
            for (const t of a) {
              const n = [];
              M.push(n);
              for (const e of h ? hl(t, h, d) : [t]) {
                const t = $.contours(e);
                n.push([e, t]);
              }
            }
            let L = i;
            if (!(L instanceof co)) {
              let t = 0;
              for (const n of M)
                for (const [, e] of n) {
                  const n = e.max;
                  n > t && (t = n);
                }
              L = Float64Array.from(
                { length: i - 1 },
                (n, e) => (t * r * (e + 1)) / i,
              );
            }
            const A = [],
              E = [];
            for (const t of M) {
              const n = [];
              A.push(n);
              for (const [e, o] of t)
                for (const t of L) {
                  n.push(E.length),
                    E.push(o(t / r)),
                    b && b.push(t),
                    k && k.push(t);
                  for (const t in w) w[t].value.push(l[t].value[e[0]]);
                }
            }
            return (
              b && b.push(0),
              k && k.push(0),
              {
                data: t,
                facets: A,
                channels: {
                  ...w,
                  ...(b && { fill: { value: b, scale: "color" } }),
                  ...(k && { stroke: { value: k, scale: "color" } }),
                  contours: { value: E },
                },
              }
            );
          })
        );
      })({ ...l, fill: i, stroke: a }, s, c),
      Nm,
    ),
      s && (this.fill = void 0),
      c && (this.stroke = void 0),
      (this.z = r);
  }
  filter(t) {
    return t;
  }
  render(t, n, e, r, o) {
    const { contours: i } = e,
      a = dt();
    return El("svg:g", o)
      .call(ml, this, r, o)
      .call(xl, this, {})
      .call((n) =>
        n
          .selectAll()
          .data(t)
          .enter()
          .append("path")
          .call(yl, this)
          .call(ul, this, e)
          .attr("d", (t) => a(i[t])),
      )
      .node();
  }
}
function Tm(t, { x: n, y: e, ...r } = {}) {
  return ([n, e] = Xo(n, e)), new Cm(t, { ...r, x: n, y: e });
}
const Rm = new Set(["x", "y", "z", "weight"]);
function Im(t) {
  return /^density$/i.test(t);
}
function Wm(
  t,
  {
    x1: n,
    x2: e,
    y1: r,
    y2: o,
    x: i = void 0 === n && void 0 === e ? vo : void 0,
    y: a = void 0 === r && void 0 === o ? xo : void 0,
    fill: l,
    positiveFill: s = "#3ca951",
    negativeFill: c = "#4269d0",
    fillOpacity: u = 1,
    positiveFillOpacity: f = u,
    negativeFillOpacity: h = u,
    stroke: d,
    strokeOpacity: p,
    z: m = To(d)[0],
    clip: y,
    tip: g,
    render: v,
    ...x
  } = {},
) {
  return (
    ([n, e] = jm(i, n, e)),
    ([r, o] = jm(a, r, o)),
    n === e && r === o && (r = Bm(0)),
    ({ tip: g } = mc({ tip: g }, "x")),
    hc(
      $i(s)
        ? null
        : Object.assign(
            rd(t, {
              x1: n,
              x2: e,
              y1: r,
              y2: o,
              z: m,
              fill: s,
              fillOpacity: f,
              render: dc(v, Fm(!0)),
              clip: y,
              ...x,
            }),
            { ariaLabel: "positive difference" },
          ),
      $i(c)
        ? null
        : Object.assign(
            rd(t, {
              x1: n,
              x2: e,
              y1: r,
              y2: o,
              z: m,
              fill: c,
              fillOpacity: h,
              render: dc(v, Fm(!1)),
              clip: y,
              ...x,
            }),
            { ariaLabel: "negative difference" },
          ),
      Id(t, {
        x: e,
        y: o,
        z: m,
        stroke: d,
        strokeOpacity: p,
        tip: g,
        clip: !0,
        ...x,
      }),
    )
  );
}
function jm(t, n, e) {
  return (
    void 0 === n && void 0 === e
      ? (n = e = Bm(t))
      : void 0 === n
      ? ((e = Bm(e)), (n = void 0 === t ? e : Bm(t)))
      : void 0 === e
      ? ((n = Bm(n)), (e = void 0 === t ? n : Bm(t)))
      : ((n = Bm(n)), (e = Bm(e))),
    [n, e]
  );
}
function Bm(t) {
  let n;
  const { value: e, label: r = oi(e) } = fi(t);
  return { transform: (t) => n || (n = ho(t, e)), label: r };
}
function Fm(t) {
  return (n, e, r, o, i, a) => {
    const { x1: l, x2: s } = r,
      { height: c } = o,
      u = new Float32Array(l.length),
      f = new Float32Array(s.length);
    (t === Ss(e.y) < 0 ? u : f).fill(c);
    const h = a(n, e, { ...r, x2: l, y2: f }, o, i),
      d = a(n, e, { ...r, x1: s, y1: u }, o, i),
      p = h.querySelector("g") ?? h,
      m = d.querySelector("g") ?? d;
    for (let t = 0; p.firstChild; t += 2) {
      const n = al(),
        e = El("svg:clipPath", i).attr("id", n).node();
      e.appendChild(p.firstChild),
        m.childNodes[t].setAttribute("clip-path", `url(#${n})`),
        m.insertBefore(e, m.childNodes[t]);
    }
    return d;
  };
}
const Dm = {
  ariaLabel: "geo",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 1,
};
class qm extends fc {
  constructor(t, n = {}) {
    const [e, r] = Ro(n.r, 3);
    super(
      t,
      {
        geometry: { value: n.geometry, scale: "projection" },
        r: { value: e, scale: "r", filter: jr, optional: !0 },
      },
      Ad(n),
      Dm,
    ),
      (this.r = r);
  }
  render(t, n, e, r, o) {
    const { geometry: i, r: a } = e,
      l = dt(
        o.projection ??
          (function ({ x: t, y: n }) {
            if (t || n)
              return (
                (t ??= (t) => t),
                (n ??= (t) => t),
                yt({
                  point(e, r) {
                    this.stream.point(t(e), n(r));
                  },
                })
              );
          })(n),
      ),
      { r: s } = this;
    return (
      Br(s) ? (t = []) : void 0 !== s && l.pointRadius(s),
      El("svg:g", o)
        .call(ml, this, r, o)
        .call(xl, this, n)
        .call((n) => {
          n.selectAll()
            .data(t)
            .enter()
            .append("path")
            .call(yl, this)
            .attr("d", a ? (t) => l.pointRadius(a[t])(i[t]) : (t) => l(i[t]))
            .call(ul, this, e);
        })
        .node()
    );
  }
}
function _m(t, { geometry: n = xo, ...e } = {}) {
  switch (t?.type) {
    case "FeatureCollection":
      t = t.features;
      break;
    case "GeometryCollection":
      t = t.geometries;
      break;
    case "Feature":
    case "LineString":
    case "MultiLineString":
    case "MultiPoint":
    case "MultiPolygon":
    case "Point":
    case "Polygon":
    case "Sphere":
      t = [t];
  }
  return new qm(t, { geometry: n, ...e });
}
function Pm({ strokeWidth: t = 1.5, ...n } = {}) {
  return _m({ type: "Sphere" }, { strokeWidth: t, ...n });
}
function Vm({ strokeOpacity: t = 0.1, ...n } = {}) {
  return _m($r(), { strokeOpacity: t, ...n });
}
const Ym = 0.5,
  Um = 0;
function Hm(t = { fill: "count" }, { binWidth: n, ...e } = {}) {
  const { z: r } = e;
  return (
    (n = void 0 === n ? 20 : $o(n)),
    sa((t = ma(t, e)), "fill") &&
      (e.channels = { ...e.channels, fill: { value: [] } }),
    void 0 === e.symbol && (e.symbol = "hexagon"),
    void 0 !== e.r || sa(t, "r") || (e.r = n / 2),
    Vi(e, (e, o, i, a, l, s) => {
      let { x: c, y: u, z: f, fill: h, stroke: d, symbol: p } = i;
      if (void 0 === c) throw new Error("missing channel: x");
      if (void 0 === u) throw new Error("missing channel: y");
      ({ x: c, y: u } = Fl(i, a, s)),
        (f = f ? f.value : ho(e, r)),
        (h = h?.value),
        (d = d?.value),
        (p = p?.value);
      const m = wa(t, { z: f, fill: h, stroke: d, symbol: p }),
        y = f && [],
        g = h && [],
        v = d && [],
        x = p && [],
        w = [],
        b = [],
        k = [];
      let $ = -1;
      for (const n of t) n.initialize(e);
      for (const r of o) {
        const o = [];
        for (const n of t) n.scope("facet", r);
        for (const [i, a] of ha(r, m))
          for (const { index: r, extent: l } of Xm(e, a, c, u, n)) {
            o.push(++$),
              b.push(l.x),
              k.push(l.y),
              f && y.push(m === f ? i : f[r[0]]),
              h && g.push(m === h ? i : h[r[0]]),
              d && v.push(m === d ? i : d[r[0]]),
              p && x.push(m === p ? i : p[r[0]]);
            for (const n of t) n.reduce(r, l);
          }
        w.push(o);
      }
      const M = i.x.scale,
        L = i.y.scale;
      return {
        data: e,
        facets: w,
        channels: {
          x: {
            value: b,
            source: a[M] ? { value: Bo(b, a[M].invert), scale: M } : null,
          },
          y: {
            value: k,
            source: a[L] ? { value: Bo(k, a[L].invert), scale: L } : null,
          },
          ...(f && { z: { value: y } }),
          ...(h && { fill: { value: g, scale: "auto" } }),
          ...(d && { stroke: { value: v, scale: "auto" } }),
          ...(p && { symbol: { value: x, scale: "auto" } }),
          ...Object.fromEntries(
            t.map(({ name: t, output: e }) => [
              t,
              {
                scale: "auto",
                label: e.label,
                radius: "r" === t ? n / 2 : void 0,
                value: e.transform(),
              },
            ]),
          ),
        },
      };
    })
  );
}
function Xm(t, n, e, r, o) {
  const i = o * (1.5 / ji),
    a = new Map();
  for (const l of n) {
    let n = e[l],
      s = r[l];
    if (isNaN(n) || isNaN(s)) continue;
    let c = Math.round((s = (s - Um) / i)),
      u = Math.round((n = (n - Ym) / o - (1 & c) / 2)),
      f = s - c;
    if (3 * Math.abs(f) > 1) {
      let t = n - u,
        e = u + (n < u ? -1 : 1) / 2,
        r = c + (s < c ? -1 : 1),
        o = n - e,
        i = s - r;
      t * t + f * f > o * o + i * i &&
        ((u = e + (1 & c ? 1 : -1) / 2), (c = r));
    }
    const h = `${u},${c}`;
    let d = a.get(h);
    void 0 === d &&
      ((d = {
        index: [],
        extent: { data: t, x: (u + (1 & c) / 2) * o + Ym, y: c * i + Um },
      }),
      a.set(h, d)),
      d.index.push(l);
  }
  return a.values();
}
const Gm = {
  ariaLabel: "hexgrid",
  fill: "none",
  stroke: "currentColor",
  strokeOpacity: 0.1,
};
function Zm(t) {
  return new Jm(t);
}
class Jm extends fc {
  constructor({ binWidth: t = 20, clip: n = !0, ...e } = {}) {
    super(yo, void 0, { clip: n, ...e }, Gm), (this.binWidth = $o(t));
  }
  render(t, n, e, r, o) {
    const { binWidth: i } = this,
      {
        marginTop: a,
        marginRight: l,
        marginBottom: s,
        marginLeft: c,
        width: u,
        height: f,
      } = r,
      h = c - Ym,
      d = u - l - Ym,
      p = a - Um,
      m = f - s - Um,
      y = i / 2,
      g = y * Bi,
      v = g / 2,
      x = 2 * y,
      w = 1.5 * g,
      b = Math.floor(h / x),
      k = Math.ceil(d / x),
      $ = Math.floor((p + v) / w),
      M = Math.ceil((m - v) / w) + 1,
      L = `m0,${Km(-g)}l${Km(y)},${Km(v)}v${Km(g)}l${Km(-y)},${Km(v)}`;
    let A = L;
    for (let t = $; t < M; ++t)
      for (let n = b; n < k; ++n)
        A += `M${Km(n * x + (1 & t) * y)},${Km(t * w)}${L}`;
    return El("svg:g", o)
      .datum(0)
      .call(ml, this, r, o)
      .call(xl, this, {}, ol + Ym, ol + Um)
      .call((t) =>
        t.append("path").call(yl, this).call(ul, this, e).attr("d", A),
      )
      .node();
  }
}
function Km(t) {
  return Math.round(1e3 * t) / 1e3;
}
const Qm = { ariaLabel: "image", fill: null, stroke: null };
class ty extends fc {
  constructor(t, n = {}) {
    let {
      x: e,
      y: r,
      r: o,
      width: i,
      height: a,
      rotate: l,
      src: s,
      preserveAspectRatio: c,
      crossOrigin: u,
      frameAnchor: f,
      imageRendering: h,
    } = n;
    null == o && (o = void 0),
      void 0 === o && void 0 === i && void 0 === a
        ? (i = a = 16)
        : void 0 === i && void 0 !== a
        ? (i = a)
        : void 0 === a && void 0 !== i && (a = i);
    const [d, p] =
      "string" == typeof (m = s) &&
      ((function (t) {
        return /^\.*\//.test(t);
      })(m) ||
        (function (t) {
          return /^(blob|data|file|http|https):/i.test(t);
        })(m))
        ? [void 0, m]
        : [m, void 0];
    var m;
    const [y, g] = Ro(o),
      [v, x] = Ro(i, void 0 !== g ? 2 * g : void 0),
      [w, b] = Ro(a, void 0 !== g ? 2 * g : void 0),
      [k, $] = Ro(l, 0);
    super(
      t,
      {
        x: { value: e, scale: "x", optional: !0 },
        y: { value: r, scale: "y", optional: !0 },
        r: { value: y, scale: "r", filter: jr, optional: !0 },
        width: { value: v, filter: jr, optional: !0 },
        height: { value: w, filter: jr, optional: !0 },
        rotate: { value: k, optional: !0 },
        src: { value: d, optional: !0 },
      },
      Ad(n),
      Qm,
    ),
      (this.src = p),
      (this.width = x),
      (this.rotate = $),
      (this.height = b),
      (this.r = g),
      (this.preserveAspectRatio = wl(c, "xMidYMid")),
      (this.crossOrigin = ko(u)),
      (this.frameAnchor = Ai(f)),
      (this.imageRendering = wl(h, "auto"));
  }
  render(t, n, e, r, o) {
    const { x: i, y: a } = n,
      { x: l, y: s, width: c, height: u, r: f, rotate: h, src: d } = e,
      { r: p, width: m, height: y, rotate: g } = this,
      [v, x] = Ll(this, r);
    return El("svg:g", o)
      .call(ml, this, r, o)
      .call(xl, this, { x: l && i, y: s && a })
      .call((n) =>
        n
          .selectAll()
          .data(t)
          .enter()
          .append("image")
          .call(yl, this)
          .attr("x", ny(l, c, f, v, m, p))
          .attr("y", ny(s, u, f, x, y, p))
          .attr(
            "width",
            c ? (t) => c[t] : void 0 !== m ? m : f ? (t) => 2 * f[t] : 2 * p,
          )
          .attr(
            "height",
            u ? (t) => u[t] : void 0 !== y ? y : f ? (t) => 2 * f[t] : 2 * p,
          )
          .attr(
            "transform",
            h ? (t) => `rotate(${h[t]})` : g ? `rotate(${g})` : null,
          )
          .attr(
            "transform-origin",
            h || g
              ? tu`${l ? (t) => l[t] : v}px ${s ? (t) => s[t] : x}px`
              : null,
          )
          .call(vl, "href", d ? (t) => d[t] : this.src)
          .call(vl, "preserveAspectRatio", this.preserveAspectRatio)
          .call(vl, "crossorigin", this.crossOrigin)
          .call(vl, "image-rendering", this.imageRendering)
          .call(
            vl,
            "clip-path",
            f
              ? (t) => `circle(${f[t]}px)`
              : void 0 !== p
              ? `circle(${p}px)`
              : null,
          )
          .call(ul, this, e),
      )
      .node();
  }
}
function ny(t, n, e, r, o, i) {
  return n && t
    ? (e) => t[e] - n[e] / 2
    : n
    ? (t) => r - n[t] / 2
    : t && void 0 !== o
    ? (n) => t[n] - o / 2
    : void 0 !== o
    ? r - o / 2
    : e && t
    ? (n) => t[n] - e[n]
    : e
    ? (t) => r - e[t]
    : t
    ? (n) => t[n] - i
    : r - i;
}
function ey(t, { x: n, y: e, ...r } = {}) {
  return (
    void 0 === r.frameAnchor && ([n, e] = Xo(n, e)),
    new ty(t, { ...r, x: n, y: e })
  );
}
function ry(t, n, e) {
  var r =
    0 === t || 1 === t
      ? 0
      : Math.exp(
          iy(n + e) - iy(n) - iy(e) + n * Math.log(t) + e * Math.log(1 - t),
        );
  return (
    !(t < 0 || t > 1) &&
    (t < (n + 1) / (n + e + 2)
      ? (r * oy(t, n, e)) / n
      : 1 - (r * oy(1 - t, e, n)) / e)
  );
}
function oy(t, n, e) {
  var r,
    o,
    i,
    a,
    l = 1e-30,
    s = 1,
    c = n + e,
    u = n + 1,
    f = n - 1,
    h = 1,
    d = 1 - (c * t) / u;
  for (
    Math.abs(d) < l && (d = l), a = d = 1 / d;
    s <= 100 &&
    ((d = 1 + (o = (s * (e - s) * t) / ((f + (r = 2 * s)) * (n + r))) * d),
    Math.abs(d) < l && (d = l),
    (h = 1 + o / h),
    Math.abs(h) < l && (h = l),
    (a *= (d = 1 / d) * h),
    (d = 1 + (o = (-(n + s) * (c + s) * t) / ((n + r) * (u + r))) * d),
    Math.abs(d) < l && (d = l),
    (h = 1 + o / h),
    Math.abs(h) < l && (h = l),
    (a *= i = (d = 1 / d) * h),
    !(Math.abs(i - 1) < 3e-7));
    s++
  );
  return a;
}
function iy(t) {
  var n,
    e,
    r,
    o = 0,
    i = [
      76.18009172947146, -86.5053203294167, 24.01409824083091,
      -1.231739572450155, 0.001208650973866179, -5395239384953e-18,
    ],
    a = 1.000000000190015;
  for (r = (e = n = t) + 5.5, r -= (n + 0.5) * Math.log(r); o < 6; o++)
    a += i[o] / ++e;
  return Math.log((2.506628274631 * a) / n) - r;
}
function ay(t, n) {
  var e = (function (t, n, e) {
    var r,
      o,
      i,
      a,
      l,
      s,
      c,
      u,
      f,
      h,
      d = n - 1,
      p = e - 1,
      m = 0;
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    for (
      n >= 1 && e >= 1
        ? ((i = t < 0.5 ? t : 1 - t),
          (s =
            (2.30753 + 0.27061 * (a = Math.sqrt(-2 * Math.log(i)))) /
              (1 + a * (0.99229 + 0.04481 * a)) -
            a),
          t < 0.5 && (s = -s),
          (c = (s * s - 3) / 6),
          (u = 2 / (1 / (2 * n - 1) + 1 / (2 * e - 1))),
          (f =
            (s * Math.sqrt(c + u)) / u -
            (1 / (2 * e - 1) - 1 / (2 * n - 1)) * (c + 5 / 6 - 2 / (3 * u))),
          (s = n / (n + e * Math.exp(2 * f))))
        : ((r = Math.log(n / (n + e))),
          (o = Math.log(e / (n + e))),
          (s =
            t < (a = Math.exp(n * r) / n) / (f = a + (l = Math.exp(e * o) / e))
              ? Math.pow(n * f * t, 1 / n)
              : 1 - Math.pow(e * f * (1 - t), 1 / e))),
        h = -iy(n) - iy(e) + iy(n + e);
      m < 10;
      m++
    ) {
      if (0 === s || 1 === s) return s;
      if (
        ((s -= a =
          (l =
            (ry(s, n, e) - t) /
            (a = Math.exp(d * Math.log(s) + p * Math.log(1 - s) + h))) /
          (1 - 0.5 * Math.min(1, l * (d / s - p / (1 - s))))) <= 0 &&
          (s = 0.5 * (s + a)),
        s >= 1 && (s = 0.5 * (s + a + 1)),
        Math.abs(a) < 1e-8 * s && m > 0)
      )
        break;
    }
    return s;
  })(2 * Math.min(t, 1 - t), 0.5 * n, 0.5);
  return (e = Math.sqrt((n * (1 - e)) / e)), t > 0.5 ? e : -e;
}
const ly = {
  ariaLabel: "linear-regression",
  fill: "currentColor",
  fillOpacity: 0.1,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 1,
};
class sy extends fc {
  constructor(t, n = {}) {
    const { x: e, y: r, z: o, ci: i = 0.95, precision: a = 4 } = n;
    if (
      (super(
        t,
        {
          x: { value: e, scale: "x" },
          y: { value: r, scale: "y" },
          z: { value: Go(n), optional: !0 },
        },
        n,
        ly,
      ),
      (this.z = o),
      (this.ci = +i),
      (this.precision = +a),
      !(0 <= this.ci && this.ci < 1))
    )
      throw new Error(`invalid ci; not in [0, 1): ${i}`);
    if (!(this.precision > 0)) throw new Error(`invalid precision: ${a}`);
  }
  render(t, n, e, r, o) {
    const { x: i, y: a, z: l } = e,
      { ci: s } = this;
    return El("svg:g", o)
      .call(ml, this, r, o)
      .call(xl, this, n)
      .call((n) =>
        n
          .selectAll()
          .data(l ? hl(t, l, this.z) : [t])
          .enter()
          .call((t) =>
            t
              .append("path")
              .attr("fill", "none")
              .call(yl, this)
              .call(fl, this, { ...e, fill: null, fillOpacity: null })
              .attr("d", (t) => this._renderLine(t, i, a))
              .call(
                s && !Mi(this.fill)
                  ? (t) =>
                      t
                        .select(cy)
                        .attr("stroke", "none")
                        .call(yl, this)
                        .call(fl, this, {
                          ...e,
                          stroke: null,
                          strokeOpacity: null,
                          strokeWidth: null,
                        })
                        .attr("d", (t) => this._renderBand(t, i, a))
                  : () => {},
              ),
          ),
      )
      .node();
  }
}
function cy() {
  return this.parentNode.insertBefore(
    this.ownerDocument.createElementNS(ht.svg, "path"),
    this,
  );
}
class uy extends sy {
  constructor(t, n) {
    super(t, n);
  }
  _renderBand(t, n, e) {
    const { ci: r, precision: o } = this,
      [i, a] = le(t, (t) => e[t]),
      l = py(t, e, n),
      s = my(t, e, n, (1 - r) / 2, l);
    return dr()
      .y((t) => t)
      .x0((t) => s(t, -1))
      .x1((t) => s(t, 1))(I(i, a - o / 2, o).concat(a));
  }
  _renderLine(t, n, e) {
    const [r, o] = le(t, (t) => e[t]),
      i = py(t, e, n);
    return `M${i(r)},${r}L${i(o)},${o}`;
  }
}
class fy extends sy {
  constructor(t, n) {
    super(t, n);
  }
  _renderBand(t, n, e) {
    const { ci: r, precision: o } = this,
      [i, a] = le(t, (t) => n[t]),
      l = py(t, n, e),
      s = my(t, n, e, (1 - r) / 2, l);
    return dr()
      .x((t) => t)
      .y0((t) => s(t, -1))
      .y1((t) => s(t, 1))(I(i, a - o / 2, o).concat(a));
  }
  _renderLine(t, n, e) {
    const [r, o] = le(t, (t) => n[t]),
      i = py(t, n, e);
    return `M${r},${i(r)}L${o},${i(o)}`;
  }
}
function hy(
  t,
  {
    y: n = vo,
    x: e = xo,
    stroke: r,
    fill: o = $i(r) ? "currentColor" : r,
    ...i
  } = {},
) {
  return new uy(t, fh({ ...i, x: e, y: n, fill: o, stroke: r }));
}
function dy(
  t,
  {
    x: n = vo,
    y: e = xo,
    stroke: r,
    fill: o = $i(r) ? "currentColor" : r,
    ...i
  } = {},
) {
  return new fy(t, uh({ ...i, x: n, y: e, fill: o, stroke: r }));
}
function py(t, n, e) {
  let r = 0,
    o = 0,
    i = 0,
    a = 0;
  for (const l of t) {
    const t = n[l],
      s = e[l];
    (r += t), (o += s), (i += t * s), (a += t * t);
  }
  const l = t.length,
    s = (l * i - r * o) / (l * a - r * r),
    c = (o - s * r) / l;
  return (t) => s * t + c;
}
function my(t, n, e, r, o) {
  const i = tt(t, (t) => n[t]) / t.length;
  let a = 0,
    l = 0;
  for (const r of t) (a += (n[r] - i) ** 2), (l += (e[r] - o(n[r])) ** 2);
  const s = Math.sqrt(l / (t.length - 2)),
    c = ay(r, t.length - 2);
  return (n, e) => {
    const r = o(n),
      l = s * Math.sqrt(1 / t.length + (n - i) ** 2 / a);
    return r + e * c * l;
  };
}
function yy({
  path: t = xo,
  delimiter: n,
  frameAnchor: e,
  treeLayout: r = Lr,
  treeSort: o,
  treeSeparation: i,
  treeAnchor: a,
  treeFilter: l,
  ...s
} = {}) {
  (a = vy(a)),
    (o = by(o)),
    null != l && (l = Ey(l)),
    void 0 === e && (e = a.frameAnchor);
  const c = $y(n),
    u = Dy(s, Ey),
    [f, h] = ei(),
    [d, p] = ei();
  return {
    x: f,
    y: d,
    frameAnchor: e,
    ...Pi(s, (n, e) => {
      const s = c(ho(n, t)),
        f = h([]),
        d = p([]);
      let m = -1;
      const y = [],
        g = [],
        v = Mr().path((t) => s[t]),
        x = r();
      x.nodeSize && x.nodeSize([1, 1]),
        x.separation && void 0 !== i && x.separation(i ?? wo);
      for (const t of u) t[Fy] = t[jy]([]);
      for (const t of e) {
        const e = [],
          r = v(t.filter((t) => null != s[t])).each(
            (t) => (t.data = n[t.data]),
          );
        null != o && r.sort(o), x(r);
        for (const t of r.descendants())
          if (null == l || l(t)) {
            e.push(++m), (y[m] = t.data), a.position(t, m, f, d);
            for (const n of u) n[Fy][m] = n[By](t);
          }
        g.push(e);
      }
      return { data: y, facets: g };
    }),
    ...Object.fromEntries(u),
  };
}
function gy({
  path: t = xo,
  delimiter: n,
  curve: e = "bump-x",
  stroke: r = "#555",
  strokeWidth: o = 1.5,
  strokeOpacity: i = 0.5,
  treeLayout: a = Lr,
  treeSort: l,
  treeSeparation: s,
  treeAnchor: c,
  treeFilter: u,
  ...f
} = {}) {
  (c = vy(c)),
    (l = by(l)),
    null != u && (u = zy(u)),
    (f = { curve: e, stroke: r, strokeWidth: o, strokeOpacity: i, ...f });
  const h = $y(n),
    d = Dy(f, zy),
    [p, m] = ei(),
    [y, g] = ei(),
    [v, x] = ei(),
    [w, b] = ei();
  return {
    x1: p,
    x2: y,
    y1: v,
    y2: w,
    ...Pi(f, (n, e) => {
      const r = h(ho(n, t)),
        o = m([]),
        i = g([]),
        f = x([]),
        p = b([]);
      let y = -1;
      const v = [],
        w = [],
        k = Mr().path((t) => r[t]),
        $ = a();
      $.nodeSize && $.nodeSize([1, 1]),
        $.separation && void 0 !== s && $.separation(s ?? wo);
      for (const t of d) t[Fy] = t[jy]([]);
      for (const t of e) {
        const e = [],
          a = k(t.filter((t) => null != r[t])).each(
            (t) => (t.data = n[t.data]),
          );
        null != l && a.sort(l), $(a);
        for (const { source: t, target: n } of a.links())
          if (null == u || u(n, t)) {
            e.push(++y),
              (v[y] = n.data),
              c.position(t, y, o, f),
              c.position(n, y, i, p);
            for (const e of d) e[Fy][y] = e[By](n, t);
          }
        w.push(e);
      }
      return { data: v, facets: w };
    }),
    ...Object.fromEntries(d),
  };
}
function vy(t = "left") {
  switch (`${t}`.trim().toLowerCase()) {
    case "left":
      return xy;
    case "right":
      return wy;
  }
  throw new Error(`invalid tree anchor: ${t}`);
}
const xy = {
    frameAnchor: "left",
    dx: 6,
    position({ x: t, y: n }, e, r, o) {
      (r[e] = n), (o[e] = -t);
    },
  },
  wy = {
    frameAnchor: "right",
    dx: -6,
    position({ x: t, y: n }, e, r, o) {
      (r[e] = -n), (o[e] = -t);
    },
  };
function by(t) {
  return null == t || "function" == typeof t
    ? t
    : `${t}`.trim().toLowerCase().startsWith("node:")
    ? ky(Ey(t))
    : ky(
        (function (t) {
          return (n) => n.data?.[t];
        })(t),
      );
}
function ky(t) {
  return (n, e) => Tr(t(n), t(e));
}
function $y(t = "/") {
  if ("/" === (t = `${t}`)) return (t) => t;
  if (1 !== t.length)
    throw new Error("delimiter must be exactly one character");
  const n = t.charCodeAt(0);
  return (t) =>
    t.map((t) =>
      (function (t, n) {
        if (n === My) throw new Error("delimiter cannot be backslash");
        let e = !1;
        for (let r = 0, o = t.length; r < o; ++r) {
          switch (t.charCodeAt(r)) {
            case My:
              if (!e) {
                e = !0;
                continue;
              }
              break;
            case n:
              e
                ? ((t = t.slice(0, r - 1) + t.slice(r)), --r, --o)
                : (t = t.slice(0, r) + "/" + t.slice(r + 1));
              break;
            case Ly:
              e
                ? ((t = t.slice(0, r) + "\\\\" + t.slice(r)),
                  (r += 2),
                  (o += 2))
                : ((t = t.slice(0, r) + "\\" + t.slice(r)), ++r, ++o);
          }
          e = !1;
        }
        return t;
      })(t, n),
    );
}
const My = 92,
  Ly = 47;
function Ay(t) {
  return Po(t) && "function" == typeof t.node;
}
function Ey(t) {
  if (Ay(t)) return t.node;
  if ((t = `${t}`.trim().toLowerCase()).startsWith("node:")) {
    switch (t) {
      case "node:name":
        return Sy;
      case "node:path":
        return Oy;
      case "node:internal":
        return Ty;
      case "node:external":
        return Ry;
      case "node:depth":
        return Ny;
      case "node:height":
        return Cy;
    }
    throw new Error(`invalid node value: ${t}`);
  }
}
function zy(t) {
  if (Ay(t)) return t.node;
  if (Po((n = t)) && "function" == typeof n.link) return t.link;
  var n;
  if (
    (t = `${t}`.trim().toLowerCase()).startsWith("node:") ||
    t.startsWith("parent:")
  ) {
    switch (t) {
      case "parent:name":
        return Iy(Sy);
      case "parent:path":
        return Iy(Oy);
      case "parent:depth":
        return Iy(Ny);
      case "parent:height":
        return Iy(Cy);
      case "node:name":
        return Sy;
      case "node:path":
        return Oy;
      case "node:internal":
        return Ty;
      case "node:external":
        return Ry;
      case "node:depth":
        return Ny;
      case "node:height":
        return Cy;
    }
    throw new Error(`invalid link value: ${t}`);
  }
}
function Oy(t) {
  return t.id;
}
function Sy(t) {
  return (function (t) {
    let n = t.length;
    for (; --n > 0 && !Wy(t, n); );
    return (function (t) {
      let n = !1;
      for (let e = 0, r = t.length; e < r; ++e) {
        switch (t.charCodeAt(e)) {
          case My:
            if (!n) {
              n = !0;
              continue;
            }
          case Ly:
            n && ((t = t.slice(0, e - 1) + t.slice(e)), --e, --r);
        }
        n = !1;
      }
      return t;
    })(t.slice(n + 1));
  })(t.id);
}
function Ny(t) {
  return t.depth;
}
function Cy(t) {
  return t.height;
}
function Ty(t) {
  return !!t.children;
}
function Ry(t) {
  return !t.children;
}
function Iy(t) {
  return (n, e) => (null == e ? void 0 : t(e));
}
function Wy(t, n) {
  if ("/" === t[n]) {
    let e = 0;
    for (; n > 0 && "\\" === t[--n]; ) ++e;
    if (0 == (1 & e)) return !0;
  }
  return !1;
}
const jy = 2,
  By = 3,
  Fy = 4;
function Dy(t, n) {
  const e = [];
  for (const r in t) {
    const o = t[r],
      i = n(o);
    void 0 !== i && e.push([r, ...ei(o), i]);
  }
  return e;
}
function qy(
  t,
  {
    fill: n,
    stroke: e,
    strokeWidth: r,
    strokeOpacity: o,
    strokeLinejoin: i,
    strokeLinecap: a,
    strokeMiterlimit: l,
    strokeDasharray: s,
    strokeDashoffset: c,
    marker: u,
    markerStart: f = u,
    markerEnd: h = u,
    dot: d = $i(f) && $i(h),
    text: p = "node:name",
    textStroke: m = "var(--plot-background)",
    title: y = "node:path",
    dx: g,
    dy: v,
    textAnchor: x,
    treeLayout: w = Lr,
    textLayout: b = w === Lr || w === Ar ? "mirrored" : "normal",
    tip: k,
    ...$
  } = {},
) {
  if ((void 0 === g && (g = vy($.treeAnchor).dx), void 0 !== x))
    throw new Error("textAnchor is not a configurable tree option");
  function M(e) {
    return au(
      t,
      yy({
        treeLayout: w,
        text: p,
        fill: void 0 === n ? "currentColor" : n,
        stroke: m,
        dx: g,
        dy: v,
        title: y,
        ...e,
        ...$,
      }),
    );
  }
  return (
    (b = Wo(b, "textLayout", ["mirrored", "normal"])),
    hc(
      sd(
        t,
        gy({
          treeLayout: w,
          markerStart: f,
          markerEnd: h,
          stroke: void 0 !== e ? e : void 0 === n ? "node:internal" : n,
          strokeWidth: r,
          strokeOpacity: o,
          strokeLinejoin: i,
          strokeLinecap: a,
          strokeMiterlimit: l,
          strokeDasharray: s,
          strokeDashoffset: c,
          ...$,
        }),
      ),
      d
        ? zd(
            t,
            yy({
              treeLayout: w,
              fill: void 0 === n ? "node:internal" : n,
              title: y,
              tip: k,
              ...$,
            }),
          )
        : null,
      null != p
        ? "mirrored" === b
          ? [
              M({ textAnchor: "start", treeFilter: "node:external" }),
              M({ textAnchor: "end", treeFilter: "node:internal", dx: -g }),
            ]
          : M()
        : null,
    )
  );
}
function _y(t, n) {
  return qy(t, { ...n, treeLayout: Ar });
}
function Py({ geometry: t = xo, ...n } = {}) {
  return Vi({ ...n, x: null, y: null }, (n, e, r, o, i, { projection: a }) => {
    const l = ho(n, t),
      s = l.length,
      c = new Float64Array(s),
      u = new Float64Array(s),
      f = dt(a);
    for (let t = 0; t < s; ++t) [c[t], u[t]] = f.centroid(l[t]);
    return {
      data: n,
      facets: e,
      channels: {
        x: { value: c, scale: null == a ? "x" : null, source: null },
        y: { value: u, scale: null == a ? "y" : null, source: null },
      },
    };
  });
}
function Vy({ geometry: t = xo, ...n } = {}) {
  let e;
  return {
    ...n,
    x: {
      transform: (n) => Float64Array.from((e = ho(ho(n, t), Er)), ([t]) => t),
    },
    y: { transform: () => Float64Array.from(e, ([, t]) => t) },
  };
}
const Yy = ({ marginLeft: t }) => [1, t],
  Uy = ({ width: t, marginRight: n }) => [-1, t - n],
  Hy = ({ width: t, marginLeft: n, marginRight: e }) => [0, (n + t - e) / 2],
  Xy = ({ marginTop: t }) => [1, t],
  Gy = ({ height: t, marginBottom: n }) => [-1, t - n],
  Zy = ({ height: t, marginTop: n, marginBottom: e }) => [0, (n + t - e) / 2];
function Jy(t) {
  return "string" == typeof t ? { anchor: t } : t;
}
function Ky(t = {}, n = {}) {
  1 === arguments.length && ([t, n] = tg(t));
  let { anchor: e = "left", padding: r = 1, r: o = n.r } = Jy(t);
  switch (`${e}`.toLowerCase()) {
    case "left":
      e = Yy;
      break;
    case "right":
      e = Uy;
      break;
    case "middle":
      e = Hy;
      break;
    default:
      throw new Error(`unknown dodge anchor: ${e}`);
  }
  return ng("x", "y", e, $o(r), o, n);
}
function Qy(t = {}, n = {}) {
  1 === arguments.length && ([t, n] = tg(t));
  let { anchor: e = "bottom", padding: r = 1, r: o = n.r } = Jy(t);
  switch (`${e}`.toLowerCase()) {
    case "top":
      e = Xy;
      break;
    case "bottom":
      e = Gy;
      break;
    case "middle":
      e = Zy;
      break;
    default:
      throw new Error(`unknown dodge anchor: ${e}`);
  }
  return ng("y", "x", e, $o(r), o, n);
}
function tg(t) {
  const { anchor: n, padding: e, ...r } = t,
    { r: o } = r;
  return [{ anchor: n, padding: e, r: o }, r];
}
function ng(t, n, e, r, o, i) {
  if (null != o && "number" != typeof o) {
    let { channels: t, sort: n, reverse: e } = i;
    (t = zi(t)),
      void 0 === t?.r &&
        (i = { ...i, channels: { ...t, r: { value: o, scale: "r" } } }),
      void 0 === n && void 0 === e && (i.sort = { channel: "-r" });
  }
  return Vi(i, function (i, a, l, s, c, u) {
    let { [n]: f, r: h } = l;
    if (!l[n]) throw new Error(`missing channel: ${n}`);
    ({ [n]: f } = Fl(l, s, u));
    const d = h
      ? void 0
      : void 0 !== o
      ? $o(o)
      : void 0 !== this.r
      ? this.r
      : 3;
    h && (h = ho(h.value, s[h.scale] || xo, Float64Array));
    let [p, m] = e(c);
    const y = p ? rg : eg,
      g = new Float64Array(f.length),
      v = h ? (t) => h[t] : () => d;
    for (let t of a) {
      const n = Nr();
      t = t.filter(h ? (t) => Wr(f[t]) && jr(h[t]) : (t) => Wr(f[t]));
      const e = new Float64Array(2 * t.length + 2);
      for (const o of t) {
        const t = v(o),
          i = p ? t + r : 0,
          a = f[o] - t,
          l = f[o] + t;
        let s = 2;
        n.queryInterval(a - r, l + r, ([, , t]) => {
          const n = g[t] - i,
            a = f[o] - f[t],
            l = r + (h ? h[o] + h[t] : 2 * d),
            c = Math.sqrt(l * l - a * a);
          (e[s++] = n - c), (e[s++] = n + c);
        });
        let c = e.slice(0, s);
        p && (c = c.filter((t) => t >= 0));
        t: for (const t of c.sort(y)) {
          for (let n = 0; n < s; n += 2)
            if (e[n] + 1e-6 < t && t < e[n + 1] - 1e-6) continue t;
          g[o] = t + i;
          break;
        }
        n.insert([a, l, o]);
      }
    }
    p || (p = 1);
    for (const t of a) for (const n of t) g[n] = g[n] * p + m;
    return {
      data: i,
      facets: a,
      channels: {
        [t]: { value: g, source: null },
        [n]: { value: f, source: l[n] },
        ...(h && { r: { value: h, source: l.r } }),
      },
    };
  });
}
function eg(t, n) {
  return Math.abs(t) - Math.abs(n);
}
function rg(t, n) {
  return t - n;
}
function og(t, n) {
  return 1 === arguments.length && ({ basis: t, ...n } = t), Qd(ag(t), n);
}
function ig(t, n) {
  return 1 === arguments.length && ({ basis: t, ...n } = t), tp(ag(t), n);
}
function ag(t) {
  if (void 0 === t) return ug;
  if ("function" == typeof t) return lg(Ko(t));
  if (/^p\d{2}$/i.test(t)) return sg(zo(t));
  switch (`${t}`.toLowerCase()) {
    case "deviation":
      return hg;
    case "first":
      return ug;
    case "last":
      return fg;
    case "max":
      return dg;
    case "mean":
      return pg;
    case "median":
      return mg;
    case "min":
      return yg;
    case "sum":
      return gg;
    case "extent":
      return cg;
  }
  throw new Error(`invalid basis: ${t}`);
}
function lg(t) {
  return {
    mapIndex(n, e, r) {
      const o = +t(n, e);
      for (const t of n) r[t] = null === e[t] ? NaN : e[t] / o;
    },
  };
}
function sg(t) {
  return lg((n, e) => t(n, (t) => e[t]));
}
const cg = {
    mapIndex(t, n, e) {
      const [r, o] = le(t, (t) => n[t]),
        i = o - r;
      for (const o of t) e[o] = null === n[o] ? NaN : (n[o] - r) / i;
    },
  },
  ug = lg((t, n) => {
    for (let e = 0; e < t.length; ++e) {
      const r = n[t[e]];
      if (Cr(r)) return r;
    }
  }),
  fg = lg((t, n) => {
    for (let e = t.length - 1; e >= 0; --e) {
      const r = n[t[e]];
      if (Cr(r)) return r;
    }
  }),
  hg = {
    mapIndex(t, n, e) {
      const r = at(t, (t) => n[t]),
        o = ut(t, (t) => n[t]);
      for (const i of t) e[i] = null === n[i] ? NaN : o ? (n[i] - r) / o : 0;
    },
  },
  dg = sg(N),
  pg = sg(at),
  mg = sg(ot),
  yg = sg(ct),
  gg = sg(tt);
function vg(t, n) {
  return (function (t, n, e = {}) {
    let r,
      o = 1;
    if ("number" == typeof n) (o = n), (r = (t, n) => +t + n);
    else {
      if ("string" == typeof n) {
        const t = n.startsWith("-") ? -1 : 1;
        ([n, o] = no(n.replace(/^[+-]/, ""))), (o *= t);
      }
      (n = si(n)), (r = (t, e) => n.offset(t, e));
    }
    const i = `${t}2`,
      a = np({ [`${t}1`]: (t) => t.map((t) => r(t, o)), [i]: (t) => t }, e),
      l = a[i].transform;
    return (
      (a[i].transform = () => {
        const t = l(),
          [n, e] = le(t);
        return (t.domain = o < 0 ? [n, r(e, o)] : [r(n, o), e]), t;
      }),
      a
    );
  })("x", t, n);
}
function xg(t, n = {}) {
  if ("string" == typeof t)
    switch (t.toLowerCase()) {
      case "first":
        return bg(n);
      case "last":
        return kg(n);
    }
  if ("function" == typeof t) return Ng(null, t, n);
  let e, r;
  for (e in t) {
    if (void 0 !== r) throw new Error("ambiguous selector; multiple inputs");
    r = wg(t[e]);
  }
  if (void 0 === r) throw new Error(`invalid selector: ${t}`);
  return Ng(e, r, n);
}
function wg(t) {
  if ("function" == typeof t) return t;
  switch (`${t}`.toLowerCase()) {
    case "min":
      return Og;
    case "max":
      return Sg;
  }
  throw new Error(`unknown selector: ${t}`);
}
function bg(t) {
  return Ng(null, Eg, t);
}
function kg(t) {
  return Ng(null, zg, t);
}
function $g(t) {
  return Ng("x", Og, t);
}
function Mg(t) {
  return Ng("y", Og, t);
}
function Lg(t) {
  return Ng("x", Sg, t);
}
function Ag(t) {
  return Ng("y", Sg, t);
}
function* Eg(t) {
  yield t[0];
}
function* zg(t) {
  yield t[t.length - 1];
}
function* Og(t, n) {
  yield zr(t, (t) => n[t]);
}
function* Sg(t, n) {
  yield hr(t, (t) => n[t]);
}
function Ng(t, n, e) {
  if (null != t) {
    if (null == e[t]) throw new Error(`missing channel: ${t}`);
    t = e[t];
  }
  const r = Go(e);
  return Pi(e, (e, o) => {
    const i = ho(e, r),
      a = ho(e, t),
      l = [];
    for (const t of o) {
      const e = [];
      for (const r of i ? K(t, (t) => i[t]).values() : [t])
        for (const t of n(r, a)) e.push(t);
      l.push(e);
    }
    return { data: e, facets: l };
  });
}
export {
  ed as Area,
  fd as Arrow,
  yd as BarX,
  gd as BarY,
  bd as Cell,
  nm as Contour,
  Cm as Density,
  Ed as Dot,
  Lf as Frame,
  qm as Geo,
  Jm as Hexgrid,
  ty as Image,
  Rd as Line,
  ld as Link,
  fc as Mark,
  qp as Raster,
  Fd as Rect,
  Gc as RuleX,
  Zc as RuleY,
  ru as Text,
  Ap as TickX,
  Ep as TickY,
  Of as Tip,
  Cu as Vector,
  rd as area,
  od as areaX,
  id as areaY,
  dd as arrow,
  Vd as auto,
  Pd as autoSpec,
  Uu as axisFx,
  Vu as axisFy,
  Yu as axisX,
  Pu as axisY,
  vd as barX,
  xd as barY,
  sh as bin,
  ah as binX,
  lh as binY,
  $p as bollinger,
  bp as bollingerX,
  kp as bollingerY,
  Sp as boxX,
  Np as boxY,
  kd as cell,
  $d as cellX,
  Md as cellY,
  Py as centroid,
  Nd as circle,
  _y as cluster,
  ei as column,
  em as contour,
  om as crosshair,
  im as crosshairX,
  am as crosshairY,
  Am as delaunayLink,
  Em as delaunayMesh,
  Tm as density,
  Wm as differenceY,
  Ky as dodgeX,
  Qy as dodgeY,
  zd as dot,
  Od as dotX,
  Sd as dotY,
  Xi as filter,
  Ra as find,
  Qa as formatIsoDate,
  Ja as formatMonth,
  Ka as formatWeekday,
  Af as frame,
  _m as geo,
  Vy as geoCentroid,
  Vm as graticule,
  Ku as gridFx,
  Zu as gridFy,
  Ju as gridX,
  Gu as gridY,
  aa as group,
  oa as groupX,
  ia as groupY,
  ra as groupZ,
  Cd as hexagon,
  Hm as hexbin,
  Zm as hexgrid,
  zm as hull,
  xo as identity,
  ey as image,
  vo as indexOf,
  Vi as initializer,
  Jp as interpolateNearest,
  Hp as interpolateNone,
  Xp as interpolatorBarycentric,
  Kp as interpolatorRandomWalk,
  xf as legend,
  Id as line,
  Wd as lineX,
  jd as lineY,
  hy as linearRegressionX,
  dy as linearRegressionY,
  sd as link,
  np as map,
  Qd as mapX,
  tp as mapY,
  hc as marks,
  ag as normalize,
  og as normalizeX,
  ig as normalizeY,
  Bf as plot,
  vc as pointer,
  xc as pointerX,
  wc as pointerY,
  Pp as raster,
  Dd as rect,
  qd as rectX,
  _d as rectY,
  Zi as reverse,
  Jc as ruleX,
  Kc as ruleY,
  Xs as scale,
  xg as select,
  bg as selectFirst,
  kg as selectLast,
  Lg as selectMaxX,
  Ag as selectMaxY,
  $g as selectMinX,
  Mg as selectMinY,
  vg as shiftX,
  Ki as shuffle,
  Qi as sort,
  Pm as sphere,
  Wu as spike,
  Rh as stackX,
  Ih as stackX1,
  Wh as stackX2,
  jh as stackY,
  Bh as stackY1,
  Fh as stackY2,
  au as text,
  lu as textX,
  su as textY,
  zp as tickX,
  Op as tickY,
  Sf as tip,
  Pi as transform,
  qy as tree,
  gy as treeLink,
  yy as treeNode,
  ho as valueof,
  Tu as vector,
  Ru as vectorX,
  Iu as vectorY,
  Om as voronoi,
  Sm as voronoiMesh,
  lp as window,
  ip as windowX,
  ap as windowY,
};
export default null;
