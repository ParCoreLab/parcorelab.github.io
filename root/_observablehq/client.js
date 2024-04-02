var G = Object.defineProperty;
var o = (e, t) => G(e, "name", { value: t, configurable: !0 });
import { Inspector as L, Runtime as R } from "./runtime.js";
import {
  Generators as y,
  resize as V,
  FileAttachment as Z,
  Mutable as J,
} from "./stdlib.js";
var U = Object.defineProperty,
  x = o((e, t) => U(e, "name", { value: t, configurable: !0 }), "o$2");
const _ = document.createElement("template");
(_.innerHTML =
  '<button title="Copy code" class="observablehq-pre-copy"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 6C2 5.44772 2.44772 5 3 5H10C10.5523 5 11 5.44772 11 6V13C11 13.5523 10.5523 14 10 14H3C2.44772 14 2 13.5523 2 13V6Z M4 2.00004L12 2.00001C13.1046 2 14 2.89544 14 4.00001V12"></path></svg></button>'),
  j();
function j() {
  for (const e of document.querySelectorAll("pre:not([data-copy=none])")) {
    const t = e.parentNode;
    if (t.classList.contains("observablehq-pre-container")) continue;
    const a = t.insertBefore(document.createElement("div"), e);
    (a.className = "observablehq-pre-container"),
      Object.assign(a.dataset, e.dataset),
      a
        .appendChild(_.content.cloneNode(!0).firstChild)
        .addEventListener("click", E),
      a.appendChild(e);
  }
}
o(j, "r$3"), x(j, "enableCopyButtons");
async function E({ currentTarget: e }) {
  await navigator.clipboard.writeText(e.nextElementSibling.textContent.trim());
  const [t] = e.getAnimations({ subtree: !0 });
  t && (t.currentTime = 0),
    e.classList.add("observablehq-pre-copied"),
    e.addEventListener(
      "animationend",
      () => e.classList.remove("observablehq-pre-copied"),
      { once: !0 },
    );
}
o(E, "c$2"), x(E, "copy");
var W = Object.defineProperty,
  A = o((e, t) => W(e, "name", { value: t, configurable: !0 }), "r$2");
const u = document.querySelector("#observablehq-sidebar-toggle");
if (u) {
  let e = u.indeterminate;
  (u.onclick = () => {
    const a = matchMedia("(min-width: calc(640px + 6rem + 272px))").matches;
    e ? ((u.checked = !a), (e = !1)) : u.checked === a && (e = !0),
      (u.indeterminate = e),
      e
        ? sessionStorage.removeItem("observablehq-sidebar")
        : sessionStorage.setItem("observablehq-sidebar", u.checked);
  }),
    addEventListener("keypress", (a) => {
      a.code === "KeyB" &&
        (a.metaKey || a.altKey) &&
        !a.ctrlKey &&
        (a.target === document.body ||
          a.target === u ||
          a.target?.closest("#observablehq-sidebar")) &&
        (u.click(), a.preventDefault());
    });
  const t = `Toggle sidebar ${
    /Mac|iPhone/.test(navigator.platform)
      ? /Firefox/.test(navigator.userAgent)
        ? "\u2325"
        : "\u2318"
      : "Alt-"
  }B`;
  for (const a of document.querySelectorAll(
    "#observablehq-sidebar-toggle, label[for='observablehq-sidebar-toggle']",
  ))
    a.title = t;
}
function D(e) {
  e.detail > 1 && e.preventDefault();
}
o(D, "preventDoubleClick"), A(D, "preventDoubleClick");
function O() {
  sessionStorage.setItem(
    `observablehq-sidebar:${this.firstElementChild.textContent}`,
    this.open,
  );
}
o(O, "persistOpen"), A(O, "persistOpen");
for (const e of document.querySelectorAll("#observablehq-sidebar summary"))
  (e.onmousedown = D), (e.parentElement.ontoggle = O);
var X = Object.defineProperty,
  B = o((e, t) => X(e, "name", { value: t, configurable: !0 }), "a$3");
