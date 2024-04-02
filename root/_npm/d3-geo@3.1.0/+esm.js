/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/d3-geo@3.1.0/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import { Adder as n, merge as t, range as r } from "../d3-array@3.2.4/+esm.js";
var i = 1e-6,
  e = 1e-12,
  o = Math.PI,
  u = o / 2,
  a = o / 4,
  c = 2 * o,
  l = 180 / o,
  f = o / 180,
  s = Math.abs,
  p = Math.atan,
  h = Math.atan2,
  g = Math.cos,
  v = Math.ceil,
  d = Math.exp,
  E = Math.hypot,
  y = Math.log,
  S = Math.pow,
  m = Math.sin,
  M =
    Math.sign ||
    function (n) {
      return n > 0 ? 1 : n < 0 ? -1 : 0;
    },
  w = Math.sqrt,
  x = Math.tan;
function _(n) {
  return n > 1 ? 0 : n < -1 ? o : Math.acos(n);
}
function N(n) {
  return n > 1 ? u : n < -1 ? -u : Math.asin(n);
}
function R(n) {
  return (n = m(n / 2)) * n;
}
function C() {}
function P(n, t) {
  n && $.hasOwnProperty(n.type) && $[n.type](n, t);
}
var A = {
    Feature: function (n, t) {
      P(n.geometry, t);
    },
    FeatureCollection: function (n, t) {
      for (var r = n.features, i = -1, e = r.length; ++i < e; )
        P(r[i].geometry, t);
    },
  },
  $ = {
    Sphere: function (n, t) {
      t.sphere();
    },
    Point: function (n, t) {
      (n = n.coordinates), t.point(n[0], n[1], n[2]);
    },
    MultiPoint: function (n, t) {
      for (var r = n.coordinates, i = -1, e = r.length; ++i < e; )
        (n = r[i]), t.point(n[0], n[1], n[2]);
    },
    LineString: function (n, t) {
      q(n.coordinates, t, 0);
    },
    MultiLineString: function (n, t) {
      for (var r = n.coordinates, i = -1, e = r.length; ++i < e; )
        q(r[i], t, 0);
    },
    Polygon: function (n, t) {
      z(n.coordinates, t);
    },
    MultiPolygon: function (n, t) {
      for (var r = n.coordinates, i = -1, e = r.length; ++i < e; ) z(r[i], t);
    },
    GeometryCollection: function (n, t) {
      for (var r = n.geometries, i = -1, e = r.length; ++i < e; ) P(r[i], t);
    },
  };
function q(n, t, r) {
  var i,
    e = -1,
    o = n.length - r;
  for (t.lineStart(); ++e < o; ) (i = n[e]), t.point(i[0], i[1], i[2]);
  t.lineEnd();
}
function z(n, t) {
  var r = -1,
    i = n.length;
  for (t.polygonStart(); ++r < i; ) q(n[r], t, 1);
  t.polygonEnd();
}
function j(n, t) {
  n && A.hasOwnProperty(n.type) ? A[n.type](n, t) : P(n, t);
}
var L,
  b,
  G,
  O,
  T,
  k,
  F,
  H,
  I,
  W,
  X,
  Y,
  B,
  D,
  U,
  Z,
  J = new n(),
  K = new n(),
  Q = {
    point: C,
    lineStart: C,
    lineEnd: C,
    polygonStart: function () {
      (J = new n()), (Q.lineStart = V), (Q.lineEnd = nn);
    },
    polygonEnd: function () {
      var n = +J;
      K.add(n < 0 ? c + n : n),
        (this.lineStart = this.lineEnd = this.point = C);
    },
    sphere: function () {
      K.add(c);
    },
  };
