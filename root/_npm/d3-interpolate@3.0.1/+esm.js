/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/d3-interpolate@3.0.1/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import {
  rgb as t,
  color as n,
  hsl as r,
  lab as e,
  hcl as a,
  cubehelix as o,
} from "../d3-color@3.1.0/+esm.js";
function u(t, n, r, e, a) {
  var o = t * t,
    u = o * t;
  return (
    ((1 - 3 * t + 3 * o - u) * n +
      (4 - 6 * o + 3 * u) * r +
      (1 + 3 * t + 3 * o - 3 * u) * e +
      u * a) /
    6
  );
}
function i(t) {
  var n = t.length - 1;
  return function (r) {
    var e = r <= 0 ? (r = 0) : r >= 1 ? ((r = 1), n - 1) : Math.floor(r * n),
      a = t[e],
      o = t[e + 1],
      i = e > 0 ? t[e - 1] : 2 * a - o,
      c = e < n - 1 ? t[e + 2] : 2 * o - a;
    return u((r - e / n) * n, i, a, o, c);
  };
}
function c(t) {
  var n = t.length;
  return function (r) {
    var e = Math.floor(((r %= 1) < 0 ? ++r : r) * n),
      a = t[(e + n - 1) % n],
      o = t[e % n],
      i = t[(e + 1) % n],
      c = t[(e + 2) % n];
    return u((r - e / n) * n, a, o, i, c);
  };
}
var l = (t) => () => t;
function s(t, n) {
  return function (r) {
    return t + r * n;
  };
}
function f(t, n) {
  var r = n - t;
  return r
    ? s(t, r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r)
    : l(isNaN(t) ? n : t);
}
function h(t) {
  return 1 == (t = +t)
    ? p
    : function (n, r) {
        return r - n
          ? (function (t, n, r) {
              return (
                (t = Math.pow(t, r)),
                (n = Math.pow(n, r) - t),
                (r = 1 / r),
                function (e) {
                  return Math.pow(t + e * n, r);
                }
              );
            })(n, r, t)
          : l(isNaN(n) ? r : n);
      };
}
function p(t, n) {
  var r = n - t;
  return r ? s(t, r) : l(isNaN(t) ? n : t);
}
var v = (function n(r) {
  var e = h(r);
  function a(n, r) {
    var a = e((n = t(n)).r, (r = t(r)).r),
      o = e(n.g, r.g),
      u = e(n.b, r.b),
      i = p(n.opacity, r.opacity);
    return function (t) {
      return (
        (n.r = a(t)), (n.g = o(t)), (n.b = u(t)), (n.opacity = i(t)), n + ""
      );
    };
  }
  return (a.gamma = n), a;
})(1);
function g(n) {
  return function (r) {
    var e,
      a,
      o = r.length,
      u = new Array(o),
      i = new Array(o),
      c = new Array(o);
    for (e = 0; e < o; ++e)
      (a = t(r[e])), (u[e] = a.r || 0), (i[e] = a.g || 0), (c[e] = a.b || 0);
    return (
      (u = n(u)),
      (i = n(i)),
      (c = n(c)),
      (a.opacity = 1),
      function (t) {
        return (a.r = u(t)), (a.g = i(t)), (a.b = c(t)), a + "";
      }
    );
  };
}
var M = g(i),
  x = g(c);
