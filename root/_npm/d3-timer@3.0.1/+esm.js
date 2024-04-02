/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/d3-timer@3.0.1/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var t,
  n,
  e = 0,
  r = 0,
  o = 0,
  i = 1e3,
  a = 0,
  l = 0,
  u = 0,
  c = "object" == typeof performance && performance.now ? performance : Date,
  s =
    "object" == typeof window && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : function (t) {
          setTimeout(t, 17);
        };
function f() {
  return l || (s(_), (l = c.now() + u));
}
function _() {
  l = 0;
}
function w() {
  this._call = this._time = this._next = null;
}
function m(t, n, e) {
  var r = new w();
  return r.restart(t, n, e), r;
}
function p() {
  f(), ++e;
  for (var n, r = t; r; )
    (n = l - r._time) >= 0 && r._call.call(void 0, n), (r = r._next);
  --e;
}
function h() {
  (l = (a = c.now()) + u), (e = r = 0);
  try {
    p();
  } finally {
    (e = 0),
      (function () {
        var e,
          r,
          o = t,
          i = 1 / 0;
        for (; o; )
          o._call
            ? (i > o._time && (i = o._time), (e = o), (o = o._next))
            : ((r = o._next),
              (o._next = null),
              (o = e ? (e._next = r) : (t = r)));
        (n = e), x(i);
      })(),
      (l = 0);
  }
}
function v() {
  var t = c.now(),
    n = t - a;
  n > i && ((u -= n), (a = t));
}
function x(t) {
  e ||
    (r && (r = clearTimeout(r)),
    t - l > 24
      ? (t < 1 / 0 && (r = setTimeout(h, t - c.now() - u)),
        o && (o = clearInterval(o)))
      : (o || ((a = c.now()), (o = setInterval(v, i))), (e = 1), s(h)));
}
function y(t, n, e) {
  var r = new w();
  return (
    (n = null == n ? 0 : +n),
    r.restart(
      (e) => {
        r.stop(), t(e + n);
      },
      n,
      e,
    ),
    r
  );
}
function d(t, n, e) {
  var r = new w(),
    o = n;
  return null == n
    ? (r.restart(t, n, e), r)
    : ((r._restart = r.restart),
      (r.restart = function (t, n, e) {
        (n = +n),
          (e = null == e ? f() : +e),
          r._restart(
            function i(a) {
              (a += o), r._restart(i, (o += n), e), t(a);
            },
            n,
            e,
          );
      }),
      r.restart(t, n, e),
      r);
}
w.prototype = m.prototype = {
  constructor: w,
  restart: function (e, r, o) {
    if ("function" != typeof e)
      throw new TypeError("callback is not a function");
    (o = (null == o ? f() : +o) + (null == r ? 0 : +r)),
      this._next ||
        n === this ||
        (n ? (n._next = this) : (t = this), (n = this)),
      (this._call = e),
      (this._time = o),
      x();
  },
  stop: function () {
    this._call && ((this._call = null), (this._time = 1 / 0), x());
  },
};
export { d as interval, f as now, y as timeout, m as timer, p as timerFlush };
export default null;
