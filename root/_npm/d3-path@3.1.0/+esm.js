/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/d3-path@3.1.0/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
const t = Math.PI,
  i = 2 * t,
  h = 1e-6,
  s = i - h;
function _(t) {
  this._ += t[0];
  for (let i = 1, h = t.length; i < h; ++i) this._ += arguments[i] + t[i];
}
class e {
  constructor(t) {
    (this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ""),
      (this._append =
        null == t
          ? _
          : (function (t) {
              let i = Math.floor(t);
              if (!(i >= 0)) throw new Error(`invalid digits: ${t}`);
              if (i > 15) return _;
              const h = 10 ** i;
              return function (t) {
                this._ += t[0];
                for (let i = 1, s = t.length; i < s; ++i)
                  this._ += Math.round(arguments[i] * h) / h + t[i];
              };
            })(t));
  }
  moveTo(t, i) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +i)}`;
  }
  closePath() {
    null !== this._x1 &&
      ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(t, i) {
    this._append`L${(this._x1 = +t)},${(this._y1 = +i)}`;
  }
  quadraticCurveTo(t, i, h, s) {
    this._append`Q${+t},${+i},${(this._x1 = +h)},${(this._y1 = +s)}`;
  }
  bezierCurveTo(t, i, h, s, _, e) {
    this._append`C${+t},${+i},${+h},${+s},${(this._x1 = +_)},${(this._y1 =
      +e)}`;
  }
  arcTo(i, s, _, e, n) {
    if (((i = +i), (s = +s), (_ = +_), (e = +e), (n = +n) < 0))
      throw new Error(`negative radius: ${n}`);
    let $ = this._x1,
      a = this._y1,
      r = _ - i,
      o = e - s,
      p = $ - i,
      l = a - s,
      u = p * p + l * l;
    if (null === this._x1) this._append`M${(this._x1 = i)},${(this._y1 = s)}`;
    else if (u > h)
      if (Math.abs(l * r - o * p) > h && n) {
        let x = _ - $,
          d = e - a,
          y = r * r + o * o,
          M = x * x + d * d,
          c = Math.sqrt(y),
          f = Math.sqrt(u),
          w = n * Math.tan((t - Math.acos((y + u - M) / (2 * c * f))) / 2),
          v = w / f,
          g = w / c;
        Math.abs(v - 1) > h && this._append`L${i + v * p},${s + v * l}`,
          this._append`A${n},${n},0,0,${+(l * x > p * d)},${(this._x1 =
            i + g * r)},${(this._y1 = s + g * o)}`;
      } else this._append`L${(this._x1 = i)},${(this._y1 = s)}`;
    else;
  }
  arc(_, e, n, $, a, r) {
    if (((_ = +_), (e = +e), (r = !!r), (n = +n) < 0))
      throw new Error(`negative radius: ${n}`);
    let o = n * Math.cos($),
      p = n * Math.sin($),
      l = _ + o,
      u = e + p,
      x = 1 ^ r,
      d = r ? $ - a : a - $;
    null === this._x1
      ? this._append`M${l},${u}`
      : (Math.abs(this._x1 - l) > h || Math.abs(this._y1 - u) > h) &&
        this._append`L${l},${u}`,
      n &&
        (d < 0 && (d = (d % i) + i),
        d > s
          ? this._append`A${n},${n},0,1,${x},${_ - o},${
              e - p
            }A${n},${n},0,1,${x},${(this._x1 = l)},${(this._y1 = u)}`
          : d > h &&
            this._append`A${n},${n},0,${+(d >= t)},${x},${(this._x1 =
              _ + n * Math.cos(a))},${(this._y1 = e + n * Math.sin(a))}`);
  }
  rect(t, i, h, s) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
      +i)}h${(h = +h)}v${+s}h${-h}Z`;
  }
  toString() {
    return this._;
  }
}
function n() {
  return new e();
}
function $(t = 3) {
  return new e(+t);
}
n.prototype = e.prototype;
export { e as Path, n as path, $ as pathRound };
export default null;