function V() {
  Q.point = tn;
}
function nn() {
  rn(L, b);
}
function tn(n, t) {
  (Q.point = rn),
    (L = n),
    (b = t),
    (G = n *= f),
    (O = g((t = (t *= f) / 2 + a))),
    (T = m(t));
}
function rn(n, t) {
  var r = (n *= f) - G,
    i = r >= 0 ? 1 : -1,
    e = i * r,
    o = g((t = (t *= f) / 2 + a)),
    u = m(t),
    c = T * u,
    l = O * o + c * g(e),
    s = c * i * m(e);
  J.add(h(s, l)), (G = n), (O = o), (T = u);
}
function en(t) {
  return (K = new n()), j(t, Q), 2 * K;
}
function on(n) {
  return [h(n[1], n[0]), N(n[2])];
}
function un(n) {
  var t = n[0],
    r = n[1],
    i = g(r);
  return [i * g(t), i * m(t), m(r)];
}
function an(n, t) {
  return n[0] * t[0] + n[1] * t[1] + n[2] * t[2];
}
function cn(n, t) {
  return [
    n[1] * t[2] - n[2] * t[1],
    n[2] * t[0] - n[0] * t[2],
    n[0] * t[1] - n[1] * t[0],
  ];
}
function ln(n, t) {
  (n[0] += t[0]), (n[1] += t[1]), (n[2] += t[2]);
}
function fn(n, t) {
  return [n[0] * t, n[1] * t, n[2] * t];
}
function sn(n) {
  var t = w(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
  (n[0] /= t), (n[1] /= t), (n[2] /= t);
}
var pn,
  hn,
  gn,
  vn,
  dn,
  En,
  yn,
  Sn,
  mn,
  Mn,
  wn,
  xn,
  _n,
  Nn,
  Rn,
  Cn,
  Pn = {
    point: An,
    lineStart: qn,
    lineEnd: zn,
    polygonStart: function () {
      (Pn.point = jn),
        (Pn.lineStart = Ln),
        (Pn.lineEnd = bn),
        (D = new n()),
        Q.polygonStart();
    },
    polygonEnd: function () {
      Q.polygonEnd(),
        (Pn.point = An),
        (Pn.lineStart = qn),
        (Pn.lineEnd = zn),
        J < 0
          ? ((k = -(H = 180)), (F = -(I = 90)))
          : D > i
          ? (I = 90)
          : D < -i && (F = -90),
        (Z[0] = k),
        (Z[1] = H);
    },
    sphere: function () {
      (k = -(H = 180)), (F = -(I = 90));
    },
  };
function An(n, t) {
  U.push((Z = [(k = n), (H = n)])), t < F && (F = t), t > I && (I = t);
}
function $n(n, t) {
  var r = un([n * f, t * f]);
  if (B) {
    var i = cn(B, r),
      e = cn([i[1], -i[0], 0], i);
    sn(e), (e = on(e));
    var o,
      u = n - W,
      a = u > 0 ? 1 : -1,
      c = e[0] * l * a,
      p = s(u) > 180;
    p ^ (a * W < c && c < a * n)
      ? (o = e[1] * l) > I && (I = o)
      : p ^ (a * W < (c = ((c + 360) % 360) - 180) && c < a * n)
      ? (o = -e[1] * l) < F && (F = o)
      : (t < F && (F = t), t > I && (I = t)),
      p
        ? n < W
          ? Gn(k, n) > Gn(k, H) && (H = n)
          : Gn(n, H) > Gn(k, H) && (k = n)
        : H >= k
        ? (n < k && (k = n), n > H && (H = n))
        : n > W
        ? Gn(k, n) > Gn(k, H) && (H = n)
        : Gn(n, H) > Gn(k, H) && (k = n);
  } else U.push((Z = [(k = n), (H = n)]));
  t < F && (F = t), t > I && (I = t), (B = r), (W = n);
}
function qn() {
  Pn.point = $n;
}
function zn() {
  (Z[0] = k), (Z[1] = H), (Pn.point = An), (B = null);
}
function jn(n, t) {
  if (B) {
    var r = n - W;
    D.add(s(r) > 180 ? r + (r > 0 ? 360 : -360) : r);
  } else (X = n), (Y = t);
  Q.point(n, t), $n(n, t);
}
function Ln() {
  Q.lineStart();
}
function bn() {
  jn(X, Y),
    Q.lineEnd(),
    s(D) > i && (k = -(H = 180)),
    (Z[0] = k),
    (Z[1] = H),
    (B = null);
}
function Gn(n, t) {
  return (t -= n) < 0 ? t + 360 : t;
}
function On(n, t) {
  return n[0] - t[0];
}
function Tn(n, t) {
  return n[0] <= n[1] ? n[0] <= t && t <= n[1] : t < n[0] || n[1] < t;
}
function kn(n) {
  var t, r, i, e, o, u, a;
  if (((I = H = -(k = F = 1 / 0)), (U = []), j(n, Pn), (r = U.length))) {
    for (U.sort(On), t = 1, o = [(i = U[0])]; t < r; ++t)
      Tn(i, (e = U[t])[0]) || Tn(i, e[1])
        ? (Gn(i[0], e[1]) > Gn(i[0], i[1]) && (i[1] = e[1]),
          Gn(e[0], i[1]) > Gn(i[0], i[1]) && (i[0] = e[0]))
        : o.push((i = e));
    for (u = -1 / 0, t = 0, i = o[(r = o.length - 1)]; t <= r; i = e, ++t)
      (e = o[t]), (a = Gn(i[1], e[0])) > u && ((u = a), (k = e[0]), (H = i[1]));
  }
  return (
    (U = Z = null),
    k === 1 / 0 || F === 1 / 0
      ? [
          [NaN, NaN],
          [NaN, NaN],
        ]
      : [
          [k, F],
          [H, I],
        ]
  );
}
var Fn = {
  sphere: C,
  point: Hn,
  lineStart: Wn,
  lineEnd: Bn,
  polygonStart: function () {
    (Fn.lineStart = Dn), (Fn.lineEnd = Un);
  },
  polygonEnd: function () {
    (Fn.lineStart = Wn), (Fn.lineEnd = Bn);
  },
};
function Hn(n, t) {
  n *= f;
  var r = g((t *= f));
  In(r * g(n), r * m(n), m(t));
}
function In(n, t, r) {
  ++pn, (gn += (n - gn) / pn), (vn += (t - vn) / pn), (dn += (r - dn) / pn);
}
function Wn() {
  Fn.point = Xn;
}
function Xn(n, t) {
  n *= f;
  var r = g((t *= f));
  (Nn = r * g(n)),
    (Rn = r * m(n)),
    (Cn = m(t)),
    (Fn.point = Yn),
    In(Nn, Rn, Cn);
}
function Yn(n, t) {
  n *= f;
  var r = g((t *= f)),
    i = r * g(n),
    e = r * m(n),
    o = m(t),
    u = h(
      w(
        (u = Rn * o - Cn * e) * u +
          (u = Cn * i - Nn * o) * u +
          (u = Nn * e - Rn * i) * u,
      ),
      Nn * i + Rn * e + Cn * o,
    );
  (hn += u),
    (En += u * (Nn + (Nn = i))),
    (yn += u * (Rn + (Rn = e))),
    (Sn += u * (Cn + (Cn = o))),
    In(Nn, Rn, Cn);
}
function Bn() {
  Fn.point = Hn;
}
function Dn() {
  Fn.point = Zn;
}
function Un() {
  Jn(xn, _n), (Fn.point = Hn);
}
function Zn(n, t) {
  (xn = n), (_n = t), (n *= f), (t *= f), (Fn.point = Jn);
  var r = g(t);
  (Nn = r * g(n)), (Rn = r * m(n)), (Cn = m(t)), In(Nn, Rn, Cn);
}
function Jn(n, t) {
  n *= f;
  var r = g((t *= f)),
    i = r * g(n),
    e = r * m(n),
    o = m(t),
    u = Rn * o - Cn * e,
    a = Cn * i - Nn * o,
    c = Nn * e - Rn * i,
    l = E(u, a, c),
    s = N(l),
    p = l && -s / l;
  mn.add(p * u),
    Mn.add(p * a),
    wn.add(p * c),
    (hn += s),
    (En += s * (Nn + (Nn = i))),
    (yn += s * (Rn + (Rn = e))),
    (Sn += s * (Cn + (Cn = o))),
    In(Nn, Rn, Cn);
}
function Kn(t) {
  (pn = hn = gn = vn = dn = En = yn = Sn = 0),
    (mn = new n()),
    (Mn = new n()),
    (wn = new n()),
    j(t, Fn);
  var r = +mn,
    o = +Mn,
    u = +wn,
    a = E(r, o, u);
  return a < e &&
    ((r = En),
    (o = yn),
    (u = Sn),
    hn < i && ((r = gn), (o = vn), (u = dn)),
    (a = E(r, o, u)) < e)
    ? [NaN, NaN]
    : [h(o, r) * l, N(u / a) * l];
}
function Qn(n) {
  return function () {
    return n;
  };
}
function Vn(n, t) {
  function r(r, i) {
    return (r = n(r, i)), t(r[0], r[1]);
  }
  return (
    n.invert &&
      t.invert &&
      (r.invert = function (r, i) {
        return (r = t.invert(r, i)) && n.invert(r[0], r[1]);
      }),
    r
  );
}
function nt(n, t) {
  return s(n) > o && (n -= Math.round(n / c) * c), [n, t];
}
function tt(n, t, r) {
  return (n %= c)
    ? t || r
      ? Vn(it(n), et(t, r))
      : it(n)
    : t || r
    ? et(t, r)
    : nt;
}
function rt(n) {
  return function (t, r) {
    return s((t += n)) > o && (t -= Math.round(t / c) * c), [t, r];
  };
}
function it(n) {
  var t = rt(n);
  return (t.invert = rt(-n)), t;
}
function et(n, t) {
  var r = g(n),
    i = m(n),
    e = g(t),
    o = m(t);
  function u(n, t) {
    var u = g(t),
      a = g(n) * u,
      c = m(n) * u,
      l = m(t),
      f = l * r + a * i;
    return [h(c * e - f * o, a * r - l * i), N(f * e + c * o)];
  }
  return (
    (u.invert = function (n, t) {
      var u = g(t),
        a = g(n) * u,
        c = m(n) * u,
        l = m(t),
        f = l * e - c * o;
      return [h(c * e + l * o, a * r + f * i), N(f * r - a * i)];
    }),
    u
  );
}
function ot(n) {
  function t(t) {
    return ((t = n(t[0] * f, t[1] * f))[0] *= l), (t[1] *= l), t;
  }
  return (
    (n = tt(n[0] * f, n[1] * f, n.length > 2 ? n[2] * f : 0)),
    (t.invert = function (t) {
      return ((t = n.invert(t[0] * f, t[1] * f))[0] *= l), (t[1] *= l), t;
    }),
    t
  );
}
function ut(n, t, r, i, e, o) {
  if (r) {
    var u = g(t),
      a = m(t),
      l = i * r;
    null == e
      ? ((e = t + i * c), (o = t - l / 2))
      : ((e = at(u, e)),
        (o = at(u, o)),
        (i > 0 ? e < o : e > o) && (e += i * c));
    for (var f, s = e; i > 0 ? s > o : s < o; s -= l)
      (f = on([u, -a * g(s), -a * m(s)])), n.point(f[0], f[1]);
  }
}
function at(n, t) {
  ((t = un(t))[0] -= n), sn(t);
  var r = _(-t[1]);
  return ((-t[2] < 0 ? -r : r) + c - i) % c;
}
function ct() {
  var n,
    t,
    r = Qn([0, 0]),
    i = Qn(90),
    e = Qn(6),
    o = {
      point: function (r, i) {
        n.push((r = t(r, i))), (r[0] *= l), (r[1] *= l);
      },
    };
  function u() {
    var u = r.apply(this, arguments),
      a = i.apply(this, arguments) * f,
      c = e.apply(this, arguments) * f;
    return (
      (n = []),
      (t = tt(-u[0] * f, -u[1] * f, 0).invert),
      ut(o, a, c, 1),
      (u = { type: "Polygon", coordinates: [n] }),
      (n = t = null),
      u
    );
  }
  return (
    (u.center = function (n) {
      return arguments.length
        ? ((r = "function" == typeof n ? n : Qn([+n[0], +n[1]])), u)
        : r;
    }),
    (u.radius = function (n) {
      return arguments.length
        ? ((i = "function" == typeof n ? n : Qn(+n)), u)
        : i;
    }),
    (u.precision = function (n) {
      return arguments.length
        ? ((e = "function" == typeof n ? n : Qn(+n)), u)
        : e;
    }),
    u
  );
}
function lt() {
  var n,
    t = [];
  return {
    point: function (t, r, i) {
      n.push([t, r, i]);
    },
    lineStart: function () {
      t.push((n = []));
    },
    lineEnd: C,
    rejoin: function () {
      t.length > 1 && t.push(t.pop().concat(t.shift()));
    },
    result: function () {
      var r = t;
      return (t = []), (n = null), r;
    },
  };
}
function ft(n, t) {
  return s(n[0] - t[0]) < i && s(n[1] - t[1]) < i;
}
function st(n, t, r, i) {
  (this.x = n),
    (this.z = t),
    (this.o = r),
    (this.e = i),
    (this.v = !1),
    (this.n = this.p = null);
}
function pt(n, t, r, e, o) {
  var u,
    a,
    c = [],
    l = [];
  if (
    (n.forEach(function (n) {
      if (!((t = n.length - 1) <= 0)) {
        var t,
          r,
          e = n[0],
          a = n[t];
        if (ft(e, a)) {
          if (!e[2] && !a[2]) {
            for (o.lineStart(), u = 0; u < t; ++u) o.point((e = n[u])[0], e[1]);
            return void o.lineEnd();
          }
          a[0] += 2 * i;
        }
        c.push((r = new st(e, n, null, !0))),
          l.push((r.o = new st(e, null, r, !1))),
          c.push((r = new st(a, n, null, !1))),
          l.push((r.o = new st(a, null, r, !0)));
      }
    }),
    c.length)
  ) {
    for (l.sort(t), ht(c), ht(l), u = 0, a = l.length; u < a; ++u)
      l[u].e = r = !r;
    for (var f, s, p = c[0]; ; ) {
      for (var h = p, g = !0; h.v; ) if ((h = h.n) === p) return;
      (f = h.z), o.lineStart();
      do {
        if (((h.v = h.o.v = !0), h.e)) {
          if (g)
            for (u = 0, a = f.length; u < a; ++u) o.point((s = f[u])[0], s[1]);
          else e(h.x, h.n.x, 1, o);
          h = h.n;
        } else {
          if (g)
            for (f = h.p.z, u = f.length - 1; u >= 0; --u)
              o.point((s = f[u])[0], s[1]);
          else e(h.x, h.p.x, -1, o);
          h = h.p;
        }
        (f = (h = h.o).z), (g = !g);
      } while (!h.v);
      o.lineEnd();
    }
  }
}
function ht(n) {
  if ((t = n.length)) {
    for (var t, r, i = 0, e = n[0]; ++i < t; )
      (e.n = r = n[i]), (r.p = e), (e = r);
    (e.n = r = n[0]), (r.p = e);
  }
}
function gt(n) {
  return s(n[0]) <= o ? n[0] : M(n[0]) * (((s(n[0]) + o) % c) - o);
}
function vt(t, r) {
  var l = gt(r),
    f = r[1],
    s = m(f),
    p = [m(l), -g(l), 0],
    v = 0,
    d = 0,
    E = new n();
  1 === s ? (f = u + i) : -1 === s && (f = -u - i);
  for (var y = 0, S = t.length; y < S; ++y)
    if ((w = (M = t[y]).length))
      for (
        var M,
          w,
          x = M[w - 1],
          _ = gt(x),
          R = x[1] / 2 + a,
          C = m(R),
          P = g(R),
          A = 0;
        A < w;
        ++A, _ = q, C = j, P = L, x = $
      ) {
        var $ = M[A],
          q = gt($),
          z = $[1] / 2 + a,
          j = m(z),
          L = g(z),
          b = q - _,
          G = b >= 0 ? 1 : -1,
          O = G * b,
          T = O > o,
          k = C * j;
        if (
          (E.add(h(k * G * m(O), P * L + k * g(O))),
          (v += T ? b + G * c : b),
          T ^ (_ >= l) ^ (q >= l))
        ) {
          var F = cn(un(x), un($));
          sn(F);
          var H = cn(p, F);
          sn(H);
          var I = (T ^ (b >= 0) ? -1 : 1) * N(H[2]);
          (f > I || (f === I && (F[0] || F[1]))) &&
            (d += T ^ (b >= 0) ? 1 : -1);
        }
      }
  return (v < -i || (v < i && E < -e)) ^ (1 & d);
}
function dt(n, r, i, e) {
  return function (o) {
    var u,
      a,
      c,
      l = r(o),
      f = lt(),
      s = r(f),
      p = !1,
      h = {
        point: g,
        lineStart: d,
        lineEnd: E,
        polygonStart: function () {
          (h.point = y), (h.lineStart = S), (h.lineEnd = m), (a = []), (u = []);
        },
        polygonEnd: function () {
          (h.point = g), (h.lineStart = d), (h.lineEnd = E), (a = t(a));
          var n = vt(u, e);
          a.length
            ? (p || (o.polygonStart(), (p = !0)), pt(a, yt, n, i, o))
            : n &&
              (p || (o.polygonStart(), (p = !0)),
              o.lineStart(),
              i(null, null, 1, o),
              o.lineEnd()),
            p && (o.polygonEnd(), (p = !1)),
            (a = u = null);
        },
        sphere: function () {
          o.polygonStart(),
            o.lineStart(),
            i(null, null, 1, o),
            o.lineEnd(),
            o.polygonEnd();
        },
      };
    function g(t, r) {
      n(t, r) && o.point(t, r);
    }
    function v(n, t) {
      l.point(n, t);
    }
    function d() {
      (h.point = v), l.lineStart();
    }
    function E() {
      (h.point = g), l.lineEnd();
    }
    function y(n, t) {
      c.push([n, t]), s.point(n, t);
    }
    function S() {
      s.lineStart(), (c = []);
    }
    function m() {
      y(c[0][0], c[0][1]), s.lineEnd();
      var n,
        t,
        r,
        i,
        e = s.clean(),
        l = f.result(),
        h = l.length;
      if ((c.pop(), u.push(c), (c = null), h))
        if (1 & e) {
          if ((t = (r = l[0]).length - 1) > 0) {
            for (
              p || (o.polygonStart(), (p = !0)), o.lineStart(), n = 0;
              n < t;
              ++n
            )
              o.point((i = r[n])[0], i[1]);
            o.lineEnd();
          }
        } else
          h > 1 && 2 & e && l.push(l.pop().concat(l.shift())),
            a.push(l.filter(Et));
    }
    return h;
  };
}
function Et(n) {
  return n.length > 1;
}
function yt(n, t) {
  return (
    ((n = n.x)[0] < 0 ? n[1] - u - i : u - n[1]) -
    ((t = t.x)[0] < 0 ? t[1] - u - i : u - t[1])
  );
}
nt.invert = nt;
var St = dt(
  function () {
    return !0;
  },
  function (n) {
    var t,
      r = NaN,
      e = NaN,
      a = NaN;
    return {
      lineStart: function () {
        n.lineStart(), (t = 1);
      },
      point: function (c, l) {
        var f = c > 0 ? o : -o,
          h = s(c - r);
        s(h - o) < i
          ? (n.point(r, (e = (e + l) / 2 > 0 ? u : -u)),
            n.point(a, e),
            n.lineEnd(),
            n.lineStart(),
            n.point(f, e),
            n.point(c, e),
            (t = 0))
          : a !== f &&
            h >= o &&
            (s(r - a) < i && (r -= a * i),
            s(c - f) < i && (c -= f * i),
            (e = (function (n, t, r, e) {
              var o,
                u,
                a = m(n - r);
              return s(a) > i
                ? p(
                    (m(t) * (u = g(e)) * m(r) - m(e) * (o = g(t)) * m(n)) /
                      (o * u * a),
                  )
                : (t + e) / 2;
            })(r, e, c, l)),
            n.point(a, e),
            n.lineEnd(),
            n.lineStart(),
            n.point(f, e),
            (t = 0)),
          n.point((r = c), (e = l)),
          (a = f);
      },
      lineEnd: function () {
        n.lineEnd(), (r = e = NaN);
      },
      clean: function () {
        return 2 - t;
      },
    };
  },
  function (n, t, r, e) {
    var a;
    if (null == n)
      (a = r * u),
        e.point(-o, a),
        e.point(0, a),
        e.point(o, a),
        e.point(o, 0),
        e.point(o, -a),
        e.point(0, -a),
        e.point(-o, -a),
        e.point(-o, 0),
        e.point(-o, a);
    else if (s(n[0] - t[0]) > i) {
      var c = n[0] < t[0] ? o : -o;
      (a = (r * c) / 2), e.point(-c, a), e.point(0, a), e.point(c, a);
    } else e.point(t[0], t[1]);
  },
  [-o, -u],
);
function mt(n) {
  var t = g(n),
    r = 6 * f,
    e = t > 0,
    u = s(t) > i;
  function a(n, r) {
    return g(n) * g(r) > t;
  }
  function c(n, r, e) {
    var u = [1, 0, 0],
      a = cn(un(n), un(r)),
      c = an(a, a),
      l = a[0],
      f = c - l * l;
    if (!f) return !e && n;
    var p = (t * c) / f,
      h = (-t * l) / f,
      g = cn(u, a),
      v = fn(u, p);
    ln(v, fn(a, h));
    var d = g,
      E = an(v, d),
      y = an(d, d),
      S = E * E - y * (an(v, v) - 1);
    if (!(S < 0)) {
      var m = w(S),
        M = fn(d, (-E - m) / y);
      if ((ln(M, v), (M = on(M)), !e)) return M;
      var x,
        _ = n[0],
        N = r[0],
        R = n[1],
        C = r[1];
      N < _ && ((x = _), (_ = N), (N = x));
      var P = N - _,
        A = s(P - o) < i;
      if (
        (!A && C < R && ((x = R), (R = C), (C = x)),
        A || P < i
          ? A
            ? (R + C > 0) ^ (M[1] < (s(M[0] - _) < i ? R : C))
            : R <= M[1] && M[1] <= C
          : (P > o) ^ (_ <= M[0] && M[0] <= N))
      ) {
        var $ = fn(d, (-E + m) / y);
        return ln($, v), [M, on($)];
      }
    }
  }
  function l(t, r) {
    var i = e ? n : o - n,
      u = 0;
    return (
      t < -i ? (u |= 1) : t > i && (u |= 2),
      r < -i ? (u |= 4) : r > i && (u |= 8),
      u
    );
  }
  return dt(
    a,
    function (n) {
      var t, r, i, f, s;
      return {
        lineStart: function () {
          (f = i = !1), (s = 1);
        },
        point: function (p, h) {
          var g,
            v = [p, h],
            d = a(p, h),
            E = e ? (d ? 0 : l(p, h)) : d ? l(p + (p < 0 ? o : -o), h) : 0;
          if (
            (!t && (f = i = d) && n.lineStart(),
            d !== i && (!(g = c(t, v)) || ft(t, g) || ft(v, g)) && (v[2] = 1),
            d !== i)
          )
            (s = 0),
              d
                ? (n.lineStart(), (g = c(v, t)), n.point(g[0], g[1]))
                : ((g = c(t, v)), n.point(g[0], g[1], 2), n.lineEnd()),
              (t = g);
          else if (u && t && e ^ d) {
            var y;
            E & r ||
              !(y = c(v, t, !0)) ||
              ((s = 0),
              e
                ? (n.lineStart(),
                  n.point(y[0][0], y[0][1]),
                  n.point(y[1][0], y[1][1]),
                  n.lineEnd())
                : (n.point(y[1][0], y[1][1]),
                  n.lineEnd(),
                  n.lineStart(),
                  n.point(y[0][0], y[0][1], 3)));
          }
          !d || (t && ft(t, v)) || n.point(v[0], v[1]),
            (t = v),
            (i = d),
            (r = E);
        },
        lineEnd: function () {
          i && n.lineEnd(), (t = null);
        },
        clean: function () {
          return s | ((f && i) << 1);
        },
      };
    },
    function (t, i, e, o) {
      ut(o, n, r, e, t, i);
    },
    e ? [0, -n] : [-o, n - o],
  );
}
var Mt,
  wt,
  xt,
  _t,
  Nt = 1e9,
  Rt = -Nt;
function Ct(n, r, e, o) {
  function u(t, i) {
    return n <= t && t <= e && r <= i && i <= o;
  }
  function a(t, i, u, a) {
    var l = 0,
      s = 0;
    if (null == t || (l = c(t, u)) !== (s = c(i, u)) || (f(t, i) < 0) ^ (u > 0))
      do {
        a.point(0 === l || 3 === l ? n : e, l > 1 ? o : r);
      } while ((l = (l + u + 4) % 4) !== s);
    else a.point(i[0], i[1]);
  }
  function c(t, o) {
    return s(t[0] - n) < i
      ? o > 0
        ? 0
        : 3
      : s(t[0] - e) < i
      ? o > 0
        ? 2
        : 1
      : s(t[1] - r) < i
      ? o > 0
        ? 1
        : 0
      : o > 0
      ? 3
      : 2;
  }
  function l(n, t) {
    return f(n.x, t.x);
  }
  function f(n, t) {
    var r = c(n, 1),
      i = c(t, 1);
    return r !== i
      ? r - i
      : 0 === r
      ? t[1] - n[1]
      : 1 === r
      ? n[0] - t[0]
      : 2 === r
      ? n[1] - t[1]
      : t[0] - n[0];
  }
  return function (i) {
    var c,
      f,
      s,
      p,
      h,
      g,
      v,
      d,
      E,
      y,
      S,
      m = i,
      M = lt(),
      w = {
        point: x,
        lineStart: function () {
          (w.point = _), f && f.push((s = []));
          (y = !0), (E = !1), (v = d = NaN);
        },
        lineEnd: function () {
          c && (_(p, h), g && E && M.rejoin(), c.push(M.result()));
          (w.point = x), E && m.lineEnd();
        },
        polygonStart: function () {
          (m = M), (c = []), (f = []), (S = !0);
        },
        polygonEnd: function () {
          var r = (function () {
              for (var t = 0, r = 0, i = f.length; r < i; ++r)
                for (
                  var e,
                    u,
                    a = f[r],
                    c = 1,
                    l = a.length,
                    s = a[0],
                    p = s[0],
                    h = s[1];
                  c < l;
                  ++c
                )
                  (e = p),
                    (u = h),
                    (p = (s = a[c])[0]),
                    (h = s[1]),
                    u <= o
                      ? h > o && (p - e) * (o - u) > (h - u) * (n - e) && ++t
                      : h <= o && (p - e) * (o - u) < (h - u) * (n - e) && --t;
              return t;
            })(),
            e = S && r,
            u = (c = t(c)).length;
          (e || u) &&
            (i.polygonStart(),
            e && (i.lineStart(), a(null, null, 1, i), i.lineEnd()),
            u && pt(c, l, r, a, i),
            i.polygonEnd());
          (m = i), (c = f = s = null);
        },
      };
    function x(n, t) {
      u(n, t) && m.point(n, t);
    }
    function _(t, i) {
      var a = u(t, i);
      if ((f && s.push([t, i]), y))
        (p = t),
          (h = i),
          (g = a),
          (y = !1),
          a && (m.lineStart(), m.point(t, i));
      else if (a && E) m.point(t, i);
      else {
        var c = [
            (v = Math.max(Rt, Math.min(Nt, v))),
            (d = Math.max(Rt, Math.min(Nt, d))),
          ],
          l = [
            (t = Math.max(Rt, Math.min(Nt, t))),
            (i = Math.max(Rt, Math.min(Nt, i))),
          ];
        !(function (n, t, r, i, e, o) {
          var u,
            a = n[0],
            c = n[1],
            l = 0,
            f = 1,
            s = t[0] - a,
            p = t[1] - c;
          if (((u = r - a), s || !(u > 0))) {
            if (((u /= s), s < 0)) {
              if (u < l) return;
              u < f && (f = u);
            } else if (s > 0) {
              if (u > f) return;
              u > l && (l = u);
            }
            if (((u = e - a), s || !(u < 0))) {
              if (((u /= s), s < 0)) {
                if (u > f) return;
                u > l && (l = u);
              } else if (s > 0) {
                if (u < l) return;
                u < f && (f = u);
              }
              if (((u = i - c), p || !(u > 0))) {
                if (((u /= p), p < 0)) {
                  if (u < l) return;
                  u < f && (f = u);
                } else if (p > 0) {
                  if (u > f) return;
                  u > l && (l = u);
                }
                if (((u = o - c), p || !(u < 0))) {
                  if (((u /= p), p < 0)) {
                    if (u > f) return;
                    u > l && (l = u);
                  } else if (p > 0) {
                    if (u < l) return;
                    u < f && (f = u);
                  }
                  return (
                    l > 0 && ((n[0] = a + l * s), (n[1] = c + l * p)),
                    f < 1 && ((t[0] = a + f * s), (t[1] = c + f * p)),
                    !0
                  );
                }
              }
            }
          }
        })(c, l, n, r, e, o)
          ? a && (m.lineStart(), m.point(t, i), (S = !1))
          : (E || (m.lineStart(), m.point(c[0], c[1])),
            m.point(l[0], l[1]),
            a || m.lineEnd(),
            (S = !1));
      }
      (v = t), (d = i), (E = a);
    }
    return w;
  };
}
function Pt() {
  var n,
    t,
    r,
    i = 0,
    e = 0,
    o = 960,
    u = 500;
  return (r = {
    stream: function (r) {
      return n && t === r ? n : (n = Ct(i, e, o, u)((t = r)));
    },
    extent: function (a) {
      return arguments.length
        ? ((i = +a[0][0]),
          (e = +a[0][1]),
          (o = +a[1][0]),
          (u = +a[1][1]),
          (n = t = null),
          r)
        : [
            [i, e],
            [o, u],
          ];
    },
  });
}
var At = {
  sphere: C,
  point: C,
  lineStart: function () {
    (At.point = qt), (At.lineEnd = $t);
  },
  lineEnd: C,
  polygonStart: C,
  polygonEnd: C,
};
function $t() {
  At.point = At.lineEnd = C;
}
function qt(n, t) {
  (wt = n *= f), (xt = m((t *= f))), (_t = g(t)), (At.point = zt);
}
function zt(n, t) {
  n *= f;
  var r = m((t *= f)),
    i = g(t),
    e = s(n - wt),
    o = g(e),
    u = i * m(e),
    a = _t * r - xt * i * o,
    c = xt * r + _t * i * o;
  Mt.add(h(w(u * u + a * a), c)), (wt = n), (xt = r), (_t = i);
}
function jt(t) {
  return (Mt = new n()), j(t, At), +Mt;
}
var Lt = [null, null],
  bt = { type: "LineString", coordinates: Lt };
function Gt(n, t) {
  return (Lt[0] = n), (Lt[1] = t), jt(bt);
}
var Ot = {
    Feature: function (n, t) {
      return kt(n.geometry, t);
    },
    FeatureCollection: function (n, t) {
      for (var r = n.features, i = -1, e = r.length; ++i < e; )
        if (kt(r[i].geometry, t)) return !0;
      return !1;
    },
  },
  Tt = {
    Sphere: function () {
      return !0;
    },
    Point: function (n, t) {
      return Ft(n.coordinates, t);
    },
    MultiPoint: function (n, t) {
      for (var r = n.coordinates, i = -1, e = r.length; ++i < e; )
        if (Ft(r[i], t)) return !0;
      return !1;
    },
    LineString: function (n, t) {
      return Ht(n.coordinates, t);
    },
    MultiLineString: function (n, t) {
      for (var r = n.coordinates, i = -1, e = r.length; ++i < e; )
        if (Ht(r[i], t)) return !0;
      return !1;
    },
    Polygon: function (n, t) {
      return It(n.coordinates, t);
    },
    MultiPolygon: function (n, t) {
      for (var r = n.coordinates, i = -1, e = r.length; ++i < e; )
        if (It(r[i], t)) return !0;
      return !1;
    },
    GeometryCollection: function (n, t) {
      for (var r = n.geometries, i = -1, e = r.length; ++i < e; )
        if (kt(r[i], t)) return !0;
      return !1;
    },
  };
function kt(n, t) {
  return !(!n || !Tt.hasOwnProperty(n.type)) && Tt[n.type](n, t);
}
function Ft(n, t) {
  return 0 === Gt(n, t);
}
function Ht(n, t) {
  for (var r, i, o, u = 0, a = n.length; u < a; u++) {
    if (0 === (i = Gt(n[u], t))) return !0;
    if (
      u > 0 &&
      (o = Gt(n[u], n[u - 1])) > 0 &&
      r <= o &&
      i <= o &&
      (r + i - o) * (1 - Math.pow((r - i) / o, 2)) < e * o
    )
      return !0;
    r = i;
  }
  return !1;
}
function It(n, t) {
  return !!vt(n.map(Wt), Xt(t));
}
function Wt(n) {
  return (n = n.map(Xt)).pop(), n;
}
function Xt(n) {
  return [n[0] * f, n[1] * f];
}
function Yt(n, t) {
  return (n && Ot.hasOwnProperty(n.type) ? Ot[n.type] : kt)(n, t);
}
function Bt(n, t, e) {
  var o = r(n, t - i, e).concat(t);
  return function (n) {
    return o.map(function (t) {
      return [n, t];
    });
  };
}
function Dt(n, t, e) {
  var o = r(n, t - i, e).concat(t);
  return function (n) {
    return o.map(function (t) {
      return [t, n];
    });
  };
}
function Ut() {
  var n,
    t,
    e,
    o,
    u,
    a,
    c,
    l,
    f,
    p,
    h,
    g,
    d = 10,
    E = d,
    y = 90,
    S = 360,
    m = 2.5;
  function M() {
    return { type: "MultiLineString", coordinates: w() };
  }
  function w() {
    return r(v(o / y) * y, e, y)
      .map(h)
      .concat(r(v(l / S) * S, c, S).map(g))
      .concat(
        r(v(t / d) * d, n, d)
          .filter(function (n) {
            return s(n % y) > i;
          })
          .map(f),
      )
      .concat(
        r(v(a / E) * E, u, E)
          .filter(function (n) {
            return s(n % S) > i;
          })
          .map(p),
      );
  }
  return (
    (M.lines = function () {
      return w().map(function (n) {
        return { type: "LineString", coordinates: n };
      });
    }),
    (M.outline = function () {
      return {
        type: "Polygon",
        coordinates: [
          h(o).concat(
            g(c).slice(1),
            h(e).reverse().slice(1),
            g(l).reverse().slice(1),
          ),
        ],
      };
    }),
    (M.extent = function (n) {
      return arguments.length
        ? M.extentMajor(n).extentMinor(n)
        : M.extentMinor();
    }),
    (M.extentMajor = function (n) {
      return arguments.length
        ? ((o = +n[0][0]),
          (e = +n[1][0]),
          (l = +n[0][1]),
          (c = +n[1][1]),
          o > e && ((n = o), (o = e), (e = n)),
          l > c && ((n = l), (l = c), (c = n)),
          M.precision(m))
        : [
            [o, l],
            [e, c],
          ];
    }),
    (M.extentMinor = function (r) {
      return arguments.length
        ? ((t = +r[0][0]),
          (n = +r[1][0]),
          (a = +r[0][1]),
          (u = +r[1][1]),
          t > n && ((r = t), (t = n), (n = r)),
          a > u && ((r = a), (a = u), (u = r)),
          M.precision(m))
        : [
            [t, a],
            [n, u],
          ];
    }),
    (M.step = function (n) {
      return arguments.length ? M.stepMajor(n).stepMinor(n) : M.stepMinor();
    }),
    (M.stepMajor = function (n) {
      return arguments.length ? ((y = +n[0]), (S = +n[1]), M) : [y, S];
    }),
    (M.stepMinor = function (n) {
      return arguments.length ? ((d = +n[0]), (E = +n[1]), M) : [d, E];
    }),
    (M.precision = function (r) {
      return arguments.length
        ? ((m = +r),
          (f = Bt(a, u, 90)),
          (p = Dt(t, n, m)),
          (h = Bt(l, c, 90)),
          (g = Dt(o, e, m)),
          M)
        : m;
    }),
    M.extentMajor([
      [-180, -90 + i],
      [180, 90 - i],
    ]).extentMinor([
      [-180, -80 - i],
      [180, 80 + i],
    ])
  );
}
function Zt() {
  return Ut()();
}
function Jt(n, t) {
  var r = n[0] * f,
    i = n[1] * f,
    e = t[0] * f,
    o = t[1] * f,
    u = g(i),
    a = m(i),
    c = g(o),
    s = m(o),
    p = u * g(r),
    v = u * m(r),
    d = c * g(e),
    E = c * m(e),
    y = 2 * N(w(R(o - i) + u * c * R(e - r))),
    S = m(y),
    M = y
      ? function (n) {
          var t = m((n *= y)) / S,
            r = m(y - n) / S,
            i = r * p + t * d,
            e = r * v + t * E,
            o = r * a + t * s;
          return [h(e, i) * l, h(o, w(i * i + e * e)) * l];
        }
      : function () {
          return [r * l, i * l];
        };
  return (M.distance = y), M;
}
var Kt,
  Qt,
  Vt,
  nr,
  tr = (n) => n,
  rr = new n(),
  ir = new n(),
  er = {
    point: C,
    lineStart: C,
    lineEnd: C,
    polygonStart: function () {
      (er.lineStart = or), (er.lineEnd = cr);
    },
    polygonEnd: function () {
      (er.lineStart = er.lineEnd = er.point = C), rr.add(s(ir)), (ir = new n());
    },
    result: function () {
      var t = rr / 2;
      return (rr = new n()), t;
    },
  };
function or() {
  er.point = ur;
}
function ur(n, t) {
  (er.point = ar), (Kt = Vt = n), (Qt = nr = t);
}
function ar(n, t) {
  ir.add(nr * n - Vt * t), (Vt = n), (nr = t);
}
function cr() {
  ar(Kt, Qt);
}
var lr = 1 / 0,
  fr = lr,
  sr = -lr,
  pr = sr,
  hr = {
    point: function (n, t) {
      n < lr && (lr = n);
      n > sr && (sr = n);
      t < fr && (fr = t);
      t > pr && (pr = t);
    },
    lineStart: C,
    lineEnd: C,
    polygonStart: C,
    polygonEnd: C,
    result: function () {
      var n = [
        [lr, fr],
        [sr, pr],
      ];
      return (sr = pr = -(fr = lr = 1 / 0)), n;
    },
  };
var gr,
  vr,
  dr,
  Er,
  yr = 0,
  Sr = 0,
  mr = 0,
  Mr = 0,
  wr = 0,
  xr = 0,
  _r = 0,
  Nr = 0,
  Rr = 0,
  Cr = {
    point: Pr,
    lineStart: Ar,
    lineEnd: zr,
    polygonStart: function () {
      (Cr.lineStart = jr), (Cr.lineEnd = Lr);
    },
    polygonEnd: function () {
      (Cr.point = Pr), (Cr.lineStart = Ar), (Cr.lineEnd = zr);
    },
    result: function () {
      var n = Rr
        ? [_r / Rr, Nr / Rr]
        : xr
        ? [Mr / xr, wr / xr]
        : mr
        ? [yr / mr, Sr / mr]
        : [NaN, NaN];
      return (yr = Sr = mr = Mr = wr = xr = _r = Nr = Rr = 0), n;
    },
  };
function Pr(n, t) {
  (yr += n), (Sr += t), ++mr;
}
function Ar() {
  Cr.point = $r;
}
function $r(n, t) {
  (Cr.point = qr), Pr((dr = n), (Er = t));
}
function qr(n, t) {
  var r = n - dr,
    i = t - Er,
    e = w(r * r + i * i);
  (Mr += (e * (dr + n)) / 2),
    (wr += (e * (Er + t)) / 2),
    (xr += e),
    Pr((dr = n), (Er = t));
}
function zr() {
  Cr.point = Pr;
}
function jr() {
  Cr.point = br;
}
function Lr() {
  Gr(gr, vr);
}
function br(n, t) {
  (Cr.point = Gr), Pr((gr = dr = n), (vr = Er = t));
}
function Gr(n, t) {
  var r = n - dr,
    i = t - Er,
    e = w(r * r + i * i);
  (Mr += (e * (dr + n)) / 2),
    (wr += (e * (Er + t)) / 2),
    (xr += e),
    (_r += (e = Er * n - dr * t) * (dr + n)),
    (Nr += e * (Er + t)),
    (Rr += 3 * e),
    Pr((dr = n), (Er = t));
}
function Or(n) {
  this._context = n;
}
Or.prototype = {
  _radius: 4.5,
  pointRadius: function (n) {
    return (this._radius = n), this;
  },
  polygonStart: function () {
    this._line = 0;
  },
  polygonEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    0 === this._line && this._context.closePath(), (this._point = NaN);
  },
  point: function (n, t) {
    switch (this._point) {
      case 0:
        this._context.moveTo(n, t), (this._point = 1);
        break;
      case 1:
        this._context.lineTo(n, t);
        break;
      default:
        this._context.moveTo(n + this._radius, t),
          this._context.arc(n, t, this._radius, 0, c);
    }
  },
  result: C,
};
var Tr,
  kr,
  Fr,
  Hr,
  Ir,
  Wr = new n(),
  Xr = {
    point: C,
    lineStart: function () {
      Xr.point = Yr;
    },
    lineEnd: function () {
      Tr && Br(kr, Fr), (Xr.point = C);
    },
    polygonStart: function () {
      Tr = !0;
    },
    polygonEnd: function () {
      Tr = null;
    },
    result: function () {
      var t = +Wr;
      return (Wr = new n()), t;
    },
  };
