/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/d3-ease@3.0.1/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
const n = (n) => +n;
function t(n) {
  return n * n;
}
function e(n) {
  return n * (2 - n);
}
function a(n) {
  return ((n *= 2) <= 1 ? n * n : --n * (2 - n) + 1) / 2;
}
function u(n) {
  return n * n * n;
}
function r(n) {
  return --n * n * n + 1;
}
function s(n) {
  return ((n *= 2) <= 1 ? n * n * n : (n -= 2) * n * n + 2) / 2;
}
var o = (function n(t) {
    function e(n) {
      return Math.pow(n, t);
    }
    return (t = +t), (e.exponent = n), e;
  })(3),
  i = (function n(t) {
    function e(n) {
      return 1 - Math.pow(1 - n, t);
    }
    return (t = +t), (e.exponent = n), e;
  })(3),
  c = (function n(t) {
    function e(n) {
      return ((n *= 2) <= 1 ? Math.pow(n, t) : 2 - Math.pow(2 - n, t)) / 2;
    }
    return (t = +t), (e.exponent = n), e;
  })(3),
  f = Math.PI,
  h = f / 2;
function M(n) {
  return 1 == +n ? 1 : 1 - Math.cos(n * h);
}
function p(n) {
  return Math.sin(n * h);
}
function I(n) {
  return (1 - Math.cos(f * n)) / 2;
}
function l(n) {
  return 1.0009775171065494 * (Math.pow(2, -10 * n) - 0.0009765625);
}
function O(n) {
  return l(1 - +n);
}
function x(n) {
  return 1 - l(n);
}
function d(n) {
  return ((n *= 2) <= 1 ? l(1 - n) : 2 - l(n - 1)) / 2;
}
function v(n) {
  return 1 - Math.sqrt(1 - n * n);
}
function B(n) {
  return Math.sqrt(1 - --n * n);
}
function C(n) {
  return (
    ((n *= 2) <= 1
      ? 1 - Math.sqrt(1 - n * n)
      : Math.sqrt(1 - (n -= 2) * n) + 1) / 2
  );
}
var E = 4 / 11,
  m = 6 / 11,
  P = 8 / 11,
  w = 3 / 4,
  b = 9 / 11,
  k = 10 / 11,
  q = 15 / 16,
  y = 21 / 22,
  Q = 63 / 64,
  S = 1 / E / E;
function L(n) {
  return 1 - g(1 - n);
}
function g(n) {
  return (n = +n) < E
    ? S * n * n
    : n < P
    ? S * (n -= m) * n + w
    : n < k
    ? S * (n -= b) * n + q
    : S * (n -= y) * n + Q;
}
function j(n) {
  return ((n *= 2) <= 1 ? 1 - g(1 - n) : g(n - 1) + 1) / 2;
}
var z = 1.70158,
  A = (function n(t) {
    function e(n) {
      return (n = +n) * n * (t * (n - 1) + n);
    }
    return (t = +t), (e.overshoot = n), e;
  })(z),
  D = (function n(t) {
    function e(n) {
      return --n * n * ((n + 1) * t + n) + 1;
    }
    return (t = +t), (e.overshoot = n), e;
  })(z),
  F = (function n(t) {
    function e(n) {
      return (
        ((n *= 2) < 1
          ? n * n * ((t + 1) * n - t)
          : (n -= 2) * n * ((t + 1) * n + t) + 2) / 2
      );
    }
    return (t = +t), (e.overshoot = n), e;
  })(z),
  G = 2 * Math.PI,
  H = (function n(t, e) {
    var a = Math.asin(1 / (t = Math.max(1, t))) * (e /= G);
    function u(n) {
      return t * l(-(--n)) * Math.sin((a - n) / e);
    }
    return (
      (u.amplitude = function (t) {
        return n(t, e * G);
      }),
      (u.period = function (e) {
        return n(t, e);
      }),
      u
    );
  })(1, 0.3),
  J = (function n(t, e) {
    var a = Math.asin(1 / (t = Math.max(1, t))) * (e /= G);
    function u(n) {
      return 1 - t * l((n = +n)) * Math.sin((n + a) / e);
    }
    return (
      (u.amplitude = function (t) {
        return n(t, e * G);
      }),
      (u.period = function (e) {
        return n(t, e);
      }),
      u
    );
  })(1, 0.3),
  K = (function n(t, e) {
    var a = Math.asin(1 / (t = Math.max(1, t))) * (e /= G);
    function u(n) {
      return (
        ((n = 2 * n - 1) < 0
          ? t * l(-n) * Math.sin((a - n) / e)
          : 2 - t * l(n) * Math.sin((a + n) / e)) / 2
      );
    }
    return (
      (u.amplitude = function (t) {
        return n(t, e * G);
      }),
      (u.period = function (e) {
        return n(t, e);
      }),
      u
    );
  })(1, 0.3);
export {
  F as easeBack,
  A as easeBackIn,
  F as easeBackInOut,
  D as easeBackOut,
  g as easeBounce,
  L as easeBounceIn,
  j as easeBounceInOut,
  g as easeBounceOut,
  C as easeCircle,
  v as easeCircleIn,
  C as easeCircleInOut,
  B as easeCircleOut,
  s as easeCubic,
  u as easeCubicIn,
  s as easeCubicInOut,
  r as easeCubicOut,
  J as easeElastic,
  H as easeElasticIn,
  K as easeElasticInOut,
  J as easeElasticOut,
  d as easeExp,
  O as easeExpIn,
  d as easeExpInOut,
  x as easeExpOut,
  n as easeLinear,
  c as easePoly,
  o as easePolyIn,
  c as easePolyInOut,
  i as easePolyOut,
  a as easeQuad,
  t as easeQuadIn,
  a as easeQuadInOut,
  e as easeQuadOut,
  I as easeSin,
  M as easeSinIn,
  I as easeSinInOut,
  p as easeSinOut,
};
export default null;
