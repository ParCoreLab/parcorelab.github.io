var It = Object.defineProperty;
var r = (e, t) => It(e, "name", { value: t, configurable: !0 });
import { FileAttachments as Lt, Library as kt } from "./stdlib.js";
var Dt = Object.defineProperty,
  Ft = r((e, t) => Dt(e, "name", { value: t, configurable: !0 }), "c$6");
function A(e, t, n) {
  n = n || {};
  var i = e.ownerDocument,
    l = i.defaultView.CustomEvent;
  typeof l == "function"
    ? (l = new l(t, { detail: n }))
    : ((l = i.createEvent("Event")), l.initEvent(t, !1, !1), (l.detail = n)),
    e.dispatchEvent(l);
}
r(A, "o$7"), Ft(A, "dispatch");
var Rt = Object.defineProperty,
  he = r((e, t) => Rt(e, "name", { value: t, configurable: !0 }), "r$6");
function Q(e) {
  return (
    Array.isArray(e) ||
    e instanceof Int8Array ||
    e instanceof Int16Array ||
    e instanceof Int32Array ||
    e instanceof Uint8Array ||
    e instanceof Uint8ClampedArray ||
    e instanceof Uint16Array ||
    e instanceof Uint32Array ||
    e instanceof Float32Array ||
    e instanceof Float64Array
  );
}
r(Q, "isarray"), he(Q, "isarray");
function W(e) {
  return e === (e | 0) + "";
}
r(W, "isindex"), he(W, "isindex");
var Ut = Object.defineProperty,
  zt = r((e, t) => Ut(e, "name", { value: t, configurable: !0 }), "n$8");
function g(e) {
  const t = document.createElement("span");
  return (
    (t.className = "observablehq--cellname"), (t.textContent = `${e} = `), t
  );
}
r(g, "c$5"), zt(g, "inspectName");
var Bt = Object.defineProperty,
  Yt = r((e, t) => Bt(e, "name", { value: t, configurable: !0 }), "t$6");
const Vt = Symbol.prototype.toString;
function P(e) {
  return Vt.call(e);
}
r(P, "e$4"), Yt(P, "formatSymbol");
var Ht = Object.defineProperty,
  ee = r((e, t) => Ht(e, "name", { value: t, configurable: !0 }), "n$6");
const {
    getOwnPropertySymbols: Gt,
    prototype: { hasOwnProperty: Jt },
  } = Object,
  { toStringTag: Kt } = Symbol,
  _e = {},
  I = Gt;
function L(e, t) {
  return Jt.call(e, t);
}
r(L, "isown"), ee(L, "isown");
function B(e) {
  return e[Kt] || (e.constructor && e.constructor.name) || "Object";
}
r(B, "tagof"), ee(B, "tagof");
function _(e, t) {
  try {
    const n = e[t];
    return n && n.constructor, n;
  } catch {
    return _e;
  }
}
r(_, "valueof"), ee(_, "valueof");
var Xt = Object.defineProperty,
  Zt = r((e, t) => Xt(e, "name", { value: t, configurable: !0 }), "i$4");
const Qt = [
  { symbol: "@@__IMMUTABLE_INDEXED__@@", name: "Indexed", modifier: !0 },
  { symbol: "@@__IMMUTABLE_KEYED__@@", name: "Keyed", modifier: !0 },
  { symbol: "@@__IMMUTABLE_LIST__@@", name: "List", arrayish: !0 },
  { symbol: "@@__IMMUTABLE_MAP__@@", name: "Map" },
  {
    symbol: "@@__IMMUTABLE_ORDERED__@@",
    name: "Ordered",
    modifier: !0,
    prefix: !0,
  },
  { symbol: "@@__IMMUTABLE_RECORD__@@", name: "Record" },
  { symbol: "@@__IMMUTABLE_SET__@@", name: "Set", arrayish: !0, setish: !0 },
  { symbol: "@@__IMMUTABLE_STACK__@@", name: "Stack", arrayish: !0 },
];
function te(e) {
  try {
    let t = Qt.filter(({ symbol: a }) => e[a] === !0);
    if (!t.length) return;
    const n = t.find((a) => !a.modifier),
      i = n.name === "Map" && t.find((a) => a.modifier && a.prefix),
      l = t.some((a) => a.arrayish),
      o = t.some((a) => a.setish);
    return {
      name: `${i ? i.name : ""}${n.name}`,
      symbols: t,
      arrayish: l && !o,
      setish: o,
    };
  } catch {
    return null;
  }
}
r(te, "immutableName"), Zt(te, "immutableName");
var Wt = Object.defineProperty,
  b = r((e, t) => Wt(e, "name", { value: t, configurable: !0 }), "i$3");
const { getPrototypeOf: ne, getOwnPropertyDescriptors: en } = Object,
  be = ne({});
