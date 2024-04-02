/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/d3-delaunay@6.0.4/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import t from "../delaunator@5.0.0/+esm.js";
const e = 1e-6;
class i {
  constructor() {
    (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
  }
  moveTo(t, e) {
    this._ += `M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +e)}`;
  }
  closePath() {
    null !== this._x1 &&
      ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
  }
  lineTo(t, e) {
    this._ += `L${(this._x1 = +t)},${(this._y1 = +e)}`;
  }
  arc(t, i, n) {
    const s = (t = +t) + (n = +n),
      l = (i = +i);
    if (n < 0) throw new Error("negative radius");
    null === this._x1
      ? (this._ += `M${s},${l}`)
      : (Math.abs(this._x1 - s) > e || Math.abs(this._y1 - l) > e) &&
        (this._ += "L" + s + "," + l),
      n &&
        (this._ += `A${n},${n},0,1,1,${t - n},${i}A${n},${n},0,1,1,${(this._x1 =
          s)},${(this._y1 = l)}`);
  }
  rect(t, e, i, n) {
    this._ += `M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
      +e)}h${+i}v${+n}h${-i}Z`;
  }
  value() {
    return this._ || null;
  }
}
class n {
  constructor() {
    this._ = [];
  }
  moveTo(t, e) {
    this._.push([t, e]);
  }
  closePath() {
    this._.push(this._[0].slice());
  }
  lineTo(t, e) {
    this._.push([t, e]);
  }
  value() {
    return this._.length ? this._ : null;
  }
}
class s {
  constructor(t, [e, i, n, s] = [0, 0, 960, 500]) {
    if (!((n = +n) >= (e = +e) && (s = +s) >= (i = +i)))
      throw new Error("invalid bounds");
    (this.delaunay = t),
      (this._circumcenters = new Float64Array(2 * t.points.length)),
      (this.vectors = new Float64Array(2 * t.points.length)),
      (this.xmax = n),
      (this.xmin = e),
      (this.ymax = s),
      (this.ymin = i),
      this._init();
  }
  update() {
    return this.delaunay.update(), this._init(), this;
  }
  _init() {
    const {
      delaunay: { points: t, hull: e, triangles: i },
      vectors: n,
    } = this;
    let s, l;
    const h = (this.circumcenters = this._circumcenters.subarray(
      0,
      (i.length / 3) * 2,
    ));
    for (let n, r, o = 0, a = 0, c = i.length; o < c; o += 3, a += 2) {
      const c = 2 * i[o],
        u = 2 * i[o + 1],
        g = 2 * i[o + 2],
        d = t[c],
        f = t[c + 1],
        m = t[u],
        _ = t[u + 1],
        x = t[g],
        y = t[g + 1],
        p = m - d,
        v = _ - f,
        w = x - d,
        T = y - f,
        $ = 2 * (p * T - v * w);
      if (Math.abs($) < 1e-9) {
        if (void 0 === s) {
          s = l = 0;
          for (const i of e) (s += t[2 * i]), (l += t[2 * i + 1]);
          (s /= e.length), (l /= e.length);
        }
        const i = 1e9 * Math.sign((s - d) * T - (l - f) * w);
        (n = (d + x) / 2 - i * T), (r = (f + y) / 2 + i * w);
      } else {
        const t = 1 / $,
          e = p * p + v * v,
          i = w * w + T * T;
        (n = d + (T * e - v * i) * t), (r = f + (p * i - w * e) * t);
      }
      (h[a] = n), (h[a + 1] = r);
    }
    let r,
      o,
      a,
      c = e[e.length - 1],
      u = 4 * c,
      g = t[2 * c],
      d = t[2 * c + 1];
    n.fill(0);
    for (let i = 0; i < e.length; ++i)
      (c = e[i]),
        (r = u),
        (o = g),
        (a = d),
        (u = 4 * c),
        (g = t[2 * c]),
        (d = t[2 * c + 1]),
        (n[r + 2] = n[u] = a - d),
        (n[r + 3] = n[u + 1] = g - o);
  }
  render(t) {
    const e = null == t ? (t = new i()) : void 0,
      {
        delaunay: { halfedges: n, inedges: s, hull: l },
        circumcenters: h,
        vectors: r,
      } = this;
    if (l.length <= 1) return null;
    for (let e = 0, i = n.length; e < i; ++e) {
      const i = n[e];
      if (i < e) continue;
      const s = 2 * Math.floor(e / 3),
        l = 2 * Math.floor(i / 3),
        r = h[s],
        o = h[s + 1],
        a = h[l],
        c = h[l + 1];
      this._renderSegment(r, o, a, c, t);
    }
    let o,
      a = l[l.length - 1];
    for (let e = 0; e < l.length; ++e) {
      (o = a), (a = l[e]);
      const i = 2 * Math.floor(s[a] / 3),
        n = h[i],
        c = h[i + 1],
        u = 4 * o,
        g = this._project(n, c, r[u + 2], r[u + 3]);
      g && this._renderSegment(n, c, g[0], g[1], t);
    }
    return e && e.value();
  }
  renderBounds(t) {
    const e = null == t ? (t = new i()) : void 0;
    return (
      t.rect(
        this.xmin,
        this.ymin,
        this.xmax - this.xmin,
        this.ymax - this.ymin,
      ),
      e && e.value()
    );
  }
  renderCell(t, e) {
    const n = null == e ? (e = new i()) : void 0,
      s = this._clip(t);
    if (null === s || !s.length) return;
    e.moveTo(s[0], s[1]);
    let l = s.length;
    for (; s[0] === s[l - 2] && s[1] === s[l - 1] && l > 1; ) l -= 2;
    for (let t = 2; t < l; t += 2)
      (s[t] === s[t - 2] && s[t + 1] === s[t - 1]) || e.lineTo(s[t], s[t + 1]);
    return e.closePath(), n && n.value();
  }
  *cellPolygons() {
    const {
      delaunay: { points: t },
    } = this;
    for (let e = 0, i = t.length / 2; e < i; ++e) {
      const t = this.cellPolygon(e);
      t && ((t.index = e), yield t);
    }
  }
  cellPolygon(t) {
    const e = new n();
    return this.renderCell(t, e), e.value();
  }
  _renderSegment(t, e, i, n, s) {
    let l;
    const h = this._regioncode(t, e),
      r = this._regioncode(i, n);
    0 === h && 0 === r
      ? (s.moveTo(t, e), s.lineTo(i, n))
      : (l = this._clipSegment(t, e, i, n, h, r)) &&
        (s.moveTo(l[0], l[1]), s.lineTo(l[2], l[3]));
  }
  contains(t, e, i) {
    return (e = +e) == e && (i = +i) == i && this.delaunay._step(t, e, i) === t;
  }
  *neighbors(t) {
    const e = this._clip(t);
    if (e)
      for (const i of this.delaunay.neighbors(t)) {
        const t = this._clip(i);
        if (t)
          t: for (let n = 0, s = e.length; n < s; n += 2)
            for (let l = 0, h = t.length; l < h; l += 2)
              if (
                e[n] === t[l] &&
                e[n + 1] === t[l + 1] &&
                e[(n + 2) % s] === t[(l + h - 2) % h] &&
                e[(n + 3) % s] === t[(l + h - 1) % h]
              ) {
                yield i;
                break t;
              }
      }
  }
  _cell(t) {
    const {
        circumcenters: e,
        delaunay: { inedges: i, halfedges: n, triangles: s },
      } = this,
      l = i[t];
    if (-1 === l) return null;
    const h = [];
    let r = l;
    do {
      const i = Math.floor(r / 3);
      if (
        (h.push(e[2 * i], e[2 * i + 1]),
        (r = r % 3 == 2 ? r - 2 : r + 1),
        s[r] !== t)
      )
        break;
      r = n[r];
    } while (r !== l && -1 !== r);
    return h;
  }
  _clip(t) {
    if (0 === t && 1 === this.delaunay.hull.length)
      return [
        this.xmax,
        this.ymin,
        this.xmax,
        this.ymax,
        this.xmin,
        this.ymax,
        this.xmin,
        this.ymin,
      ];
    const e = this._cell(t);
    if (null === e) return null;
    const { vectors: i } = this,
      n = 4 * t;
    return this._simplify(
      i[n] || i[n + 1]
        ? this._clipInfinite(t, e, i[n], i[n + 1], i[n + 2], i[n + 3])
        : this._clipFinite(t, e),
    );
  }
  _clipFinite(t, e) {
    const i = e.length;
    let n,
      s,
      l,
      h,
      r = null,
      o = e[i - 2],
      a = e[i - 1],
      c = this._regioncode(o, a),
      u = 0;
    for (let g = 0; g < i; g += 2)
      if (
        ((n = o),
        (s = a),
        (o = e[g]),
        (a = e[g + 1]),
        (l = c),
        (c = this._regioncode(o, a)),
        0 === l && 0 === c)
      )
        (h = u), (u = 0), r ? r.push(o, a) : (r = [o, a]);
      else {
        let e, i, g, d, f;
        if (0 === l) {
          if (null === (e = this._clipSegment(n, s, o, a, l, c))) continue;
          [i, g, d, f] = e;
        } else {
          if (null === (e = this._clipSegment(o, a, n, s, c, l))) continue;
          ([d, f, i, g] = e),
            (h = u),
            (u = this._edgecode(i, g)),
            h && u && this._edge(t, h, u, r, r.length),
            r ? r.push(i, g) : (r = [i, g]);
        }
        (h = u),
          (u = this._edgecode(d, f)),
          h && u && this._edge(t, h, u, r, r.length),
          r ? r.push(d, f) : (r = [d, f]);
      }
    if (r)
      (h = u),
        (u = this._edgecode(r[0], r[1])),
        h && u && this._edge(t, h, u, r, r.length);
    else if (
      this.contains(t, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)
    )
      return [
        this.xmax,
        this.ymin,
        this.xmax,
        this.ymax,
        this.xmin,
        this.ymax,
        this.xmin,
        this.ymin,
      ];
    return r;
  }
  _clipSegment(t, e, i, n, s, l) {
    const h = s < l;
    for (h && ([t, e, i, n, s, l] = [i, n, t, e, l, s]); ; ) {
      if (0 === s && 0 === l) return h ? [i, n, t, e] : [t, e, i, n];
      if (s & l) return null;
      let r,
        o,
        a = s || l;
      8 & a
        ? ((r = t + ((i - t) * (this.ymax - e)) / (n - e)), (o = this.ymax))
        : 4 & a
        ? ((r = t + ((i - t) * (this.ymin - e)) / (n - e)), (o = this.ymin))
        : 2 & a
        ? ((o = e + ((n - e) * (this.xmax - t)) / (i - t)), (r = this.xmax))
        : ((o = e + ((n - e) * (this.xmin - t)) / (i - t)), (r = this.xmin)),
        s
          ? ((t = r), (e = o), (s = this._regioncode(t, e)))
          : ((i = r), (n = o), (l = this._regioncode(i, n)));
    }
  }
  _clipInfinite(t, e, i, n, s, l) {
    let h,
      r = Array.from(e);
    if (
      ((h = this._project(r[0], r[1], i, n)) && r.unshift(h[0], h[1]),
      (h = this._project(r[r.length - 2], r[r.length - 1], s, l)) &&
        r.push(h[0], h[1]),
      (r = this._clipFinite(t, r)))
    )
      for (
        let e, i = 0, n = r.length, s = this._edgecode(r[n - 2], r[n - 1]);
        i < n;
        i += 2
      )
        (e = s),
          (s = this._edgecode(r[i], r[i + 1])),
          e && s && ((i = this._edge(t, e, s, r, i)), (n = r.length));
    else
      this.contains(
        t,
        (this.xmin + this.xmax) / 2,
        (this.ymin + this.ymax) / 2,
      ) &&
        (r = [
          this.xmin,
          this.ymin,
          this.xmax,
          this.ymin,
          this.xmax,
          this.ymax,
          this.xmin,
          this.ymax,
        ]);
    return r;
  }
  _edge(t, e, i, n, s) {
    for (; e !== i; ) {
      let i, l;
      switch (e) {
        case 5:
          e = 4;
          continue;
        case 4:
          (e = 6), (i = this.xmax), (l = this.ymin);
          break;
        case 6:
          e = 2;
          continue;
        case 2:
          (e = 10), (i = this.xmax), (l = this.ymax);
          break;
        case 10:
          e = 8;
          continue;
        case 8:
          (e = 9), (i = this.xmin), (l = this.ymax);
          break;
        case 9:
          e = 1;
          continue;
        case 1:
          (e = 5), (i = this.xmin), (l = this.ymin);
      }
      (n[s] === i && n[s + 1] === l) ||
        !this.contains(t, i, l) ||
        (n.splice(s, 0, i, l), (s += 2));
    }
    return s;
  }
  _project(t, e, i, n) {
    let s,
      l,
      h,
      r = 1 / 0;
    if (n < 0) {
      if (e <= this.ymin) return null;
      (s = (this.ymin - e) / n) < r && ((h = this.ymin), (l = t + (r = s) * i));
    } else if (n > 0) {
      if (e >= this.ymax) return null;
      (s = (this.ymax - e) / n) < r && ((h = this.ymax), (l = t + (r = s) * i));
    }
    if (i > 0) {
      if (t >= this.xmax) return null;
      (s = (this.xmax - t) / i) < r && ((l = this.xmax), (h = e + (r = s) * n));
    } else if (i < 0) {
      if (t <= this.xmin) return null;
      (s = (this.xmin - t) / i) < r && ((l = this.xmin), (h = e + (r = s) * n));
    }
    return [l, h];
  }
  _edgecode(t, e) {
    return (
      (t === this.xmin ? 1 : t === this.xmax ? 2 : 0) |
      (e === this.ymin ? 4 : e === this.ymax ? 8 : 0)
    );
  }
  _regioncode(t, e) {
    return (
      (t < this.xmin ? 1 : t > this.xmax ? 2 : 0) |
      (e < this.ymin ? 4 : e > this.ymax ? 8 : 0)
    );
  }
  _simplify(t) {
    if (t && t.length > 4) {
      for (let e = 0; e < t.length; e += 2) {
        const i = (e + 2) % t.length,
          n = (e + 4) % t.length;
        ((t[e] === t[i] && t[i] === t[n]) ||
          (t[e + 1] === t[i + 1] && t[i + 1] === t[n + 1])) &&
          (t.splice(i, 2), (e -= 2));
      }
      t.length || (t = null);
    }
    return t;
  }
}
const l = 2 * Math.PI,
  h = Math.pow;
function r(t) {
  return t[0];
}
function o(t) {
  return t[1];
}
function a(t, e, i) {
  return [t + Math.sin(t + e) * i, e + Math.cos(t - e) * i];
}
class c {
  static from(t, e = r, i = o, n) {
    return new c(
      "length" in t
        ? (function (t, e, i, n) {
            const s = t.length,
              l = new Float64Array(2 * s);
            for (let h = 0; h < s; ++h) {
              const s = t[h];
              (l[2 * h] = e.call(n, s, h, t)),
                (l[2 * h + 1] = i.call(n, s, h, t));
            }
            return l;
          })(t, e, i, n)
        : Float64Array.from(
            (function* (t, e, i, n) {
              let s = 0;
              for (const l of t)
                yield e.call(n, l, s, t), yield i.call(n, l, s, t), ++s;
            })(t, e, i, n),
          ),
    );
  }
  constructor(e) {
    (this._delaunator = new t(e)),
      (this.inedges = new Int32Array(e.length / 2)),
      (this._hullIndex = new Int32Array(e.length / 2)),
      (this.points = this._delaunator.coords),
      this._init();
  }
  update() {
    return this._delaunator.update(), this._init(), this;
  }
  _init() {
    const e = this._delaunator,
      i = this.points;
    if (
      e.hull &&
      e.hull.length > 2 &&
      (function (t) {
        const { triangles: e, coords: i } = t;
        for (let t = 0; t < e.length; t += 3) {
          const n = 2 * e[t],
            s = 2 * e[t + 1],
            l = 2 * e[t + 2];
          if (
            (i[l] - i[n]) * (i[s + 1] - i[n + 1]) -
              (i[s] - i[n]) * (i[l + 1] - i[n + 1]) >
            1e-10
          )
            return !1;
        }
        return !0;
      })(e)
    ) {
      this.collinear = Int32Array.from(
        { length: i.length / 2 },
        (t, e) => e,
      ).sort((t, e) => i[2 * t] - i[2 * e] || i[2 * t + 1] - i[2 * e + 1]);
      const e = this.collinear[0],
        n = this.collinear[this.collinear.length - 1],
        s = [i[2 * e], i[2 * e + 1], i[2 * n], i[2 * n + 1]],
        l = 1e-8 * Math.hypot(s[3] - s[1], s[2] - s[0]);
      for (let t = 0, e = i.length / 2; t < e; ++t) {
        const e = a(i[2 * t], i[2 * t + 1], l);
        (i[2 * t] = e[0]), (i[2 * t + 1] = e[1]);
      }
      this._delaunator = new t(i);
    } else delete this.collinear;
    const n = (this.halfedges = this._delaunator.halfedges),
      s = (this.hull = this._delaunator.hull),
      l = (this.triangles = this._delaunator.triangles),
      h = this.inedges.fill(-1),
      r = this._hullIndex.fill(-1);
    for (let t = 0, e = n.length; t < e; ++t) {
      const e = l[t % 3 == 2 ? t - 2 : t + 1];
      (-1 !== n[t] && -1 !== h[e]) || (h[e] = t);
    }
    for (let t = 0, e = s.length; t < e; ++t) r[s[t]] = t;
    s.length <= 2 &&
      s.length > 0 &&
      ((this.triangles = new Int32Array(3).fill(-1)),
      (this.halfedges = new Int32Array(3).fill(-1)),
      (this.triangles[0] = s[0]),
      (h[s[0]] = 1),
      2 === s.length &&
        ((h[s[1]] = 0),
        (this.triangles[1] = s[1]),
        (this.triangles[2] = s[1])));
  }
  voronoi(t) {
    return new s(this, t);
  }
  *neighbors(t) {
    const {
      inedges: e,
      hull: i,
      _hullIndex: n,
      halfedges: s,
      triangles: l,
      collinear: h,
    } = this;
    if (h) {
      const e = h.indexOf(t);
      return (
        e > 0 && (yield h[e - 1]), void (e < h.length - 1 && (yield h[e + 1]))
      );
    }
    const r = e[t];
    if (-1 === r) return;
    let o = r,
      a = -1;
    do {
      if ((yield (a = l[o]), (o = o % 3 == 2 ? o - 2 : o + 1), l[o] !== t))
        return;
      if (((o = s[o]), -1 === o)) {
        const e = i[(n[t] + 1) % i.length];
        return void (e !== a && (yield e));
      }
    } while (o !== r);
  }
  find(t, e, i = 0) {
    if ((t = +t) != t || (e = +e) != e) return -1;
    const n = i;
    let s;
    for (; (s = this._step(i, t, e)) >= 0 && s !== i && s !== n; ) i = s;
    return s;
  }
  _step(t, e, i) {
    const {
      inedges: n,
      hull: s,
      _hullIndex: l,
      halfedges: r,
      triangles: o,
      points: a,
    } = this;
    if (-1 === n[t] || !a.length) return (t + 1) % (a.length >> 1);
    let c = t,
      u = h(e - a[2 * t], 2) + h(i - a[2 * t + 1], 2);
    const g = n[t];
    let d = g;
    do {
      let n = o[d];
      const g = h(e - a[2 * n], 2) + h(i - a[2 * n + 1], 2);
      if (
        (g < u && ((u = g), (c = n)),
        (d = d % 3 == 2 ? d - 2 : d + 1),
        o[d] !== t)
      )
        break;
      if (((d = r[d]), -1 === d)) {
        if (
          ((d = s[(l[t] + 1) % s.length]),
          d !== n && h(e - a[2 * d], 2) + h(i - a[2 * d + 1], 2) < u)
        )
          return d;
        break;
      }
    } while (d !== g);
    return c;
  }
  render(t) {
    const e = null == t ? (t = new i()) : void 0,
      { points: n, halfedges: s, triangles: l } = this;
    for (let e = 0, i = s.length; e < i; ++e) {
      const i = s[e];
      if (i < e) continue;
      const h = 2 * l[e],
        r = 2 * l[i];
      t.moveTo(n[h], n[h + 1]), t.lineTo(n[r], n[r + 1]);
    }
    return this.renderHull(t), e && e.value();
  }
  renderPoints(t, e) {
    void 0 !== e ||
      (t && "function" == typeof t.moveTo) ||
      ((e = t), (t = null)),
      (e = null == e ? 2 : +e);
    const n = null == t ? (t = new i()) : void 0,
      { points: s } = this;
    for (let i = 0, n = s.length; i < n; i += 2) {
      const n = s[i],
        h = s[i + 1];
      t.moveTo(n + e, h), t.arc(n, h, e, 0, l);
    }
    return n && n.value();
  }
  renderHull(t) {
    const e = null == t ? (t = new i()) : void 0,
      { hull: n, points: s } = this,
      l = 2 * n[0],
      h = n.length;
    t.moveTo(s[l], s[l + 1]);
    for (let e = 1; e < h; ++e) {
      const i = 2 * n[e];
      t.lineTo(s[i], s[i + 1]);
    }
    return t.closePath(), e && e.value();
  }
  hullPolygon() {
    const t = new n();
    return this.renderHull(t), t.value();
  }
  renderTriangle(t, e) {
    const n = null == e ? (e = new i()) : void 0,
      { points: s, triangles: l } = this,
      h = 2 * l[(t *= 3)],
      r = 2 * l[t + 1],
      o = 2 * l[t + 2];
    return (
      e.moveTo(s[h], s[h + 1]),
      e.lineTo(s[r], s[r + 1]),
      e.lineTo(s[o], s[o + 1]),
      e.closePath(),
      n && n.value()
    );
  }
  *trianglePolygons() {
    const { triangles: t } = this;
    for (let e = 0, i = t.length / 3; e < i; ++e) yield this.trianglePolygon(e);
  }
  trianglePolygon(t) {
    const e = new n();
    return this.renderTriangle(t, e), e.value();
  }
}
export { c as Delaunay, s as Voronoi };
export default null;