function y(t, n) {
  n || (n = []);
  var r,
    e = t ? Math.min(n.length, t.length) : 0,
    a = n.slice();
  return function (o) {
    for (r = 0; r < e; ++r) a[r] = t[r] * (1 - o) + n[r] * o;
    return a;
  };
}
function b(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function w(t, n) {
  return (b(n) ? y : m)(t, n);
}
function m(t, n) {
  var r,
    e = n ? n.length : 0,
    a = t ? Math.min(e, t.length) : 0,
    o = new Array(a),
    u = new Array(e);
  for (r = 0; r < a; ++r) o[r] = R(t[r], n[r]);
  for (; r < e; ++r) u[r] = n[r];
  return function (t) {
    for (r = 0; r < a; ++r) u[r] = o[r](t);
    return u;
  };
}
function d(t, n) {
  var r = new Date();
  return (
    (t = +t),
    (n = +n),
    function (e) {
      return r.setTime(t * (1 - e) + n * e), r;
    }
  );
}
function X(t, n) {
  return (
    (t = +t),
    (n = +n),
    function (r) {
      return t * (1 - r) + n * r;
    }
  );
}
function A(t, n) {
  var r,
    e = {},
    a = {};
  for (r in ((null !== t && "object" == typeof t) || (t = {}),
  (null !== n && "object" == typeof n) || (n = {}),
  n))
    r in t ? (e[r] = R(t[r], n[r])) : (a[r] = n[r]);
  return function (t) {
    for (r in e) a[r] = e[r](t);
    return a;
  };
}
var N = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  Y = new RegExp(N.source, "g");
function D(t, n) {
  var r,
    e,
    a,
    o = (N.lastIndex = Y.lastIndex = 0),
    u = -1,
    i = [],
    c = [];
  for (t += "", n += ""; (r = N.exec(t)) && (e = Y.exec(n)); )
    (a = e.index) > o &&
      ((a = n.slice(o, a)), i[u] ? (i[u] += a) : (i[++u] = a)),
      (r = r[0]) === (e = e[0])
        ? i[u]
          ? (i[u] += e)
          : (i[++u] = e)
        : ((i[++u] = null), c.push({ i: u, x: X(r, e) })),
      (o = Y.lastIndex);
  return (
    o < n.length && ((a = n.slice(o)), i[u] ? (i[u] += a) : (i[++u] = a)),
    i.length < 2
      ? c[0]
        ? (function (t) {
            return function (n) {
              return t(n) + "";
            };
          })(c[0].x)
        : (function (t) {
            return function () {
              return t;
            };
          })(n)
      : ((n = c.length),
        function (t) {
          for (var r, e = 0; e < n; ++e) i[(r = c[e]).i] = r.x(t);
          return i.join("");
        })
  );
}
function R(t, r) {
  var e,
    a = typeof r;
  return null == r || "boolean" === a
    ? l(r)
    : ("number" === a
        ? X
        : "string" === a
        ? (e = n(r))
          ? ((r = e), v)
          : D
        : r instanceof n
        ? v
        : r instanceof Date
        ? d
        : b(r)
        ? y
        : Array.isArray(r)
        ? m
        : ("function" != typeof r.valueOf && "function" != typeof r.toString) ||
          isNaN(r)
        ? A
        : X)(t, r);
}
function S(t) {
  var n = t.length;
  return function (r) {
    return t[Math.max(0, Math.min(n - 1, Math.floor(r * n)))];
  };
}
function k(t, n) {
  var r = f(+t, +n);
  return function (t) {
    var n = r(t);
    return n - 360 * Math.floor(n / 360);
  };
}
function j(t, n) {
  return (
    (t = +t),
    (n = +n),
    function (r) {
      return Math.round(t * (1 - r) + n * r);
    }
  );
}
var q,
  B = 180 / Math.PI,
  C = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1,
  };
