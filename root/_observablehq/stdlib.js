var z = Object.defineProperty;
var a = (t, e) => z(t, "name", { value: e, configurable: !0 });
var E = Object.defineProperty,
  c = a((t, e) => E(t, "name", { value: e, configurable: !0 }), "o$2");
const p = new Map();
function b(t, e) {
  const r = new URL(t, location).href;
  e == null ? p.delete(r) : p.set(r, e);
}
a(b, "p$1"), c(b, "registerFile");
function h(t, e = location.href) {
  if (new.target !== void 0)
    throw new TypeError("FileAttachment is not a constructor");
  const r = new URL(t, e).href,
    n = p.get(r);
  if (!n) throw new Error(`File not found: ${t}`);
  const { path: i, mimeType: o } = n;
  return new d(new URL(i, location).href, t.split("/").pop(), o);
}
a(h, "u$1"), c(h, "FileAttachment");
async function s(t) {
  const e = await fetch(await t.url());
  if (!e.ok) throw new Error(`Unable to load file: ${t.name}`);
  return e;
}
a(s, "i$5"), c(s, "remote_fetch");
async function m(t, e, { array: r = !1, typed: n = !1 } = {}) {
  const [i, o] = await Promise.all([
    t.text(),
    import("../_npm/d3-dsv@3.0.1/+esm.js"),
  ]);
  return (
    e === "	"
      ? r
        ? o.tsvParseRows
        : o.tsvParse
      : r
      ? o.csvParseRows
      : o.csvParse
  )(i, n && o.autoType);
}
a(m, "f$3"), c(m, "dsv");
class w {
  static {
    a(this, "m");
  }
  static {
    c(this, "AbstractFile");
  }
  constructor(e, r = "application/octet-stream") {
    Object.defineProperty(this, "name", { value: `${e}`, enumerable: !0 }),
      Object.defineProperty(this, "mimeType", {
        value: `${r}`,
        enumerable: !0,
      });
  }
  async blob() {
    return (await s(this)).blob();
  }
  async arrayBuffer() {
    return (await s(this)).arrayBuffer();
  }
  async text(e) {
    return e === void 0
      ? (await s(this)).text()
      : new TextDecoder(e).decode(await this.arrayBuffer());
  }
  async json() {
    return (await s(this)).json();
  }
  async stream() {
    return (await s(this)).body;
  }
  async csv(e) {
    return m(this, ",", e);
  }
  async tsv(e) {
    return m(this, "	", e);
  }
  async image(e) {
    const r = await this.url();
    return new Promise((n, i) => {
      const o = new Image();
      new URL(r, document.baseURI).origin !== new URL(location).origin &&
        (o.crossOrigin = "anonymous"),
        Object.assign(o, e),
        (o.onload = () => n(o)),
        (o.onerror = () => i(new Error(`Unable to load file: ${this.name}`))),
        (o.src = r);
    });
  }
  async arrow() {
    const [e, r] = await Promise.all([
      import("../_npm/apache-arrow@13.0.0/+esm.js"),
      s(this),
    ]);
    return e.tableFromIPC(r);
  }
  async parquet() {
    const [e, r, n] = await Promise.all([
      import("../_npm/apache-arrow@13.0.0/+esm.js"),
      import("../_npm/parquet-wasm@0.5.0/esm/arrow1.js").then(
        async (i) => (await i.default(), i),
      ),
      this.arrayBuffer(),
    ]);
    return e.tableFromIPC(r.readParquet(new Uint8Array(n)).intoIPCStream());
  }
  async sqlite() {
    const [{ SQLiteDatabaseClient: e }, r] = await Promise.all([
      import("./stdlib/sqlite.js"),
      this.arrayBuffer(),
    ]);
    return e.open(r);
  }
  async zip() {
    const [{ ZipArchive: e }, r] = await Promise.all([
      import("./stdlib/zip.js"),
      this.arrayBuffer(),
    ]);
    return e.from(r);
  }
  async xml(e = "application/xml") {
    return new DOMParser().parseFromString(await this.text(), e);
  }
  async html() {
    return this.xml("text/html");
  }
  async xlsx() {
    const [{ Workbook: e }, r] = await Promise.all([
      import("./stdlib/xlsx.js"),
      this.arrayBuffer(),
    ]);
    return e.load(r);
  }
}
let d = class extends w {
  static {
    a(this, "l");
  }
  static {
    c(this, "FileAttachmentImpl");
  }
  constructor(e, r, n) {
    super(r, n), Object.defineProperty(this, "_url", { value: e });
  }
  async url() {
    return `${await this._url}`;
  }
};
Object.defineProperty(d, "name", { value: "FileAttachment" }),
  (h.prototype = d.prototype);