function re(e, t, n, i) {
  let l = Q(e),
    o,
    a,
    s,
    u;
  e instanceof Map
    ? e instanceof e.constructor
      ? ((o = `Map(${e.size})`), (a = ve))
      : ((o = "Map()"), (a = j))
    : e instanceof Set
    ? e instanceof e.constructor
      ? ((o = `Set(${e.size})`), (a = ye))
      : ((o = "Set()"), (a = j))
    : l
    ? ((o = `${e.constructor.name}(${e.length})`), (a = $e))
    : (u = te(e))
    ? ((o = `Immutable.${u.name}${u.name === "Record" ? "" : `(${e.size})`}`),
      (l = u.arrayish),
      (a = u.arrayish ? we : u.setish ? ge : Ee))
    : i
    ? ((o = B(e)), (a = Ce))
    : ((o = B(e)), (a = j));
  const c = document.createElement("span");
  (c.className = "observablehq--expanded"), n && c.appendChild(g(n));
  const p = c.appendChild(document.createElement("a"));
  (p.innerHTML = `<svg width=8 height=8 class='observablehq--caret'>
    <path d='M4 7L0 1h8z' fill='currentColor' />
  </svg>`),
    p.appendChild(document.createTextNode(`${o}${l ? " [" : " {"}`)),
    p.addEventListener("mouseup", function (d) {
      d.stopPropagation(), D(c, Y(e, null, n, i));
    }),
    (a = a(e));
  for (let d = 0; !(s = a.next()).done && d < 20; ++d) c.appendChild(s.value);
  if (!s.done) {
    const d = c.appendChild(document.createElement("a"));
    (d.className = "observablehq--field"),
      (d.style.display = "block"),
      d.appendChild(document.createTextNode("  \u2026 more")),
      d.addEventListener("mouseup", function (S) {
        S.stopPropagation(),
          c.insertBefore(s.value, c.lastChild.previousSibling);
        for (let O = 0; !(s = a.next()).done && O < 19; ++O)
          c.insertBefore(s.value, c.lastChild.previousSibling);
        s.done && c.removeChild(c.lastChild.previousSibling), A(c, "load");
      });
  }
  return c.appendChild(document.createTextNode(l ? "]" : "}")), c;
}
r(re, "F$2"), b(re, "inspectExpanded");
function* ve(e) {
  for (const [t, n] of e) yield xe(t, n);
  yield* j(e);
}
r(ve, "A$3"), b(ve, "iterateMap");
function* ye(e) {
  for (const t of e) yield ae(t);
  yield* j(e);
}
r(ye, "B$1"), b(ye, "iterateSet");
function* ge(e) {
  for (const t of e) yield ae(t);
}
r(ge, "D$3"), b(ge, "iterateImSet");
function* $e(e) {
  for (let t = 0, n = e.length; t < n; ++t)
    t in e && (yield $(t, _(e, t), "observablehq--index"));
  for (const t in e)
    !W(t) && L(e, t) && (yield $(t, _(e, t), "observablehq--key"));
  for (const t of I(e)) yield $(P(t), _(e, t), "observablehq--symbol");
}
r($e, "H$1"), b($e, "iterateArray");
function* we(e) {
  let t = 0;
  for (const n = e.size; t < n; ++t) yield $(t, e.get(t), !0);
}
r(we, "R$1"), b(we, "iterateImArray");
function* Ce(e) {
  for (const n in en(e)) yield $(n, _(e, n), "observablehq--key");
  for (const n of I(e)) yield $(P(n), _(e, n), "observablehq--symbol");
  const t = ne(e);
  t && t !== be && (yield ie(t));
}
r(Ce, "_"), b(Ce, "iterateProto");
function* j(e) {
  for (const n in e) L(e, n) && (yield $(n, _(e, n), "observablehq--key"));
  for (const n of I(e)) yield $(P(n), _(e, n), "observablehq--symbol");
  const t = ne(e);
  t && t !== be && (yield ie(t));
}
r(j, "h$4"), b(j, "iterateObject");
function* Ee(e) {
  for (const [t, n] of e) yield $(t, n, "observablehq--key");
}
r(Ee, "G$1"), b(Ee, "iterateImObject");
function ie(e) {
  const t = document.createElement("div"),
    n = t.appendChild(document.createElement("span"));
  return (
    (t.className = "observablehq--field"),
    (n.className = "observablehq--prototype-key"),
    (n.textContent = "  <prototype>"),
    t.appendChild(document.createTextNode(": ")),
    t.appendChild(h(e, void 0, void 0, void 0, !0)),
    t
  );
}
r(ie, "E$1"), b(ie, "formatPrototype");
function $(e, t, n) {
  const i = document.createElement("div"),
    l = i.appendChild(document.createElement("span"));
  return (
    (i.className = "observablehq--field"),
    (l.className = n),
    (l.textContent = `  ${e}`),
    i.appendChild(document.createTextNode(": ")),
    i.appendChild(h(t)),
    i
  );
}
r($, "s$1"), b($, "formatField");
function xe(e, t) {
  const n = document.createElement("div");
  return (
    (n.className = "observablehq--field"),
    n.appendChild(document.createTextNode("  ")),
    n.appendChild(h(e)),
    n.appendChild(document.createTextNode(" => ")),
    n.appendChild(h(t)),
    n
  );
}
r(xe, "J"), b(xe, "formatMapField");
function ae(e) {
  const t = document.createElement("div");
  return (
    (t.className = "observablehq--field"),
    t.appendChild(document.createTextNode("  ")),
    t.appendChild(h(e)),
    t
  );
}
r(ae, "k$1"), b(ae, "formatSetField");
var tn = Object.defineProperty,
  v = r((e, t) => tn(e, "name", { value: t, configurable: !0 }), "a$3");