const g = document.querySelector("#observablehq-toc");
if (g) {
  const e = g.appendChild(document.createElement("div"));
  e.classList.add("observablehq-secondary-link-highlight");
  const t = Array.from(
      document
        .querySelector("#observablehq-main")
        .querySelectorAll(g.dataset.selector),
    )
      .filter((c) => c.querySelector("a.observablehq-header-anchor"))
      .reverse(),
    a = g.querySelectorAll(".observablehq-secondary-link"),
    d = B(() => {
      for (const c of a)
        c.classList.remove("observablehq-secondary-link-active");
      if (location.hash)
        for (const c of t) {
          const f = c.querySelector("a[href]")?.hash;
          if (f === location.hash) {
            const p = c.getBoundingClientRect().top;
            if (0 < p && p < 40) {
              for (const s of a)
                if (s.querySelector("a[href]")?.hash === f)
                  return (
                    s.classList.add("observablehq-secondary-link-active"), s
                  );
              return;
            }
            break;
          }
        }
      for (const c of t) {
        if (c.getBoundingClientRect().top >= innerHeight * 0.5) continue;
        const f = c.querySelector("a[href]")?.hash;
        for (const p of a)
          if (p.querySelector("a[href]")?.hash === f)
            return p.classList.add("observablehq-secondary-link-active"), p;
        break;
      }
    }, "relink"),
    m = B(() => {
      const c = d();
      e.style.cssText = c
        ? `top: ${c.offsetTop}px; height: ${c.offsetHeight}px;`
        : "";
    }, "intersected"),
    w = new IntersectionObserver(m, { rootMargin: "0px 0px -50% 0px" });
  for (const c of t) w.observe(c);
}
var Y = Object.defineProperty,
  P = o((e, t) => Y(e, "name", { value: t, configurable: !0 }), "n$1");
function M(e) {
  const t = new L(document.createElement("div"));
  return t.fulfilled(e), t._node.firstChild;
}
o(M, "i$2"), P(M, "inspect");
function I(e) {
  const t = new L(document.createElement("div"));
  t.rejected(e);
  const a = t._node.firstChild;
  return a.classList.add("observablehq--error"), a;
}
o(I, "s$3"), P(I, "inspectError");
var ee = Object.defineProperty,
  r = o((e, t) => ee(e, "name", { value: t, configurable: !0 }), "o$1");
const te = r(
    () => import("../_npm/lodash@4.17.21/+esm.js").then((e) => e.default),
    "_",
  ),
  ae = r(() => import("../_npm/arquero@5.4.0/+esm.js"), "aq"),
  oe = r(() => import("../_npm/apache-arrow@13.0.0/+esm.js"), "Arrow"),
  re = r(() => import("../_npm/d3@7.8.5/+esm.js"), "d3"),
  ce = r(() => import("./stdlib/dot.js").then((e) => e.default), "dot"),
  ne = r(() => import("../_npm/@duckdb/duckdb-wasm@1.28.0/+esm.js"), "duckdb"),
  se = r(
    () => import("./stdlib/duckdb.js").then((e) => e.DuckDBClient),
    "DuckDBClient",
  ),
  ie = r(
    () => import("../_npm/echarts@5.5.0/dist/echarts.esm.min.js"),
    "echarts",
  ),
  le = r(() => import("../_npm/htl@0.3.1/+esm.js"), "htl"),
  de = r(() => import("../_npm/htl@0.3.1/+esm.js").then((e) => e.html), "html"),
  fe = r(() => import("../_npm/htl@0.3.1/+esm.js").then((e) => e.svg), "svg"),
  be = r(() => import("./stdlib/inputs.js"), "Inputs"),
  ue = r(() => import("../_npm/leaflet@1.9.4/+esm.js"), "L"),
  pe = r(
    () => import("../_npm/mapbox-gl@3.2.0/+esm.js").then((e) => e.default),
    "mapboxgl",
  ),
  he = r(() => import("./stdlib/mermaid.js").then((e) => e.default), "mermaid"),
  me = r(() => import("../_npm/@observablehq/plot@0.6.13/+esm.js"), "Plot"),
  ve = r(() => import("./stdlib/duckdb.js").then((e) => e.sql), "sql"),
  ye = r(() => import("./stdlib/sqlite.js").then((e) => e.default), "SQLite"),
  ge = r(
    () => import("./stdlib/sqlite.js").then((e) => e.SQLiteDatabaseClient),
    "SQLiteDatabaseClient",
  ),
  qe = r(() => import("./stdlib/tex.js").then((e) => e.default), "tex"),
  we = r(() => import("../_npm/topojson-client@3.1.0/+esm.js"), "topojson"),
  $e = r(() => import("./stdlib/vega-lite.js").then((e) => e.default), "vl");
