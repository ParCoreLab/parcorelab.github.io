/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/d3-chord@3.0.1/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import { path as n } from "../d3-path@3.1.0/+esm.js";
var t = Math.abs,
  e = Math.cos,
  r = Math.sin,
  u = Math.PI,
  l = u / 2,
  o = 2 * u,
  a = Math.max,
  i = 1e-12;
function c(n, t) {
  return Array.from({ length: t - n }, (t, e) => n + e);
}
function f() {
  return p(!1, !1);
}
function s() {
  return p(!1, !0);
}
function g() {
  return p(!0, !1);
}
function p(n, t) {
  var e = 0,
    r = null,
    u = null,
    l = null;
  function i(i) {
    var f,
      s = i.length,
      g = new Array(s),
      p = c(0, s),
      h = new Array(s * s),
      d = new Array(s),
      v = 0;
    i = Float64Array.from(
      { length: s * s },
      t ? (n, t) => i[t % s][(t / s) | 0] : (n, t) => i[(t / s) | 0][t % s],
    );
    for (let t = 0; t < s; ++t) {
      let e = 0;
      for (let r = 0; r < s; ++r) e += i[t * s + r] + n * i[r * s + t];
      v += g[t] = e;
    }
    f = (v = a(0, o - e * s) / v) ? e : o / s;
    {
      let t = 0;
      r && p.sort((n, t) => r(g[n], g[t]));
      for (const e of p) {
        const r = t;
        if (n) {
          const n = c(1 + ~s, s).filter((n) =>
            n < 0 ? i[~n * s + e] : i[e * s + n],
          );
          u &&
            n.sort((n, t) =>
              u(
                n < 0 ? -i[~n * s + e] : i[e * s + n],
                t < 0 ? -i[~t * s + e] : i[e * s + t],
              ),
            );
          for (const r of n)
            if (r < 0) {
              (
                h[~r * s + e] ||
                (h[~r * s + e] = { source: null, target: null })
              ).target = {
                index: e,
                startAngle: t,
                endAngle: (t += i[~r * s + e] * v),
                value: i[~r * s + e],
              };
            } else {
              (
                h[e * s + r] || (h[e * s + r] = { source: null, target: null })
              ).source = {
                index: e,
                startAngle: t,
                endAngle: (t += i[e * s + r] * v),
                value: i[e * s + r],
              };
            }
          d[e] = { index: e, startAngle: r, endAngle: t, value: g[e] };
        } else {
          const n = c(0, s).filter((n) => i[e * s + n] || i[n * s + e]);
          u && n.sort((n, t) => u(i[e * s + n], i[e * s + t]));
          for (const r of n) {
            let n;
            if (
              (e < r
                ? ((n =
                    h[e * s + r] ||
                    (h[e * s + r] = { source: null, target: null })),
                  (n.source = {
                    index: e,
                    startAngle: t,
                    endAngle: (t += i[e * s + r] * v),
                    value: i[e * s + r],
                  }))
                : ((n =
                    h[r * s + e] ||
                    (h[r * s + e] = { source: null, target: null })),
                  (n.target = {
                    index: e,
                    startAngle: t,
                    endAngle: (t += i[e * s + r] * v),
                    value: i[e * s + r],
                  }),
                  e === r && (n.source = n.target)),
              n.source && n.target && n.source.value < n.target.value)
            ) {
              const t = n.source;
              (n.source = n.target), (n.target = t);
            }
          }
          d[e] = { index: e, startAngle: r, endAngle: t, value: g[e] };
        }
        t += f;
      }
    }
    return ((h = Object.values(h)).groups = d), l ? h.sort(l) : h;
  }
  return (
    (i.padAngle = function (n) {
      return arguments.length ? ((e = a(0, n)), i) : e;
    }),
    (i.sortGroups = function (n) {
      return arguments.length ? ((r = n), i) : r;
    }),
    (i.sortSubgroups = function (n) {
      return arguments.length ? ((u = n), i) : u;
    }),
    (i.sortChords = function (n) {
      return arguments.length
        ? (null == n
            ? (l = null)
            : (((t = n),
              (l = function (n, e) {
                return t(
                  n.source.value + n.target.value,
                  e.source.value + e.target.value,
                );
              }))._ = n),
          i)
        : l && l._;
      var t;
    }),
    i
  );
}
var h = Array.prototype.slice;
function d(n) {
  return function () {
    return n;
  };
}
function v(n) {
  return n.source;
}
function y(n) {
  return n.target;
}
function A(n) {
  return n.radius;
}
function x(n) {
  return n.startAngle;
}
function m(n) {
  return n.endAngle;
}
function T() {
  return 0;
}
function b() {
  return 10;
}
function M(u) {
  var o = v,
    a = y,
    c = A,
    f = A,
    s = x,
    g = m,
    p = T,
    b = null;
  function M() {
    var d,
      v = o.apply(this, arguments),
      y = a.apply(this, arguments),
      A = p.apply(this, arguments) / 2,
      x = h.call(arguments),
      m = +c.apply(this, ((x[0] = v), x)),
      T = s.apply(this, x) - l,
      M = g.apply(this, x) - l,
      C = +f.apply(this, ((x[0] = y), x)),
      q = s.apply(this, x) - l,
      w = g.apply(this, x) - l;
    if (
      (b || (b = d = n()),
      A > i &&
        (t(M - T) > 2 * A + i
          ? M > T
            ? ((T += A), (M -= A))
            : ((T -= A), (M += A))
          : (T = M = (T + M) / 2),
        t(w - q) > 2 * A + i
          ? w > q
            ? ((q += A), (w -= A))
            : ((q -= A), (w += A))
          : (q = w = (q + w) / 2)),
      b.moveTo(m * e(T), m * r(T)),
      b.arc(0, 0, m, T, M),
      T !== q || M !== w)
    )
      if (u) {
        var R = C - +u.apply(this, arguments),
          P = (q + w) / 2;
        b.quadraticCurveTo(0, 0, R * e(q), R * r(q)),
          b.lineTo(C * e(P), C * r(P)),
          b.lineTo(R * e(w), R * r(w));
      } else b.quadraticCurveTo(0, 0, C * e(q), C * r(q)), b.arc(0, 0, C, q, w);
    if ((b.quadraticCurveTo(0, 0, m * e(T), m * r(T)), b.closePath(), d))
      return (b = null), d + "" || null;
  }
  return (
    u &&
      (M.headRadius = function (n) {
        return arguments.length
          ? ((u = "function" == typeof n ? n : d(+n)), M)
          : u;
      }),
    (M.radius = function (n) {
      return arguments.length
        ? ((c = f = "function" == typeof n ? n : d(+n)), M)
        : c;
    }),
    (M.sourceRadius = function (n) {
      return arguments.length
        ? ((c = "function" == typeof n ? n : d(+n)), M)
        : c;
    }),
    (M.targetRadius = function (n) {
      return arguments.length
        ? ((f = "function" == typeof n ? n : d(+n)), M)
        : f;
    }),
    (M.startAngle = function (n) {
      return arguments.length
        ? ((s = "function" == typeof n ? n : d(+n)), M)
        : s;
    }),
    (M.endAngle = function (n) {
      return arguments.length
        ? ((g = "function" == typeof n ? n : d(+n)), M)
        : g;
    }),
    (M.padAngle = function (n) {
      return arguments.length
        ? ((p = "function" == typeof n ? n : d(+n)), M)
        : p;
    }),
    (M.source = function (n) {
      return arguments.length ? ((o = n), M) : o;
    }),
    (M.target = function (n) {
      return arguments.length ? ((a = n), M) : a;
    }),
    (M.context = function (n) {
      return arguments.length ? ((b = null == n ? null : n), M) : b;
    }),
    M
  );
}
function C() {
  return M();
}
function q() {
  return M(b);
}
export {
  f as chord,
  g as chordDirected,
  s as chordTranspose,
  C as ribbon,
  q as ribbonArrow,
};
export default null;