function Yr(n, t) {
  (Xr.point = Br), (kr = Hr = n), (Fr = Ir = t);
}
function Br(n, t) {
  (Hr -= n), (Ir -= t), Wr.add(w(Hr * Hr + Ir * Ir)), (Hr = n), (Ir = t);
}
let Dr, Ur, Zr, Jr;
class Kr {
  constructor(n) {
    (this._append =
      null == n
        ? Qr
        : (function (n) {
            const t = Math.floor(n);
            if (!(t >= 0)) throw new RangeError(`invalid digits: ${n}`);
            if (t > 15) return Qr;
            if (t !== Dr) {
              const n = 10 ** t;
              (Dr = t),
                (Ur = function (t) {
                  let r = 1;
                  this._ += t[0];
                  for (const i = t.length; r < i; ++r)
                    this._ += Math.round(arguments[r] * n) / n + t[r];
                });
            }
            return Ur;
          })(n)),
      (this._radius = 4.5),
      (this._ = "");
  }
  pointRadius(n) {
    return (this._radius = +n), this;
  }
  polygonStart() {
    this._line = 0;
  }
  polygonEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    0 === this._line && (this._ += "Z"), (this._point = NaN);
  }
  point(n, t) {
    switch (this._point) {
      case 0:
        this._append`M${n},${t}`, (this._point = 1);
        break;
      case 1:
        this._append`L${n},${t}`;
        break;
      default:
        if (
          (this._append`M${n},${t}`, this._radius !== Zr || this._append !== Ur)
        ) {
          const n = this._radius,
            t = this._;
          (this._ = ""),
            this._append`m0,${n}a${n},${n} 0 1,1 0,${
              -2 * n
            }a${n},${n} 0 1,1 0,${2 * n}z`,
            (Zr = n),
            (Ur = this._append),
            (Jr = this._),
            (this._ = t);
        }
        this._ += Jr;
    }
  }
  result() {
    const n = this._;
    return (this._ = ""), n.length ? n : null;
  }
}
function Qr(n) {
  let t = 1;
  this._ += n[0];
  for (const r = n.length; t < r; ++t) this._ += arguments[t] + n[t];
}
function Vr(n, t) {
  let r,
    i,
    e = 3,
    o = 4.5;
  function u(n) {
    return (
      n &&
        ("function" == typeof o && i.pointRadius(+o.apply(this, arguments)),
        j(n, r(i))),
      i.result()
    );
  }
  return (
    (u.area = function (n) {
      return j(n, r(er)), er.result();
    }),
    (u.measure = function (n) {
      return j(n, r(Xr)), Xr.result();
    }),
    (u.bounds = function (n) {
      return j(n, r(hr)), hr.result();
    }),
    (u.centroid = function (n) {
      return j(n, r(Cr)), Cr.result();
    }),
    (u.projection = function (t) {
      return arguments.length
        ? ((r = null == t ? ((n = null), tr) : (n = t).stream), u)
        : n;
    }),
    (u.context = function (n) {
      return arguments.length
        ? ((i = null == n ? ((t = null), new Kr(e)) : new Or((t = n))),
          "function" != typeof o && i.pointRadius(o),
          u)
        : t;
    }),
    (u.pointRadius = function (n) {
      return arguments.length
        ? ((o = "function" == typeof n ? n : (i.pointRadius(+n), +n)), u)
        : o;
    }),
    (u.digits = function (n) {
      if (!arguments.length) return e;
      if (null == n) e = null;
      else {
        const t = Math.floor(n);
        if (!(t >= 0)) throw new RangeError(`invalid digits: ${n}`);
        e = t;
      }
      return null === t && (i = new Kr(e)), u;
    }),
    u.projection(n).digits(e).context(t)
  );
}
function ni(n) {
  return { stream: ti(n) };
}
function ti(n) {
  return function (t) {
    var r = new ri();
    for (var i in n) r[i] = n[i];
    return (r.stream = t), r;
  };
}
function ri() {}
function ii(n, t, r) {
  var i = n.clipExtent && n.clipExtent();
  return (
    n.scale(150).translate([0, 0]),
    null != i && n.clipExtent(null),
    j(r, n.stream(hr)),
    t(hr.result()),
    null != i && n.clipExtent(i),
    n
  );
}
function ei(n, t, r) {
  return ii(
    n,
    function (r) {
      var i = t[1][0] - t[0][0],
        e = t[1][1] - t[0][1],
        o = Math.min(i / (r[1][0] - r[0][0]), e / (r[1][1] - r[0][1])),
        u = +t[0][0] + (i - o * (r[1][0] + r[0][0])) / 2,
        a = +t[0][1] + (e - o * (r[1][1] + r[0][1])) / 2;
      n.scale(150 * o).translate([u, a]);
    },
    r,
  );
}
function oi(n, t, r) {
  return ei(n, [[0, 0], t], r);
}
function ui(n, t, r) {
  return ii(
    n,
    function (r) {
      var i = +t,
        e = i / (r[1][0] - r[0][0]),
        o = (i - e * (r[1][0] + r[0][0])) / 2,
        u = -e * r[0][1];
      n.scale(150 * e).translate([o, u]);
    },
    r,
  );
}
function ai(n, t, r) {
  return ii(
    n,
    function (r) {
      var i = +t,
        e = i / (r[1][1] - r[0][1]),
        o = -e * r[0][0],
        u = (i - e * (r[1][1] + r[0][1])) / 2;
      n.scale(150 * e).translate([o, u]);
    },
    r,
  );
}
ri.prototype = {
  constructor: ri,
  point: function (n, t) {
    this.stream.point(n, t);
  },
  sphere: function () {
    this.stream.sphere();
  },
  lineStart: function () {
    this.stream.lineStart();
  },
  lineEnd: function () {
    this.stream.lineEnd();
  },
  polygonStart: function () {
    this.stream.polygonStart();
  },
  polygonEnd: function () {
    this.stream.polygonEnd();
  },
};
var ci = 16,
  li = g(30 * f);
