/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/d3-array@3.2.4/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import { InternMap as t, InternSet as n } from "../internmap@2.0.3/+esm.js";
export { InternMap, InternSet } from "../internmap@2.0.3/+esm.js";
function r(t, n) {
  return null == t || null == n
    ? NaN
    : t < n
    ? -1
    : t > n
    ? 1
    : t >= n
    ? 0
    : NaN;
}
function o(t, n) {
  return null == t || null == n
    ? NaN
    : n < t
    ? -1
    : n > t
    ? 1
    : n >= t
    ? 0
    : NaN;
}
function e(t) {
  let n, e, i;
  function u(t, r, o = 0, f = t.length) {
    if (o < f) {
      if (0 !== n(r, r)) return f;
      do {
        const n = (o + f) >>> 1;
        e(t[n], r) < 0 ? (o = n + 1) : (f = n);
      } while (o < f);
    }
    return o;
  }
  return (
    2 !== t.length
      ? ((n = r), (e = (n, o) => r(t(n), o)), (i = (n, r) => t(n) - r))
      : ((n = t === r || t === o ? t : f), (e = t), (i = t)),
    {
      left: u,
      center: function (t, n, r = 0, o = t.length) {
        const e = u(t, n, r, o - 1);
        return e > r && i(t[e - 1], n) > -i(t[e], n) ? e - 1 : e;
      },
      right: function (t, r, o = 0, f = t.length) {
        if (o < f) {
          if (0 !== n(r, r)) return f;
          do {
            const n = (o + f) >>> 1;
            e(t[n], r) <= 0 ? (o = n + 1) : (f = n);
          } while (o < f);
        }
        return o;
      },
    }
  );
}
function f() {
  return 0;
}
function i(t) {
  return null === t ? NaN : +t;
}
const u = e(r),
  l = u.right,
  c = u.left,
  a = e(i).center;
function s(t, n) {
  if (!((n = +n) >= 0)) throw new RangeError("invalid r");
  let r = t.length;
  if (!((r = Math.floor(r)) >= 0)) throw new RangeError("invalid length");
  if (!r || !n) return t;
  const o = M(n),
    e = t.slice();
  return o(t, e, 0, r, 1), o(e, t, 0, r, 1), o(t, e, 0, r, 1), t;
}
const h = d(M),
  y = d(function (t) {
    const n = M(t);
    return (t, r, o, e, f) => {
      n(t, r, (o <<= 2) + 0, (e <<= 2) + 0, (f <<= 2)),
        n(t, r, o + 1, e + 1, f),
        n(t, r, o + 2, e + 2, f),
        n(t, r, o + 3, e + 3, f);
    };
  });
