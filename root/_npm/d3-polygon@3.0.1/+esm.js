/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/d3-polygon@3.0.1/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function n(n) {
  for (var r, t = -1, o = n.length, e = n[o - 1], l = 0; ++t < o; )
    (r = e), (e = n[t]), (l += r[1] * e[0] - r[0] * e[1]);
  return l / 2;
}
function r(n) {
  for (
    var r, t, o = -1, e = n.length, l = 0, u = 0, f = n[e - 1], a = 0;
    ++o < e;

  )
    (r = f),
      (f = n[o]),
      (a += t = r[0] * f[1] - f[0] * r[1]),
      (l += (r[0] + f[0]) * t),
      (u += (r[1] + f[1]) * t);
  return [l / (a *= 3), u / a];
}
function t(n, r) {
  return n[0] - r[0] || n[1] - r[1];
}
function o(n) {
  const r = n.length,
    t = [0, 1];
  let o,
    e = 2;
  for (o = 2; o < r; ++o) {
    for (
      ;
      e > 1 &&
      ((l = n[t[e - 2]]),
      (u = n[t[e - 1]]),
      (f = n[o]),
      (u[0] - l[0]) * (f[1] - l[1]) - (u[1] - l[1]) * (f[0] - l[0]) <= 0);

    )
      --e;
    t[e++] = o;
  }
  var l, u, f;
  return t.slice(0, e);
}
function e(n) {
  if ((e = n.length) < 3) return null;
  var r,
    e,
    l = new Array(e),
    u = new Array(e);
  for (r = 0; r < e; ++r) l[r] = [+n[r][0], +n[r][1], r];
  for (l.sort(t), r = 0; r < e; ++r) u[r] = [l[r][0], -l[r][1]];
  var f = o(l),
    a = o(u),
    g = a[0] === f[0],
    h = a[a.length - 1] === f[f.length - 1],
    i = [];
  for (r = f.length - 1; r >= 0; --r) i.push(n[l[f[r]][2]]);
  for (r = +g; r < a.length - h; ++r) i.push(n[l[a[r]][2]]);
  return i;
}
function l(n, r) {
  for (
    var t,
      o,
      e = n.length,
      l = n[e - 1],
      u = r[0],
      f = r[1],
      a = l[0],
      g = l[1],
      h = !1,
      i = 0;
    i < e;
    ++i
  )
    (t = (l = n[i])[0]),
      (o = l[1]) > f != g > f &&
        u < ((a - t) * (f - o)) / (g - o) + t &&
        (h = !h),
      (a = t),
      (g = o);
  return h;
}
function u(n) {
  for (
    var r, t, o = -1, e = n.length, l = n[e - 1], u = l[0], f = l[1], a = 0;
    ++o < e;

  )
    (r = u),
      (t = f),
      (r -= u = (l = n[o])[0]),
      (t -= f = l[1]),
      (a += Math.hypot(r, t));
  return a;
}
export {
  n as polygonArea,
  r as polygonCentroid,
  l as polygonContains,
  e as polygonHull,
  u as polygonLength,
};
export default null;