function fi(n, t) {
  return +t
    ? (function (n, t) {
        function r(e, o, u, a, c, l, f, p, g, v, d, E, y, S) {
          var m = f - e,
            M = p - o,
            x = m * m + M * M;
          if (x > 4 * t && y--) {
            var _ = a + v,
              R = c + d,
              C = l + E,
              P = w(_ * _ + R * R + C * C),
              A = N((C /= P)),
              $ = s(s(C) - 1) < i || s(u - g) < i ? (u + g) / 2 : h(R, _),
              q = n($, A),
              z = q[0],
              j = q[1],
              L = z - e,
              b = j - o,
              G = M * L - m * b;
            ((G * G) / x > t ||
              s((m * L + M * b) / x - 0.5) > 0.3 ||
              a * v + c * d + l * E < li) &&
              (r(e, o, u, a, c, l, z, j, $, (_ /= P), (R /= P), C, y, S),
              S.point(z, j),
              r(z, j, $, _, R, C, f, p, g, v, d, E, y, S));
          }
        }
        return function (t) {
          var i,
            e,
            o,
            u,
            a,
            c,
            l,
            f,
            s,
            p,
            h,
            g,
            v = {
              point: d,
              lineStart: E,
              lineEnd: S,
              polygonStart: function () {
                t.polygonStart(), (v.lineStart = m);
              },
              polygonEnd: function () {
                t.polygonEnd(), (v.lineStart = E);
              },
            };
          function d(r, i) {
            (r = n(r, i)), t.point(r[0], r[1]);
          }
          function E() {
            (f = NaN), (v.point = y), t.lineStart();
          }
          function y(i, e) {
            var o = un([i, e]),
              u = n(i, e);
            r(
              f,
              s,
              l,
              p,
              h,
              g,
              (f = u[0]),
              (s = u[1]),
              (l = i),
              (p = o[0]),
              (h = o[1]),
              (g = o[2]),
              ci,
              t,
            ),
              t.point(f, s);
          }
          function S() {
            (v.point = d), t.lineEnd();
          }
          function m() {
            E(), (v.point = M), (v.lineEnd = w);
          }
          function M(n, t) {
            y((i = n), t),
              (e = f),
              (o = s),
              (u = p),
              (a = h),
              (c = g),
              (v.point = y);
          }
          function w() {
            r(f, s, l, p, h, g, e, o, i, u, a, c, ci, t), (v.lineEnd = S), S();
          }
          return v;
        };
      })(n, t)
    : (function (n) {
        return ti({
          point: function (t, r) {
            (t = n(t, r)), this.stream.point(t[0], t[1]);
          },
        });
      })(n);
}
var si = ti({
  point: function (n, t) {
    this.stream.point(n * f, t * f);
  },
});
function pi(n, t, r, i, e, o) {
  if (!o)
    return (function (n, t, r, i, e) {
      function o(o, u) {
        return [t + n * (o *= i), r - n * (u *= e)];
      }
      return (
        (o.invert = function (o, u) {
          return [((o - t) / n) * i, ((r - u) / n) * e];
        }),
        o
      );
    })(n, t, r, i, e);
  var u = g(o),
    a = m(o),
    c = u * n,
    l = a * n,
    f = u / n,
    s = a / n,
    p = (a * r - u * t) / n,
    h = (a * t + u * r) / n;
  function v(n, o) {
    return [c * (n *= i) - l * (o *= e) + t, r - l * n - c * o];
  }
  return (
    (v.invert = function (n, t) {
      return [i * (f * n - s * t + p), e * (h - s * n - f * t)];
    }),
    v
  );
}
function hi(n) {
  return gi(function () {
    return n;
  })();
}
function gi(n) {
  var t,
    r,
    i,
    e,
    o,
    u,
    a,
    c,
    s,
    p,
    h = 150,
    g = 480,
    v = 250,
    d = 0,
    E = 0,
    y = 0,
    S = 0,
    m = 0,
    M = 0,
    x = 1,
    _ = 1,
    N = null,
    R = St,
    C = null,
    P = tr,
    A = 0.5;
  function $(n) {
    return c(n[0] * f, n[1] * f);
  }
  function q(n) {
    return (n = c.invert(n[0], n[1])) && [n[0] * l, n[1] * l];
  }
  function z() {
    var n = pi(h, 0, 0, x, _, M).apply(null, t(d, E)),
      i = pi(h, g - n[0], v - n[1], x, _, M);
    return (
      (r = tt(y, S, m)), (a = Vn(t, i)), (c = Vn(r, a)), (u = fi(a, A)), j()
    );
  }
  function j() {
    return (s = p = null), $;
  }
  return (
    ($.stream = function (n) {
      return s && p === n
        ? s
        : (s = si(
            (function (n) {
              return ti({
                point: function (t, r) {
                  var i = n(t, r);
                  return this.stream.point(i[0], i[1]);
                },
              });
            })(r)(R(u(P((p = n))))),
          ));
    }),
    ($.preclip = function (n) {
      return arguments.length ? ((R = n), (N = void 0), j()) : R;
    }),
    ($.postclip = function (n) {
      return arguments.length ? ((P = n), (C = i = e = o = null), j()) : P;
    }),
    ($.clipAngle = function (n) {
      return arguments.length
        ? ((R = +n ? mt((N = n * f)) : ((N = null), St)), j())
        : N * l;
    }),
    ($.clipExtent = function (n) {
      return arguments.length
        ? ((P =
            null == n
              ? ((C = i = e = o = null), tr)
              : Ct(
                  (C = +n[0][0]),
                  (i = +n[0][1]),
                  (e = +n[1][0]),
                  (o = +n[1][1]),
                )),
          j())
        : null == C
        ? null
        : [
            [C, i],
            [e, o],
          ];
    }),
    ($.scale = function (n) {
      return arguments.length ? ((h = +n), z()) : h;
    }),
    ($.translate = function (n) {
      return arguments.length ? ((g = +n[0]), (v = +n[1]), z()) : [g, v];
    }),
    ($.center = function (n) {
      return arguments.length
        ? ((d = (n[0] % 360) * f), (E = (n[1] % 360) * f), z())
        : [d * l, E * l];
    }),
    ($.rotate = function (n) {
      return arguments.length
        ? ((y = (n[0] % 360) * f),
          (S = (n[1] % 360) * f),
          (m = n.length > 2 ? (n[2] % 360) * f : 0),
          z())
        : [y * l, S * l, m * l];
    }),
    ($.angle = function (n) {
      return arguments.length ? ((M = (n % 360) * f), z()) : M * l;
    }),
    ($.reflectX = function (n) {
      return arguments.length ? ((x = n ? -1 : 1), z()) : x < 0;
    }),
    ($.reflectY = function (n) {
      return arguments.length ? ((_ = n ? -1 : 1), z()) : _ < 0;
    }),
    ($.precision = function (n) {
      return arguments.length ? ((u = fi(a, (A = n * n))), j()) : w(A);
    }),
    ($.fitExtent = function (n, t) {
      return ei($, n, t);
    }),
    ($.fitSize = function (n, t) {
      return oi($, n, t);
    }),
    ($.fitWidth = function (n, t) {
      return ui($, n, t);
    }),
    ($.fitHeight = function (n, t) {
      return ai($, n, t);
    }),
    function () {
      return (t = n.apply(this, arguments)), ($.invert = t.invert && q), z();
    }
  );
}
function vi(n) {
  var t = 0,
    r = o / 3,
    i = gi(n),
    e = i(t, r);
  return (
    (e.parallels = function (n) {
      return arguments.length
        ? i((t = n[0] * f), (r = n[1] * f))
        : [t * l, r * l];
    }),
    e
  );
}
function di(n, t) {
  var r = m(n),
    e = (r + m(t)) / 2;
  if (s(e) < i)
    return (function (n) {
      var t = g(n);
      function r(n, r) {
        return [n * t, m(r) / t];
      }
      return (
        (r.invert = function (n, r) {
          return [n / t, N(r * t)];
        }),
        r
      );
    })(n);
  var u = 1 + r * (2 * e - r),
    a = w(u) / e;
  function c(n, t) {
    var r = w(u - 2 * e * m(t)) / e;
    return [r * m((n *= e)), a - r * g(n)];
  }
  return (
    (c.invert = function (n, t) {
      var r = a - t,
        i = h(n, s(r)) * M(r);
      return (
        r * e < 0 && (i -= o * M(n) * M(r)),
        [i / e, N((u - (n * n + r * r) * e * e) / (2 * e))]
      );
    }),
    c
  );
}
function Ei() {
  return vi(di).scale(155.424).center([0, 33.6442]);
}
function yi() {
  return Ei()
    .parallels([29.5, 45.5])
    .scale(1070)
    .translate([480, 250])
    .rotate([96, 0])
    .center([-0.6, 38.7]);
}
function Si() {
  var n,
    t,
    r,
    e,
    o,
    u,
    a = yi(),
    c = Ei().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
    l = Ei().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
    f = {
      point: function (n, t) {
        u = [n, t];
      },
    };
  function s(n) {
    var t = n[0],
      i = n[1];
    return (
      (u = null), r.point(t, i), u || (e.point(t, i), u) || (o.point(t, i), u)
    );
  }
  function p() {
    return (n = t = null), s;
  }
  return (
    (s.invert = function (n) {
      var t = a.scale(),
        r = a.translate(),
        i = (n[0] - r[0]) / t,
        e = (n[1] - r[1]) / t;
      return (
        e >= 0.12 && e < 0.234 && i >= -0.425 && i < -0.214
          ? c
          : e >= 0.166 && e < 0.234 && i >= -0.214 && i < -0.115
          ? l
          : a
      ).invert(n);
    }),
    (s.stream = function (r) {
      return n && t === r
        ? n
        : ((i = [a.stream((t = r)), c.stream(r), l.stream(r)]),
          (e = i.length),
          (n = {
            point: function (n, t) {
              for (var r = -1; ++r < e; ) i[r].point(n, t);
            },
            sphere: function () {
              for (var n = -1; ++n < e; ) i[n].sphere();
            },
            lineStart: function () {
              for (var n = -1; ++n < e; ) i[n].lineStart();
            },
            lineEnd: function () {
              for (var n = -1; ++n < e; ) i[n].lineEnd();
            },
            polygonStart: function () {
              for (var n = -1; ++n < e; ) i[n].polygonStart();
            },
            polygonEnd: function () {
              for (var n = -1; ++n < e; ) i[n].polygonEnd();
            },
          }));
      var i, e;
    }),
    (s.precision = function (n) {
      return arguments.length
        ? (a.precision(n), c.precision(n), l.precision(n), p())
        : a.precision();
    }),
    (s.scale = function (n) {
      return arguments.length
        ? (a.scale(n),
          c.scale(0.35 * n),
          l.scale(n),
          s.translate(a.translate()))
        : a.scale();
    }),
    (s.translate = function (n) {
      if (!arguments.length) return a.translate();
      var t = a.scale(),
        u = +n[0],
        s = +n[1];
      return (
        (r = a
          .translate(n)
          .clipExtent([
            [u - 0.455 * t, s - 0.238 * t],
            [u + 0.455 * t, s + 0.238 * t],
          ])
          .stream(f)),
        (e = c
          .translate([u - 0.307 * t, s + 0.201 * t])
          .clipExtent([
            [u - 0.425 * t + i, s + 0.12 * t + i],
            [u - 0.214 * t - i, s + 0.234 * t - i],
          ])
          .stream(f)),
        (o = l
          .translate([u - 0.205 * t, s + 0.212 * t])
          .clipExtent([
            [u - 0.214 * t + i, s + 0.166 * t + i],
            [u - 0.115 * t - i, s + 0.234 * t - i],
          ])
          .stream(f)),
        p()
      );
    }),
    (s.fitExtent = function (n, t) {
      return ei(s, n, t);
    }),
    (s.fitSize = function (n, t) {
      return oi(s, n, t);
    }),
    (s.fitWidth = function (n, t) {
      return ui(s, n, t);
    }),
    (s.fitHeight = function (n, t) {
      return ai(s, n, t);
    }),
    s.scale(1070)
  );
}
function mi(n) {
  return function (t, r) {
    var i = g(t),
      e = g(r),
      o = n(i * e);
    return o === 1 / 0 ? [2, 0] : [o * e * m(t), o * m(r)];
  };
}
function Mi(n) {
  return function (t, r) {
    var i = w(t * t + r * r),
      e = n(i),
      o = m(e),
      u = g(e);
    return [h(t * o, i * u), N(i && (r * o) / i)];
  };
}
var wi = mi(function (n) {
  return w(2 / (1 + n));
});
function xi() {
  return hi(wi).scale(124.75).clipAngle(179.999);
}
wi.invert = Mi(function (n) {
  return 2 * N(n / 2);
});
var _i = mi(function (n) {
  return (n = _(n)) && n / m(n);
});
function Ni() {
  return hi(_i).scale(79.4188).clipAngle(179.999);
}
function Ri(n, t) {
  return [n, y(x((u + t) / 2))];
}
function Ci() {
  return Pi(Ri).scale(961 / c);
}
function Pi(n) {
  var t,
    r,
    i,
    e = hi(n),
    u = e.center,
    a = e.scale,
    c = e.translate,
    l = e.clipExtent,
    f = null;
  function s() {
    var u = o * a(),
      c = e(ot(e.rotate()).invert([0, 0]));
    return l(
      null == f
        ? [
            [c[0] - u, c[1] - u],
            [c[0] + u, c[1] + u],
          ]
        : n === Ri
        ? [
            [Math.max(c[0] - u, f), t],
            [Math.min(c[0] + u, r), i],
          ]
        : [
            [f, Math.max(c[1] - u, t)],
            [r, Math.min(c[1] + u, i)],
          ],
    );
  }
  return (
    (e.scale = function (n) {
      return arguments.length ? (a(n), s()) : a();
    }),
    (e.translate = function (n) {
      return arguments.length ? (c(n), s()) : c();
    }),
    (e.center = function (n) {
      return arguments.length ? (u(n), s()) : u();
    }),
    (e.clipExtent = function (n) {
      return arguments.length
        ? (null == n
            ? (f = t = r = i = null)
            : ((f = +n[0][0]), (t = +n[0][1]), (r = +n[1][0]), (i = +n[1][1])),
          s())
        : null == f
        ? null
        : [
            [f, t],
            [r, i],
          ];
    }),
    s()
  );
}
function Ai(n) {
  return x((u + n) / 2);
}
function $i(n, t) {
  var r = g(n),
    e = n === t ? m(n) : y(r / g(t)) / y(Ai(t) / Ai(n)),
    a = (r * S(Ai(n), e)) / e;
  if (!e) return Ri;
  function c(n, t) {
    a > 0 ? t < -u + i && (t = -u + i) : t > u - i && (t = u - i);
    var r = a / S(Ai(t), e);
    return [r * m(e * n), a - r * g(e * n)];
  }
  return (
    (c.invert = function (n, t) {
      var r = a - t,
        i = M(e) * w(n * n + r * r),
        c = h(n, s(r)) * M(r);
      return (
        r * e < 0 && (c -= o * M(n) * M(r)), [c / e, 2 * p(S(a / i, 1 / e)) - u]
      );
    }),
    c
  );
}
function qi() {
  return vi($i).scale(109.5).parallels([30, 30]);
}
function zi(n, t) {
  return [n, t];
}
function ji() {
  return hi(zi).scale(152.63);
}
function Li(n, t) {
  var r = g(n),
    e = n === t ? m(n) : (r - g(t)) / (t - n),
    u = r / e + n;
  if (s(e) < i) return zi;
  function a(n, t) {
    var r = u - t,
      i = e * n;
    return [r * m(i), u - r * g(i)];
  }
  return (
    (a.invert = function (n, t) {
      var r = u - t,
        i = h(n, s(r)) * M(r);
      return (
        r * e < 0 && (i -= o * M(n) * M(r)),
        [i / e, u - M(e) * w(n * n + r * r)]
      );
    }),
    a
  );
}
function bi() {
  return vi(Li).scale(131.154).center([0, 13.9389]);
}
(_i.invert = Mi(function (n) {
  return n;
})),
  (Ri.invert = function (n, t) {
    return [n, 2 * p(d(t)) - u];
  }),
  (zi.invert = zi);