function oe(e) {
  const t = window.getSelection();
  return (
    t.type === "Range" &&
    (t.containsNode(e, !0) ||
      t.anchorNode.isSelfOrDescendant(e) ||
      t.focusNode.isSelfOrDescendant(e))
  );
}
r(oe, "$$2"), v(oe, "hasSelection");
function Y(e, t, n, i) {
  let l = Q(e),
    o,
    a,
    s,
    u;
  if (
    (e instanceof Map
      ? e instanceof e.constructor
        ? ((o = `Map(${e.size})`), (a = Se))
        : ((o = "Map()"), (a = q))
      : e instanceof Set
      ? e instanceof e.constructor
        ? ((o = `Set(${e.size})`), (a = Ne))
        : ((o = "Set()"), (a = q))
      : l
      ? ((o = `${e.constructor.name}(${e.length})`), (a = je))
      : (u = te(e))
      ? ((o = `Immutable.${u.name}${u.name === "Record" ? "" : `(${e.size})`}`),
        (l = u.arrayish),
        (a = u.arrayish ? Pe : u.setish ? Oe : qe))
      : ((o = B(e)), (a = q)),
    t)
  ) {
    const d = document.createElement("span");
    return (
      (d.className = "observablehq--shallow"),
      n && d.appendChild(g(n)),
      d.appendChild(document.createTextNode(o)),
      d.addEventListener("mouseup", function (S) {
        oe(d) || (S.stopPropagation(), D(d, Y(e)));
      }),
      d
    );
  }
  const c = document.createElement("span");
  (c.className = "observablehq--collapsed"), n && c.appendChild(g(n));
  const p = c.appendChild(document.createElement("a"));
  (p.innerHTML = `<svg width=8 height=8 class='observablehq--caret'>
    <path d='M7 4L1 8V0z' fill='currentColor' />
  </svg>`),
    p.appendChild(document.createTextNode(`${o}${l ? " [" : " {"}`)),
    c.addEventListener(
      "mouseup",
      function (d) {
        oe(c) || (d.stopPropagation(), D(c, re(e, null, n, i)));
      },
      !0,
    ),
    (a = a(e));
  for (let d = 0; !(s = a.next()).done && d < 20; ++d)
    d > 0 && c.appendChild(document.createTextNode(", ")),
      c.appendChild(s.value);
  return (
    s.done || c.appendChild(document.createTextNode(", \u2026")),
    c.appendChild(document.createTextNode(l ? "]" : "}")),
    c
  );
}
r(Y, "q$1"), v(Y, "inspectCollapsed");
function* Se(e) {
  for (const [t, n] of e) yield Me(t, n);
  yield* q(e);
}
r(Se, "D$2"), v(Se, "iterateMap");
function* Ne(e) {
  for (const t of e) yield h(t, !0);
  yield* q(e);
}
r(Ne, "F$1"), v(Ne, "iterateSet");
function* Oe(e) {
  for (const t of e) yield h(t, !0);
}
r(Oe, "I$2"), v(Oe, "iterateImSet");
function* Pe(e) {
  let t = -1,
    n = 0;
  for (const i = e.size; n < i; ++n)
    n > t + 1 && (yield k(n - t - 1)), yield h(e.get(n), !0), (t = n);
  n > t + 1 && (yield k(n - t - 1));
}
r(Pe, "L$2"), v(Pe, "iterateImArray");
function* je(e) {
  let t = -1,
    n = 0;
  for (const i = e.length; n < i; ++n)
    n in e &&
      (n > t + 1 && (yield k(n - t - 1)), yield h(_(e, n), !0), (t = n));
  n > t + 1 && (yield k(n - t - 1));
  for (const i in e)
    !W(i) && L(e, i) && (yield M(i, _(e, i), "observablehq--key"));
  for (const i of I(e)) yield M(P(i), _(e, i), "observablehq--symbol");
}
r(je, "O$3"), v(je, "iterateArray");
function* q(e) {
  for (const t in e) L(e, t) && (yield M(t, _(e, t), "observablehq--key"));
  for (const t of I(e)) yield M(P(t), _(e, t), "observablehq--symbol");
}
r(q, "u$2"), v(q, "iterateObject");
function* qe(e) {
  for (const [t, n] of e) yield M(t, n, "observablehq--key");
}
r(qe, "A$2"), v(qe, "iterateImObject");
function k(e) {
  const t = document.createElement("span");
  return (
    (t.className = "observablehq--empty"),
    (t.textContent = e === 1 ? "empty" : `empty \xD7 ${e}`),
    t
  );
}
r(k, "h$3"), v(k, "formatEmpty");
function M(e, t, n) {
  const i = document.createDocumentFragment(),
    l = i.appendChild(document.createElement("span"));
  return (
    (l.className = n),
    (l.textContent = e),
    i.appendChild(document.createTextNode(": ")),
    i.appendChild(h(t, !0)),
    i
  );
}
r(M, "m$1"), v(M, "formatField");
function Me(e, t) {
  const n = document.createDocumentFragment();
  return (
    n.appendChild(h(e, !0)),
    n.appendChild(document.createTextNode(" => ")),
    n.appendChild(h(t, !0)),
    n
  );
}
r(Me, "P$1"), v(Me, "formatMapField");
var nn = Object.defineProperty,
  se = r((e, t) => nn(e, "name", { value: t, configurable: !0 }), "i$2");
function Te(e, t) {
  if ((e instanceof Date || (e = new Date(+e)), isNaN(e)))
    return typeof t == "function" ? t(e) : t;
  const n = e.getUTCHours(),
    i = e.getUTCMinutes(),
    l = e.getUTCSeconds(),
    o = e.getUTCMilliseconds();
  return `${Ae(e.getUTCFullYear())}-${w(e.getUTCMonth() + 1, 2)}-${w(
    e.getUTCDate(),
    2,
  )}${
    n || i || l || o
      ? `T${w(n, 2)}:${w(i, 2)}${
          l || o ? `:${w(l, 2)}${o ? `.${w(o, 3)}` : ""}` : ""
        }Z`
      : ""
  }`;
}
r(Te, "c$3"), se(Te, "format");
function Ae(e) {
  return e < 0 ? `-${w(-e, 6)}` : e > 9999 ? `+${w(e, 6)}` : w(e, 4);
}
r(Ae, "f$4"), se(Ae, "formatYear");
function w(e, t) {
  return `${e}`.padStart(t, "0");
}
r(w, "t$5"), se(w, "pad");
var rn = Object.defineProperty,
  an = r((e, t) => rn(e, "name", { value: t, configurable: !0 }), "r$4");
function Ie(e) {
  return Te(e, "Invalid Date");
}
r(Ie, "f$3"), an(Ie, "formatDate");
var on = Object.defineProperty,
  sn = r((e, t) => on(e, "name", { value: t, configurable: !0 }), "t$4"),
  ln = Error.prototype.toString;
function Le(e) {
  return e.stack || ln.call(e);
}
r(Le, "e$2"), sn(Le, "formatError");
var cn = Object.defineProperty,
  un = r((e, t) => cn(e, "name", { value: t, configurable: !0 }), "r$3"),
  dn = RegExp.prototype.toString;
function ke(e) {
  return dn.call(e);
}
r(ke, "g$2"), un(ke, "formatRegExp");
var fn = Object.defineProperty,
  V = r((e, t) => fn(e, "name", { value: t, configurable: !0 }), "s");