var ke = Object.freeze({
    __proto__: null,
    Arrow: oe,
    DuckDBClient: se,
    Inputs: be,
    L: ue,
    Plot: me,
    SQLite: ye,
    SQLiteDatabaseClient: ge,
    _: te,
    aq: ae,
    d3: re,
    dot: ce,
    duckdb: ne,
    echarts: ie,
    htl: le,
    html: de,
    mapboxgl: pe,
    mermaid: he,
    sql: ve,
    svg: fe,
    tex: qe,
    topojson: we,
    vl: $e,
  }),
  Ce = Object.defineProperty,
  n = o((e, t) => Ce(e, "name", { value: t, configurable: !0 }), "e");
const Se = n(
    () =>
      i(
        "https://static.observableusercontent.com/files/3ccff97fd2d93da734e76829b2b066eafdaac6a1fafdec0faf6ebc443271cfc109d29e80dd217468fcb2aff1e6bffdc73f356cc48feb657f35378e6abbbb63b9",
        !0,
      ),
    "aapl",
  ),
  Le = n(
    () =>
      i(
        "https://static.observableusercontent.com/files/75d52e6c3130b1cae83cda89305e17b50f33e7420ef205587a135e8562bcfd22e483cf4fa2fb5df6dff66f9c5d19740be1cfaf47406286e2eb6574b49ffc685d",
        !0,
      ),
    "alphabet",
  ),
  xe = n(
    () =>
      i(
        "https://static.observableusercontent.com/files/048ec3dfd528110c0665dfa363dd28bc516ffb7247231f3ab25005036717f5c4c232a5efc7bb74bc03037155cb72b1abe85a33d86eb9f1a336196030443be4f6",
        !0,
      ),
    "cars",
  ),
  _e = n(
    () =>
      i(
        "https://static.observableusercontent.com/files/39837ec5121fcc163131dbc2fe8c1a2e0b3423a5d1e96b5ce371e2ac2e20a290d78b71a4fb08b9fa6a0107776e17fb78af313b8ea70f4cc6648fad68ddf06f7a",
        !0,
      ),
    "citywages",
  ),
  je = n(
    () =>
      i(
        "https://static.observableusercontent.com/files/87942b1f5d061a21fa4bb8f2162db44e3ef0f7391301f867ab5ba718b225a63091af20675f0bfe7f922db097b217b377135203a7eab34651e21a8d09f4e37252",
        !0,
      ),
    "diamonds",
  ),
  Ee = n(
    () =>
      i(
        "https://static.observableusercontent.com/files/a6b0d94a7f5828fd133765a934f4c9746d2010e2f342d335923991f31b14120de96b5cb4f160d509d8dc627f0107d7f5b5070d2516f01e4c862b5b4867533000",
        !0,
      ),
    "flare",
  ),
  Ae = n(
    () =>
      i(
        "https://static.observableusercontent.com/files/76f13741128340cc88798c0a0b7fa5a2df8370f57554000774ab8ee9ae785ffa2903010cad670d4939af3e9c17e5e18e7e05ed2b38b848ac2fc1a0066aa0005f",
        !0,
      ),
    "industries",
  ),
  De = n(
    () =>
      T(
        "https://static.observableusercontent.com/files/31d904f6e21d42d4963ece9c8cc4fbd75efcbdc404bf511bc79906f0a1be68b5a01e935f65123670ed04e35ca8cae3c2b943f82bf8db49c5a67c85cbb58db052",
      ),
    "miserables",
  ),
  Oe = n(
    () =>
      i(
        "https://static.observableusercontent.com/files/31ca24545a0603dce099d10ee89ee5ae72d29fa55e8fc7c9ffb5ded87ac83060d80f1d9e21f4ae8eb04c1e8940b7287d179fe8060d887fb1f055f430e210007c",
        !0,
      ),
    "olympians",
  ),
  Be = n(
    () =>
      i(
        "https://static.observableusercontent.com/files/715db1223e067f00500780077febc6cebbdd90c151d3d78317c802732252052ab0e367039872ab9c77d6ef99e5f55a0724b35ddc898a1c99cb14c31a379af80a",
        !0,
      ),
    "penguins",
  ),
  Pe = n(
    () =>
      i(
        "https://static.observableusercontent.com/files/c653108ab176088cacbb338eaf2344c4f5781681702bd6afb55697a3f91b511c6686ff469f3e3a27c75400001a2334dbd39a4499fe46b50a8b3c278b7d2f7fb5",
        !0,
      ),
    "pizza",
  ),
  Me = n(
    () =>
      i(
        "https://static.observableusercontent.com/files/693a46b22b33db0f042728700e0c73e836fa13d55446df89120682d55339c6db7cc9e574d3d73f24ecc9bc7eb9ac9a1e7e104a1ee52c00aab1e77eb102913c1f",
        !0,
      ),
    "weather",
  );