var Gi = 1.340264,
  Oi = -0.081106,
  Ti = 893e-6,
  ki = 0.003796,
  Fi = w(3) / 2;
function Hi(n, t) {
  var r = N(Fi * m(t)),
    i = r * r,
    e = i * i * i;
  return [
    (n * g(r)) / (Fi * (Gi + 3 * Oi * i + e * (7 * Ti + 9 * ki * i))),
    r * (Gi + Oi * i + e * (Ti + ki * i)),
  ];
}
function Ii() {
  return hi(Hi).scale(177.158);
}
function Wi(n, t) {
  var r = g(t),
    i = g(n) * r;
  return [(r * m(n)) / i, m(t) / i];
}
function Xi() {
  return hi(Wi).scale(144.049).clipAngle(60);
}
function Yi() {
  var n,
    t,
    r,
    i,
    e,
    o,
    u,
    a = 1,
    c = 0,
    s = 0,
    p = 1,
    h = 1,
    v = 0,
    d = null,
    E = 1,
    y = 1,
    S = ti({
      point: function (n, t) {
        var r = x([n, t]);
        this.stream.point(r[0], r[1]);
      },
    }),
    M = tr;
  function w() {
    return (E = a * p), (y = a * h), (o = u = null), x;
  }
  function x(r) {
    var i = r[0] * E,
      e = r[1] * y;
    if (v) {
      var o = e * n - i * t;
      (i = i * n + e * t), (e = o);
    }
    return [i + c, e + s];
  }
  return (
    (x.invert = function (r) {
      var i = r[0] - c,
        e = r[1] - s;
      if (v) {
        var o = e * n + i * t;
        (i = i * n - e * t), (e = o);
      }
      return [i / E, e / y];
    }),
    (x.stream = function (n) {
      return o && u === n ? o : (o = S(M((u = n))));
    }),
    (x.postclip = function (n) {
      return arguments.length ? ((M = n), (d = r = i = e = null), w()) : M;
    }),
    (x.clipExtent = function (n) {
      return arguments.length
        ? ((M =
            null == n
              ? ((d = r = i = e = null), tr)
              : Ct(
                  (d = +n[0][0]),
                  (r = +n[0][1]),
                  (i = +n[1][0]),
                  (e = +n[1][1]),
                )),
          w())
        : null == d
        ? null
        : [
            [d, r],
            [i, e],
          ];
    }),
    (x.scale = function (n) {
      return arguments.length ? ((a = +n), w()) : a;
    }),
    (x.translate = function (n) {
      return arguments.length ? ((c = +n[0]), (s = +n[1]), w()) : [c, s];
    }),
    (x.angle = function (r) {
      return arguments.length
        ? ((t = m((v = (r % 360) * f))), (n = g(v)), w())
        : v * l;
    }),
    (x.reflectX = function (n) {
      return arguments.length ? ((p = n ? -1 : 1), w()) : p < 0;
    }),
    (x.reflectY = function (n) {
      return arguments.length ? ((h = n ? -1 : 1), w()) : h < 0;
    }),
    (x.fitExtent = function (n, t) {
      return ei(x, n, t);
    }),
    (x.fitSize = function (n, t) {
      return oi(x, n, t);
    }),
    (x.fitWidth = function (n, t) {
      return ui(x, n, t);
    }),
    (x.fitHeight = function (n, t) {
      return ai(x, n, t);
    }),
    x
  );
}
function Bi(n, t) {
  var r = t * t,
    i = r * r;
  return [
    n *
      (0.8707 -
        0.131979 * r +
        i * (i * (0.003971 * r - 0.001529 * i) - 0.013791)),
    t *
      (1.007226 +
        r * (0.015085 + i * (0.028874 * r - 0.044475 - 0.005916 * i))),
  ];
}
function Di() {
  return hi(Bi).scale(175.295);
}
function Ui(n, t) {
  return [g(t) * m(n), m(t)];
}
function Zi() {
  return hi(Ui)
    .scale(249.5)
    .clipAngle(90 + i);
}
function Ji(n, t) {
  var r = g(t),
    i = 1 + g(n) * r;
  return [(r * m(n)) / i, m(t) / i];
}
function Ki() {
  return hi(Ji).scale(250).clipAngle(142);
}
function Qi(n, t) {
  return [y(x((u + t) / 2)), -n];
}
function Vi() {
  var n = Pi(Qi),
    t = n.center,
    r = n.rotate;
  return (
    (n.center = function (n) {
      return arguments.length ? t([-n[1], n[0]]) : [(n = t())[1], -n[0]];
    }),
    (n.rotate = function (n) {
      return arguments.length
        ? r([n[0], n[1], n.length > 2 ? n[2] + 90 : 90])
        : [(n = r())[0], n[1], n[2] - 90];
    }),
    r([0, 0, 90]).scale(159.155)
  );
}
(Hi.invert = function (n, t) {
  for (
    var r, i = t, o = i * i, u = o * o * o, a = 0;
    a < 12 &&
    ((u =
      (o =
        (i -= r =
          (i * (Gi + Oi * o + u * (Ti + ki * o)) - t) /
          (Gi + 3 * Oi * o + u * (7 * Ti + 9 * ki * o))) * i) *
      o *
      o),
    !(s(r) < e));
    ++a
  );
  return [
    (Fi * n * (Gi + 3 * Oi * o + u * (7 * Ti + 9 * ki * o))) / g(i),
    N(m(i) / Fi),
  ];
}),
  (Wi.invert = Mi(p)),
  (Bi.invert = function (n, t) {
    var r,
      e = t,
      o = 25;
    do {
      var u = e * e,
        a = u * u;
      e -= r =
        (e *
          (1.007226 +
            u * (0.015085 + a * (0.028874 * u - 0.044475 - 0.005916 * a))) -
          t) /
        (1.007226 +
          u * (0.045255 + a * (0.259866 * u - 0.311325 - 0.005916 * 11 * a)));
    } while (s(r) > i && --o > 0);
    return [
      n /
        (0.8707 +
          (u = e * e) *
            (u * (u * u * u * (0.003971 - 0.001529 * u) - 0.013791) -
              0.131979)),
      e,
    ];
  }),
  (Ui.invert = Mi(N)),
  (Ji.invert = Mi(function (n) {
    return 2 * p(n);
  })),
  (Qi.invert = function (n, t) {
    return [-t, 2 * p(d(n)) - u];
  });