const le = 20;
function De(e, t, n, i) {
  if (t === !1) {
    if (ue(e, /["\n]/g) <= ue(e, /`|\${/g)) {
      const c = document.createElement("span");
      i && c.appendChild(g(i));
      const p = c.appendChild(document.createElement("span"));
      return (
        (p.className = "observablehq--string"),
        (p.textContent = JSON.stringify(e)),
        c
      );
    }
    const a = e.split(`
`);
    if (a.length > le && !n) {
      const c = document.createElement("div");
      i && c.appendChild(g(i));
      const p = c.appendChild(document.createElement("span"));
      (p.className = "observablehq--string"),
        (p.textContent =
          "`" +
          ce(
            a.slice(0, le).join(`
`),
          ));
      const d = c.appendChild(document.createElement("span")),
        S = a.length - le;
      return (
        (d.textContent = `Show ${S} truncated line${S > 1 ? "s" : ""}`),
        (d.className = "observablehq--string-expand"),
        d.addEventListener("mouseup", function (O) {
          O.stopPropagation(), D(c, h(e, t, !0, i));
        }),
        c
      );
    }
    const s = document.createElement("span");
    i && s.appendChild(g(i));
    const u = s.appendChild(document.createElement("span"));
    return (
      (u.className = `observablehq--string${
        n ? " observablehq--expanded" : ""
      }`),
      (u.textContent = "`" + ce(e) + "`"),
      s
    );
  }
  const l = document.createElement("span");
  i && l.appendChild(g(i));
  const o = l.appendChild(document.createElement("span"));
  return (
    (o.className = "observablehq--string"),
    (o.textContent = JSON.stringify(
      e.length > 100 ? `${e.slice(0, 50)}\u2026${e.slice(-49)}` : e,
    )),
    l
  );
}
r(De, "g$1"), V(De, "formatString");
function ce(e) {
  return e.replace(/[\\`\x00-\x09\x0b-\x19]|\${/g, Fe);
}
r(ce, "h$2"), V(ce, "templatify");
function Fe(e) {
  var t = e.charCodeAt(0);
  switch (t) {
    case 8:
      return "\\b";
    case 9:
      return "\\t";
    case 11:
      return "\\v";
    case 12:
      return "\\f";
    case 13:
      return "\\r";
  }
  return t < 16
    ? "\\x0" + t.toString(16)
    : t < 32
    ? "\\x" + t.toString(16)
    : "\\" + e;
}
r(Fe, "$$1"), V(Fe, "templatifyChar");
function ue(e, t) {
  for (var n = 0; t.exec(e); ) ++n;
  return n;
}
r(ue, "C$1"), V(ue, "count");
var pn = Object.defineProperty,
  Re = r((e, t) => pn(e, "name", { value: t, configurable: !0 }), "a$1"),
  mn = Function.prototype.toString,
  hn = { prefix: "async \u0192" },
  _n = { prefix: "async \u0192*" },
  Ue = { prefix: "class" },
  bn = { prefix: "\u0192" },
  vn = { prefix: "\u0192*" };
function ze(e, t) {
  var n,
    i,
    l = mn.call(e);
  switch (e.constructor && e.constructor.name) {
    case "AsyncFunction":
      n = hn;
      break;
    case "AsyncGeneratorFunction":
      n = _n;
      break;
    case "GeneratorFunction":
      n = vn;
      break;
    default:
      n = /^class\b/.test(l) ? Ue : bn;
      break;
  }
  return n === Ue
    ? T(n, "", t)
    : (i = /^(?:async\s*)?(\w+)\s*=>/.exec(l))
    ? T(n, "(" + i[1] + ")", t)
    : (i = /^(?:async\s*)?\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(l))
    ? T(n, i[1] ? "(" + i[1].replace(/\s*,\s*/g, ", ") + ")" : "()", t)
    : (i =
        /^(?:async\s*)?function(?:\s*\*)?(?:\s*\w+)?\s*\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(
          l,
        ))
    ? T(n, i[1] ? "(" + i[1].replace(/\s*,\s*/g, ", ") + ")" : "()", t)
    : T(n, "(\u2026)", t);
}
r(ze, "y$1"), Re(ze, "inspectFunction");
function T(e, t, n) {
  var i = document.createElement("span");
  (i.className = "observablehq--function"), n && i.appendChild(g(n));
  var l = i.appendChild(document.createElement("span"));
  return (
    (l.className = "observablehq--keyword"),
    (l.textContent = e.prefix),
    i.appendChild(document.createTextNode(t)),
    i
  );
}
r(T, "c$2"), Re(T, "formatFunction");
var yn = Object.defineProperty,
  Be = r((e, t) => yn(e, "name", { value: t, configurable: !0 }), "c$1");
const {
  prototype: { toString: gn },
} = Object;
function h(e, t, n, i, l) {
  let o = typeof e;
  switch (o) {
    case "boolean":
    case "undefined": {
      e += "";
      break;
    }
    case "number": {
      e = e === 0 && 1 / e < 0 ? "-0" : e + "";
      break;
    }
    case "bigint": {
      e = e + "n";
      break;
    }
    case "symbol": {
      e = P(e);
      break;
    }
    case "function":
      return ze(e, i);
    case "string":
      return De(e, t, n, i);
    default: {
      if (e === null) {
        (o = null), (e = "null");
        break;
      }
      if (e instanceof Date) {
        (o = "date"), (e = Ie(e));
        break;
      }
      if (e === _e) {
        (o = "forbidden"), (e = "[forbidden]");
        break;
      }
      switch (gn.call(e)) {
        case "[object RegExp]": {
          (o = "regexp"), (e = ke(e));
          break;
        }
        case "[object Error]":
        case "[object DOMException]": {
          (o = "error"), (e = Le(e));
          break;
        }
        default:
          return (n ? re : Y)(e, t, i, l);
      }
      break;
    }
  }
  const a = document.createElement("span");
  i && a.appendChild(g(i));
  const s = a.appendChild(document.createElement("span"));
  return (s.className = `observablehq--${o}`), (s.textContent = e), a;
}
r(h, "inspect"), Be(h, "inspect");
function D(e, t) {
  e.classList.contains("observablehq--inspect") &&
    t.classList.add("observablehq--inspect"),
    e.parentNode.replaceChild(t, e),
    A(t, "load");
}
r(D, "replace"), Be(D, "replace");
var $n = Object.defineProperty,
  Ye = r((e, t) => $n(e, "name", { value: t, configurable: !0 }), "n$3");
const wn = /\s+\(\d+:\d+\)$/m;
class de {
  static {
    r(this, "Inspector");
  }
  static {
    Ye(this, "Inspector");
  }
  constructor(t) {
    if (!t) throw new Error("invalid node");
    (this._node = t), t.classList.add("observablehq");
  }
  pending() {
    const { _node: t } = this;
    t.classList.remove("observablehq--error"),
      t.classList.add("observablehq--running");
  }
  fulfilled(t, n) {
    const { _node: i } = this;
    if (
      ((!Ve(t) || (t.parentNode && t.parentNode !== i)) &&
        ((t = h(
          t,
          !1,
          i.firstChild &&
            i.firstChild.classList &&
            i.firstChild.classList.contains("observablehq--expanded"),
          n,
        )),
        t.classList.add("observablehq--inspect")),
      i.classList.remove("observablehq--running", "observablehq--error"),
      i.firstChild !== t)
    )
      if (i.firstChild) {
        for (; i.lastChild !== i.firstChild; ) i.removeChild(i.lastChild);
        i.replaceChild(t, i.firstChild);
      } else i.appendChild(t);
    A(i, "update");
  }
  rejected(t, n) {
    const { _node: i } = this;
    for (
      i.classList.remove("observablehq--running"),
        i.classList.add("observablehq--error");
      i.lastChild;

    )
      i.removeChild(i.lastChild);
    var l = document.createElement("div");
    (l.className = "observablehq--inspect"),
      n && l.appendChild(g(n)),
      l.appendChild(document.createTextNode((t + "").replace(wn, ""))),
      i.appendChild(l),
      A(i, "error", { error: t });
  }
}
de.into = function (e) {
  if (typeof e == "string" && ((e = document.querySelector(e)), e == null))
    throw new Error("container not found");
  return function () {
    return new de(e.appendChild(document.createElement("div")));
  };
};
function Ve(e) {
  return (
    (e instanceof Element || e instanceof Text) && e instanceof e.constructor
  );
}
r(Ve, "h$1"), Ye(Ve, "isnode");
var Cn = Object.defineProperty,
  En = r((e, t) => Cn(e, "name", { value: t, configurable: !0 }), "e$1");
class C extends Error {
  static {
    r(this, "RuntimeError");
  }
  static {
    En(this, "RuntimeError");
  }
  constructor(t, n) {
    super(t), (this.input = n);
  }
}
C.prototype.name = "RuntimeError";
var xn = Object.defineProperty,
  Sn = r((e, t) => xn(e, "name", { value: t, configurable: !0 }), "t$3");
function He(e) {
  return e && typeof e.next == "function" && typeof e.return == "function";
}
r(He, "generatorish"), Sn(He, "generatorish");
var Nn = Object.defineProperty,
  On = r((e, t) => Nn(e, "name", { value: t, configurable: !0 }), "t$2");
function H(e) {
  return () => e;
}
r(H, "constant"), On(H, "constant");
var Pn = Object.defineProperty,
  jn = r((e, t) => Pn(e, "name", { value: t, configurable: !0 }), "n$1");
function F(e) {
  return e;
}
r(F, "identity"), jn(F, "identity");
var qn = Object.defineProperty,
  Mn = r((e, t) => qn(e, "name", { value: t, configurable: !0 }), "t$1");
function Ge(e) {
  return () => {
    throw e;
  };
}
r(Ge, "rethrow"), Mn(Ge, "rethrow");
const Tn = Array.prototype,
  An = Tn.map;
var In = Object.defineProperty,
  Ln = r((e, t) => In(e, "name", { value: t, configurable: !0 }), "o$1");
function E() {}
r(E, "noop"), Ln(E, "noop");
var kn = Object.defineProperty,
  m = r((e, t) => kn(e, "name", { value: t, configurable: !0 }), "r");
const fe = 1,
  R = 2,
  G = 3,
  U = Symbol("no-observer");
function N(e, t, n, i) {
  n || (n = U),
    Object.defineProperties(this, {
      _observer: { value: n, writable: !0 },
      _definition: { value: J, writable: !0 },
      _duplicate: { value: void 0, writable: !0 },
      _duplicates: { value: void 0, writable: !0 },
      _indegree: { value: NaN, writable: !0 },
      _inputs: { value: [], writable: !0 },
      _invalidate: { value: E, writable: !0 },
      _module: { value: t },
      _name: { value: null, writable: !0 },
      _outputs: { value: new Set(), writable: !0 },
      _promise: { value: Promise.resolve(void 0), writable: !0 },
      _reachable: { value: n !== U, writable: !0 },
      _rejector: { value: Ze(this) },
      _shadow: { value: Je(t, i) },
      _type: { value: e },
      _value: { value: void 0, writable: !0 },
      _version: { value: 0, writable: !0 },
    });
}
r(N, "Variable"),
  m(N, "Variable"),
  Object.defineProperties(N.prototype, {
    _pending: { value: nt, writable: !0, configurable: !0 },
    _fulfilled: { value: rt, writable: !0, configurable: !0 },
    _rejected: { value: it, writable: !0, configurable: !0 },
    _resolve: { value: We, writable: !0, configurable: !0 },
    define: { value: Qe, writable: !0, configurable: !0 },
    delete: { value: tt, writable: !0, configurable: !0 },
    import: { value: et, writable: !0, configurable: !0 },
  });
function Je(e, t) {
  return t?.shadow
    ? new Map(
        Object.entries(t.shadow).map(([n, i]) => [
          n,
          new N(R, e).define([], i),
        ]),
      )
    : null;
}
r(Je, "w$1"), m(Je, "initShadow");
function Ke(e) {
  e._module._runtime._dirty.add(e), e._outputs.add(this);
}
r(Ke, "m"), m(Ke, "variable_attach");
function Xe(e) {
  e._module._runtime._dirty.add(e), e._outputs.delete(this);
}
r(Xe, "g"), m(Xe, "variable_detach");
function J() {
  throw J;
}
r(J, "d$1"), m(J, "variable_undefined");
function x() {
  throw x;
}
r(x, "variable_stale"), m(x, "variable_stale");
function Ze(e) {
  return (t) => {
    throw t === x
      ? t
      : t === J
      ? new C(`${e._name} is not defined`, e._name)
      : t instanceof Error && t.message
      ? new C(t.message, e._name)
      : new C(`${e._name} could not be resolved`, e._name);
  };
}
r(Ze, "y"), m(Ze, "variable_rejector");
function pe(e) {
  return () => {
    throw new C(`${e} is defined more than once`);
  };
}
r(pe, "f"), m(pe, "variable_duplicate");
function Qe(e, t, n) {
  switch (arguments.length) {
    case 1: {
      (n = e), (e = t = null);
      break;
    }
    case 2: {
      (n = t), typeof e == "string" ? (t = null) : ((t = e), (e = null));
      break;
    }
  }
  return K.call(
    this,
    e == null ? null : String(e),
    t == null ? [] : An.call(t, this._resolve, this),
    typeof n == "function" ? n : H(n),
  );
}
r(Qe, "E"), m(Qe, "variable_define");
function We(e) {
  return this._shadow?.get(e) ?? this._module._resolve(e);
}
r(We, "x$2"), m(We, "variable_resolve");
function K(e, t, n) {
  const i = this._module._scope,
    l = this._module._runtime;
  if (
    (this._inputs.forEach(Xe, this),
    t.forEach(Ke, this),
    (this._inputs = t),
    (this._definition = n),
    (this._value = void 0),
    n === E ? l._variables.delete(this) : l._variables.add(this),
    e !== this._name || i.get(e) !== this)
  ) {
    let o, a;
    if (this._name)
      if (this._outputs.size)
        i.delete(this._name),
          (a = this._module._resolve(this._name)),
          (a._outputs = this._outputs),
          (this._outputs = new Set()),
          a._outputs.forEach(function (s) {
            s._inputs[s._inputs.indexOf(this)] = a;
          }, this),
          a._outputs.forEach(l._updates.add, l._updates),
          l._dirty.add(a).add(this),
          i.set(this._name, a);
      else if ((a = i.get(this._name)) === this) i.delete(this._name);
      else if (a._type === G)
        a._duplicates.delete(this),
          (this._duplicate = void 0),
          a._duplicates.size === 1 &&
            ((a = a._duplicates.keys().next().value),
            (o = i.get(this._name)),
            (a._outputs = o._outputs),
            (o._outputs = new Set()),
            a._outputs.forEach(function (s) {
              s._inputs[s._inputs.indexOf(o)] = a;
            }),
            (a._definition = a._duplicate),
            (a._duplicate = void 0),
            l._dirty.add(o).add(a),
            l._updates.add(a),
            i.set(this._name, a));
      else throw new Error();
    if (this._outputs.size) throw new Error();
    e &&
      ((a = i.get(e))
        ? a._type === G
          ? ((this._definition = pe(e)),
            (this._duplicate = n),
            a._duplicates.add(this))
          : a._type === R
          ? ((this._outputs = a._outputs),
            (a._outputs = new Set()),
            this._outputs.forEach(function (s) {
              s._inputs[s._inputs.indexOf(a)] = this;
            }, this),
            l._dirty.add(a).add(this),
            i.set(e, this))
          : ((a._duplicate = a._definition),
            (this._duplicate = n),
            (o = new N(G, this._module)),
            (o._name = e),
            (o._definition = this._definition = a._definition = pe(e)),
            (o._outputs = a._outputs),
            (a._outputs = new Set()),
            o._outputs.forEach(function (s) {
              s._inputs[s._inputs.indexOf(a)] = o;
            }),
            (o._duplicates = new Set([this, a])),
            l._dirty.add(a).add(o),
            l._updates.add(a).add(o),
            i.set(e, o))
        : i.set(e, this)),
      (this._name = e);
  }
  return (
    this._version > 0 && ++this._version,
    l._updates.add(this),
    l._compute(),
    this
  );
}
r(K, "h"), m(K, "variable_defineImpl");
function et(e, t, n) {
  return (
    arguments.length < 3 && ((n = t), (t = e)),
    K.call(this, String(t), [n._resolve(String(e))], F)
  );
}
r(et, "S$1"), m(et, "variable_import");
function tt() {
  return K.call(this, null, [], E);
}
r(tt, "j$1"), m(tt, "variable_delete");
function nt() {
  this._observer.pending && this._observer.pending();
}
r(nt, "O$2"), m(nt, "variable_pending");
function rt(e) {
  this._observer.fulfilled && this._observer.fulfilled(e, this._name);
}
r(rt, "P"), m(rt, "variable_fulfilled");
function it(e) {
  this._observer.rejected && this._observer.rejected(e, this._name);
}
r(it, "I$1"), m(it, "variable_rejected");
var Dn = Object.defineProperty,
  y = r((e, t) => Dn(e, "name", { value: t, configurable: !0 }), "n");
const at = Symbol("variable"),
  ot = Symbol("invalidation"),
  st = Symbol("visibility");
function z(e, t = []) {
  Object.defineProperties(this, {
    _runtime: { value: e },
    _scope: { value: new Map() },
    _builtins: {
      value: new Map([
        ["@variable", at],
        ["invalidation", ot],
        ["visibility", st],
        ...t,
      ]),
    },
    _source: { value: null, writable: !0 },
  });
}
r(z, "Module"),
  y(z, "Module"),
  Object.defineProperties(z.prototype, {
    _resolve: { value: mt, writable: !0, configurable: !0 },
    redefine: { value: lt, writable: !0, configurable: !0 },
    define: { value: ct, writable: !0, configurable: !0 },
    derive: { value: pt, writable: !0, configurable: !0 },
    import: { value: ut, writable: !0, configurable: !0 },
    value: { value: ft, writable: !0, configurable: !0 },
    variable: { value: dt, writable: !0, configurable: !0 },
    builtin: { value: ht, writable: !0, configurable: !0 },
  });
function lt(e) {
  const t = this._scope.get(e);
  if (!t) throw new C(`${e} is not defined`);
  if (t._type === G) throw new C(`${e} is defined more than once`);
  return t.define.apply(t, arguments);
}
r(lt, "j"), y(lt, "module_redefine");
function ct() {
  const e = new N(fe, this);
  return e.define.apply(e, arguments);
}
r(ct, "x$1"), y(ct, "module_define");
function ut() {
  const e = new N(fe, this);
  return e.import.apply(e, arguments);
}
r(ut, "S"), y(ut, "module_import");
function dt(e, t) {
  return new N(fe, this, e, t);
}
r(dt, "L$1"), y(dt, "module_variable");
async function ft(e) {
  let t = this._scope.get(e);
  if (!t) throw new C(`${e} is not defined`);
  if (t._observer === U) {
    t = this.variable(!0).define([e], F);
    try {
      return await X(this._runtime, t);
    } finally {
      t.delete();
    }
  } else return X(this._runtime, t);
}
r(ft, "O$1"), y(ft, "module_value");
async function X(e, t) {
  await e._compute();
  try {
    return await t._promise;
  } catch (n) {
    if (n === x) return X(e, t);
    throw n;
  }
}
r(X, "p"), y(X, "module_revalue");
function pt(e, t) {
  const n = new Map(),
    i = new Set(),
    l = [];
  function o(s) {
    let u = n.get(s);
    return (
      u ||
      ((u = new z(s._runtime, s._builtins)),
      (u._source = s),
      n.set(s, u),
      l.push([u, s]),
      i.add(s),
      u)
    );
  }
  r(o, "v"), y(o, "alias");
  const a = o(this);
  for (const s of e) {
    const { alias: u, name: c } = typeof s == "object" ? s : { name: s };
    a.import(c, u ?? c, t);
  }
  for (const s of i)
    for (const [u, c] of s._scope)
      if (c._definition === F) {
        if (s === this && a._scope.has(u)) continue;
        const p = c._inputs[0]._module;
        p._source && o(p);
      }
  for (const [s, u] of l)
    for (const [c, p] of u._scope) {
      const d = s._scope.get(c);
      if (!(d && d._type !== R))
        if (p._definition === F) {
          const S = p._inputs[0],
            O = S._module;
          s.import(S._name, c, n.get(O) || O);
        } else s.define(c, p._inputs.map(_t), p._definition);
    }
  return a;
}
r(pt, "V$1"), y(pt, "module_derive");
function mt(e) {
  let t = this._scope.get(e),
    n;
  if (!t)
    if (((t = new N(R, this)), this._builtins.has(e)))
      t.define(e, H(this._builtins.get(e)));
    else if (this._runtime._builtin._scope.has(e))
      t.import(e, this._runtime._builtin);
    else {
      try {
        n = this._runtime._global(e);
      } catch (i) {
        return t.define(e, Ge(i));
      }
      n === void 0 ? this._scope.set((t._name = e), t) : t.define(e, H(n));
    }
  return t;
}
r(mt, "Y$1"), y(mt, "module_resolve");
function ht(e, t) {
  this._builtins.set(e, t);
}
r(ht, "$"), y(ht, "module_builtin");
function _t(e) {
  return e._name;
}
r(_t, "A$1"), y(_t, "variable_name");
var Fn = Object.defineProperty,
  f = r((e, t) => Fn(e, "name", { value: t, configurable: !0 }), "o");
const Rn =
  typeof requestAnimationFrame == "function"
    ? requestAnimationFrame
    : typeof setImmediate == "function"
    ? setImmediate
    : (e) => setTimeout(e, 0);
function me(e = new kt(), t = At) {
  const n = this.module();
  if (
    (Object.defineProperties(this, {
      _dirty: { value: new Set() },
      _updates: { value: new Set() },
      _precomputes: { value: [], writable: !0 },
      _computing: { value: null, writable: !0 },
      _init: { value: null, writable: !0 },
      _modules: { value: new Map() },
      _variables: { value: new Set() },
      _disposed: { value: !1, writable: !0 },
      _builtin: { value: n },
      _global: { value: t },
    }),
    e)
  )
    for (const i in e) new N(R, n).define(i, [], e[i]);
}
r(me, "Runtime"),
  f(me, "Runtime"),
  Object.defineProperties(me.prototype, {
    _precompute: { value: yt, writable: !0, configurable: !0 },
    _compute: { value: gt, writable: !0, configurable: !0 },
    _computeSoon: { value: $t, writable: !0, configurable: !0 },
    _computeNow: { value: wt, writable: !0, configurable: !0 },
    dispose: { value: bt, writable: !0, configurable: !0 },
    module: { value: vt, writable: !0, configurable: !0 },
    fileAttachments: { value: Lt, writable: !0, configurable: !0 },
  });
function bt() {
  (this._computing = Promise.resolve()),
    (this._disposed = !0),
    this._variables.forEach((e) => {
      e._invalidate(), (e._version = NaN);
    });
}
r(bt, "k"), f(bt, "runtime_dispose");
function vt(e, t = E) {
  let n;
  if (e === void 0)
    return (n = this._init) ? ((this._init = null), n) : new z(this);
  if (((n = this._modules.get(e)), n)) return n;
  (this._init = n = new z(this)), this._modules.set(e, n);
  try {
    e(this, t);
  } finally {
    this._init = null;
  }
  return n;
}
r(vt, "q"), f(vt, "runtime_module");
function yt(e) {
  this._precomputes.push(e), this._compute();
}
r(yt, "A"), f(yt, "runtime_precompute");
function gt() {
  return this._computing || (this._computing = this._computeSoon());
}
r(gt, "O"), f(gt, "runtime_compute");
function $t() {
  return new Promise(Rn).then(() =>
    this._disposed ? void 0 : this._computeNow(),
  );
}
r($t, "T"), f($t, "runtime_computeSoon");
async function wt() {
  let e = [],
    t,
    n,
    i = this._precomputes;
  if (i.length) {
    this._precomputes = [];
    for (const o of i) o();
    await Ct(3);
  }
  (t = new Set(this._dirty)),
    t.forEach(function (o) {
      o._inputs.forEach(t.add, t);
      const a = Tt(o);
      a > o._reachable
        ? this._updates.add(o)
        : a < o._reachable && o._invalidate(),
        (o._reachable = a);
    }, this),
    (t = new Set(this._updates)),
    t.forEach(function (o) {
      o._reachable
        ? ((o._indegree = 0), o._outputs.forEach(t.add, t))
        : ((o._indegree = NaN), t.delete(o));
    }),
    (this._computing = null),
    this._updates.clear(),
    this._dirty.clear(),
    t.forEach(function (o) {
      o._outputs.forEach(xt);
    });
  do {
    for (
      t.forEach(function (o) {
        o._indegree === 0 && e.push(o);
      });
      (n = e.pop());

    )
      Pt(n), n._outputs.forEach(l), t.delete(n);
    t.forEach(function (o) {
      Et(o) &&
        (qt(o, new C("circular definition")),
        o._outputs.forEach(St),
        t.delete(o));
    });
  } while (t.size);
  function l(o) {
    --o._indegree === 0 && e.push(o);
  }
  r(l, "f"), f(l, "postqueue");
}
r(wt, "F"), f(wt, "runtime_computeNow");
function Ct(e = 0) {
  let t = Promise.resolve();
  for (let n = 0; n < e; ++n) t = t.then(() => {});
  return t;
}
r(Ct, "M"), f(Ct, "runtime_defer");
function Et(e) {
  const t = new Set(e._inputs);
  for (const n of t) {
    if (n === e) return !0;
    n._inputs.forEach(t.add, t);
  }
  return !1;
}
r(Et, "x"), f(Et, "variable_circular");
function xt(e) {
  ++e._indegree;
}
r(xt, "L"), f(xt, "variable_increment");
function St(e) {
  --e._indegree;
}
r(St, "R"), f(St, "variable_decrement");
function Nt(e) {
  return e._promise.catch(e._rejector);
}
r(Nt, "V"), f(Nt, "variable_value");
function Z(e) {
  return new Promise(function (t) {
    e._invalidate = t;
  });
}
r(Z, "d"), f(Z, "variable_invalidator");
function Ot(e, t) {
  let n =
      typeof IntersectionObserver == "function" &&
      t._observer &&
      t._observer._node,
    i = !n,
    l = E,
    o = E,
    a,
    s;
  return (
    n &&
      ((s = new IntersectionObserver(
        ([u]) => (i = u.isIntersecting) && ((a = null), l()),
      )),
      s.observe(n),
      e.then(() => (s.disconnect(), (s = null), o()))),
    function (u) {
      return i
        ? Promise.resolve(u)
        : s
        ? (a || (a = new Promise((c, p) => ((l = c), (o = p)))),
          a.then(() => u))
        : Promise.reject();
    }
  );
}
r(Ot, "z"), f(Ot, "variable_intersector");
function Pt(e) {
  e._invalidate(), (e._invalidate = E), e._pending();
  const t = e._value,
    n = ++e._version;
  let i = null;
  const l = (e._promise = (
    e._inputs.length
      ? Promise.all(e._inputs.map(Nt)).then(o)
      : new Promise((s) => s(e._definition.call(t)))
  ).then(a));
  function o(s) {
    if (e._version !== n) throw x;
    for (let u = 0, c = s.length; u < c; ++u)
      switch (s[u]) {
        case ot: {
          s[u] = i = Z(e);
          break;
        }
        case st: {
          i || (i = Z(e)), (s[u] = Ot(i, e));
          break;
        }
        case at: {
          s[u] = e;
          break;
        }
      }
    return e._definition.apply(t, s);
  }
  r(o, "r"), f(o, "define");
  function a(s) {
    if (e._version !== n) throw x;
    return He(s) ? ((i || Z(e)).then(Mt(s)), jt(e, n, s)) : s;
  }
  r(a, "_"),
    f(a, "generate"),
    l.then(
      (s) => {
        (e._value = s), e._fulfilled(s);
      },
      (s) => {
        s === x || e._version !== n || ((e._value = void 0), e._rejected(s));
      },
    );
}
r(Pt, "C"), f(Pt, "variable_compute");
function jt(e, t, n) {
  const i = e._module._runtime;
  let l;
  function o(u) {
    return new Promise((c) => c(n.next(l))).then(({ done: c, value: p }) =>
      c ? void 0 : Promise.resolve(p).then(u),
    );
  }
  r(o, "r"), f(o, "compute");
  function a() {
    const u = o((c) => {
      if (e._version !== t) throw x;
      return (l = c), s(c, u).then(() => i._precompute(a)), e._fulfilled(c), c;
    });
    u.catch((c) => {
      c === x || e._version !== t || (s(void 0, u), e._rejected(c));
    });
  }
  r(a, "_"), f(a, "recompute");
  function s(u, c) {
    return (
      (e._value = u),
      (e._promise = c),
      e._outputs.forEach(i._updates.add, i._updates),
      i._compute()
    );
  }
  return (
    r(s, "i"),
    f(s, "postcompute"),
    o((u) => {
      if (e._version !== t) throw x;
      return (l = u), i._precompute(a), u;
    })
  );
}
r(jt, "Y"), f(jt, "variable_generate");
function qt(e, t) {
  e._invalidate(),
    (e._invalidate = E),
    e._pending(),
    ++e._version,
    (e._indegree = NaN),
    (e._promise = Promise.reject(t)).catch(E),
    (e._value = void 0),
    e._rejected(t);
}
r(qt, "B"), f(qt, "variable_error");
function Mt(e) {
  return function () {
    e.return();
  };
}
r(Mt, "D"), f(Mt, "variable_return");
function Tt(e) {
  if (e._observer !== U) return !0;
  const t = new Set(e._outputs);
  for (const n of t) {
    if (n._observer !== U) return !0;
    n._outputs.forEach(t.add, t);
  }
  return !1;
}
r(Tt, "G"), f(Tt, "variable_reachable");
function At(e) {
  return globalThis[e];
}
r(At, "H"), f(At, "window_global");
export { de as Inspector, me as Runtime, C as RuntimeError };
