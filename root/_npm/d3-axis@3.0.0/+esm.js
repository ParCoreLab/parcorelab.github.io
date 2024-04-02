/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/d3-axis@3.0.0/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function t(t) {
  return t;
}
var n = 1,
  r = 2,
  e = 3,
  i = 4,
  a = 1e-6;
function o(t) {
  return "translate(" + t + ",0)";
}
function u(t) {
  return "translate(0," + t + ")";
}
function c(t) {
  return (n) => +t(n);
}
function l(t, n) {
  return (
    (n = Math.max(0, t.bandwidth() - 2 * n) / 2),
    t.round() && (n = Math.round(n)),
    (r) => +t(r) + n
  );
}
function s() {
  return !this.__axis;
}
function f(f, d) {
  var m = [],
    h = null,
    g = null,
    p = 6,
    k = 6,
    x = 3,
    y = "undefined" != typeof window && window.devicePixelRatio > 1 ? 0 : 0.5,
    A = f === n || f === i ? -1 : 1,
    M = f === i || f === r ? "x" : "y",
    v = f === n || f === e ? o : u;
  function w(o) {
    var u = null == h ? (d.ticks ? d.ticks.apply(d, m) : d.domain()) : h,
      w = null == g ? (d.tickFormat ? d.tickFormat.apply(d, m) : t) : g,
      _ = Math.max(p, 0) + x,
      F = d.range(),
      V = +F[0] + y,
      z = +F[F.length - 1] + y,
      H = (d.bandwidth ? l : c)(d.copy(), y),
      b = o.selection ? o.selection() : o,
      C = b.selectAll(".domain").data([null]),
      S = b.selectAll(".tick").data(u, d).order(),
      P = S.exit(),
      I = S.enter().append("g").attr("class", "tick"),
      N = S.select("line"),
      O = S.select("text");
    (C = C.merge(
      C.enter()
        .insert("path", ".tick")
        .attr("class", "domain")
        .attr("stroke", "currentColor"),
    )),
      (S = S.merge(I)),
      (N = N.merge(
        I.append("line")
          .attr("stroke", "currentColor")
          .attr(M + "2", A * p),
      )),
      (O = O.merge(
        I.append("text")
          .attr("fill", "currentColor")
          .attr(M, A * _)
          .attr("dy", f === n ? "0em" : f === e ? "0.71em" : "0.32em"),
      )),
      o !== b &&
        ((C = C.transition(o)),
        (S = S.transition(o)),
        (N = N.transition(o)),
        (O = O.transition(o)),
        (P = P.transition(o)
          .attr("opacity", a)
          .attr("transform", function (t) {
            return isFinite((t = H(t)))
              ? v(t + y)
              : this.getAttribute("transform");
          })),
        I.attr("opacity", a).attr("transform", function (t) {
          var n = this.parentNode.__axis;
          return v((n && isFinite((n = n(t))) ? n : H(t)) + y);
        })),
      P.remove(),
      C.attr(
        "d",
        f === i || f === r
          ? k
            ? "M" + A * k + "," + V + "H" + y + "V" + z + "H" + A * k
            : "M" + y + "," + V + "V" + z
          : k
          ? "M" + V + "," + A * k + "V" + y + "H" + z + "V" + A * k
          : "M" + V + "," + y + "H" + z,
      ),
      S.attr("opacity", 1).attr("transform", function (t) {
        return v(H(t) + y);
      }),
      N.attr(M + "2", A * p),
      O.attr(M, A * _).text(w),
      b
        .filter(s)
        .attr("fill", "none")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", f === r ? "start" : f === i ? "end" : "middle"),
      b.each(function () {
        this.__axis = H;
      });
  }
  return (
    (w.scale = function (t) {
      return arguments.length ? ((d = t), w) : d;
    }),
    (w.ticks = function () {
      return (m = Array.from(arguments)), w;
    }),
    (w.tickArguments = function (t) {
      return arguments.length
        ? ((m = null == t ? [] : Array.from(t)), w)
        : m.slice();
    }),
    (w.tickValues = function (t) {
      return arguments.length
        ? ((h = null == t ? null : Array.from(t)), w)
        : h && h.slice();
    }),
    (w.tickFormat = function (t) {
      return arguments.length ? ((g = t), w) : g;
    }),
    (w.tickSize = function (t) {
      return arguments.length ? ((p = k = +t), w) : p;
    }),
    (w.tickSizeInner = function (t) {
      return arguments.length ? ((p = +t), w) : p;
    }),
    (w.tickSizeOuter = function (t) {
      return arguments.length ? ((k = +t), w) : k;
    }),
    (w.tickPadding = function (t) {
      return arguments.length ? ((x = +t), w) : x;
    }),
    (w.offset = function (t) {
      return arguments.length ? ((y = +t), w) : y;
    }),
    w
  );
}
function d(t) {
  return f(n, t);
}
function m(t) {
  return f(r, t);
}
function h(t) {
  return f(e, t);
}
function g(t) {
  return f(i, t);
}
export { h as axisBottom, g as axisLeft, m as axisRight, d as axisTop };
export default null;
