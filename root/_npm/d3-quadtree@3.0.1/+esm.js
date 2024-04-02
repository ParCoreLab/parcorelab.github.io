/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/d3-quadtree@3.0.1/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function t(t, i, r, n) {
  if (isNaN(i) || isNaN(r)) return t;
  var e,
    h,
    s,
    o,
    a,
    u,
    l,
    _,
    f,
    x = t._root,
    c = { data: n },
    y = t._x0,
    v = t._y0,
    d = t._x1,
    p = t._y1;
  if (!x) return (t._root = c), t;
  for (; x.length; )
    if (
      ((u = i >= (h = (y + d) / 2)) ? (y = h) : (d = h),
      (l = r >= (s = (v + p) / 2)) ? (v = s) : (p = s),
      (e = x),
      !(x = x[(_ = (l << 1) | u)]))
    )
      return (e[_] = c), t;
  if (
    ((o = +t._x.call(null, x.data)),
    (a = +t._y.call(null, x.data)),
    i === o && r === a)
  )
    return (c.next = x), e ? (e[_] = c) : (t._root = c), t;
  do {
    (e = e ? (e[_] = new Array(4)) : (t._root = new Array(4))),
      (u = i >= (h = (y + d) / 2)) ? (y = h) : (d = h),
      (l = r >= (s = (v + p) / 2)) ? (v = s) : (p = s);
  } while ((_ = (l << 1) | u) == (f = ((a >= s) << 1) | (o >= h)));
  return (e[f] = x), (e[_] = c), t;
}
function i(t, i, r, n, e) {
  (this.node = t), (this.x0 = i), (this.y0 = r), (this.x1 = n), (this.y1 = e);
}
function r(t) {
  return t[0];
}
function n(t) {
  return t[1];
}
function e(t, i, e) {
  var s = new h(null == i ? r : i, null == e ? n : e, NaN, NaN, NaN, NaN);
  return null == t ? s : s.addAll(t);
}
function h(t, i, r, n, e, h) {
  (this._x = t),
    (this._y = i),
    (this._x0 = r),
    (this._y0 = n),
    (this._x1 = e),
    (this._y1 = h),
    (this._root = void 0);
}
function s(t) {
  for (var i = { data: t.data }, r = i; (t = t.next); )
    r = r.next = { data: t.data };
  return i;
}
var o = (e.prototype = h.prototype);
(o.copy = function () {
  var t,
    i,
    r = new h(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
    n = this._root;
  if (!n) return r;
  if (!n.length) return (r._root = s(n)), r;
  for (t = [{ source: n, target: (r._root = new Array(4)) }]; (n = t.pop()); )
    for (var e = 0; e < 4; ++e)
      (i = n.source[e]) &&
        (i.length
          ? t.push({ source: i, target: (n.target[e] = new Array(4)) })
          : (n.target[e] = s(i)));
  return r;
}),
  (o.add = function (i) {
    const r = +this._x.call(null, i),
      n = +this._y.call(null, i);
    return t(this.cover(r, n), r, n, i);
  }),
  (o.addAll = function (i) {
    var r,
      n,
      e,
      h,
      s = i.length,
      o = new Array(s),
      a = new Array(s),
      u = 1 / 0,
      l = 1 / 0,
      _ = -1 / 0,
      f = -1 / 0;
    for (n = 0; n < s; ++n)
      isNaN((e = +this._x.call(null, (r = i[n])))) ||
        isNaN((h = +this._y.call(null, r))) ||
        ((o[n] = e),
        (a[n] = h),
        e < u && (u = e),
        e > _ && (_ = e),
        h < l && (l = h),
        h > f && (f = h));
    if (u > _ || l > f) return this;
    for (this.cover(u, l).cover(_, f), n = 0; n < s; ++n)
      t(this, o[n], a[n], i[n]);
    return this;
  }),
  (o.cover = function (t, i) {
    if (isNaN((t = +t)) || isNaN((i = +i))) return this;
    var r = this._x0,
      n = this._y0,
      e = this._x1,
      h = this._y1;
    if (isNaN(r)) (e = (r = Math.floor(t)) + 1), (h = (n = Math.floor(i)) + 1);
    else {
      for (
        var s, o, a = e - r || 1, u = this._root;
        r > t || t >= e || n > i || i >= h;

      )
        switch (
          ((o = ((i < n) << 1) | (t < r)),
          ((s = new Array(4))[o] = u),
          (u = s),
          (a *= 2),
          o)
        ) {
          case 0:
            (e = r + a), (h = n + a);
            break;
          case 1:
            (r = e - a), (h = n + a);
            break;
          case 2:
            (e = r + a), (n = h - a);
            break;
          case 3:
            (r = e - a), (n = h - a);
        }
      this._root && this._root.length && (this._root = u);
    }
    return (this._x0 = r), (this._y0 = n), (this._x1 = e), (this._y1 = h), this;
  }),
  (o.data = function () {
    var t = [];
    return (
      this.visit(function (i) {
        if (!i.length)
          do {
            t.push(i.data);
          } while ((i = i.next));
      }),
      t
    );
  }),
  (o.extent = function (t) {
    return arguments.length
      ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1])
      : isNaN(this._x0)
      ? void 0
      : [
          [this._x0, this._y0],
          [this._x1, this._y1],
        ];
  }),
  (o.find = function (t, r, n) {
    var e,
      h,
      s,
      o,
      a,
      u,
      l,
      _ = this._x0,
      f = this._y0,
      x = this._x1,
      c = this._y1,
      y = [],
      v = this._root;
    for (
      v && y.push(new i(v, _, f, x, c)),
        null == n
          ? (n = 1 / 0)
          : ((_ = t - n), (f = r - n), (x = t + n), (c = r + n), (n *= n));
      (u = y.pop());

    )
      if (
        !(
          !(v = u.node) ||
          (h = u.x0) > x ||
          (s = u.y0) > c ||
          (o = u.x1) < _ ||
          (a = u.y1) < f
        )
      )
        if (v.length) {
          var d = (h + o) / 2,
            p = (s + a) / 2;
          y.push(
            new i(v[3], d, p, o, a),
            new i(v[2], h, p, d, a),
            new i(v[1], d, s, o, p),
            new i(v[0], h, s, d, p),
          ),
            (l = ((r >= p) << 1) | (t >= d)) &&
              ((u = y[y.length - 1]),
              (y[y.length - 1] = y[y.length - 1 - l]),
              (y[y.length - 1 - l] = u));
        } else {
          var w = t - +this._x.call(null, v.data),
            N = r - +this._y.call(null, v.data),
            g = w * w + N * N;
          if (g < n) {
            var A = Math.sqrt((n = g));
            (_ = t - A), (f = r - A), (x = t + A), (c = r + A), (e = v.data);
          }
        }
    return e;
  }),
  (o.remove = function (t) {
    if (
      isNaN((h = +this._x.call(null, t))) ||
      isNaN((s = +this._y.call(null, t)))
    )
      return this;
    var i,
      r,
      n,
      e,
      h,
      s,
      o,
      a,
      u,
      l,
      _,
      f,
      x = this._root,
      c = this._x0,
      y = this._y0,
      v = this._x1,
      d = this._y1;
    if (!x) return this;
    if (x.length)
      for (;;) {
        if (
          ((u = h >= (o = (c + v) / 2)) ? (c = o) : (v = o),
          (l = s >= (a = (y + d) / 2)) ? (y = a) : (d = a),
          (i = x),
          !(x = x[(_ = (l << 1) | u)]))
        )
          return this;
        if (!x.length) break;
        (i[(_ + 1) & 3] || i[(_ + 2) & 3] || i[(_ + 3) & 3]) &&
          ((r = i), (f = _));
      }
    for (; x.data !== t; ) if (((n = x), !(x = x.next))) return this;
    return (
      (e = x.next) && delete x.next,
      n
        ? (e ? (n.next = e) : delete n.next, this)
        : i
        ? (e ? (i[_] = e) : delete i[_],
          (x = i[0] || i[1] || i[2] || i[3]) &&
            x === (i[3] || i[2] || i[1] || i[0]) &&
            !x.length &&
            (r ? (r[f] = x) : (this._root = x)),
          this)
        : ((this._root = e), this)
    );
  }),
  (o.removeAll = function (t) {
    for (var i = 0, r = t.length; i < r; ++i) this.remove(t[i]);
    return this;
  }),
  (o.root = function () {
    return this._root;
  }),
  (o.size = function () {
    var t = 0;
    return (
      this.visit(function (i) {
        if (!i.length)
          do {
            ++t;
          } while ((i = i.next));
      }),
      t
    );
  }),
  (o.visit = function (t) {
    var r,
      n,
      e,
      h,
      s,
      o,
      a = [],
      u = this._root;
    for (
      u && a.push(new i(u, this._x0, this._y0, this._x1, this._y1));
      (r = a.pop());

    )
      if (
        !t((u = r.node), (e = r.x0), (h = r.y0), (s = r.x1), (o = r.y1)) &&
        u.length
      ) {
        var l = (e + s) / 2,
          _ = (h + o) / 2;
        (n = u[3]) && a.push(new i(n, l, _, s, o)),
          (n = u[2]) && a.push(new i(n, e, _, l, o)),
          (n = u[1]) && a.push(new i(n, l, h, s, _)),
          (n = u[0]) && a.push(new i(n, e, h, l, _));
      }
    return this;
  }),
  (o.visitAfter = function (t) {
    var r,
      n = [],
      e = [];
    for (
      this._root &&
      n.push(new i(this._root, this._x0, this._y0, this._x1, this._y1));
      (r = n.pop());

    ) {
      var h = r.node;
      if (h.length) {
        var s,
          o = r.x0,
          a = r.y0,
          u = r.x1,
          l = r.y1,
          _ = (o + u) / 2,
          f = (a + l) / 2;
        (s = h[0]) && n.push(new i(s, o, a, _, f)),
          (s = h[1]) && n.push(new i(s, _, a, u, f)),
          (s = h[2]) && n.push(new i(s, o, f, _, l)),
          (s = h[3]) && n.push(new i(s, _, f, u, l));
      }
      e.push(r);
    }
    for (; (r = e.pop()); ) t(r.node, r.x0, r.y0, r.x1, r.y1);
    return this;
  }),
  (o.x = function (t) {
    return arguments.length ? ((this._x = t), this) : this._x;
  }),
  (o.y = function (t) {
    return arguments.length ? ((this._y = t), this) : this._y;
  });
export { e as quadtree };
export default null;
