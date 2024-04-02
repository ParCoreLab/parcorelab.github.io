/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/d3-selection@3.0.0/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var t = "http://www.w3.org/1999/xhtml",
  n = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: t,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
  };
function e(t) {
  var e = (t += ""),
    r = e.indexOf(":");
  return (
    r >= 0 && "xmlns" !== (e = t.slice(0, r)) && (t = t.slice(r + 1)),
    n.hasOwnProperty(e) ? { space: n[e], local: t } : t
  );
}
function r(n) {
  return function () {
    var e = this.ownerDocument,
      r = this.namespaceURI;
    return r === t && e.documentElement.namespaceURI === t
      ? e.createElement(n)
      : e.createElementNS(r, n);
  };
}
function i(t) {
  return function () {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function o(t) {
  var n = e(t);
  return (n.local ? i : r)(n);
}
function u() {}
function s(t) {
  return null == t
    ? u
    : function () {
        return this.querySelector(t);
      };
}
function c(t) {
  return null == t ? [] : Array.isArray(t) ? t : Array.from(t);
}
function a() {
  return [];
}
function l(t) {
  return null == t
    ? a
    : function () {
        return this.querySelectorAll(t);
      };
}
function f(t) {
  return function () {
    return this.matches(t);
  };
}
function h(t) {
  return function (n) {
    return n.matches(t);
  };
}
var p = Array.prototype.find;
function _() {
  return this.firstElementChild;
}
var d = Array.prototype.filter;
function y() {
  return Array.from(this.children);
}
function v(t) {
  return new Array(t.length);
}
function m(t, n) {
  (this.ownerDocument = t.ownerDocument),
    (this.namespaceURI = t.namespaceURI),
    (this._next = null),
    (this._parent = t),
    (this.__data__ = n);
}
function g(t, n, e, r, i, o) {
  for (var u, s = 0, c = n.length, a = o.length; s < a; ++s)
    (u = n[s]) ? ((u.__data__ = o[s]), (r[s] = u)) : (e[s] = new m(t, o[s]));
  for (; s < c; ++s) (u = n[s]) && (i[s] = u);
}
function w(t, n, e, r, i, o, u) {
  var s,
    c,
    a,
    l = new Map(),
    f = n.length,
    h = o.length,
    p = new Array(f);
  for (s = 0; s < f; ++s)
    (c = n[s]) &&
      ((p[s] = a = u.call(c, c.__data__, s, n) + ""),
      l.has(a) ? (i[s] = c) : l.set(a, c));
  for (s = 0; s < h; ++s)
    (a = u.call(t, o[s], s, o) + ""),
      (c = l.get(a))
        ? ((r[s] = c), (c.__data__ = o[s]), l.delete(a))
        : (e[s] = new m(t, o[s]));
  for (s = 0; s < f; ++s) (c = n[s]) && l.get(p[s]) === c && (i[s] = c);
}
function A(t) {
  return t.__data__;
}
function x(t) {
  return "object" == typeof t && "length" in t ? t : Array.from(t);
}
function S(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function b(t) {
  return function () {
    this.removeAttribute(t);
  };
}
function E(t) {
  return function () {
    this.removeAttributeNS(t.space, t.local);
  };
}
function N(t, n) {
  return function () {
    this.setAttribute(t, n);
  };
}
function C(t, n) {
  return function () {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function L(t, n) {
  return function () {
    var e = n.apply(this, arguments);
    null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function B(t, n) {
  return function () {
    var e = n.apply(this, arguments);
    null == e
      ? this.removeAttributeNS(t.space, t.local)
      : this.setAttributeNS(t.space, t.local, e);
  };
}
function P(t) {
  return (
    (t.ownerDocument && t.ownerDocument.defaultView) ||
    (t.document && t) ||
    t.defaultView
  );
}
function T(t) {
  return function () {
    this.style.removeProperty(t);
  };
}
function q(t, n, e) {
  return function () {
    this.style.setProperty(t, n, e);
  };
}
function M(t, n, e) {
  return function () {
    var r = n.apply(this, arguments);
    null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function D(t, n) {
  return (
    t.style.getPropertyValue(n) ||
    P(t).getComputedStyle(t, null).getPropertyValue(n)
  );
}
function V(t) {
  return function () {
    delete this[t];
  };
}
function O(t, n) {
  return function () {
    this[t] = n;
  };
}
function R(t, n) {
  return function () {
    var e = n.apply(this, arguments);
    null == e ? delete this[t] : (this[t] = e);
  };
}
function j(t) {
  return t.trim().split(/^|\s+/);
}
function H(t) {
  return t.classList || new I(t);
}
function I(t) {
  (this._node = t), (this._names = j(t.getAttribute("class") || ""));
}
function U(t, n) {
  for (var e = H(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function X(t, n) {
  for (var e = H(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function G(t) {
  return function () {
    U(this, t);
  };
}
function Y(t) {
  return function () {
    X(this, t);
  };
}
function k(t, n) {
  return function () {
    (n.apply(this, arguments) ? U : X)(this, t);
  };
}
function z() {
  this.textContent = "";
}
function F(t) {
  return function () {
    this.textContent = t;
  };
}
function J(t) {
  return function () {
    var n = t.apply(this, arguments);
    this.textContent = null == n ? "" : n;
  };
}
function K() {
  this.innerHTML = "";
}
function Q(t) {
  return function () {
    this.innerHTML = t;
  };
}
function W(t) {
  return function () {
    var n = t.apply(this, arguments);
    this.innerHTML = null == n ? "" : n;
  };
}
function Z() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function $() {
  this.previousSibling &&
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function tt() {
  return null;
}
function nt() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function et() {
  var t = this.cloneNode(!1),
    n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function rt() {
  var t = this.cloneNode(!0),
    n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function it(t) {
  return function () {
    var n = this.__on;
    if (n) {
      for (var e, r = 0, i = -1, o = n.length; r < o; ++r)
        (e = n[r]),
          (t.type && e.type !== t.type) || e.name !== t.name
            ? (n[++i] = e)
            : this.removeEventListener(e.type, e.listener, e.options);
      ++i ? (n.length = i) : delete this.__on;
    }
  };
}
function ot(t, n, e) {
  return function () {
    var r,
      i = this.__on,
      o = (function (t) {
        return function (n) {
          t.call(this, n, this.__data__);
        };
      })(n);
    if (i)
      for (var u = 0, s = i.length; u < s; ++u)
        if ((r = i[u]).type === t.type && r.name === t.name)
          return (
            this.removeEventListener(r.type, r.listener, r.options),
            this.addEventListener(r.type, (r.listener = o), (r.options = e)),
            void (r.value = n)
          );
    this.addEventListener(t.type, o, e),
      (r = { type: t.type, name: t.name, value: n, listener: o, options: e }),
      i ? i.push(r) : (this.__on = [r]);
  };
}
function ut(t, n, e) {
  var r = P(t),
    i = r.CustomEvent;
  "function" == typeof i
    ? (i = new i(n, e))
    : ((i = r.document.createEvent("Event")),
      e
        ? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail))
        : i.initEvent(n, !1, !1)),
    t.dispatchEvent(i);
}
function st(t, n) {
  return function () {
    return ut(this, t, n);
  };
}
function ct(t, n) {
  return function () {
    return ut(this, t, n.apply(this, arguments));
  };
}
(m.prototype = {
  constructor: m,
  appendChild: function (t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function (t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function (t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function (t) {
    return this._parent.querySelectorAll(t);
  },
}),
  (I.prototype = {
    add: function (t) {
      this._names.indexOf(t) < 0 &&
        (this._names.push(t),
        this._node.setAttribute("class", this._names.join(" ")));
    },
    remove: function (t) {
      var n = this._names.indexOf(t);
      n >= 0 &&
        (this._names.splice(n, 1),
        this._node.setAttribute("class", this._names.join(" ")));
    },
    contains: function (t) {
      return this._names.indexOf(t) >= 0;
    },
  });
var at = [null];
function lt(t, n) {
  (this._groups = t), (this._parents = n);
}
function ft() {
  return new lt([[document.documentElement]], at);
}
function ht(t) {
  return "string" == typeof t
    ? new lt([[document.querySelector(t)]], [document.documentElement])
    : new lt([[t]], at);
}
function pt(t) {
  return ht(o(t).call(document.documentElement));
}
lt.prototype = ft.prototype = {
  constructor: lt,
  select: function (t) {
    "function" != typeof t && (t = s(t));
    for (
      var n = this._groups, e = n.length, r = new Array(e), i = 0;
      i < e;
      ++i
    )
      for (
        var o, u, c = n[i], a = c.length, l = (r[i] = new Array(a)), f = 0;
        f < a;
        ++f
      )
        (o = c[f]) &&
          (u = t.call(o, o.__data__, f, c)) &&
          ("__data__" in o && (u.__data__ = o.__data__), (l[f] = u));
    return new lt(r, this._parents);
  },
  selectAll: function (t) {
    t =
      "function" == typeof t
        ? (function (t) {
            return function () {
              return c(t.apply(this, arguments));
            };
          })(t)
        : l(t);
    for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
      for (var u, s = n[o], a = s.length, f = 0; f < a; ++f)
        (u = s[f]) && (r.push(t.call(u, u.__data__, f, s)), i.push(u));
    return new lt(r, i);
  },
  selectChild: function (t) {
    return this.select(
      null == t
        ? _
        : (function (t) {
            return function () {
              return p.call(this.children, t);
            };
          })("function" == typeof t ? t : h(t)),
    );
  },
  selectChildren: function (t) {
    return this.selectAll(
      null == t
        ? y
        : (function (t) {
            return function () {
              return d.call(this.children, t);
            };
          })("function" == typeof t ? t : h(t)),
    );
  },
  filter: function (t) {
    "function" != typeof t && (t = f(t));
    for (
      var n = this._groups, e = n.length, r = new Array(e), i = 0;
      i < e;
      ++i
    )
      for (var o, u = n[i], s = u.length, c = (r[i] = []), a = 0; a < s; ++a)
        (o = u[a]) && t.call(o, o.__data__, a, u) && c.push(o);
    return new lt(r, this._parents);
  },
  data: function (t, n) {
    if (!arguments.length) return Array.from(this, A);
    var e,
      r = n ? w : g,
      i = this._parents,
      o = this._groups;
    "function" != typeof t &&
      ((e = t),
      (t = function () {
        return e;
      }));
    for (
      var u = o.length,
        s = new Array(u),
        c = new Array(u),
        a = new Array(u),
        l = 0;
      l < u;
      ++l
    ) {
      var f = i[l],
        h = o[l],
        p = h.length,
        _ = x(t.call(f, f && f.__data__, l, i)),
        d = _.length,
        y = (c[l] = new Array(d)),
        v = (s[l] = new Array(d));
      r(f, h, y, v, (a[l] = new Array(p)), _, n);
      for (var m, S, b = 0, E = 0; b < d; ++b)
        if ((m = y[b])) {
          for (b >= E && (E = b + 1); !(S = v[E]) && ++E < d; );
          m._next = S || null;
        }
    }
    return ((s = new lt(s, i))._enter = c), (s._exit = a), s;
  },
  enter: function () {
    return new lt(this._enter || this._groups.map(v), this._parents);
  },
  exit: function () {
    return new lt(this._exit || this._groups.map(v), this._parents);
  },
  join: function (t, n, e) {
    var r = this.enter(),
      i = this,
      o = this.exit();
    return (
      "function" == typeof t
        ? (r = t(r)) && (r = r.selection())
        : (r = r.append(t + "")),
      null != n && (i = n(i)) && (i = i.selection()),
      null == e ? o.remove() : e(o),
      r && i ? r.merge(i).order() : i
    );
  },
  merge: function (t) {
    for (
      var n = t.selection ? t.selection() : t,
        e = this._groups,
        r = n._groups,
        i = e.length,
        o = r.length,
        u = Math.min(i, o),
        s = new Array(i),
        c = 0;
      c < u;
      ++c
    )
      for (
        var a,
          l = e[c],
          f = r[c],
          h = l.length,
          p = (s[c] = new Array(h)),
          _ = 0;
        _ < h;
        ++_
      )
        (a = l[_] || f[_]) && (p[_] = a);
    for (; c < i; ++c) s[c] = e[c];
    return new lt(s, this._parents);
  },
  selection: function () {
    return this;
  },
  order: function () {
    for (var t = this._groups, n = -1, e = t.length; ++n < e; )
      for (var r, i = t[n], o = i.length - 1, u = i[o]; --o >= 0; )
        (r = i[o]) &&
          (u &&
            4 ^ r.compareDocumentPosition(u) &&
            u.parentNode.insertBefore(r, u),
          (u = r));
    return this;
  },
  sort: function (t) {
    function n(n, e) {
      return n && e ? t(n.__data__, e.__data__) : !n - !e;
    }
    t || (t = S);
    for (
      var e = this._groups, r = e.length, i = new Array(r), o = 0;
      o < r;
      ++o
    ) {
      for (
        var u, s = e[o], c = s.length, a = (i[o] = new Array(c)), l = 0;
        l < c;
        ++l
      )
        (u = s[l]) && (a[l] = u);
      a.sort(n);
    }
    return new lt(i, this._parents).order();
  },
  call: function () {
    var t = arguments[0];
    return (arguments[0] = this), t.apply(null, arguments), this;
  },
  nodes: function () {
    return Array.from(this);
  },
  node: function () {
    for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
      for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
        var u = r[i];
        if (u) return u;
      }
    return null;
  },
  size: function () {
    let t = 0;
    for (const n of this) ++t;
    return t;
  },
  empty: function () {
    return !this.node();
  },
  each: function (t) {
    for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
      for (var i, o = n[e], u = 0, s = o.length; u < s; ++u)
        (i = o[u]) && t.call(i, i.__data__, u, o);
    return this;
  },
  attr: function (t, n) {
    var r = e(t);
    if (arguments.length < 2) {
      var i = this.node();
      return r.local ? i.getAttributeNS(r.space, r.local) : i.getAttribute(r);
    }
    return this.each(
      (null == n
        ? r.local
          ? E
          : b
        : "function" == typeof n
        ? r.local
          ? B
          : L
        : r.local
        ? C
        : N)(r, n),
    );
  },
  style: function (t, n, e) {
    return arguments.length > 1
      ? this.each(
          (null == n ? T : "function" == typeof n ? M : q)(
            t,
            n,
            null == e ? "" : e,
          ),
        )
      : D(this.node(), t);
  },
  property: function (t, n) {
    return arguments.length > 1
      ? this.each((null == n ? V : "function" == typeof n ? R : O)(t, n))
      : this.node()[t];
  },
  classed: function (t, n) {
    var e = j(t + "");
    if (arguments.length < 2) {
      for (var r = H(this.node()), i = -1, o = e.length; ++i < o; )
        if (!r.contains(e[i])) return !1;
      return !0;
    }
    return this.each(("function" == typeof n ? k : n ? G : Y)(e, n));
  },
  text: function (t) {
    return arguments.length
      ? this.each(null == t ? z : ("function" == typeof t ? J : F)(t))
      : this.node().textContent;
  },
  html: function (t) {
    return arguments.length
      ? this.each(null == t ? K : ("function" == typeof t ? W : Q)(t))
      : this.node().innerHTML;
  },
  raise: function () {
    return this.each(Z);
  },
  lower: function () {
    return this.each($);
  },
  append: function (t) {
    var n = "function" == typeof t ? t : o(t);
    return this.select(function () {
      return this.appendChild(n.apply(this, arguments));
    });
  },
  insert: function (t, n) {
    var e = "function" == typeof t ? t : o(t),
      r = null == n ? tt : "function" == typeof n ? n : s(n);
    return this.select(function () {
      return this.insertBefore(
        e.apply(this, arguments),
        r.apply(this, arguments) || null,
      );
    });
  },
  remove: function () {
    return this.each(nt);
  },
  clone: function (t) {
    return this.select(t ? rt : et);
  },
  datum: function (t) {
    return arguments.length
      ? this.property("__data__", t)
      : this.node().__data__;
  },
  on: function (t, n, e) {
    var r,
      i,
      o = (function (t) {
        return t
          .trim()
          .split(/^|\s+/)
          .map(function (t) {
            var n = "",
              e = t.indexOf(".");
            return (
              e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
              { type: t, name: n }
            );
          });
      })(t + ""),
      u = o.length;
    if (!(arguments.length < 2)) {
      for (s = n ? ot : it, r = 0; r < u; ++r) this.each(s(o[r], n, e));
      return this;
    }
    var s = this.node().__on;
    if (s)
      for (var c, a = 0, l = s.length; a < l; ++a)
        for (r = 0, c = s[a]; r < u; ++r)
          if ((i = o[r]).type === c.type && i.name === c.name) return c.value;
  },
  dispatch: function (t, n) {
    return this.each(("function" == typeof n ? ct : st)(t, n));
  },
  [Symbol.iterator]: function* () {
    for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
      for (var r, i = t[n], o = 0, u = i.length; o < u; ++o)
        (r = i[o]) && (yield r);
  },
};
var _t = 0;
function dt() {
  return new yt();
}
function yt() {
  this._ = "@" + (++_t).toString(36);
}
function vt(t) {
  let n;
  for (; (n = t.sourceEvent); ) t = n;
  return t;
}
function mt(t, n) {
  if (((t = vt(t)), void 0 === n && (n = t.currentTarget), n)) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return (
        (r.x = t.clientX),
        (r.y = t.clientY),
        [(r = r.matrixTransform(n.getScreenCTM().inverse())).x, r.y]
      );
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [
        t.clientX - i.left - n.clientLeft,
        t.clientY - i.top - n.clientTop,
      ];
    }
  }
  return [t.pageX, t.pageY];
}
function gt(t, n) {
  return (
    t.target &&
      ((t = vt(t)),
      void 0 === n && (n = t.currentTarget),
      (t = t.touches || [t])),
    Array.from(t, (t) => mt(t, n))
  );
}
function wt(t) {
  return "string" == typeof t
    ? new lt([document.querySelectorAll(t)], [document.documentElement])
    : new lt([c(t)], at);
}
yt.prototype = dt.prototype = {
  constructor: yt,
  get: function (t) {
    for (var n = this._; !(n in t); ) if (!(t = t.parentNode)) return;
    return t[n];
  },
  set: function (t, n) {
    return (t[this._] = n);
  },
  remove: function (t) {
    return this._ in t && delete t[this._];
  },
  toString: function () {
    return this._;
  },
};
export {
  pt as create,
  o as creator,
  dt as local,
  f as matcher,
  e as namespace,
  n as namespaces,
  mt as pointer,
  gt as pointers,
  ht as select,
  wt as selectAll,
  ft as selection,
  s as selector,
  l as selectorAll,
  D as style,
  P as window,
};
export default null;
