/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/d3-format@3.1.0/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function t(t, i) {
  if (
    (n = (t = i ? t.toExponential(i - 1) : t.toExponential()).indexOf("e")) < 0
  )
    return null;
  var n,
    r = t.slice(0, n);
  return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)];
}
function i(i) {
  return (i = t(Math.abs(i))) ? i[1] : NaN;
}
var n,
  r =
    /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function e(t) {
  if (!(i = r.exec(t))) throw new Error("invalid format: " + t);
  var i;
  return new o({
    fill: i[1],
    align: i[2],
    sign: i[3],
    symbol: i[4],
    zero: i[5],
    width: i[6],
    comma: i[7],
    precision: i[8] && i[8].slice(1),
    trim: i[9],
    type: i[10],
  });
}
function o(t) {
  (this.fill = void 0 === t.fill ? " " : t.fill + ""),
    (this.align = void 0 === t.align ? ">" : t.align + ""),
    (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
    (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
    (this.zero = !!t.zero),
    (this.width = void 0 === t.width ? void 0 : +t.width),
    (this.comma = !!t.comma),
    (this.precision = void 0 === t.precision ? void 0 : +t.precision),
    (this.trim = !!t.trim),
    (this.type = void 0 === t.type ? "" : t.type + "");
}
function a(i, n) {
  var r = t(i, n);
  if (!r) return i + "";
  var e = r[0],
    o = r[1];
  return o < 0
    ? "0." + new Array(-o).join("0") + e
    : e.length > o + 1
    ? e.slice(0, o + 1) + "." + e.slice(o + 1)
    : e + new Array(o - e.length + 2).join("0");
}
(e.prototype = o.prototype),
  (o.prototype.toString = function () {
    return (
      this.fill +
      this.align +
      this.sign +
      this.symbol +
      (this.zero ? "0" : "") +
      (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
      (this.comma ? "," : "") +
      (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) +
      (this.trim ? "~" : "") +
      this.type
    );
  });
var s = {
  "%": (t, i) => (100 * t).toFixed(i),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: function (t) {
    return Math.abs((t = Math.round(t))) >= 1e21
      ? t.toLocaleString("en").replace(/,/g, "")
      : t.toString(10);
  },
  e: (t, i) => t.toExponential(i),
  f: (t, i) => t.toFixed(i),
  g: (t, i) => t.toPrecision(i),
  o: (t) => Math.round(t).toString(8),
  p: (t, i) => a(100 * t, i),
  r: a,
  s: function (i, r) {
    var e = t(i, r);
    if (!e) return i + "";
    var o = e[0],
      a = e[1],
      s = a - (n = 3 * Math.max(-8, Math.min(8, Math.floor(a / 3)))) + 1,
      h = o.length;
    return s === h
      ? o
      : s > h
      ? o + new Array(s - h + 1).join("0")
      : s > 0
      ? o.slice(0, s) + "." + o.slice(s)
      : "0." + new Array(1 - s).join("0") + t(i, Math.max(0, r + s - 1))[0];
  },
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16),
};
function h(t) {
  return t;
}
var c,
  l,
  u,
  f = Array.prototype.map,
  m = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "µ",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y",
  ];
function d(t) {
  var r,
    o,
    a =
      void 0 === t.grouping || void 0 === t.thousands
        ? h
        : ((r = f.call(t.grouping, Number)),
          (o = t.thousands + ""),
          function (t, i) {
            for (
              var n = t.length, e = [], a = 0, s = r[0], h = 0;
              n > 0 &&
              s > 0 &&
              (h + s + 1 > i && (s = Math.max(1, i - h)),
              e.push(t.substring((n -= s), n + s)),
              !((h += s + 1) > i));

            )
              s = r[(a = (a + 1) % r.length)];
            return e.reverse().join(o);
          }),
    c = void 0 === t.currency ? "" : t.currency[0] + "",
    l = void 0 === t.currency ? "" : t.currency[1] + "",
    u = void 0 === t.decimal ? "." : t.decimal + "",
    d =
      void 0 === t.numerals
        ? h
        : (function (t) {
            return function (i) {
              return i.replace(/[0-9]/g, function (i) {
                return t[+i];
              });
            };
          })(f.call(t.numerals, String)),
    g = void 0 === t.percent ? "%" : t.percent + "",
    p = void 0 === t.minus ? "−" : t.minus + "",
    v = void 0 === t.nan ? "NaN" : t.nan + "";
  function M(t) {
    var i = (t = e(t)).fill,
      r = t.align,
      o = t.sign,
      h = t.symbol,
      f = t.zero,
      M = t.width,
      y = t.comma,
      x = t.precision,
      b = t.trim,
      w = t.type;
    "n" === w
      ? ((y = !0), (w = "g"))
      : s[w] || (void 0 === x && (x = 12), (b = !0), (w = "g")),
      (f || ("0" === i && "=" === r)) && ((f = !0), (i = "0"), (r = "="));
    var S =
        "$" === h
          ? c
          : "#" === h && /[boxX]/.test(w)
          ? "0" + w.toLowerCase()
          : "",
      k = "$" === h ? l : /[%p]/.test(w) ? g : "",
      z = s[w],
      A = /[defgprs%]/.test(w);
    function N(t) {
      var e,
        s,
        h,
        c = S,
        l = k;
      if ("c" === w) (l = z(t) + l), (t = "");
      else {
        var g = (t = +t) < 0 || 1 / t < 0;
        if (
          ((t = isNaN(t) ? v : z(Math.abs(t), x)),
          b &&
            (t = (function (t) {
              t: for (var i, n = t.length, r = 1, e = -1; r < n; ++r)
                switch (t[r]) {
                  case ".":
                    e = i = r;
                    break;
                  case "0":
                    0 === e && (e = r), (i = r);
                    break;
                  default:
                    if (!+t[r]) break t;
                    e > 0 && (e = 0);
                }
              return e > 0 ? t.slice(0, e) + t.slice(i + 1) : t;
            })(t)),
          g && 0 == +t && "+" !== o && (g = !1),
          (c = (g ? ("(" === o ? o : p) : "-" === o || "(" === o ? "" : o) + c),
          (l =
            ("s" === w ? m[8 + n / 3] : "") + l + (g && "(" === o ? ")" : "")),
          A)
        )
          for (e = -1, s = t.length; ++e < s; )
            if (48 > (h = t.charCodeAt(e)) || h > 57) {
              (l = (46 === h ? u + t.slice(e + 1) : t.slice(e)) + l),
                (t = t.slice(0, e));
              break;
            }
      }
      y && !f && (t = a(t, 1 / 0));
      var N = c.length + t.length + l.length,
        j = N < M ? new Array(M - N + 1).join(i) : "";
      switch (
        (y && f && ((t = a(j + t, j.length ? M - l.length : 1 / 0)), (j = "")),
        r)
      ) {
        case "<":
          t = c + t + l + j;
          break;
        case "=":
          t = c + j + t + l;
          break;
        case "^":
          t = j.slice(0, (N = j.length >> 1)) + c + t + l + j.slice(N);
          break;
        default:
          t = j + c + t + l;
      }
      return d(t);
    }
    return (
      (x =
        void 0 === x
          ? 6
          : /[gprs]/.test(w)
          ? Math.max(1, Math.min(21, x))
          : Math.max(0, Math.min(20, x))),
      (N.toString = function () {
        return t + "";
      }),
      N
    );
  }
  return {
    format: M,
    formatPrefix: function (t, n) {
      var r = M((((t = e(t)).type = "f"), t)),
        o = 3 * Math.max(-8, Math.min(8, Math.floor(i(n) / 3))),
        a = Math.pow(10, -o),
        s = m[8 + o / 3];
      return function (t) {
        return r(a * t) + s;
      };
    },
  };
}
function g(t) {
  return (c = d(t)), (l = c.format), (u = c.formatPrefix), c;
}
function p(t) {
  return Math.max(0, -i(Math.abs(t)));
}
function v(t, n) {
  return Math.max(
    0,
    3 * Math.max(-8, Math.min(8, Math.floor(i(n) / 3))) - i(Math.abs(t)),
  );
}
function M(t, n) {
  return (t = Math.abs(t)), (n = Math.abs(n) - t), Math.max(0, i(n) - i(t)) + 1;
}
g({ thousands: ",", grouping: [3], currency: ["$", ""] });
export {
  o as FormatSpecifier,
  l as format,
  g as formatDefaultLocale,
  d as formatLocale,
  u as formatPrefix,
  e as formatSpecifier,
  p as precisionFixed,
  v as precisionPrefix,
  M as precisionRound,
};
export default null;
