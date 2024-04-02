/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/d3-scale@4.0.2/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import {
  InternMap as n,
  range as t,
  bisect as r,
  tickStep as e,
  ticks as u,
  tickIncrement as a,
  ascending as o,
  quantileSorted as i,
  quantile as c,
} from "../d3-array@3.2.4/+esm.js";
import {
  interpolateNumber as l,
  interpolate as f,
  interpolateRound as s,
  piecewise as p,
} from "../d3-interpolate@3.0.1/+esm.js";
import {
  formatSpecifier as h,
  precisionFixed as g,
  precisionRound as m,
  precisionPrefix as d,
  formatPrefix as y,
  format as v,
} from "../d3-format@3.1.0/+esm.js";
import {
  timeSecond as M,
  timeMinute as w,
  timeHour as k,
  timeDay as N,
  timeWeek as x,
  timeMonth as b,
  timeYear as A,
  timeTickInterval as q,
  timeTicks as S,
  utcSecond as D,
  utcMinute as I,
  utcHour as O,
  utcDay as R,
  utcWeek as E,
  utcMonth as L,
  utcYear as F,
  utcTickInterval as P,
  utcTicks as T,
} from "../d3-time@3.1.0/+esm.js";
import {
  timeFormat as Q,
  utcFormat as U,
} from "../d3-time-format@4.1.0/+esm.js";
function B(n, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(n);
      break;
    default:
      this.range(t).domain(n);
  }
  return this;
}
function C(n, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      "function" == typeof n ? this.interpolator(n) : this.range(n);
      break;
    default:
      this.domain(n),
        "function" == typeof t ? this.interpolator(t) : this.range(t);
  }
  return this;
}
const z = Symbol("implicit");
function Y() {
  var t = new n(),
    r = [],
    e = [],
    u = z;
  function a(n) {
    let a = t.get(n);
    if (void 0 === a) {
      if (u !== z) return u;
      t.set(n, (a = r.push(n) - 1));
    }
    return e[a % e.length];
  }
  return (
    (a.domain = function (e) {
      if (!arguments.length) return r.slice();
      (r = []), (t = new n());
      for (const n of e) t.has(n) || t.set(n, r.push(n) - 1);
      return a;
    }),
    (a.range = function (n) {
      return arguments.length ? ((e = Array.from(n)), a) : e.slice();
    }),
    (a.unknown = function (n) {
      return arguments.length ? ((u = n), a) : u;
    }),
    (a.copy = function () {
      return Y(r, e).unknown(u);
    }),
    B.apply(a, arguments),
    a
  );
}
function j() {
  var n,
    r,
    e = Y().unknown(void 0),
    u = e.domain,
    a = e.range,
    o = 0,
    i = 1,
    c = !1,
    l = 0,
    f = 0,
    s = 0.5;
  function p() {
    var e = u().length,
      p = i < o,
      h = p ? i : o,
      g = p ? o : i;
    (n = (g - h) / Math.max(1, e - l + 2 * f)),
      c && (n = Math.floor(n)),
      (h += (g - h - n * (e - l)) * s),
      (r = n * (1 - l)),
      c && ((h = Math.round(h)), (r = Math.round(r)));
    var m = t(e).map(function (t) {
      return h + n * t;
    });
    return a(p ? m.reverse() : m);
  }
  return (
    delete e.unknown,
    (e.domain = function (n) {
      return arguments.length ? (u(n), p()) : u();
    }),
    (e.range = function (n) {
      return arguments.length
        ? (([o, i] = n), (o = +o), (i = +i), p())
        : [o, i];
    }),
    (e.rangeRound = function (n) {
      return ([o, i] = n), (o = +o), (i = +i), (c = !0), p();
    }),
    (e.bandwidth = function () {
      return r;
    }),
    (e.step = function () {
      return n;
    }),
    (e.round = function (n) {
      return arguments.length ? ((c = !!n), p()) : c;
    }),
    (e.padding = function (n) {
      return arguments.length ? ((l = Math.min(1, (f = +n))), p()) : l;
    }),
    (e.paddingInner = function (n) {
      return arguments.length ? ((l = Math.min(1, n)), p()) : l;
    }),
    (e.paddingOuter = function (n) {
      return arguments.length ? ((f = +n), p()) : f;
    }),
    (e.align = function (n) {
      return arguments.length ? ((s = Math.max(0, Math.min(1, n))), p()) : s;
    }),
    (e.copy = function () {
      return j(u(), [o, i]).round(c).paddingInner(l).paddingOuter(f).align(s);
    }),
    B.apply(p(), arguments)
  );
}
function G(n) {
  var t = n.copy;
  return (
    (n.padding = n.paddingOuter),
    delete n.paddingInner,
    delete n.paddingOuter,
    (n.copy = function () {
      return G(t());
    }),
    n
  );
}
function H() {
  return G(j.apply(null, arguments).paddingInner(1));
}
function J(n) {
  return +n;
}
var K = [0, 1];
function V(n) {
  return n;
}
function W(n, t) {
  return (t -= n = +n)
    ? function (r) {
        return (r - n) / t;
      }
    : ((r = isNaN(t) ? NaN : 0.5),
      function () {
        return r;
      });
  var r;
}
function X(n, t, r) {
  var e = n[0],
    u = n[1],
    a = t[0],
    o = t[1];
  return (
    u < e ? ((e = W(u, e)), (a = r(o, a))) : ((e = W(e, u)), (a = r(a, o))),
    function (n) {
      return a(e(n));
    }
  );
}
function Z(n, t, e) {
  var u = Math.min(n.length, t.length) - 1,
    a = new Array(u),
    o = new Array(u),
    i = -1;
  for (
    n[u] < n[0] && ((n = n.slice().reverse()), (t = t.slice().reverse()));
    ++i < u;

  )
    (a[i] = W(n[i], n[i + 1])), (o[i] = e(t[i], t[i + 1]));
  return function (t) {
    var e = r(n, t, 1, u) - 1;
    return o[e](a[e](t));
  };
}
function $(n, t) {
  return t
    .domain(n.domain())
    .range(n.range())
    .interpolate(n.interpolate())
    .clamp(n.clamp())
    .unknown(n.unknown());
}
function _() {
  var n,
    t,
    r,
    e,
    u,
    a,
    o = K,
    i = K,
    c = f,
    p = V;
  function h() {
    var n,
      t,
      r,
      c = Math.min(o.length, i.length);
    return (
      p !== V &&
        ((n = o[0]),
        (t = o[c - 1]),
        n > t && ((r = n), (n = t), (t = r)),
        (p = function (r) {
          return Math.max(n, Math.min(t, r));
        })),
      (e = c > 2 ? Z : X),
      (u = a = null),
      g
    );
  }
  function g(t) {
    return null == t || isNaN((t = +t))
      ? r
      : (u || (u = e(o.map(n), i, c)))(n(p(t)));
  }
  return (
    (g.invert = function (r) {
      return p(t((a || (a = e(i, o.map(n), l)))(r)));
    }),
    (g.domain = function (n) {
      return arguments.length ? ((o = Array.from(n, J)), h()) : o.slice();
    }),
    (g.range = function (n) {
      return arguments.length ? ((i = Array.from(n)), h()) : i.slice();
    }),
    (g.rangeRound = function (n) {
      return (i = Array.from(n)), (c = s), h();
    }),
    (g.clamp = function (n) {
      return arguments.length ? ((p = !!n || V), h()) : p !== V;
    }),
    (g.interpolate = function (n) {
      return arguments.length ? ((c = n), h()) : c;
    }),
    (g.unknown = function (n) {
      return arguments.length ? ((r = n), g) : r;
    }),
    function (r, e) {
      return (n = r), (t = e), h();
    }
  );
}
function nn() {
  return _()(V, V);
}
function tn(n, t, r, u) {
  var a,
    o = e(n, t, r);
  switch ((u = h(null == u ? ",f" : u)).type) {
    case "s":
      var i = Math.max(Math.abs(n), Math.abs(t));
      return (
        null != u.precision || isNaN((a = d(o, i))) || (u.precision = a),
        y(u, i)
      );
    case "":
    case "e":
    case "g":
    case "p":
    case "r":
      null != u.precision ||
        isNaN((a = m(o, Math.max(Math.abs(n), Math.abs(t))))) ||
        (u.precision = a - ("e" === u.type));
      break;
    case "f":
    case "%":
      null != u.precision ||
        isNaN((a = g(o))) ||
        (u.precision = a - 2 * ("%" === u.type));
  }
  return v(u);
}
function rn(n) {
  var t = n.domain;
  return (
    (n.ticks = function (n) {
      var r = t();
      return u(r[0], r[r.length - 1], null == n ? 10 : n);
    }),
    (n.tickFormat = function (n, r) {
      var e = t();
      return tn(e[0], e[e.length - 1], null == n ? 10 : n, r);
    }),
    (n.nice = function (r) {
      null == r && (r = 10);
      var e,
        u,
        o = t(),
        i = 0,
        c = o.length - 1,
        l = o[i],
        f = o[c],
        s = 10;
      for (
        f < l && ((u = l), (l = f), (f = u), (u = i), (i = c), (c = u));
        s-- > 0;

      ) {
        if ((u = a(l, f, r)) === e) return (o[i] = l), (o[c] = f), t(o);
        if (u > 0) (l = Math.floor(l / u) * u), (f = Math.ceil(f / u) * u);
        else {
          if (!(u < 0)) break;
          (l = Math.ceil(l * u) / u), (f = Math.floor(f * u) / u);
        }
        e = u;
      }
      return n;
    }),
    n
  );
}
function en() {
  var n = nn();
  return (
    (n.copy = function () {
      return $(n, en());
    }),
    B.apply(n, arguments),
    rn(n)
  );
}
function un(n) {
  var t;
  function r(n) {
    return null == n || isNaN((n = +n)) ? t : n;
  }
  return (
    (r.invert = r),
    (r.domain = r.range =
      function (t) {
        return arguments.length ? ((n = Array.from(t, J)), r) : n.slice();
      }),
    (r.unknown = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.copy = function () {
      return un(n).unknown(t);
    }),
    (n = arguments.length ? Array.from(n, J) : [0, 1]),
    rn(r)
  );
}
function an(n, t) {
  var r,
    e = 0,
    u = (n = n.slice()).length - 1,
    a = n[e],
    o = n[u];
  return (
    o < a && ((r = e), (e = u), (u = r), (r = a), (a = o), (o = r)),
    (n[e] = t.floor(a)),
    (n[u] = t.ceil(o)),
    n
  );
}
function on(n) {
  return Math.log(n);
}
function cn(n) {
  return Math.exp(n);
}
function ln(n) {
  return -Math.log(-n);
}
function fn(n) {
  return -Math.exp(-n);
}
function sn(n) {
  return isFinite(n) ? +("1e" + n) : n < 0 ? 0 : n;
}
function pn(n) {
  return (t, r) => -n(-t, r);
}
function hn(n) {
  const t = n(on, cn),
    r = t.domain;
  let e,
    a,
    o = 10;
  function i() {
    return (
      (e = (function (n) {
        return n === Math.E
          ? Math.log
          : (10 === n && Math.log10) ||
              (2 === n && Math.log2) ||
              ((n = Math.log(n)), (t) => Math.log(t) / n);
      })(o)),
      (a = (function (n) {
        return 10 === n ? sn : n === Math.E ? Math.exp : (t) => Math.pow(n, t);
      })(o)),
      r()[0] < 0 ? ((e = pn(e)), (a = pn(a)), n(ln, fn)) : n(on, cn),
      t
    );
  }
  return (
    (t.base = function (n) {
      return arguments.length ? ((o = +n), i()) : o;
    }),
    (t.domain = function (n) {
      return arguments.length ? (r(n), i()) : r();
    }),
    (t.ticks = (n) => {
      const t = r();
      let i = t[0],
        c = t[t.length - 1];
      const l = c < i;
      l && ([i, c] = [c, i]);
      let f,
        s,
        p = e(i),
        h = e(c);
      const g = null == n ? 10 : +n;
      let m = [];
      if (!(o % 1) && h - p < g) {
        if (((p = Math.floor(p)), (h = Math.ceil(h)), i > 0)) {
          for (; p <= h; ++p)
            for (f = 1; f < o; ++f)
              if (((s = p < 0 ? f / a(-p) : f * a(p)), !(s < i))) {
                if (s > c) break;
                m.push(s);
              }
        } else
          for (; p <= h; ++p)
            for (f = o - 1; f >= 1; --f)
              if (((s = p > 0 ? f / a(-p) : f * a(p)), !(s < i))) {
                if (s > c) break;
                m.push(s);
              }
        2 * m.length < g && (m = u(i, c, g));
      } else m = u(p, h, Math.min(h - p, g)).map(a);
      return l ? m.reverse() : m;
    }),
    (t.tickFormat = (n, r) => {
      if (
        (null == n && (n = 10),
        null == r && (r = 10 === o ? "s" : ","),
        "function" != typeof r &&
          (o % 1 || null != (r = h(r)).precision || (r.trim = !0), (r = v(r))),
        n === 1 / 0)
      )
        return r;
      const u = Math.max(1, (o * n) / t.ticks().length);
      return (n) => {
        let t = n / a(Math.round(e(n)));
        return t * o < o - 0.5 && (t *= o), t <= u ? r(n) : "";
      };
    }),
    (t.nice = () =>
      r(
        an(r(), {
          floor: (n) => a(Math.floor(e(n))),
          ceil: (n) => a(Math.ceil(e(n))),
        }),
      )),
    t
  );
}
function gn() {
  const n = hn(_()).domain([1, 10]);
  return (n.copy = () => $(n, gn()).base(n.base())), B.apply(n, arguments), n;
}
function mn(n) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / n));
  };
}
function dn(n) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * n;
  };
}
function yn(n) {
  var t = 1,
    r = n(mn(t), dn(t));
  return (
    (r.constant = function (r) {
      return arguments.length ? n(mn((t = +r)), dn(t)) : t;
    }),
    rn(r)
  );
}
function vn() {
  var n = yn(_());
  return (
    (n.copy = function () {
      return $(n, vn()).constant(n.constant());
    }),
    B.apply(n, arguments)
  );
}
function Mn(n) {
  return function (t) {
    return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n);
  };
}
function wn(n) {
  return n < 0 ? -Math.sqrt(-n) : Math.sqrt(n);
}
function kn(n) {
  return n < 0 ? -n * n : n * n;
}
function Nn(n) {
  var t = n(V, V),
    r = 1;
  return (
    (t.exponent = function (t) {
      return arguments.length
        ? 1 === (r = +t)
          ? n(V, V)
          : 0.5 === r
          ? n(wn, kn)
          : n(Mn(r), Mn(1 / r))
        : r;
    }),
    rn(t)
  );
}
function xn() {
  var n = Nn(_());
  return (
    (n.copy = function () {
      return $(n, xn()).exponent(n.exponent());
    }),
    B.apply(n, arguments),
    n
  );
}
function bn() {
  return xn.apply(null, arguments).exponent(0.5);
}
function An(n) {
  return Math.sign(n) * n * n;
}
function qn() {
  var n,
    t = nn(),
    r = [0, 1],
    e = !1;
  function u(r) {
    var u = (function (n) {
      return Math.sign(n) * Math.sqrt(Math.abs(n));
    })(t(r));
    return isNaN(u) ? n : e ? Math.round(u) : u;
  }
  return (
    (u.invert = function (n) {
      return t.invert(An(n));
    }),
    (u.domain = function (n) {
      return arguments.length ? (t.domain(n), u) : t.domain();
    }),
    (u.range = function (n) {
      return arguments.length
        ? (t.range((r = Array.from(n, J)).map(An)), u)
        : r.slice();
    }),
    (u.rangeRound = function (n) {
      return u.range(n).round(!0);
    }),
    (u.round = function (n) {
      return arguments.length ? ((e = !!n), u) : e;
    }),
    (u.clamp = function (n) {
      return arguments.length ? (t.clamp(n), u) : t.clamp();
    }),
    (u.unknown = function (t) {
      return arguments.length ? ((n = t), u) : n;
    }),
    (u.copy = function () {
      return qn(t.domain(), r).round(e).clamp(t.clamp()).unknown(n);
    }),
    B.apply(u, arguments),
    rn(u)
  );
}
function Sn() {
  var n,
    t = [],
    e = [],
    u = [];
  function a() {
    var n = 0,
      r = Math.max(1, e.length);
    for (u = new Array(r - 1); ++n < r; ) u[n - 1] = i(t, n / r);
    return c;
  }
  function c(t) {
    return null == t || isNaN((t = +t)) ? n : e[r(u, t)];
  }
  return (
    (c.invertExtent = function (n) {
      var r = e.indexOf(n);
      return r < 0
        ? [NaN, NaN]
        : [r > 0 ? u[r - 1] : t[0], r < u.length ? u[r] : t[t.length - 1]];
    }),
    (c.domain = function (n) {
      if (!arguments.length) return t.slice();
      t = [];
      for (let r of n) null == r || isNaN((r = +r)) || t.push(r);
      return t.sort(o), a();
    }),
    (c.range = function (n) {
      return arguments.length ? ((e = Array.from(n)), a()) : e.slice();
    }),
    (c.unknown = function (t) {
      return arguments.length ? ((n = t), c) : n;
    }),
    (c.quantiles = function () {
      return u.slice();
    }),
    (c.copy = function () {
      return Sn().domain(t).range(e).unknown(n);
    }),
    B.apply(c, arguments)
  );
}
function Dn() {
  var n,
    t = 0,
    e = 1,
    u = 1,
    a = [0.5],
    o = [0, 1];
  function i(t) {
    return null != t && t <= t ? o[r(a, t, 0, u)] : n;
  }
  function c() {
    var n = -1;
    for (a = new Array(u); ++n < u; )
      a[n] = ((n + 1) * e - (n - u) * t) / (u + 1);
    return i;
  }
  return (
    (i.domain = function (n) {
      return arguments.length
        ? (([t, e] = n), (t = +t), (e = +e), c())
        : [t, e];
    }),
    (i.range = function (n) {
      return arguments.length
        ? ((u = (o = Array.from(n)).length - 1), c())
        : o.slice();
    }),
    (i.invertExtent = function (n) {
      var r = o.indexOf(n);
      return r < 0
        ? [NaN, NaN]
        : r < 1
        ? [t, a[0]]
        : r >= u
        ? [a[u - 1], e]
        : [a[r - 1], a[r]];
    }),
    (i.unknown = function (t) {
      return arguments.length ? ((n = t), i) : i;
    }),
    (i.thresholds = function () {
      return a.slice();
    }),
    (i.copy = function () {
      return Dn().domain([t, e]).range(o).unknown(n);
    }),
    B.apply(rn(i), arguments)
  );
}
function In() {
  var n,
    t = [0.5],
    e = [0, 1],
    u = 1;
  function a(a) {
    return null != a && a <= a ? e[r(t, a, 0, u)] : n;
  }
  return (
    (a.domain = function (n) {
      return arguments.length
        ? ((t = Array.from(n)), (u = Math.min(t.length, e.length - 1)), a)
        : t.slice();
    }),
    (a.range = function (n) {
      return arguments.length
        ? ((e = Array.from(n)), (u = Math.min(t.length, e.length - 1)), a)
        : e.slice();
    }),
    (a.invertExtent = function (n) {
      var r = e.indexOf(n);
      return [t[r - 1], t[r]];
    }),
    (a.unknown = function (t) {
      return arguments.length ? ((n = t), a) : n;
    }),
    (a.copy = function () {
      return In().domain(t).range(e).unknown(n);
    }),
    B.apply(a, arguments)
  );
}
function On(n) {
  return new Date(n);
}
function Rn(n) {
  return n instanceof Date ? +n : +new Date(+n);
}
function En(n, t, r, e, u, a, o, i, c, l) {
  var f = nn(),
    s = f.invert,
    p = f.domain,
    h = l(".%L"),
    g = l(":%S"),
    m = l("%I:%M"),
    d = l("%I %p"),
    y = l("%a %d"),
    v = l("%b %d"),
    M = l("%B"),
    w = l("%Y");
  function k(n) {
    return (
      c(n) < n
        ? h
        : i(n) < n
        ? g
        : o(n) < n
        ? m
        : a(n) < n
        ? d
        : e(n) < n
        ? u(n) < n
          ? y
          : v
        : r(n) < n
        ? M
        : w
    )(n);
  }
  return (
    (f.invert = function (n) {
      return new Date(s(n));
    }),
    (f.domain = function (n) {
      return arguments.length ? p(Array.from(n, Rn)) : p().map(On);
    }),
    (f.ticks = function (t) {
      var r = p();
      return n(r[0], r[r.length - 1], null == t ? 10 : t);
    }),
    (f.tickFormat = function (n, t) {
      return null == t ? k : l(t);
    }),
    (f.nice = function (n) {
      var r = p();
      return (
        (n && "function" == typeof n.range) ||
          (n = t(r[0], r[r.length - 1], null == n ? 10 : n)),
        n ? p(an(r, n)) : f
      );
    }),
    (f.copy = function () {
      return $(f, En(n, t, r, e, u, a, o, i, c, l));
    }),
    f
  );
}
function Ln() {
  return B.apply(
    En(S, q, A, b, x, N, k, w, M, Q).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments,
  );
}
function Fn() {
  return B.apply(
    En(T, P, F, L, E, R, O, I, D, U).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments,
  );
}
function Pn() {
  var n,
    t,
    r,
    e,
    u,
    a = 0,
    o = 1,
    i = V,
    c = !1;
  function l(t) {
    return null == t || isNaN((t = +t))
      ? u
      : i(
          0 === r
            ? 0.5
            : ((t = (e(t) - n) * r), c ? Math.max(0, Math.min(1, t)) : t),
        );
  }
  function p(n) {
    return function (t) {
      var r, e;
      return arguments.length ? (([r, e] = t), (i = n(r, e)), l) : [i(0), i(1)];
    };
  }
  return (
    (l.domain = function (u) {
      return arguments.length
        ? (([a, o] = u),
          (n = e((a = +a))),
          (t = e((o = +o))),
          (r = n === t ? 0 : 1 / (t - n)),
          l)
        : [a, o];
    }),
    (l.clamp = function (n) {
      return arguments.length ? ((c = !!n), l) : c;
    }),
    (l.interpolator = function (n) {
      return arguments.length ? ((i = n), l) : i;
    }),
    (l.range = p(f)),
    (l.rangeRound = p(s)),
    (l.unknown = function (n) {
      return arguments.length ? ((u = n), l) : u;
    }),
    function (u) {
      return (
        (e = u), (n = u(a)), (t = u(o)), (r = n === t ? 0 : 1 / (t - n)), l
      );
    }
  );
}
function Tn(n, t) {
  return t
    .domain(n.domain())
    .interpolator(n.interpolator())
    .clamp(n.clamp())
    .unknown(n.unknown());
}
function Qn() {
  var n = rn(Pn()(V));
  return (
    (n.copy = function () {
      return Tn(n, Qn());
    }),
    C.apply(n, arguments)
  );
}
function Un() {
  var n = hn(Pn()).domain([1, 10]);
  return (
    (n.copy = function () {
      return Tn(n, Un()).base(n.base());
    }),
    C.apply(n, arguments)
  );
}
function Bn() {
  var n = yn(Pn());
  return (
    (n.copy = function () {
      return Tn(n, Bn()).constant(n.constant());
    }),
    C.apply(n, arguments)
  );
}
function Cn() {
  var n = Nn(Pn());
  return (
    (n.copy = function () {
      return Tn(n, Cn()).exponent(n.exponent());
    }),
    C.apply(n, arguments)
  );
}
function zn() {
  return Cn.apply(null, arguments).exponent(0.5);
}
function Yn() {
  var n = [],
    t = V;
  function e(e) {
    if (null != e && !isNaN((e = +e)))
      return t((r(n, e, 1) - 1) / (n.length - 1));
  }
  return (
    (e.domain = function (t) {
      if (!arguments.length) return n.slice();
      n = [];
      for (let r of t) null == r || isNaN((r = +r)) || n.push(r);
      return n.sort(o), e;
    }),
    (e.interpolator = function (n) {
      return arguments.length ? ((t = n), e) : t;
    }),
    (e.range = function () {
      return n.map((r, e) => t(e / (n.length - 1)));
    }),
    (e.quantiles = function (t) {
      return Array.from({ length: t + 1 }, (r, e) => c(n, e / t));
    }),
    (e.copy = function () {
      return Yn(t).domain(n);
    }),
    C.apply(e, arguments)
  );
}
function jn() {
  var n,
    t,
    r,
    e,
    u,
    a,
    o,
    i = 0,
    c = 0.5,
    l = 1,
    h = 1,
    g = V,
    m = !1;
  function d(n) {
    return isNaN((n = +n))
      ? o
      : ((n = 0.5 + ((n = +a(n)) - t) * (h * n < h * t ? e : u)),
        g(m ? Math.max(0, Math.min(1, n)) : n));
  }
  function y(n) {
    return function (t) {
      var r, e, u;
      return arguments.length
        ? (([r, e, u] = t), (g = p(n, [r, e, u])), d)
        : [g(0), g(0.5), g(1)];
    };
  }
  return (
    (d.domain = function (o) {
      return arguments.length
        ? (([i, c, l] = o),
          (n = a((i = +i))),
          (t = a((c = +c))),
          (r = a((l = +l))),
          (e = n === t ? 0 : 0.5 / (t - n)),
          (u = t === r ? 0 : 0.5 / (r - t)),
          (h = t < n ? -1 : 1),
          d)
        : [i, c, l];
    }),
    (d.clamp = function (n) {
      return arguments.length ? ((m = !!n), d) : m;
    }),
    (d.interpolator = function (n) {
      return arguments.length ? ((g = n), d) : g;
    }),
    (d.range = y(f)),
    (d.rangeRound = y(s)),
    (d.unknown = function (n) {
      return arguments.length ? ((o = n), d) : o;
    }),
    function (o) {
      return (
        (a = o),
        (n = o(i)),
        (t = o(c)),
        (r = o(l)),
        (e = n === t ? 0 : 0.5 / (t - n)),
        (u = t === r ? 0 : 0.5 / (r - t)),
        (h = t < n ? -1 : 1),
        d
      );
    }
  );
}
function Gn() {
  var n = rn(jn()(V));
  return (
    (n.copy = function () {
      return Tn(n, Gn());
    }),
    C.apply(n, arguments)
  );
}
function Hn() {
  var n = hn(jn()).domain([0.1, 1, 10]);
  return (
    (n.copy = function () {
      return Tn(n, Hn()).base(n.base());
    }),
    C.apply(n, arguments)
  );
}
function Jn() {
  var n = yn(jn());
  return (
    (n.copy = function () {
      return Tn(n, Jn()).constant(n.constant());
    }),
    C.apply(n, arguments)
  );
}
function Kn() {
  var n = Nn(jn());
  return (
    (n.copy = function () {
      return Tn(n, Kn()).exponent(n.exponent());
    }),
    C.apply(n, arguments)
  );
}
function Vn() {
  return Kn.apply(null, arguments).exponent(0.5);
}
export {
  j as scaleBand,
  Gn as scaleDiverging,
  Hn as scaleDivergingLog,
  Kn as scaleDivergingPow,
  Vn as scaleDivergingSqrt,
  Jn as scaleDivergingSymlog,
  un as scaleIdentity,
  z as scaleImplicit,
  en as scaleLinear,
  gn as scaleLog,
  Y as scaleOrdinal,
  H as scalePoint,
  xn as scalePow,
  Sn as scaleQuantile,
  Dn as scaleQuantize,
  qn as scaleRadial,
  Qn as scaleSequential,
  Un as scaleSequentialLog,
  Cn as scaleSequentialPow,
  Yn as scaleSequentialQuantile,
  zn as scaleSequentialSqrt,
  Bn as scaleSequentialSymlog,
  bn as scaleSqrt,
  vn as scaleSymlog,
  In as scaleThreshold,
  Ln as scaleTime,
  Fn as scaleUtc,
  tn as tickFormat,
};
export default null;
