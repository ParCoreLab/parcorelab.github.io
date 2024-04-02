/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/interval-tree-1d@1.0.4/interval-tree.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import t from "../binary-search-bounds@2.0.5/+esm.js";
var i = t,
  r = function (t) {
    if (!t || 0 === t.length) return new m(null);
    return new m(v(t));
  };
function n(t, i, r, n, s) {
  (this.mid = t),
    (this.left = i),
    (this.right = r),
    (this.leftPoints = n),
    (this.rightPoints = s),
    (this.count = (i ? i.count : 0) + (r ? r.count : 0) + n.length);
}
var s = n.prototype;
function h(t, i) {
  (t.mid = i.mid),
    (t.left = i.left),
    (t.right = i.right),
    (t.leftPoints = i.leftPoints),
    (t.rightPoints = i.rightPoints),
    (t.count = i.count);
}
function e(t, i) {
  var r = v(i);
  (t.mid = r.mid),
    (t.left = r.left),
    (t.right = r.right),
    (t.leftPoints = r.leftPoints),
    (t.rightPoints = r.rightPoints),
    (t.count = r.count);
}
function o(t, i) {
  var r = t.intervals([]);
  r.push(i), e(t, r);
}
function f(t, i) {
  var r = t.intervals([]),
    n = r.indexOf(i);
  return n < 0 ? 0 : (r.splice(n, 1), e(t, r), 1);
}
function u(t, i, r) {
  for (var n = 0; n < t.length && t[n][0] <= i; ++n) {
    var s = r(t[n]);
    if (s) return s;
  }
}
function l(t, i, r) {
  for (var n = t.length - 1; n >= 0 && t[n][1] >= i; --n) {
    var s = r(t[n]);
    if (s) return s;
  }
}
function g(t, i) {
  for (var r = 0; r < t.length; ++r) {
    var n = i(t[r]);
    if (n) return n;
  }
}
function c(t, i) {
  return t - i;
}
function P(t, i) {
  var r = t[0] - i[0];
  return r || t[1] - i[1];
}
function a(t, i) {
  var r = t[1] - i[1];
  return r || t[0] - i[0];
}
function v(t) {
  if (0 === t.length) return null;
  for (var i = [], r = 0; r < t.length; ++r) i.push(t[r][0], t[r][1]);
  i.sort(c);
  var s = i[i.length >> 1],
    h = [],
    e = [],
    o = [];
  for (r = 0; r < t.length; ++r) {
    var f = t[r];
    f[1] < s ? h.push(f) : s < f[0] ? e.push(f) : o.push(f);
  }
  var u = o,
    l = o.slice();
  return u.sort(P), l.sort(a), new n(s, v(h), v(e), u, l);
}
function m(t) {
  this.root = t;
}
(s.intervals = function (t) {
  return (
    t.push.apply(t, this.leftPoints),
    this.left && this.left.intervals(t),
    this.right && this.right.intervals(t),
    t
  );
}),
  (s.insert = function (t) {
    var r = this.count - this.leftPoints.length;
    if (((this.count += 1), t[1] < this.mid))
      this.left
        ? 4 * (this.left.count + 1) > 3 * (r + 1)
          ? o(this, t)
          : this.left.insert(t)
        : (this.left = v([t]));
    else if (t[0] > this.mid)
      this.right
        ? 4 * (this.right.count + 1) > 3 * (r + 1)
          ? o(this, t)
          : this.right.insert(t)
        : (this.right = v([t]));
    else {
      var n = i.ge(this.leftPoints, t, P),
        s = i.ge(this.rightPoints, t, a);
      this.leftPoints.splice(n, 0, t), this.rightPoints.splice(s, 0, t);
    }
  }),
  (s.remove = function (t) {
    var r = this.count - this.leftPoints;
    if (t[1] < this.mid)
      return this.left
        ? 4 * (this.right ? this.right.count : 0) > 3 * (r - 1)
          ? f(this, t)
          : 2 === (o = this.left.remove(t))
          ? ((this.left = null), (this.count -= 1), 1)
          : (1 === o && (this.count -= 1), o)
        : 0;
    if (t[0] > this.mid)
      return this.right
        ? 4 * (this.left ? this.left.count : 0) > 3 * (r - 1)
          ? f(this, t)
          : 2 === (o = this.right.remove(t))
          ? ((this.right = null), (this.count -= 1), 1)
          : (1 === o && (this.count -= 1), o)
        : 0;
    if (1 === this.count) return this.leftPoints[0] === t ? 2 : 0;
    if (1 === this.leftPoints.length && this.leftPoints[0] === t) {
      if (this.left && this.right) {
        for (var n = this, s = this.left; s.right; ) (n = s), (s = s.right);
        if (n === this) s.right = this.right;
        else {
          var e = this.left,
            o = this.right;
          (n.count -= s.count), (n.right = s.left), (s.left = e), (s.right = o);
        }
        h(this, s),
          (this.count =
            (this.left ? this.left.count : 0) +
            (this.right ? this.right.count : 0) +
            this.leftPoints.length);
      } else this.left ? h(this, this.left) : h(this, this.right);
      return 1;
    }
    for (
      e = i.ge(this.leftPoints, t, P);
      e < this.leftPoints.length && this.leftPoints[e][0] === t[0];
      ++e
    )
      if (this.leftPoints[e] === t) {
        (this.count -= 1), this.leftPoints.splice(e, 1);
        for (
          o = i.ge(this.rightPoints, t, a);
          o < this.rightPoints.length && this.rightPoints[o][1] === t[1];
          ++o
        )
          if (this.rightPoints[o] === t)
            return this.rightPoints.splice(o, 1), 1;
      }
    return 0;
  }),
  (s.queryPoint = function (t, i) {
    if (t < this.mid) {
      if (this.left) if ((r = this.left.queryPoint(t, i))) return r;
      return u(this.leftPoints, t, i);
    }
    if (t > this.mid) {
      var r;
      if (this.right) if ((r = this.right.queryPoint(t, i))) return r;
      return l(this.rightPoints, t, i);
    }
    return g(this.leftPoints, i);
  }),
  (s.queryInterval = function (t, i, r) {
    var n;
    if (t < this.mid && this.left && (n = this.left.queryInterval(t, i, r)))
      return n;
    if (i > this.mid && this.right && (n = this.right.queryInterval(t, i, r)))
      return n;
    return i < this.mid
      ? u(this.leftPoints, i, r)
      : t > this.mid
      ? l(this.rightPoints, t, r)
      : g(this.leftPoints, r);
  });
var p = m.prototype;
(p.insert = function (t) {
  this.root
    ? this.root.insert(t)
    : (this.root = new n(t[0], null, null, [t], [t]));
}),
  (p.remove = function (t) {
    if (this.root) {
      var i = this.root.remove(t);
      return 2 === i && (this.root = null), 0 !== i;
    }
    return !1;
  }),
  (p.queryPoint = function (t, i) {
    if (this.root) return this.root.queryPoint(t, i);
  }),
  (p.queryInterval = function (t, i, r) {
    if (t <= i && this.root) return this.root.queryInterval(t, i, r);
  }),
  Object.defineProperty(p, "count", {
    get: function () {
      return this.root ? this.root.count : 0;
    },
  }),
  Object.defineProperty(p, "intervals", {
    get: function () {
      return this.root ? this.root.intervals([]) : [];
    },
  });
export { r as default };