function H(t, n, r, e, a, o) {
  var u, i, c;
  return (
    (u = Math.sqrt(t * t + n * n)) && ((t /= u), (n /= u)),
    (c = t * r + n * e) && ((r -= t * c), (e -= n * c)),
    (i = Math.sqrt(r * r + e * e)) && ((r /= i), (e /= i), (c /= i)),
    t * e < n * r && ((t = -t), (n = -n), (c = -c), (u = -u)),
    {
      translateX: a,
      translateY: o,
      rotate: Math.atan2(n, t) * B,
      skewX: Math.atan(c) * B,
      scaleX: u,
      scaleY: i,
    }
  );
}
function I(t, n, r, e) {
  function a(t) {
    return t.length ? t.pop() + " " : "";
  }
  return function (o, u) {
    var i = [],
      c = [];
    return (
      (o = t(o)),
      (u = t(u)),
      (function (t, e, a, o, u, i) {
        if (t !== a || e !== o) {
          var c = u.push("translate(", null, n, null, r);
          i.push({ i: c - 4, x: X(t, a) }, { i: c - 2, x: X(e, o) });
        } else (a || o) && u.push("translate(" + a + n + o + r);
      })(o.translateX, o.translateY, u.translateX, u.translateY, i, c),
      (function (t, n, r, o) {
        t !== n
          ? (t - n > 180 ? (n += 360) : n - t > 180 && (t += 360),
            o.push({ i: r.push(a(r) + "rotate(", null, e) - 2, x: X(t, n) }))
          : n && r.push(a(r) + "rotate(" + n + e);
      })(o.rotate, u.rotate, i, c),
      (function (t, n, r, o) {
        t !== n
          ? o.push({ i: r.push(a(r) + "skewX(", null, e) - 2, x: X(t, n) })
          : n && r.push(a(r) + "skewX(" + n + e);
      })(o.skewX, u.skewX, i, c),
      (function (t, n, r, e, o, u) {
        if (t !== r || n !== e) {
          var i = o.push(a(o) + "scale(", null, ",", null, ")");
          u.push({ i: i - 4, x: X(t, r) }, { i: i - 2, x: X(n, e) });
        } else
          (1 === r && 1 === e) || o.push(a(o) + "scale(" + r + "," + e + ")");
      })(o.scaleX, o.scaleY, u.scaleX, u.scaleY, i, c),
      (o = u = null),
      function (t) {
        for (var n, r = -1, e = c.length; ++r < e; ) i[(n = c[r]).i] = n.x(t);
        return i.join("");
      }
    );
  };
}
var L = I(
    function (t) {
      const n = new (
        "function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix
      )(t + "");
      return n.isIdentity ? C : H(n.a, n.b, n.c, n.d, n.e, n.f);
    },
    "px, ",
    "px)",
    "deg)",
  ),
  O = I(
    function (t) {
      return null == t
        ? C
        : (q ||
            (q = document.createElementNS("http://www.w3.org/2000/svg", "g")),
          q.setAttribute("transform", t),
          (t = q.transform.baseVal.consolidate())
            ? H((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f)
            : C);
    },
    ", ",
    ")",
    ")",
  );
function E(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
var T = (function t(n, r, e) {
  function a(t, a) {
    var o,
      u,
      i = t[0],
      c = t[1],
      l = t[2],
      s = a[0],
      f = a[1],
      h = a[2],
      p = s - i,
      v = f - c,
      g = p * p + v * v;
    if (g < 1e-12)
      (u = Math.log(h / l) / n),
        (o = function (t) {
          return [i + t * p, c + t * v, l * Math.exp(n * t * u)];
        });
    else {
      var M = Math.sqrt(g),
        x = (h * h - l * l + e * g) / (2 * l * r * M),
        y = (h * h - l * l - e * g) / (2 * h * r * M),
        b = Math.log(Math.sqrt(x * x + 1) - x),
        w = Math.log(Math.sqrt(y * y + 1) - y);
      (u = (w - b) / n),
        (o = function (t) {
          var e,
            a = t * u,
            o = E(b),
            s =
              (l / (r * M)) *
              (o * ((e = n * a + b), ((e = Math.exp(2 * e)) - 1) / (e + 1)) -
                (function (t) {
                  return ((t = Math.exp(t)) - 1 / t) / 2;
                })(b));
          return [i + s * p, c + s * v, (l * o) / E(n * a + b)];
        });
    }
    return (o.duration = (1e3 * u * n) / Math.SQRT2), o;
  }
  return (
    (a.rho = function (n) {
      var r = Math.max(0.001, +n),
        e = r * r;
      return t(r, e, e * e);
    }),
    a
  );
})(Math.SQRT2, 2, 4);
function V(t) {
  return function (n, e) {
    var a = t((n = r(n)).h, (e = r(e)).h),
      o = p(n.s, e.s),
      u = p(n.l, e.l),
      i = p(n.opacity, e.opacity);
    return function (t) {
      return (
        (n.h = a(t)), (n.s = o(t)), (n.l = u(t)), (n.opacity = i(t)), n + ""
      );
    };
  };
}
var Q = V(f),
  K = V(p);
function P(t, n) {
  var r = p((t = e(t)).l, (n = e(n)).l),
    a = p(t.a, n.a),
    o = p(t.b, n.b),
    u = p(t.opacity, n.opacity);
  return function (n) {
    return (t.l = r(n)), (t.a = a(n)), (t.b = o(n)), (t.opacity = u(n)), t + "";
  };
}
function W(t) {
  return function (n, r) {
    var e = t((n = a(n)).h, (r = a(r)).h),
      o = p(n.c, r.c),
      u = p(n.l, r.l),
      i = p(n.opacity, r.opacity);
    return function (t) {
      return (
        (n.h = e(t)), (n.c = o(t)), (n.l = u(t)), (n.opacity = i(t)), n + ""
      );
    };
  };
}
var Z = W(f),
  z = W(p);
function F(t) {
  return (function n(r) {
    function e(n, e) {
      var a = t((n = o(n)).h, (e = o(e)).h),
        u = p(n.s, e.s),
        i = p(n.l, e.l),
        c = p(n.opacity, e.opacity);
      return function (t) {
        return (
          (n.h = a(t)),
          (n.s = u(t)),
          (n.l = i(Math.pow(t, r))),
          (n.opacity = c(t)),
          n + ""
        );
      };
    }
    return (r = +r), (e.gamma = n), e;
  })(1);
}
var G = F(f),
  J = F(p);
function U(t, n) {
  void 0 === n && ((n = t), (t = R));
  for (
    var r = 0, e = n.length - 1, a = n[0], o = new Array(e < 0 ? 0 : e);
    r < e;

  )
    o[r] = t(a, (a = n[++r]));
  return function (t) {
    var n = Math.max(0, Math.min(e - 1, Math.floor((t *= e))));
    return o[n](t - n);
  };
}
function $(t, n) {
  for (var r = new Array(n), e = 0; e < n; ++e) r[e] = t(e / (n - 1));
  return r;
}
export {
  R as interpolate,
  w as interpolateArray,
  i as interpolateBasis,
  c as interpolateBasisClosed,
  G as interpolateCubehelix,
  J as interpolateCubehelixLong,
  d as interpolateDate,
  S as interpolateDiscrete,
  Z as interpolateHcl,
  z as interpolateHclLong,
  Q as interpolateHsl,
  K as interpolateHslLong,
  k as interpolateHue,
  P as interpolateLab,
  X as interpolateNumber,
  y as interpolateNumberArray,
  A as interpolateObject,
  v as interpolateRgb,
  M as interpolateRgbBasis,
  x as interpolateRgbBasisClosed,
  j as interpolateRound,
  D as interpolateString,
  L as interpolateTransformCss,
  O as interpolateTransformSvg,
  T as interpolateZoom,
  U as piecewise,
  $ as quantize,
};
export default null;
