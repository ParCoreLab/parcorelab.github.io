/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/d3-time-format@4.1.0/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import {
  timeDay as n,
  timeYear as t,
  timeSunday as e,
  timeThursday as r,
  timeMonday as u,
  utcDay as i,
  utcYear as o,
  utcSunday as c,
  utcThursday as a,
  utcMonday as f,
} from "../d3-time@3.1.0/+esm.js";
function l(n) {
  if (0 <= n.y && n.y < 100) {
    var t = new Date(-1, n.m, n.d, n.H, n.M, n.S, n.L);
    return t.setFullYear(n.y), t;
  }
  return new Date(n.y, n.m, n.d, n.H, n.M, n.S, n.L);
}
function g(n) {
  if (0 <= n.y && n.y < 100) {
    var t = new Date(Date.UTC(-1, n.m, n.d, n.H, n.M, n.S, n.L));
    return t.setUTCFullYear(n.y), t;
  }
  return new Date(Date.UTC(n.y, n.m, n.d, n.H, n.M, n.S, n.L));
}
function s(n, t, e) {
  return { y: n, m: t, d: e, H: 0, M: 0, S: 0, L: 0 };
}
function h(t) {
  var e = t.dateTime,
    r = t.date,
    o = t.time,
    c = t.periods,
    a = t.days,
    h = t.shortDays,
    y = t.months,
    v = t.shortMonths,
    d = p(c),
    m = S(c),
    D = p(a),
    M = S(a),
    T = p(h),
    U = S(h),
    x = p(y),
    w = S(y),
    un = p(v),
    pn = S(v),
    qn = {
      a: function (n) {
        return h[n.getDay()];
      },
      A: function (n) {
        return a[n.getDay()];
      },
      b: function (n) {
        return v[n.getMonth()];
      },
      B: function (n) {
        return y[n.getMonth()];
      },
      c: null,
      d: $,
      e: $,
      f: k,
      g: ln,
      G: sn,
      H: z,
      I: E,
      j: R,
      L: _,
      m: K,
      M: nn,
      p: function (n) {
        return c[+(n.getHours() >= 12)];
      },
      q: function (n) {
        return 1 + ~~(n.getMonth() / 3);
      },
      Q: Vn,
      s: jn,
      S: tn,
      u: en,
      U: rn,
      V: on,
      w: cn,
      W: an,
      x: null,
      X: null,
      y: fn,
      Y: gn,
      Z: hn,
      "%": bn,
    },
    In = {
      a: function (n) {
        return h[n.getUTCDay()];
      },
      A: function (n) {
        return a[n.getUTCDay()];
      },
      b: function (n) {
        return v[n.getUTCMonth()];
      },
      B: function (n) {
        return y[n.getUTCMonth()];
      },
      c: null,
      d: yn,
      e: yn,
      f: Cn,
      g: Yn,
      G: Zn,
      H: vn,
      I: dn,
      j: mn,
      L: Dn,
      m: Mn,
      M: Tn,
      p: function (n) {
        return c[+(n.getUTCHours() >= 12)];
      },
      q: function (n) {
        return 1 + ~~(n.getUTCMonth() / 3);
      },
      Q: Vn,
      s: jn,
      S: Un,
      u: xn,
      U: wn,
      V: Sn,
      w: Fn,
      W: Ln,
      x: null,
      X: null,
      y: Hn,
      Y: An,
      Z: Wn,
      "%": bn,
    },
    Jn = {
      a: function (n, t, e) {
        var r = T.exec(t.slice(e));
        return r ? ((n.w = U.get(r[0].toLowerCase())), e + r[0].length) : -1;
      },
      A: function (n, t, e) {
        var r = D.exec(t.slice(e));
        return r ? ((n.w = M.get(r[0].toLowerCase())), e + r[0].length) : -1;
      },
      b: function (n, t, e) {
        var r = un.exec(t.slice(e));
        return r ? ((n.m = pn.get(r[0].toLowerCase())), e + r[0].length) : -1;
      },
      B: function (n, t, e) {
        var r = x.exec(t.slice(e));
        return r ? ((n.m = w.get(r[0].toLowerCase())), e + r[0].length) : -1;
      },
      c: function (n, t, r) {
        return On(n, e, t, r);
      },
      d: q,
      e: q,
      f: N,
      g: W,
      G: Z,
      H: J,
      I: J,
      j: I,
      L: O,
      m: j,
      M: Q,
      p: function (n, t, e) {
        var r = d.exec(t.slice(e));
        return r ? ((n.p = m.get(r[0].toLowerCase())), e + r[0].length) : -1;
      },
      q: V,
      Q: B,
      s: G,
      S: X,
      u: L,
      U: H,
      V: Y,
      w: F,
      W: A,
      x: function (n, t, e) {
        return On(n, r, t, e);
      },
      X: function (n, t, e) {
        return On(n, o, t, e);
      },
      y: W,
      Y: Z,
      Z: b,
      "%": P,
    };
  function Qn(n, t) {
    return function (e) {
      var r,
        u,
        i,
        o = [],
        c = -1,
        a = 0,
        f = n.length;
      for (e instanceof Date || (e = new Date(+e)); ++c < f; )
        37 === n.charCodeAt(c) &&
          (o.push(n.slice(a, c)),
          null != (u = C[(r = n.charAt(++c))])
            ? (r = n.charAt(++c))
            : (u = "e" === r ? " " : "0"),
          (i = t[r]) && (r = i(e, u)),
          o.push(r),
          (a = c + 1));
      return o.push(n.slice(a, c)), o.join("");
    };
  }
  function Xn(t, e) {
    return function (r) {
      var o,
        c,
        a = s(1900, void 0, 1);
      if (On(a, t, (r += ""), 0) != r.length) return null;
      if ("Q" in a) return new Date(a.Q);
      if ("s" in a) return new Date(1e3 * a.s + ("L" in a ? a.L : 0));
      if (
        (e && !("Z" in a) && (a.Z = 0),
        "p" in a && (a.H = (a.H % 12) + 12 * a.p),
        void 0 === a.m && (a.m = "q" in a ? a.q : 0),
        "V" in a)
      ) {
        if (a.V < 1 || a.V > 53) return null;
        "w" in a || (a.w = 1),
          "Z" in a
            ? ((c = (o = g(s(a.y, 0, 1))).getUTCDay()),
              (o = c > 4 || 0 === c ? f.ceil(o) : f(o)),
              (o = i.offset(o, 7 * (a.V - 1))),
              (a.y = o.getUTCFullYear()),
              (a.m = o.getUTCMonth()),
              (a.d = o.getUTCDate() + ((a.w + 6) % 7)))
            : ((c = (o = l(s(a.y, 0, 1))).getDay()),
              (o = c > 4 || 0 === c ? u.ceil(o) : u(o)),
              (o = n.offset(o, 7 * (a.V - 1))),
              (a.y = o.getFullYear()),
              (a.m = o.getMonth()),
              (a.d = o.getDate() + ((a.w + 6) % 7)));
      } else
        ("W" in a || "U" in a) &&
          ("w" in a || (a.w = "u" in a ? a.u % 7 : "W" in a ? 1 : 0),
          (c =
            "Z" in a ? g(s(a.y, 0, 1)).getUTCDay() : l(s(a.y, 0, 1)).getDay()),
          (a.m = 0),
          (a.d =
            "W" in a
              ? ((a.w + 6) % 7) + 7 * a.W - ((c + 5) % 7)
              : a.w + 7 * a.U - ((c + 6) % 7)));
      return "Z" in a
        ? ((a.H += (a.Z / 100) | 0), (a.M += a.Z % 100), g(a))
        : l(a);
    };
  }
  function On(n, t, e, r) {
    for (var u, i, o = 0, c = t.length, a = e.length; o < c; ) {
      if (r >= a) return -1;
      if (37 === (u = t.charCodeAt(o++))) {
        if (
          ((u = t.charAt(o++)),
          !(i = Jn[u in C ? t.charAt(o++) : u]) || (r = i(n, e, r)) < 0)
        )
          return -1;
      } else if (u != e.charCodeAt(r++)) return -1;
    }
    return r;
  }
  return (
    (qn.x = Qn(r, qn)),
    (qn.X = Qn(o, qn)),
    (qn.c = Qn(e, qn)),
    (In.x = Qn(r, In)),
    (In.X = Qn(o, In)),
    (In.c = Qn(e, In)),
    {
      format: function (n) {
        var t = Qn((n += ""), qn);
        return (
          (t.toString = function () {
            return n;
          }),
          t
        );
      },
      parse: function (n) {
        var t = Xn((n += ""), !1);
        return (
          (t.toString = function () {
            return n;
          }),
          t
        );
      },
      utcFormat: function (n) {
        var t = Qn((n += ""), In);
        return (
          (t.toString = function () {
            return n;
          }),
          t
        );
      },
      utcParse: function (n) {
        var t = Xn((n += ""), !0);
        return (
          (t.toString = function () {
            return n;
          }),
          t
        );
      },
    }
  );
}
var y,
  v,
  d,
  m,
  D,
  C = { "-": "", _: " ", 0: "0" },
  M = /^\s*\d+/,
  T = /^%/,
  U = /[\\^$*+?|[\]().{}]/g;
