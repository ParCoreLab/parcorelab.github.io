/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/d3-zoom@3.0.0/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import { dispatch as t } from "../d3-dispatch@3.0.1/+esm.js";
import { dragDisable as n, dragEnable as e } from "../d3-drag@3.0.0/+esm.js";
import { interpolateZoom as o } from "../d3-interpolate@3.0.1/+esm.js";
import { select as i, pointer as r } from "../d3-selection@3.0.0/+esm.js";
import { interrupt as u } from "../d3-transition@3.0.1/+esm.js";
var h = (t) => () => t;
function s(t, { sourceEvent: n, target: e, transform: o, dispatch: i }) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    target: { value: e, enumerable: !0, configurable: !0 },
    transform: { value: o, enumerable: !0, configurable: !0 },
    _: { value: i },
  });
}
function a(t, n, e) {
  (this.k = t), (this.x = n), (this.y = e);
}
a.prototype = {
  constructor: a,
  scale: function (t) {
    return 1 === t ? this : new a(this.k * t, this.x, this.y);
  },
  translate: function (t, n) {
    return (0 === t) & (0 === n)
      ? this
      : new a(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function (t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function (t) {
    return t * this.k + this.x;
  },
  applyY: function (t) {
    return t * this.k + this.y;
  },
  invert: function (t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function (t) {
    return (t - this.x) / this.k;
  },
  invertY: function (t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function (t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function (t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function () {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  },
};
var c = new a(1, 0, 0);
function l(t) {
  for (; !t.__zoom; ) if (!(t = t.parentNode)) return c;
  return t.__zoom;
}
function f(t) {
  t.stopImmediatePropagation();
}
function m(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function p(t) {
  return !((t.ctrlKey && "wheel" !== t.type) || t.button);
}
function v() {
  var t = this;
  return t instanceof SVGElement
    ? (t = t.ownerSVGElement || t).hasAttribute("viewBox")
      ? [
          [(t = t.viewBox.baseVal).x, t.y],
          [t.x + t.width, t.y + t.height],
        ]
      : [
          [0, 0],
          [t.width.baseVal.value, t.height.baseVal.value],
        ]
    : [
        [0, 0],
        [t.clientWidth, t.clientHeight],
      ];
}
function y() {
  return this.__zoom || c;
}
function d(t) {
  return (
    -t.deltaY *
    (1 === t.deltaMode ? 0.05 : t.deltaMode ? 1 : 0.002) *
    (t.ctrlKey ? 10 : 1)
  );
}
function z() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function _(t, n, e) {
  var o = t.invertX(n[0][0]) - e[0][0],
    i = t.invertX(n[1][0]) - e[1][0],
    r = t.invertY(n[0][1]) - e[0][1],
    u = t.invertY(n[1][1]) - e[1][1];
  return t.translate(
    i > o ? (o + i) / 2 : Math.min(0, o) || Math.max(0, i),
    u > r ? (r + u) / 2 : Math.min(0, r) || Math.max(0, u),
  );
}
function g() {
  var l,
    g,
    k,
    x = p,
    w = v,
    b = _,
    T = d,
    M = z,
    E = [0, 1 / 0],
    Y = [
      [-1 / 0, -1 / 0],
      [1 / 0, 1 / 0],
    ],
    X = 250,
    V = o,
    B = t("start", "zoom", "end"),
    D = 500,
    P = 150,
    I = 0,
    K = 10;
  function S(t) {
    t.property("__zoom", y)
      .on("wheel.zoom", O, { passive: !1 })
      .on("mousedown.zoom", W)
      .on("dblclick.zoom", Z)
      .filter(M)
      .on("touchstart.zoom", C)
      .on("touchmove.zoom", F)
      .on("touchend.zoom touchcancel.zoom", J)
      .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function q(t, n) {
    return (n = Math.max(E[0], Math.min(E[1], n))) === t.k
      ? t
      : new a(n, t.x, t.y);
  }
  function G(t, n, e) {
    var o = n[0] - e[0] * t.k,
      i = n[1] - e[1] * t.k;
    return o === t.x && i === t.y ? t : new a(t.k, o, i);
  }
  function j(t) {
    return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
  }
  function A(t, n, e, o) {
    t.on("start.zoom", function () {
      H(this, arguments).event(o).start();
    })
      .on("interrupt.zoom end.zoom", function () {
        H(this, arguments).event(o).end();
      })
      .tween("zoom", function () {
        var t = this,
          i = arguments,
          r = H(t, i).event(o),
          u = w.apply(t, i),
          h = null == e ? j(u) : "function" == typeof e ? e.apply(t, i) : e,
          s = Math.max(u[1][0] - u[0][0], u[1][1] - u[0][1]),
          c = t.__zoom,
          l = "function" == typeof n ? n.apply(t, i) : n,
          f = V(c.invert(h).concat(s / c.k), l.invert(h).concat(s / l.k));
        return function (t) {
          if (1 === t) t = l;
          else {
            var n = f(t),
              e = s / n[2];
            t = new a(e, h[0] - n[0] * e, h[1] - n[1] * e);
          }
          r.zoom(null, t);
        };
      });
  }
  function H(t, n, e) {
    return (!e && t.__zooming) || new N(t, n);
  }
  function N(t, n) {
    (this.that = t),
      (this.args = n),
      (this.active = 0),
      (this.sourceEvent = null),
      (this.extent = w.apply(t, n)),
      (this.taps = 0);
  }
  function O(t, ...n) {
    if (x.apply(this, arguments)) {
      var e = H(this, n).event(t),
        o = this.__zoom,
        i = Math.max(
          E[0],
          Math.min(E[1], o.k * Math.pow(2, T.apply(this, arguments))),
        ),
        h = r(t);
      if (e.wheel)
        (e.mouse[0][0] === h[0] && e.mouse[0][1] === h[1]) ||
          (e.mouse[1] = o.invert((e.mouse[0] = h))),
          clearTimeout(e.wheel);
      else {
        if (o.k === i) return;
        (e.mouse = [h, o.invert(h)]), u(this), e.start();
      }
      m(t),
        (e.wheel = setTimeout(function () {
          (e.wheel = null), e.end();
        }, P)),
        e.zoom("mouse", b(G(q(o, i), e.mouse[0], e.mouse[1]), e.extent, Y));
    }
  }
  function W(t, ...o) {
    if (!k && x.apply(this, arguments)) {
      var h = t.currentTarget,
        s = H(this, o, !0).event(t),
        a = i(t.view)
          .on(
            "mousemove.zoom",
            function (t) {
              if ((m(t), !s.moved)) {
                var n = t.clientX - l,
                  e = t.clientY - p;
                s.moved = n * n + e * e > I;
              }
              s.event(t).zoom(
                "mouse",
                b(
                  G(s.that.__zoom, (s.mouse[0] = r(t, h)), s.mouse[1]),
                  s.extent,
                  Y,
                ),
              );
            },
            !0,
          )
          .on(
            "mouseup.zoom",
            function (t) {
              a.on("mousemove.zoom mouseup.zoom", null),
                e(t.view, s.moved),
                m(t),
                s.event(t).end();
            },
            !0,
          ),
        c = r(t, h),
        l = t.clientX,
        p = t.clientY;
      n(t.view),
        f(t),
        (s.mouse = [c, this.__zoom.invert(c)]),
        u(this),
        s.start();
    }
  }
  function Z(t, ...n) {
    if (x.apply(this, arguments)) {
      var e = this.__zoom,
        o = r(t.changedTouches ? t.changedTouches[0] : t, this),
        u = e.invert(o),
        h = e.k * (t.shiftKey ? 0.5 : 2),
        s = b(G(q(e, h), o, u), w.apply(this, n), Y);
      m(t),
        X > 0
          ? i(this).transition().duration(X).call(A, s, o, t)
          : i(this).call(S.transform, s, o, t);
    }
  }
  function C(t, ...n) {
    if (x.apply(this, arguments)) {
      var e,
        o,
        i,
        h,
        s = t.touches,
        a = s.length,
        c = H(this, n, t.changedTouches.length === a).event(t);
      for (f(t), o = 0; o < a; ++o)
        (i = s[o]),
          (h = [(h = r(i, this)), this.__zoom.invert(h), i.identifier]),
          c.touch0
            ? c.touch1 || c.touch0[2] === h[2] || ((c.touch1 = h), (c.taps = 0))
            : ((c.touch0 = h), (e = !0), (c.taps = 1 + !!l));
      l && (l = clearTimeout(l)),
        e &&
          (c.taps < 2 &&
            ((g = h[0]),
            (l = setTimeout(function () {
              l = null;
            }, D))),
          u(this),
          c.start());
    }
  }
  function F(t, ...n) {
    if (this.__zooming) {
      var e,
        o,
        i,
        u,
        h = H(this, n).event(t),
        s = t.changedTouches,
        a = s.length;
      for (m(t), e = 0; e < a; ++e)
        (o = s[e]),
          (i = r(o, this)),
          h.touch0 && h.touch0[2] === o.identifier
            ? (h.touch0[0] = i)
            : h.touch1 && h.touch1[2] === o.identifier && (h.touch1[0] = i);
      if (((o = h.that.__zoom), h.touch1)) {
        var c = h.touch0[0],
          l = h.touch0[1],
          f = h.touch1[0],
          p = h.touch1[1],
          v = (v = f[0] - c[0]) * v + (v = f[1] - c[1]) * v,
          y = (y = p[0] - l[0]) * y + (y = p[1] - l[1]) * y;
        (o = q(o, Math.sqrt(v / y))),
          (i = [(c[0] + f[0]) / 2, (c[1] + f[1]) / 2]),
          (u = [(l[0] + p[0]) / 2, (l[1] + p[1]) / 2]);
      } else {
        if (!h.touch0) return;
        (i = h.touch0[0]), (u = h.touch0[1]);
      }
      h.zoom("touch", b(G(o, i, u), h.extent, Y));
    }
  }
  function J(t, ...n) {
    if (this.__zooming) {
      var e,
        o,
        u = H(this, n).event(t),
        h = t.changedTouches,
        s = h.length;
      for (
        f(t),
          k && clearTimeout(k),
          k = setTimeout(function () {
            k = null;
          }, D),
          e = 0;
        e < s;
        ++e
      )
        (o = h[e]),
          u.touch0 && u.touch0[2] === o.identifier
            ? delete u.touch0
            : u.touch1 && u.touch1[2] === o.identifier && delete u.touch1;
      if (
        (u.touch1 && !u.touch0 && ((u.touch0 = u.touch1), delete u.touch1),
        u.touch0)
      )
        u.touch0[1] = this.__zoom.invert(u.touch0[0]);
      else if (
        (u.end(),
        2 === u.taps &&
          ((o = r(o, this)), Math.hypot(g[0] - o[0], g[1] - o[1]) < K))
      ) {
        var a = i(this).on("dblclick.zoom");
        a && a.apply(this, arguments);
      }
    }
  }
  return (
    (S.transform = function (t, n, e, o) {
      var i = t.selection ? t.selection() : t;
      i.property("__zoom", y),
        t !== i
          ? A(t, n, e, o)
          : i.interrupt().each(function () {
              H(this, arguments)
                .event(o)
                .start()
                .zoom(
                  null,
                  "function" == typeof n ? n.apply(this, arguments) : n,
                )
                .end();
            });
    }),
    (S.scaleBy = function (t, n, e, o) {
      S.scaleTo(
        t,
        function () {
          return (
            this.__zoom.k *
            ("function" == typeof n ? n.apply(this, arguments) : n)
          );
        },
        e,
        o,
      );
    }),
    (S.scaleTo = function (t, n, e, o) {
      S.transform(
        t,
        function () {
          var t = w.apply(this, arguments),
            o = this.__zoom,
            i =
              null == e
                ? j(t)
                : "function" == typeof e
                ? e.apply(this, arguments)
                : e,
            r = o.invert(i),
            u = "function" == typeof n ? n.apply(this, arguments) : n;
          return b(G(q(o, u), i, r), t, Y);
        },
        e,
        o,
      );
    }),
    (S.translateBy = function (t, n, e, o) {
      S.transform(
        t,
        function () {
          return b(
            this.__zoom.translate(
              "function" == typeof n ? n.apply(this, arguments) : n,
              "function" == typeof e ? e.apply(this, arguments) : e,
            ),
            w.apply(this, arguments),
            Y,
          );
        },
        null,
        o,
      );
    }),
    (S.translateTo = function (t, n, e, o, i) {
      S.transform(
        t,
        function () {
          var t = w.apply(this, arguments),
            i = this.__zoom,
            r =
              null == o
                ? j(t)
                : "function" == typeof o
                ? o.apply(this, arguments)
                : o;
          return b(
            c
              .translate(r[0], r[1])
              .scale(i.k)
              .translate(
                "function" == typeof n ? -n.apply(this, arguments) : -n,
                "function" == typeof e ? -e.apply(this, arguments) : -e,
              ),
            t,
            Y,
          );
        },
        o,
        i,
      );
    }),
    (N.prototype = {
      event: function (t) {
        return t && (this.sourceEvent = t), this;
      },
      start: function () {
        return (
          1 == ++this.active &&
            ((this.that.__zooming = this), this.emit("start")),
          this
        );
      },
      zoom: function (t, n) {
        return (
          this.mouse &&
            "mouse" !== t &&
            (this.mouse[1] = n.invert(this.mouse[0])),
          this.touch0 &&
            "touch" !== t &&
            (this.touch0[1] = n.invert(this.touch0[0])),
          this.touch1 &&
            "touch" !== t &&
            (this.touch1[1] = n.invert(this.touch1[0])),
          (this.that.__zoom = n),
          this.emit("zoom"),
          this
        );
      },
      end: function () {
        return (
          0 == --this.active && (delete this.that.__zooming, this.emit("end")),
          this
        );
      },
      emit: function (t) {
        var n = i(this.that).datum();
        B.call(
          t,
          this.that,
          new s(t, {
            sourceEvent: this.sourceEvent,
            target: S,
            type: t,
            transform: this.that.__zoom,
            dispatch: B,
          }),
          n,
        );
      },
    }),
    (S.wheelDelta = function (t) {
      return arguments.length
        ? ((T = "function" == typeof t ? t : h(+t)), S)
        : T;
    }),
    (S.filter = function (t) {
      return arguments.length
        ? ((x = "function" == typeof t ? t : h(!!t)), S)
        : x;
    }),
    (S.touchable = function (t) {
      return arguments.length
        ? ((M = "function" == typeof t ? t : h(!!t)), S)
        : M;
    }),
    (S.extent = function (t) {
      return arguments.length
        ? ((w =
            "function" == typeof t
              ? t
              : h([
                  [+t[0][0], +t[0][1]],
                  [+t[1][0], +t[1][1]],
                ])),
          S)
        : w;
    }),
    (S.scaleExtent = function (t) {
      return arguments.length
        ? ((E[0] = +t[0]), (E[1] = +t[1]), S)
        : [E[0], E[1]];
    }),
    (S.translateExtent = function (t) {
      return arguments.length
        ? ((Y[0][0] = +t[0][0]),
          (Y[1][0] = +t[1][0]),
          (Y[0][1] = +t[0][1]),
          (Y[1][1] = +t[1][1]),
          S)
        : [
            [Y[0][0], Y[0][1]],
            [Y[1][0], Y[1][1]],
          ];
    }),
    (S.constrain = function (t) {
      return arguments.length ? ((b = t), S) : b;
    }),
    (S.duration = function (t) {
      return arguments.length ? ((X = +t), S) : X;
    }),
    (S.interpolate = function (t) {
      return arguments.length ? ((V = t), S) : V;
    }),
    (S.on = function () {
      var t = B.on.apply(B, arguments);
      return t === B ? S : t;
    }),
    (S.clickDistance = function (t) {
      return arguments.length ? ((I = (t = +t) * t), S) : Math.sqrt(I);
    }),
    (S.tapDistance = function (t) {
      return arguments.length ? ((K = +t), S) : K;
    }),
    S
  );
}
l.prototype = a.prototype;
export { a as ZoomTransform, g as zoom, c as zoomIdentity, l as zoomTransform };
export default null;