export {
  yi as geoAlbers,
  Si as geoAlbersUsa,
  en as geoArea,
  xi as geoAzimuthalEqualArea,
  wi as geoAzimuthalEqualAreaRaw,
  Ni as geoAzimuthalEquidistant,
  _i as geoAzimuthalEquidistantRaw,
  kn as geoBounds,
  Kn as geoCentroid,
  ct as geoCircle,
  St as geoClipAntimeridian,
  mt as geoClipCircle,
  Pt as geoClipExtent,
  Ct as geoClipRectangle,
  qi as geoConicConformal,
  $i as geoConicConformalRaw,
  Ei as geoConicEqualArea,
  di as geoConicEqualAreaRaw,
  bi as geoConicEquidistant,
  Li as geoConicEquidistantRaw,
  Yt as geoContains,
  Gt as geoDistance,
  Ii as geoEqualEarth,
  Hi as geoEqualEarthRaw,
  ji as geoEquirectangular,
  zi as geoEquirectangularRaw,
  Xi as geoGnomonic,
  Wi as geoGnomonicRaw,
  Ut as geoGraticule,
  Zt as geoGraticule10,
  Yi as geoIdentity,
  Jt as geoInterpolate,
  jt as geoLength,
  Ci as geoMercator,
  Ri as geoMercatorRaw,
  Di as geoNaturalEarth1,
  Bi as geoNaturalEarth1Raw,
  Zi as geoOrthographic,
  Ui as geoOrthographicRaw,
  Vr as geoPath,
  hi as geoProjection,
  gi as geoProjectionMutator,
  ot as geoRotation,
  Ki as geoStereographic,
  Ji as geoStereographicRaw,
  j as geoStream,
  ni as geoTransform,
  Vi as geoTransverseMercator,
  Qi as geoTransverseMercatorRaw,
};
export default null;