function x(n, t, e) {
  var r = n < 0 ? "-" : "",
    u = (r ? -n : n) + "",
    i = u.length;
  return r + (i < e ? new Array(e - i + 1).join(t) + u : u);
}
function w(n) {
  return n.replace(U, "\\$&");
}
function p(n) {
  return new RegExp("^(?:" + n.map(w).join("|") + ")", "i");
}
function S(n) {
  return new Map(n.map((n, t) => [n.toLowerCase(), t]));
}
function F(n, t, e) {
  var r = M.exec(t.slice(e, e + 1));
  return r ? ((n.w = +r[0]), e + r[0].length) : -1;
}
function L(n, t, e) {
  var r = M.exec(t.slice(e, e + 1));
  return r ? ((n.u = +r[0]), e + r[0].length) : -1;
}
function H(n, t, e) {
  var r = M.exec(t.slice(e, e + 2));
  return r ? ((n.U = +r[0]), e + r[0].length) : -1;
}
function Y(n, t, e) {
  var r = M.exec(t.slice(e, e + 2));
  return r ? ((n.V = +r[0]), e + r[0].length) : -1;
}
function A(n, t, e) {
  var r = M.exec(t.slice(e, e + 2));
  return r ? ((n.W = +r[0]), e + r[0].length) : -1;
}
function Z(n, t, e) {
  var r = M.exec(t.slice(e, e + 4));
  return r ? ((n.y = +r[0]), e + r[0].length) : -1;
}
function W(n, t, e) {
  var r = M.exec(t.slice(e, e + 2));
  return r ? ((n.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), e + r[0].length) : -1;
}
function b(n, t, e) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(e, e + 6));
  return r
    ? ((n.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), e + r[0].length)
    : -1;
}
function V(n, t, e) {
  var r = M.exec(t.slice(e, e + 1));
  return r ? ((n.q = 3 * r[0] - 3), e + r[0].length) : -1;
}
function j(n, t, e) {
  var r = M.exec(t.slice(e, e + 2));
  return r ? ((n.m = r[0] - 1), e + r[0].length) : -1;
}
function q(n, t, e) {
  var r = M.exec(t.slice(e, e + 2));
  return r ? ((n.d = +r[0]), e + r[0].length) : -1;
}
function I(n, t, e) {
  var r = M.exec(t.slice(e, e + 3));
  return r ? ((n.m = 0), (n.d = +r[0]), e + r[0].length) : -1;
}
function J(n, t, e) {
  var r = M.exec(t.slice(e, e + 2));
  return r ? ((n.H = +r[0]), e + r[0].length) : -1;
}
function Q(n, t, e) {
  var r = M.exec(t.slice(e, e + 2));
  return r ? ((n.M = +r[0]), e + r[0].length) : -1;
}
function X(n, t, e) {
  var r = M.exec(t.slice(e, e + 2));
  return r ? ((n.S = +r[0]), e + r[0].length) : -1;
}
function O(n, t, e) {
  var r = M.exec(t.slice(e, e + 3));
  return r ? ((n.L = +r[0]), e + r[0].length) : -1;
}
function N(n, t, e) {
  var r = M.exec(t.slice(e, e + 6));
  return r ? ((n.L = Math.floor(r[0] / 1e3)), e + r[0].length) : -1;
}
function P(n, t, e) {
  var r = T.exec(t.slice(e, e + 1));
  return r ? e + r[0].length : -1;
}
function B(n, t, e) {
  var r = M.exec(t.slice(e));
  return r ? ((n.Q = +r[0]), e + r[0].length) : -1;
}
function G(n, t, e) {
  var r = M.exec(t.slice(e));
  return r ? ((n.s = +r[0]), e + r[0].length) : -1;
}
function $(n, t) {
  return x(n.getDate(), t, 2);
}
function z(n, t) {
  return x(n.getHours(), t, 2);
}
function E(n, t) {
  return x(n.getHours() % 12 || 12, t, 2);
}
function R(e, r) {
  return x(1 + n.count(t(e), e), r, 3);
}
function _(n, t) {
  return x(n.getMilliseconds(), t, 3);
}
function k(n, t) {
  return _(n, t) + "000";
}
function K(n, t) {
  return x(n.getMonth() + 1, t, 2);
}
function nn(n, t) {
  return x(n.getMinutes(), t, 2);
}
function tn(n, t) {
  return x(n.getSeconds(), t, 2);
}
function en(n) {
  var t = n.getDay();
  return 0 === t ? 7 : t;
}
function rn(n, r) {
  return x(e.count(t(n) - 1, n), r, 2);
}
function un(n) {
  var t = n.getDay();
  return t >= 4 || 0 === t ? r(n) : r.ceil(n);
}
function on(n, e) {
  return (n = un(n)), x(r.count(t(n), n) + (4 === t(n).getDay()), e, 2);
}
function cn(n) {
  return n.getDay();
}
function an(n, e) {
  return x(u.count(t(n) - 1, n), e, 2);
}
function fn(n, t) {
  return x(n.getFullYear() % 100, t, 2);
}
function ln(n, t) {
  return x((n = un(n)).getFullYear() % 100, t, 2);
}
function gn(n, t) {
  return x(n.getFullYear() % 1e4, t, 4);
}
function sn(n, t) {
  var e = n.getDay();
  return x(
    (n = e >= 4 || 0 === e ? r(n) : r.ceil(n)).getFullYear() % 1e4,
    t,
    4,
  );
}
function hn(n) {
  var t = n.getTimezoneOffset();
  return (
    (t > 0 ? "-" : ((t *= -1), "+")) +
    x((t / 60) | 0, "0", 2) +
    x(t % 60, "0", 2)
  );
}
function yn(n, t) {
  return x(n.getUTCDate(), t, 2);
}
function vn(n, t) {
  return x(n.getUTCHours(), t, 2);
}
function dn(n, t) {
  return x(n.getUTCHours() % 12 || 12, t, 2);
}
function mn(n, t) {
  return x(1 + i.count(o(n), n), t, 3);
}
function Dn(n, t) {
  return x(n.getUTCMilliseconds(), t, 3);
}
function Cn(n, t) {
  return Dn(n, t) + "000";
}
function Mn(n, t) {
  return x(n.getUTCMonth() + 1, t, 2);
}
function Tn(n, t) {
  return x(n.getUTCMinutes(), t, 2);
}
function Un(n, t) {
  return x(n.getUTCSeconds(), t, 2);
}
function xn(n) {
  var t = n.getUTCDay();
  return 0 === t ? 7 : t;
}
function wn(n, t) {
  return x(c.count(o(n) - 1, n), t, 2);
}
function pn(n) {
  var t = n.getUTCDay();
  return t >= 4 || 0 === t ? a(n) : a.ceil(n);
}
function Sn(n, t) {
  return (n = pn(n)), x(a.count(o(n), n) + (4 === o(n).getUTCDay()), t, 2);
}
function Fn(n) {
  return n.getUTCDay();
}
function Ln(n, t) {
  return x(f.count(o(n) - 1, n), t, 2);
}
function Hn(n, t) {
  return x(n.getUTCFullYear() % 100, t, 2);
}
function Yn(n, t) {
  return x((n = pn(n)).getUTCFullYear() % 100, t, 2);
}
function An(n, t) {
  return x(n.getUTCFullYear() % 1e4, t, 4);
}
function Zn(n, t) {
  var e = n.getUTCDay();
  return x(
    (n = e >= 4 || 0 === e ? a(n) : a.ceil(n)).getUTCFullYear() % 1e4,
    t,
    4,
  );
}
function Wn() {
  return "+0000";
}
function bn() {
  return "%";
}
function Vn(n) {
  return +n;
}
function jn(n) {
  return Math.floor(+n / 1e3);
}
function qn(n) {
  return (
    (y = h(n)),
    (v = y.format),
    (d = y.parse),
    (m = y.utcFormat),
    (D = y.utcParse),
    y
  );
}
qn({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
});
var In = "%Y-%m-%dT%H:%M:%S.%LZ";
var Jn = Date.prototype.toISOString
  ? function (n) {
      return n.toISOString();
    }
  : m(In);
var Qn = +new Date("2000-01-01T00:00:00.000Z")
  ? function (n) {
      var t = new Date(n);
      return isNaN(t) ? null : t;
    }
  : D(In);
export {
  Jn as isoFormat,
  Qn as isoParse,
  v as timeFormat,
  qn as timeFormatDefaultLocale,
  h as timeFormatLocale,
  d as timeParse,
  m as utcFormat,
  D as utcParse,
};
export default null;