function d(t) {
  return function (n, r, o = r) {
    if (!((r = +r) >= 0)) throw new RangeError("invalid rx");
    if (!((o = +o) >= 0)) throw new RangeError("invalid ry");
    let { data: e, width: f, height: i } = n;
    if (!((f = Math.floor(f)) >= 0)) throw new RangeError("invalid width");
    if (!((i = Math.floor(void 0 !== i ? i : e.length / f)) >= 0))
      throw new RangeError("invalid height");
    if (!f || !i || (!r && !o)) return n;
    const u = r && t(r),
      l = o && t(o),
      c = e.slice();
    return (
      u && l
        ? (p(u, c, e, f, i),
          p(u, e, c, f, i),
          p(u, c, e, f, i),
          m(l, e, c, f, i),
          m(l, c, e, f, i),
          m(l, e, c, f, i))
        : u
        ? (p(u, e, c, f, i), p(u, c, e, f, i), p(u, e, c, f, i))
        : l && (m(l, e, c, f, i), m(l, c, e, f, i), m(l, e, c, f, i)),
      n
    );
  };
}
function p(t, n, r, o, e) {
  for (let f = 0, i = o * e; f < i; ) t(n, r, f, (f += o), 1);
}
function m(t, n, r, o, e) {
  for (let f = 0, i = o * e; f < o; ++f) t(n, r, f, f + i, o);
}
function M(t) {
  const n = Math.floor(t);
  if (n === t)
    return (function (t) {
      const n = 2 * t + 1;
      return (r, o, e, f, i) => {
        if (!((f -= i) >= e)) return;
        let u = t * o[e];
        const l = i * t;
        for (let t = e, n = e + l; t < n; t += i) u += o[Math.min(f, t)];
        for (let t = e, c = f; t <= c; t += i)
          (u += o[Math.min(f, t + l)]),
            (r[t] = u / n),
            (u -= o[Math.max(e, t - l)]);
      };
    })(t);
  const r = t - n,
    o = 2 * t + 1;
  return (t, e, f, i, u) => {
    if (!((i -= u) >= f)) return;
    let l = n * e[f];
    const c = u * n,
      a = c + u;
    for (let t = f, n = f + c; t < n; t += u) l += e[Math.min(i, t)];
    for (let n = f, s = i; n <= s; n += u)
      (l += e[Math.min(i, n + c)]),
        (t[n] = (l + r * (e[Math.max(f, n - a)] + e[Math.min(i, n + a)])) / o),
        (l -= e[Math.max(f, n - c)]);
  };
}
function v(t, n) {
  let r = 0;
  if (void 0 === n) for (let n of t) null != n && (n = +n) >= n && ++r;
  else {
    let o = -1;
    for (let e of t) null != (e = n(e, ++o, t)) && (e = +e) >= e && ++r;
  }
  return r;
}
function w(t) {
  return 0 | t.length;
}
function g(t) {
  return !(t > 0);
}
function A(t) {
  return "object" != typeof t || "length" in t ? t : Array.from(t);
}
function b(...t) {
  const n =
      "function" == typeof t[t.length - 1] &&
      (function (t) {
        return (n) => t(...n);
      })(t.pop()),
    r = (t = t.map(A)).map(w),
    o = t.length - 1,
    e = new Array(o + 1).fill(0),
    f = [];
  if (o < 0 || r.some(g)) return f;
  for (;;) {
    f.push(e.map((n, r) => t[r][n]));
    let i = o;
    for (; ++e[i] === r[i]; ) {
      if (0 === i) return n ? f.map(n) : f;
      e[i--] = 0;
    }
  }
}
function x(t, n) {
  var r = 0,
    o = 0;
  return Float64Array.from(
    t,
    void 0 === n ? (t) => (r += +t || 0) : (e) => (r += +n(e, o++, t) || 0),
  );
}
function N(t, n) {
  let r,
    o = 0,
    e = 0,
    f = 0;
  if (void 0 === n)
    for (let n of t)
      null != n &&
        (n = +n) >= n &&
        ((r = n - e), (e += r / ++o), (f += r * (n - e)));
  else {
    let i = -1;
    for (let u of t)
      null != (u = n(u, ++i, t)) &&
        (u = +u) >= u &&
        ((r = u - e), (e += r / ++o), (f += r * (u - e)));
  }
  if (o > 1) return f / (o - 1);
}
function E(t, n) {
  const r = N(t, n);
  return r ? Math.sqrt(r) : r;
}
function T(t, n) {
  let r, o;
  if (void 0 === n)
    for (const n of t)
      null != n &&
        (void 0 === r
          ? n >= n && (r = o = n)
          : (r > n && (r = n), o < n && (o = n)));
  else {
    let e = -1;
    for (let f of t)
      null != (f = n(f, ++e, t)) &&
        (void 0 === r
          ? f >= f && (r = o = f)
          : (r > f && (r = f), o < f && (o = f)));
  }
  return [r, o];
}
class F {
  constructor() {
    (this._partials = new Float64Array(32)), (this._n = 0);
  }
  add(t) {
    const n = this._partials;
    let r = 0;
    for (let o = 0; o < this._n && o < 32; o++) {
      const e = n[o],
        f = t + e,
        i = Math.abs(t) < Math.abs(e) ? t - (f - e) : e - (f - t);
      i && (n[r++] = i), (t = f);
    }
    return (n[r] = t), (this._n = r + 1), this;
  }
  valueOf() {
    const t = this._partials;
    let n,
      r,
      o,
      e = this._n,
      f = 0;
    if (e > 0) {
      for (
        f = t[--e];
        e > 0 && ((n = f), (r = t[--e]), (f = n + r), (o = r - (f - n)), !o);

      );
      e > 0 &&
        ((o < 0 && t[e - 1] < 0) || (o > 0 && t[e - 1] > 0)) &&
        ((r = 2 * o), (n = f + r), r == n - f && (f = n));
    }
    return f;
  }
}
function S(t, n) {
  const r = new F();
  if (void 0 === n) for (let n of t) (n = +n) && r.add(n);
  else {
    let o = -1;
    for (let e of t) (e = +n(e, ++o, t)) && r.add(e);
  }
  return +r;
}
function _(t, n) {
  const r = new F();
  let o = -1;
  return Float64Array.from(
    t,
    void 0 === n ? (t) => r.add(+t || 0) : (e) => r.add(+n(e, ++o, t) || 0),
  );
}
function R(t) {
  return t;
}
function q(t, ...n) {
  return D(t, R, R, n);
}
function j(t, ...n) {
  return D(t, Array.from, R, n);
}
function O(t, n) {
  for (let r = 1, o = n.length; r < o; ++r)
    t = t.flatMap((t) => t.pop().map(([n, r]) => [...t, n, r]));
  return t;
}
function U(t, ...n) {
  return O(j(t, ...n), n);
}
function k(t, n, ...r) {
  return O(L(t, n, ...r), r);
}
function I(t, n, ...r) {
  return D(t, R, n, r);
}
function L(t, n, ...r) {
  return D(t, Array.from, n, r);
}
function z(t, ...n) {
  return D(t, R, C, n);
}
function B(t, ...n) {
  return D(t, Array.from, C, n);
}
function C(t) {
  if (1 !== t.length) throw new Error("duplicate key");
  return t[0];
}
function D(n, r, o, e) {
  return (function n(f, i) {
    if (i >= e.length) return o(f);
    const u = new t(),
      l = e[i++];
    let c = -1;
    for (const t of f) {
      const n = l(t, ++c, f),
        r = u.get(n);
      r ? r.push(t) : u.set(n, [t]);
    }
    for (const [t, r] of u) u.set(t, n(r, i));
    return r(u);
  })(n, 0);
}
function G(t, n) {
  return Array.from(n, (n) => t[n]);
}
function H(t, ...n) {
  if ("function" != typeof t[Symbol.iterator])
    throw new TypeError("values is not iterable");
  t = Array.from(t);
  let [r] = n;
  if ((r && 2 !== r.length) || n.length > 1) {
    const o = Uint32Array.from(t, (t, n) => n);
    return (
      n.length > 1
        ? ((n = n.map((n) => t.map(n))),
          o.sort((t, r) => {
            for (const o of n) {
              const n = K(o[t], o[r]);
              if (n) return n;
            }
          }))
        : ((r = t.map(r)), o.sort((t, n) => K(r[t], r[n]))),
      G(t, o)
    );
  }
  return t.sort(J(r));
}
function J(t = r) {
  if (t === r) return K;
  if ("function" != typeof t) throw new TypeError("compare is not a function");
  return (n, r) => {
    const o = t(n, r);
    return o || 0 === o ? o : (0 === t(r, r)) - (0 === t(n, n));
  };
}
function K(t, n) {
  return (
    (null == t || !(t >= t)) - (null == n || !(n >= n)) ||
    (t < n ? -1 : t > n ? 1 : 0)
  );
}
function P(t, n, o) {
  return (
    2 !== n.length
      ? H(I(t, n, o), ([t, n], [o, e]) => r(n, e) || r(t, o))
      : H(q(t, o), ([t, o], [e, f]) => n(o, f) || r(t, e))
  ).map(([t]) => t);
}
var Q = Array.prototype.slice;
function V(t) {
  return () => t;
}
const W = Math.sqrt(50),
  X = Math.sqrt(10),
  Y = Math.sqrt(2);