var L = Object.defineProperty,
  U = a((t, e) => L(t, "name", { value: e, configurable: !0 }), "r$3");
async function* l(t) {
  let e,
    r,
    n = !1;
  const i = t((o) => ((r = o), e ? (e(o), (e = null)) : (n = !0), o));
  if (i != null && typeof i != "function")
    throw new Error(
      typeof i.then == "function"
        ? "async initializers are not supported"
        : "initializer returned something, but not a dispose function",
    );
  try {
    for (;;) yield n ? ((n = !1), r) : new Promise((o) => (e = o));
  } finally {
    i?.();
  }
}
a(l, "u"), U(l, "observe");
var k = Object.defineProperty,
  f = a((t, e) => k(t, "name", { value: e, configurable: !0 }), "e$1");
function P(t) {
  return l((e) => {
    const r = g(t);
    let n = v(t);
    const i = f(() => e(v(t)), "inputted");
    return (
      t.addEventListener(r, i),
      n !== void 0 && e(n),
      () => t.removeEventListener(r, i)
    );
  });
}
a(P, "o$1"), f(P, "input");
function v(t) {
  switch (t.type) {
    case "range":
    case "number":
      return t.valueAsNumber;
    case "date":
      return t.valueAsDate;
    case "checkbox":
      return t.checked;
    case "file":
      return t.multiple ? t.files : t.files[0];
    case "select-multiple":
      return Array.from(t.selectedOptions, (e) => e.value);
    default:
      return t.value;
  }
}
a(v, "a"), f(v, "valueof");
function g(t) {
  switch (t.type) {
    case "button":
    case "submit":
    case "checkbox":
      return "click";
    case "file":
      return "change";
    default:
      return "input";
  }
}
a(g, "f$2"), f(g, "eventof");
var B = Object.defineProperty,
  _ = a((t, e) => B(t, "name", { value: e, configurable: !0 }), "e");
async function* $() {
  for (;;) yield Date.now();
}
a($, "i$3"), _($, "now");
var C = Object.defineProperty,
  I = a((t, e) => C(t, "name", { value: e, configurable: !0 }), "r$2");
async function* O(t) {
  let e;
  const r = [],
    n = t((i) => (r.push(i), e && (e(r.shift()), (e = null)), i));
  if (n != null && typeof n != "function")
    throw new Error(
      typeof n.then == "function"
        ? "async initializers are not supported"
        : "initializer returned something, but not a dispose function",
    );
  try {
    for (;;) yield r.length ? r.shift() : new Promise((i) => (e = i));
  } finally {
    n?.();
  }
}
a(O, "l"), I(O, "queue");
var T = Object.defineProperty,
  q = a((t, e) => T(t, "name", { value: e, configurable: !0 }), "i$2");
function j(t, e) {
  return l((r) => {
    let n;
    const i = new ResizeObserver(([o]) => {
      const u = o.contentRect.width;
      u !== n && r((n = u));
    });
    return i.observe(t, e), () => i.disconnect();
  });
}
a(j, "d$1"), q(j, "width");
var D = Object.freeze({
    __proto__: null,
    input: P,
    now: $,
    observe: l,
    queue: O,
    width: j,
  }),
  M = Object.defineProperty,
  S = a((t, e) => M(t, "name", { value: e, configurable: !0 }), "r$1");
function x(t) {
  let e;
  return Object.defineProperty(
    l((r) => {
      (e = r), t !== void 0 && e(t);
    }),
    "value",
    { get: () => t, set: (r) => void e((t = r)) },
  );
}
a(x, "f$1"), S(x, "Mutable");
var G = Object.defineProperty,
  F = a((t, e) => G(t, "name", { value: e, configurable: !0 }), "o");
function A(t, e) {
  const r = document.createElement("div");
  (r.style.position = "relative"), t.length !== 1 && (r.style.height = "100%");
  const n = new ResizeObserver(([i]) => {
    const { width: o, height: u } = i.contentRect;
    for (; r.lastChild; ) r.lastChild.remove();
    if (o > 0) {
      const y = t(o, u);
      t.length !== 1 && R(y) && (y.style.position = "absolute"), r.append(y);
    }
  });
  return n.observe(r), e?.then(() => n.disconnect()), r;
}
a(A, "d"), F(A, "resize");
function R(t) {
  return t.nodeType === 1;
}
a(R, "v"), F(R, "isElement");
var N = Object.defineProperty,
  Q = a((t, e) => N(t, "name", { value: e, configurable: !0 }), "t");
class W {
  static {
    a(this, "p");
  }
  static {
    Q(this, "Library");
  }
}
const Z = void 0;
export {
  w as AbstractFile,
  h as FileAttachment,
  Z as FileAttachments,
  D as Generators,
  W as Library,
  x as Mutable,
  b as registerFile,
  A as resize,
};
