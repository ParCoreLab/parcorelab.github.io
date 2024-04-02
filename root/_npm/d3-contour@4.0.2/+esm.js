/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/d3-contour@4.0.2/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import {
  thresholdSturges as r,
  extent as n,
  ticks as t,
  nice as o,
  blur2 as e,
  max as i,
} from "../d3-array@3.2.4/+esm.js";
var u = Array.prototype.slice;
function a(r, n) {
  return r - n;
}
var f = (r) => () => r;
function c(r, n) {
  for (var t, o = -1, e = n.length; ++o < e; ) if ((t = h(r, n[o]))) return t;
  return 0;
}
function h(r, n) {
  for (
    var t = n[0], o = n[1], e = -1, i = 0, u = r.length, a = u - 1;
    i < u;
    a = i++
  ) {
    var f = r[i],
      c = f[0],
      h = f[1],
      l = r[a],
      d = l[0],
      g = l[1];
    if (s(f, l, n)) return 0;
    h > o != g > o && t < ((d - c) * (o - h)) / (g - h) + c && (e = -e);
  }
  return e;
}
function s(r, n, t) {
  var o, e, i, u;
  return (
    (function (r, n, t) {
      return (n[0] - r[0]) * (t[1] - r[1]) == (t[0] - r[0]) * (n[1] - r[1]);
    })(r, n, t) &&
    ((e = r[(o = +(r[0] === n[0]))]),
    (i = t[o]),
    (u = n[o]),
    (e <= i && i <= u) || (u <= i && i <= e))
  );
}
function l() {}
var d = [
  [],
  [
    [
      [1, 1.5],
      [0.5, 1],
    ],
  ],
  [
    [
      [1.5, 1],
      [1, 1.5],
    ],
  ],
  [
    [
      [1.5, 1],
      [0.5, 1],
    ],
  ],
  [
    [
      [1, 0.5],
      [1.5, 1],
    ],
  ],
  [
    [
      [1, 1.5],
      [0.5, 1],
    ],
    [
      [1, 0.5],
      [1.5, 1],
    ],
  ],
  [
    [
      [1, 0.5],
      [1, 1.5],
    ],
  ],
  [
    [
      [1, 0.5],
      [0.5, 1],
    ],
  ],
  [
    [
      [0.5, 1],
      [1, 0.5],
    ],
  ],
  [
    [
      [1, 1.5],
      [1, 0.5],
    ],
  ],
  [
    [
      [0.5, 1],
      [1, 0.5],
    ],
    [
      [1.5, 1],
      [1, 1.5],
    ],
  ],
  [
    [
      [1.5, 1],
      [1, 0.5],
    ],
  ],
  [
    [
      [0.5, 1],
      [1.5, 1],
    ],
  ],
  [
    [
      [1, 1.5],
      [1.5, 1],
    ],
  ],
  [
    [
      [0.5, 1],
      [1, 1.5],
    ],
  ],
  [],
];
function g() {
  var e = 1,
    i = 1,
    h = r,
    s = A;
  function g(r) {
    var e = h(r);
    if (Array.isArray(e)) e = e.slice().sort(a);
    else {
      const i = n(r, v);
      for (e = t(...o(i[0], i[1], e), e); e[e.length - 1] >= i[1]; ) e.pop();
      for (; e[1] < i[0]; ) e.shift();
    }
    return e.map((n) => E(r, n));
  }
  function E(r, n) {
    const t = null == n ? NaN : +n;
    if (isNaN(t)) throw new Error(`invalid value: ${n}`);
    var o = [],
      u = [];
    return (
      (function (r, n, t) {
        var o,
          u,
          a,
          f,
          c,
          h,
          s = new Array(),
          l = new Array();
        (o = u = -1), (f = p(r[0], n)), d[f << 1].forEach(g);
        for (; ++o < e - 1; )
          (a = f), (f = p(r[o + 1], n)), d[a | (f << 1)].forEach(g);
        d[f << 0].forEach(g);
        for (; ++u < i - 1; ) {
          for (
            o = -1,
              f = p(r[u * e + e], n),
              c = p(r[u * e], n),
              d[(f << 1) | (c << 2)].forEach(g);
            ++o < e - 1;

          )
            (a = f),
              (f = p(r[u * e + e + o + 1], n)),
              (h = c),
              (c = p(r[u * e + o + 1], n)),
              d[a | (f << 1) | (c << 2) | (h << 3)].forEach(g);
          d[f | (c << 3)].forEach(g);
        }
        (o = -1), (c = r[u * e] >= n), d[c << 2].forEach(g);
        for (; ++o < e - 1; )
          (h = c),
            (c = p(r[u * e + o + 1], n)),
            d[(c << 2) | (h << 3)].forEach(g);
        function g(r) {
          var n,
            e,
            i = [r[0][0] + o, r[0][1] + u],
            a = [r[1][0] + o, r[1][1] + u],
            f = M(i),
            c = M(a);
          (n = l[f])
            ? (e = s[c])
              ? (delete l[n.end],
                delete s[e.start],
                n === e
                  ? (n.ring.push(a), t(n.ring))
                  : (s[n.start] = l[e.end] =
                      {
                        start: n.start,
                        end: e.end,
                        ring: n.ring.concat(e.ring),
                      }))
              : (delete l[n.end], n.ring.push(a), (l[(n.end = c)] = n))
            : (n = s[c])
            ? (e = l[f])
              ? (delete s[n.start],
                delete l[e.end],
                n === e
                  ? (n.ring.push(a), t(n.ring))
                  : (s[e.start] = l[n.end] =
                      {
                        start: e.start,
                        end: n.end,
                        ring: e.ring.concat(n.ring),
                      }))
              : (delete s[n.start], n.ring.unshift(i), (s[(n.start = f)] = n))
            : (s[f] = l[c] = { start: f, end: c, ring: [i, a] });
        }
        d[c << 3].forEach(g);
      })(r, t, function (n) {
        s(n, r, t),
          (function (r) {
            for (
              var n = 0,
                t = r.length,
                o = r[t - 1][1] * r[0][0] - r[t - 1][0] * r[0][1];
              ++n < t;

            )
              o += r[n - 1][1] * r[n][0] - r[n - 1][0] * r[n][1];
            return o;
          })(n) > 0
            ? o.push([n])
            : u.push(n);
      }),
      u.forEach(function (r) {
        for (var n, t = 0, e = o.length; t < e; ++t)
          if (-1 !== c((n = o[t])[0], r)) return void n.push(r);
      }),
      { type: "MultiPolygon", value: n, coordinates: o }
    );
  }
  function M(r) {
    return 2 * r[0] + r[1] * (e + 1) * 4;
  }
  function A(r, n, t) {
    r.forEach(function (r) {
      var o = r[0],
        u = r[1],
        a = 0 | o,
        f = 0 | u,
        c = y(n[f * e + a]);
      o > 0 && o < e && a === o && (r[0] = w(o, y(n[f * e + a - 1]), c, t)),
        u > 0 && u < i && f === u && (r[1] = w(u, y(n[(f - 1) * e + a]), c, t));
    });
  }
  return (
    (g.contour = E),
    (g.size = function (r) {
      if (!arguments.length) return [e, i];
      var n = Math.floor(r[0]),
        t = Math.floor(r[1]);
      if (!(n >= 0 && t >= 0)) throw new Error("invalid size");
      return (e = n), (i = t), g;
    }),
    (g.thresholds = function (r) {
      return arguments.length
        ? ((h =
            "function" == typeof r
              ? r
              : Array.isArray(r)
              ? f(u.call(r))
              : f(r)),
          g)
        : h;
    }),
    (g.smooth = function (r) {
      return arguments.length ? ((s = r ? A : l), g) : s === A;
    }),
    g
  );
}
function v(r) {
  return isFinite(r) ? r : NaN;
}
function p(r, n) {
  return null != r && +r >= n;
}
function y(r) {
  return null == r || isNaN((r = +r)) ? -1 / 0 : r;
}
function w(r, n, t, o) {
  const e = o - n,
    i = t - n,
    u = isFinite(e) || isFinite(i) ? e / i : Math.sign(e) / Math.sign(i);
  return isNaN(u) ? r : r + u - 0.5;
}
function E(r) {
  return r[0];
}
function M(r) {
  return r[1];
}
function A() {
  return 1;
}
function N() {
  var r = E,
    n = M,
    o = A,
    a = 960,
    c = 500,
    h = 20,
    s = 2,
    l = 3 * h,
    d = (a + 2 * l) >> s,
    v = (c + 2 * l) >> s,
    p = f(20);
  function y(t) {
    var i = new Float32Array(d * v),
      u = Math.pow(2, -s),
      a = -1;
    for (const e of t) {
      var f = (r(e, ++a, t) + l) * u,
        c = (n(e, a, t) + l) * u,
        g = +o(e, a, t);
      if (g && f >= 0 && f < d && c >= 0 && c < v) {
        var p = Math.floor(f),
          y = Math.floor(c),
          w = f - p - 0.5,
          E = c - y - 0.5;
        (i[p + y * d] += (1 - w) * (1 - E) * g),
          (i[p + 1 + y * d] += w * (1 - E) * g),
          (i[p + 1 + (y + 1) * d] += w * E * g),
          (i[p + (y + 1) * d] += (1 - w) * E * g);
      }
    }
    return e({ data: i, width: d, height: v }, h * u), i;
  }
  function w(r) {
    var n = y(r),
      o = p(n),
      e = Math.pow(2, 2 * s);
    return (
      Array.isArray(o) || (o = t(Number.MIN_VALUE, i(n) / e, o)),
      g()
        .size([d, v])
        .thresholds(o.map((r) => r * e))(n)
        .map((r, n) => ((r.value = +o[n]), N(r)))
    );
  }
  function N(r) {
    return r.coordinates.forEach(m), r;
  }
  function m(r) {
    r.forEach(z);
  }
  function z(r) {
    r.forEach(b);
  }
  function b(r) {
    (r[0] = r[0] * Math.pow(2, s) - l), (r[1] = r[1] * Math.pow(2, s) - l);
  }
  function x() {
    return (d = (a + 2 * (l = 3 * h)) >> s), (v = (c + 2 * l) >> s), w;
  }
  return (
    (w.contours = function (r) {
      var n = y(r),
        t = g().size([d, v]),
        o = Math.pow(2, 2 * s),
        e = (r) => {
          r = +r;
          var e = N(t.contour(n, r * o));
          return (e.value = r), e;
        };
      return Object.defineProperty(e, "max", { get: () => i(n) / o }), e;
    }),
    (w.x = function (n) {
      return arguments.length
        ? ((r = "function" == typeof n ? n : f(+n)), w)
        : r;
    }),
    (w.y = function (r) {
      return arguments.length
        ? ((n = "function" == typeof r ? r : f(+r)), w)
        : n;
    }),
    (w.weight = function (r) {
      return arguments.length
        ? ((o = "function" == typeof r ? r : f(+r)), w)
        : o;
    }),
    (w.size = function (r) {
      if (!arguments.length) return [a, c];
      var n = +r[0],
        t = +r[1];
      if (!(n >= 0 && t >= 0)) throw new Error("invalid size");
      return (a = n), (c = t), x();
    }),
    (w.cellSize = function (r) {
      if (!arguments.length) return 1 << s;
      if (!((r = +r) >= 1)) throw new Error("invalid cell size");
      return (s = Math.floor(Math.log(r) / Math.LN2)), x();
    }),
    (w.thresholds = function (r) {
      return arguments.length
        ? ((p =
            "function" == typeof r
              ? r
              : Array.isArray(r)
              ? f(u.call(r))
              : f(r)),
          w)
        : p;
    }),
    (w.bandwidth = function (r) {
      if (!arguments.length) return Math.sqrt(h * (h + 1));
      if (!((r = +r) >= 0)) throw new Error("invalid bandwidth");
      return (h = (Math.sqrt(4 * r * r + 1) - 1) / 2), x();
    }),
    w
  );
}
export { N as contourDensity, g as contours };
export default null;
