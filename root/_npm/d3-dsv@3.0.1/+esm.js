/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/d3-dsv@3.0.1/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var r = {},
  n = {};
function t(r) {
  return new Function(
    "d",
    "return {" +
      r
        .map(function (r, n) {
          return JSON.stringify(r) + ": d[" + n + '] || ""';
        })
        .join(",") +
      "}",
  );
}
function e(r) {
  var n = Object.create(null),
    t = [];
  return (
    r.forEach(function (r) {
      for (var e in r) e in n || t.push((n[e] = e));
    }),
    t
  );
}
function o(r, n) {
  var t = r + "",
    e = t.length;
  return e < n ? new Array(n - e + 1).join(0) + t : t;
}
function a(r) {
  var n,
    t = r.getUTCHours(),
    e = r.getUTCMinutes(),
    a = r.getUTCSeconds(),
    u = r.getUTCMilliseconds();
  return isNaN(r)
    ? "Invalid Date"
    : ((n = r.getUTCFullYear()) < 0
        ? "-" + o(-n, 6)
        : n > 9999
        ? "+" + o(n, 6)
        : o(n, 4)) +
        "-" +
        o(r.getUTCMonth() + 1, 2) +
        "-" +
        o(r.getUTCDate(), 2) +
        (u
          ? "T" + o(t, 2) + ":" + o(e, 2) + ":" + o(a, 2) + "." + o(u, 3) + "Z"
          : a
          ? "T" + o(t, 2) + ":" + o(e, 2) + ":" + o(a, 2) + "Z"
          : e || t
          ? "T" + o(t, 2) + ":" + o(e, 2) + "Z"
          : "");
}
function u(o) {
  var u = new RegExp('["' + o + "\n\r]"),
    i = o.charCodeAt(0);
  function f(t, e) {
    var o,
      a = [],
      u = t.length,
      f = 0,
      c = 0,
      s = u <= 0,
      l = !1;
    function d() {
      if (s) return n;
      if (l) return (l = !1), r;
      var e,
        o,
        a = f;
      if (34 === t.charCodeAt(a)) {
        for (
          ;
          (f++ < u && 34 !== t.charCodeAt(f)) || 34 === t.charCodeAt(++f);

        );
        return (
          (e = f) >= u
            ? (s = !0)
            : 10 === (o = t.charCodeAt(f++))
            ? (l = !0)
            : 13 === o && ((l = !0), 10 === t.charCodeAt(f) && ++f),
          t.slice(a + 1, e - 1).replace(/""/g, '"')
        );
      }
      for (; f < u; ) {
        if (10 === (o = t.charCodeAt((e = f++)))) l = !0;
        else if (13 === o) (l = !0), 10 === t.charCodeAt(f) && ++f;
        else if (o !== i) continue;
        return t.slice(a, e);
      }
      return (s = !0), t.slice(a, u);
    }
    for (
      10 === t.charCodeAt(u - 1) && --u, 13 === t.charCodeAt(u - 1) && --u;
      (o = d()) !== n;

    ) {
      for (var m = []; o !== r && o !== n; ) m.push(o), (o = d());
      (e && null == (m = e(m, c++))) || a.push(m);
    }
    return a;
  }
  function c(r, n) {
    return r.map(function (r) {
      return n
        .map(function (n) {
          return l(r[n]);
        })
        .join(o);
    });
  }
  function s(r) {
    return r.map(l).join(o);
  }
  function l(r) {
    return null == r
      ? ""
      : r instanceof Date
      ? a(r)
      : u.test((r += ""))
      ? '"' + r.replace(/"/g, '""') + '"'
      : r;
  }
  return {
    parse: function (r, n) {
      var e,
        o,
        a = f(r, function (r, a) {
          if (e) return e(r, a - 1);
          (o = r),
            (e = n
              ? (function (r, n) {
                  var e = t(r);
                  return function (t, o) {
                    return n(e(t), o, r);
                  };
                })(r, n)
              : t(r));
        });
      return (a.columns = o || []), a;
    },
    parseRows: f,
    format: function (r, n) {
      return (
        null == n && (n = e(r)), [n.map(l).join(o)].concat(c(r, n)).join("\n")
      );
    },
    formatBody: function (r, n) {
      return null == n && (n = e(r)), c(r, n).join("\n");
    },
    formatRows: function (r) {
      return r.map(s).join("\n");
    },
    formatRow: s,
    formatValue: l,
  };
}
var i = u(","),
  f = i.parse,
  c = i.parseRows,
  s = i.format,
  l = i.formatBody,
  d = i.formatRows,
  m = i.formatRow,
  p = i.formatValue,
  h = u("\t"),
  C = h.parse,
  g = h.parseRows,
  v = h.format,
  w = h.formatBody,
  T = h.formatRows,
  A = h.formatRow,
  R = h.formatValue;
function j(r) {
  for (var n in r) {
    var t,
      e,
      o = r[n].trim();
    if (o)
      if ("true" === o) o = !0;
      else if ("false" === o) o = !1;
      else if ("NaN" === o) o = NaN;
      else if (isNaN((t = +o))) {
        if (
          !(e = o.match(
            /^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/,
          ))
        )
          continue;
        N && e[4] && !e[7] && (o = o.replace(/-/g, "/").replace(/T/, " ")),
          (o = new Date(o));
      } else o = t;
    else o = null;
    r[n] = o;
  }
  return r;
}
const N =
  new Date("2019-01-01T00:00").getHours() ||
  new Date("2019-07-01T00:00").getHours();
export {
  j as autoType,
  s as csvFormat,
  l as csvFormatBody,
  m as csvFormatRow,
  d as csvFormatRows,
  p as csvFormatValue,
  f as csvParse,
  c as csvParseRows,
  u as dsvFormat,
  v as tsvFormat,
  w as tsvFormatBody,
  A as tsvFormatRow,
  T as tsvFormatRows,
  R as tsvFormatValue,
  C as tsvParse,
  g as tsvParseRows,
};
export default null;
