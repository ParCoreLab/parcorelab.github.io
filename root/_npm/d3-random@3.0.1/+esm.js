/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/d3-random@3.0.1/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var r = Math.random,
  n = (function r(n) {
    function t(r, t) {
      return (
        (r = null == r ? 0 : +r),
        (t = null == t ? 1 : +t),
        1 === arguments.length ? ((t = r), (r = 0)) : (t -= r),
        function () {
          return n() * t + r;
        }
      );
    }
    return (t.source = r), t;
  })(r),
  t = (function r(n) {
    function t(r, t) {
      return (
        arguments.length < 2 && ((t = r), (r = 0)),
        (r = Math.floor(r)),
        (t = Math.floor(t) - r),
        function () {
          return Math.floor(n() * t + r);
        }
      );
    }
    return (t.source = r), t;
  })(r),
  o = (function r(n) {
    function t(r, t) {
      var o, u;
      return (
        (r = null == r ? 0 : +r),
        (t = null == t ? 1 : +t),
        function () {
          var a;
          if (null != o) (a = o), (o = null);
          else
            do {
              (o = 2 * n() - 1), (a = 2 * n() - 1), (u = o * o + a * a);
            } while (!u || u > 1);
          return r + t * a * Math.sqrt((-2 * Math.log(u)) / u);
        }
      );
    }
    return (t.source = r), t;
  })(r),
  u = (function r(n) {
    var t = o.source(n);
    function u() {
      var r = t.apply(this, arguments);
      return function () {
        return Math.exp(r());
      };
    }
    return (u.source = r), u;
  })(r),
  a = (function r(n) {
    function t(r) {
      return (r = +r) <= 0
        ? () => 0
        : function () {
            for (var t = 0, o = r; o > 1; --o) t += n();
            return t + o * n();
          };
    }
    return (t.source = r), t;
  })(r),
  e = (function r(n) {
    var t = a.source(n);
    function o(r) {
      if (0 == (r = +r)) return n;
      var o = t(r);
      return function () {
        return o() / r;
      };
    }
    return (o.source = r), o;
  })(r),
  i = (function r(n) {
    function t(r) {
      return function () {
        return -Math.log1p(-n()) / r;
      };
    }
    return (t.source = r), t;
  })(r),
  c = (function r(n) {
    function t(r) {
      if ((r = +r) < 0) throw new RangeError("invalid alpha");
      return (
        (r = 1 / -r),
        function () {
          return Math.pow(1 - n(), r);
        }
      );
    }
    return (t.source = r), t;
  })(r),
  f = (function r(n) {
    function t(r) {
      if ((r = +r) < 0 || r > 1) throw new RangeError("invalid p");
      return function () {
        return Math.floor(n() + r);
      };
    }
    return (t.source = r), t;
  })(r),
  l = (function r(n) {
    function t(r) {
      if ((r = +r) < 0 || r > 1) throw new RangeError("invalid p");
      return 0 === r
        ? () => 1 / 0
        : 1 === r
        ? () => 1
        : ((r = Math.log1p(-r)),
          function () {
            return 1 + Math.floor(Math.log1p(-n()) / r);
          });
    }
    return (t.source = r), t;
  })(r),
  s = (function r(n) {
    var t = o.source(n)();
    function u(r, o) {
      if ((r = +r) < 0) throw new RangeError("invalid k");
      if (0 === r) return () => 0;
      if (((o = null == o ? 1 : +o), 1 === r))
        return () => -Math.log1p(-n()) * o;
      var u = (r < 1 ? r + 1 : r) - 1 / 3,
        a = 1 / (3 * Math.sqrt(u)),
        e = r < 1 ? () => Math.pow(n(), 1 / r) : () => 1;
      return function () {
        do {
          do {
            var r = t(),
              i = 1 + a * r;
          } while (i <= 0);
          i *= i * i;
          var c = 1 - n();
        } while (
          c >= 1 - 0.0331 * r * r * r * r &&
          Math.log(c) >= 0.5 * r * r + u * (1 - i + Math.log(i))
        );
        return u * i * e() * o;
      };
    }
    return (u.source = r), u;
  })(r),
  h = (function r(n) {
    var t = s.source(n);
    function o(r, n) {
      var o = t(r),
        u = t(n);
      return function () {
        var r = o();
        return 0 === r ? 0 : r / (r + u());
      };
    }
    return (o.source = r), o;
  })(r),
  M = (function r(n) {
    var t = l.source(n),
      o = h.source(n);
    function u(r, n) {
      return (
        (r = +r),
        (n = +n) >= 1
          ? () => r
          : n <= 0
          ? () => 0
          : function () {
              for (var u = 0, a = r, e = n; a * e > 16 && a * (1 - e) > 16; ) {
                var i = Math.floor((a + 1) * e),
                  c = o(i, a - i + 1)();
                c <= e
                  ? ((u += i), (a -= i), (e = (e - c) / (1 - c)))
                  : ((a = i - 1), (e /= c));
              }
              for (
                var f = e < 0.5, l = t(f ? e : 1 - e), s = l(), h = 0;
                s <= a;
                ++h
              )
                s += l();
              return u + (f ? h : a - h);
            }
      );
    }
    return (u.source = r), u;
  })(r),
  v = (function r(n) {
    function t(r, t, o) {
      var u;
      return (
        0 == (r = +r)
          ? (u = (r) => -Math.log(r))
          : ((r = 1 / r), (u = (n) => Math.pow(n, r))),
        (t = null == t ? 0 : +t),
        (o = null == o ? 1 : +o),
        function () {
          return t + o * u(-Math.log1p(-n()));
        }
      );
    }
    return (t.source = r), t;
  })(r),
  d = (function r(n) {
    function t(r, t) {
      return (
        (r = null == r ? 0 : +r),
        (t = null == t ? 1 : +t),
        function () {
          return r + t * Math.tan(Math.PI * n());
        }
      );
    }
    return (t.source = r), t;
  })(r),
  m = (function r(n) {
    function t(r, t) {
      return (
        (r = null == r ? 0 : +r),
        (t = null == t ? 1 : +t),
        function () {
          var o = n();
          return r + t * Math.log(o / (1 - o));
        }
      );
    }
    return (t.source = r), t;
  })(r),
  g = (function r(n) {
    var t = s.source(n),
      o = M.source(n);
    function u(r) {
      return function () {
        for (var u = 0, a = r; a > 16; ) {
          var e = Math.floor(0.875 * a),
            i = t(e)();
          if (i > a) return u + o(e - 1, a / i)();
          (u += e), (a -= i);
        }
        for (var c = -Math.log1p(-n()), f = 0; c <= a; ++f)
          c -= Math.log1p(-n());
        return u + f;
      };
    }
    return (u.source = r), u;
  })(r);
const p = 1 / 4294967296;
function w(r = Math.random()) {
  let n = 0 | (0 <= r && r < 1 ? r / p : Math.abs(r));
  return () => ((n = (1664525 * n + 1013904223) | 0), p * (n >>> 0));
}
export {
  e as randomBates,
  f as randomBernoulli,
  h as randomBeta,
  M as randomBinomial,
  d as randomCauchy,
  i as randomExponential,
  s as randomGamma,
  l as randomGeometric,
  t as randomInt,
  a as randomIrwinHall,
  w as randomLcg,
  u as randomLogNormal,
  m as randomLogistic,
  o as randomNormal,
  c as randomPareto,
  g as randomPoisson,
  n as randomUniform,
  v as randomWeibull,
};
export default null;