async function T(e) {
  const t = await fetch(e);
  if (!t.ok) throw new Error(`unable to fetch ${e}: status ${t.status}`);
  return t.json();
}
o(T, "y$1"), n(T, "json");
async function z(e) {
  const t = await fetch(e);
  if (!t.ok) throw new Error(`unable to fetch ${e}: status ${t.status}`);
  return t.text();
}
o(z, "$"), n(z, "text");
async function i(e, t) {
  const [a, d] = await Promise.all([
    z(e),
    import("../_npm/d3-dsv@3.0.1/+esm.js"),
  ]);
  return d.csvParse(a, t && d.autoType);
}
o(i, "a$1"), n(i, "csv");
var Ie = Object.freeze({
    __proto__: null,
    aapl: Se,
    alphabet: Le,
    cars: xe,
    citywages: _e,
    diamonds: je,
    flare: Ee,
    industries: Ae,
    miserables: De,
    olympians: Oe,
    penguins: Be,
    pizza: Pe,
    weather: Me,
  }),
  Te = Object.defineProperty,
  h = o((e, t) => Te(e, "name", { value: t, configurable: !0 }), "s");
const ze = {
    now: () => y.now(),
    width: () => y.width(document.querySelector("main")),
    resize: () => V,
    FileAttachment: () => Z,
    Generators: () => y,
    Mutable: () => J,
    ...ke,
    ...Ie,
  },
  He = new R(ze),
  H = He.module(),
  q = new Map();
function N(e) {
  const { id: t, inline: a, inputs: d = [], outputs: m = [], body: w } = e,
    c = [];
  q.get(t)?.variables.forEach((l) => l.delete()),
    q.set(t, { cell: e, variables: c });
  const f = document.querySelector(`#cell-${t}`),
    p = h((l) => (C(f), console.error(l), f.append(I(l))), "rejected"),
    s = H.variable({ _node: f, rejected: p }, { shadow: {} });
  if (d.includes("display") || d.includes("view")) {
    let l = -1;
    const $ = a ? Q : F,
      k = new s.constructor(2, s._module);
    if (
      (k.define(
        d.filter((b) => b !== "display" && b !== "view"),
        () => {
          let b = s._version;
          return (v) => {
            if (b < l) throw new Error("stale display");
            return b > l && C(f), (l = b), $(f, v), v;
          };
        },
      ),
      s._shadow.set("display", k),
      d.includes("view"))
    ) {
      const b = new s.constructor(2, s._module, null, { shadow: {} });
      b._shadow.set("display", k),
        b.define(["display"], (v) => (K) => y.input(v(K))),
        s._shadow.set("view", b);
    }
  }
  s.define(m.length ? `cell ${t}` : null, d, w), c.push(s);
  for (const l of m)
    c.push(H.variable(!0).define(l, [`cell ${t}`], ($) => $[l]));
}
o(N, "I"), h(N, "define");
function C(e) {
  (e.innerHTML = ""), e.classList.remove("observablehq--loading");
}
o(C, "y"), h(C, "clear");
function Q(e, t) {
  S(t) || typeof t == "string" || !t?.[Symbol.iterator]
    ? e.append(t)
    : e.append(...t);
}
o(Q, "N"), h(Q, "displayInline");
function F(e, t) {
  e.append(S(t) ? t : M(t));
}
o(F, "j"), h(F, "displayBlock");
function Ne(e) {
  q.get(e)?.variables.forEach((t) => t.delete()), q.delete(e);
}
o(Ne, "k"), h(Ne, "undefine");
function S(e) {
  return e instanceof Node && e instanceof e.constructor;
}
o(S, "h"), h(S, "isNode");
export { N as define };