function Z(t, n, r) {
  const o = (n - t) / Math.max(0, r),
    e = Math.floor(Math.log10(o)),
    f = o / Math.pow(10, e),
    i = f >= W ? 10 : f >= X ? 5 : f >= Y ? 2 : 1;
  let u, l, c;
  return (
    e < 0
      ? ((c = Math.pow(10, -e) / i),
        (u = Math.round(t * c)),
        (l = Math.round(n * c)),
        u / c < t && ++u,
        l / c > n && --l,
        (c = -c))
      : ((c = Math.pow(10, e) * i),
        (u = Math.round(t / c)),
        (l = Math.round(n / c)),
        u * c < t && ++u,
        l * c > n && --l),
    l < u && 0.5 <= r && r < 2 ? Z(t, n, 2 * r) : [u, l, c]
  );
}
function $(t, n, r) {
  if (!((r = +r) > 0)) return [];
  if ((t = +t) === (n = +n)) return [t];
  const o = n < t,
    [e, f, i] = o ? Z(n, t, r) : Z(t, n, r);
  if (!(f >= e)) return [];
  const u = f - e + 1,
    l = new Array(u);
  if (o)
    if (i < 0) for (let t = 0; t < u; ++t) l[t] = (f - t) / -i;
    else for (let t = 0; t < u; ++t) l[t] = (f - t) * i;
  else if (i < 0) for (let t = 0; t < u; ++t) l[t] = (e + t) / -i;
  else for (let t = 0; t < u; ++t) l[t] = (e + t) * i;
  return l;
}
function tt(t, n, r) {
  return Z((t = +t), (n = +n), (r = +r))[2];
}
function nt(t, n, r) {
  r = +r;
  const o = (n = +n) < (t = +t),
    e = o ? tt(n, t, r) : tt(t, n, r);
  return (o ? -1 : 1) * (e < 0 ? 1 / -e : e);
}
function rt(t, n, r) {
  let o;
  for (;;) {
    const e = tt(t, n, r);
    if (e === o || 0 === e || !isFinite(e)) return [t, n];
    e > 0
      ? ((t = Math.floor(t / e) * e), (n = Math.ceil(n / e) * e))
      : e < 0 && ((t = Math.ceil(t * e) / e), (n = Math.floor(n * e) / e)),
      (o = e);
  }
}
function ot(t) {
  return Math.max(1, Math.ceil(Math.log(v(t)) / Math.LN2) + 1);
}
function et() {
  var t = R,
    n = T,
    r = ot;
  function o(o) {
    Array.isArray(o) || (o = Array.from(o));
    var e,
      f,
      i,
      u = o.length,
      c = new Array(u);
    for (e = 0; e < u; ++e) c[e] = t(o[e], e, o);
    var a = n(c),
      s = a[0],
      h = a[1],
      y = r(c, s, h);
    if (!Array.isArray(y)) {
      const t = h,
        r = +y;
      if (
        (n === T && ([s, h] = rt(s, h, r)),
        (y = $(s, h, r))[0] <= s && (i = tt(s, h, r)),
        y[y.length - 1] >= h)
      )
        if (t >= h && n === T) {
          const t = tt(s, h, r);
          isFinite(t) &&
            (t > 0
              ? (h = (Math.floor(h / t) + 1) * t)
              : t < 0 && (h = (Math.ceil(h * -t) + 1) / -t));
        } else y.pop();
    }
    for (var d = y.length, p = 0, m = d; y[p] <= s; ) ++p;
    for (; y[m - 1] > h; ) --m;
    (p || m < d) && ((y = y.slice(p, m)), (d = m - p));
    var M,
      v = new Array(d + 1);
    for (e = 0; e <= d; ++e)
      ((M = v[e] = []).x0 = e > 0 ? y[e - 1] : s), (M.x1 = e < d ? y[e] : h);
    if (isFinite(i)) {
      if (i > 0)
        for (e = 0; e < u; ++e)
          null != (f = c[e]) &&
            s <= f &&
            f <= h &&
            v[Math.min(d, Math.floor((f - s) / i))].push(o[e]);
      else if (i < 0)
        for (e = 0; e < u; ++e)
          if (null != (f = c[e]) && s <= f && f <= h) {
            const t = Math.floor((s - f) * i);
            v[Math.min(d, t + (y[t] <= f))].push(o[e]);
          }
    } else
      for (e = 0; e < u; ++e)
        null != (f = c[e]) && s <= f && f <= h && v[l(y, f, 0, d)].push(o[e]);
    return v;
  }
  return (
    (o.value = function (n) {
      return arguments.length
        ? ((t = "function" == typeof n ? n : V(n)), o)
        : t;
    }),
    (o.domain = function (t) {
      return arguments.length
        ? ((n = "function" == typeof t ? t : V([t[0], t[1]])), o)
        : n;
    }),
    (o.thresholds = function (t) {
      return arguments.length
        ? ((r =
            "function" == typeof t ? t : V(Array.isArray(t) ? Q.call(t) : t)),
          o)
        : r;
    }),
    o
  );
}
function ft(t, n) {
  let r;
  if (void 0 === n)
    for (const n of t)
      null != n && (r < n || (void 0 === r && n >= n)) && (r = n);
  else {
    let o = -1;
    for (let e of t)
      null != (e = n(e, ++o, t)) &&
        (r < e || (void 0 === r && e >= e)) &&
        (r = e);
  }
  return r;
}
function it(t, n) {
  let r,
    o = -1,
    e = -1;
  if (void 0 === n)
    for (const n of t)
      ++e,
        null != n && (r < n || (void 0 === r && n >= n)) && ((r = n), (o = e));
  else
    for (let f of t)
      null != (f = n(f, ++e, t)) &&
        (r < f || (void 0 === r && f >= f)) &&
        ((r = f), (o = e));
  return o;
}
function ut(t, n) {
  let r;
  if (void 0 === n)
    for (const n of t)
      null != n && (r > n || (void 0 === r && n >= n)) && (r = n);
  else {
    let o = -1;
    for (let e of t)
      null != (e = n(e, ++o, t)) &&
        (r > e || (void 0 === r && e >= e)) &&
        (r = e);
  }
  return r;
}
function lt(t, n) {
  let r,
    o = -1,
    e = -1;
  if (void 0 === n)
    for (const n of t)
      ++e,
        null != n && (r > n || (void 0 === r && n >= n)) && ((r = n), (o = e));
  else
    for (let f of t)
      null != (f = n(f, ++e, t)) &&
        (r > f || (void 0 === r && f >= f)) &&
        ((r = f), (o = e));
  return o;
}
function ct(t, n, r = 0, o = 1 / 0, e) {
  if (
    ((n = Math.floor(n)),
    (r = Math.floor(Math.max(0, r))),
    (o = Math.floor(Math.min(t.length - 1, o))),
    !(r <= n && n <= o))
  )
    return t;
  for (e = void 0 === e ? K : J(e); o > r; ) {
    if (o - r > 600) {
      const f = o - r + 1,
        i = n - r + 1,
        u = Math.log(f),
        l = 0.5 * Math.exp((2 * u) / 3),
        c = 0.5 * Math.sqrt((u * l * (f - l)) / f) * (i - f / 2 < 0 ? -1 : 1);
      ct(
        t,
        n,
        Math.max(r, Math.floor(n - (i * l) / f + c)),
        Math.min(o, Math.floor(n + ((f - i) * l) / f + c)),
        e,
      );
    }
    const f = t[n];
    let i = r,
      u = o;
    for (at(t, r, n), e(t[o], f) > 0 && at(t, r, o); i < u; ) {
      for (at(t, i, u), ++i, --u; e(t[i], f) < 0; ) ++i;
      for (; e(t[u], f) > 0; ) --u;
    }
    0 === e(t[r], f) ? at(t, r, u) : (++u, at(t, u, o)),
      u <= n && (r = u + 1),
      n <= u && (o = u - 1);
  }
  return t;
}
function at(t, n, r) {
  const o = t[n];
  (t[n] = t[r]), (t[r] = o);
}
function st(t, n = r) {
  let o,
    e = !1;
  if (1 === n.length) {
    let f;
    for (const i of t) {
      const t = n(i);
      (e ? r(t, f) > 0 : 0 === r(t, t)) && ((o = i), (f = t), (e = !0));
    }
  } else
    for (const r of t) (e ? n(r, o) > 0 : 0 === n(r, r)) && ((o = r), (e = !0));
  return o;
}
function ht(t, n, r) {
  if (
    ((t = Float64Array.from(
      (function* (t, n) {
        if (void 0 === n)
          for (let n of t) null != n && (n = +n) >= n && (yield n);
        else {
          let r = -1;
          for (let o of t)
            null != (o = n(o, ++r, t)) && (o = +o) >= o && (yield o);
        }
      })(t, r),
    )),
    (o = t.length) && !isNaN((n = +n)))
  ) {
    if (n <= 0 || o < 2) return ut(t);
    if (n >= 1) return ft(t);
    var o,
      e = (o - 1) * n,
      f = Math.floor(e),
      i = ft(ct(t, f).subarray(0, f + 1));
    return i + (ut(t.subarray(f + 1)) - i) * (e - f);
  }
}
function yt(t, n, r = i) {
  if ((o = t.length) && !isNaN((n = +n))) {
    if (n <= 0 || o < 2) return +r(t[0], 0, t);
    if (n >= 1) return +r(t[o - 1], o - 1, t);
    var o,
      e = (o - 1) * n,
      f = Math.floor(e),
      u = +r(t[f], f, t);
    return u + (+r(t[f + 1], f + 1, t) - u) * (e - f);
  }
}
function dt(t, n, r = i) {
  if (!isNaN((n = +n))) {
    if (((o = Float64Array.from(t, (n, o) => i(r(t[o], o, t)))), n <= 0))
      return lt(o);
    if (n >= 1) return it(o);
    var o,
      e = Uint32Array.from(t, (t, n) => n),
      f = o.length - 1,
      u = Math.floor(f * n);
    return (
      ct(e, u, 0, f, (t, n) => K(o[t], o[n])),
      (u = st(e.subarray(0, u + 1), (t) => o[t])) >= 0 ? u : -1
    );
  }
}
function pt(t, n, r) {
  const o = v(t),
    e = ht(t, 0.75) - ht(t, 0.25);
  return o && e ? Math.ceil((r - n) / (2 * e * Math.pow(o, -1 / 3))) : 1;
}
function mt(t, n, r) {
  const o = v(t),
    e = E(t);
  return o && e ? Math.ceil(((r - n) * Math.cbrt(o)) / (3.49 * e)) : 1;
}
function Mt(t, n) {
  let r = 0,
    o = 0;
  if (void 0 === n)
    for (let n of t) null != n && (n = +n) >= n && (++r, (o += n));
  else {
    let e = -1;
    for (let f of t)
      null != (f = n(f, ++e, t)) && (f = +f) >= f && (++r, (o += f));
  }
  if (r) return o / r;
}
function vt(t, n) {
  return ht(t, 0.5, n);
}
function wt(t, n) {
  return dt(t, 0.5, n);
}
function gt(t) {
  return Array.from(
    (function* (t) {
      for (const n of t) yield* n;
    })(t),
  );
}
function At(n, r) {
  const o = new t();
  if (void 0 === r)
    for (let t of n) null != t && t >= t && o.set(t, (o.get(t) || 0) + 1);
  else {
    let t = -1;
    for (let e of n)
      null != (e = r(e, ++t, n)) && e >= e && o.set(e, (o.get(e) || 0) + 1);
  }
  let e,
    f = 0;
  for (const [t, n] of o) n > f && ((f = n), (e = t));
  return e;
}
function bt(t, n = xt) {
  const r = [];
  let o,
    e = !1;
  for (const f of t) e && r.push(n(o, f)), (o = f), (e = !0);
  return r;
}
function xt(t, n) {
  return [t, n];
}
function Nt(t, n, r) {
  (t = +t),
    (n = +n),
    (r = (e = arguments.length) < 2 ? ((n = t), (t = 0), 1) : e < 3 ? 1 : +r);
  for (
    var o = -1, e = 0 | Math.max(0, Math.ceil((n - t) / r)), f = new Array(e);
    ++o < e;

  )
    f[o] = t + o * r;
  return f;
}
function Et(t, n = r) {
  if ("function" != typeof t[Symbol.iterator])
    throw new TypeError("values is not iterable");
  let o = Array.from(t);
  const e = new Float64Array(o.length);
  2 !== n.length && ((o = o.map(n)), (n = r));
  const f = (t, r) => n(o[t], o[r]);
  let i, u;
  return (
    (t = Uint32Array.from(o, (t, n) => n)).sort(
      n === r ? (t, n) => K(o[t], o[n]) : J(f),
    ),
    t.forEach((t, n) => {
      const r = f(t, void 0 === i ? t : i);
      r >= 0
        ? ((void 0 === i || r > 0) && ((i = t), (u = n)), (e[t] = u))
        : (e[t] = NaN);
    }),
    e
  );
}
function Tt(t, n = r) {
  let o,
    e = !1;
  if (1 === n.length) {
    let f;
    for (const i of t) {
      const t = n(i);
      (e ? r(t, f) < 0 : 0 === r(t, t)) && ((o = i), (f = t), (e = !0));
    }
  } else
    for (const r of t) (e ? n(r, o) < 0 : 0 === n(r, r)) && ((o = r), (e = !0));
  return o;
}
function Ft(t, n = r) {
  if (1 === n.length) return lt(t, n);
  let o,
    e = -1,
    f = -1;
  for (const r of t)
    ++f, (e < 0 ? 0 === n(r, r) : n(r, o) < 0) && ((o = r), (e = f));
  return e;
}
function St(t, n = r) {
  if (1 === n.length) return it(t, n);
  let o,
    e = -1,
    f = -1;
  for (const r of t)
    ++f, (e < 0 ? 0 === n(r, r) : n(r, o) > 0) && ((o = r), (e = f));
  return e;
}
function _t(t, n) {
  const r = Ft(t, n);
  return r < 0 ? void 0 : r;
}
var Rt = qt(Math.random);
function qt(t) {
  return function (n, r = 0, o = n.length) {
    let e = o - (r = +r);
    for (; e; ) {
      const o = (t() * e--) | 0,
        f = n[e + r];
      (n[e + r] = n[o + r]), (n[o + r] = f);
    }
    return n;
  };
}
function jt(t, n) {
  let r = 0;
  if (void 0 === n) for (let n of t) (n = +n) && (r += n);
  else {
    let o = -1;
    for (let e of t) (e = +n(e, ++o, t)) && (r += e);
  }
  return r;
}
function Ot(t) {
  if (!(e = t.length)) return [];
  for (var n = -1, r = ut(t, Ut), o = new Array(r); ++n < r; )
    for (var e, f = -1, i = (o[n] = new Array(e)); ++f < e; ) i[f] = t[f][n];
  return o;
}
function Ut(t) {
  return t.length;
}
function kt() {
  return Ot(arguments);
}
function It(t, n) {
  if ("function" != typeof n) throw new TypeError("test is not a function");
  let r = -1;
  for (const o of t) if (!n(o, ++r, t)) return !1;
  return !0;
}
function Lt(t, n) {
  if ("function" != typeof n) throw new TypeError("test is not a function");
  let r = -1;
  for (const o of t) if (n(o, ++r, t)) return !0;
  return !1;
}
function zt(t, n) {
  if ("function" != typeof n) throw new TypeError("test is not a function");
  const r = [];
  let o = -1;
  for (const e of t) n(e, ++o, t) && r.push(e);
  return r;
}
function Bt(t, n) {
  if ("function" != typeof t[Symbol.iterator])
    throw new TypeError("values is not iterable");
  if ("function" != typeof n) throw new TypeError("mapper is not a function");
  return Array.from(t, (r, o) => n(r, o, t));
}
function Ct(t, n, r) {
  if ("function" != typeof n) throw new TypeError("reducer is not a function");
  const o = t[Symbol.iterator]();
  let e,
    f,
    i = -1;
  if (arguments.length < 3) {
    if ((({ done: e, value: r } = o.next()), e)) return;
    ++i;
  }
  for (; ({ done: e, value: f } = o.next()), !e; ) r = n(r, f, ++i, t);
  return r;
}
function Dt(t) {
  if ("function" != typeof t[Symbol.iterator])
    throw new TypeError("values is not iterable");
  return Array.from(t).reverse();
}
function Gt(t, ...r) {
  t = new n(t);
  for (const n of r) for (const r of n) t.delete(r);
  return t;
}
function Ht(t, r) {
  const o = r[Symbol.iterator](),
    e = new n();
  for (const n of t) {
    if (e.has(n)) return !1;
    let t, r;
    for (; ({ value: t, done: r } = o.next()) && !r; ) {
      if (Object.is(n, t)) return !1;
      e.add(t);
    }
  }
  return !0;
}
function Jt(t, ...r) {
  (t = new n(t)), (r = r.map(Kt));
  t: for (const n of t)
    for (const o of r)
      if (!o.has(n)) {
        t.delete(n);
        continue t;
      }
  return t;
}
function Kt(t) {
  return t instanceof n ? t : new n(t);
}
function Pt(t, n) {
  const r = t[Symbol.iterator](),
    o = new Set();
  for (const t of n) {
    const n = Qt(t);
    if (o.has(n)) continue;
    let e, f;
    for (; ({ value: e, done: f } = r.next()); ) {
      if (f) return !1;
      const t = Qt(e);
      if ((o.add(t), Object.is(n, t))) break;
    }
  }
  return !0;
}
function Qt(t) {
  return null !== t && "object" == typeof t ? t.valueOf() : t;
}
function Vt(t, n) {
  return Pt(n, t);
}
function Wt(...t) {
  const r = new n();
  for (const n of t) for (const t of n) r.add(t);
  return r;
}
export {
  F as Adder,
  r as ascending,
  et as bin,
  l as bisect,
  a as bisectCenter,
  c as bisectLeft,
  l as bisectRight,
  e as bisector,
  s as blur,
  h as blur2,
  y as blurImage,
  v as count,
  b as cross,
  x as cumsum,
  o as descending,
  E as deviation,
  Gt as difference,
  Ht as disjoint,
  It as every,
  T as extent,
  _ as fcumsum,
  zt as filter,
  U as flatGroup,
  k as flatRollup,
  S as fsum,
  st as greatest,
  St as greatestIndex,
  q as group,
  P as groupSort,
  j as groups,
  et as histogram,
  z as index,
  B as indexes,
  Jt as intersection,
  Tt as least,
  Ft as leastIndex,
  Bt as map,
  ft as max,
  it as maxIndex,
  Mt as mean,
  vt as median,
  wt as medianIndex,
  gt as merge,
  ut as min,
  lt as minIndex,
  At as mode,
  rt as nice,
  bt as pairs,
  G as permute,
  ht as quantile,
  dt as quantileIndex,
  yt as quantileSorted,
  ct as quickselect,
  Nt as range,
  Et as rank,
  Ct as reduce,
  Dt as reverse,
  I as rollup,
  L as rollups,
  _t as scan,
  Rt as shuffle,
  qt as shuffler,
  Lt as some,
  H as sort,
  Vt as subset,
  jt as sum,
  Pt as superset,
  pt as thresholdFreedmanDiaconis,
  mt as thresholdScott,
  ot as thresholdSturges,
  tt as tickIncrement,
  nt as tickStep,
  $ as ticks,
  Ot as transpose,
  Wt as union,
  N as variance,
  kt as zip,
};
export default null;
