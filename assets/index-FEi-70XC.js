(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) f(d);
  new MutationObserver((d) => {
    for (const v of d)
      if (v.type === "childList")
        for (const b of v.addedNodes)
          b.tagName === "LINK" && b.rel === "modulepreload" && f(b);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(d) {
    const v = {};
    return (
      d.integrity && (v.integrity = d.integrity),
      d.referrerPolicy && (v.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === "use-credentials"
        ? (v.credentials = "include")
        : d.crossOrigin === "anonymous"
        ? (v.credentials = "omit")
        : (v.credentials = "same-origin"),
      v
    );
  }
  function f(d) {
    if (d.ep) return;
    d.ep = !0;
    const v = r(d);
    fetch(d.href, v);
  }
})();
var Cf = { exports: {} },
  Dn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Id;
function ev() {
  if (Id) return Dn;
  Id = 1;
  var c = Symbol.for("react.transitional.element"),
    o = Symbol.for("react.fragment");
  function r(f, d, v) {
    var b = null;
    if (
      (v !== void 0 && (b = "" + v),
      d.key !== void 0 && (b = "" + d.key),
      "key" in d)
    ) {
      v = {};
      for (var O in d) O !== "key" && (v[O] = d[O]);
    } else v = d;
    return (
      (d = v.ref),
      { $$typeof: c, type: f, key: b, ref: d !== void 0 ? d : null, props: v }
    );
  }
  return (Dn.Fragment = o), (Dn.jsx = r), (Dn.jsxs = r), Dn;
}
var Pd;
function lv() {
  return Pd || ((Pd = 1), (Cf.exports = ev())), Cf.exports;
}
var A = lv(),
  Rf = { exports: {} },
  $ = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tm;
function av() {
  if (tm) return $;
  tm = 1;
  var c = Symbol.for("react.transitional.element"),
    o = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    f = Symbol.for("react.strict_mode"),
    d = Symbol.for("react.profiler"),
    v = Symbol.for("react.consumer"),
    b = Symbol.for("react.context"),
    O = Symbol.for("react.forward_ref"),
    S = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    N = Symbol.for("react.lazy"),
    T = Symbol.for("react.activity"),
    B = Symbol.iterator;
  function Y(g) {
    return g === null || typeof g != "object"
      ? null
      : ((g = (B && g[B]) || g["@@iterator"]),
        typeof g == "function" ? g : null);
  }
  var H = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Z = Object.assign,
    K = {};
  function X(g, U, q) {
    (this.props = g),
      (this.context = U),
      (this.refs = K),
      (this.updater = q || H);
  }
  (X.prototype.isReactComponent = {}),
    (X.prototype.setState = function (g, U) {
      if (typeof g != "object" && typeof g != "function" && g != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, g, U, "setState");
    }),
    (X.prototype.forceUpdate = function (g) {
      this.updater.enqueueForceUpdate(this, g, "forceUpdate");
    });
  function Q() {}
  Q.prototype = X.prototype;
  function W(g, U, q) {
    (this.props = g),
      (this.context = U),
      (this.refs = K),
      (this.updater = q || H);
  }
  var xt = (W.prototype = new Q());
  (xt.constructor = W), Z(xt, X.prototype), (xt.isPureReactComponent = !0);
  var Tt = Array.isArray;
  function Ht() {}
  var tt = { H: null, A: null, T: null, S: null },
    Yt = Object.prototype.hasOwnProperty;
  function _t(g, U, q) {
    var G = q.ref;
    return {
      $$typeof: c,
      type: g,
      key: U,
      ref: G !== void 0 ? G : null,
      props: q,
    };
  }
  function ae(g, U) {
    return _t(g.type, U, g.props);
  }
  function ne(g) {
    return typeof g == "object" && g !== null && g.$$typeof === c;
  }
  function Ft(g) {
    var U = { "=": "=0", ":": "=2" };
    return (
      "$" +
      g.replace(/[=:]/g, function (q) {
        return U[q];
      })
    );
  }
  var Cl = /\/+/g;
  function Be(g, U) {
    return typeof g == "object" && g !== null && g.key != null
      ? Ft("" + g.key)
      : U.toString(36);
  }
  function Te(g) {
    switch (g.status) {
      case "fulfilled":
        return g.value;
      case "rejected":
        throw g.reason;
      default:
        switch (
          (typeof g.status == "string"
            ? g.then(Ht, Ht)
            : ((g.status = "pending"),
              g.then(
                function (U) {
                  g.status === "pending" &&
                    ((g.status = "fulfilled"), (g.value = U));
                },
                function (U) {
                  g.status === "pending" &&
                    ((g.status = "rejected"), (g.reason = U));
                }
              )),
          g.status)
        ) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
        }
    }
    throw g;
  }
  function R(g, U, q, G, I) {
    var lt = typeof g;
    (lt === "undefined" || lt === "boolean") && (g = null);
    var rt = !1;
    if (g === null) rt = !0;
    else
      switch (lt) {
        case "bigint":
        case "string":
        case "number":
          rt = !0;
          break;
        case "object":
          switch (g.$$typeof) {
            case c:
            case o:
              rt = !0;
              break;
            case N:
              return (rt = g._init), R(rt(g._payload), U, q, G, I);
          }
      }
    if (rt)
      return (
        (I = I(g)),
        (rt = G === "" ? "." + Be(g, 0) : G),
        Tt(I)
          ? ((q = ""),
            rt != null && (q = rt.replace(Cl, "$&/") + "/"),
            R(I, U, q, "", function (wa) {
              return wa;
            }))
          : I != null &&
            (ne(I) &&
              (I = ae(
                I,
                q +
                  (I.key == null || (g && g.key === I.key)
                    ? ""
                    : ("" + I.key).replace(Cl, "$&/") + "/") +
                  rt
              )),
            U.push(I)),
        1
      );
    rt = 0;
    var Jt = G === "" ? "." : G + ":";
    if (Tt(g))
      for (var Nt = 0; Nt < g.length; Nt++)
        (G = g[Nt]), (lt = Jt + Be(G, Nt)), (rt += R(G, U, q, lt, I));
    else if (((Nt = Y(g)), typeof Nt == "function"))
      for (g = Nt.call(g), Nt = 0; !(G = g.next()).done; )
        (G = G.value), (lt = Jt + Be(G, Nt++)), (rt += R(G, U, q, lt, I));
    else if (lt === "object") {
      if (typeof g.then == "function") return R(Te(g), U, q, G, I);
      throw (
        ((U = String(g)),
        Error(
          "Objects are not valid as a React child (found: " +
            (U === "[object Object]"
              ? "object with keys {" + Object.keys(g).join(", ") + "}"
              : U) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return rt;
  }
  function w(g, U, q) {
    if (g == null) return g;
    var G = [],
      I = 0;
    return (
      R(g, G, "", "", function (lt) {
        return U.call(q, lt, I++);
      }),
      G
    );
  }
  function F(g) {
    if (g._status === -1) {
      var U = g._result;
      (U = U()),
        U.then(
          function (q) {
            (g._status === 0 || g._status === -1) &&
              ((g._status = 1), (g._result = q));
          },
          function (q) {
            (g._status === 0 || g._status === -1) &&
              ((g._status = 2), (g._result = q));
          }
        ),
        g._status === -1 && ((g._status = 0), (g._result = U));
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var ht =
      typeof reportError == "function"
        ? reportError
        : function (g) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var U = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof g == "object" &&
                  g !== null &&
                  typeof g.message == "string"
                    ? String(g.message)
                    : String(g),
                error: g,
              });
              if (!window.dispatchEvent(U)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", g);
              return;
            }
            console.error(g);
          },
    pt = {
      map: w,
      forEach: function (g, U, q) {
        w(
          g,
          function () {
            U.apply(this, arguments);
          },
          q
        );
      },
      count: function (g) {
        var U = 0;
        return (
          w(g, function () {
            U++;
          }),
          U
        );
      },
      toArray: function (g) {
        return (
          w(g, function (U) {
            return U;
          }) || []
        );
      },
      only: function (g) {
        if (!ne(g))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return g;
      },
    };
  return (
    ($.Activity = T),
    ($.Children = pt),
    ($.Component = X),
    ($.Fragment = r),
    ($.Profiler = d),
    ($.PureComponent = W),
    ($.StrictMode = f),
    ($.Suspense = S),
    ($.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = tt),
    ($.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (g) {
        return tt.H.useMemoCache(g);
      },
    }),
    ($.cache = function (g) {
      return function () {
        return g.apply(null, arguments);
      };
    }),
    ($.cacheSignal = function () {
      return null;
    }),
    ($.cloneElement = function (g, U, q) {
      if (g == null)
        throw Error(
          "The argument must be a React element, but you passed " + g + "."
        );
      var G = Z({}, g.props),
        I = g.key;
      if (U != null)
        for (lt in (U.key !== void 0 && (I = "" + U.key), U))
          !Yt.call(U, lt) ||
            lt === "key" ||
            lt === "__self" ||
            lt === "__source" ||
            (lt === "ref" && U.ref === void 0) ||
            (G[lt] = U[lt]);
      var lt = arguments.length - 2;
      if (lt === 1) G.children = q;
      else if (1 < lt) {
        for (var rt = Array(lt), Jt = 0; Jt < lt; Jt++)
          rt[Jt] = arguments[Jt + 2];
        G.children = rt;
      }
      return _t(g.type, I, G);
    }),
    ($.createContext = function (g) {
      return (
        (g = {
          $$typeof: b,
          _currentValue: g,
          _currentValue2: g,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (g.Provider = g),
        (g.Consumer = { $$typeof: v, _context: g }),
        g
      );
    }),
    ($.createElement = function (g, U, q) {
      var G,
        I = {},
        lt = null;
      if (U != null)
        for (G in (U.key !== void 0 && (lt = "" + U.key), U))
          Yt.call(U, G) &&
            G !== "key" &&
            G !== "__self" &&
            G !== "__source" &&
            (I[G] = U[G]);
      var rt = arguments.length - 2;
      if (rt === 1) I.children = q;
      else if (1 < rt) {
        for (var Jt = Array(rt), Nt = 0; Nt < rt; Nt++)
          Jt[Nt] = arguments[Nt + 2];
        I.children = Jt;
      }
      if (g && g.defaultProps)
        for (G in ((rt = g.defaultProps), rt))
          I[G] === void 0 && (I[G] = rt[G]);
      return _t(g, lt, I);
    }),
    ($.createRef = function () {
      return { current: null };
    }),
    ($.forwardRef = function (g) {
      return { $$typeof: O, render: g };
    }),
    ($.isValidElement = ne),
    ($.lazy = function (g) {
      return { $$typeof: N, _payload: { _status: -1, _result: g }, _init: F };
    }),
    ($.memo = function (g, U) {
      return { $$typeof: h, type: g, compare: U === void 0 ? null : U };
    }),
    ($.startTransition = function (g) {
      var U = tt.T,
        q = {};
      tt.T = q;
      try {
        var G = g(),
          I = tt.S;
        I !== null && I(q, G),
          typeof G == "object" &&
            G !== null &&
            typeof G.then == "function" &&
            G.then(Ht, ht);
      } catch (lt) {
        ht(lt);
      } finally {
        U !== null && q.types !== null && (U.types = q.types), (tt.T = U);
      }
    }),
    ($.unstable_useCacheRefresh = function () {
      return tt.H.useCacheRefresh();
    }),
    ($.use = function (g) {
      return tt.H.use(g);
    }),
    ($.useActionState = function (g, U, q) {
      return tt.H.useActionState(g, U, q);
    }),
    ($.useCallback = function (g, U) {
      return tt.H.useCallback(g, U);
    }),
    ($.useContext = function (g) {
      return tt.H.useContext(g);
    }),
    ($.useDebugValue = function () {}),
    ($.useDeferredValue = function (g, U) {
      return tt.H.useDeferredValue(g, U);
    }),
    ($.useEffect = function (g, U) {
      return tt.H.useEffect(g, U);
    }),
    ($.useEffectEvent = function (g) {
      return tt.H.useEffectEvent(g);
    }),
    ($.useId = function () {
      return tt.H.useId();
    }),
    ($.useImperativeHandle = function (g, U, q) {
      return tt.H.useImperativeHandle(g, U, q);
    }),
    ($.useInsertionEffect = function (g, U) {
      return tt.H.useInsertionEffect(g, U);
    }),
    ($.useLayoutEffect = function (g, U) {
      return tt.H.useLayoutEffect(g, U);
    }),
    ($.useMemo = function (g, U) {
      return tt.H.useMemo(g, U);
    }),
    ($.useOptimistic = function (g, U) {
      return tt.H.useOptimistic(g, U);
    }),
    ($.useReducer = function (g, U, q) {
      return tt.H.useReducer(g, U, q);
    }),
    ($.useRef = function (g) {
      return tt.H.useRef(g);
    }),
    ($.useState = function (g) {
      return tt.H.useState(g);
    }),
    ($.useSyncExternalStore = function (g, U, q) {
      return tt.H.useSyncExternalStore(g, U, q);
    }),
    ($.useTransition = function () {
      return tt.H.useTransition();
    }),
    ($.version = "19.2.0"),
    $
  );
}
var em;
function Qf() {
  return em || ((em = 1), (Rf.exports = av())), Rf.exports;
}
var _ = Qf(),
  Df = { exports: {} },
  jn = {},
  jf = { exports: {} },
  Uf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lm;
function nv() {
  return (
    lm ||
      ((lm = 1),
      (function (c) {
        function o(R, w) {
          var F = R.length;
          R.push(w);
          t: for (; 0 < F; ) {
            var ht = (F - 1) >>> 1,
              pt = R[ht];
            if (0 < d(pt, w)) (R[ht] = w), (R[F] = pt), (F = ht);
            else break t;
          }
        }
        function r(R) {
          return R.length === 0 ? null : R[0];
        }
        function f(R) {
          if (R.length === 0) return null;
          var w = R[0],
            F = R.pop();
          if (F !== w) {
            R[0] = F;
            t: for (var ht = 0, pt = R.length, g = pt >>> 1; ht < g; ) {
              var U = 2 * (ht + 1) - 1,
                q = R[U],
                G = U + 1,
                I = R[G];
              if (0 > d(q, F))
                G < pt && 0 > d(I, q)
                  ? ((R[ht] = I), (R[G] = F), (ht = G))
                  : ((R[ht] = q), (R[U] = F), (ht = U));
              else if (G < pt && 0 > d(I, F)) (R[ht] = I), (R[G] = F), (ht = G);
              else break t;
            }
          }
          return w;
        }
        function d(R, w) {
          var F = R.sortIndex - w.sortIndex;
          return F !== 0 ? F : R.id - w.id;
        }
        if (
          ((c.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var v = performance;
          c.unstable_now = function () {
            return v.now();
          };
        } else {
          var b = Date,
            O = b.now();
          c.unstable_now = function () {
            return b.now() - O;
          };
        }
        var S = [],
          h = [],
          N = 1,
          T = null,
          B = 3,
          Y = !1,
          H = !1,
          Z = !1,
          K = !1,
          X = typeof setTimeout == "function" ? setTimeout : null,
          Q = typeof clearTimeout == "function" ? clearTimeout : null,
          W = typeof setImmediate < "u" ? setImmediate : null;
        function xt(R) {
          for (var w = r(h); w !== null; ) {
            if (w.callback === null) f(h);
            else if (w.startTime <= R)
              f(h), (w.sortIndex = w.expirationTime), o(S, w);
            else break;
            w = r(h);
          }
        }
        function Tt(R) {
          if (((Z = !1), xt(R), !H))
            if (r(S) !== null) (H = !0), Ht || ((Ht = !0), Ft());
            else {
              var w = r(h);
              w !== null && Te(Tt, w.startTime - R);
            }
        }
        var Ht = !1,
          tt = -1,
          Yt = 5,
          _t = -1;
        function ae() {
          return K ? !0 : !(c.unstable_now() - _t < Yt);
        }
        function ne() {
          if (((K = !1), Ht)) {
            var R = c.unstable_now();
            _t = R;
            var w = !0;
            try {
              t: {
                (H = !1), Z && ((Z = !1), Q(tt), (tt = -1)), (Y = !0);
                var F = B;
                try {
                  e: {
                    for (
                      xt(R), T = r(S);
                      T !== null && !(T.expirationTime > R && ae());

                    ) {
                      var ht = T.callback;
                      if (typeof ht == "function") {
                        (T.callback = null), (B = T.priorityLevel);
                        var pt = ht(T.expirationTime <= R);
                        if (((R = c.unstable_now()), typeof pt == "function")) {
                          (T.callback = pt), xt(R), (w = !0);
                          break e;
                        }
                        T === r(S) && f(S), xt(R);
                      } else f(S);
                      T = r(S);
                    }
                    if (T !== null) w = !0;
                    else {
                      var g = r(h);
                      g !== null && Te(Tt, g.startTime - R), (w = !1);
                    }
                  }
                  break t;
                } finally {
                  (T = null), (B = F), (Y = !1);
                }
                w = void 0;
              }
            } finally {
              w ? Ft() : (Ht = !1);
            }
          }
        }
        var Ft;
        if (typeof W == "function")
          Ft = function () {
            W(ne);
          };
        else if (typeof MessageChannel < "u") {
          var Cl = new MessageChannel(),
            Be = Cl.port2;
          (Cl.port1.onmessage = ne),
            (Ft = function () {
              Be.postMessage(null);
            });
        } else
          Ft = function () {
            X(ne, 0);
          };
        function Te(R, w) {
          tt = X(function () {
            R(c.unstable_now());
          }, w);
        }
        (c.unstable_IdlePriority = 5),
          (c.unstable_ImmediatePriority = 1),
          (c.unstable_LowPriority = 4),
          (c.unstable_NormalPriority = 3),
          (c.unstable_Profiling = null),
          (c.unstable_UserBlockingPriority = 2),
          (c.unstable_cancelCallback = function (R) {
            R.callback = null;
          }),
          (c.unstable_forceFrameRate = function (R) {
            0 > R || 125 < R
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Yt = 0 < R ? Math.floor(1e3 / R) : 5);
          }),
          (c.unstable_getCurrentPriorityLevel = function () {
            return B;
          }),
          (c.unstable_next = function (R) {
            switch (B) {
              case 1:
              case 2:
              case 3:
                var w = 3;
                break;
              default:
                w = B;
            }
            var F = B;
            B = w;
            try {
              return R();
            } finally {
              B = F;
            }
          }),
          (c.unstable_requestPaint = function () {
            K = !0;
          }),
          (c.unstable_runWithPriority = function (R, w) {
            switch (R) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                R = 3;
            }
            var F = B;
            B = R;
            try {
              return w();
            } finally {
              B = F;
            }
          }),
          (c.unstable_scheduleCallback = function (R, w, F) {
            var ht = c.unstable_now();
            switch (
              (typeof F == "object" && F !== null
                ? ((F = F.delay),
                  (F = typeof F == "number" && 0 < F ? ht + F : ht))
                : (F = ht),
              R)
            ) {
              case 1:
                var pt = -1;
                break;
              case 2:
                pt = 250;
                break;
              case 5:
                pt = 1073741823;
                break;
              case 4:
                pt = 1e4;
                break;
              default:
                pt = 5e3;
            }
            return (
              (pt = F + pt),
              (R = {
                id: N++,
                callback: w,
                priorityLevel: R,
                startTime: F,
                expirationTime: pt,
                sortIndex: -1,
              }),
              F > ht
                ? ((R.sortIndex = F),
                  o(h, R),
                  r(S) === null &&
                    R === r(h) &&
                    (Z ? (Q(tt), (tt = -1)) : (Z = !0), Te(Tt, F - ht)))
                : ((R.sortIndex = pt),
                  o(S, R),
                  H || Y || ((H = !0), Ht || ((Ht = !0), Ft()))),
              R
            );
          }),
          (c.unstable_shouldYield = ae),
          (c.unstable_wrapCallback = function (R) {
            var w = B;
            return function () {
              var F = B;
              B = w;
              try {
                return R.apply(this, arguments);
              } finally {
                B = F;
              }
            };
          });
      })(Uf)),
    Uf
  );
}
var am;
function uv() {
  return am || ((am = 1), (jf.exports = nv())), jf.exports;
}
var Bf = { exports: {} },
  Kt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nm;
function iv() {
  if (nm) return Kt;
  nm = 1;
  var c = Qf();
  function o(S) {
    var h = "https://react.dev/errors/" + S;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var N = 2; N < arguments.length; N++)
        h += "&args[]=" + encodeURIComponent(arguments[N]);
    }
    return (
      "Minified React error #" +
      S +
      "; visit " +
      h +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var f = {
      d: {
        f: r,
        r: function () {
          throw Error(o(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    d = Symbol.for("react.portal");
  function v(S, h, N) {
    var T =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: T == null ? null : "" + T,
      children: S,
      containerInfo: h,
      implementation: N,
    };
  }
  var b = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function O(S, h) {
    if (S === "font") return "";
    if (typeof h == "string") return h === "use-credentials" ? h : "";
  }
  return (
    (Kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
    (Kt.createPortal = function (S, h) {
      var N =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11))
        throw Error(o(299));
      return v(S, h, null, N);
    }),
    (Kt.flushSync = function (S) {
      var h = b.T,
        N = f.p;
      try {
        if (((b.T = null), (f.p = 2), S)) return S();
      } finally {
        (b.T = h), (f.p = N), f.d.f();
      }
    }),
    (Kt.preconnect = function (S, h) {
      typeof S == "string" &&
        (h
          ? ((h = h.crossOrigin),
            (h =
              typeof h == "string"
                ? h === "use-credentials"
                  ? h
                  : ""
                : void 0))
          : (h = null),
        f.d.C(S, h));
    }),
    (Kt.prefetchDNS = function (S) {
      typeof S == "string" && f.d.D(S);
    }),
    (Kt.preinit = function (S, h) {
      if (typeof S == "string" && h && typeof h.as == "string") {
        var N = h.as,
          T = O(N, h.crossOrigin),
          B = typeof h.integrity == "string" ? h.integrity : void 0,
          Y = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
        N === "style"
          ? f.d.S(S, typeof h.precedence == "string" ? h.precedence : void 0, {
              crossOrigin: T,
              integrity: B,
              fetchPriority: Y,
            })
          : N === "script" &&
            f.d.X(S, {
              crossOrigin: T,
              integrity: B,
              fetchPriority: Y,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
      }
    }),
    (Kt.preinitModule = function (S, h) {
      if (typeof S == "string")
        if (typeof h == "object" && h !== null) {
          if (h.as == null || h.as === "script") {
            var N = O(h.as, h.crossOrigin);
            f.d.M(S, {
              crossOrigin: N,
              integrity: typeof h.integrity == "string" ? h.integrity : void 0,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
          }
        } else h == null && f.d.M(S);
    }),
    (Kt.preload = function (S, h) {
      if (
        typeof S == "string" &&
        typeof h == "object" &&
        h !== null &&
        typeof h.as == "string"
      ) {
        var N = h.as,
          T = O(N, h.crossOrigin);
        f.d.L(S, N, {
          crossOrigin: T,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          nonce: typeof h.nonce == "string" ? h.nonce : void 0,
          type: typeof h.type == "string" ? h.type : void 0,
          fetchPriority:
            typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
          referrerPolicy:
            typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
          imageSrcSet:
            typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
          imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
          media: typeof h.media == "string" ? h.media : void 0,
        });
      }
    }),
    (Kt.preloadModule = function (S, h) {
      if (typeof S == "string")
        if (h) {
          var N = O(h.as, h.crossOrigin);
          f.d.m(S, {
            as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
            crossOrigin: N,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          });
        } else f.d.m(S);
    }),
    (Kt.requestFormReset = function (S) {
      f.d.r(S);
    }),
    (Kt.unstable_batchedUpdates = function (S, h) {
      return S(h);
    }),
    (Kt.useFormState = function (S, h, N) {
      return b.H.useFormState(S, h, N);
    }),
    (Kt.useFormStatus = function () {
      return b.H.useHostTransitionStatus();
    }),
    (Kt.version = "19.2.0"),
    Kt
  );
}
var um;
function cv() {
  if (um) return Bf.exports;
  um = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (o) {
        console.error(o);
      }
  }
  return c(), (Bf.exports = iv()), Bf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var im;
function fv() {
  if (im) return jn;
  im = 1;
  var c = uv(),
    o = Qf(),
    r = cv();
  function f(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function d(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function v(t) {
    var e = t,
      l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function b(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function O(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function S(t) {
    if (v(t) !== t) throw Error(f(188));
  }
  function h(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = v(t)), e === null)) throw Error(f(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return S(n), t;
          if (u === a) return S(n), e;
          u = u.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== a.return) (l = n), (a = u);
      else {
        for (var i = !1, s = n.child; s; ) {
          if (s === l) {
            (i = !0), (l = n), (a = u);
            break;
          }
          if (s === a) {
            (i = !0), (a = n), (l = u);
            break;
          }
          s = s.sibling;
        }
        if (!i) {
          for (s = u.child; s; ) {
            if (s === l) {
              (i = !0), (l = u), (a = n);
              break;
            }
            if (s === a) {
              (i = !0), (a = u), (l = n);
              break;
            }
            s = s.sibling;
          }
          if (!i) throw Error(f(189));
        }
      }
      if (l.alternate !== a) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? t : e;
  }
  function N(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = N(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var T = Object.assign,
    B = Symbol.for("react.element"),
    Y = Symbol.for("react.transitional.element"),
    H = Symbol.for("react.portal"),
    Z = Symbol.for("react.fragment"),
    K = Symbol.for("react.strict_mode"),
    X = Symbol.for("react.profiler"),
    Q = Symbol.for("react.consumer"),
    W = Symbol.for("react.context"),
    xt = Symbol.for("react.forward_ref"),
    Tt = Symbol.for("react.suspense"),
    Ht = Symbol.for("react.suspense_list"),
    tt = Symbol.for("react.memo"),
    Yt = Symbol.for("react.lazy"),
    _t = Symbol.for("react.activity"),
    ae = Symbol.for("react.memo_cache_sentinel"),
    ne = Symbol.iterator;
  function Ft(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (ne && t[ne]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Cl = Symbol.for("react.client.reference");
  function Be(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Cl ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case Z:
        return "Fragment";
      case X:
        return "Profiler";
      case K:
        return "StrictMode";
      case Tt:
        return "Suspense";
      case Ht:
        return "SuspenseList";
      case _t:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case H:
          return "Portal";
        case W:
          return t.displayName || "Context";
        case Q:
          return (t._context.displayName || "Context") + ".Consumer";
        case xt:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case tt:
          return (
            (e = t.displayName || null), e !== null ? e : Be(t.type) || "Memo"
          );
        case Yt:
          (e = t._payload), (t = t._init);
          try {
            return Be(t(e));
          } catch {}
      }
    return null;
  }
  var Te = Array.isArray,
    R = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    w = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    F = { pending: !1, data: null, method: null, action: null },
    ht = [],
    pt = -1;
  function g(t) {
    return { current: t };
  }
  function U(t) {
    0 > pt || ((t.current = ht[pt]), (ht[pt] = null), pt--);
  }
  function q(t, e) {
    pt++, (ht[pt] = t.current), (t.current = e);
  }
  var G = g(null),
    I = g(null),
    lt = g(null),
    rt = g(null);
  function Jt(t, e) {
    switch ((q(lt, e), q(I, t), q(G, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Ad(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = Ad(e)), (t = xd(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    U(G), q(G, t);
  }
  function Nt() {
    U(G), U(I), U(lt);
  }
  function wa(t) {
    t.memoizedState !== null && q(rt, t);
    var e = G.current,
      l = xd(e, t.type);
    e !== l && (q(I, t), q(G, l));
  }
  function Zn(t) {
    I.current === t && (U(G), U(I)),
      rt.current === t && (U(rt), (Mn._currentValue = F));
  }
  var ri, Wf;
  function Rl(t) {
    if (ri === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        (ri = (e && e[1]) || ""),
          (Wf =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      ri +
      t +
      Wf
    );
  }
  var di = !1;
  function mi(t, e) {
    if (!t || di) return "";
    di = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var j = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(j.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(j, []);
                } catch (M) {
                  var z = M;
                }
                Reflect.construct(t, [], j);
              } else {
                try {
                  j.call();
                } catch (M) {
                  z = M;
                }
                t.call(j.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                z = M;
              }
              (j = t()) &&
                typeof j.catch == "function" &&
                j.catch(function () {});
            }
          } catch (M) {
            if (M && z && typeof M.stack == "string") return [M.stack, z.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = a.DetermineComponentFrameRoot(),
        i = u[0],
        s = u[1];
      if (i && s) {
        var m = i.split(`
`),
          E = s.split(`
`);
        for (
          n = a = 0;
          a < m.length && !m[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; n < E.length && !E[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === m.length || n === E.length)
          for (
            a = m.length - 1, n = E.length - 1;
            1 <= a && 0 <= n && m[a] !== E[n];

          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (m[a] !== E[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || m[a] !== E[n])) {
                  var C =
                    `
` + m[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      C.includes("<anonymous>") &&
                      (C = C.replace("<anonymous>", t.displayName)),
                    C
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      (di = !1), (Error.prepareStackTrace = l);
    }
    return (l = t ? t.displayName || t.name : "") ? Rl(l) : "";
  }
  function Dm(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Rl(t.type);
      case 16:
        return Rl("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? Rl("Suspense Fallback")
          : Rl("Suspense");
      case 19:
        return Rl("SuspenseList");
      case 0:
      case 15:
        return mi(t.type, !1);
      case 11:
        return mi(t.type.render, !1);
      case 1:
        return mi(t.type, !0);
      case 31:
        return Rl("Activity");
      default:
        return "";
    }
  }
  function $f(t) {
    try {
      var e = "",
        l = null;
      do (e += Dm(t, l)), (l = t), (t = t.return);
      while (t);
      return e;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var hi = Object.prototype.hasOwnProperty,
    yi = c.unstable_scheduleCallback,
    vi = c.unstable_cancelCallback,
    jm = c.unstable_shouldYield,
    Um = c.unstable_requestPaint,
    ue = c.unstable_now,
    Bm = c.unstable_getCurrentPriorityLevel,
    If = c.unstable_ImmediatePriority,
    Pf = c.unstable_UserBlockingPriority,
    Ln = c.unstable_NormalPriority,
    Hm = c.unstable_LowPriority,
    ts = c.unstable_IdlePriority,
    Ym = c.log,
    wm = c.unstable_setDisableYieldValue,
    qa = null,
    ie = null;
  function al(t) {
    if (
      (typeof Ym == "function" && wm(t),
      ie && typeof ie.setStrictMode == "function")
    )
      try {
        ie.setStrictMode(qa, t);
      } catch {}
  }
  var ce = Math.clz32 ? Math.clz32 : Lm,
    qm = Math.log,
    Zm = Math.LN2;
  function Lm(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((qm(t) / Zm) | 0)) | 0;
  }
  var Gn = 256,
    Xn = 262144,
    Qn = 4194304;
  function Dl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Vn(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = t.suspendedLanes,
      i = t.pingedLanes;
    t = t.warmLanes;
    var s = a & 134217727;
    return (
      s !== 0
        ? ((a = s & ~u),
          a !== 0
            ? (n = Dl(a))
            : ((i &= s),
              i !== 0
                ? (n = Dl(i))
                : l || ((l = s & ~t), l !== 0 && (n = Dl(l)))))
        : ((s = a & ~u),
          s !== 0
            ? (n = Dl(s))
            : i !== 0
            ? (n = Dl(i))
            : l || ((l = a & ~t), l !== 0 && (n = Dl(l)))),
      n === 0
        ? 0
        : e !== 0 &&
          e !== n &&
          (e & u) === 0 &&
          ((u = n & -n),
          (l = e & -e),
          u >= l || (u === 32 && (l & 4194048) !== 0))
        ? e
        : n
    );
  }
  function Za(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Gm(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function es() {
    var t = Qn;
    return (Qn <<= 1), (Qn & 62914560) === 0 && (Qn = 4194304), t;
  }
  function gi(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function La(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function Xm(t, e, l, a, n, u) {
    var i = t.pendingLanes;
    (t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0);
    var s = t.entanglements,
      m = t.expirationTimes,
      E = t.hiddenUpdates;
    for (l = i & ~l; 0 < l; ) {
      var C = 31 - ce(l),
        j = 1 << C;
      (s[C] = 0), (m[C] = -1);
      var z = E[C];
      if (z !== null)
        for (E[C] = null, C = 0; C < z.length; C++) {
          var M = z[C];
          M !== null && (M.lane &= -536870913);
        }
      l &= ~j;
    }
    a !== 0 && ls(t, a, 0),
      u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e));
  }
  function ls(t, e, l) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var a = 31 - ce(e);
    (t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 261930));
  }
  function as(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var a = 31 - ce(l),
        n = 1 << a;
      (n & e) | (t[a] & e) && (t[a] |= e), (l &= ~n);
    }
  }
  function ns(t, e) {
    var l = e & -e;
    return (
      (l = (l & 42) !== 0 ? 1 : pi(l)),
      (l & (t.suspendedLanes | e)) !== 0 ? 0 : l
    );
  }
  function pi(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function bi(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function us() {
    var t = w.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Vd(t.type));
  }
  function is(t, e) {
    var l = w.p;
    try {
      return (w.p = t), e();
    } finally {
      w.p = l;
    }
  }
  var nl = Math.random().toString(36).slice(2),
    Lt = "__reactFiber$" + nl,
    Wt = "__reactProps$" + nl,
    $l = "__reactContainer$" + nl,
    Si = "__reactEvents$" + nl,
    Qm = "__reactListeners$" + nl,
    Vm = "__reactHandles$" + nl,
    cs = "__reactResources$" + nl,
    Ga = "__reactMarker$" + nl;
  function Ai(t) {
    delete t[Lt], delete t[Wt], delete t[Si], delete t[Qm], delete t[Vm];
  }
  function Il(t) {
    var e = t[Lt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[$l] || l[Lt])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = Nd(t); t !== null; ) {
            if ((l = t[Lt])) return l;
            t = Nd(t);
          }
        return e;
      }
      (t = l), (l = t.parentNode);
    }
    return null;
  }
  function Pl(t) {
    if ((t = t[Lt] || t[$l])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function Xa(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(f(33));
  }
  function ta(t) {
    var e = t[cs];
    return (
      e ||
        (e = t[cs] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function qt(t) {
    t[Ga] = !0;
  }
  var fs = new Set(),
    ss = {};
  function jl(t, e) {
    ea(t, e), ea(t + "Capture", e);
  }
  function ea(t, e) {
    for (ss[t] = e, t = 0; t < e.length; t++) fs.add(e[t]);
  }
  var Km = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    os = {},
    rs = {};
  function Jm(t) {
    return hi.call(rs, t)
      ? !0
      : hi.call(os, t)
      ? !1
      : Km.test(t)
      ? (rs[t] = !0)
      : ((os[t] = !0), !1);
  }
  function Kn(t, e, l) {
    if (Jm(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function Jn(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function He(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  function ye(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function ds(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function km(t, e, l) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var n = a.get,
        u = a.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (i) {
            (l = "" + i), u.call(this, i);
          },
        }),
        Object.defineProperty(t, e, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (i) {
            l = "" + i;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function xi(t) {
    if (!t._valueTracker) {
      var e = ds(t) ? "checked" : "value";
      t._valueTracker = km(t, e, "" + t[e]);
    }
  }
  function ms(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      a = "";
    return (
      t && (a = ds(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function kn(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Fm = /[\n"\\]/g;
  function ve(t) {
    return t.replace(Fm, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Ei(t, e, l, a, n, u, i, s) {
    (t.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (t.type = i)
        : t.removeAttribute("type"),
      e != null
        ? i === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + ye(e))
          : t.value !== "" + ye(e) && (t.value = "" + ye(e))
        : (i !== "submit" && i !== "reset") || t.removeAttribute("value"),
      e != null
        ? zi(t, i, ye(e))
        : l != null
        ? zi(t, i, ye(l))
        : a != null && t.removeAttribute("value"),
      n == null && u != null && (t.defaultChecked = !!u),
      n != null &&
        (t.checked = n && typeof n != "function" && typeof n != "symbol"),
      s != null &&
      typeof s != "function" &&
      typeof s != "symbol" &&
      typeof s != "boolean"
        ? (t.name = "" + ye(s))
        : t.removeAttribute("name");
  }
  function hs(t, e, l, a, n, u, i, s) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (t.type = u),
      e != null || l != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || e != null)) {
        xi(t);
        return;
      }
      (l = l != null ? "" + ye(l) : ""),
        (e = e != null ? "" + ye(e) : l),
        s || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = s ? t.checked : !!a),
      (t.defaultChecked = !!a),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (t.name = i),
      xi(t);
  }
  function zi(t, e, l) {
    (e === "number" && kn(t.ownerDocument) === t) ||
      t.defaultValue === "" + l ||
      (t.defaultValue = "" + l);
  }
  function la(t, e, l, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var n = 0; n < l.length; n++) e["$" + l[n]] = !0;
      for (l = 0; l < t.length; l++)
        (n = e.hasOwnProperty("$" + t[l].value)),
          t[l].selected !== n && (t[l].selected = n),
          n && a && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + ye(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          (t[n].selected = !0), a && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function ys(t, e, l) {
    if (
      e != null &&
      ((e = "" + ye(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + ye(l) : "";
  }
  function vs(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(f(92));
        if (Te(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), (e = l);
    }
    (l = ye(e)),
      (t.defaultValue = l),
      (a = t.textContent),
      a === l && a !== "" && a !== null && (t.value = a),
      xi(t);
  }
  function aa(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Wm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function gs(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : a
      ? t.setProperty(e, l)
      : typeof l != "number" || l === 0 || Wm.has(e)
      ? e === "float"
        ? (t.cssFloat = l)
        : (t[e] = ("" + l).trim())
      : (t[e] = l + "px");
  }
  function ps(t, e, l) {
    if (e != null && typeof e != "object") throw Error(f(62));
    if (((t = t.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
            ? (t.cssFloat = "")
            : (t[a] = ""));
      for (var n in e)
        (a = e[n]), e.hasOwnProperty(n) && l[n] !== a && gs(t, n, a);
    } else for (var u in e) e.hasOwnProperty(u) && gs(t, u, e[u]);
  }
  function Ti(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var $m = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Im =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Fn(t) {
    return Im.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Ye() {}
  var _i = null;
  function Oi(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var na = null,
    ua = null;
  function bs(t) {
    var e = Pl(t);
    if (e && (t = e.stateNode)) {
      var l = t[Wt] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Ei(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (e = l.name),
            l.type === "radio" && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + ve("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[Wt] || null;
                if (!n) throw Error(f(90));
                Ei(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              (a = l[e]), a.form === t.form && ms(a);
          }
          break t;
        case "textarea":
          ys(t, l.value, l.defaultValue);
          break t;
        case "select":
          (e = l.value), e != null && la(t, !!l.multiple, e, !1);
      }
    }
  }
  var Mi = !1;
  function Ss(t, e, l) {
    if (Mi) return t(e, l);
    Mi = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((Mi = !1),
        (na !== null || ua !== null) &&
          (Hu(), na && ((e = na), (t = ua), (ua = na = null), bs(e), t)))
      )
        for (e = 0; e < t.length; e++) bs(t[e]);
    }
  }
  function Qa(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[Wt] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(f(231, e, typeof l));
    return l;
  }
  var we = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Ni = !1;
  if (we)
    try {
      var Va = {};
      Object.defineProperty(Va, "passive", {
        get: function () {
          Ni = !0;
        },
      }),
        window.addEventListener("test", Va, Va),
        window.removeEventListener("test", Va, Va);
    } catch {
      Ni = !1;
    }
  var ul = null,
    Ci = null,
    Wn = null;
  function As() {
    if (Wn) return Wn;
    var t,
      e = Ci,
      l = e.length,
      a,
      n = "value" in ul ? ul.value : ul.textContent,
      u = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++);
    var i = l - t;
    for (a = 1; a <= i && e[l - a] === n[u - a]; a++);
    return (Wn = n.slice(t, 1 < a ? 1 - a : void 0));
  }
  function $n(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function In() {
    return !0;
  }
  function xs() {
    return !1;
  }
  function $t(t) {
    function e(l, a, n, u, i) {
      (this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null);
      for (var s in t)
        t.hasOwnProperty(s) && ((l = t[s]), (this[s] = l ? l(u) : u[s]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? In
          : xs),
        (this.isPropagationStopped = xs),
        this
      );
    }
    return (
      T(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = In));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = In));
        },
        persist: function () {},
        isPersistent: In,
      }),
      e
    );
  }
  var Ul = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Pn = $t(Ul),
    Ka = T({}, Ul, { view: 0, detail: 0 }),
    Pm = $t(Ka),
    Ri,
    Di,
    Ja,
    tu = T({}, Ka, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ui,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Ja &&
              (Ja && t.type === "mousemove"
                ? ((Ri = t.screenX - Ja.screenX), (Di = t.screenY - Ja.screenY))
                : (Di = Ri = 0),
              (Ja = t)),
            Ri);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Di;
      },
    }),
    Es = $t(tu),
    th = T({}, tu, { dataTransfer: 0 }),
    eh = $t(th),
    lh = T({}, Ka, { relatedTarget: 0 }),
    ji = $t(lh),
    ah = T({}, Ul, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    nh = $t(ah),
    uh = T({}, Ul, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    ih = $t(uh),
    ch = T({}, Ul, { data: 0 }),
    zs = $t(ch),
    fh = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    sh = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    oh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function rh(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = oh[t])
      ? !!e[t]
      : !1;
  }
  function Ui() {
    return rh;
  }
  var dh = T({}, Ka, {
      key: function (t) {
        if (t.key) {
          var e = fh[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = $n(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? sh[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ui,
      charCode: function (t) {
        return t.type === "keypress" ? $n(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? $n(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    mh = $t(dh),
    hh = T({}, tu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Ts = $t(hh),
    yh = T({}, Ka, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ui,
    }),
    vh = $t(yh),
    gh = T({}, Ul, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ph = $t(gh),
    bh = T({}, tu, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Sh = $t(bh),
    Ah = T({}, Ul, { newState: 0, oldState: 0 }),
    xh = $t(Ah),
    Eh = [9, 13, 27, 32],
    Bi = we && "CompositionEvent" in window,
    ka = null;
  we && "documentMode" in document && (ka = document.documentMode);
  var zh = we && "TextEvent" in window && !ka,
    _s = we && (!Bi || (ka && 8 < ka && 11 >= ka)),
    Os = " ",
    Ms = !1;
  function Ns(t, e) {
    switch (t) {
      case "keyup":
        return Eh.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Cs(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var ia = !1;
  function Th(t, e) {
    switch (t) {
      case "compositionend":
        return Cs(e);
      case "keypress":
        return e.which !== 32 ? null : ((Ms = !0), Os);
      case "textInput":
        return (t = e.data), t === Os && Ms ? null : t;
      default:
        return null;
    }
  }
  function _h(t, e) {
    if (ia)
      return t === "compositionend" || (!Bi && Ns(t, e))
        ? ((t = As()), (Wn = Ci = ul = null), (ia = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return _s && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Oh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Rs(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Oh[t.type] : e === "textarea";
  }
  function Ds(t, e, l, a) {
    na ? (ua ? ua.push(a) : (ua = [a])) : (na = a),
      (e = Xu(e, "onChange")),
      0 < e.length &&
        ((l = new Pn("onChange", "change", null, l, a)),
        t.push({ event: l, listeners: e }));
  }
  var Fa = null,
    Wa = null;
  function Mh(t) {
    yd(t, 0);
  }
  function eu(t) {
    var e = Xa(t);
    if (ms(e)) return t;
  }
  function js(t, e) {
    if (t === "change") return e;
  }
  var Us = !1;
  if (we) {
    var Hi;
    if (we) {
      var Yi = "oninput" in document;
      if (!Yi) {
        var Bs = document.createElement("div");
        Bs.setAttribute("oninput", "return;"),
          (Yi = typeof Bs.oninput == "function");
      }
      Hi = Yi;
    } else Hi = !1;
    Us = Hi && (!document.documentMode || 9 < document.documentMode);
  }
  function Hs() {
    Fa && (Fa.detachEvent("onpropertychange", Ys), (Wa = Fa = null));
  }
  function Ys(t) {
    if (t.propertyName === "value" && eu(Wa)) {
      var e = [];
      Ds(e, Wa, t, Oi(t)), Ss(Mh, e);
    }
  }
  function Nh(t, e, l) {
    t === "focusin"
      ? (Hs(), (Fa = e), (Wa = l), Fa.attachEvent("onpropertychange", Ys))
      : t === "focusout" && Hs();
  }
  function Ch(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return eu(Wa);
  }
  function Rh(t, e) {
    if (t === "click") return eu(e);
  }
  function Dh(t, e) {
    if (t === "input" || t === "change") return eu(e);
  }
  function jh(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var fe = typeof Object.is == "function" ? Object.is : jh;
  function $a(t, e) {
    if (fe(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var l = Object.keys(t),
      a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!hi.call(e, n) || !fe(t[n], e[n])) return !1;
    }
    return !0;
  }
  function ws(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function qs(t, e) {
    var l = ws(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = t + l.textContent.length), t <= e && a >= e))
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = ws(l);
    }
  }
  function Zs(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? Zs(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function Ls(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = kn(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = kn(t.document);
    }
    return e;
  }
  function wi(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var Uh = we && "documentMode" in document && 11 >= document.documentMode,
    ca = null,
    qi = null,
    Ia = null,
    Zi = !1;
  function Gs(t, e, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Zi ||
      ca == null ||
      ca !== kn(a) ||
      ((a = ca),
      "selectionStart" in a && wi(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Ia && $a(Ia, a)) ||
        ((Ia = a),
        (a = Xu(qi, "onSelect")),
        0 < a.length &&
          ((e = new Pn("onSelect", "select", null, e, l)),
          t.push({ event: e, listeners: a }),
          (e.target = ca))));
  }
  function Bl(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l["Webkit" + t] = "webkit" + e),
      (l["Moz" + t] = "moz" + e),
      l
    );
  }
  var fa = {
      animationend: Bl("Animation", "AnimationEnd"),
      animationiteration: Bl("Animation", "AnimationIteration"),
      animationstart: Bl("Animation", "AnimationStart"),
      transitionrun: Bl("Transition", "TransitionRun"),
      transitionstart: Bl("Transition", "TransitionStart"),
      transitioncancel: Bl("Transition", "TransitionCancel"),
      transitionend: Bl("Transition", "TransitionEnd"),
    },
    Li = {},
    Xs = {};
  we &&
    ((Xs = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete fa.animationend.animation,
      delete fa.animationiteration.animation,
      delete fa.animationstart.animation),
    "TransitionEvent" in window || delete fa.transitionend.transition);
  function Hl(t) {
    if (Li[t]) return Li[t];
    if (!fa[t]) return t;
    var e = fa[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in Xs) return (Li[t] = e[l]);
    return t;
  }
  var Qs = Hl("animationend"),
    Vs = Hl("animationiteration"),
    Ks = Hl("animationstart"),
    Bh = Hl("transitionrun"),
    Hh = Hl("transitionstart"),
    Yh = Hl("transitioncancel"),
    Js = Hl("transitionend"),
    ks = new Map(),
    Gi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Gi.push("scrollEnd");
  function _e(t, e) {
    ks.set(t, e), jl(e, [t]);
  }
  var lu =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    ge = [],
    sa = 0,
    Xi = 0;
  function au() {
    for (var t = sa, e = (Xi = sa = 0); e < t; ) {
      var l = ge[e];
      ge[e++] = null;
      var a = ge[e];
      ge[e++] = null;
      var n = ge[e];
      ge[e++] = null;
      var u = ge[e];
      if (((ge[e++] = null), a !== null && n !== null)) {
        var i = a.pending;
        i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
          (a.pending = n);
      }
      u !== 0 && Fs(l, n, u);
    }
  }
  function nu(t, e, l, a) {
    (ge[sa++] = t),
      (ge[sa++] = e),
      (ge[sa++] = l),
      (ge[sa++] = a),
      (Xi |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function Qi(t, e, l, a) {
    return nu(t, e, l, a), uu(t);
  }
  function Yl(t, e) {
    return nu(t, null, null, e), uu(t);
  }
  function Fs(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = t.return; u !== null; )
      (u.childLanes |= l),
        (a = u.alternate),
        a !== null && (a.childLanes |= l),
        u.tag === 22 &&
          ((t = u.stateNode), t === null || t._visibility & 1 || (n = !0)),
        (t = u),
        (u = u.return);
    return t.tag === 3
      ? ((u = t.stateNode),
        n &&
          e !== null &&
          ((n = 31 - ce(l)),
          (t = u.hiddenUpdates),
          (a = t[n]),
          a === null ? (t[n] = [e]) : a.push(e),
          (e.lane = l | 536870912)),
        u)
      : null;
  }
  function uu(t) {
    if (50 < An) throw ((An = 0), (Pc = null), Error(f(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var oa = {};
  function wh(t, e, l, a) {
    (this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function se(t, e, l, a) {
    return new wh(t, e, l, a);
  }
  function Vi(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function qe(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = se(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 65011712),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function Ws(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function iu(t, e, l, a, n, u) {
    var i = 0;
    if (((a = t), typeof t == "function")) Vi(t) && (i = 1);
    else if (typeof t == "string")
      i = Xy(t, l, G.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case _t:
          return (t = se(31, l, e, n)), (t.elementType = _t), (t.lanes = u), t;
        case Z:
          return wl(l.children, n, u, e);
        case K:
          (i = 8), (n |= 24);
          break;
        case X:
          return (
            (t = se(12, l, e, n | 2)), (t.elementType = X), (t.lanes = u), t
          );
        case Tt:
          return (t = se(13, l, e, n)), (t.elementType = Tt), (t.lanes = u), t;
        case Ht:
          return (t = se(19, l, e, n)), (t.elementType = Ht), (t.lanes = u), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case W:
                i = 10;
                break t;
              case Q:
                i = 9;
                break t;
              case xt:
                i = 11;
                break t;
              case tt:
                i = 14;
                break t;
              case Yt:
                (i = 16), (a = null);
                break t;
            }
          (i = 29),
            (l = Error(f(130, t === null ? "null" : typeof t, ""))),
            (a = null);
      }
    return (
      (e = se(i, l, e, n)), (e.elementType = t), (e.type = a), (e.lanes = u), e
    );
  }
  function wl(t, e, l, a) {
    return (t = se(7, t, a, e)), (t.lanes = l), t;
  }
  function Ki(t, e, l) {
    return (t = se(6, t, null, e)), (t.lanes = l), t;
  }
  function $s(t) {
    var e = se(18, null, null, 0);
    return (e.stateNode = t), e;
  }
  function Ji(t, e, l) {
    return (
      (e = se(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Is = new WeakMap();
  function pe(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Is.get(t);
      return l !== void 0
        ? l
        : ((e = { value: t, source: e, stack: $f(e) }), Is.set(t, e), e);
    }
    return { value: t, source: e, stack: $f(e) };
  }
  var ra = [],
    da = 0,
    cu = null,
    Pa = 0,
    be = [],
    Se = 0,
    il = null,
    Ne = 1,
    Ce = "";
  function Ze(t, e) {
    (ra[da++] = Pa), (ra[da++] = cu), (cu = t), (Pa = e);
  }
  function Ps(t, e, l) {
    (be[Se++] = Ne), (be[Se++] = Ce), (be[Se++] = il), (il = t);
    var a = Ne;
    t = Ce;
    var n = 32 - ce(a) - 1;
    (a &= ~(1 << n)), (l += 1);
    var u = 32 - ce(e) + n;
    if (30 < u) {
      var i = n - (n % 5);
      (u = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (n -= i),
        (Ne = (1 << (32 - ce(e) + n)) | (l << n) | a),
        (Ce = u + t);
    } else (Ne = (1 << u) | (l << n) | a), (Ce = t);
  }
  function ki(t) {
    t.return !== null && (Ze(t, 1), Ps(t, 1, 0));
  }
  function Fi(t) {
    for (; t === cu; )
      (cu = ra[--da]), (ra[da] = null), (Pa = ra[--da]), (ra[da] = null);
    for (; t === il; )
      (il = be[--Se]),
        (be[Se] = null),
        (Ce = be[--Se]),
        (be[Se] = null),
        (Ne = be[--Se]),
        (be[Se] = null);
  }
  function to(t, e) {
    (be[Se++] = Ne),
      (be[Se++] = Ce),
      (be[Se++] = il),
      (Ne = e.id),
      (Ce = e.overflow),
      (il = t);
  }
  var Gt = null,
    St = null,
    ct = !1,
    cl = null,
    Ae = !1,
    Wi = Error(f(519));
  function fl(t) {
    var e = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (tn(pe(e, t)), Wi);
  }
  function eo(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps;
    switch (((e[Lt] = t), (e[Wt] = a), l)) {
      case "dialog":
        nt("cancel", e), nt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        nt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < En.length; l++) nt(En[l], e);
        break;
      case "source":
        nt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        nt("error", e), nt("load", e);
        break;
      case "details":
        nt("toggle", e);
        break;
      case "input":
        nt("invalid", e),
          hs(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          );
        break;
      case "select":
        nt("invalid", e);
        break;
      case "textarea":
        nt("invalid", e), vs(e, a.value, a.defaultValue, a.children);
    }
    (l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      e.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      bd(e.textContent, l)
        ? (a.popover != null && (nt("beforetoggle", e), nt("toggle", e)),
          a.onScroll != null && nt("scroll", e),
          a.onScrollEnd != null && nt("scrollend", e),
          a.onClick != null && (e.onclick = Ye),
          (e = !0))
        : (e = !1),
      e || fl(t, !0);
  }
  function lo(t) {
    for (Gt = t.return; Gt; )
      switch (Gt.tag) {
        case 5:
        case 31:
        case 13:
          Ae = !1;
          return;
        case 27:
        case 3:
          Ae = !0;
          return;
        default:
          Gt = Gt.return;
      }
  }
  function ma(t) {
    if (t !== Gt) return !1;
    if (!ct) return lo(t), (ct = !0), !1;
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type),
          (l =
            !(l !== "form" && l !== "button") || yf(t.type, t.memoizedProps))),
        (l = !l)),
      l && St && fl(t),
      lo(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(f(317));
      St = Md(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(f(317));
      St = Md(t);
    } else
      e === 27
        ? ((e = St), xl(t.type) ? ((t = Sf), (Sf = null), (St = t)) : (St = e))
        : (St = Gt ? Ee(t.stateNode.nextSibling) : null);
    return !0;
  }
  function ql() {
    (St = Gt = null), (ct = !1);
  }
  function $i() {
    var t = cl;
    return (
      t !== null &&
        (ee === null ? (ee = t) : ee.push.apply(ee, t), (cl = null)),
      t
    );
  }
  function tn(t) {
    cl === null ? (cl = [t]) : cl.push(t);
  }
  var Ii = g(null),
    Zl = null,
    Le = null;
  function sl(t, e, l) {
    q(Ii, e._currentValue), (e._currentValue = l);
  }
  function Ge(t) {
    (t._currentValue = Ii.current), U(Ii);
  }
  function Pi(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function tc(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var s = u;
          u = n;
          for (var m = 0; m < e.length; m++)
            if (s.context === e[m]) {
              (u.lanes |= l),
                (s = u.alternate),
                s !== null && (s.lanes |= l),
                Pi(u.return, l, t),
                a || (i = null);
              break t;
            }
          u = s.next;
        }
      } else if (n.tag === 18) {
        if (((i = n.return), i === null)) throw Error(f(341));
        (i.lanes |= l),
          (u = i.alternate),
          u !== null && (u.lanes |= l),
          Pi(i, l, t),
          (i = null);
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (((n = i.sibling), n !== null)) {
            (n.return = i.return), (i = n);
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function ha(t, e, l, a) {
    t = null;
    for (var n = e, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(f(387));
        if (((i = i.memoizedProps), i !== null)) {
          var s = n.type;
          fe(n.pendingProps.value, i.value) ||
            (t !== null ? t.push(s) : (t = [s]));
        }
      } else if (n === rt.current) {
        if (((i = n.alternate), i === null)) throw Error(f(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (t !== null ? t.push(Mn) : (t = [Mn]));
      }
      n = n.return;
    }
    t !== null && tc(e, t, l, a), (e.flags |= 262144);
  }
  function fu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!fe(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Ll(t) {
    (Zl = t),
      (Le = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Xt(t) {
    return ao(Zl, t);
  }
  function su(t, e) {
    return Zl === null && Ll(t), ao(t, e);
  }
  function ao(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), Le === null)) {
      if (t === null) throw Error(f(308));
      (Le = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else Le = Le.next = e;
    return l;
  }
  var qh =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (l) {
                  return l();
                });
            };
          },
    Zh = c.unstable_scheduleCallback,
    Lh = c.unstable_NormalPriority,
    Dt = {
      $$typeof: W,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ec() {
    return { controller: new qh(), data: new Map(), refCount: 0 };
  }
  function en(t) {
    t.refCount--,
      t.refCount === 0 &&
        Zh(Lh, function () {
          t.controller.abort();
        });
  }
  var ln = null,
    lc = 0,
    ya = 0,
    va = null;
  function Gh(t, e) {
    if (ln === null) {
      var l = (ln = []);
      (lc = 0),
        (ya = uf()),
        (va = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        });
    }
    return lc++, e.then(no, no), e;
  }
  function no() {
    if (--lc === 0 && ln !== null) {
      va !== null && (va.status = "fulfilled");
      var t = ln;
      (ln = null), (ya = 0), (va = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Xh(t, e) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      t.then(
        function () {
          (a.status = "fulfilled"), (a.value = e);
          for (var n = 0; n < l.length; n++) (0, l[n])(e);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        }
      ),
      a
    );
  }
  var uo = R.S;
  R.S = function (t, e) {
    (Xr = ue()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        Gh(t, e),
      uo !== null && uo(t, e);
  };
  var Gl = g(null);
  function ac() {
    var t = Gl.current;
    return t !== null ? t : bt.pooledCache;
  }
  function ou(t, e) {
    e === null ? q(Gl, Gl.current) : q(Gl, e.pool);
  }
  function io() {
    var t = ac();
    return t === null ? null : { parent: Dt._currentValue, pool: t };
  }
  var ga = Error(f(460)),
    nc = Error(f(474)),
    ru = Error(f(542)),
    du = { then: function () {} };
  function co(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function fo(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(Ye, Ye), (e = l)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), oo(t), t);
      default:
        if (typeof e.status == "string") e.then(Ye, Ye);
        else {
          if (((t = bt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(f(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var n = e;
                  (n.status = "fulfilled"), (n.value = a);
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var n = e;
                  (n.status = "rejected"), (n.reason = a);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), oo(t), t);
        }
        throw ((Ql = e), ga);
    }
  }
  function Xl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function"
        ? ((Ql = l), ga)
        : l;
    }
  }
  var Ql = null;
  function so() {
    if (Ql === null) throw Error(f(459));
    var t = Ql;
    return (Ql = null), t;
  }
  function oo(t) {
    if (t === ga || t === ru) throw Error(f(483));
  }
  var pa = null,
    an = 0;
  function mu(t) {
    var e = an;
    return (an += 1), pa === null && (pa = []), fo(pa, t, e);
  }
  function nn(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function hu(t, e) {
    throw e.$$typeof === B
      ? Error(f(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          f(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function ro(t) {
    function e(p, y) {
      if (t) {
        var x = p.deletions;
        x === null ? ((p.deletions = [y]), (p.flags |= 16)) : x.push(y);
      }
    }
    function l(p, y) {
      if (!t) return null;
      for (; y !== null; ) e(p, y), (y = y.sibling);
      return null;
    }
    function a(p) {
      for (var y = new Map(); p !== null; )
        p.key !== null ? y.set(p.key, p) : y.set(p.index, p), (p = p.sibling);
      return y;
    }
    function n(p, y) {
      return (p = qe(p, y)), (p.index = 0), (p.sibling = null), p;
    }
    function u(p, y, x) {
      return (
        (p.index = x),
        t
          ? ((x = p.alternate),
            x !== null
              ? ((x = x.index), x < y ? ((p.flags |= 67108866), y) : x)
              : ((p.flags |= 67108866), y))
          : ((p.flags |= 1048576), y)
      );
    }
    function i(p) {
      return t && p.alternate === null && (p.flags |= 67108866), p;
    }
    function s(p, y, x, D) {
      return y === null || y.tag !== 6
        ? ((y = Ki(x, p.mode, D)), (y.return = p), y)
        : ((y = n(y, x)), (y.return = p), y);
    }
    function m(p, y, x, D) {
      var J = x.type;
      return J === Z
        ? C(p, y, x.props.children, D, x.key)
        : y !== null &&
          (y.elementType === J ||
            (typeof J == "object" &&
              J !== null &&
              J.$$typeof === Yt &&
              Xl(J) === y.type))
        ? ((y = n(y, x.props)), nn(y, x), (y.return = p), y)
        : ((y = iu(x.type, x.key, x.props, null, p.mode, D)),
          nn(y, x),
          (y.return = p),
          y);
    }
    function E(p, y, x, D) {
      return y === null ||
        y.tag !== 4 ||
        y.stateNode.containerInfo !== x.containerInfo ||
        y.stateNode.implementation !== x.implementation
        ? ((y = Ji(x, p.mode, D)), (y.return = p), y)
        : ((y = n(y, x.children || [])), (y.return = p), y);
    }
    function C(p, y, x, D, J) {
      return y === null || y.tag !== 7
        ? ((y = wl(x, p.mode, D, J)), (y.return = p), y)
        : ((y = n(y, x)), (y.return = p), y);
    }
    function j(p, y, x) {
      if (
        (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
      )
        return (y = Ki("" + y, p.mode, x)), (y.return = p), y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Y:
            return (
              (x = iu(y.type, y.key, y.props, null, p.mode, x)),
              nn(x, y),
              (x.return = p),
              x
            );
          case H:
            return (y = Ji(y, p.mode, x)), (y.return = p), y;
          case Yt:
            return (y = Xl(y)), j(p, y, x);
        }
        if (Te(y) || Ft(y))
          return (y = wl(y, p.mode, x, null)), (y.return = p), y;
        if (typeof y.then == "function") return j(p, mu(y), x);
        if (y.$$typeof === W) return j(p, su(p, y), x);
        hu(p, y);
      }
      return null;
    }
    function z(p, y, x, D) {
      var J = y !== null ? y.key : null;
      if (
        (typeof x == "string" && x !== "") ||
        typeof x == "number" ||
        typeof x == "bigint"
      )
        return J !== null ? null : s(p, y, "" + x, D);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Y:
            return x.key === J ? m(p, y, x, D) : null;
          case H:
            return x.key === J ? E(p, y, x, D) : null;
          case Yt:
            return (x = Xl(x)), z(p, y, x, D);
        }
        if (Te(x) || Ft(x)) return J !== null ? null : C(p, y, x, D, null);
        if (typeof x.then == "function") return z(p, y, mu(x), D);
        if (x.$$typeof === W) return z(p, y, su(p, x), D);
        hu(p, x);
      }
      return null;
    }
    function M(p, y, x, D, J) {
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return (p = p.get(x) || null), s(y, p, "" + D, J);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case Y:
            return (
              (p = p.get(D.key === null ? x : D.key) || null), m(y, p, D, J)
            );
          case H:
            return (
              (p = p.get(D.key === null ? x : D.key) || null), E(y, p, D, J)
            );
          case Yt:
            return (D = Xl(D)), M(p, y, x, D, J);
        }
        if (Te(D) || Ft(D)) return (p = p.get(x) || null), C(y, p, D, J, null);
        if (typeof D.then == "function") return M(p, y, x, mu(D), J);
        if (D.$$typeof === W) return M(p, y, x, su(y, D), J);
        hu(y, D);
      }
      return null;
    }
    function L(p, y, x, D) {
      for (
        var J = null, ft = null, V = y, et = (y = 0), it = null;
        V !== null && et < x.length;
        et++
      ) {
        V.index > et ? ((it = V), (V = null)) : (it = V.sibling);
        var st = z(p, V, x[et], D);
        if (st === null) {
          V === null && (V = it);
          break;
        }
        t && V && st.alternate === null && e(p, V),
          (y = u(st, y, et)),
          ft === null ? (J = st) : (ft.sibling = st),
          (ft = st),
          (V = it);
      }
      if (et === x.length) return l(p, V), ct && Ze(p, et), J;
      if (V === null) {
        for (; et < x.length; et++)
          (V = j(p, x[et], D)),
            V !== null &&
              ((y = u(V, y, et)),
              ft === null ? (J = V) : (ft.sibling = V),
              (ft = V));
        return ct && Ze(p, et), J;
      }
      for (V = a(V); et < x.length; et++)
        (it = M(V, p, et, x[et], D)),
          it !== null &&
            (t &&
              it.alternate !== null &&
              V.delete(it.key === null ? et : it.key),
            (y = u(it, y, et)),
            ft === null ? (J = it) : (ft.sibling = it),
            (ft = it));
      return (
        t &&
          V.forEach(function (Ol) {
            return e(p, Ol);
          }),
        ct && Ze(p, et),
        J
      );
    }
    function k(p, y, x, D) {
      if (x == null) throw Error(f(151));
      for (
        var J = null, ft = null, V = y, et = (y = 0), it = null, st = x.next();
        V !== null && !st.done;
        et++, st = x.next()
      ) {
        V.index > et ? ((it = V), (V = null)) : (it = V.sibling);
        var Ol = z(p, V, st.value, D);
        if (Ol === null) {
          V === null && (V = it);
          break;
        }
        t && V && Ol.alternate === null && e(p, V),
          (y = u(Ol, y, et)),
          ft === null ? (J = Ol) : (ft.sibling = Ol),
          (ft = Ol),
          (V = it);
      }
      if (st.done) return l(p, V), ct && Ze(p, et), J;
      if (V === null) {
        for (; !st.done; et++, st = x.next())
          (st = j(p, st.value, D)),
            st !== null &&
              ((y = u(st, y, et)),
              ft === null ? (J = st) : (ft.sibling = st),
              (ft = st));
        return ct && Ze(p, et), J;
      }
      for (V = a(V); !st.done; et++, st = x.next())
        (st = M(V, p, et, st.value, D)),
          st !== null &&
            (t &&
              st.alternate !== null &&
              V.delete(st.key === null ? et : st.key),
            (y = u(st, y, et)),
            ft === null ? (J = st) : (ft.sibling = st),
            (ft = st));
      return (
        t &&
          V.forEach(function (tv) {
            return e(p, tv);
          }),
        ct && Ze(p, et),
        J
      );
    }
    function gt(p, y, x, D) {
      if (
        (typeof x == "object" &&
          x !== null &&
          x.type === Z &&
          x.key === null &&
          (x = x.props.children),
        typeof x == "object" && x !== null)
      ) {
        switch (x.$$typeof) {
          case Y:
            t: {
              for (var J = x.key; y !== null; ) {
                if (y.key === J) {
                  if (((J = x.type), J === Z)) {
                    if (y.tag === 7) {
                      l(p, y.sibling),
                        (D = n(y, x.props.children)),
                        (D.return = p),
                        (p = D);
                      break t;
                    }
                  } else if (
                    y.elementType === J ||
                    (typeof J == "object" &&
                      J !== null &&
                      J.$$typeof === Yt &&
                      Xl(J) === y.type)
                  ) {
                    l(p, y.sibling),
                      (D = n(y, x.props)),
                      nn(D, x),
                      (D.return = p),
                      (p = D);
                    break t;
                  }
                  l(p, y);
                  break;
                } else e(p, y);
                y = y.sibling;
              }
              x.type === Z
                ? ((D = wl(x.props.children, p.mode, D, x.key)),
                  (D.return = p),
                  (p = D))
                : ((D = iu(x.type, x.key, x.props, null, p.mode, D)),
                  nn(D, x),
                  (D.return = p),
                  (p = D));
            }
            return i(p);
          case H:
            t: {
              for (J = x.key; y !== null; ) {
                if (y.key === J)
                  if (
                    y.tag === 4 &&
                    y.stateNode.containerInfo === x.containerInfo &&
                    y.stateNode.implementation === x.implementation
                  ) {
                    l(p, y.sibling),
                      (D = n(y, x.children || [])),
                      (D.return = p),
                      (p = D);
                    break t;
                  } else {
                    l(p, y);
                    break;
                  }
                else e(p, y);
                y = y.sibling;
              }
              (D = Ji(x, p.mode, D)), (D.return = p), (p = D);
            }
            return i(p);
          case Yt:
            return (x = Xl(x)), gt(p, y, x, D);
        }
        if (Te(x)) return L(p, y, x, D);
        if (Ft(x)) {
          if (((J = Ft(x)), typeof J != "function")) throw Error(f(150));
          return (x = J.call(x)), k(p, y, x, D);
        }
        if (typeof x.then == "function") return gt(p, y, mu(x), D);
        if (x.$$typeof === W) return gt(p, y, su(p, x), D);
        hu(p, x);
      }
      return (typeof x == "string" && x !== "") ||
        typeof x == "number" ||
        typeof x == "bigint"
        ? ((x = "" + x),
          y !== null && y.tag === 6
            ? (l(p, y.sibling), (D = n(y, x)), (D.return = p), (p = D))
            : (l(p, y), (D = Ki(x, p.mode, D)), (D.return = p), (p = D)),
          i(p))
        : l(p, y);
    }
    return function (p, y, x, D) {
      try {
        an = 0;
        var J = gt(p, y, x, D);
        return (pa = null), J;
      } catch (V) {
        if (V === ga || V === ru) throw V;
        var ft = se(29, V, null, p.mode);
        return (ft.lanes = D), (ft.return = p), ft;
      } finally {
      }
    };
  }
  var Vl = ro(!0),
    mo = ro(!1),
    ol = !1;
  function uc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function ic(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function rl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function dl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (ot & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
        (a.pending = e),
        (e = uu(t)),
        Fs(t, null, l),
        e
      );
    }
    return nu(t, a, e, l), uu(t);
  }
  function un(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
    ) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), as(t, l);
    }
  }
  function cc(t, e) {
    var l = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        u = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var i = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          u === null ? (n = u = i) : (u = u.next = i), (l = l.next);
        } while (l !== null);
        u === null ? (n = u = e) : (u = u.next = e);
      } else n = u = e;
      (l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = l);
      return;
    }
    (t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e);
  }
  var fc = !1;
  function cn() {
    if (fc) {
      var t = va;
      if (t !== null) throw t;
    }
  }
  function fn(t, e, l, a) {
    fc = !1;
    var n = t.updateQueue;
    ol = !1;
    var u = n.firstBaseUpdate,
      i = n.lastBaseUpdate,
      s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var m = s,
        E = m.next;
      (m.next = null), i === null ? (u = E) : (i.next = E), (i = m);
      var C = t.alternate;
      C !== null &&
        ((C = C.updateQueue),
        (s = C.lastBaseUpdate),
        s !== i &&
          (s === null ? (C.firstBaseUpdate = E) : (s.next = E),
          (C.lastBaseUpdate = m)));
    }
    if (u !== null) {
      var j = n.baseState;
      (i = 0), (C = E = m = null), (s = u);
      do {
        var z = s.lane & -536870913,
          M = z !== s.lane;
        if (M ? (ut & z) === z : (a & z) === z) {
          z !== 0 && z === ya && (fc = !0),
            C !== null &&
              (C = C.next =
                {
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var L = t,
              k = s;
            z = e;
            var gt = l;
            switch (k.tag) {
              case 1:
                if (((L = k.payload), typeof L == "function")) {
                  j = L.call(gt, j, z);
                  break t;
                }
                j = L;
                break t;
              case 3:
                L.flags = (L.flags & -65537) | 128;
              case 0:
                if (
                  ((L = k.payload),
                  (z = typeof L == "function" ? L.call(gt, j, z) : L),
                  z == null)
                )
                  break t;
                j = T({}, j, z);
                break t;
              case 2:
                ol = !0;
            }
          }
          (z = s.callback),
            z !== null &&
              ((t.flags |= 64),
              M && (t.flags |= 8192),
              (M = n.callbacks),
              M === null ? (n.callbacks = [z]) : M.push(z));
        } else
          (M = {
            lane: z,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            C === null ? ((E = C = M), (m = j)) : (C = C.next = M),
            (i |= z);
        if (((s = s.next), s === null)) {
          if (((s = n.shared.pending), s === null)) break;
          (M = s),
            (s = M.next),
            (M.next = null),
            (n.lastBaseUpdate = M),
            (n.shared.pending = null);
        }
      } while (!0);
      C === null && (m = j),
        (n.baseState = m),
        (n.firstBaseUpdate = E),
        (n.lastBaseUpdate = C),
        u === null && (n.shared.lanes = 0),
        (gl |= i),
        (t.lanes = i),
        (t.memoizedState = j);
    }
  }
  function ho(t, e) {
    if (typeof t != "function") throw Error(f(191, t));
    t.call(e);
  }
  function yo(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) ho(l[t], e);
  }
  var ba = g(null),
    yu = g(0);
  function vo(t, e) {
    (t = $e), q(yu, t), q(ba, e), ($e = t | e.baseLanes);
  }
  function sc() {
    q(yu, $e), q(ba, ba.current);
  }
  function oc() {
    ($e = yu.current), U(ba), U(yu);
  }
  var oe = g(null),
    xe = null;
  function ml(t) {
    var e = t.alternate;
    q(Ct, Ct.current & 1),
      q(oe, t),
      xe === null &&
        (e === null || ba.current !== null || e.memoizedState !== null) &&
        (xe = t);
  }
  function rc(t) {
    q(Ct, Ct.current), q(oe, t), xe === null && (xe = t);
  }
  function go(t) {
    t.tag === 22
      ? (q(Ct, Ct.current), q(oe, t), xe === null && (xe = t))
      : hl();
  }
  function hl() {
    q(Ct, Ct.current), q(oe, oe.current);
  }
  function re(t) {
    U(oe), xe === t && (xe = null), U(Ct);
  }
  var Ct = g(0);
  function vu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || pf(l) || bf(l)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  var Xe = 0,
    P = null,
    yt = null,
    jt = null,
    gu = !1,
    Sa = !1,
    Kl = !1,
    pu = 0,
    sn = 0,
    Aa = null,
    Qh = 0;
  function Ot() {
    throw Error(f(321));
  }
  function dc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!fe(t[l], e[l])) return !1;
    return !0;
  }
  function mc(t, e, l, a, n, u) {
    return (
      (Xe = u),
      (P = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (R.H = t === null || t.memoizedState === null ? tr : Mc),
      (Kl = !1),
      (u = l(a, n)),
      (Kl = !1),
      Sa && (u = bo(e, l, a, n)),
      po(t),
      u
    );
  }
  function po(t) {
    R.H = dn;
    var e = yt !== null && yt.next !== null;
    if (((Xe = 0), (jt = yt = P = null), (gu = !1), (sn = 0), (Aa = null), e))
      throw Error(f(300));
    t === null ||
      Ut ||
      ((t = t.dependencies), t !== null && fu(t) && (Ut = !0));
  }
  function bo(t, e, l, a) {
    P = t;
    var n = 0;
    do {
      if ((Sa && (Aa = null), (sn = 0), (Sa = !1), 25 <= n))
        throw Error(f(301));
      if (((n += 1), (jt = yt = null), t.updateQueue != null)) {
        var u = t.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (R.H = er), (u = e(l, a));
    } while (Sa);
    return u;
  }
  function Vh() {
    var t = R.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? on(e) : e),
      (t = t.useState()[0]),
      (yt !== null ? yt.memoizedState : null) !== t && (P.flags |= 1024),
      e
    );
  }
  function hc() {
    var t = pu !== 0;
    return (pu = 0), t;
  }
  function yc(t, e, l) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l);
  }
  function vc(t) {
    if (gu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      gu = !1;
    }
    (Xe = 0), (jt = yt = P = null), (Sa = !1), (sn = pu = 0), (Aa = null);
  }
  function kt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return jt === null ? (P.memoizedState = jt = t) : (jt = jt.next = t), jt;
  }
  function Rt() {
    if (yt === null) {
      var t = P.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = yt.next;
    var e = jt === null ? P.memoizedState : jt.next;
    if (e !== null) (jt = e), (yt = t);
    else {
      if (t === null)
        throw P.alternate === null ? Error(f(467)) : Error(f(310));
      (yt = t),
        (t = {
          memoizedState: yt.memoizedState,
          baseState: yt.baseState,
          baseQueue: yt.baseQueue,
          queue: yt.queue,
          next: null,
        }),
        jt === null ? (P.memoizedState = jt = t) : (jt = jt.next = t);
    }
    return jt;
  }
  function bu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function on(t) {
    var e = sn;
    return (
      (sn += 1),
      Aa === null && (Aa = []),
      (t = fo(Aa, t, e)),
      (e = P),
      (jt === null ? e.memoizedState : jt.next) === null &&
        ((e = e.alternate),
        (R.H = e === null || e.memoizedState === null ? tr : Mc)),
      t
    );
  }
  function Su(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return on(t);
      if (t.$$typeof === W) return Xt(t);
    }
    throw Error(f(438, String(t)));
  }
  function gc(t) {
    var e = null,
      l = P.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var a = P.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = bu()), (P.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = ae;
    return e.index++, l;
  }
  function Qe(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Au(t) {
    var e = Rt();
    return pc(e, yt, t);
  }
  function pc(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        (n.next = u.next), (u.next = i);
      }
      (e.baseQueue = n = u), (a.pending = null);
    }
    if (((u = t.baseState), n === null)) t.memoizedState = u;
    else {
      e = n.next;
      var s = (i = null),
        m = null,
        E = e,
        C = !1;
      do {
        var j = E.lane & -536870913;
        if (j !== E.lane ? (ut & j) === j : (Xe & j) === j) {
          var z = E.revertLane;
          if (z === 0)
            m !== null &&
              (m = m.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: E.action,
                  hasEagerState: E.hasEagerState,
                  eagerState: E.eagerState,
                  next: null,
                }),
              j === ya && (C = !0);
          else if ((Xe & z) === z) {
            (E = E.next), z === ya && (C = !0);
            continue;
          } else
            (j = {
              lane: 0,
              revertLane: E.revertLane,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null,
            }),
              m === null ? ((s = m = j), (i = u)) : (m = m.next = j),
              (P.lanes |= z),
              (gl |= z);
          (j = E.action),
            Kl && l(u, j),
            (u = E.hasEagerState ? E.eagerState : l(u, j));
        } else
          (z = {
            lane: j,
            revertLane: E.revertLane,
            gesture: E.gesture,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null,
          }),
            m === null ? ((s = m = z), (i = u)) : (m = m.next = z),
            (P.lanes |= j),
            (gl |= j);
        E = E.next;
      } while (E !== null && E !== e);
      if (
        (m === null ? (i = u) : (m.next = s),
        !fe(u, t.memoizedState) && ((Ut = !0), C && ((l = va), l !== null)))
      )
        throw l;
      (t.memoizedState = u),
        (t.baseState = i),
        (t.baseQueue = m),
        (a.lastRenderedState = u);
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function bc(t) {
    var e = Rt(),
      l = e.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch,
      n = l.pending,
      u = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var i = (n = n.next);
      do (u = t(u, i.action)), (i = i.next);
      while (i !== n);
      fe(u, e.memoizedState) || (Ut = !0),
        (e.memoizedState = u),
        e.baseQueue === null && (e.baseState = u),
        (l.lastRenderedState = u);
    }
    return [u, a];
  }
  function So(t, e, l) {
    var a = P,
      n = Rt(),
      u = ct;
    if (u) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = e();
    var i = !fe((yt || n).memoizedState, l);
    if (
      (i && ((n.memoizedState = l), (Ut = !0)),
      (n = n.queue),
      xc(Eo.bind(null, a, n, t), [t]),
      n.getSnapshot !== e || i || (jt !== null && jt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        xa(9, { destroy: void 0 }, xo.bind(null, a, n, l, e), null),
        bt === null)
      )
        throw Error(f(349));
      u || (Xe & 127) !== 0 || Ao(a, e, l);
    }
    return l;
  }
  function Ao(t, e, l) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = P.updateQueue),
      e === null
        ? ((e = bu()), (P.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t));
  }
  function xo(t, e, l, a) {
    (e.value = l), (e.getSnapshot = a), zo(e) && To(t);
  }
  function Eo(t, e, l) {
    return l(function () {
      zo(e) && To(t);
    });
  }
  function zo(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !fe(t, l);
    } catch {
      return !0;
    }
  }
  function To(t) {
    var e = Yl(t, 2);
    e !== null && le(e, t, 2);
  }
  function Sc(t) {
    var e = kt();
    if (typeof t == "function") {
      var l = t;
      if (((t = l()), Kl)) {
        al(!0);
        try {
          l();
        } finally {
          al(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qe,
        lastRenderedState: t,
      }),
      e
    );
  }
  function _o(t, e, l, a) {
    return (t.baseState = l), pc(t, yt, typeof a == "function" ? a : Qe);
  }
  function Kh(t, e, l, a, n) {
    if (zu(t)) throw Error(f(485));
    if (((t = e.action), t !== null)) {
      var u = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          u.listeners.push(i);
        },
      };
      R.T !== null ? l(!0) : (u.isTransition = !1),
        a(u),
        (l = e.pending),
        l === null
          ? ((u.next = e.pending = u), Oo(e, u))
          : ((u.next = l.next), (e.pending = l.next = u));
    }
  }
  function Oo(t, e) {
    var l = e.action,
      a = e.payload,
      n = t.state;
    if (e.isTransition) {
      var u = R.T,
        i = {};
      R.T = i;
      try {
        var s = l(n, a),
          m = R.S;
        m !== null && m(i, s), Mo(t, e, s);
      } catch (E) {
        Ac(t, e, E);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), (R.T = u);
      }
    } else
      try {
        (u = l(n, a)), Mo(t, e, u);
      } catch (E) {
        Ac(t, e, E);
      }
  }
  function Mo(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            No(t, e, a);
          },
          function (a) {
            return Ac(t, e, a);
          }
        )
      : No(t, e, l);
  }
  function No(t, e, l) {
    (e.status = "fulfilled"),
      (e.value = l),
      Co(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), Oo(t, l)));
  }
  function Ac(t, e, l) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (e.status = "rejected"), (e.reason = l), Co(e), (e = e.next);
      while (e !== a);
    }
    t.action = null;
  }
  function Co(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Ro(t, e) {
    return e;
  }
  function Do(t, e) {
    if (ct) {
      var l = bt.formState;
      if (l !== null) {
        t: {
          var a = P;
          if (ct) {
            if (St) {
              e: {
                for (var n = St, u = Ae; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break e;
                  }
                  if (((n = Ee(n.nextSibling)), n === null)) {
                    n = null;
                    break e;
                  }
                }
                (u = n.data), (n = u === "F!" || u === "F" ? n : null);
              }
              if (n) {
                (St = Ee(n.nextSibling)), (a = n.data === "F!");
                break t;
              }
            }
            fl(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return (
      (l = kt()),
      (l.memoizedState = l.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ro,
        lastRenderedState: e,
      }),
      (l.queue = a),
      (l = $o.bind(null, P, a)),
      (a.dispatch = l),
      (a = Sc(!1)),
      (u = Oc.bind(null, P, !1, a.queue)),
      (a = kt()),
      (n = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = n),
      (l = Kh.bind(null, P, n, u, l)),
      (n.dispatch = l),
      (a.memoizedState = t),
      [e, l, !1]
    );
  }
  function jo(t) {
    var e = Rt();
    return Uo(e, yt, t);
  }
  function Uo(t, e, l) {
    if (
      ((e = pc(t, e, Ro)[0]),
      (t = Au(Qe)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = on(e);
      } catch (i) {
        throw i === ga ? ru : i;
      }
    else a = e;
    e = Rt();
    var n = e.queue,
      u = n.dispatch;
    return (
      l !== e.memoizedState &&
        ((P.flags |= 2048),
        xa(9, { destroy: void 0 }, Jh.bind(null, n, l), null)),
      [a, u, t]
    );
  }
  function Jh(t, e) {
    t.action = e;
  }
  function Bo(t) {
    var e = Rt(),
      l = yt;
    if (l !== null) return Uo(e, l, t);
    Rt(), (e = e.memoizedState), (l = Rt());
    var a = l.queue.dispatch;
    return (l.memoizedState = t), [e, a, !1];
  }
  function xa(t, e, l, a) {
    return (
      (t = { tag: t, create: l, deps: a, inst: e, next: null }),
      (e = P.updateQueue),
      e === null && ((e = bu()), (P.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function Ho() {
    return Rt().memoizedState;
  }
  function xu(t, e, l, a) {
    var n = kt();
    (P.flags |= t),
      (n.memoizedState = xa(
        1 | e,
        { destroy: void 0 },
        l,
        a === void 0 ? null : a
      ));
  }
  function Eu(t, e, l, a) {
    var n = Rt();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    yt !== null && a !== null && dc(a, yt.memoizedState.deps)
      ? (n.memoizedState = xa(e, u, l, a))
      : ((P.flags |= t), (n.memoizedState = xa(1 | e, u, l, a)));
  }
  function Yo(t, e) {
    xu(8390656, 8, t, e);
  }
  function xc(t, e) {
    Eu(2048, 8, t, e);
  }
  function kh(t) {
    P.flags |= 4;
    var e = P.updateQueue;
    if (e === null) (e = bu()), (P.updateQueue = e), (e.events = [t]);
    else {
      var l = e.events;
      l === null ? (e.events = [t]) : l.push(t);
    }
  }
  function wo(t) {
    var e = Rt().memoizedState;
    return (
      kh({ ref: e, nextImpl: t }),
      function () {
        if ((ot & 2) !== 0) throw Error(f(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function qo(t, e) {
    return Eu(4, 2, t, e);
  }
  function Zo(t, e) {
    return Eu(4, 4, t, e);
  }
  function Lo(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function () {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Go(t, e, l) {
    (l = l != null ? l.concat([t]) : null), Eu(4, 4, Lo.bind(null, e, t), l);
  }
  function Ec() {}
  function Xo(t, e) {
    var l = Rt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && dc(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
  }
  function Qo(t, e) {
    var l = Rt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && dc(e, a[1])) return a[0];
    if (((a = t()), Kl)) {
      al(!0);
      try {
        t();
      } finally {
        al(!1);
      }
    }
    return (l.memoizedState = [a, e]), a;
  }
  function zc(t, e, l) {
    return l === void 0 || ((Xe & 1073741824) !== 0 && (ut & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = Vr()), (P.lanes |= t), (gl |= t), l);
  }
  function Vo(t, e, l, a) {
    return fe(l, e)
      ? l
      : ba.current !== null
      ? ((t = zc(t, l, a)), fe(t, e) || (Ut = !0), t)
      : (Xe & 42) === 0 || ((Xe & 1073741824) !== 0 && (ut & 261930) === 0)
      ? ((Ut = !0), (t.memoizedState = l))
      : ((t = Vr()), (P.lanes |= t), (gl |= t), e);
  }
  function Ko(t, e, l, a, n) {
    var u = w.p;
    w.p = u !== 0 && 8 > u ? u : 8;
    var i = R.T,
      s = {};
    (R.T = s), Oc(t, !1, e, l);
    try {
      var m = n(),
        E = R.S;
      if (
        (E !== null && E(s, m),
        m !== null && typeof m == "object" && typeof m.then == "function")
      ) {
        var C = Xh(m, a);
        rn(t, e, C, he(t));
      } else rn(t, e, a, he(t));
    } catch (j) {
      rn(t, e, { then: function () {}, status: "rejected", reason: j }, he());
    } finally {
      (w.p = u),
        i !== null && s.types !== null && (i.types = s.types),
        (R.T = i);
    }
  }
  function Fh() {}
  function Tc(t, e, l, a) {
    if (t.tag !== 5) throw Error(f(476));
    var n = Jo(t).queue;
    Ko(
      t,
      n,
      e,
      F,
      l === null
        ? Fh
        : function () {
            return ko(t), l(a);
          }
    );
  }
  function Jo(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: F,
      baseState: F,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qe,
        lastRenderedState: F,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Qe,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function ko(t) {
    var e = Jo(t);
    e.next === null && (e = t.alternate.memoizedState),
      rn(t, e.next.queue, {}, he());
  }
  function _c() {
    return Xt(Mn);
  }
  function Fo() {
    return Rt().memoizedState;
  }
  function Wo() {
    return Rt().memoizedState;
  }
  function Wh(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = he();
          t = rl(l);
          var a = dl(e, t, l);
          a !== null && (le(a, e, l), un(a, e, l)),
            (e = { cache: ec() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function $h(t, e, l) {
    var a = he();
    (l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      zu(t)
        ? Io(e, l)
        : ((l = Qi(t, e, l, a)), l !== null && (le(l, t, a), Po(l, e, a)));
  }
  function $o(t, e, l) {
    var a = he();
    rn(t, e, l, a);
  }
  function rn(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (zu(t)) Io(e, n);
    else {
      var u = t.alternate;
      if (
        t.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = e.lastRenderedReducer), u !== null)
      )
        try {
          var i = e.lastRenderedState,
            s = u(i, l);
          if (((n.hasEagerState = !0), (n.eagerState = s), fe(s, i)))
            return nu(t, e, n, 0), bt === null && au(), !1;
        } catch {
        } finally {
        }
      if (((l = Qi(t, e, n, a)), l !== null))
        return le(l, t, a), Po(l, e, a), !0;
    }
    return !1;
  }
  function Oc(t, e, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: uf(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      zu(t))
    ) {
      if (e) throw Error(f(479));
    } else (e = Qi(t, l, a, 2)), e !== null && le(e, t, 2);
  }
  function zu(t) {
    var e = t.alternate;
    return t === P || (e !== null && e === P);
  }
  function Io(t, e) {
    Sa = gu = !0;
    var l = t.pending;
    l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e);
  }
  function Po(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), as(t, l);
    }
  }
  var dn = {
    readContext: Xt,
    use: Su,
    useCallback: Ot,
    useContext: Ot,
    useEffect: Ot,
    useImperativeHandle: Ot,
    useLayoutEffect: Ot,
    useInsertionEffect: Ot,
    useMemo: Ot,
    useReducer: Ot,
    useRef: Ot,
    useState: Ot,
    useDebugValue: Ot,
    useDeferredValue: Ot,
    useTransition: Ot,
    useSyncExternalStore: Ot,
    useId: Ot,
    useHostTransitionStatus: Ot,
    useFormState: Ot,
    useActionState: Ot,
    useOptimistic: Ot,
    useMemoCache: Ot,
    useCacheRefresh: Ot,
  };
  dn.useEffectEvent = Ot;
  var tr = {
      readContext: Xt,
      use: Su,
      useCallback: function (t, e) {
        return (kt().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: Xt,
      useEffect: Yo,
      useImperativeHandle: function (t, e, l) {
        (l = l != null ? l.concat([t]) : null),
          xu(4194308, 4, Lo.bind(null, e, t), l);
      },
      useLayoutEffect: function (t, e) {
        return xu(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        xu(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = kt();
        e = e === void 0 ? null : e;
        var a = t();
        if (Kl) {
          al(!0);
          try {
            t();
          } finally {
            al(!1);
          }
        }
        return (l.memoizedState = [a, e]), a;
      },
      useReducer: function (t, e, l) {
        var a = kt();
        if (l !== void 0) {
          var n = l(e);
          if (Kl) {
            al(!0);
            try {
              l(e);
            } finally {
              al(!1);
            }
          }
        } else n = e;
        return (
          (a.memoizedState = a.baseState = n),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: n,
          }),
          (a.queue = t),
          (t = t.dispatch = $h.bind(null, P, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = kt();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = Sc(t);
        var e = t.queue,
          l = $o.bind(null, P, e);
        return (e.dispatch = l), [t.memoizedState, l];
      },
      useDebugValue: Ec,
      useDeferredValue: function (t, e) {
        var l = kt();
        return zc(l, t, e);
      },
      useTransition: function () {
        var t = Sc(!1);
        return (
          (t = Ko.bind(null, P, t.queue, !0, !1)),
          (kt().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, l) {
        var a = P,
          n = kt();
        if (ct) {
          if (l === void 0) throw Error(f(407));
          l = l();
        } else {
          if (((l = e()), bt === null)) throw Error(f(349));
          (ut & 127) !== 0 || Ao(a, e, l);
        }
        n.memoizedState = l;
        var u = { value: l, getSnapshot: e };
        return (
          (n.queue = u),
          Yo(Eo.bind(null, a, u, t), [t]),
          (a.flags |= 2048),
          xa(9, { destroy: void 0 }, xo.bind(null, a, u, l, e), null),
          l
        );
      },
      useId: function () {
        var t = kt(),
          e = bt.identifierPrefix;
        if (ct) {
          var l = Ce,
            a = Ne;
          (l = (a & ~(1 << (32 - ce(a) - 1))).toString(32) + l),
            (e = "_" + e + "R_" + l),
            (l = pu++),
            0 < l && (e += "H" + l.toString(32)),
            (e += "_");
        } else (l = Qh++), (e = "_" + e + "r_" + l.toString(32) + "_");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: _c,
      useFormState: Do,
      useActionState: Do,
      useOptimistic: function (t) {
        var e = kt();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = l), (e = Oc.bind(null, P, !0, l)), (l.dispatch = e), [t, e]
        );
      },
      useMemoCache: gc,
      useCacheRefresh: function () {
        return (kt().memoizedState = Wh.bind(null, P));
      },
      useEffectEvent: function (t) {
        var e = kt(),
          l = { impl: t };
        return (
          (e.memoizedState = l),
          function () {
            if ((ot & 2) !== 0) throw Error(f(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Mc = {
      readContext: Xt,
      use: Su,
      useCallback: Xo,
      useContext: Xt,
      useEffect: xc,
      useImperativeHandle: Go,
      useInsertionEffect: qo,
      useLayoutEffect: Zo,
      useMemo: Qo,
      useReducer: Au,
      useRef: Ho,
      useState: function () {
        return Au(Qe);
      },
      useDebugValue: Ec,
      useDeferredValue: function (t, e) {
        var l = Rt();
        return Vo(l, yt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Au(Qe)[0],
          e = Rt().memoizedState;
        return [typeof t == "boolean" ? t : on(t), e];
      },
      useSyncExternalStore: So,
      useId: Fo,
      useHostTransitionStatus: _c,
      useFormState: jo,
      useActionState: jo,
      useOptimistic: function (t, e) {
        var l = Rt();
        return _o(l, yt, t, e);
      },
      useMemoCache: gc,
      useCacheRefresh: Wo,
    };
  Mc.useEffectEvent = wo;
  var er = {
    readContext: Xt,
    use: Su,
    useCallback: Xo,
    useContext: Xt,
    useEffect: xc,
    useImperativeHandle: Go,
    useInsertionEffect: qo,
    useLayoutEffect: Zo,
    useMemo: Qo,
    useReducer: bc,
    useRef: Ho,
    useState: function () {
      return bc(Qe);
    },
    useDebugValue: Ec,
    useDeferredValue: function (t, e) {
      var l = Rt();
      return yt === null ? zc(l, t, e) : Vo(l, yt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = bc(Qe)[0],
        e = Rt().memoizedState;
      return [typeof t == "boolean" ? t : on(t), e];
    },
    useSyncExternalStore: So,
    useId: Fo,
    useHostTransitionStatus: _c,
    useFormState: Bo,
    useActionState: Bo,
    useOptimistic: function (t, e) {
      var l = Rt();
      return yt !== null
        ? _o(l, yt, t, e)
        : ((l.baseState = t), [t, l.queue.dispatch]);
    },
    useMemoCache: gc,
    useCacheRefresh: Wo,
  };
  er.useEffectEvent = wo;
  function Nc(t, e, l, a) {
    (e = t.memoizedState),
      (l = l(a, e)),
      (l = l == null ? e : T({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var Cc = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var a = he(),
        n = rl(a);
      (n.payload = e),
        l != null && (n.callback = l),
        (e = dl(t, n, a)),
        e !== null && (le(e, t, a), un(e, t, a));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var a = he(),
        n = rl(a);
      (n.tag = 1),
        (n.payload = e),
        l != null && (n.callback = l),
        (e = dl(t, n, a)),
        e !== null && (le(e, t, a), un(e, t, a));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = he(),
        a = rl(l);
      (a.tag = 2),
        e != null && (a.callback = e),
        (e = dl(t, a, l)),
        e !== null && (le(e, t, l), un(e, t, l));
    },
  };
  function lr(t, e, l, a, n, u, i) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, u, i)
        : e.prototype && e.prototype.isPureReactComponent
        ? !$a(l, a) || !$a(n, u)
        : !0
    );
  }
  function ar(t, e, l, a) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(l, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(l, a),
      e.state !== t && Cc.enqueueReplaceState(e, e.state, null);
  }
  function Jl(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e) a !== "ref" && (l[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = T({}, l));
      for (var n in t) l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  function nr(t) {
    lu(t);
  }
  function ur(t) {
    console.error(t);
  }
  function ir(t) {
    lu(t);
  }
  function Tu(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function cr(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Rc(t, e, l) {
    return (
      (l = rl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Tu(t, e);
      }),
      l
    );
  }
  function fr(t) {
    return (t = rl(t)), (t.tag = 3), t;
  }
  function sr(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      (t.payload = function () {
        return n(u);
      }),
        (t.callback = function () {
          cr(e, l, a);
        });
    }
    var i = l.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (t.callback = function () {
        cr(e, l, a),
          typeof n != "function" &&
            (pl === null ? (pl = new Set([this])) : pl.add(this));
        var s = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: s !== null ? s : "",
        });
      });
  }
  function Ih(t, e, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = l.alternate),
        e !== null && ha(e, l, n, !0),
        (l = oe.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              xe === null ? Yu() : l.alternate === null && Mt === 0 && (Mt = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === du
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([a])) : e.add(a),
                  lf(t, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === du
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue),
                      l === null ? (e.retryQueue = new Set([a])) : l.add(a)),
                  lf(t, a, n)),
              !1
            );
        }
        throw Error(f(435, l.tag));
      }
      return lf(t, a, n), Yu(), !1;
    }
    if (ct)
      return (
        (e = oe.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = n),
            a !== Wi && ((t = Error(f(422), { cause: a })), tn(pe(t, l))))
          : (a !== Wi && ((e = Error(f(423), { cause: a })), tn(pe(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (n &= -n),
            (t.lanes |= n),
            (a = pe(a, l)),
            (n = Rc(t.stateNode, a, n)),
            cc(t, n),
            Mt !== 4 && (Mt = 2)),
        !1
      );
    var u = Error(f(520), { cause: a });
    if (
      ((u = pe(u, l)),
      Sn === null ? (Sn = [u]) : Sn.push(u),
      Mt !== 4 && (Mt = 2),
      e === null)
    )
      return !0;
    (a = pe(a, l)), (l = e);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = n & -n),
            (l.lanes |= t),
            (t = Rc(l.stateNode, a, t)),
            cc(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (u = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (pl === null || !pl.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = fr(n)),
              sr(n, t, l, a),
              cc(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Dc = Error(f(461)),
    Ut = !1;
  function Qt(t, e, l, a) {
    e.child = t === null ? mo(e, null, l, a) : Vl(e, t.child, l, a);
  }
  function or(t, e, l, a, n) {
    l = l.render;
    var u = e.ref;
    if ("ref" in a) {
      var i = {};
      for (var s in a) s !== "ref" && (i[s] = a[s]);
    } else i = a;
    return (
      Ll(e),
      (a = mc(t, e, l, i, u, n)),
      (s = hc()),
      t !== null && !Ut
        ? (yc(t, e, n), Ve(t, e, n))
        : (ct && s && ki(e), (e.flags |= 1), Qt(t, e, a, n), e.child)
    );
  }
  function rr(t, e, l, a, n) {
    if (t === null) {
      var u = l.type;
      return typeof u == "function" &&
        !Vi(u) &&
        u.defaultProps === void 0 &&
        l.compare === null
        ? ((e.tag = 15), (e.type = u), dr(t, e, u, a, n))
        : ((t = iu(l.type, null, a, e, e.mode, n)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((u = t.child), !Zc(t, n))) {
      var i = u.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : $a), l(i, a) && t.ref === e.ref)
      )
        return Ve(t, e, n);
    }
    return (
      (e.flags |= 1),
      (t = qe(u, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function dr(t, e, l, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if ($a(u, a) && t.ref === e.ref)
        if (((Ut = !1), (e.pendingProps = a = u), Zc(t, n)))
          (t.flags & 131072) !== 0 && (Ut = !0);
        else return (e.lanes = t.lanes), Ve(t, e, n);
    }
    return jc(t, e, l, a, n);
  }
  function mr(t, e, l, a) {
    var n = a.children,
      u = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | l : l), t !== null)) {
          for (a = e.child = t.child, n = 0; a !== null; )
            (n = n | a.lanes | a.childLanes), (a = a.sibling);
          a = n & ~u;
        } else (a = 0), (e.child = null);
        return hr(t, e, u, l, a);
      }
      if ((l & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && ou(e, u !== null ? u.cachePool : null),
          u !== null ? vo(e, u) : sc(),
          go(e);
      else
        return (
          (a = e.lanes = 536870912),
          hr(t, e, u !== null ? u.baseLanes | l : l, l, a)
        );
    } else
      u !== null
        ? (ou(e, u.cachePool), vo(e, u), hl(), (e.memoizedState = null))
        : (t !== null && ou(e, null), sc(), hl());
    return Qt(t, e, n, l), e.child;
  }
  function mn(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function hr(t, e, l, a, n) {
    var u = ac();
    return (
      (u = u === null ? null : { parent: Dt._currentValue, pool: u }),
      (e.memoizedState = { baseLanes: l, cachePool: u }),
      t !== null && ou(e, null),
      sc(),
      go(e),
      t !== null && ha(t, e, a, !0),
      (e.childLanes = n),
      null
    );
  }
  function _u(t, e) {
    return (
      (e = Mu({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function yr(t, e, l) {
    return (
      Vl(e, t.child, null, l),
      (t = _u(e, e.pendingProps)),
      (t.flags |= 2),
      re(e),
      (e.memoizedState = null),
      t
    );
  }
  function Ph(t, e, l) {
    var a = e.pendingProps,
      n = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (ct) {
        if (a.mode === "hidden")
          return (t = _u(e, a)), (e.lanes = 536870912), mn(null, t);
        if (
          (rc(e),
          (t = St)
            ? ((t = Od(t, Ae)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: il !== null ? { id: Ne, overflow: Ce } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = $s(t)),
                (l.return = e),
                (e.child = l),
                (Gt = e),
                (St = null)))
            : (t = null),
          t === null)
        )
          throw fl(e);
        return (e.lanes = 536870912), null;
      }
      return _u(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if ((rc(e), n))
        if (e.flags & 256) (e.flags &= -257), (e = yr(t, e, l));
        else if (e.memoizedState !== null)
          (e.child = t.child), (e.flags |= 128), (e = null);
        else throw Error(f(558));
      else if (
        (Ut || ha(t, e, l, !1), (n = (l & t.childLanes) !== 0), Ut || n)
      ) {
        if (
          ((a = bt),
          a !== null && ((i = ns(a, l)), i !== 0 && i !== u.retryLane))
        )
          throw ((u.retryLane = i), Yl(t, i), le(a, t, i), Dc);
        Yu(), (e = yr(t, e, l));
      } else
        (t = u.treeContext),
          (St = Ee(i.nextSibling)),
          (Gt = e),
          (ct = !0),
          (cl = null),
          (Ae = !1),
          t !== null && to(e, t),
          (e = _u(e, a)),
          (e.flags |= 4096);
      return e;
    }
    return (
      (t = qe(t.child, { mode: a.mode, children: a.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Ou(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(f(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function jc(t, e, l, a, n) {
    return (
      Ll(e),
      (l = mc(t, e, l, a, void 0, n)),
      (a = hc()),
      t !== null && !Ut
        ? (yc(t, e, n), Ve(t, e, n))
        : (ct && a && ki(e), (e.flags |= 1), Qt(t, e, l, n), e.child)
    );
  }
  function vr(t, e, l, a, n, u) {
    return (
      Ll(e),
      (e.updateQueue = null),
      (l = bo(e, a, l, n)),
      po(t),
      (a = hc()),
      t !== null && !Ut
        ? (yc(t, e, u), Ve(t, e, u))
        : (ct && a && ki(e), (e.flags |= 1), Qt(t, e, l, u), e.child)
    );
  }
  function gr(t, e, l, a, n) {
    if ((Ll(e), e.stateNode === null)) {
      var u = oa,
        i = l.contextType;
      typeof i == "object" && i !== null && (u = Xt(i)),
        (u = new l(a, u)),
        (e.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Cc),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = a),
        (u.state = e.memoizedState),
        (u.refs = {}),
        uc(e),
        (i = l.contextType),
        (u.context = typeof i == "object" && i !== null ? Xt(i) : oa),
        (u.state = e.memoizedState),
        (i = l.getDerivedStateFromProps),
        typeof i == "function" && (Nc(e, l, i, a), (u.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((i = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          i !== u.state && Cc.enqueueReplaceState(u, u.state, null),
          fn(e, a, u, n),
          cn(),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0);
    } else if (t === null) {
      u = e.stateNode;
      var s = e.memoizedProps,
        m = Jl(l, s);
      u.props = m;
      var E = u.context,
        C = l.contextType;
      (i = oa), typeof C == "object" && C !== null && (i = Xt(C));
      var j = l.getDerivedStateFromProps;
      (C =
        typeof j == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (s = e.pendingProps !== s),
        C ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((s || E !== i) && ar(e, u, a, i)),
        (ol = !1);
      var z = e.memoizedState;
      (u.state = z),
        fn(e, a, u, n),
        cn(),
        (E = e.memoizedState),
        s || z !== E || ol
          ? (typeof j == "function" && (Nc(e, l, j, a), (E = e.memoizedState)),
            (m = ol || lr(e, l, m, a, z, E, i))
              ? (C ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = E)),
            (u.props = a),
            (u.state = E),
            (u.context = i),
            (a = m))
          : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1));
    } else {
      (u = e.stateNode),
        ic(t, e),
        (i = e.memoizedProps),
        (C = Jl(l, i)),
        (u.props = C),
        (j = e.pendingProps),
        (z = u.context),
        (E = l.contextType),
        (m = oa),
        typeof E == "object" && E !== null && (m = Xt(E)),
        (s = l.getDerivedStateFromProps),
        (E =
          typeof s == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((i !== j || z !== m) && ar(e, u, a, m)),
        (ol = !1),
        (z = e.memoizedState),
        (u.state = z),
        fn(e, a, u, n),
        cn();
      var M = e.memoizedState;
      i !== j ||
      z !== M ||
      ol ||
      (t !== null && t.dependencies !== null && fu(t.dependencies))
        ? (typeof s == "function" && (Nc(e, l, s, a), (M = e.memoizedState)),
          (C =
            ol ||
            lr(e, l, C, a, z, M, m) ||
            (t !== null && t.dependencies !== null && fu(t.dependencies)))
            ? (E ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(a, M, m),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(a, M, m)),
              typeof u.componentDidUpdate == "function" && (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (i === t.memoizedProps && z === t.memoizedState) ||
                (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (i === t.memoizedProps && z === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = M)),
          (u.props = a),
          (u.state = M),
          (u.context = m),
          (a = C))
        : (typeof u.componentDidUpdate != "function" ||
            (i === t.memoizedProps && z === t.memoizedState) ||
            (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (i === t.memoizedProps && z === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      Ou(t, e),
      (a = (e.flags & 128) !== 0),
      u || a
        ? ((u = e.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = Vl(e, t.child, null, n)),
              (e.child = Vl(e, null, l, n)))
            : Qt(t, e, l, n),
          (e.memoizedState = u.state),
          (t = e.child))
        : (t = Ve(t, e, n)),
      t
    );
  }
  function pr(t, e, l, a) {
    return ql(), (e.flags |= 256), Qt(t, e, l, a), e.child;
  }
  var Uc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Bc(t) {
    return { baseLanes: t, cachePool: io() };
  }
  function Hc(t, e, l) {
    return (t = t !== null ? t.childLanes & ~l : 0), e && (t |= me), t;
  }
  function br(t, e, l) {
    var a = e.pendingProps,
      n = !1,
      u = (e.flags & 128) !== 0,
      i;
    if (
      ((i = u) ||
        (i =
          t !== null && t.memoizedState === null ? !1 : (Ct.current & 2) !== 0),
      i && ((n = !0), (e.flags &= -129)),
      (i = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (ct) {
        if (
          (n ? ml(e) : hl(),
          (t = St)
            ? ((t = Od(t, Ae)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: il !== null ? { id: Ne, overflow: Ce } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = $s(t)),
                (l.return = e),
                (e.child = l),
                (Gt = e),
                (St = null)))
            : (t = null),
          t === null)
        )
          throw fl(e);
        return bf(t) ? (e.lanes = 32) : (e.lanes = 536870912), null;
      }
      var s = a.children;
      return (
        (a = a.fallback),
        n
          ? (hl(),
            (n = e.mode),
            (s = Mu({ mode: "hidden", children: s }, n)),
            (a = wl(a, n, l, null)),
            (s.return = e),
            (a.return = e),
            (s.sibling = a),
            (e.child = s),
            (a = e.child),
            (a.memoizedState = Bc(l)),
            (a.childLanes = Hc(t, i, l)),
            (e.memoizedState = Uc),
            mn(null, a))
          : (ml(e), Yc(e, s))
      );
    }
    var m = t.memoizedState;
    if (m !== null && ((s = m.dehydrated), s !== null)) {
      if (u)
        e.flags & 256
          ? (ml(e), (e.flags &= -257), (e = wc(t, e, l)))
          : e.memoizedState !== null
          ? (hl(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (hl(),
            (s = a.fallback),
            (n = e.mode),
            (a = Mu({ mode: "visible", children: a.children }, n)),
            (s = wl(s, n, l, null)),
            (s.flags |= 2),
            (a.return = e),
            (s.return = e),
            (a.sibling = s),
            (e.child = a),
            Vl(e, t.child, null, l),
            (a = e.child),
            (a.memoizedState = Bc(l)),
            (a.childLanes = Hc(t, i, l)),
            (e.memoizedState = Uc),
            (e = mn(null, a)));
      else if ((ml(e), bf(s))) {
        if (((i = s.nextSibling && s.nextSibling.dataset), i)) var E = i.dgst;
        (i = E),
          (a = Error(f(419))),
          (a.stack = ""),
          (a.digest = i),
          tn({ value: a, source: null, stack: null }),
          (e = wc(t, e, l));
      } else if (
        (Ut || ha(t, e, l, !1), (i = (l & t.childLanes) !== 0), Ut || i)
      ) {
        if (
          ((i = bt),
          i !== null && ((a = ns(i, l)), a !== 0 && a !== m.retryLane))
        )
          throw ((m.retryLane = a), Yl(t, a), le(i, t, a), Dc);
        pf(s) || Yu(), (e = wc(t, e, l));
      } else
        pf(s)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = m.treeContext),
            (St = Ee(s.nextSibling)),
            (Gt = e),
            (ct = !0),
            (cl = null),
            (Ae = !1),
            t !== null && to(e, t),
            (e = Yc(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return n
      ? (hl(),
        (s = a.fallback),
        (n = e.mode),
        (m = t.child),
        (E = m.sibling),
        (a = qe(m, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = m.subtreeFlags & 65011712),
        E !== null ? (s = qe(E, s)) : ((s = wl(s, n, l, null)), (s.flags |= 2)),
        (s.return = e),
        (a.return = e),
        (a.sibling = s),
        (e.child = a),
        mn(null, a),
        (a = e.child),
        (s = t.child.memoizedState),
        s === null
          ? (s = Bc(l))
          : ((n = s.cachePool),
            n !== null
              ? ((m = Dt._currentValue),
                (n = n.parent !== m ? { parent: m, pool: m } : n))
              : (n = io()),
            (s = { baseLanes: s.baseLanes | l, cachePool: n })),
        (a.memoizedState = s),
        (a.childLanes = Hc(t, i, l)),
        (e.memoizedState = Uc),
        mn(t.child, a))
      : (ml(e),
        (l = t.child),
        (t = l.sibling),
        (l = qe(l, { mode: "visible", children: a.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((i = e.deletions),
          i === null ? ((e.deletions = [t]), (e.flags |= 16)) : i.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function Yc(t, e) {
    return (
      (e = Mu({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Mu(t, e) {
    return (t = se(22, t, null, e)), (t.lanes = 0), t;
  }
  function wc(t, e, l) {
    return (
      Vl(e, t.child, null, l),
      (t = Yc(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Sr(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Pi(t.return, e, l);
  }
  function qc(t, e, l, a, n, u) {
    var i = t.memoizedState;
    i === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
          treeForkCount: u,
        })
      : ((i.isBackwards = e),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = l),
        (i.tailMode = n),
        (i.treeForkCount = u));
  }
  function Ar(t, e, l) {
    var a = e.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    a = a.children;
    var i = Ct.current,
      s = (i & 2) !== 0;
    if (
      (s ? ((i = (i & 1) | 2), (e.flags |= 128)) : (i &= 1),
      q(Ct, i),
      Qt(t, e, a, l),
      (a = ct ? Pa : 0),
      !s && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Sr(t, l, e);
        else if (t.tag === 19) Sr(t, l, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    switch (n) {
      case "forwards":
        for (l = e.child, n = null; l !== null; )
          (t = l.alternate),
            t !== null && vu(t) === null && (n = l),
            (l = l.sibling);
        (l = n),
          l === null
            ? ((n = e.child), (e.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          qc(e, !1, n, l, u, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (((t = n.alternate), t !== null && vu(t) === null)) {
            e.child = n;
            break;
          }
          (t = n.sibling), (n.sibling = l), (l = n), (n = t);
        }
        qc(e, !0, l, null, u, a);
        break;
      case "together":
        qc(e, !1, null, null, void 0, a);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Ve(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (gl |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((ha(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(f(153));
    if (e.child !== null) {
      for (
        t = e.child, l = qe(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (l = l.sibling = qe(t, t.pendingProps)),
          (l.return = e);
      l.sibling = null;
    }
    return e.child;
  }
  function Zc(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && fu(t)));
  }
  function ty(t, e, l) {
    switch (e.tag) {
      case 3:
        Jt(e, e.stateNode.containerInfo),
          sl(e, Dt, t.memoizedState.cache),
          ql();
        break;
      case 27:
      case 5:
        wa(e);
        break;
      case 4:
        Jt(e, e.stateNode.containerInfo);
        break;
      case 10:
        sl(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return (e.flags |= 128), rc(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (ml(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
            ? br(t, e, l)
            : (ml(e), (t = Ve(t, e, l)), t !== null ? t.sibling : null);
        ml(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (
          ((a = (l & e.childLanes) !== 0),
          a || (ha(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
          n)
        ) {
          if (a) return Ar(t, e, l);
          e.flags |= 128;
        }
        if (
          ((n = e.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          q(Ct, Ct.current),
          a)
        )
          break;
        return null;
      case 22:
        return (e.lanes = 0), mr(t, e, l, e.pendingProps);
      case 24:
        sl(e, Dt, t.memoizedState.cache);
    }
    return Ve(t, e, l);
  }
  function xr(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Ut = !0;
      else {
        if (!Zc(t, l) && (e.flags & 128) === 0) return (Ut = !1), ty(t, e, l);
        Ut = (t.flags & 131072) !== 0;
      }
    else (Ut = !1), ct && (e.flags & 1048576) !== 0 && Ps(e, Pa, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (((t = Xl(e.elementType)), (e.type = t), typeof t == "function"))
            Vi(t)
              ? ((a = Jl(t, a)), (e.tag = 1), (e = gr(null, e, t, a, l)))
              : ((e.tag = 0), (e = jc(null, e, t, a, l)));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === xt) {
                (e.tag = 11), (e = or(null, e, t, a, l));
                break t;
              } else if (n === tt) {
                (e.tag = 14), (e = rr(null, e, t, a, l));
                break t;
              }
            }
            throw ((e = Be(t) || t), Error(f(306, e, "")));
          }
        }
        return e;
      case 0:
        return jc(t, e, e.type, e.pendingProps, l);
      case 1:
        return (a = e.type), (n = Jl(a, e.pendingProps)), gr(t, e, a, n, l);
      case 3:
        t: {
          if ((Jt(e, e.stateNode.containerInfo), t === null))
            throw Error(f(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          (n = u.element), ic(t, e), fn(e, a, null, l);
          var i = e.memoizedState;
          if (
            ((a = i.cache),
            sl(e, Dt, a),
            a !== u.cache && tc(e, [Dt], l, !0),
            cn(),
            (a = i.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: i.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = pr(t, e, a, l);
              break t;
            } else if (a !== n) {
              (n = pe(Error(f(424)), e)), tn(n), (e = pr(t, e, a, l));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                St = Ee(t.firstChild),
                  Gt = e,
                  ct = !0,
                  cl = null,
                  Ae = !0,
                  l = mo(e, null, a, l),
                  e.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
            }
          else {
            if ((ql(), a === n)) {
              e = Ve(t, e, l);
              break t;
            }
            Qt(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Ou(t, e),
          t === null
            ? (l = jd(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : ct ||
                ((l = e.type),
                (t = e.pendingProps),
                (a = Qu(lt.current).createElement(l)),
                (a[Lt] = e),
                (a[Wt] = t),
                Vt(a, l, t),
                qt(a),
                (e.stateNode = a))
            : (e.memoizedState = jd(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          wa(e),
          t === null &&
            ct &&
            ((a = e.stateNode = Cd(e.type, e.pendingProps, lt.current)),
            (Gt = e),
            (Ae = !0),
            (n = St),
            xl(e.type) ? ((Sf = n), (St = Ee(a.firstChild))) : (St = n)),
          Qt(t, e, e.pendingProps.children, l),
          Ou(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            ct &&
            ((n = a = St) &&
              ((a = Cy(a, e.type, e.pendingProps, Ae)),
              a !== null
                ? ((e.stateNode = a),
                  (Gt = e),
                  (St = Ee(a.firstChild)),
                  (Ae = !1),
                  (n = !0))
                : (n = !1)),
            n || fl(e)),
          wa(e),
          (n = e.type),
          (u = e.pendingProps),
          (i = t !== null ? t.memoizedProps : null),
          (a = u.children),
          yf(n, u) ? (a = null) : i !== null && yf(n, i) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((n = mc(t, e, Vh, null, null, l)), (Mn._currentValue = n)),
          Ou(t, e),
          Qt(t, e, a, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            ct &&
            ((t = l = St) &&
              ((l = Ry(l, e.pendingProps, Ae)),
              l !== null
                ? ((e.stateNode = l), (Gt = e), (St = null), (t = !0))
                : (t = !1)),
            t || fl(e)),
          null
        );
      case 13:
        return br(t, e, l);
      case 4:
        return (
          Jt(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = Vl(e, null, a, l)) : Qt(t, e, a, l),
          e.child
        );
      case 11:
        return or(t, e, e.type, e.pendingProps, l);
      case 7:
        return Qt(t, e, e.pendingProps, l), e.child;
      case 8:
        return Qt(t, e, e.pendingProps.children, l), e.child;
      case 12:
        return Qt(t, e, e.pendingProps.children, l), e.child;
      case 10:
        return (
          (a = e.pendingProps),
          sl(e, e.type, a.value),
          Qt(t, e, a.children, l),
          e.child
        );
      case 9:
        return (
          (n = e.type._context),
          (a = e.pendingProps.children),
          Ll(e),
          (n = Xt(n)),
          (a = a(n)),
          (e.flags |= 1),
          Qt(t, e, a, l),
          e.child
        );
      case 14:
        return rr(t, e, e.type, e.pendingProps, l);
      case 15:
        return dr(t, e, e.type, e.pendingProps, l);
      case 19:
        return Ar(t, e, l);
      case 31:
        return Ph(t, e, l);
      case 22:
        return mr(t, e, l, e.pendingProps);
      case 24:
        return (
          Ll(e),
          (a = Xt(Dt)),
          t === null
            ? ((n = ac()),
              n === null &&
                ((n = bt),
                (u = ec()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= l),
                (n = u)),
              (e.memoizedState = { parent: a, cache: n }),
              uc(e),
              sl(e, Dt, n))
            : ((t.lanes & l) !== 0 && (ic(t, e), fn(e, null, null, l), cn()),
              (n = t.memoizedState),
              (u = e.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (e.memoizedState = n),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = n),
                  sl(e, Dt, a))
                : ((a = u.cache),
                  sl(e, Dt, a),
                  a !== n.cache && tc(e, [Dt], l, !0))),
          Qt(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(f(156, e.tag));
  }
  function Ke(t) {
    t.flags |= 4;
  }
  function Lc(t, e, l, a, n) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (n & 335544128) === n))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Fr()) t.flags |= 8192;
        else throw ((Ql = du), nc);
    } else t.flags &= -16777217;
  }
  function Er(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !wd(e)))
      if (Fr()) t.flags |= 8192;
      else throw ((Ql = du), nc);
  }
  function Nu(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? es() : 536870912), (t.lanes |= e), (_a |= e));
  }
  function hn(t, e) {
    if (!ct)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), (e = e.sibling);
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), (l = l.sibling);
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function At(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      a = 0;
    if (e)
      for (var n = t.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = t),
          (n = n.sibling);
    else
      for (n = t.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = t),
          (n = n.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = l), e;
  }
  function ey(t, e, l) {
    var a = e.pendingProps;
    switch ((Fi(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return At(e), null;
      case 1:
        return At(e), null;
      case 3:
        return (
          (l = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          Ge(Dt),
          Nt(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (ma(e)
              ? Ke(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), $i())),
          At(e),
          null
        );
      case 26:
        var n = e.type,
          u = e.memoizedState;
        return (
          t === null
            ? (Ke(e),
              u !== null ? (At(e), Er(e, u)) : (At(e), Lc(e, n, null, a, l)))
            : u
            ? u !== t.memoizedState
              ? (Ke(e), At(e), Er(e, u))
              : (At(e), (e.flags &= -16777217))
            : ((t = t.memoizedProps),
              t !== a && Ke(e),
              At(e),
              Lc(e, n, t, a, l)),
          null
        );
      case 27:
        if (
          (Zn(e),
          (l = lt.current),
          (n = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== a && Ke(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166));
            return At(e), null;
          }
          (t = G.current),
            ma(e) ? eo(e) : ((t = Cd(n, a, l)), (e.stateNode = t), Ke(e));
        }
        return At(e), null;
      case 5:
        if ((Zn(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && Ke(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166));
            return At(e), null;
          }
          if (((u = G.current), ma(e))) eo(e);
          else {
            var i = Qu(lt.current);
            switch (u) {
              case 1:
                u = i.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    u = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (u = i.createElement("div")),
                      (u.innerHTML = "<script></script>"),
                      (u = u.removeChild(u.firstChild));
                    break;
                  case "select":
                    (u =
                      typeof a.is == "string"
                        ? i.createElement("select", { is: a.is })
                        : i.createElement("select")),
                      a.multiple
                        ? (u.multiple = !0)
                        : a.size && (u.size = a.size);
                    break;
                  default:
                    u =
                      typeof a.is == "string"
                        ? i.createElement(n, { is: a.is })
                        : i.createElement(n);
                }
            }
            (u[Lt] = e), (u[Wt] = a);
            t: for (i = e.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                (i.child.return = i), (i = i.child);
                continue;
              }
              if (i === e) break t;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === e) break t;
                i = i.return;
              }
              (i.sibling.return = i.return), (i = i.sibling);
            }
            e.stateNode = u;
            t: switch ((Vt(u, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && Ke(e);
          }
        }
        return (
          At(e),
          Lc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && Ke(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(f(166));
          if (((t = lt.current), ma(e))) {
            if (
              ((t = e.stateNode),
              (l = e.memoizedProps),
              (a = null),
              (n = Gt),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            (t[Lt] = e),
              (t = !!(
                t.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                bd(t.nodeValue, l)
              )),
              t || fl(e, !0);
          } else (t = Qu(t).createTextNode(a)), (t[Lt] = e), (e.stateNode = t);
        }
        return At(e), null;
      case 31:
        if (((l = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((a = ma(e)), l !== null)) {
            if (t === null) {
              if (!a) throw Error(f(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(f(557));
              t[Lt] = e;
            } else
              ql(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            At(e), (t = !1);
          } else
            (l = $i()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = l),
              (t = !0);
          if (!t) return e.flags & 256 ? (re(e), e) : (re(e), null);
          if ((e.flags & 128) !== 0) throw Error(f(558));
        }
        return At(e), null;
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((n = ma(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!n) throw Error(f(318));
              if (
                ((n = e.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(f(317));
              n[Lt] = e;
            } else
              ql(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            At(e), (n = !1);
          } else
            (n = $i()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (n = !0);
          if (!n) return e.flags & 256 ? (re(e), e) : (re(e), null);
        }
        return (
          re(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = l), e)
            : ((l = a !== null),
              (t = t !== null && t.memoizedState !== null),
              l &&
                ((a = e.child),
                (n = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (n = a.alternate.memoizedState.cachePool.pool),
                (u = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (u = a.memoizedState.cachePool.pool),
                u !== n && (a.flags |= 2048)),
              l !== t && l && (e.child.flags |= 8192),
              Nu(e, e.updateQueue),
              At(e),
              null)
        );
      case 4:
        return Nt(), t === null && of(e.stateNode.containerInfo), At(e), null;
      case 10:
        return Ge(e.type), At(e), null;
      case 19:
        if ((U(Ct), (a = e.memoizedState), a === null)) return At(e), null;
        if (((n = (e.flags & 128) !== 0), (u = a.rendering), u === null))
          if (n) hn(a, !1);
          else {
            if (Mt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((u = vu(t)), u !== null)) {
                  for (
                    e.flags |= 128,
                      hn(a, !1),
                      t = u.updateQueue,
                      e.updateQueue = t,
                      Nu(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;

                  )
                    Ws(l, t), (l = l.sibling);
                  return (
                    q(Ct, (Ct.current & 1) | 2),
                    ct && Ze(e, a.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            a.tail !== null &&
              ue() > Uu &&
              ((e.flags |= 128), (n = !0), hn(a, !1), (e.lanes = 4194304));
          }
        else {
          if (!n)
            if (((t = vu(u)), t !== null)) {
              if (
                ((e.flags |= 128),
                (n = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Nu(e, t),
                hn(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !u.alternate &&
                  !ct)
              )
                return At(e), null;
            } else
              2 * ue() - a.renderingStartTime > Uu &&
                l !== 536870912 &&
                ((e.flags |= 128), (n = !0), hn(a, !1), (e.lanes = 4194304));
          a.isBackwards
            ? ((u.sibling = e.child), (e.child = u))
            : ((t = a.last),
              t !== null ? (t.sibling = u) : (e.child = u),
              (a.last = u));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = ue()),
            (t.sibling = null),
            (l = Ct.current),
            q(Ct, n ? (l & 1) | 2 : l & 1),
            ct && Ze(e, a.treeForkCount),
            t)
          : (At(e), null);
      case 22:
      case 23:
        return (
          re(e),
          oc(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (At(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : At(e),
          (l = e.updateQueue),
          l !== null && Nu(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== l && (e.flags |= 2048),
          t !== null && U(Gl),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          Ge(Dt),
          At(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, e.tag));
  }
  function ly(t, e) {
    switch ((Fi(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          Ge(Dt),
          Nt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Zn(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if ((re(e), e.alternate === null)) throw Error(f(340));
          ql();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (re(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(f(340));
          ql();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return U(Ct), null;
      case 4:
        return Nt(), null;
      case 10:
        return Ge(e.type), null;
      case 22:
      case 23:
        return (
          re(e),
          oc(),
          t !== null && U(Gl),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return Ge(Dt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function zr(t, e) {
    switch ((Fi(e), e.tag)) {
      case 3:
        Ge(Dt), Nt();
        break;
      case 26:
      case 27:
      case 5:
        Zn(e);
        break;
      case 4:
        Nt();
        break;
      case 31:
        e.memoizedState !== null && re(e);
        break;
      case 13:
        re(e);
        break;
      case 19:
        U(Ct);
        break;
      case 10:
        Ge(e.type);
        break;
      case 22:
      case 23:
        re(e), oc(), t !== null && U(Gl);
        break;
      case 24:
        Ge(Dt);
    }
  }
  function yn(t, e) {
    try {
      var l = e.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var u = l.create,
              i = l.inst;
            (a = u()), (i.destroy = a);
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (s) {
      mt(e, e.return, s);
    }
  }
  function yl(t, e, l) {
    try {
      var a = e.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst,
              s = i.destroy;
            if (s !== void 0) {
              (i.destroy = void 0), (n = e);
              var m = l,
                E = s;
              try {
                E();
              } catch (C) {
                mt(n, m, C);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (C) {
      mt(e, e.return, C);
    }
  }
  function Tr(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        yo(e, l);
      } catch (a) {
        mt(t, t.return, a);
      }
    }
  }
  function _r(t, e, l) {
    (l.props = Jl(t.type, t.memoizedProps)), (l.state = t.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (a) {
      mt(t, e, a);
    }
  }
  function vn(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? (t.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      mt(t, e, n);
    }
  }
  function Re(t, e) {
    var l = t.ref,
      a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          mt(t, e, n);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          mt(t, e, n);
        }
      else l.current = null;
  }
  function Or(t) {
    var e = t.type,
      l = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      mt(t, t.return, n);
    }
  }
  function Gc(t, e, l) {
    try {
      var a = t.stateNode;
      zy(a, t.type, l, e), (a[Wt] = e);
    } catch (n) {
      mt(t, t.return, n);
    }
  }
  function Mr(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && xl(t.type)) ||
      t.tag === 4
    );
  }
  function Xc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Mr(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && xl(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Qc(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode),
        e
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
              ? l.ownerDocument.body
              : l
            ).insertBefore(t, e)
          : ((e =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l),
            e.appendChild(t),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = Ye));
    else if (
      a !== 4 &&
      (a === 27 && xl(t.type) && ((l = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Qc(t, e, l), t = t.sibling; t !== null; )
        Qc(t, e, l), (t = t.sibling);
  }
  function Cu(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (
      a !== 4 &&
      (a === 27 && xl(t.type) && (l = t.stateNode), (t = t.child), t !== null)
    )
      for (Cu(t, e, l), t = t.sibling; t !== null; )
        Cu(t, e, l), (t = t.sibling);
  }
  function Nr(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      Vt(e, a, l), (e[Lt] = t), (e[Wt] = l);
    } catch (u) {
      mt(t, t.return, u);
    }
  }
  var Je = !1,
    Bt = !1,
    Vc = !1,
    Cr = typeof WeakSet == "function" ? WeakSet : Set,
    Zt = null;
  function ay(t, e) {
    if (((t = t.containerInfo), (mf = $u), (t = Ls(t)), wi(t))) {
      if ("selectionStart" in t)
        var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, u.nodeType;
            } catch {
              l = null;
              break t;
            }
            var i = 0,
              s = -1,
              m = -1,
              E = 0,
              C = 0,
              j = t,
              z = null;
            e: for (;;) {
              for (
                var M;
                j !== l || (n !== 0 && j.nodeType !== 3) || (s = i + n),
                  j !== u || (a !== 0 && j.nodeType !== 3) || (m = i + a),
                  j.nodeType === 3 && (i += j.nodeValue.length),
                  (M = j.firstChild) !== null;

              )
                (z = j), (j = M);
              for (;;) {
                if (j === t) break e;
                if (
                  (z === l && ++E === n && (s = i),
                  z === u && ++C === a && (m = i),
                  (M = j.nextSibling) !== null)
                )
                  break;
                (j = z), (z = j.parentNode);
              }
              j = M;
            }
            l = s === -1 || m === -1 ? null : { start: s, end: m };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      hf = { focusedElem: t, selectionRange: l }, $u = !1, Zt = e;
      Zt !== null;

    )
      if (
        ((e = Zt), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = e), (Zt = t);
      else
        for (; Zt !== null; ) {
          switch (((e = Zt), (u = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (l = 0; l < t.length; l++)
                  (n = t[l]), (n.ref.impl = n.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                (t = void 0),
                  (l = e),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = l.stateNode);
                try {
                  var L = Jl(l.type, n);
                  (t = a.getSnapshotBeforeUpdate(L, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = t);
                } catch (k) {
                  mt(l, l.return, k);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
                )
                  gf(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      gf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(f(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Zt = t);
            break;
          }
          Zt = e.return;
        }
  }
  function Rr(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Fe(t, l), a & 4 && yn(5, l);
        break;
      case 1:
        if ((Fe(t, l), a & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (i) {
              mt(l, l.return, i);
            }
          else {
            var n = Jl(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              mt(l, l.return, i);
            }
          }
        a & 64 && Tr(l), a & 512 && vn(l, l.return);
        break;
      case 3:
        if ((Fe(t, l), a & 64 && ((t = l.updateQueue), t !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            yo(t, e);
          } catch (i) {
            mt(l, l.return, i);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Nr(l);
      case 26:
      case 5:
        Fe(t, l), e === null && a & 4 && Or(l), a & 512 && vn(l, l.return);
        break;
      case 12:
        Fe(t, l);
        break;
      case 31:
        Fe(t, l), a & 4 && Ur(t, l);
        break;
      case 13:
        Fe(t, l),
          a & 4 && Br(t, l),
          a & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = dy.bind(null, l)), Dy(t, l))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || Je), !a)) {
          (e = (e !== null && e.memoizedState !== null) || Bt), (n = Je);
          var u = Bt;
          (Je = a),
            (Bt = e) && !u ? We(t, l, (l.subtreeFlags & 8772) !== 0) : Fe(t, l),
            (Je = n),
            (Bt = u);
        }
        break;
      case 30:
        break;
      default:
        Fe(t, l);
    }
  }
  function Dr(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), Dr(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Ai(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Et = null,
    It = !1;
  function ke(t, e, l) {
    for (l = l.child; l !== null; ) jr(t, e, l), (l = l.sibling);
  }
  function jr(t, e, l) {
    if (ie && typeof ie.onCommitFiberUnmount == "function")
      try {
        ie.onCommitFiberUnmount(qa, l);
      } catch {}
    switch (l.tag) {
      case 26:
        Bt || Re(l, e),
          ke(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        Bt || Re(l, e);
        var a = Et,
          n = It;
        xl(l.type) && ((Et = l.stateNode), (It = !1)),
          ke(t, e, l),
          Tn(l.stateNode),
          (Et = a),
          (It = n);
        break;
      case 5:
        Bt || Re(l, e);
      case 6:
        if (
          ((a = Et),
          (n = It),
          (Et = null),
          ke(t, e, l),
          (Et = a),
          (It = n),
          Et !== null)
        )
          if (It)
            try {
              (Et.nodeType === 9
                ? Et.body
                : Et.nodeName === "HTML"
                ? Et.ownerDocument.body
                : Et
              ).removeChild(l.stateNode);
            } catch (u) {
              mt(l, e, u);
            }
          else
            try {
              Et.removeChild(l.stateNode);
            } catch (u) {
              mt(l, e, u);
            }
        break;
      case 18:
        Et !== null &&
          (It
            ? ((t = Et),
              Td(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                l.stateNode
              ),
              Ua(t))
            : Td(Et, l.stateNode));
        break;
      case 4:
        (a = Et),
          (n = It),
          (Et = l.stateNode.containerInfo),
          (It = !0),
          ke(t, e, l),
          (Et = a),
          (It = n);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        yl(2, l, e), Bt || yl(4, l, e), ke(t, e, l);
        break;
      case 1:
        Bt ||
          (Re(l, e),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && _r(l, e, a)),
          ke(t, e, l);
        break;
      case 21:
        ke(t, e, l);
        break;
      case 22:
        (Bt = (a = Bt) || l.memoizedState !== null), ke(t, e, l), (Bt = a);
        break;
      default:
        ke(t, e, l);
    }
  }
  function Ur(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        Ua(t);
      } catch (l) {
        mt(e, e.return, l);
      }
    }
  }
  function Br(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Ua(t);
      } catch (l) {
        mt(e, e.return, l);
      }
  }
  function ny(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Cr()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Cr()),
          e
        );
      default:
        throw Error(f(435, t.tag));
    }
  }
  function Ru(t, e) {
    var l = ny(t);
    e.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var n = my.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function Pt(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          u = t,
          i = e,
          s = i;
        t: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (xl(s.type)) {
                (Et = s.stateNode), (It = !1);
                break t;
              }
              break;
            case 5:
              (Et = s.stateNode), (It = !1);
              break t;
            case 3:
            case 4:
              (Et = s.stateNode.containerInfo), (It = !0);
              break t;
          }
          s = s.return;
        }
        if (Et === null) throw Error(f(160));
        jr(u, i, n),
          (Et = null),
          (It = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null);
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) Hr(e, t), (e = e.sibling);
  }
  var Oe = null;
  function Hr(t, e) {
    var l = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Pt(e, t),
          te(t),
          a & 4 && (yl(3, t, t.return), yn(3, t), yl(5, t, t.return));
        break;
      case 1:
        Pt(e, t),
          te(t),
          a & 512 && (Bt || l === null || Re(l, l.return)),
          a & 64 &&
            Je &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
        break;
      case 26:
        var n = Oe;
        if (
          (Pt(e, t),
          te(t),
          a & 512 && (Bt || l === null || Re(l, l.return)),
          a & 4)
        ) {
          var u = l !== null ? l.memoizedState : null;
          if (((a = t.memoizedState), l === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  (a = t.type),
                    (l = t.memoizedProps),
                    (n = n.ownerDocument || n);
                  e: switch (a) {
                    case "title":
                      (u = n.getElementsByTagName("title")[0]),
                        (!u ||
                          u[Ga] ||
                          u[Lt] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector("head > title")
                          )),
                        Vt(u, a, l),
                        (u[Lt] = t),
                        qt(u),
                        (a = u);
                      break t;
                    case "link":
                      var i = Hd("link", "href", n).get(a + (l.href || ""));
                      if (i) {
                        for (var s = 0; s < i.length; s++)
                          if (
                            ((u = i[s]),
                            u.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              u.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              u.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              u.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            i.splice(s, 1);
                            break e;
                          }
                      }
                      (u = n.createElement(a)),
                        Vt(u, a, l),
                        n.head.appendChild(u);
                      break;
                    case "meta":
                      if (
                        (i = Hd("meta", "content", n).get(
                          a + (l.content || "")
                        ))
                      ) {
                        for (s = 0; s < i.length; s++)
                          if (
                            ((u = i[s]),
                            u.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              u.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              u.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              u.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            i.splice(s, 1);
                            break e;
                          }
                      }
                      (u = n.createElement(a)),
                        Vt(u, a, l),
                        n.head.appendChild(u);
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  (u[Lt] = t), qt(u), (a = u);
                }
                t.stateNode = a;
              } else Yd(n, t.type, t.stateNode);
            else t.stateNode = Bd(n, a, t.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : u.count--,
                a === null
                  ? Yd(n, t.type, t.stateNode)
                  : Bd(n, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                Gc(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        Pt(e, t),
          te(t),
          a & 512 && (Bt || l === null || Re(l, l.return)),
          l !== null && a & 4 && Gc(t, t.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (
          (Pt(e, t),
          te(t),
          a & 512 && (Bt || l === null || Re(l, l.return)),
          t.flags & 32)
        ) {
          n = t.stateNode;
          try {
            aa(n, "");
          } catch (L) {
            mt(t, t.return, L);
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((n = t.memoizedProps), Gc(t, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (Vc = !0);
        break;
      case 6:
        if ((Pt(e, t), te(t), a & 4)) {
          if (t.stateNode === null) throw Error(f(162));
          (a = t.memoizedProps), (l = t.stateNode);
          try {
            l.nodeValue = a;
          } catch (L) {
            mt(t, t.return, L);
          }
        }
        break;
      case 3:
        if (
          ((Ju = null),
          (n = Oe),
          (Oe = Vu(e.containerInfo)),
          Pt(e, t),
          (Oe = n),
          te(t),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Ua(e.containerInfo);
          } catch (L) {
            mt(t, t.return, L);
          }
        Vc && ((Vc = !1), Yr(t));
        break;
      case 4:
        (a = Oe),
          (Oe = Vu(t.stateNode.containerInfo)),
          Pt(e, t),
          te(t),
          (Oe = a);
        break;
      case 12:
        Pt(e, t), te(t);
        break;
      case 31:
        Pt(e, t),
          te(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Ru(t, a)));
        break;
      case 13:
        Pt(e, t),
          te(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (ju = ue()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Ru(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var m = l !== null && l.memoizedState !== null,
          E = Je,
          C = Bt;
        if (
          ((Je = E || n),
          (Bt = C || m),
          Pt(e, t),
          (Bt = C),
          (Je = E),
          te(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = n ? e._visibility & -2 : e._visibility | 1,
              n && (l === null || m || Je || Bt || kl(t)),
              l = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                m = l = e;
                try {
                  if (((u = m.stateNode), n))
                    (i = u.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none");
                  else {
                    s = m.stateNode;
                    var j = m.memoizedProps.style,
                      z =
                        j != null && j.hasOwnProperty("display")
                          ? j.display
                          : null;
                    s.style.display =
                      z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (L) {
                  mt(m, m.return, L);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                m = e;
                try {
                  m.stateNode.nodeValue = n ? "" : m.memoizedProps;
                } catch (L) {
                  mt(m, m.return, L);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                m = e;
                try {
                  var M = m.stateNode;
                  n ? _d(M, !0) : _d(m.stateNode, !1);
                } catch (L) {
                  mt(m, m.return, L);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), (e = e.return);
            }
            l === e && (l = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), Ru(t, l))));
        break;
      case 19:
        Pt(e, t),
          te(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Ru(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Pt(e, t), te(t);
    }
  }
  function te(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (Mr(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              u = Xc(t);
            Cu(t, u, n);
            break;
          case 5:
            var i = l.stateNode;
            l.flags & 32 && (aa(i, ""), (l.flags &= -33));
            var s = Xc(t);
            Cu(t, s, i);
            break;
          case 3:
          case 4:
            var m = l.stateNode.containerInfo,
              E = Xc(t);
            Qc(t, E, m);
            break;
          default:
            throw Error(f(161));
        }
      } catch (C) {
        mt(t, t.return, C);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Yr(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Yr(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function Fe(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) Rr(t, e.alternate, e), (e = e.sibling);
  }
  function kl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          yl(4, e, e.return), kl(e);
          break;
        case 1:
          Re(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && _r(e, e.return, l),
            kl(e);
          break;
        case 27:
          Tn(e.stateNode);
        case 26:
        case 5:
          Re(e, e.return), kl(e);
          break;
        case 22:
          e.memoizedState === null && kl(e);
          break;
        case 30:
          kl(e);
          break;
        default:
          kl(e);
      }
      t = t.sibling;
    }
  }
  function We(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        n = t,
        u = e,
        i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          We(n, u, l), yn(4, u);
          break;
        case 1:
          if (
            (We(n, u, l),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (E) {
              mt(a, a.return, E);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var s = a.stateNode;
            try {
              var m = n.shared.hiddenCallbacks;
              if (m !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++)
                  ho(m[n], s);
            } catch (E) {
              mt(a, a.return, E);
            }
          }
          l && i & 64 && Tr(u), vn(u, u.return);
          break;
        case 27:
          Nr(u);
        case 26:
        case 5:
          We(n, u, l), l && a === null && i & 4 && Or(u), vn(u, u.return);
          break;
        case 12:
          We(n, u, l);
          break;
        case 31:
          We(n, u, l), l && i & 4 && Ur(n, u);
          break;
        case 13:
          We(n, u, l), l && i & 4 && Br(n, u);
          break;
        case 22:
          u.memoizedState === null && We(n, u, l), vn(u, u.return);
          break;
        case 30:
          break;
        default:
          We(n, u, l);
      }
      e = e.sibling;
    }
  }
  function Kc(t, e) {
    var l = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && en(l));
  }
  function Jc(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && en(t));
  }
  function Me(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) wr(t, e, l, a), (e = e.sibling);
  }
  function wr(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Me(t, e, l, a), n & 2048 && yn(9, e);
        break;
      case 1:
        Me(t, e, l, a);
        break;
      case 3:
        Me(t, e, l, a),
          n & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && en(t)));
        break;
      case 12:
        if (n & 2048) {
          Me(t, e, l, a), (t = e.stateNode);
          try {
            var u = e.memoizedProps,
              i = u.id,
              s = u.onPostCommit;
            typeof s == "function" &&
              s(
                i,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (m) {
            mt(e, e.return, m);
          }
        } else Me(t, e, l, a);
        break;
      case 31:
        Me(t, e, l, a);
        break;
      case 13:
        Me(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        (u = e.stateNode),
          (i = e.alternate),
          e.memoizedState !== null
            ? u._visibility & 2
              ? Me(t, e, l, a)
              : gn(t, e)
            : u._visibility & 2
            ? Me(t, e, l, a)
            : ((u._visibility |= 2),
              Ea(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && Kc(i, e);
        break;
      case 24:
        Me(t, e, l, a), n & 2048 && Jc(e.alternate, e);
        break;
      default:
        Me(t, e, l, a);
    }
  }
  function Ea(t, e, l, a, n) {
    for (
      n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;

    ) {
      var u = t,
        i = e,
        s = l,
        m = a,
        E = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Ea(u, i, s, m, n), yn(8, i);
          break;
        case 23:
          break;
        case 22:
          var C = i.stateNode;
          i.memoizedState !== null
            ? C._visibility & 2
              ? Ea(u, i, s, m, n)
              : gn(u, i)
            : ((C._visibility |= 2), Ea(u, i, s, m, n)),
            n && E & 2048 && Kc(i.alternate, i);
          break;
        case 24:
          Ea(u, i, s, m, n), n && E & 2048 && Jc(i.alternate, i);
          break;
        default:
          Ea(u, i, s, m, n);
      }
      e = e.sibling;
    }
  }
  function gn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          a = e,
          n = a.flags;
        switch (a.tag) {
          case 22:
            gn(l, a), n & 2048 && Kc(a.alternate, a);
            break;
          case 24:
            gn(l, a), n & 2048 && Jc(a.alternate, a);
            break;
          default:
            gn(l, a);
        }
        e = e.sibling;
      }
  }
  var pn = 8192;
  function za(t, e, l) {
    if (t.subtreeFlags & pn)
      for (t = t.child; t !== null; ) qr(t, e, l), (t = t.sibling);
  }
  function qr(t, e, l) {
    switch (t.tag) {
      case 26:
        za(t, e, l),
          t.flags & pn &&
            t.memoizedState !== null &&
            Qy(l, Oe, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        za(t, e, l);
        break;
      case 3:
      case 4:
        var a = Oe;
        (Oe = Vu(t.stateNode.containerInfo)), za(t, e, l), (Oe = a);
        break;
      case 22:
        t.memoizedState === null &&
          ((a = t.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = pn), (pn = 16777216), za(t, e, l), (pn = a))
            : za(t, e, l));
        break;
      default:
        za(t, e, l);
    }
  }
  function Zr(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function bn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (Zt = a), Gr(a, t);
        }
      Zr(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Lr(t), (t = t.sibling);
  }
  function Lr(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        bn(t), t.flags & 2048 && yl(9, t, t.return);
        break;
      case 3:
        bn(t);
        break;
      case 12:
        bn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Du(t))
          : bn(t);
        break;
      default:
        bn(t);
    }
  }
  function Du(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (Zt = a), Gr(a, t);
        }
      Zr(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          yl(8, e, e.return), Du(e);
          break;
        case 22:
          (l = e.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Du(e));
          break;
        default:
          Du(e);
      }
      t = t.sibling;
    }
  }
  function Gr(t, e) {
    for (; Zt !== null; ) {
      var l = Zt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          yl(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          en(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) (a.return = l), (Zt = a);
      else
        t: for (l = t; Zt !== null; ) {
          a = Zt;
          var n = a.sibling,
            u = a.return;
          if ((Dr(a), a === l)) {
            Zt = null;
            break t;
          }
          if (n !== null) {
            (n.return = u), (Zt = n);
            break t;
          }
          Zt = u;
        }
    }
  }
  var uy = {
      getCacheForType: function (t) {
        var e = Xt(Dt),
          l = e.data.get(t);
        return l === void 0 && ((l = t()), e.data.set(t, l)), l;
      },
      cacheSignal: function () {
        return Xt(Dt).controller.signal;
      },
    },
    iy = typeof WeakMap == "function" ? WeakMap : Map,
    ot = 0,
    bt = null,
    at = null,
    ut = 0,
    dt = 0,
    de = null,
    vl = !1,
    Ta = !1,
    kc = !1,
    $e = 0,
    Mt = 0,
    gl = 0,
    Fl = 0,
    Fc = 0,
    me = 0,
    _a = 0,
    Sn = null,
    ee = null,
    Wc = !1,
    ju = 0,
    Xr = 0,
    Uu = 1 / 0,
    Bu = null,
    pl = null,
    wt = 0,
    bl = null,
    Oa = null,
    Ie = 0,
    $c = 0,
    Ic = null,
    Qr = null,
    An = 0,
    Pc = null;
  function he() {
    return (ot & 2) !== 0 && ut !== 0 ? ut & -ut : R.T !== null ? uf() : us();
  }
  function Vr() {
    if (me === 0)
      if ((ut & 536870912) === 0 || ct) {
        var t = Xn;
        (Xn <<= 1), (Xn & 3932160) === 0 && (Xn = 262144), (me = t);
      } else me = 536870912;
    return (t = oe.current), t !== null && (t.flags |= 32), me;
  }
  function le(t, e, l) {
    ((t === bt && (dt === 2 || dt === 9)) || t.cancelPendingCommit !== null) &&
      (Ma(t, 0), Sl(t, ut, me, !1)),
      La(t, l),
      ((ot & 2) === 0 || t !== bt) &&
        (t === bt &&
          ((ot & 2) === 0 && (Fl |= l), Mt === 4 && Sl(t, ut, me, !1)),
        De(t));
  }
  function Kr(t, e, l) {
    if ((ot & 6) !== 0) throw Error(f(327));
    var a = (!l && (e & 127) === 0 && (e & t.expiredLanes) === 0) || Za(t, e),
      n = a ? sy(t, e) : ef(t, e, !0),
      u = a;
    do {
      if (n === 0) {
        Ta && !a && Sl(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), u && !cy(l))) {
          (n = ef(t, e, !1)), (u = !1);
          continue;
        }
        if (n === 2) {
          if (((u = e), t.errorRecoveryDisabledLanes & u)) var i = 0;
          else
            (i = t.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0);
          if (i !== 0) {
            e = i;
            t: {
              var s = t;
              n = Sn;
              var m = s.current.memoizedState.isDehydrated;
              if ((m && (Ma(s, i).flags |= 256), (i = ef(s, i, !1)), i !== 2)) {
                if (kc && !m) {
                  (s.errorRecoveryDisabledLanes |= u), (Fl |= u), (n = 4);
                  break t;
                }
                (u = ee),
                  (ee = n),
                  u !== null && (ee === null ? (ee = u) : ee.push.apply(ee, u));
              }
              n = i;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          Ma(t, 0), Sl(t, e, 0, !0);
          break;
        }
        t: {
          switch (((a = t), (u = n), u)) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Sl(a, e, me, !vl);
              break t;
            case 2:
              ee = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((e & 62914560) === e && ((n = ju + 300 - ue()), 10 < n)) {
            if ((Sl(a, e, me, !vl), Vn(a, 0, !0) !== 0)) break t;
            (Ie = e),
              (a.timeoutHandle = Ed(
                Jr.bind(
                  null,
                  a,
                  l,
                  ee,
                  Bu,
                  Wc,
                  e,
                  me,
                  Fl,
                  _a,
                  vl,
                  u,
                  "Throttled",
                  -0,
                  0
                ),
                n
              ));
            break t;
          }
          Jr(a, l, ee, Bu, Wc, e, me, Fl, _a, vl, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    De(t);
  }
  function Jr(t, e, l, a, n, u, i, s, m, E, C, j, z, M) {
    if (
      ((t.timeoutHandle = -1),
      (j = e.subtreeFlags),
      j & 8192 || (j & 16785408) === 16785408)
    ) {
      (j = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ye,
      }),
        qr(e, u, j);
      var L =
        (u & 62914560) === u ? ju - ue() : (u & 4194048) === u ? Xr - ue() : 0;
      if (((L = Vy(j, L)), L !== null)) {
        (Ie = u),
          (t.cancelPendingCommit = L(
            ed.bind(null, t, e, u, l, a, n, i, s, m, C, j, null, z, M)
          )),
          Sl(t, u, i, !E);
        return;
      }
    }
    ed(t, e, u, l, a, n, i, s, m);
  }
  function cy(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!fe(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
        (l.return = e), (e = l);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function Sl(t, e, l, a) {
    (e &= ~Fc),
      (e &= ~Fl),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes);
    for (var n = e; 0 < n; ) {
      var u = 31 - ce(n),
        i = 1 << u;
      (a[u] = -1), (n &= ~i);
    }
    l !== 0 && ls(t, l, e);
  }
  function Hu() {
    return (ot & 6) === 0 ? (xn(0), !1) : !0;
  }
  function tf() {
    if (at !== null) {
      if (dt === 0) var t = at.return;
      else (t = at), (Le = Zl = null), vc(t), (pa = null), (an = 0), (t = at);
      for (; t !== null; ) zr(t.alternate, t), (t = t.return);
      at = null;
    }
  }
  function Ma(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && ((t.timeoutHandle = -1), Oy(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      (Ie = 0),
      tf(),
      (bt = t),
      (at = l = qe(t.current, null)),
      (ut = e),
      (dt = 0),
      (de = null),
      (vl = !1),
      (Ta = Za(t, e)),
      (kc = !1),
      (_a = me = Fc = Fl = gl = Mt = 0),
      (ee = Sn = null),
      (Wc = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - ce(a),
          u = 1 << n;
        (e |= t[n]), (a &= ~u);
      }
    return ($e = e), au(), l;
  }
  function kr(t, e) {
    (P = null),
      (R.H = dn),
      e === ga || e === ru
        ? ((e = so()), (dt = 3))
        : e === nc
        ? ((e = so()), (dt = 4))
        : (dt =
            e === Dc
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (de = e),
      at === null && ((Mt = 1), Tu(t, pe(e, t.current)));
  }
  function Fr() {
    var t = oe.current;
    return t === null
      ? !0
      : (ut & 4194048) === ut
      ? xe === null
      : (ut & 62914560) === ut || (ut & 536870912) !== 0
      ? t === xe
      : !1;
  }
  function Wr() {
    var t = R.H;
    return (R.H = dn), t === null ? dn : t;
  }
  function $r() {
    var t = R.A;
    return (R.A = uy), t;
  }
  function Yu() {
    (Mt = 4),
      vl || ((ut & 4194048) !== ut && oe.current !== null) || (Ta = !0),
      ((gl & 134217727) === 0 && (Fl & 134217727) === 0) ||
        bt === null ||
        Sl(bt, ut, me, !1);
  }
  function ef(t, e, l) {
    var a = ot;
    ot |= 2;
    var n = Wr(),
      u = $r();
    (bt !== t || ut !== e) && ((Bu = null), Ma(t, e)), (e = !1);
    var i = Mt;
    t: do
      try {
        if (dt !== 0 && at !== null) {
          var s = at,
            m = de;
          switch (dt) {
            case 8:
              tf(), (i = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              oe.current === null && (e = !0);
              var E = dt;
              if (((dt = 0), (de = null), Na(t, s, m, E), l && Ta)) {
                i = 0;
                break t;
              }
              break;
            default:
              (E = dt), (dt = 0), (de = null), Na(t, s, m, E);
          }
        }
        fy(), (i = Mt);
        break;
      } catch (C) {
        kr(t, C);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Le = Zl = null),
      (ot = a),
      (R.H = n),
      (R.A = u),
      at === null && ((bt = null), (ut = 0), au()),
      i
    );
  }
  function fy() {
    for (; at !== null; ) Ir(at);
  }
  function sy(t, e) {
    var l = ot;
    ot |= 2;
    var a = Wr(),
      n = $r();
    bt !== t || ut !== e
      ? ((Bu = null), (Uu = ue() + 500), Ma(t, e))
      : (Ta = Za(t, e));
    t: do
      try {
        if (dt !== 0 && at !== null) {
          e = at;
          var u = de;
          e: switch (dt) {
            case 1:
              (dt = 0), (de = null), Na(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (co(u)) {
                (dt = 0), (de = null), Pr(e);
                break;
              }
              (e = function () {
                (dt !== 2 && dt !== 9) || bt !== t || (dt = 7), De(t);
              }),
                u.then(e, e);
              break t;
            case 3:
              dt = 7;
              break t;
            case 4:
              dt = 5;
              break t;
            case 7:
              co(u)
                ? ((dt = 0), (de = null), Pr(e))
                : ((dt = 0), (de = null), Na(t, e, u, 7));
              break;
            case 5:
              var i = null;
              switch (at.tag) {
                case 26:
                  i = at.memoizedState;
                case 5:
                case 27:
                  var s = at;
                  if (i ? wd(i) : s.stateNode.complete) {
                    (dt = 0), (de = null);
                    var m = s.sibling;
                    if (m !== null) at = m;
                    else {
                      var E = s.return;
                      E !== null ? ((at = E), wu(E)) : (at = null);
                    }
                    break e;
                  }
              }
              (dt = 0), (de = null), Na(t, e, u, 5);
              break;
            case 6:
              (dt = 0), (de = null), Na(t, e, u, 6);
              break;
            case 8:
              tf(), (Mt = 6);
              break t;
            default:
              throw Error(f(462));
          }
        }
        oy();
        break;
      } catch (C) {
        kr(t, C);
      }
    while (!0);
    return (
      (Le = Zl = null),
      (R.H = a),
      (R.A = n),
      (ot = l),
      at !== null ? 0 : ((bt = null), (ut = 0), au(), Mt)
    );
  }
  function oy() {
    for (; at !== null && !jm(); ) Ir(at);
  }
  function Ir(t) {
    var e = xr(t.alternate, t, $e);
    (t.memoizedProps = t.pendingProps), e === null ? wu(t) : (at = e);
  }
  function Pr(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = vr(l, e, e.pendingProps, e.type, void 0, ut);
        break;
      case 11:
        e = vr(l, e, e.pendingProps, e.type.render, e.ref, ut);
        break;
      case 5:
        vc(e);
      default:
        zr(l, e), (e = at = Ws(e, $e)), (e = xr(l, e, $e));
    }
    (t.memoizedProps = t.pendingProps), e === null ? wu(t) : (at = e);
  }
  function Na(t, e, l, a) {
    (Le = Zl = null), vc(e), (pa = null), (an = 0);
    var n = e.return;
    try {
      if (Ih(t, n, e, l, ut)) {
        (Mt = 1), Tu(t, pe(l, t.current)), (at = null);
        return;
      }
    } catch (u) {
      if (n !== null) throw ((at = n), u);
      (Mt = 1), Tu(t, pe(l, t.current)), (at = null);
      return;
    }
    e.flags & 32768
      ? (ct || a === 1
          ? (t = !0)
          : Ta || (ut & 536870912) !== 0
          ? (t = !1)
          : ((vl = t = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = oe.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        td(e, t))
      : wu(e);
  }
  function wu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        td(e, vl);
        return;
      }
      t = e.return;
      var l = ey(e.alternate, e, $e);
      if (l !== null) {
        at = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        at = e;
        return;
      }
      at = e = t;
    } while (e !== null);
    Mt === 0 && (Mt = 5);
  }
  function td(t, e) {
    do {
      var l = ly(t.alternate, t);
      if (l !== null) {
        (l.flags &= 32767), (at = l);
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        at = t;
        return;
      }
      at = t = l;
    } while (t !== null);
    (Mt = 6), (at = null);
  }
  function ed(t, e, l, a, n, u, i, s, m) {
    t.cancelPendingCommit = null;
    do qu();
    while (wt !== 0);
    if ((ot & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      if (
        ((u = e.lanes | e.childLanes),
        (u |= Xi),
        Xm(t, l, u, i, s, m),
        t === bt && ((at = bt = null), (ut = 0)),
        (Oa = e),
        (bl = t),
        (Ie = l),
        ($c = u),
        (Ic = n),
        (Qr = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            hy(Ln, function () {
              return id(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = R.T), (R.T = null), (n = w.p), (w.p = 2), (i = ot), (ot |= 4);
        try {
          ay(t, e, l);
        } finally {
          (ot = i), (w.p = n), (R.T = a);
        }
      }
      (wt = 1), ld(), ad(), nd();
    }
  }
  function ld() {
    if (wt === 1) {
      wt = 0;
      var t = bl,
        e = Oa,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        (l = R.T), (R.T = null);
        var a = w.p;
        w.p = 2;
        var n = ot;
        ot |= 4;
        try {
          Hr(e, t);
          var u = hf,
            i = Ls(t.containerInfo),
            s = u.focusedElem,
            m = u.selectionRange;
          if (
            i !== s &&
            s &&
            s.ownerDocument &&
            Zs(s.ownerDocument.documentElement, s)
          ) {
            if (m !== null && wi(s)) {
              var E = m.start,
                C = m.end;
              if ((C === void 0 && (C = E), "selectionStart" in s))
                (s.selectionStart = E),
                  (s.selectionEnd = Math.min(C, s.value.length));
              else {
                var j = s.ownerDocument || document,
                  z = (j && j.defaultView) || window;
                if (z.getSelection) {
                  var M = z.getSelection(),
                    L = s.textContent.length,
                    k = Math.min(m.start, L),
                    gt = m.end === void 0 ? k : Math.min(m.end, L);
                  !M.extend && k > gt && ((i = gt), (gt = k), (k = i));
                  var p = qs(s, k),
                    y = qs(s, gt);
                  if (
                    p &&
                    y &&
                    (M.rangeCount !== 1 ||
                      M.anchorNode !== p.node ||
                      M.anchorOffset !== p.offset ||
                      M.focusNode !== y.node ||
                      M.focusOffset !== y.offset)
                  ) {
                    var x = j.createRange();
                    x.setStart(p.node, p.offset),
                      M.removeAllRanges(),
                      k > gt
                        ? (M.addRange(x), M.extend(y.node, y.offset))
                        : (x.setEnd(y.node, y.offset), M.addRange(x));
                  }
                }
              }
            }
            for (j = [], M = s; (M = M.parentNode); )
              M.nodeType === 1 &&
                j.push({ element: M, left: M.scrollLeft, top: M.scrollTop });
            for (
              typeof s.focus == "function" && s.focus(), s = 0;
              s < j.length;
              s++
            ) {
              var D = j[s];
              (D.element.scrollLeft = D.left), (D.element.scrollTop = D.top);
            }
          }
          ($u = !!mf), (hf = mf = null);
        } finally {
          (ot = n), (w.p = a), (R.T = l);
        }
      }
      (t.current = e), (wt = 2);
    }
  }
  function ad() {
    if (wt === 2) {
      wt = 0;
      var t = bl,
        e = Oa,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        (l = R.T), (R.T = null);
        var a = w.p;
        w.p = 2;
        var n = ot;
        ot |= 4;
        try {
          Rr(t, e.alternate, e);
        } finally {
          (ot = n), (w.p = a), (R.T = l);
        }
      }
      wt = 3;
    }
  }
  function nd() {
    if (wt === 4 || wt === 3) {
      (wt = 0), Um();
      var t = bl,
        e = Oa,
        l = Ie,
        a = Qr;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (wt = 5)
        : ((wt = 0), (Oa = bl = null), ud(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (
        (n === 0 && (pl = null),
        bi(l),
        (e = e.stateNode),
        ie && typeof ie.onCommitFiberRoot == "function")
      )
        try {
          ie.onCommitFiberRoot(qa, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (e = R.T), (n = w.p), (w.p = 2), (R.T = null);
        try {
          for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
            var s = a[i];
            u(s.value, { componentStack: s.stack });
          }
        } finally {
          (R.T = e), (w.p = n);
        }
      }
      (Ie & 3) !== 0 && qu(),
        De(t),
        (n = t.pendingLanes),
        (l & 261930) !== 0 && (n & 42) !== 0
          ? t === Pc
            ? An++
            : ((An = 0), (Pc = t))
          : (An = 0),
        xn(0);
    }
  }
  function ud(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), en(e)));
  }
  function qu() {
    return ld(), ad(), nd(), id();
  }
  function id() {
    if (wt !== 5) return !1;
    var t = bl,
      e = $c;
    $c = 0;
    var l = bi(Ie),
      a = R.T,
      n = w.p;
    try {
      (w.p = 32 > l ? 32 : l), (R.T = null), (l = Ic), (Ic = null);
      var u = bl,
        i = Ie;
      if (((wt = 0), (Oa = bl = null), (Ie = 0), (ot & 6) !== 0))
        throw Error(f(331));
      var s = ot;
      if (
        ((ot |= 4),
        Lr(u.current),
        wr(u, u.current, i, l),
        (ot = s),
        xn(0, !1),
        ie && typeof ie.onPostCommitFiberRoot == "function")
      )
        try {
          ie.onPostCommitFiberRoot(qa, u);
        } catch {}
      return !0;
    } finally {
      (w.p = n), (R.T = a), ud(t, e);
    }
  }
  function cd(t, e, l) {
    (e = pe(l, e)),
      (e = Rc(t.stateNode, e, 2)),
      (t = dl(t, e, 2)),
      t !== null && (La(t, 2), De(t));
  }
  function mt(t, e, l) {
    if (t.tag === 3) cd(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          cd(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (pl === null || !pl.has(a)))
          ) {
            (t = pe(l, t)),
              (l = fr(2)),
              (a = dl(e, l, 2)),
              a !== null && (sr(l, a, e, t), La(a, 2), De(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function lf(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new iy();
      var n = new Set();
      a.set(e, n);
    } else (n = a.get(e)), n === void 0 && ((n = new Set()), a.set(e, n));
    n.has(l) ||
      ((kc = !0), n.add(l), (t = ry.bind(null, t, e, l)), e.then(t, t));
  }
  function ry(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      bt === t &&
        (ut & l) === l &&
        (Mt === 4 || (Mt === 3 && (ut & 62914560) === ut && 300 > ue() - ju)
          ? (ot & 2) === 0 && Ma(t, 0)
          : (Fc |= l),
        _a === ut && (_a = 0)),
      De(t);
  }
  function fd(t, e) {
    e === 0 && (e = es()), (t = Yl(t, e)), t !== null && (La(t, e), De(t));
  }
  function dy(t) {
    var e = t.memoizedState,
      l = 0;
    e !== null && (l = e.retryLane), fd(t, l);
  }
  function my(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode,
          n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    a !== null && a.delete(e), fd(t, l);
  }
  function hy(t, e) {
    return yi(t, e);
  }
  var Zu = null,
    Ca = null,
    af = !1,
    Lu = !1,
    nf = !1,
    Al = 0;
  function De(t) {
    t !== Ca &&
      t.next === null &&
      (Ca === null ? (Zu = Ca = t) : (Ca = Ca.next = t)),
      (Lu = !0),
      af || ((af = !0), vy());
  }
  function xn(t, e) {
    if (!nf && Lu) {
      nf = !0;
      do
        for (var l = !1, a = Zu; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes,
                s = a.pingedLanes;
              (u = (1 << (31 - ce(42 | t) + 1)) - 1),
                (u &= n & ~(i & ~s)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((l = !0), dd(a, u));
          } else
            (u = ut),
              (u = Vn(
                a,
                a === bt ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (u & 3) === 0 || Za(a, u) || ((l = !0), dd(a, u));
          a = a.next;
        }
      while (l);
      nf = !1;
    }
  }
  function yy() {
    sd();
  }
  function sd() {
    Lu = af = !1;
    var t = 0;
    Al !== 0 && _y() && (t = Al);
    for (var e = ue(), l = null, a = Zu; a !== null; ) {
      var n = a.next,
        u = od(a, e);
      u === 0
        ? ((a.next = null),
          l === null ? (Zu = n) : (l.next = n),
          n === null && (Ca = l))
        : ((l = a), (t !== 0 || (u & 3) !== 0) && (Lu = !0)),
        (a = n);
    }
    (wt !== 0 && wt !== 5) || xn(t), Al !== 0 && (Al = 0);
  }
  function od(t, e) {
    for (
      var l = t.suspendedLanes,
        a = t.pingedLanes,
        n = t.expirationTimes,
        u = t.pendingLanes & -62914561;
      0 < u;

    ) {
      var i = 31 - ce(u),
        s = 1 << i,
        m = n[i];
      m === -1
        ? ((s & l) === 0 || (s & a) !== 0) && (n[i] = Gm(s, e))
        : m <= e && (t.expiredLanes |= s),
        (u &= ~s);
    }
    if (
      ((e = bt),
      (l = ut),
      (l = Vn(
        t,
        t === e ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (a = t.callbackNode),
      l === 0 ||
        (t === e && (dt === 2 || dt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && vi(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Za(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((a !== null && vi(a), bi(l))) {
        case 2:
        case 8:
          l = Pf;
          break;
        case 32:
          l = Ln;
          break;
        case 268435456:
          l = ts;
          break;
        default:
          l = Ln;
      }
      return (
        (a = rd.bind(null, t)),
        (l = yi(l, a)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      a !== null && a !== null && vi(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function rd(t, e) {
    if (wt !== 0 && wt !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var l = t.callbackNode;
    if (qu() && t.callbackNode !== l) return null;
    var a = ut;
    return (
      (a = Vn(
        t,
        t === bt ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (Kr(t, a, e),
          od(t, ue()),
          t.callbackNode != null && t.callbackNode === l
            ? rd.bind(null, t)
            : null)
    );
  }
  function dd(t, e) {
    if (qu()) return null;
    Kr(t, e, !0);
  }
  function vy() {
    My(function () {
      (ot & 6) !== 0 ? yi(If, yy) : sd();
    });
  }
  function uf() {
    if (Al === 0) {
      var t = ya;
      t === 0 && ((t = Gn), (Gn <<= 1), (Gn & 261888) === 0 && (Gn = 256)),
        (Al = t);
    }
    return Al;
  }
  function md(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Fn("" + t);
  }
  function hd(t, e) {
    var l = e.ownerDocument.createElement("input");
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute("form", t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function gy(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var u = md((n[Wt] || null).action),
        i = a.submitter;
      i &&
        ((e = (e = i[Wt] || null)
          ? md(e.formAction)
          : i.getAttribute("formAction")),
        e !== null && ((u = e), (i = null)));
      var s = new Pn("action", "action", null, a, n);
      t.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Al !== 0) {
                  var m = i ? hd(n, i) : new FormData(n);
                  Tc(
                    l,
                    { pending: !0, data: m, method: n.method, action: u },
                    null,
                    m
                  );
                }
              } else
                typeof u == "function" &&
                  (s.preventDefault(),
                  (m = i ? hd(n, i) : new FormData(n)),
                  Tc(
                    l,
                    { pending: !0, data: m, method: n.method, action: u },
                    u,
                    m
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var cf = 0; cf < Gi.length; cf++) {
    var ff = Gi[cf],
      py = ff.toLowerCase(),
      by = ff[0].toUpperCase() + ff.slice(1);
    _e(py, "on" + by);
  }
  _e(Qs, "onAnimationEnd"),
    _e(Vs, "onAnimationIteration"),
    _e(Ks, "onAnimationStart"),
    _e("dblclick", "onDoubleClick"),
    _e("focusin", "onFocus"),
    _e("focusout", "onBlur"),
    _e(Bh, "onTransitionRun"),
    _e(Hh, "onTransitionStart"),
    _e(Yh, "onTransitionCancel"),
    _e(Js, "onTransitionEnd"),
    ea("onMouseEnter", ["mouseout", "mouseover"]),
    ea("onMouseLeave", ["mouseout", "mouseover"]),
    ea("onPointerEnter", ["pointerout", "pointerover"]),
    ea("onPointerLeave", ["pointerout", "pointerover"]),
    jl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    jl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    jl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    jl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    jl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    jl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var En =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Sy = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(En)
    );
  function yd(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l],
        n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var i = a.length - 1; 0 <= i; i--) {
            var s = a[i],
              m = s.instance,
              E = s.currentTarget;
            if (((s = s.listener), m !== u && n.isPropagationStopped()))
              break t;
            (u = s), (n.currentTarget = E);
            try {
              u(n);
            } catch (C) {
              lu(C);
            }
            (n.currentTarget = null), (u = m);
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((s = a[i]),
              (m = s.instance),
              (E = s.currentTarget),
              (s = s.listener),
              m !== u && n.isPropagationStopped())
            )
              break t;
            (u = s), (n.currentTarget = E);
            try {
              u(n);
            } catch (C) {
              lu(C);
            }
            (n.currentTarget = null), (u = m);
          }
      }
    }
  }
  function nt(t, e) {
    var l = e[Si];
    l === void 0 && (l = e[Si] = new Set());
    var a = t + "__bubble";
    l.has(a) || (vd(e, t, 2, !1), l.add(a));
  }
  function sf(t, e, l) {
    var a = 0;
    e && (a |= 4), vd(l, t, a, e);
  }
  var Gu = "_reactListening" + Math.random().toString(36).slice(2);
  function of(t) {
    if (!t[Gu]) {
      (t[Gu] = !0),
        fs.forEach(function (l) {
          l !== "selectionchange" && (Sy.has(l) || sf(l, !1, t), sf(l, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Gu] || ((e[Gu] = !0), sf("selectionchange", !1, e));
    }
  }
  function vd(t, e, l, a) {
    switch (Vd(e)) {
      case 2:
        var n = ky;
        break;
      case 8:
        n = Fy;
        break;
      default:
        n = Tf;
    }
    (l = n.bind(null, e, l, t)),
      (n = void 0),
      !Ni ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: n })
          : t.addEventListener(e, l, !0)
        : n !== void 0
        ? t.addEventListener(e, l, { passive: n })
        : t.addEventListener(e, l, !1);
  }
  function rf(t, e, l, a, n) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var m = i.tag;
              if ((m === 3 || m === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; s !== null; ) {
            if (((i = Il(s)), i === null)) return;
            if (((m = i.tag), m === 5 || m === 6 || m === 26 || m === 27)) {
              a = u = i;
              continue t;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    Ss(function () {
      var E = u,
        C = Oi(l),
        j = [];
      t: {
        var z = ks.get(t);
        if (z !== void 0) {
          var M = Pn,
            L = t;
          switch (t) {
            case "keypress":
              if ($n(l) === 0) break t;
            case "keydown":
            case "keyup":
              M = mh;
              break;
            case "focusin":
              (L = "focus"), (M = ji);
              break;
            case "focusout":
              (L = "blur"), (M = ji);
              break;
            case "beforeblur":
            case "afterblur":
              M = ji;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              M = Es;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = eh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = vh;
              break;
            case Qs:
            case Vs:
            case Ks:
              M = nh;
              break;
            case Js:
              M = ph;
              break;
            case "scroll":
            case "scrollend":
              M = Pm;
              break;
            case "wheel":
              M = Sh;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = ih;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = Ts;
              break;
            case "toggle":
            case "beforetoggle":
              M = xh;
          }
          var k = (e & 4) !== 0,
            gt = !k && (t === "scroll" || t === "scrollend"),
            p = k ? (z !== null ? z + "Capture" : null) : z;
          k = [];
          for (var y = E, x; y !== null; ) {
            var D = y;
            if (
              ((x = D.stateNode),
              (D = D.tag),
              (D !== 5 && D !== 26 && D !== 27) ||
                x === null ||
                p === null ||
                ((D = Qa(y, p)), D != null && k.push(zn(y, D, x))),
              gt)
            )
              break;
            y = y.return;
          }
          0 < k.length &&
            ((z = new M(z, L, null, l, C)), j.push({ event: z, listeners: k }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((z = t === "mouseover" || t === "pointerover"),
            (M = t === "mouseout" || t === "pointerout"),
            z &&
              l !== _i &&
              (L = l.relatedTarget || l.fromElement) &&
              (Il(L) || L[$l]))
          )
            break t;
          if (
            (M || z) &&
            ((z =
              C.window === C
                ? C
                : (z = C.ownerDocument)
                ? z.defaultView || z.parentWindow
                : window),
            M
              ? ((L = l.relatedTarget || l.toElement),
                (M = E),
                (L = L ? Il(L) : null),
                L !== null &&
                  ((gt = v(L)),
                  (k = L.tag),
                  L !== gt || (k !== 5 && k !== 27 && k !== 6)) &&
                  (L = null))
              : ((M = null), (L = E)),
            M !== L)
          ) {
            if (
              ((k = Es),
              (D = "onMouseLeave"),
              (p = "onMouseEnter"),
              (y = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((k = Ts),
                (D = "onPointerLeave"),
                (p = "onPointerEnter"),
                (y = "pointer")),
              (gt = M == null ? z : Xa(M)),
              (x = L == null ? z : Xa(L)),
              (z = new k(D, y + "leave", M, l, C)),
              (z.target = gt),
              (z.relatedTarget = x),
              (D = null),
              Il(C) === E &&
                ((k = new k(p, y + "enter", L, l, C)),
                (k.target = x),
                (k.relatedTarget = gt),
                (D = k)),
              (gt = D),
              M && L)
            )
              e: {
                for (k = Ay, p = M, y = L, x = 0, D = p; D; D = k(D)) x++;
                D = 0;
                for (var J = y; J; J = k(J)) D++;
                for (; 0 < x - D; ) (p = k(p)), x--;
                for (; 0 < D - x; ) (y = k(y)), D--;
                for (; x--; ) {
                  if (p === y || (y !== null && p === y.alternate)) {
                    k = p;
                    break e;
                  }
                  (p = k(p)), (y = k(y));
                }
                k = null;
              }
            else k = null;
            M !== null && gd(j, z, M, k, !1),
              L !== null && gt !== null && gd(j, gt, L, k, !0);
          }
        }
        t: {
          if (
            ((z = E ? Xa(E) : window),
            (M = z.nodeName && z.nodeName.toLowerCase()),
            M === "select" || (M === "input" && z.type === "file"))
          )
            var ft = js;
          else if (Rs(z))
            if (Us) ft = Dh;
            else {
              ft = Ch;
              var V = Nh;
            }
          else
            (M = z.nodeName),
              !M ||
              M.toLowerCase() !== "input" ||
              (z.type !== "checkbox" && z.type !== "radio")
                ? E && Ti(E.elementType) && (ft = js)
                : (ft = Rh);
          if (ft && (ft = ft(t, E))) {
            Ds(j, ft, l, C);
            break t;
          }
          V && V(t, z, E),
            t === "focusout" &&
              E &&
              z.type === "number" &&
              E.memoizedProps.value != null &&
              zi(z, "number", z.value);
        }
        switch (((V = E ? Xa(E) : window), t)) {
          case "focusin":
            (Rs(V) || V.contentEditable === "true") &&
              ((ca = V), (qi = E), (Ia = null));
            break;
          case "focusout":
            Ia = qi = ca = null;
            break;
          case "mousedown":
            Zi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Zi = !1), Gs(j, l, C);
            break;
          case "selectionchange":
            if (Uh) break;
          case "keydown":
          case "keyup":
            Gs(j, l, C);
        }
        var et;
        if (Bi)
          t: {
            switch (t) {
              case "compositionstart":
                var it = "onCompositionStart";
                break t;
              case "compositionend":
                it = "onCompositionEnd";
                break t;
              case "compositionupdate":
                it = "onCompositionUpdate";
                break t;
            }
            it = void 0;
          }
        else
          ia
            ? Ns(t, l) && (it = "onCompositionEnd")
            : t === "keydown" &&
              l.keyCode === 229 &&
              (it = "onCompositionStart");
        it &&
          (_s &&
            l.locale !== "ko" &&
            (ia || it !== "onCompositionStart"
              ? it === "onCompositionEnd" && ia && (et = As())
              : ((ul = C),
                (Ci = "value" in ul ? ul.value : ul.textContent),
                (ia = !0))),
          (V = Xu(E, it)),
          0 < V.length &&
            ((it = new zs(it, t, null, l, C)),
            j.push({ event: it, listeners: V }),
            et
              ? (it.data = et)
              : ((et = Cs(l)), et !== null && (it.data = et)))),
          (et = zh ? Th(t, l) : _h(t, l)) &&
            ((it = Xu(E, "onBeforeInput")),
            0 < it.length &&
              ((V = new zs("onBeforeInput", "beforeinput", null, l, C)),
              j.push({ event: V, listeners: it }),
              (V.data = et))),
          gy(j, t, E, l, C);
      }
      yd(j, e);
    });
  }
  function zn(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function Xu(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var n = t,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = Qa(t, l)),
          n != null && a.unshift(zn(t, n, u)),
          (n = Qa(t, e)),
          n != null && a.push(zn(t, n, u))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function Ay(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function gd(t, e, l, a, n) {
    for (var u = e._reactName, i = []; l !== null && l !== a; ) {
      var s = l,
        m = s.alternate,
        E = s.stateNode;
      if (((s = s.tag), m !== null && m === a)) break;
      (s !== 5 && s !== 26 && s !== 27) ||
        E === null ||
        ((m = E),
        n
          ? ((E = Qa(l, u)), E != null && i.unshift(zn(l, E, m)))
          : n || ((E = Qa(l, u)), E != null && i.push(zn(l, E, m)))),
        (l = l.return);
    }
    i.length !== 0 && t.push({ event: e, listeners: i });
  }
  var xy = /\r\n?/g,
    Ey = /\u0000|\uFFFD/g;
  function pd(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        xy,
        `
`
      )
      .replace(Ey, "");
  }
  function bd(t, e) {
    return (e = pd(e)), pd(t) === e;
  }
  function vt(t, e, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || aa(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            aa(t, "" + a);
        break;
      case "className":
        Jn(t, "class", a);
        break;
      case "tabIndex":
        Jn(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Jn(t, l, a);
        break;
      case "style":
        ps(t, a, u);
        break;
      case "data":
        if (e !== "object") {
          Jn(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(l);
          break;
        }
        (a = Fn("" + a)), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" &&
            (l === "formAction"
              ? (e !== "input" && vt(t, e, "name", n.name, n, null),
                vt(t, e, "formEncType", n.formEncType, n, null),
                vt(t, e, "formMethod", n.formMethod, n, null),
                vt(t, e, "formTarget", n.formTarget, n, null))
              : (vt(t, e, "encType", n.encType, n, null),
                vt(t, e, "method", n.method, n, null),
                vt(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        (a = Fn("" + a)), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = Ye);
        break;
      case "onScroll":
        a != null && nt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && nt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (l = Fn("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "" + a)
          : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "")
          : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(l, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(l)
          : t.setAttribute(l, a);
        break;
      case "popover":
        nt("beforetoggle", t), nt("toggle", t), Kn(t, "popover", a);
        break;
      case "xlinkActuate":
        He(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        He(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        He(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        He(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        He(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        He(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        He(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        He(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        He(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Kn(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = $m.get(l) || l), Kn(t, l, a));
    }
  }
  function df(t, e, l, a, n, u) {
    switch (l) {
      case "style":
        ps(t, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? aa(t, a)
          : (typeof a == "number" || typeof a == "bigint") && aa(t, "" + a);
        break;
      case "onScroll":
        a != null && nt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && nt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Ye);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ss.hasOwnProperty(l))
          t: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((n = l.endsWith("Capture")),
              (e = l.slice(2, n ? l.length - 7 : void 0)),
              (u = t[Wt] || null),
              (u = u != null ? u[l] : null),
              typeof u == "function" && t.removeEventListener(e, u, n),
              typeof a == "function")
            ) {
              typeof u != "function" &&
                u !== null &&
                (l in t
                  ? (t[l] = null)
                  : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, a, n);
              break t;
            }
            l in t
              ? (t[l] = a)
              : a === !0
              ? t.setAttribute(l, "")
              : Kn(t, l, a);
          }
    }
  }
  function Vt(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        nt("error", t), nt("load", t);
        var a = !1,
          n = !1,
          u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var i = l[u];
            if (i != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, e));
                default:
                  vt(t, e, u, i, l, null);
              }
          }
        n && vt(t, e, "srcSet", l.srcSet, l, null),
          a && vt(t, e, "src", l.src, l, null);
        return;
      case "input":
        nt("invalid", t);
        var s = (u = i = n = null),
          m = null,
          E = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var C = l[a];
            if (C != null)
              switch (a) {
                case "name":
                  n = C;
                  break;
                case "type":
                  i = C;
                  break;
                case "checked":
                  m = C;
                  break;
                case "defaultChecked":
                  E = C;
                  break;
                case "value":
                  u = C;
                  break;
                case "defaultValue":
                  s = C;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (C != null) throw Error(f(137, e));
                  break;
                default:
                  vt(t, e, a, C, l, null);
              }
          }
        hs(t, u, s, m, E, i, n, !1);
        return;
      case "select":
        nt("invalid", t), (a = i = u = null);
        for (n in l)
          if (l.hasOwnProperty(n) && ((s = l[n]), s != null))
            switch (n) {
              case "value":
                u = s;
                break;
              case "defaultValue":
                i = s;
                break;
              case "multiple":
                a = s;
              default:
                vt(t, e, n, s, l, null);
            }
        (e = u),
          (l = i),
          (t.multiple = !!a),
          e != null ? la(t, !!a, e, !1) : l != null && la(t, !!a, l, !0);
        return;
      case "textarea":
        nt("invalid", t), (u = n = a = null);
        for (i in l)
          if (l.hasOwnProperty(i) && ((s = l[i]), s != null))
            switch (i) {
              case "value":
                a = s;
                break;
              case "defaultValue":
                n = s;
                break;
              case "children":
                u = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(f(91));
                break;
              default:
                vt(t, e, i, s, l, null);
            }
        vs(t, a, n, u);
        return;
      case "option":
        for (m in l)
          if (l.hasOwnProperty(m) && ((a = l[m]), a != null))
            switch (m) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                vt(t, e, m, a, l, null);
            }
        return;
      case "dialog":
        nt("beforetoggle", t), nt("toggle", t), nt("cancel", t), nt("close", t);
        break;
      case "iframe":
      case "object":
        nt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < En.length; a++) nt(En[a], t);
        break;
      case "image":
        nt("error", t), nt("load", t);
        break;
      case "details":
        nt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        nt("error", t), nt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (E in l)
          if (l.hasOwnProperty(E) && ((a = l[E]), a != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, e));
              default:
                vt(t, e, E, a, l, null);
            }
        return;
      default:
        if (Ti(e)) {
          for (C in l)
            l.hasOwnProperty(C) &&
              ((a = l[C]), a !== void 0 && df(t, e, C, a, l, void 0));
          return;
        }
    }
    for (s in l)
      l.hasOwnProperty(s) && ((a = l[s]), a != null && vt(t, e, s, a, l, null));
  }
  function zy(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          u = null,
          i = null,
          s = null,
          m = null,
          E = null,
          C = null;
        for (M in l) {
          var j = l[M];
          if (l.hasOwnProperty(M) && j != null)
            switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = j;
              default:
                a.hasOwnProperty(M) || vt(t, e, M, null, a, j);
            }
        }
        for (var z in a) {
          var M = a[z];
          if (((j = l[z]), a.hasOwnProperty(z) && (M != null || j != null)))
            switch (z) {
              case "type":
                u = M;
                break;
              case "name":
                n = M;
                break;
              case "checked":
                E = M;
                break;
              case "defaultChecked":
                C = M;
                break;
              case "value":
                i = M;
                break;
              case "defaultValue":
                s = M;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null) throw Error(f(137, e));
                break;
              default:
                M !== j && vt(t, e, z, M, a, j);
            }
        }
        Ei(t, i, s, m, E, C, u, n);
        return;
      case "select":
        M = i = s = z = null;
        for (u in l)
          if (((m = l[u]), l.hasOwnProperty(u) && m != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                M = m;
              default:
                a.hasOwnProperty(u) || vt(t, e, u, null, a, m);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (m = l[n]),
            a.hasOwnProperty(n) && (u != null || m != null))
          )
            switch (n) {
              case "value":
                z = u;
                break;
              case "defaultValue":
                s = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== m && vt(t, e, n, u, a, m);
            }
        (e = s),
          (l = i),
          (a = M),
          z != null
            ? la(t, !!l, z, !1)
            : !!a != !!l &&
              (e != null ? la(t, !!l, e, !0) : la(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        M = z = null;
        for (s in l)
          if (
            ((n = l[s]),
            l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
          )
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                vt(t, e, s, null, a, n);
            }
        for (i in a)
          if (
            ((n = a[i]),
            (u = l[i]),
            a.hasOwnProperty(i) && (n != null || u != null))
          )
            switch (i) {
              case "value":
                z = n;
                break;
              case "defaultValue":
                M = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(f(91));
                break;
              default:
                n !== u && vt(t, e, i, n, a, u);
            }
        ys(t, z, M);
        return;
      case "option":
        for (var L in l)
          if (
            ((z = l[L]),
            l.hasOwnProperty(L) && z != null && !a.hasOwnProperty(L))
          )
            switch (L) {
              case "selected":
                t.selected = !1;
                break;
              default:
                vt(t, e, L, null, a, z);
            }
        for (m in a)
          if (
            ((z = a[m]),
            (M = l[m]),
            a.hasOwnProperty(m) && z !== M && (z != null || M != null))
          )
            switch (m) {
              case "selected":
                t.selected =
                  z && typeof z != "function" && typeof z != "symbol";
                break;
              default:
                vt(t, e, m, z, a, M);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var k in l)
          (z = l[k]),
            l.hasOwnProperty(k) &&
              z != null &&
              !a.hasOwnProperty(k) &&
              vt(t, e, k, null, a, z);
        for (E in a)
          if (
            ((z = a[E]),
            (M = l[E]),
            a.hasOwnProperty(E) && z !== M && (z != null || M != null))
          )
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(f(137, e));
                break;
              default:
                vt(t, e, E, z, a, M);
            }
        return;
      default:
        if (Ti(e)) {
          for (var gt in l)
            (z = l[gt]),
              l.hasOwnProperty(gt) &&
                z !== void 0 &&
                !a.hasOwnProperty(gt) &&
                df(t, e, gt, void 0, a, z);
          for (C in a)
            (z = a[C]),
              (M = l[C]),
              !a.hasOwnProperty(C) ||
                z === M ||
                (z === void 0 && M === void 0) ||
                df(t, e, C, z, a, M);
          return;
        }
    }
    for (var p in l)
      (z = l[p]),
        l.hasOwnProperty(p) &&
          z != null &&
          !a.hasOwnProperty(p) &&
          vt(t, e, p, null, a, z);
    for (j in a)
      (z = a[j]),
        (M = l[j]),
        !a.hasOwnProperty(j) ||
          z === M ||
          (z == null && M == null) ||
          vt(t, e, j, z, a, M);
  }
  function Sd(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Ty() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0;
        a < l.length;
        a++
      ) {
        var n = l[a],
          u = n.transferSize,
          i = n.initiatorType,
          s = n.duration;
        if (u && s && Sd(i)) {
          for (i = 0, s = n.responseEnd, a += 1; a < l.length; a++) {
            var m = l[a],
              E = m.startTime;
            if (E > s) break;
            var C = m.transferSize,
              j = m.initiatorType;
            C &&
              Sd(j) &&
              ((m = m.responseEnd), (i += C * (m < s ? 1 : (s - E) / (m - E))));
          }
          if ((--a, (e += (8 * (u + i)) / (n.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var mf = null,
    hf = null;
  function Qu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Ad(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function xd(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function yf(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var vf = null;
  function _y() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === vf
        ? !1
        : ((vf = t), !0)
      : ((vf = null), !1);
  }
  var Ed = typeof setTimeout == "function" ? setTimeout : void 0,
    Oy = typeof clearTimeout == "function" ? clearTimeout : void 0,
    zd = typeof Promise == "function" ? Promise : void 0,
    My =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof zd < "u"
        ? function (t) {
            return zd.resolve(null).then(t).catch(Ny);
          }
        : Ed;
  function Ny(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function xl(t) {
    return t === "head";
  }
  function Td(t, e) {
    var l = e,
      a = 0;
    do {
      var n = l.nextSibling;
      if ((t.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === "/$" || l === "/&")) {
          if (a === 0) {
            t.removeChild(n), Ua(e);
            return;
          }
          a--;
        } else if (
          l === "$" ||
          l === "$?" ||
          l === "$~" ||
          l === "$!" ||
          l === "&"
        )
          a++;
        else if (l === "html") Tn(t.ownerDocument.documentElement);
        else if (l === "head") {
          (l = t.ownerDocument.head), Tn(l);
          for (var u = l.firstChild; u; ) {
            var i = u.nextSibling,
              s = u.nodeName;
            u[Ga] ||
              s === "SCRIPT" ||
              s === "STYLE" ||
              (s === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(u),
              (u = i);
          }
        } else l === "body" && Tn(t.ownerDocument.body);
      l = n;
    } while (l);
    Ua(e);
  }
  function _d(t, e) {
    var l = t;
    t = 0;
    do {
      var a = l.nextSibling;
      if (
        (l.nodeType === 1
          ? e
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = "none"))
            : ((l.style.display = l._stashedDisplay || ""),
              l.getAttribute("style") === "" && l.removeAttribute("style"))
          : l.nodeType === 3 &&
            (e
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ""))
              : (l.nodeValue = l._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((l = a.data), l === "/$")) {
          if (t === 0) break;
          t--;
        } else (l !== "$" && l !== "$?" && l !== "$~" && l !== "$!") || t++;
      l = a;
    } while (l);
  }
  function gf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          gf(l), Ai(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function Cy(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[Ga])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((u = t.getAttribute("rel")),
                u === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== n.rel ||
                t.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                t.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                t.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((u = t.getAttribute("src")),
                (u !== (n.src == null ? null : n.src) ||
                  t.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  t.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === u) return t;
      } else return t;
      if (((t = Ee(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Ry(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !l) ||
        ((t = Ee(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Od(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = Ee(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function pf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function bf(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function Dy(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading") e();
    else {
      var a = function () {
        e(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), (t._reactRetry = a);
    }
  }
  function Ee(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Sf = null;
  function Md(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0) return Ee(t.nextSibling);
          e--;
        } else
          (l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Nd(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else (l !== "/$" && l !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Cd(t, e, l) {
    switch (((e = Qu(l)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(f(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(f(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(f(454));
        return t;
      default:
        throw Error(f(451));
    }
  }
  function Tn(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Ai(t);
  }
  var ze = new Map(),
    Rd = new Set();
  function Vu(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var Pe = w.d;
  w.d = { f: jy, r: Uy, D: By, C: Hy, L: Yy, m: wy, X: Zy, S: qy, M: Ly };
  function jy() {
    var t = Pe.f(),
      e = Hu();
    return t || e;
  }
  function Uy(t) {
    var e = Pl(t);
    e !== null && e.tag === 5 && e.type === "form" ? ko(e) : Pe.r(t);
  }
  var Ra = typeof document > "u" ? null : document;
  function Dd(t, e, l) {
    var a = Ra;
    if (a && typeof e == "string" && e) {
      var n = ve(e);
      (n = 'link[rel="' + t + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        Rd.has(n) ||
          (Rd.add(n),
          (t = { rel: t, crossOrigin: l, href: e }),
          a.querySelector(n) === null &&
            ((e = a.createElement("link")),
            Vt(e, "link", t),
            qt(e),
            a.head.appendChild(e)));
    }
  }
  function By(t) {
    Pe.D(t), Dd("dns-prefetch", t, null);
  }
  function Hy(t, e) {
    Pe.C(t, e), Dd("preconnect", t, e);
  }
  function Yy(t, e, l) {
    Pe.L(t, e, l);
    var a = Ra;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + ve(e) + '"]';
      e === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + ve(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (n += '[imagesizes="' + ve(l.imageSizes) + '"]'))
        : (n += '[href="' + ve(t) + '"]');
      var u = n;
      switch (e) {
        case "style":
          u = Da(t);
          break;
        case "script":
          u = ja(t);
      }
      ze.has(u) ||
        ((t = T(
          {
            rel: "preload",
            href: e === "image" && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l
        )),
        ze.set(u, t),
        a.querySelector(n) !== null ||
          (e === "style" && a.querySelector(_n(u))) ||
          (e === "script" && a.querySelector(On(u))) ||
          ((e = a.createElement("link")),
          Vt(e, "link", t),
          qt(e),
          a.head.appendChild(e)));
    }
  }
  function wy(t, e) {
    Pe.m(t, e);
    var l = Ra;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        n =
          'link[rel="modulepreload"][as="' + ve(a) + '"][href="' + ve(t) + '"]',
        u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = ja(t);
      }
      if (
        !ze.has(u) &&
        ((t = T({ rel: "modulepreload", href: t }, e)),
        ze.set(u, t),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(On(u))) return;
        }
        (a = l.createElement("link")),
          Vt(a, "link", t),
          qt(a),
          l.head.appendChild(a);
      }
    }
  }
  function qy(t, e, l) {
    Pe.S(t, e, l);
    var a = Ra;
    if (a && t) {
      var n = ta(a).hoistableStyles,
        u = Da(t);
      e = e || "default";
      var i = n.get(u);
      if (!i) {
        var s = { loading: 0, preload: null };
        if ((i = a.querySelector(_n(u)))) s.loading = 5;
        else {
          (t = T({ rel: "stylesheet", href: t, "data-precedence": e }, l)),
            (l = ze.get(u)) && Af(t, l);
          var m = (i = a.createElement("link"));
          qt(m),
            Vt(m, "link", t),
            (m._p = new Promise(function (E, C) {
              (m.onload = E), (m.onerror = C);
            })),
            m.addEventListener("load", function () {
              s.loading |= 1;
            }),
            m.addEventListener("error", function () {
              s.loading |= 2;
            }),
            (s.loading |= 4),
            Ku(i, e, a);
        }
        (i = { type: "stylesheet", instance: i, count: 1, state: s }),
          n.set(u, i);
      }
    }
  }
  function Zy(t, e) {
    Pe.X(t, e);
    var l = Ra;
    if (l && t) {
      var a = ta(l).hoistableScripts,
        n = ja(t),
        u = a.get(n);
      u ||
        ((u = l.querySelector(On(n))),
        u ||
          ((t = T({ src: t, async: !0 }, e)),
          (e = ze.get(n)) && xf(t, e),
          (u = l.createElement("script")),
          qt(u),
          Vt(u, "link", t),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function Ly(t, e) {
    Pe.M(t, e);
    var l = Ra;
    if (l && t) {
      var a = ta(l).hoistableScripts,
        n = ja(t),
        u = a.get(n);
      u ||
        ((u = l.querySelector(On(n))),
        u ||
          ((t = T({ src: t, async: !0, type: "module" }, e)),
          (e = ze.get(n)) && xf(t, e),
          (u = l.createElement("script")),
          qt(u),
          Vt(u, "link", t),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function jd(t, e, l, a) {
    var n = (n = lt.current) ? Vu(n) : null;
    if (!n) throw Error(f(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((e = Da(l.href)),
            (l = ta(n).hoistableStyles),
            (a = l.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          t = Da(l.href);
          var u = ta(n).hoistableStyles,
            i = u.get(t);
          if (
            (i ||
              ((n = n.ownerDocument || n),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(t, i),
              (u = n.querySelector(_n(t))) &&
                !u._p &&
                ((i.instance = u), (i.state.loading = 5)),
              ze.has(t) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                ze.set(t, l),
                u || Gy(n, t, l, i.state))),
            e && a === null)
          )
            throw Error(f(528, ""));
          return i;
        }
        if (e && a !== null) throw Error(f(529, ""));
        return null;
      case "script":
        return (
          (e = l.async),
          (l = l.src),
          typeof l == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = ja(l)),
              (l = ta(n).hoistableScripts),
              (a = l.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(f(444, t));
    }
  }
  function Da(t) {
    return 'href="' + ve(t) + '"';
  }
  function _n(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Ud(t) {
    return T({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Gy(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Vt(e, "link", l),
        qt(e),
        t.head.appendChild(e));
  }
  function ja(t) {
    return '[src="' + ve(t) + '"]';
  }
  function On(t) {
    return "script[async]" + t;
  }
  function Bd(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + ve(l.href) + '"]');
          if (a) return (e.instance = a), qt(a), a;
          var n = T({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            qt(a),
            Vt(a, "style", n),
            Ku(a, l.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          n = Da(l.href);
          var u = t.querySelector(_n(n));
          if (u) return (e.state.loading |= 4), (e.instance = u), qt(u), u;
          (a = Ud(l)),
            (n = ze.get(n)) && Af(a, n),
            (u = (t.ownerDocument || t).createElement("link")),
            qt(u);
          var i = u;
          return (
            (i._p = new Promise(function (s, m) {
              (i.onload = s), (i.onerror = m);
            })),
            Vt(u, "link", a),
            (e.state.loading |= 4),
            Ku(u, l.precedence, t),
            (e.instance = u)
          );
        case "script":
          return (
            (u = ja(l.src)),
            (n = t.querySelector(On(u)))
              ? ((e.instance = n), qt(n), n)
              : ((a = l),
                (n = ze.get(u)) && ((a = T({}, l)), xf(a, n)),
                (t = t.ownerDocument || t),
                (n = t.createElement("script")),
                qt(n),
                Vt(n, "link", a),
                t.head.appendChild(n),
                (e.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(f(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), Ku(a, l.precedence, t));
    return e.instance;
  }
  function Ku(t, e, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        i = 0;
      i < a.length;
      i++
    ) {
      var s = a[i];
      if (s.dataset.precedence === e) u = s;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(t, u.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function Af(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function xf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Ju = null;
  function Hd(t, e, l) {
    if (Ju === null) {
      var a = new Map(),
        n = (Ju = new Map());
      n.set(l, a);
    } else (n = Ju), (a = n.get(l)), a || ((a = new Map()), n.set(l, a));
    if (a.has(t)) return a;
    for (
      a.set(t, null), l = l.getElementsByTagName(t), n = 0;
      n < l.length;
      n++
    ) {
      var u = l[n];
      if (
        !(
          u[Ga] ||
          u[Lt] ||
          (t === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = u.getAttribute(e) || "";
        i = t + i;
        var s = a.get(i);
        s ? s.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function Yd(t, e, l) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function Xy(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function wd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Qy(t, e, l, a) {
    if (
      l.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var n = Da(a.href),
          u = e.querySelector(_n(n));
        if (u) {
          (e = u._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = ku.bind(t)), e.then(t, t)),
            (l.state.loading |= 4),
            (l.instance = u),
            qt(u);
          return;
        }
        (u = e.ownerDocument || e),
          (a = Ud(a)),
          (n = ze.get(n)) && Af(a, n),
          (u = u.createElement("link")),
          qt(u);
        var i = u;
        (i._p = new Promise(function (s, m) {
          (i.onload = s), (i.onerror = m);
        })),
          Vt(u, "link", a),
          (l.instance = u);
      }
      t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(l, e),
        (e = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (t.count++,
          (l = ku.bind(t)),
          e.addEventListener("load", l),
          e.addEventListener("error", l));
    }
  }
  var Ef = 0;
  function Vy(t, e) {
    return (
      t.stylesheets && t.count === 0 && Wu(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (l) {
            var a = setTimeout(function () {
              if ((t.stylesheets && Wu(t, t.stylesheets), t.unsuspend)) {
                var u = t.unsuspend;
                (t.unsuspend = null), u();
              }
            }, 6e4 + e);
            0 < t.imgBytes && Ef === 0 && (Ef = 62500 * Ty());
            var n = setTimeout(function () {
              if (
                ((t.waitingForImages = !1),
                t.count === 0 &&
                  (t.stylesheets && Wu(t, t.stylesheets), t.unsuspend))
              ) {
                var u = t.unsuspend;
                (t.unsuspend = null), u();
              }
            }, (t.imgBytes > Ef ? 50 : 800) + e);
            return (
              (t.unsuspend = l),
              function () {
                (t.unsuspend = null), clearTimeout(a), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function ku() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Wu(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Fu = null;
  function Wu(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Fu = new Map()),
        e.forEach(Ky, t),
        (Fu = null),
        ku.call(t));
  }
  function Ky(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Fu.get(t);
      if (l) var a = l.get(null);
      else {
        (l = new Map()), Fu.set(t, l);
        for (
          var n = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (l.set(i.dataset.precedence, i), (a = i));
        }
        a && l.set(null, a);
      }
      (n = e.instance),
        (i = n.getAttribute("data-precedence")),
        (u = l.get(i) || a),
        u === a && l.set(null, n),
        l.set(i, n),
        this.count++,
        (a = ku.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(n, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var Mn = {
    $$typeof: W,
    Provider: null,
    Consumer: null,
    _currentValue: F,
    _currentValue2: F,
    _threadCount: 0,
  };
  function Jy(t, e, l, a, n, u, i, s, m) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = gi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = gi(0)),
      (this.hiddenUpdates = gi(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = m),
      (this.incompleteTransitions = new Map());
  }
  function qd(t, e, l, a, n, u, i, s, m, E, C, j) {
    return (
      (t = new Jy(t, e, l, i, m, E, C, j, s)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = se(3, null, null, e)),
      (t.current = u),
      (u.stateNode = t),
      (e = ec()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: e }),
      uc(u),
      t
    );
  }
  function Zd(t) {
    return t ? ((t = oa), t) : oa;
  }
  function Ld(t, e, l, a, n, u) {
    (n = Zd(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = rl(e)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = dl(t, a, e)),
      l !== null && (le(l, t, e), un(l, t, e));
  }
  function Gd(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function zf(t, e) {
    Gd(t, e), (t = t.alternate) && Gd(t, e);
  }
  function Xd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Yl(t, 67108864);
      e !== null && le(e, t, 67108864), zf(t, 67108864);
    }
  }
  function Qd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = he();
      e = pi(e);
      var l = Yl(t, e);
      l !== null && le(l, t, e), zf(t, e);
    }
  }
  var $u = !0;
  function ky(t, e, l, a) {
    var n = R.T;
    R.T = null;
    var u = w.p;
    try {
      (w.p = 2), Tf(t, e, l, a);
    } finally {
      (w.p = u), (R.T = n);
    }
  }
  function Fy(t, e, l, a) {
    var n = R.T;
    R.T = null;
    var u = w.p;
    try {
      (w.p = 8), Tf(t, e, l, a);
    } finally {
      (w.p = u), (R.T = n);
    }
  }
  function Tf(t, e, l, a) {
    if ($u) {
      var n = _f(a);
      if (n === null) rf(t, e, a, Iu, l), Kd(t, a);
      else if ($y(n, t, e, l, a)) a.stopPropagation();
      else if ((Kd(t, a), e & 4 && -1 < Wy.indexOf(t))) {
        for (; n !== null; ) {
          var u = Pl(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var i = Dl(u.pendingLanes);
                  if (i !== 0) {
                    var s = u;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; i; ) {
                      var m = 1 << (31 - ce(i));
                      (s.entanglements[1] |= m), (i &= ~m);
                    }
                    De(u), (ot & 6) === 0 && ((Uu = ue() + 500), xn(0));
                  }
                }
                break;
              case 31:
              case 13:
                (s = Yl(u, 2)), s !== null && le(s, u, 2), Hu(), zf(u, 2);
            }
          if (((u = _f(a)), u === null && rf(t, e, a, Iu, l), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else rf(t, e, a, null, l);
    }
  }
  function _f(t) {
    return (t = Oi(t)), Of(t);
  }
  var Iu = null;
  function Of(t) {
    if (((Iu = null), (t = Il(t)), t !== null)) {
      var e = v(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = b(e)), t !== null)) return t;
          t = null;
        } else if (l === 31) {
          if (((t = O(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Iu = t), null;
  }
  function Vd(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Bm()) {
          case If:
            return 2;
          case Pf:
            return 8;
          case Ln:
          case Hm:
            return 32;
          case ts:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Mf = !1,
    El = null,
    zl = null,
    Tl = null,
    Nn = new Map(),
    Cn = new Map(),
    _l = [],
    Wy =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Kd(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        El = null;
        break;
      case "dragenter":
      case "dragleave":
        zl = null;
        break;
      case "mouseover":
      case "mouseout":
        Tl = null;
        break;
      case "pointerover":
      case "pointerout":
        Nn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cn.delete(e.pointerId);
    }
  }
  function Rn(t, e, l, a, n, u) {
    return t === null || t.nativeEvent !== u
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        e !== null && ((e = Pl(e)), e !== null && Xd(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        n !== null && e.indexOf(n) === -1 && e.push(n),
        t);
  }
  function $y(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return (El = Rn(El, t, e, l, a, n)), !0;
      case "dragenter":
        return (zl = Rn(zl, t, e, l, a, n)), !0;
      case "mouseover":
        return (Tl = Rn(Tl, t, e, l, a, n)), !0;
      case "pointerover":
        var u = n.pointerId;
        return Nn.set(u, Rn(Nn.get(u) || null, t, e, l, a, n)), !0;
      case "gotpointercapture":
        return (
          (u = n.pointerId), Cn.set(u, Rn(Cn.get(u) || null, t, e, l, a, n)), !0
        );
    }
    return !1;
  }
  function Jd(t) {
    var e = Il(t.target);
    if (e !== null) {
      var l = v(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = b(l)), e !== null)) {
            (t.blockedOn = e),
              is(t.priority, function () {
                Qd(l);
              });
            return;
          }
        } else if (e === 31) {
          if (((e = O(l)), e !== null)) {
            (t.blockedOn = e),
              is(t.priority, function () {
                Qd(l);
              });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Pu(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = _f(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        (_i = a), l.target.dispatchEvent(a), (_i = null);
      } else return (e = Pl(l)), e !== null && Xd(e), (t.blockedOn = l), !1;
      e.shift();
    }
    return !0;
  }
  function kd(t, e, l) {
    Pu(t) && l.delete(e);
  }
  function Iy() {
    (Mf = !1),
      El !== null && Pu(El) && (El = null),
      zl !== null && Pu(zl) && (zl = null),
      Tl !== null && Pu(Tl) && (Tl = null),
      Nn.forEach(kd),
      Cn.forEach(kd);
  }
  function ti(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Mf ||
        ((Mf = !0),
        c.unstable_scheduleCallback(c.unstable_NormalPriority, Iy)));
  }
  var ei = null;
  function Fd(t) {
    ei !== t &&
      ((ei = t),
      c.unstable_scheduleCallback(c.unstable_NormalPriority, function () {
        ei === t && (ei = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            a = t[e + 1],
            n = t[e + 2];
          if (typeof a != "function") {
            if (Of(a || l) === null) continue;
            break;
          }
          var u = Pl(l);
          u !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Tc(u, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function Ua(t) {
    function e(m) {
      return ti(m, t);
    }
    El !== null && ti(El, t),
      zl !== null && ti(zl, t),
      Tl !== null && ti(Tl, t),
      Nn.forEach(e),
      Cn.forEach(e);
    for (var l = 0; l < _l.length; l++) {
      var a = _l[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < _l.length && ((l = _l[0]), l.blockedOn === null); )
      Jd(l), l.blockedOn === null && _l.shift();
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          i = n[Wt] || null;
        if (typeof u == "function") i || Fd(l);
        else if (i) {
          var s = null;
          if (u && u.hasAttribute("formAction")) {
            if (((n = u), (i = u[Wt] || null))) s = i.formAction;
            else if (Of(n) !== null) continue;
          } else s = i.action;
          typeof s == "function" ? (l[a + 1] = s) : (l.splice(a, 3), (a -= 3)),
            Fd(l);
        }
      }
  }
  function Wd() {
    function t(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (n = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      n !== null && (n(), (n = null)), a || setTimeout(l, 20);
    }
    function l() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        n = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(l, 100),
        function () {
          (a = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            n !== null && (n(), (n = null));
        }
      );
    }
  }
  function Nf(t) {
    this._internalRoot = t;
  }
  (li.prototype.render = Nf.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(f(409));
      var l = e.current,
        a = he();
      Ld(l, a, t, e, null, null);
    }),
    (li.prototype.unmount = Nf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          Ld(t.current, 2, null, t, null, null), Hu(), (e[$l] = null);
        }
      });
  function li(t) {
    this._internalRoot = t;
  }
  li.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = us();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < _l.length && e !== 0 && e < _l[l].priority; l++);
      _l.splice(l, 0, t), l === 0 && Jd(t);
    }
  };
  var $d = o.version;
  if ($d !== "19.2.0") throw Error(f(527, $d, "19.2.0"));
  w.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(f(188))
        : ((t = Object.keys(t).join(",")), Error(f(268, t)));
    return (
      (t = h(e)),
      (t = t !== null ? N(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Py = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.2.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ai.isDisabled && ai.supportsFiber)
      try {
        (qa = ai.inject(Py)), (ie = ai);
      } catch {}
  }
  return (
    (jn.createRoot = function (t, e) {
      if (!d(t)) throw Error(f(299));
      var l = !1,
        a = "",
        n = nr,
        u = ur,
        i = ir;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
        (e = qd(t, 1, !1, null, null, l, a, null, n, u, i, Wd)),
        (t[$l] = e.current),
        of(t),
        new Nf(e)
      );
    }),
    (jn.hydrateRoot = function (t, e, l) {
      if (!d(t)) throw Error(f(299));
      var a = !1,
        n = "",
        u = nr,
        i = ur,
        s = ir,
        m = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (i = l.onCaughtError),
          l.onRecoverableError !== void 0 && (s = l.onRecoverableError),
          l.formState !== void 0 && (m = l.formState)),
        (e = qd(t, 1, !0, e, l ?? null, a, n, m, u, i, s, Wd)),
        (e.context = Zd(null)),
        (l = e.current),
        (a = he()),
        (a = pi(a)),
        (n = rl(a)),
        (n.callback = null),
        dl(l, n, a),
        (l = a),
        (e.current.lanes = l),
        La(e, l),
        De(e),
        (t[$l] = e.current),
        of(t),
        new li(e)
      );
    }),
    (jn.version = "19.2.0"),
    jn
  );
}
var cm;
function sv() {
  if (cm) return Df.exports;
  cm = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (o) {
        console.error(o);
      }
  }
  return c(), (Df.exports = fv()), Df.exports;
}
var ov = sv();
/**
 * react-router v7.9.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var fm = "popstate";
function rv(c = {}) {
  function o(f, d) {
    let { pathname: v, search: b, hash: O } = f.location;
    return Lf(
      "",
      { pathname: v, search: b, hash: O },
      (d.state && d.state.usr) || null,
      (d.state && d.state.key) || "default"
    );
  }
  function r(f, d) {
    return typeof d == "string" ? d : Hn(d);
  }
  return mv(o, r, null, c);
}
function zt(c, o) {
  if (c === !1 || c === null || typeof c > "u") throw new Error(o);
}
function je(c, o) {
  if (!c) {
    typeof console < "u" && console.warn(o);
    try {
      throw new Error(o);
    } catch {}
  }
}
function dv() {
  return Math.random().toString(36).substring(2, 10);
}
function sm(c, o) {
  return { usr: c.state, key: c.key, idx: o };
}
function Lf(c, o, r = null, f) {
  return {
    pathname: typeof c == "string" ? c : c.pathname,
    search: "",
    hash: "",
    ...(typeof o == "string" ? Ha(o) : o),
    state: r,
    key: (o && o.key) || f || dv(),
  };
}
function Hn({ pathname: c = "/", search: o = "", hash: r = "" }) {
  return (
    o && o !== "?" && (c += o.charAt(0) === "?" ? o : "?" + o),
    r && r !== "#" && (c += r.charAt(0) === "#" ? r : "#" + r),
    c
  );
}
function Ha(c) {
  let o = {};
  if (c) {
    let r = c.indexOf("#");
    r >= 0 && ((o.hash = c.substring(r)), (c = c.substring(0, r)));
    let f = c.indexOf("?");
    f >= 0 && ((o.search = c.substring(f)), (c = c.substring(0, f))),
      c && (o.pathname = c);
  }
  return o;
}
function mv(c, o, r, f = {}) {
  let { window: d = document.defaultView, v5Compat: v = !1 } = f,
    b = d.history,
    O = "POP",
    S = null,
    h = N();
  h == null && ((h = 0), b.replaceState({ ...b.state, idx: h }, ""));
  function N() {
    return (b.state || { idx: null }).idx;
  }
  function T() {
    O = "POP";
    let K = N(),
      X = K == null ? null : K - h;
    (h = K), S && S({ action: O, location: Z.location, delta: X });
  }
  function B(K, X) {
    O = "PUSH";
    let Q = Lf(Z.location, K, X);
    h = N() + 1;
    let W = sm(Q, h),
      xt = Z.createHref(Q);
    try {
      b.pushState(W, "", xt);
    } catch (Tt) {
      if (Tt instanceof DOMException && Tt.name === "DataCloneError") throw Tt;
      d.location.assign(xt);
    }
    v && S && S({ action: O, location: Z.location, delta: 1 });
  }
  function Y(K, X) {
    O = "REPLACE";
    let Q = Lf(Z.location, K, X);
    h = N();
    let W = sm(Q, h),
      xt = Z.createHref(Q);
    b.replaceState(W, "", xt),
      v && S && S({ action: O, location: Z.location, delta: 0 });
  }
  function H(K) {
    return hv(K);
  }
  let Z = {
    get action() {
      return O;
    },
    get location() {
      return c(d, b);
    },
    listen(K) {
      if (S) throw new Error("A history only accepts one active listener");
      return (
        d.addEventListener(fm, T),
        (S = K),
        () => {
          d.removeEventListener(fm, T), (S = null);
        }
      );
    },
    createHref(K) {
      return o(d, K);
    },
    createURL: H,
    encodeLocation(K) {
      let X = H(K);
      return { pathname: X.pathname, search: X.search, hash: X.hash };
    },
    push: B,
    replace: Y,
    go(K) {
      return b.go(K);
    },
  };
  return Z;
}
function hv(c, o = !1) {
  let r = "http://localhost";
  typeof window < "u" &&
    (r =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    zt(r, "No window.location.(origin|href) available to create URL");
  let f = typeof c == "string" ? c : Hn(c);
  return (
    (f = f.replace(/ $/, "%20")),
    !o && f.startsWith("//") && (f = r + f),
    new URL(f, r)
  );
}
function mm(c, o, r = "/") {
  return yv(c, o, r, !1);
}
function yv(c, o, r, f) {
  let d = typeof o == "string" ? Ha(o) : o,
    v = el(d.pathname || "/", r);
  if (v == null) return null;
  let b = hm(c);
  vv(b);
  let O = null;
  for (let S = 0; O == null && S < b.length; ++S) {
    let h = Ov(v);
    O = Tv(b[S], h, f);
  }
  return O;
}
function hm(c, o = [], r = [], f = "", d = !1) {
  let v = (b, O, S = d, h) => {
    let N = {
      relativePath: h === void 0 ? b.path || "" : h,
      caseSensitive: b.caseSensitive === !0,
      childrenIndex: O,
      route: b,
    };
    if (N.relativePath.startsWith("/")) {
      if (!N.relativePath.startsWith(f) && S) return;
      zt(
        N.relativePath.startsWith(f),
        `Absolute route path "${N.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (N.relativePath = N.relativePath.slice(f.length));
    }
    let T = tl([f, N.relativePath]),
      B = r.concat(N);
    b.children &&
      b.children.length > 0 &&
      (zt(
        b.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${T}".`
      ),
      hm(b.children, o, B, T, S)),
      !(b.path == null && !b.index) &&
        o.push({ path: T, score: Ev(T, b.index), routesMeta: B });
  };
  return (
    c.forEach((b, O) => {
      if (b.path === "" || !b.path?.includes("?")) v(b, O);
      else for (let S of ym(b.path)) v(b, O, !0, S);
    }),
    o
  );
}
function ym(c) {
  let o = c.split("/");
  if (o.length === 0) return [];
  let [r, ...f] = o,
    d = r.endsWith("?"),
    v = r.replace(/\?$/, "");
  if (f.length === 0) return d ? [v, ""] : [v];
  let b = ym(f.join("/")),
    O = [];
  return (
    O.push(...b.map((S) => (S === "" ? v : [v, S].join("/")))),
    d && O.push(...b),
    O.map((S) => (c.startsWith("/") && S === "" ? "/" : S))
  );
}
function vv(c) {
  c.sort((o, r) =>
    o.score !== r.score
      ? r.score - o.score
      : zv(
          o.routesMeta.map((f) => f.childrenIndex),
          r.routesMeta.map((f) => f.childrenIndex)
        )
  );
}
var gv = /^:[\w-]+$/,
  pv = 3,
  bv = 2,
  Sv = 1,
  Av = 10,
  xv = -2,
  om = (c) => c === "*";
function Ev(c, o) {
  let r = c.split("/"),
    f = r.length;
  return (
    r.some(om) && (f += xv),
    o && (f += bv),
    r
      .filter((d) => !om(d))
      .reduce((d, v) => d + (gv.test(v) ? pv : v === "" ? Sv : Av), f)
  );
}
function zv(c, o) {
  return c.length === o.length && c.slice(0, -1).every((f, d) => f === o[d])
    ? c[c.length - 1] - o[o.length - 1]
    : 0;
}
function Tv(c, o, r = !1) {
  let { routesMeta: f } = c,
    d = {},
    v = "/",
    b = [];
  for (let O = 0; O < f.length; ++O) {
    let S = f[O],
      h = O === f.length - 1,
      N = v === "/" ? o : o.slice(v.length) || "/",
      T = ci(
        { path: S.relativePath, caseSensitive: S.caseSensitive, end: h },
        N
      ),
      B = S.route;
    if (
      (!T &&
        h &&
        r &&
        !f[f.length - 1].route.index &&
        (T = ci(
          { path: S.relativePath, caseSensitive: S.caseSensitive, end: !1 },
          N
        )),
      !T)
    )
      return null;
    Object.assign(d, T.params),
      b.push({
        params: d,
        pathname: tl([v, T.pathname]),
        pathnameBase: Rv(tl([v, T.pathnameBase])),
        route: B,
      }),
      T.pathnameBase !== "/" && (v = tl([v, T.pathnameBase]));
  }
  return b;
}
function ci(c, o) {
  typeof c == "string" && (c = { path: c, caseSensitive: !1, end: !0 });
  let [r, f] = _v(c.path, c.caseSensitive, c.end),
    d = o.match(r);
  if (!d) return null;
  let v = d[0],
    b = v.replace(/(.)\/+$/, "$1"),
    O = d.slice(1);
  return {
    params: f.reduce((h, { paramName: N, isOptional: T }, B) => {
      if (N === "*") {
        let H = O[B] || "";
        b = v.slice(0, v.length - H.length).replace(/(.)\/+$/, "$1");
      }
      const Y = O[B];
      return (
        T && !Y ? (h[N] = void 0) : (h[N] = (Y || "").replace(/%2F/g, "/")), h
      );
    }, {}),
    pathname: v,
    pathnameBase: b,
    pattern: c,
  };
}
function _v(c, o = !1, r = !0) {
  je(
    c === "*" || !c.endsWith("*") || c.endsWith("/*"),
    `Route path "${c}" will be treated as if it were "${c.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let f = [],
    d =
      "^" +
      c
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (b, O, S) => (
            f.push({ paramName: O, isOptional: S != null }),
            S ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    c.endsWith("*")
      ? (f.push({ paramName: "*" }),
        (d += c === "*" || c === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
      ? (d += "\\/*$")
      : c !== "" && c !== "/" && (d += "(?:(?=\\/|$))"),
    [new RegExp(d, o ? void 0 : "i"), f]
  );
}
function Ov(c) {
  try {
    return c
      .split("/")
      .map((o) => decodeURIComponent(o).replace(/\//g, "%2F"))
      .join("/");
  } catch (o) {
    return (
      je(
        !1,
        `The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`
      ),
      c
    );
  }
}
function el(c, o) {
  if (o === "/") return c;
  if (!c.toLowerCase().startsWith(o.toLowerCase())) return null;
  let r = o.endsWith("/") ? o.length - 1 : o.length,
    f = c.charAt(r);
  return f && f !== "/" ? null : c.slice(r) || "/";
}
function Mv(c, o = "/") {
  let {
    pathname: r,
    search: f = "",
    hash: d = "",
  } = typeof c == "string" ? Ha(c) : c;
  return {
    pathname: r ? (r.startsWith("/") ? r : Nv(r, o)) : o,
    search: Dv(f),
    hash: jv(d),
  };
}
function Nv(c, o) {
  let r = o.replace(/\/+$/, "").split("/");
  return (
    c.split("/").forEach((d) => {
      d === ".." ? r.length > 1 && r.pop() : d !== "." && r.push(d);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function Hf(c, o, r, f) {
  return `Cannot include a '${c}' character in a manually specified \`to.${o}\` field [${JSON.stringify(
    f
  )}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Cv(c) {
  return c.filter(
    (o, r) => r === 0 || (o.route.path && o.route.path.length > 0)
  );
}
function vm(c) {
  let o = Cv(c);
  return o.map((r, f) => (f === o.length - 1 ? r.pathname : r.pathnameBase));
}
function gm(c, o, r, f = !1) {
  let d;
  typeof c == "string"
    ? (d = Ha(c))
    : ((d = { ...c }),
      zt(
        !d.pathname || !d.pathname.includes("?"),
        Hf("?", "pathname", "search", d)
      ),
      zt(
        !d.pathname || !d.pathname.includes("#"),
        Hf("#", "pathname", "hash", d)
      ),
      zt(!d.search || !d.search.includes("#"), Hf("#", "search", "hash", d)));
  let v = c === "" || d.pathname === "",
    b = v ? "/" : d.pathname,
    O;
  if (b == null) O = r;
  else {
    let T = o.length - 1;
    if (!f && b.startsWith("..")) {
      let B = b.split("/");
      for (; B[0] === ".."; ) B.shift(), (T -= 1);
      d.pathname = B.join("/");
    }
    O = T >= 0 ? o[T] : "/";
  }
  let S = Mv(d, O),
    h = b && b !== "/" && b.endsWith("/"),
    N = (v || b === ".") && r.endsWith("/");
  return !S.pathname.endsWith("/") && (h || N) && (S.pathname += "/"), S;
}
var tl = (c) => c.join("/").replace(/\/\/+/g, "/"),
  Rv = (c) => c.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Dv = (c) => (!c || c === "?" ? "" : c.startsWith("?") ? c : "?" + c),
  jv = (c) => (!c || c === "#" ? "" : c.startsWith("#") ? c : "#" + c);
function Uv(c) {
  return (
    c != null &&
    typeof c.status == "number" &&
    typeof c.statusText == "string" &&
    typeof c.internal == "boolean" &&
    "data" in c
  );
}
var pm = ["POST", "PUT", "PATCH", "DELETE"];
new Set(pm);
var Bv = ["GET", ...pm];
new Set(Bv);
var Ya = _.createContext(null);
Ya.displayName = "DataRouter";
var fi = _.createContext(null);
fi.displayName = "DataRouterState";
_.createContext(!1);
var bm = _.createContext({ isTransitioning: !1 });
bm.displayName = "ViewTransition";
var Hv = _.createContext(new Map());
Hv.displayName = "Fetchers";
var Yv = _.createContext(null);
Yv.displayName = "Await";
var Ue = _.createContext(null);
Ue.displayName = "Navigation";
var Yn = _.createContext(null);
Yn.displayName = "Location";
var ll = _.createContext({ outlet: null, matches: [], isDataRoute: !1 });
ll.displayName = "Route";
var Vf = _.createContext(null);
Vf.displayName = "RouteError";
function wv(c, { relative: o } = {}) {
  zt(
    wn(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: r, navigator: f } = _.useContext(Ue),
    { hash: d, pathname: v, search: b } = qn(c, { relative: o }),
    O = v;
  return (
    r !== "/" && (O = v === "/" ? r : tl([r, v])),
    f.createHref({ pathname: O, search: b, hash: d })
  );
}
function wn() {
  return _.useContext(Yn) != null;
}
function Wl() {
  return (
    zt(
      wn(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    _.useContext(Yn).location
  );
}
var Sm =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Am(c) {
  _.useContext(Ue).static || _.useLayoutEffect(c);
}
function qv() {
  let { isDataRoute: c } = _.useContext(ll);
  return c ? Iv() : Zv();
}
function Zv() {
  zt(
    wn(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let c = _.useContext(Ya),
    { basename: o, navigator: r } = _.useContext(Ue),
    { matches: f } = _.useContext(ll),
    { pathname: d } = Wl(),
    v = JSON.stringify(vm(f)),
    b = _.useRef(!1);
  return (
    Am(() => {
      b.current = !0;
    }),
    _.useCallback(
      (S, h = {}) => {
        if ((je(b.current, Sm), !b.current)) return;
        if (typeof S == "number") {
          r.go(S);
          return;
        }
        let N = gm(S, JSON.parse(v), d, h.relative === "path");
        c == null &&
          o !== "/" &&
          (N.pathname = N.pathname === "/" ? o : tl([o, N.pathname])),
          (h.replace ? r.replace : r.push)(N, h.state, h);
      },
      [o, r, v, d, c]
    )
  );
}
_.createContext(null);
function qn(c, { relative: o } = {}) {
  let { matches: r } = _.useContext(ll),
    { pathname: f } = Wl(),
    d = JSON.stringify(vm(r));
  return _.useMemo(() => gm(c, JSON.parse(d), f, o === "path"), [c, d, f, o]);
}
function Lv(c, o) {
  return xm(c, o);
}
function xm(c, o, r, f, d) {
  zt(
    wn(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: v } = _.useContext(Ue),
    { matches: b } = _.useContext(ll),
    O = b[b.length - 1],
    S = O ? O.params : {},
    h = O ? O.pathname : "/",
    N = O ? O.pathnameBase : "/",
    T = O && O.route;
  {
    let Q = (T && T.path) || "";
    Em(
      h,
      !T || Q.endsWith("*") || Q.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${
        Q === "/" ? "*" : `${Q}/*`
      }">.`
    );
  }
  let B = Wl(),
    Y;
  if (o) {
    let Q = typeof o == "string" ? Ha(o) : o;
    zt(
      N === "/" || Q.pathname?.startsWith(N),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${N}" but pathname "${Q.pathname}" was given in the \`location\` prop.`
    ),
      (Y = Q);
  } else Y = B;
  let H = Y.pathname || "/",
    Z = H;
  if (N !== "/") {
    let Q = N.replace(/^\//, "").split("/");
    Z = "/" + H.replace(/^\//, "").split("/").slice(Q.length).join("/");
  }
  let K = mm(c, { pathname: Z });
  je(
    T || K != null,
    `No routes matched location "${Y.pathname}${Y.search}${Y.hash}" `
  ),
    je(
      K == null ||
        K[K.length - 1].route.element !== void 0 ||
        K[K.length - 1].route.Component !== void 0 ||
        K[K.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${Y.pathname}${Y.search}${Y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let X = Kv(
    K &&
      K.map((Q) =>
        Object.assign({}, Q, {
          params: Object.assign({}, S, Q.params),
          pathname: tl([
            N,
            v.encodeLocation
              ? v.encodeLocation(
                  Q.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
                ).pathname
              : Q.pathname,
          ]),
          pathnameBase:
            Q.pathnameBase === "/"
              ? N
              : tl([
                  N,
                  v.encodeLocation
                    ? v.encodeLocation(
                        Q.pathnameBase
                          .replace(/\?/g, "%3F")
                          .replace(/#/g, "%23")
                      ).pathname
                    : Q.pathnameBase,
                ]),
        })
      ),
    b,
    r,
    f,
    d
  );
  return o && X
    ? _.createElement(
        Yn.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...Y,
            },
            navigationType: "POP",
          },
        },
        X
      )
    : X;
}
function Gv() {
  let c = $v(),
    o = Uv(c)
      ? `${c.status} ${c.statusText}`
      : c instanceof Error
      ? c.message
      : JSON.stringify(c),
    r = c instanceof Error ? c.stack : null,
    f = "rgba(200,200,200, 0.5)",
    d = { padding: "0.5rem", backgroundColor: f },
    v = { padding: "2px 4px", backgroundColor: f },
    b = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", c),
    (b = _.createElement(
      _.Fragment,
      null,
      _.createElement("p", null, "💿 Hey developer 👋"),
      _.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        _.createElement("code", { style: v }, "ErrorBoundary"),
        " or",
        " ",
        _.createElement("code", { style: v }, "errorElement"),
        " prop on your route."
      )
    )),
    _.createElement(
      _.Fragment,
      null,
      _.createElement("h2", null, "Unexpected Application Error!"),
      _.createElement("h3", { style: { fontStyle: "italic" } }, o),
      r ? _.createElement("pre", { style: d }, r) : null,
      b
    )
  );
}
var Xv = _.createElement(Gv, null),
  Qv = class extends _.Component {
    constructor(c) {
      super(c),
        (this.state = {
          location: c.location,
          revalidation: c.revalidation,
          error: c.error,
        });
    }
    static getDerivedStateFromError(c) {
      return { error: c };
    }
    static getDerivedStateFromProps(c, o) {
      return o.location !== c.location ||
        (o.revalidation !== "idle" && c.revalidation === "idle")
        ? { error: c.error, location: c.location, revalidation: c.revalidation }
        : {
            error: c.error !== void 0 ? c.error : o.error,
            location: o.location,
            revalidation: c.revalidation || o.revalidation,
          };
    }
    componentDidCatch(c, o) {
      this.props.unstable_onError
        ? this.props.unstable_onError(c, o)
        : console.error(
            "React Router caught the following error during render",
            c
          );
    }
    render() {
      return this.state.error !== void 0
        ? _.createElement(
            ll.Provider,
            { value: this.props.routeContext },
            _.createElement(Vf.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Vv({ routeContext: c, match: o, children: r }) {
  let f = _.useContext(Ya);
  return (
    f &&
      f.static &&
      f.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (f.staticContext._deepestRenderedBoundaryId = o.route.id),
    _.createElement(ll.Provider, { value: c }, r)
  );
}
function Kv(c, o = [], r = null, f = null, d = null) {
  if (c == null) {
    if (!r) return null;
    if (r.errors) c = r.matches;
    else if (o.length === 0 && !r.initialized && r.matches.length > 0)
      c = r.matches;
    else return null;
  }
  let v = c,
    b = r?.errors;
  if (b != null) {
    let h = v.findIndex((N) => N.route.id && b?.[N.route.id] !== void 0);
    zt(
      h >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        b
      ).join(",")}`
    ),
      (v = v.slice(0, Math.min(v.length, h + 1)));
  }
  let O = !1,
    S = -1;
  if (r)
    for (let h = 0; h < v.length; h++) {
      let N = v[h];
      if (
        ((N.route.HydrateFallback || N.route.hydrateFallbackElement) && (S = h),
        N.route.id)
      ) {
        let { loaderData: T, errors: B } = r,
          Y =
            N.route.loader &&
            !T.hasOwnProperty(N.route.id) &&
            (!B || B[N.route.id] === void 0);
        if (N.route.lazy || Y) {
          (O = !0), S >= 0 ? (v = v.slice(0, S + 1)) : (v = [v[0]]);
          break;
        }
      }
    }
  return v.reduceRight((h, N, T) => {
    let B,
      Y = !1,
      H = null,
      Z = null;
    r &&
      ((B = b && N.route.id ? b[N.route.id] : void 0),
      (H = N.route.errorElement || Xv),
      O &&
        (S < 0 && T === 0
          ? (Em(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (Y = !0),
            (Z = null))
          : S === T &&
            ((Y = !0), (Z = N.route.hydrateFallbackElement || null))));
    let K = o.concat(v.slice(0, T + 1)),
      X = () => {
        let Q;
        return (
          B
            ? (Q = H)
            : Y
            ? (Q = Z)
            : N.route.Component
            ? (Q = _.createElement(N.route.Component, null))
            : N.route.element
            ? (Q = N.route.element)
            : (Q = h),
          _.createElement(Vv, {
            match: N,
            routeContext: { outlet: h, matches: K, isDataRoute: r != null },
            children: Q,
          })
        );
      };
    return r && (N.route.ErrorBoundary || N.route.errorElement || T === 0)
      ? _.createElement(Qv, {
          location: r.location,
          revalidation: r.revalidation,
          component: H,
          error: B,
          children: X(),
          routeContext: { outlet: null, matches: K, isDataRoute: !0 },
          unstable_onError: f,
        })
      : X();
  }, null);
}
function Kf(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Jv(c) {
  let o = _.useContext(Ya);
  return zt(o, Kf(c)), o;
}
function kv(c) {
  let o = _.useContext(fi);
  return zt(o, Kf(c)), o;
}
function Fv(c) {
  let o = _.useContext(ll);
  return zt(o, Kf(c)), o;
}
function Jf(c) {
  let o = Fv(c),
    r = o.matches[o.matches.length - 1];
  return (
    zt(
      r.route.id,
      `${c} can only be used on routes that contain a unique "id"`
    ),
    r.route.id
  );
}
function Wv() {
  return Jf("useRouteId");
}
function $v() {
  let c = _.useContext(Vf),
    o = kv("useRouteError"),
    r = Jf("useRouteError");
  return c !== void 0 ? c : o.errors?.[r];
}
function Iv() {
  let { router: c } = Jv("useNavigate"),
    o = Jf("useNavigate"),
    r = _.useRef(!1);
  return (
    Am(() => {
      r.current = !0;
    }),
    _.useCallback(
      async (d, v = {}) => {
        je(r.current, Sm),
          r.current &&
            (typeof d == "number"
              ? c.navigate(d)
              : await c.navigate(d, { fromRouteId: o, ...v }));
      },
      [c, o]
    )
  );
}
var rm = {};
function Em(c, o, r) {
  !o && !rm[c] && ((rm[c] = !0), je(!1, r));
}
_.memo(Pv);
function Pv({ routes: c, future: o, state: r, unstable_onError: f }) {
  return xm(c, void 0, r, f, o);
}
function Ba(c) {
  zt(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function t0({
  basename: c = "/",
  children: o = null,
  location: r,
  navigationType: f = "POP",
  navigator: d,
  static: v = !1,
}) {
  zt(
    !wn(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let b = c.replace(/^\/*/, "/"),
    O = _.useMemo(
      () => ({ basename: b, navigator: d, static: v, future: {} }),
      [b, d, v]
    );
  typeof r == "string" && (r = Ha(r));
  let {
      pathname: S = "/",
      search: h = "",
      hash: N = "",
      state: T = null,
      key: B = "default",
    } = r,
    Y = _.useMemo(() => {
      let H = el(S, b);
      return H == null
        ? null
        : {
            location: { pathname: H, search: h, hash: N, state: T, key: B },
            navigationType: f,
          };
    }, [b, S, h, N, T, B, f]);
  return (
    je(
      Y != null,
      `<Router basename="${b}"> is not able to match the URL "${S}${h}${N}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    Y == null
      ? null
      : _.createElement(
          Ue.Provider,
          { value: O },
          _.createElement(Yn.Provider, { children: o, value: Y })
        )
  );
}
function e0({ children: c, location: o }) {
  return Lv(Gf(c), o);
}
function Gf(c, o = []) {
  let r = [];
  return (
    _.Children.forEach(c, (f, d) => {
      if (!_.isValidElement(f)) return;
      let v = [...o, d];
      if (f.type === _.Fragment) {
        r.push.apply(r, Gf(f.props.children, v));
        return;
      }
      zt(
        f.type === Ba,
        `[${
          typeof f.type == "string" ? f.type : f.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        zt(
          !f.props.index || !f.props.children,
          "An index route cannot have child routes."
        );
      let b = {
        id: f.props.id || v.join("-"),
        caseSensitive: f.props.caseSensitive,
        element: f.props.element,
        Component: f.props.Component,
        index: f.props.index,
        path: f.props.path,
        middleware: f.props.middleware,
        loader: f.props.loader,
        action: f.props.action,
        hydrateFallbackElement: f.props.hydrateFallbackElement,
        HydrateFallback: f.props.HydrateFallback,
        errorElement: f.props.errorElement,
        ErrorBoundary: f.props.ErrorBoundary,
        hasErrorBoundary:
          f.props.hasErrorBoundary === !0 ||
          f.props.ErrorBoundary != null ||
          f.props.errorElement != null,
        shouldRevalidate: f.props.shouldRevalidate,
        handle: f.props.handle,
        lazy: f.props.lazy,
      };
      f.props.children && (b.children = Gf(f.props.children, v)), r.push(b);
    }),
    r
  );
}
var ui = "get",
  ii = "application/x-www-form-urlencoded";
function si(c) {
  return c != null && typeof c.tagName == "string";
}
function l0(c) {
  return si(c) && c.tagName.toLowerCase() === "button";
}
function a0(c) {
  return si(c) && c.tagName.toLowerCase() === "form";
}
function n0(c) {
  return si(c) && c.tagName.toLowerCase() === "input";
}
function u0(c) {
  return !!(c.metaKey || c.altKey || c.ctrlKey || c.shiftKey);
}
function i0(c, o) {
  return c.button === 0 && (!o || o === "_self") && !u0(c);
}
var ni = null;
function c0() {
  if (ni === null)
    try {
      new FormData(document.createElement("form"), 0), (ni = !1);
    } catch {
      ni = !0;
    }
  return ni;
}
var f0 = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Yf(c) {
  return c != null && !f0.has(c)
    ? (je(
        !1,
        `"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ii}"`
      ),
      null)
    : c;
}
function s0(c, o) {
  let r, f, d, v, b;
  if (a0(c)) {
    let O = c.getAttribute("action");
    (f = O ? el(O, o) : null),
      (r = c.getAttribute("method") || ui),
      (d = Yf(c.getAttribute("enctype")) || ii),
      (v = new FormData(c));
  } else if (l0(c) || (n0(c) && (c.type === "submit" || c.type === "image"))) {
    let O = c.form;
    if (O == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let S = c.getAttribute("formaction") || O.getAttribute("action");
    if (
      ((f = S ? el(S, o) : null),
      (r = c.getAttribute("formmethod") || O.getAttribute("method") || ui),
      (d =
        Yf(c.getAttribute("formenctype")) ||
        Yf(O.getAttribute("enctype")) ||
        ii),
      (v = new FormData(O, c)),
      !c0())
    ) {
      let { name: h, type: N, value: T } = c;
      if (N === "image") {
        let B = h ? `${h}.` : "";
        v.append(`${B}x`, "0"), v.append(`${B}y`, "0");
      } else h && v.append(h, T);
    }
  } else {
    if (si(c))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (r = ui), (f = null), (d = ii), (b = c);
  }
  return (
    v && d === "text/plain" && ((b = v), (v = void 0)),
    { action: f, method: r.toLowerCase(), encType: d, formData: v, body: b }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function kf(c, o) {
  if (c === !1 || c === null || typeof c > "u") throw new Error(o);
}
function o0(c, o, r) {
  let f =
    typeof c == "string"
      ? new URL(
          c,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : c;
  return (
    f.pathname === "/"
      ? (f.pathname = `_root.${r}`)
      : o && el(f.pathname, o) === "/"
      ? (f.pathname = `${o.replace(/\/$/, "")}/_root.${r}`)
      : (f.pathname = `${f.pathname.replace(/\/$/, "")}.${r}`),
    f
  );
}
async function r0(c, o) {
  if (c.id in o) return o[c.id];
  try {
    let r = await import(c.module);
    return (o[c.id] = r), r;
  } catch (r) {
    return (
      console.error(
        `Error loading route module \`${c.module}\`, reloading page...`
      ),
      console.error(r),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function d0(c) {
  return c == null
    ? !1
    : c.href == null
    ? c.rel === "preload" &&
      typeof c.imageSrcSet == "string" &&
      typeof c.imageSizes == "string"
    : typeof c.rel == "string" && typeof c.href == "string";
}
async function m0(c, o, r) {
  let f = await Promise.all(
    c.map(async (d) => {
      let v = o.routes[d.route.id];
      if (v) {
        let b = await r0(v, r);
        return b.links ? b.links() : [];
      }
      return [];
    })
  );
  return g0(
    f
      .flat(1)
      .filter(d0)
      .filter((d) => d.rel === "stylesheet" || d.rel === "preload")
      .map((d) =>
        d.rel === "stylesheet"
          ? { ...d, rel: "prefetch", as: "style" }
          : { ...d, rel: "prefetch" }
      )
  );
}
function dm(c, o, r, f, d, v) {
  let b = (S, h) => (r[h] ? S.route.id !== r[h].route.id : !0),
    O = (S, h) =>
      r[h].pathname !== S.pathname ||
      (r[h].route.path?.endsWith("*") && r[h].params["*"] !== S.params["*"]);
  return v === "assets"
    ? o.filter((S, h) => b(S, h) || O(S, h))
    : v === "data"
    ? o.filter((S, h) => {
        let N = f.routes[S.route.id];
        if (!N || !N.hasLoader) return !1;
        if (b(S, h) || O(S, h)) return !0;
        if (S.route.shouldRevalidate) {
          let T = S.route.shouldRevalidate({
            currentUrl: new URL(d.pathname + d.search + d.hash, window.origin),
            currentParams: r[0]?.params || {},
            nextUrl: new URL(c, window.origin),
            nextParams: S.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof T == "boolean") return T;
        }
        return !0;
      })
    : [];
}
function h0(c, o, { includeHydrateFallback: r } = {}) {
  return y0(
    c
      .map((f) => {
        let d = o.routes[f.route.id];
        if (!d) return [];
        let v = [d.module];
        return (
          d.clientActionModule && (v = v.concat(d.clientActionModule)),
          d.clientLoaderModule && (v = v.concat(d.clientLoaderModule)),
          r &&
            d.hydrateFallbackModule &&
            (v = v.concat(d.hydrateFallbackModule)),
          d.imports && (v = v.concat(d.imports)),
          v
        );
      })
      .flat(1)
  );
}
function y0(c) {
  return [...new Set(c)];
}
function v0(c) {
  let o = {},
    r = Object.keys(c).sort();
  for (let f of r) o[f] = c[f];
  return o;
}
function g0(c, o) {
  let r = new Set();
  return (
    new Set(o),
    c.reduce((f, d) => {
      let v = JSON.stringify(v0(d));
      return r.has(v) || (r.add(v), f.push({ key: v, link: d })), f;
    }, [])
  );
}
function zm() {
  let c = _.useContext(Ya);
  return (
    kf(
      c,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    c
  );
}
function p0() {
  let c = _.useContext(fi);
  return (
    kf(
      c,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    c
  );
}
var Ff = _.createContext(void 0);
Ff.displayName = "FrameworkContext";
function Tm() {
  let c = _.useContext(Ff);
  return (
    kf(c, "You must render this element inside a <HydratedRouter> element"), c
  );
}
function b0(c, o) {
  let r = _.useContext(Ff),
    [f, d] = _.useState(!1),
    [v, b] = _.useState(!1),
    {
      onFocus: O,
      onBlur: S,
      onMouseEnter: h,
      onMouseLeave: N,
      onTouchStart: T,
    } = o,
    B = _.useRef(null);
  _.useEffect(() => {
    if ((c === "render" && b(!0), c === "viewport")) {
      let Z = (X) => {
          X.forEach((Q) => {
            b(Q.isIntersecting);
          });
        },
        K = new IntersectionObserver(Z, { threshold: 0.5 });
      return (
        B.current && K.observe(B.current),
        () => {
          K.disconnect();
        }
      );
    }
  }, [c]),
    _.useEffect(() => {
      if (f) {
        let Z = setTimeout(() => {
          b(!0);
        }, 100);
        return () => {
          clearTimeout(Z);
        };
      }
    }, [f]);
  let Y = () => {
      d(!0);
    },
    H = () => {
      d(!1), b(!1);
    };
  return r
    ? c !== "intent"
      ? [v, B, {}]
      : [
          v,
          B,
          {
            onFocus: Un(O, Y),
            onBlur: Un(S, H),
            onMouseEnter: Un(h, Y),
            onMouseLeave: Un(N, H),
            onTouchStart: Un(T, Y),
          },
        ]
    : [!1, B, {}];
}
function Un(c, o) {
  return (r) => {
    c && c(r), r.defaultPrevented || o(r);
  };
}
function S0({ page: c, ...o }) {
  let { router: r } = zm(),
    f = _.useMemo(() => mm(r.routes, c, r.basename), [r.routes, c, r.basename]);
  return f ? _.createElement(x0, { page: c, matches: f, ...o }) : null;
}
function A0(c) {
  let { manifest: o, routeModules: r } = Tm(),
    [f, d] = _.useState([]);
  return (
    _.useEffect(() => {
      let v = !1;
      return (
        m0(c, o, r).then((b) => {
          v || d(b);
        }),
        () => {
          v = !0;
        }
      );
    }, [c, o, r]),
    f
  );
}
function x0({ page: c, matches: o, ...r }) {
  let f = Wl(),
    { manifest: d, routeModules: v } = Tm(),
    { basename: b } = zm(),
    { loaderData: O, matches: S } = p0(),
    h = _.useMemo(() => dm(c, o, S, d, f, "data"), [c, o, S, d, f]),
    N = _.useMemo(() => dm(c, o, S, d, f, "assets"), [c, o, S, d, f]),
    T = _.useMemo(() => {
      if (c === f.pathname + f.search + f.hash) return [];
      let H = new Set(),
        Z = !1;
      if (
        (o.forEach((X) => {
          let Q = d.routes[X.route.id];
          !Q ||
            !Q.hasLoader ||
            ((!h.some((W) => W.route.id === X.route.id) &&
              X.route.id in O &&
              v[X.route.id]?.shouldRevalidate) ||
            Q.hasClientLoader
              ? (Z = !0)
              : H.add(X.route.id));
        }),
        H.size === 0)
      )
        return [];
      let K = o0(c, b, "data");
      return (
        Z &&
          H.size > 0 &&
          K.searchParams.set(
            "_routes",
            o
              .filter((X) => H.has(X.route.id))
              .map((X) => X.route.id)
              .join(",")
          ),
        [K.pathname + K.search]
      );
    }, [b, O, f, d, h, o, c, v]),
    B = _.useMemo(() => h0(N, d), [N, d]),
    Y = A0(N);
  return _.createElement(
    _.Fragment,
    null,
    T.map((H) =>
      _.createElement("link", {
        key: H,
        rel: "prefetch",
        as: "fetch",
        href: H,
        ...r,
      })
    ),
    B.map((H) =>
      _.createElement("link", { key: H, rel: "modulepreload", href: H, ...r })
    ),
    Y.map(({ key: H, link: Z }) =>
      _.createElement("link", { key: H, nonce: r.nonce, ...Z })
    )
  );
}
function E0(...c) {
  return (o) => {
    c.forEach((r) => {
      typeof r == "function" ? r(o) : r != null && (r.current = o);
    });
  };
}
var _m =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  _m && (window.__reactRouterVersion = "7.9.3");
} catch {}
function z0({ basename: c, children: o, window: r }) {
  let f = _.useRef();
  f.current == null && (f.current = rv({ window: r, v5Compat: !0 }));
  let d = f.current,
    [v, b] = _.useState({ action: d.action, location: d.location }),
    O = _.useCallback(
      (S) => {
        _.startTransition(() => b(S));
      },
      [b]
    );
  return (
    _.useLayoutEffect(() => d.listen(O), [d, O]),
    _.createElement(t0, {
      basename: c,
      children: o,
      location: v.location,
      navigationType: v.action,
      navigator: d,
    })
  );
}
var Om = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Mm = _.forwardRef(function (
    {
      onClick: o,
      discover: r = "render",
      prefetch: f = "none",
      relative: d,
      reloadDocument: v,
      replace: b,
      state: O,
      target: S,
      to: h,
      preventScrollReset: N,
      viewTransition: T,
      ...B
    },
    Y
  ) {
    let { basename: H } = _.useContext(Ue),
      Z = typeof h == "string" && Om.test(h),
      K,
      X = !1;
    if (typeof h == "string" && Z && ((K = h), _m))
      try {
        let _t = new URL(window.location.href),
          ae = h.startsWith("//") ? new URL(_t.protocol + h) : new URL(h),
          ne = el(ae.pathname, H);
        ae.origin === _t.origin && ne != null
          ? (h = ne + ae.search + ae.hash)
          : (X = !0);
      } catch {
        je(
          !1,
          `<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let Q = wv(h, { relative: d }),
      [W, xt, Tt] = b0(f, B),
      Ht = M0(h, {
        replace: b,
        state: O,
        target: S,
        preventScrollReset: N,
        relative: d,
        viewTransition: T,
      });
    function tt(_t) {
      o && o(_t), _t.defaultPrevented || Ht(_t);
    }
    let Yt = _.createElement("a", {
      ...B,
      ...Tt,
      href: K || Q,
      onClick: X || v ? o : tt,
      ref: E0(Y, xt),
      target: S,
      "data-discover": !Z && r === "render" ? "true" : void 0,
    });
    return W && !Z
      ? _.createElement(_.Fragment, null, Yt, _.createElement(S0, { page: Q }))
      : Yt;
  });
Mm.displayName = "Link";
var T0 = _.forwardRef(function (
  {
    "aria-current": o = "page",
    caseSensitive: r = !1,
    className: f = "",
    end: d = !1,
    style: v,
    to: b,
    viewTransition: O,
    children: S,
    ...h
  },
  N
) {
  let T = qn(b, { relative: h.relative }),
    B = Wl(),
    Y = _.useContext(fi),
    { navigator: H, basename: Z } = _.useContext(Ue),
    K = Y != null && j0(T) && O === !0,
    X = H.encodeLocation ? H.encodeLocation(T).pathname : T.pathname,
    Q = B.pathname,
    W =
      Y && Y.navigation && Y.navigation.location
        ? Y.navigation.location.pathname
        : null;
  r ||
    ((Q = Q.toLowerCase()),
    (W = W ? W.toLowerCase() : null),
    (X = X.toLowerCase())),
    W && Z && (W = el(W, Z) || W);
  const xt = X !== "/" && X.endsWith("/") ? X.length - 1 : X.length;
  let Tt = Q === X || (!d && Q.startsWith(X) && Q.charAt(xt) === "/"),
    Ht =
      W != null &&
      (W === X || (!d && W.startsWith(X) && W.charAt(X.length) === "/")),
    tt = { isActive: Tt, isPending: Ht, isTransitioning: K },
    Yt = Tt ? o : void 0,
    _t;
  typeof f == "function"
    ? (_t = f(tt))
    : (_t = [
        f,
        Tt ? "active" : null,
        Ht ? "pending" : null,
        K ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let ae = typeof v == "function" ? v(tt) : v;
  return _.createElement(
    Mm,
    {
      ...h,
      "aria-current": Yt,
      className: _t,
      ref: N,
      style: ae,
      to: b,
      viewTransition: O,
    },
    typeof S == "function" ? S(tt) : S
  );
});
T0.displayName = "NavLink";
var _0 = _.forwardRef(
  (
    {
      discover: c = "render",
      fetcherKey: o,
      navigate: r,
      reloadDocument: f,
      replace: d,
      state: v,
      method: b = ui,
      action: O,
      onSubmit: S,
      relative: h,
      preventScrollReset: N,
      viewTransition: T,
      ...B
    },
    Y
  ) => {
    let H = R0(),
      Z = D0(O, { relative: h }),
      K = b.toLowerCase() === "get" ? "get" : "post",
      X = typeof O == "string" && Om.test(O),
      Q = (W) => {
        if ((S && S(W), W.defaultPrevented)) return;
        W.preventDefault();
        let xt = W.nativeEvent.submitter,
          Tt = xt?.getAttribute("formmethod") || b;
        H(xt || W.currentTarget, {
          fetcherKey: o,
          method: Tt,
          navigate: r,
          replace: d,
          state: v,
          relative: h,
          preventScrollReset: N,
          viewTransition: T,
        });
      };
    return _.createElement("form", {
      ref: Y,
      method: K,
      action: Z,
      onSubmit: f ? S : Q,
      ...B,
      "data-discover": !X && c === "render" ? "true" : void 0,
    });
  }
);
_0.displayName = "Form";
function O0(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Nm(c) {
  let o = _.useContext(Ya);
  return zt(o, O0(c)), o;
}
function M0(
  c,
  {
    target: o,
    replace: r,
    state: f,
    preventScrollReset: d,
    relative: v,
    viewTransition: b,
  } = {}
) {
  let O = qv(),
    S = Wl(),
    h = qn(c, { relative: v });
  return _.useCallback(
    (N) => {
      if (i0(N, o)) {
        N.preventDefault();
        let T = r !== void 0 ? r : Hn(S) === Hn(h);
        O(c, {
          replace: T,
          state: f,
          preventScrollReset: d,
          relative: v,
          viewTransition: b,
        });
      }
    },
    [S, O, h, r, f, o, c, d, v, b]
  );
}
var N0 = 0,
  C0 = () => `__${String(++N0)}__`;
function R0() {
  let { router: c } = Nm("useSubmit"),
    { basename: o } = _.useContext(Ue),
    r = Wv();
  return _.useCallback(
    async (f, d = {}) => {
      let { action: v, method: b, encType: O, formData: S, body: h } = s0(f, o);
      if (d.navigate === !1) {
        let N = d.fetcherKey || C0();
        await c.fetch(N, r, d.action || v, {
          preventScrollReset: d.preventScrollReset,
          formData: S,
          body: h,
          formMethod: d.method || b,
          formEncType: d.encType || O,
          flushSync: d.flushSync,
        });
      } else
        await c.navigate(d.action || v, {
          preventScrollReset: d.preventScrollReset,
          formData: S,
          body: h,
          formMethod: d.method || b,
          formEncType: d.encType || O,
          replace: d.replace,
          state: d.state,
          fromRouteId: r,
          flushSync: d.flushSync,
          viewTransition: d.viewTransition,
        });
    },
    [c, o, r]
  );
}
function D0(c, { relative: o } = {}) {
  let { basename: r } = _.useContext(Ue),
    f = _.useContext(ll);
  zt(f, "useFormAction must be used inside a RouteContext");
  let [d] = f.matches.slice(-1),
    v = { ...qn(c || ".", { relative: o }) },
    b = Wl();
  if (c == null) {
    v.search = b.search;
    let O = new URLSearchParams(v.search),
      S = O.getAll("index");
    if (S.some((N) => N === "")) {
      O.delete("index"),
        S.filter((T) => T).forEach((T) => O.append("index", T));
      let N = O.toString();
      v.search = N ? `?${N}` : "";
    }
  }
  return (
    (!c || c === ".") &&
      d.route.index &&
      (v.search = v.search ? v.search.replace(/^\?/, "?index&") : "?index"),
    r !== "/" && (v.pathname = v.pathname === "/" ? r : tl([r, v.pathname])),
    Hn(v)
  );
}
function j0(c, { relative: o } = {}) {
  let r = _.useContext(bm);
  zt(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: f } = Nm("useViewTransitionState"),
    d = qn(c, { relative: o });
  if (!r.isTransitioning) return !1;
  let v = el(r.currentLocation.pathname, f) || r.currentLocation.pathname,
    b = el(r.nextLocation.pathname, f) || r.nextLocation.pathname;
  return ci(d.pathname, b) != null || ci(d.pathname, v) != null;
}
const U0 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAYAAAD7PHgWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPdSURBVHgBvVg9aFRBEP6iJv4SFWK0EBVEUAMKQtBCBRFRRBBFA/4hQsBCCYKFIJZBmzQKQSwUgoiVjaCIFsYi4k+VKsZCURGVQEIIiV7uEn2TN+Obnd27e3d5ycDw7u3sznzzs7P7DgDeRjwR8d+UPISY5qF6msucM7rz/FxtF+SUsBwXIn7P6+agcqpVNgsBcBtgnKeXRmXcLrDg5PfFKgAKuK9Gv2RwH+LIekSGzvCkSbXweMQtER+L+LBSJgrXIn2qxXCPASf22iKuYQ4CJHqujFO0RpVymnMeboQLLC8HUox2wQ2AAOwyOIIkRkaQeEgAXiuQ4HftRG8Z5QLuMtx0yvqeMusdohqph1+DF1iBOPFbySkCVxBOTQ2vOxgAR+u/K7upiSJ1QBkXpesYIHEDkgiI3Nt9/N4E3+ECv1cMjkgi8VAZz/NvMUpROa2cEOPaIM1bGgA3zs86FNmxaUgWDijl9Owz8hfGiQ88XseOWnDyew2m1+iniBTMN4opWu1sXAyMGvl1Na77pjiyGxmAE6JIbYdfj1tZRumUNOp6tI1YWksrSvS66dBNuKmkp2wYqsejCojtczJ+m3VVczyWJFH4CW49SouQdD1G+NJBkX1pdGVOBEKKXnYhgbmn5ETD8M/Yj2bOjBEZ2KgMSyr3IKnHJfB37ibEu3pWiKJ4VYETIIsZIAHdD78/LsAsRJBIaojO34ICOczjAsI2+QEer7oxV0JyUshxJSl/AhfkoJHf5/HMW0yIqIEvg79jTyCOMjmxEEkEpST2YhaiKBH6jPBJ0cBzCMgu+PUo9TojJN53I/xJQGM5niMg7sKtxyGjKzOS2ulE8dNCGvM7nivR/gG3Hh8ZnZmAIz6H8MWTdrX9MryE5FJRB78eDyHDKJKRHUXAjfGcnfAvFeuR1GOzkkvt1iOja9dKFL/b6U+BTviXCiKpx1tGPqJsVA1uTglwjUiUSxP/AvdS0W9AajlF8qlZn5pE4RjCH/TNCH+DWIcoYh2I67EWYYdbUCFAMdyH8MXzJCusKbK2Cf6lYhviWiT5FiWXlC9HylSLJ3R0FQLgOsy8EBHwa/AvFbSba1l+w8jHlIMlFRO1G1BSL89SgNPyXrj1+IvHpXz64dZjdyn98pF9BOF2IsWedscJiDzcenxgQIwbW2eVzKkhMrwZsde0QJqo3FoWsdE80hPpXBXxN8TZkIZ/J+I/DGhFxKd4/iSDo7Y2iOS/nykwob88Qr2uUqK1rSj9UWWzlVMO/jdcDFwDptftJV2vkP6fXIrcG61kmFFPwN36TcjgKFI6fhobxZgAUqTb/gEE5gHrO9K4sQAAAABJRU5ErkJggg==",
  B0 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAqCAYAAAA51uKRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAeWSURBVHgBxVh9TFZVGD/3vbyAooCi4heGgMgUpoKgMhwwEjEHU1BAzYyN4Wgx5nCIH4nC+hipgeCcrpqbNQZjuZnVWlurf5j6R66VNYgFYZbmRgEhJPej33M5Bw4v7wcKrWe7773vuc95zu883+eq7OlI4ReRiivI398/Wtf1yBkzZgR6e3ubw8PDA054p5VIqC0uLs4+Z86cCi8vr99UVTUVRTExPu7u6+trBgYGtkVGRuZJoJ8JlNepU6dsXACThDEs8gYHYIjFXV2cxwAoMykpqUCWw8mGdbzoztzRrl27vhITSEBwcLAfNDFAwvFfdwfC8bLZbMRvREVF/SIBIrm+dXV17zEPZFuyZEnQ3LlzzfXr1ycEBASE2e12Eqw9DQgnoDRsyty2bZv/okWLstesWWNKG3ZLSnp6+ptcCE0angoQCdConKampq1svNlca4d+1q5d2wbTTAsQNubk+vnz56+LTU8Cy5j3h4eH95GKpwmIVlFR8Z3DOp5p//79lwSgZcuWDUwFkABy5MiRNiF/3759H00Gh4I8kkRCduzYkYK7nQY3btx4nz1lJLERP7EisKamppXLt82ePft1ykV79uyZxzyZysfH5wdyNsqme/fuTcAQ5QOGSPicjYWrRyDISTpF4pUrV+q4aHX58uUv8ff67t273/UERkFOEQL1kydPlvIJllMXFhZmQ3OjgJwlP4pAjOvI1kZzc3Mcn2stGhsbew03jeatXLnysTsgLCgoKEEIRToXuUCBhrbyZzt2pGZlZX1DPLTztLS0v3Jzc28hsQ1izIAZzKqqqk84vzf9bNq0KZFAIX/583RhlY2UlJRAl2DmzZtXJMAkJib+Ib36Z8WKFV/LC8DmSUePHk2W58PxXz579mwkk7I3CmgXZD0SPLKZt2/fnsjcUJVQ/apVq/rFIFT6M42RiaDqXD4sUju9ny2NWT6Gal7JTa4fO3ZM5BaV6psAc+DAgVyXSID6bSbZPzs7+zmhiZycnC/XrVs3gMjqP3PmDIU+o53D0XvJXGFhYe1CTnFx8S34zN+bN2/uLysru8SH7QiODNnPSktLX2Ru6C0m1RPUkSEhyIHPckiAoNDVOL8OoA+dyCRer4iICH+RhcUahw8fzh+nDIeJwmmZYRjqgwcPvODU5D/pEo9lBqi7CI2U9cj5bTdv3lyQl5cXz6QIDA0N9YHJiru6unpN09TkNTHHnBQY649pqj09PUZra+sNsvXq1au1oqIiWsiEYx7ETifkiXv37hXTe+SUEESWARCDfX19dZqmGWIjEmnMcZejyGw2O9AyB0A2sQu0l8rly5ctdeB5Md4xR4KTx9C9s7Pzd9IQmQbktAWlzY5bX/6DBR2RkzS6DESXAhuLJMhgogm8RHBoIfMJQv3CrFmzFF4WJtDg4KAPc0V+fn6UokcLHDklT2IfwzzkxFY4y8nL8YKP/MnFWW0lyogPkuQdLnNcKUGuOugSDKLjC5kZTdbD2traYMaTGPEsXrz4mrumizZA7w8dOnSBi7XmYTNRMOFjmRc8p12CgVN+Kwm17gjJT/lrAmQvKSmZj7FBuXOTtYm7Vl5e/hMWmsFGUoJCmsRGbzvyI/Ledwlm5syZ950soGOcIukEZ/OlH/TK1KRrjrwA8SPns/wBPvMB39iEnig+Pv62SzBA71T13NZ6dHS0KBHeKHKzqNjxU4PVMqBUiPDygfZ8UA6sebgMZ3I3bNjQ4xTIggULgp1NYA7+kJCQ8D2fYsPiNfJC9fX1WYynC0TVY+ahIUOGp/uEE4JCdcMTGDZWbZ+nRWE6b64dPTU1dViAhFmrHSOHOW/AqFiGCxACFb14hU2CyCxtbW0teNTu3r37BE7/GSU1mI2ONxQ5xtDQ0Ame6NwSEifr7e3NdARDSSxVWtClAMrIHR0dAfn5+VbDFBISchrRonR3d9fSe4ArAw+ZziMYir7+/v6ScWMoZBEiLHfu3CkiyqnTsRHfMTIyMkTUsMzMTF08Iwj63M0lR0ckGuiBKD1oFKloN2aOgkdlpt7UPHfunNXFw8sbXdlc9CMkBEnRj/hbWlpeIC3RphjzeGzRkUgtl0A3QGdwyjevjoKB85pXr16tFJujH3xB0GVAlOQQSeSkYszAR4JCNmZqBWfzD2mcHJNOF4jQccdaisaCgoJH8jooCdeXLl06kjIQng387KtIgm1otJ+XdqTDR6jhZujoOinZkSMnJyd3M4kAYljwHz9+/AZpjg78BIgAovaZqPqR8jr0g46yHE19DmtoaAhiLj7oxMTEdNB5GyVAFD9v2DeA2kwCA01Qh08ZWUGIh4riCg2K5GfHdxhf1DP6XqNVV1c3sYlkKaGysnIpc0MqfMcfTOJ8I1oGG3rbdxh3Ujgy+QvVn2rhTzi4ZbGxs7S1UWzIlLXxLCQAyD2wJWzhwoWDtNstW7ZYhRTPv8IUGhbt5HyyplUnciaQJ5SiLRyWxkgjKnwnnjq19vb2NGs1VV0yf/58FX4Ryzcht4G6EznTSzDjHTINnPs1WhzfXurZf/SF0xOp9PWTIoSAoKObsk9MlSgFUAIzGxsbrfLA/keyTHLx4sVmNg30L1J8ks54g+VHAAAAAElFTkSuQmCC",
  H0 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA5vSURBVHgBtVkJdBRFGv66p2cmyeTgCEkMuYCQQEgAMSiLYECEyIq4iPg8V1wDJByyK9d7rsrxwGORBQGBcC6yIG855PBa5PEIR+SQDWcMV4BAgEAmk/uanq79q7pnMgm3R73X09PdVV1fffXVX///N3B/RaJDvsMz2XjuXRT+M23atODKysp/McYu0eGgI+/8+fN0e5qPUc+E36GIl37++ef+1NlHVVVVORxAbW1tTmFh4YJZs2aFGvXM3vXtdnsq1WMVFRUaAWQZGRlsxYoVzF3oeQ80DPg3K4I5h8PRhXdSX1/PNm7cyBYsWMA2bNjAqqurRefE4utGfc6sfPLkSVH/0KFDTrpm3ofJZGLHjh1z8ud79+7tgltn51cVed26daH85efOnVPNZnOjzvmxbds20Tmx/ay7c7q8Ulpa6nLXSUpPZK+eeI1Fp0Z72pWUlGhOp/MkbiXo1w2Apv5bDsgNtt3AcPbCNyms85vtPJ3TYFxco7z+wYMHn+T1Bw8erPFnkX0j2Ez2IcuoHk/nuSyyfxvRhqTE2zCS2Kby8vItP/30UwZJRzG6NeOXFnpn2ZYtW0QnQTE2toCNZ+86X2efsXdYl5Fx4v7QoUM13vnEiRNtdXV152/cuOFhN6NwLBtZ8TZLK/srm8BmsU7p3cT9lStXMheVAwcOsNzcXI+2r1+//uzdQN9V8MOGDbPQyffy5cviOjghCGWoRY2q4YrqQNtBUeJ+UVGRmMbZs2dPtlgsbdPT08X9mEFtEBQeApdLhkuTUVej4eflR8WznJwc+Pn5yT169EBCQgKCgoKwf/9+LTQ0dBvJKY2qcP1LDwSYFpPQlKZpemWrCS56B2MyZNmMquJ6cT8wMJCfVKr3wc2bN7XNmzeL9z61eDCKK8uovgL/oFbYO+2/0GiwilkBLVzQbKDtK48g5A9tQLJAr1695OzsbJXALxs9erQ/HpTh4OBgserJOohrs78FGjXRGLdcCurLXeK+1WrlJ0WWZRC74p3Rz7RFs4gwqKrOrloj4djs/ZBMEr1DJ2Dg7vFIXfsOhmb/A8kLXhL3SPtCx2PGjBkJXVb3D5hGzBtLNTU1BmAzVDKzHDSTFDhr9I59fX3FmbQLYlf8f3Lx87CXE7s0MFuzUOyb9i1fEOBYNaeG9iN6IiIlGTeuF+LatYuIfS1VtKNFztcNWrdu3QoPyjCZHQHYzbAl0EqSILDEMKM1UV+lM0wWRJzd2o0aGIvmka11dkm/zmrgxKd7IcmkMDp8QwLQZ+kY2K9dh0YDt4VE4fjcbaJtZGQkJEkCbVJnbodJuRtg0qbYtdwMK74WuJguCSYR29U64ICAANAmgq+++kpc9108DMWlJYJdv+atsH/yJp1dE7VTXRiwewpKy0uhyRZIJKfy/JvInaG3Xbt2LT+VPPLII6uaEKu5/9yxlJWViQHxaeLF5GMmwFwSjRnu3r07pk6dqjM0sD2CosM9lsFZBZyasxuyIguwHSf0R1CHWNRXq6KOrVkMfujzvmg7/M3h6Natm/hPFu8C9Zt75syZyQZYjlW+K2BaRIJhtyQki1mA1TRFnJ3UKS+nTp3CwoULxf+URS/BTuxqjLMbhgNTdeYYdekX0Rw9Ph0Nx9UiGgxJ4aEYZI+Zh9qrDjRr1gyrVq4SluPLL79s8fHHH8fs3LmzQ/v27T8hTZfPnz9fWI27SoK0JMRJ5k2/tpp1SYiFZ/FIguyvWCgRT8chMCYC9uIbBJDYJcvw89xdkC00wHoVA7JmwFFykxwKC2Q/G4pPnEf+ou/FOy5dugTaoPDiiy/yteOBQIuP69k2bty4orCwMP87MSzsL+my3JthLgmVS4LpDKu1WqNGvRa/ihKHod2W4Tj0/gZxn4PtNO15+EaFw1nL4HLK8AlojazefxfPN23aBGIUQ4YMEWDDhvVD1y2z4dcuAuSjoH1cHMfp07t37w9vxzCXgfbFF1/4vfDCC5/xG6qqT72kEMOaSV90nOE6HTBnN3xAPIJiomG/USQ2Fm4Z8ubtJMtAOo0JRrepo1B85QK1MyEgMhb7hr0PZ3kVaGfDzJkzxc7H6ybvXIjglL6oLi1C77xs7ArrgssFBcjKymIpKSkvKbcB6yJ72rVVq1Y5fLTcGyPHREhDtupmjWvYRSyq1U6uG2EBema+gRK73WCXtDthtT4Y2iX7ZX2CkpuFYLIVJv8AFGYdxtWN+yCbTSgi201bO/xiwtAzZzPZeRdKL+ZTOwmWFr7woQXstDvIVl/js+6rNJGB6+zZs90I7BFana7OnTubaBE0OCFmi2DXRbA4w0z4Y5zdjmgW0wb2oqt8GlDjqMXZ+TtEk6RP/wylVUvU3rSLDcdqDcaB/i/Rjid72rcePghdVs1BWUE+bd00vWS//dp1woXFS1Dxv1PiPYMGDeK1cxsB5lNL5cjFixdd8fHxwkJ0HJmMa/sKUJp7Q1gJvro1quYoLkG/78bidGY24sb1QzFtAozsqjkwCHlzvhEvDEyIROKENBQXnKcBygiISkBWnxG006li+pnmQtftcxA6cCAc585Se7MYlH9cZ+SOHI/ry9aL96xfv1719/dXduzYke4NWCPXbhqtRPTt21eAbftiIl7NfA8fRQ3XK3B2xaJjYrfTnBLixw9EXUUN7Vhmod2akmq0GfsM2WgV7f42BParBWIgJvLGzi3fgJIs3VuzhDTHH0gCsFlQduGiACtZ/eATHI2DnVNQdSJP1COQav/+/RWKeqakpqbmud03sZPwKIjCGtNjjz0mKz4K0mvmop4E8N0zmSjccRpDzk2FEuRHqxzGwjN2PcPUMWMX1JgEa4uWJI0qEIliofnRQvs+sDfUimqE/KkPum1ehvLCi2RByBWiyTaHkFZpsEeSnoSrsgo2m00EBkSgQmZ1KO2m3Ekxe/xN0m5GbGzsItItTpw4gYen9kPye4NRVuyALYz8kFoF1fXVwpQJ54cD1LyBGv899/U6mmbUJW1rThfKjl9AyOBUVOYX6BIgsJbwaDiyspH7R30mE5OStKM5ORLFfyoRGE8EXoC+Z6iSF7uOvLy8wI4dO8p84b9VOQ8VVRWiI2Y4PByUNwit0X032+77smcWPG1MNO1mK23XZNclfk+CQsyW7vkRPz/7FwE2LS1NXbZsGQeXv3Tp0g6jRo1yuQ0CDNTa0aNHn6dzs7fS0kSj+PSeZKZ9oVXV6p6ZZ8qbgHMDFqauCTjIXgMynhE/fMEJEug9vI+6IocHLO2YTgqzzLRRbSQfe5hhZrkl0LxNGTf8+VeuXIkm107sfK8U/ZPiE5UWUgMgz/Q3AmTyGhCvY2qQiyETUZ953XOzT3z5xibgUGgHOIvtwmxt375dJodnMfnXo90SQJOiZGZm8sCsDY1OjCLi2STyV1uhlgy6h517TbnBfIO23cAN0LfMigRzeBTOT3hPgOXxHIHl3ecZYLntd+I2RenSpcur/M+aNWsEux0npZJbSb4qDVDv2JsZU6NFdlsmG/1vAN5QTxbalSpVXJ+XKUDs27eP69M0ffr0hw0Z3BasAEwrsA/fGsnOQbFZEdK9MypL9dDmtrptAq5pnQZWTU3aNDwzPxSFSxPfFQCSk5ORmJhoIndgFOUlanGPRArXSeTp06fFhS2qJSQfG4GoaqK7pqbK1GRRNWX7Vla9r/n77Gv/I/rk+Qk6VZETtNRg13UvwM2Li4vFhSnQTw8yuft4u6n16LYxOLdMvDcQt4zQRMew+qJs126yQFXgu2pSUpJEjs08A89dwboB19OuIi60OrIM4E66YmjNbW8bg/BouwkY74ExeC82ftbzGebgcJSs08Mpcl/FefXq1asMKbB7AeYOz17y9nvFxMRACfTFc/atqLh+zdCwfGcNG6auYQPxAtjkmnmZMkt0O5yMiISr1MF9YNa1a9ebFNmE3i9gmXJb30dHR4O8IajlNbi6N4cMuk2wLPxeIQ9+NhuRhqI7QIJlr/+GBdGvFU9UIu5rOstySBiKKW7jYLkcCKxEcvy3geWeYAXgw4cPc7GDEs7CDp8ctwS24HiKMiQBSDNssWaERi4PGK9nhmzcdtotg4bnim7KLH64Nmmi6HjJkiVCrxRwTscDJLWFCSEn/QhNy8PkEUk8ao2dMQJx776NsovnaCVa7stUNVxLxu6HhueU6fFNTMTZxx9H9Y/ZIH+FZywlMqWLWrRoMeZ+5SAY5sfXX3/9HGVvJJ6I4zfPfbAMZ+Ysh3+7rnCJ3JjBqodpuYFVTfZyNWWv58YsOBl8KDt5OWOMAMsL5ZD5bFYbYE33C9YNGJTfvULZnZcpiaFQqK2DnvIZDj/9OnzC46BQjObiEmFN5GDomBmmkDGlgWmSAD9bkzrhctoolGQuEh0eP35cpZk0ETmdDWY1PEBx7ypi7ybQb/n4+Cw/cuSISjuQiEZ44Bn94WQ8RHkzFy3zOoqKecqUeZwcqZEJ43EaI9dRoRyZVlmNC089ibpTJ9zMqo8++qhCGaUBlDj5AV4pqF9SRLBJjnyK8QFG6z9ggCeTbvL3YyHpb7CEH3ew7s4y1q22jCUVFbDEgvMs4VI+S7h8mXUqpXuqxuLOXmAt0scyWheiLTGqUX5BfAshr7Cf0Z+C36CIWG7r1q0B9O5jvAMePVM+wAOcH+aHwljggH4sfOYMFrlyBYtcs4a1XpzJWowYxawdE4hzyVM3PSPDaXwNqKOQJ/a3BOsukhv4nj17HuUfA3lv5Jwwym+xuLg4Rjm3W74meR+U9WSTJk1yUepffPsgy7Pd+ODiefevAXenIjJAHAB9EIyniHUK5bl4FODPc21klkDxFk9w8Ewj/17BvS707NlTbApUVPpCtGPXrl1jKavujsncM/W7APau41nN5PC369Chw8tPPPFEMl1G09ESuv55ErkgPz//FIXmq8llPe7lLj6wNbhT+T+sG8c4tNbHTwAAAABJRU5ErkJggg==",
  Y0 = "/assets/video-loop-DBEXuKQY.mp4",
  Cm = [
    { title: "Home", route: "#home" },
    { title: "Who is Snakiu?", route: "#who-is-Snakiu" },
    { title: "PFP Generator", route: "#pfp-generator" },
    { title: "Gallery", route: "#gallery" },
  ],
  Ml = { contractAddress: "0x44444444" },
  wf = {
    x: "https://x.com/",
    fourmeme: `${`https://four.meme/token/${Ml.contractAddress}`}`,
    dexscreener: `${`https://dexscreener.com/bsc/${Ml.contractAddress}`}`,
  };
function Rm(c) {
  const o = c.trim();
  return o.length <= 10 ? o : `${o.slice(0, 6)}...${o.slice(-4)}`;
}
function w0() {
  return A.jsxs("section", {
    id: "home",
    className: "relative min-h-screen flex flex-col overflow-hidden",
    children: [
      A.jsxs("div", {
        className: "absolute inset-0 -z-10",
        children: [
          A.jsx("video", {
            src: Y0,
            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0,
            preload: "auto",
            controls: !1,
            disablePictureInPicture: !0,
            controlsList:
              "nodownload noplaybackrate nofullscreen noremoteplayback",
            className:
              "h-full w-full object-cover pointer-events-none select-none",
          }),
          A.jsx("div", {
            className: "absolute inset-0 bg-Snakiu-yellow-main/20",
          }),
        ],
      }),
      A.jsx("div", {
        className:
          "pointer-events-none absolute bottom-2 lg:bottom-0 left-0 right-0 h-[6px] bg-Snakiu-black",
      }),
      A.jsx("div", {
        className: "absolute lg:bottom-[0vh] bottom-2 left-0 right-0 z-10",
        children: A.jsx("div", {
          className:
            "mx-auto w-fit rounded-t-2xl bg-Snakiu-black lg:px-5 lg:py-2",
          children: A.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              A.jsx("a", {
                href: wf.x,
                target: "_blank",
                rel: "noreferrer noopener",
                className: "inline-flex",
                children: A.jsx("span", {
                  className:
                    "w-12 h-12 rounded-[12px] bg-Snakiu-yellow-main border-4 border-Snakiu-black inline-flex items-center justify-center",
                  children: A.jsx("img", {
                    src: U0,
                    alt: "X",
                    className: "h-7 w-7",
                  }),
                }),
              }),
              A.jsx("a", {
                href: wf.fourmeme,
                target: "_blank",
                rel: "noreferrer noopener",
                className: "inline-flex",
                children: A.jsx("span", {
                  className:
                    "w-12 h-12 rounded-[12px] bg-Snakiu-yellow-main border-4 border-Snakiu-black inline-flex items-center justify-center",
                  children: A.jsx("img", {
                    src: H0,
                    alt: "Fourmeme",
                    className: "h-7 w-7",
                  }),
                }),
              }),
              A.jsx("a", {
                href: wf.dexscreener,
                target: "_blank",
                rel: "noreferrer noopener",
                className: "inline-flex",
                children: A.jsx("span", {
                  className:
                    "w-12 h-12 rounded-[12px] bg-Snakiu-yellow-main border-4 border-Snakiu-black inline-flex items-center justify-center",
                  children: A.jsx("img", {
                    src: B0,
                    alt: "DexScreener",
                    className: "h-7 w-7",
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function oi({ text: c, speedSeconds: o = 20 }) {
  const r = { "--duration": `${o}s` },
    f = `${c}   •   ${c}   •   ${c}   •   ${c}   •   ${c}`;
  return A.jsxs("div", {
    className: "w-full",
    children: [
      A.jsx("div", {
        className: "overflow-hidden bg-Snakiu-black text-Snakiu-yellow-main",
        children: A.jsx("div", {
          className: "whitespace-nowrap",
          style: r,
          children: A.jsx("span", {
            className:
              "marquee-track px-4 py-2 font-manatee-solid lg:text-xl tracking-wide",
            children: f,
          }),
        }),
      }),
      A.jsx("div", { className: "h-[4px] bg-Snakiu-black" }),
    ],
  });
}
const q0 = "/assets/yzao-3d-sketch-BsOfCRIJ.png",
  Nl = _.createContext();
function Z0({ children: c }) {
  const [o, r] = _.useState("en"),
    f = _.useMemo(
      () => ({
        en: {
          "nav.home": "Home",
          "nav.who": "Who is Snakiu?",
          "nav.gallery": "Gallery",
          "nav.pfp": "PFP Generator",
          "button.buy": "BUY $Snakiu",
          "button.copy.copied": "Copied!",
          "footer.text":
            "©️ 2025 Snakiu — The snake moves in silence. Beware of fakes.",
          "gallery.title": "Gallery",
          "pfp.title": "PFP Generator",
          "who.p1":
            "Snakiu is a serpent of fortune, born under the sign of the Wood Snake — 木蛇灵 (mù shé líng). It crawls between memes and myths, whispering secrets of 运气 (yùnqì – luck) and 混沌 (hùndùn – chaos) into every wallet it touches.",
          "who.p2":
            "Snakiu isn't just a token, it's a 预言 (yùyán – prophecy) written in the soil of BSC. Once you hear the hiss 嘶 — 蛇已醒来 (sī — the serpent has awakened).",
          "faq.title": "Frequently Asked Question",
          "faq.q1": "How do I buy $Snakiu?",
          "faq.a1":
            "Go to FourMemes or PancakeSwap. Connect your wallet (MetaMask or Trust Wallet), switch to BNB Chain, and swap BNB → $Snakiu. Always double-check the official contract address before trading.",
          "faq.q2": "What do I need before buying?",
          "faq.a2":
            "You'll need BNB for both the swap and gas fees. Make sure your wallet is set to BSC Mainnet and you have enough balance to cover the transaction.",
          "faq.q3": "Where can I track $Snakiu price and chart?",
          "faq.a3":
            "You can follow $Snakiu's live chart and market activity directly on DexScreener or FourMemes. Bookmark the official links to avoid fake listings.",
          "faq.q4": "Can I trade $Snakiu anywhere else?",
          "faq.a4":
            "For now, $Snakiu trades exclusively on PancakeSwap and FourMemes. More listings may slither in as the cult grows.",
          "pfp.note":
            "The PFP generator will continue to evolve as the project grows — new assets and traits will be added over time to reflect Snakiu’s journey.",
          "lang.switch": "中文",
        },
        zh: {
          "nav.home": "首页",
          "nav.who": "谁是Snakiu？",
          "nav.gallery": "画廊",
          "nav.pfp": "头像生成器",
          "button.buy": "购买 $Snakiu",
          "button.copy.copied": "已复制!",
          "footer.text": "©️ 2025 Snakiu — 蛇行无声，谨防假冒。",
          "gallery.title": "画廊",
          "pfp.title": "头像生成器",
          "who.p1":
            "Snakiu 是一条象征财富的灵蛇，出生于“土蛇之灵”。它穿梭于梗与神话之间，把关于“运气”和“混沌”的低语注入每一个被它触及的钱包。",
          "who.p2":
            "Snakiu 不只是代币，它是一则写在 BSC 土壤中的预言。当你听到嘶嘶声——蛇已苏醒。",
          "faq.title": "常见问题",
          "faq.q1": "如何购买 $Snakiu？",
          "faq.a1":
            "前往 FourMemes 或 PancakeSwap。连接钱包（MetaMask/Trust Wallet），切换至 BNB 链，用 BNB 交换 $Snakiu。交易前务必核对官方合约地址。",
          "faq.q2": "购买前需要准备什么？",
          "faq.a2":
            "你需要 BNB 作为兑换与手续费。请确保钱包网络为 BSC 主网且余额充足以支付交易费用。",
          "faq.q3": "在哪里查看 $Snakiu 价格和图表？",
          "faq.a3":
            "你可在 DexScreener 或 FourMemes 实时关注 $Snakiu 的价格与市场动向。收藏官方链接以避免假页面。",
          "faq.q4": "还能在哪里交易 $Snakiu？",
          "faq.a4":
            "目前仅在 PancakeSwap 与 FourMemes 交易。随着社群壮大，更多上架将逐步到来。",
          "pfp.note":
            "Snakiu 头像生成器会持续进化——将不断加入新素材与特征，记录 Snakiu 的旅程。",
          "lang.switch": "EN",
        },
      }),
      []
    );
  function d(v) {
    return (f[o] || f.en)[v] || v;
  }
  return A.jsx(Nl.Provider, {
    value: { language: o, setLanguage: r, t: d },
    children: c,
  });
}
function L0() {
  const { t: c } = _.useContext(Nl);
  return A.jsxs("section", {
    id: "who-is-Snakiu",
    className: "relative w-full",
    children: [
      A.jsxs("div", {
        className: "w-full lg:mt-2",
        children: [
          A.jsx(oi, {
            text: "BUY $Snakiu or 事后后悔 /// No luck? 没关系, Snakiu 你! /// Your wallet say 谢谢 after Snakiu /// Follow the luck, 跟着 Snakiu! /// Snakiu make your bag 飞起来!",
            speedSeconds: 22,
          }),
          A.jsx("div", { className: "h-2" }),
          A.jsx("div", { className: "w-full h-[6px] bg-Snakiu-black" }),
        ],
      }),
      A.jsxs("div", {
        className: "mx-auto max-w-[1000px] px-6 py-12 text-center lg:space-y-4",
        children: [
          A.jsx("div", {
            id: "3d-sketch",
            className: "lg:pb-5 pb-5",
            children: A.jsx("img", { src: q0 }),
          }),
          A.jsx("p", {
            className:
              "text-Snakiu-black font-medium font-helvetica lg:text-4xl sm:text-[18px] lg:leading-10 tracking-tighter",
            children: c("who.p1"),
          }),
          A.jsx("p", {
            className:
              "mt-6 text-Snakiu-black font-helvetica font-medium lg:text-4xl sm:text-[18px] lg:leading-10 tracking-tighter",
            children: c("who.p2"),
          }),
        ],
      }),
      A.jsx("div", {
        className:
          "pointer-events-none absolute bottom-0 left-0 right-0 h-[6px] bg-Snakiu-black",
      }),
    ],
  });
}
const G0 = "/assets/art-1-Bo_Kboo_.png",
  X0 = "/assets/art-2-D8heSvY6.png",
  Q0 = "/assets/art-3-tVHqhWTX.png",
  V0 = "/assets/art-4-C-gkMvnv.png",
  K0 = "/assets/art-5-C38xzMJk.png",
  J0 = "/assets/art-6-Mb_6bWlM.png",
  k0 = "/assets/art-7-cO6UDqyq.png",
  F0 = "/assets/art-8-CLsWzeyF.png",
  W0 = "/assets/art-9-CyAHPRHs.png",
  $0 = "/assets/art-10-CCgtBRQV.png",
  I0 = "/assets/art-11-Bmejy_rX.png",
  P0 = "/assets/art-12-DcvMAaov.png",
  tg = "/assets/art-13-CU7349oc.png";
function qf({ images: c, direction: o = "left", speed: r = 40 }) {
  const f = o === "left" ? "animate-marquee-left" : "animate-marquee-right",
    d = 30,
    v = (() => {
      const b = c.slice(),
        O = [];
      for (; O.length < d; ) O.push(...b);
      return O;
    })();
  return A.jsx("div", {
    className: "w-full overflow-hidden py-1 sm:py-2",
    children: A.jsx("div", {
      className: `flex gap-3 sm:gap-4 will-change-transform ${f}`,
      style: { "--marquee-speed": `${r}s` },
      children: v.map((b, O) =>
        A.jsx(
          "div",
          {
            className: "flex-shrink-0",
            children: A.jsx("img", {
              src: b,
              alt: `Gallery art ${(O % c.length) + 1}`,
              className:
                "h-24 sm:h-32 md:h-48 lg:h-80 w-auto object-cover rounded-lg",
            }),
          },
          `${b}-${O}`
        )
      ),
    }),
  });
}
function eg() {
  const { t: c } = _.useContext(Nl),
    o = [G0, X0, Q0, V0, K0],
    r = [J0, k0, F0, W0],
    f = [$0, I0, P0, tg];
  return A.jsxs("section", {
    id: "gallery",
    className: "relative w-full lg:space-y-10 pb-10 lg:pb-0",
    children: [
      A.jsxs("div", {
        className: "w-full mt-2",
        children: [
          A.jsx(oi, {
            text: "BUY $Snakiu or 事后后悔 /// No luck? 没关系, Snakiu 你! /// Your wallet say 谢谢 after Snakiu /// Follow the luck, 跟着 Snakiu! /// Snakiu make your bag 飞起来!",
            speedSeconds: 22,
          }),
          A.jsx("div", { className: "h-2" }),
          A.jsx("div", { className: "w-full h-[6px] bg-Snakiu-black" }),
        ],
      }),
      A.jsx("h2", {
        className:
          "font-manatee-solid text-Snakiu-black text-[48px] sm:text-[64px] lg:text-[80px] leading-none text-center my-8",
        children: c("gallery.title"),
      }),
      A.jsxs("div", {
        className: "space-y-1",
        children: [
          A.jsx(qf, { images: o, direction: "left", speed: 50 }),
          A.jsx(qf, { images: r, direction: "right", speed: 45 }),
          A.jsx(qf, { images: f, direction: "left", speed: 50 }),
        ],
      }),
      A.jsx("div", {
        className:
          "pointer-events-none absolute lg:bottom-[-3vh] bottom-2 left-0 right-0 h-[6px] bg-Snakiu-black",
      }),
    ],
  });
}
const lg = [
  {
    id: 1,
    question: "How do I buy $Snakiu?",
    answer:
      "Go to FourMemes or PancakeSwap. Connect your wallet (MetaMask or Trust Wallet), switch to BNB Chain, and swap BNB → $Snakiu. Always double-check the official contract address before trading.",
  },
  {
    id: 2,
    question: "What do I need before buying?",
    answer:
      "You'll need BNB for both the swap and gas fees. Make sure your wallet is set to BSC Mainnet and you have enough balance to cover the transaction.",
  },
  {
    id: 3,
    question: "Where can I track $Snakiu price and chart?",
    answer:
      "You can follow $Snakiu's live chart and market activity directly on DexScreener or FourMeme. Bookmark the official links to avoid fake listings.",
  },
  {
    id: 4,
    question: "Can I trade $Snakiu anywhere else?",
    answer:
      "For now, $Snakiu trades exclusively on PancakeSwap and FourMeme. More listings may slither in as the cult grows.",
  },
];
function ag() {
  const { t: c, language: o } = _.useContext(Nl),
    r =
      o === "zh"
        ? [
            { id: 1, question: c("faq.q1"), answer: c("faq.a1") },
            { id: 2, question: c("faq.q2"), answer: c("faq.a2") },
            { id: 3, question: c("faq.q3"), answer: c("faq.a3") },
            { id: 4, question: c("faq.q4"), answer: c("faq.a4") },
          ]
        : lg,
    [f, d] = _.useState(null),
    v = (b) => {
      d(f === b ? null : b);
    };
  return A.jsxs("section", {
    id: "faq",
    className: "relative w-full lg:pb-10 pb-5",
    children: [
      A.jsxs("div", {
        className: "w-full",
        children: [
          A.jsx(oi, {
            text: "BUY $Snakiu or 事后后悔 /// No luck? 没关系, Snakiu 你! /// Your wallet say 谢谢 after Snakiu /// Follow the luck, 跟着 Snakiu! /// Snakiu make your bag 飞起来!",
            speedSeconds: 22,
          }),
          A.jsx("div", { className: "h-2" }),
          A.jsx("div", { className: "w-full h-[6px] bg-Snakiu-black" }),
        ],
      }),
      A.jsx("h2", {
        className:
          "font-manatee-solid text-Snakiu-black text-[30px] sm:text-[64px] lg:text-[80px] leading-none text-center my-8 mx-20 lg:mx-0",
        children: c("faq.title"),
      }),
      A.jsx("div", {
        className: "max-w-4xl mx-auto px-4 space-y-3",
        children: r.map((b) =>
          A.jsxs(
            "div",
            {
              className: "w-full",
              children: [
                A.jsx("button", {
                  onClick: () => v(b.id),
                  className: `w-full bg-Snakiu-black text-Snakiu-yellow-main font-helvetica font-bold text-lg sm:text-xl px-6 py-4 rounded-lg transition-all duration-300 hover:bg-opacity-90 cursor-pointer ${
                    f === b.id ? "rounded-b-none" : ""
                  }`,
                  children: b.question,
                }),
                f === b.id &&
                  A.jsx("div", {
                    className:
                      "bg-Snakiu-answer text-white px-6 py-4 rounded-b-lg border-t-0 animate-fadeIn",
                    children: A.jsx("p", {
                      className:
                        "font-helvetica text-base sm:text-lg leading-relaxed",
                      children: b.answer,
                    }),
                  }),
              ],
            },
            b.id
          )
        ),
      }),
    ],
  });
}
const ng = "/assets/bg-1-BrN-wUtM.png",
  ug = "/assets/bg-2-CaDrPphv.png",
  ig = "/assets/bg-3-CZFdJDkb.png",
  cg = "/assets/bg-4-CC739fj4.png",
  fg = "/assets/bg-5-D5mmT0uY.png",
  sg = "/assets/bg-6-DAHkB45S.png",
  og = "/assets/body-1-DRj4txzp.png",
  rg = "/assets/body-2-ClMRNlkh.png",
  dg = "/assets/body-3-6Oxt2Rgt.png",
  mg = "/assets/body-4-CZVj4IKI.png",
  hg = "/assets/body-5-CH0-dyzp.png",
  yg = "/assets/body-6-CgP8fUpK.png",
  vg = "/assets/body-7-CLOEqfaO.png",
  gg = "/assets/head-1-CixMLlwY.png",
  pg = "/assets/head-2-DqaDAgR9.png",
  bg = "/assets/head-3-DGEt6pLJ.png",
  Sg = "/assets/head-4-D0UTwA6o.png",
  Ag = "/assets/head-5-CmSnQ7mD.png",
  xg = "/assets/head-6-Cb1s9DY1.png",
  Eg = "/assets/head-7-TwaF9M0A.png",
  zg = "/assets/head-8-GgZG8y97.png",
  Tg = "/assets/eye-1-ZZxTDUhP.png",
  _g = "/assets/eye-2-B6h-h-1h.png",
  Og = "/assets/eye-3-BH2wZfZt.png",
  Mg = "/assets/eye-4-CUv62Pz1.png",
  Ng = "/assets/eye-5-BlUbpXjd.png",
  Cg = "/assets/nose-1-BdOxpW6Q.png",
  Rg = "/assets/nose-2-OfPyVtRS.png",
  Dg = "/assets/nose-3-ZNHqb1lj.png",
  jg = "/assets/mouth-1-C_grOJXZ.png",
  Ug = "/assets/mouth-2-BenJmgZF.png",
  Bg = "/assets/mouth-3-B0OL5kFp.png",
  Hg = "/assets/mouth-4-BJTyoYrf.png",
  Yg = "/assets/mouth-5-DLDpCaJm.png",
  wg = "/assets/mouth-6-CNj_3cyN.png",
  qg = "/assets/accs-1-Cnjg2Qn3.png",
  Zg = "/assets/accs-2-CYa_-bqw.png",
  Lg = "/assets/accs-3-CJIZaZcw.png",
  Gg = "/assets/accs-4-De88oj66.png";
function Xg() {
  const c = _.useMemo(() => Object.values([ng, ug, ig, cg, fg, sg]), []),
    o = _.useMemo(() => Object.values([og, rg, dg, mg, hg, yg, vg]), []),
    r = _.useMemo(() => Object.values([gg, pg, bg, Sg, Ag, xg, Eg, zg]), []),
    f = _.useMemo(() => Object.values([Tg, _g, Og, Mg, Ng]), []),
    d = _.useMemo(() => Object.values([Cg, Rg, Dg]), []),
    v = _.useMemo(() => Object.values([jg, Ug, Bg, Hg, Yg, wg]), []),
    b = _.useMemo(() => Object.values([qg, Zg, Lg, Gg]), []),
    O = _.useCallback((S) => S.slice().sort(), []);
  return {
    Background: O(c),
    Body: O(o),
    Head: O(r),
    Eyes: O(f),
    Nose: O(d),
    Mouth: O(v),
    Accessories: O(b),
  };
}
const Zf = [
  "Background",
  "Body",
  "Head",
  "Eyes",
  "Nose",
  "Mouth",
  "Accessories",
];
function Qg() {
  const { t: c } = _.useContext(Nl),
    o = Xg(),
    r = _.useRef(null),
    [f, d] = _.useState(() => ({
      Background: 0,
      Body: 0,
      Head: 0,
      Eyes: 0,
      Nose: 0,
      Mouth: 0,
      Accessories: 0,
    })),
    [v, b] = _.useState("Background"),
    O = _.useCallback(async () => {
      const T = r.current;
      if (!T) return;
      const B = T.getContext("2d"),
        Y = 768;
      (T.width = Y), (T.height = Y), B.clearRect(0, 0, Y, Y);
      for (const H of Zf) {
        const Z = o[H];
        if (!Z || Z.length === 0) continue;
        const K = Math.min(f[H] ?? 0, Z.length - 1),
          X = Z[K];
        await new Promise((Q) => {
          const W = new Image();
          (W.onload = () => {
            B.drawImage(W, 0, 0, Y, Y), Q();
          }),
            (W.src = X);
        });
      }
    }, [f, o]);
  _.useEffect(() => {
    O();
  }, [O]);
  function S(T, B) {
    d((Y) => ({ ...Y, [T]: B }));
  }
  function h() {
    const T = {};
    for (const B of Zf) {
      const Y = o[B] || [];
      T[B] = Y.length ? Math.floor(Math.random() * Y.length) : 0;
    }
    d(T);
  }
  function N() {
    const T = r.current;
    if (!T) return;
    const B = document.createElement("a");
    (B.download = "Snakiu-pfp.png"),
      (B.href = T.toDataURL("image/png")),
      B.click();
  }
  return A.jsxs("section", {
    id: "pfp-generator",
    className: "mx-auto pb-12 sm:pb-16 relative",
    children: [
      A.jsxs("div", {
        className: "w-full mt-2",
        children: [
          A.jsx(oi, {
            text: "BUY $Snakiu or 事后后悔 /// No luck? 没关系, Snakiu 你! /// Your wallet say 谢谢 after Snakiu /// Follow the luck, 跟着 Snakiu! /// Snakiu make your bag 飞起来!",
            speedSeconds: 22,
          }),
          A.jsx("div", { className: "h-2" }),
          A.jsx("div", { className: "w-full h-[6px] bg-Snakiu-black" }),
        ],
      }),
      A.jsx("h2", {
        className:
          "font-manatee-solid text-Snakiu-black text-[40px] sm:text-[64px] lg:text-[80px] leading-none text-center my-6",
        children: c("pfp.title"),
      }),
      A.jsx("div", {
        className: "lg:mx-auto lg:w-full lg:max-w-[500px] mx-20",
        children: A.jsx("div", {
          className:
            "relative aspect-square w-full overflow-hidden rounded-xl bg-Snakiu-yellow-main lg:border-4 border-2 border-Snakiu-black",
          children: A.jsx("canvas", {
            ref: r,
            className: "absolute inset-0 h-full w-full",
          }),
        }),
      }),
      A.jsxs("div", {
        className:
          "mt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mx-10 lg:mx-0",
        children: [
          A.jsx("button", {
            onClick: h,
            className:
              "rounded-[18px] bg-Snakiu-black px-5 py-3 lg:py-4 lg:px-10 font-manatee-solid text-Snakiu-yellow-main text-2xl sm:text-3xl cursor-pointer",
            children: c("Randomize") || "Randomize",
          }),
          A.jsx("button", {
            onClick: N,
            className:
              "rounded-[18px] bg-Snakiu-black px-5 py-3 lg:py-4 lg:px-10 font-manatee-solid text-Snakiu-yellow-main text-2xl sm:text-3xl cursor-pointer",
            children: c("Download") || "Download",
          }),
        ],
      }),
      A.jsx("div", {
        className: "mt-6 space-y-5 lg:max-w-[900px] lg:mx-auto mx-5",
        children: Zf.map((T) => {
          const B = o[T] || [];
          if (!B.length) return null;
          const Y = f[T] ?? 0;
          return A.jsxs(
            "div",
            {
              className: "rounded-[12px] bg-[#6b5a3e] lg:mt-2 overflow-hidden",
              children: [
                A.jsxs("button", {
                  type: "button",
                  onClick: () => b((H) => (H === T ? null : T)),
                  "aria-expanded": v === T,
                  className:
                    "inline-flex w-full items-center justify-between bg-Snakiu-black px-4 py-3 sm:px-5 sm:py-4 lg:p-5 cursor-pointer",
                  children: [
                    A.jsx("h3", {
                      className:
                        "font-manatee-solid text-Snakiu-yellow-main text-[22px] sm:text-[26px] lg:text-[28px] leading-none",
                      children: T,
                    }),
                    A.jsx("span", {
                      className: `ml-3 h-3 w-3 border-b-2 border-r-2 border-Snakiu-yellow-main transition-transform ${
                        v === T ? "rotate-45" : "-rotate-45"
                      }`,
                    }),
                  ],
                }),
                v === T &&
                  A.jsx("div", {
                    className:
                      "flex flex-wrap gap-2 sm:gap-3 p-3 sm:p-4 lg:p-5",
                    children: B.map((H, Z) =>
                      A.jsx(
                        "button",
                        {
                          onClick: () => S(T, Z),
                          className: `relative h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-md border-2 ${
                            Z === Y
                              ? "border-Snakiu-yellow-main"
                              : "border-Snakiu-black/20"
                          }`,
                          title: `${T} ${Z + 1}`,
                          children: A.jsx("img", {
                            src: H,
                            alt: `${T} ${Z + 1}`,
                            className: "h-full w-full object-contain",
                          }),
                        },
                        `${T}-${Z}`
                      )
                    ),
                  }),
              ],
            },
            T
          );
        }),
      }),
      A.jsx("p", {
        className: "mt-10 text-center font-helvetica text-Snakiu-black/80 italic",
        children: c("pfp.note"),
      }),
      A.jsx("div", {
        className:
          "pointer-events-none absolute lg:bottom-[0vh] bottom-0 left-0 right-0 h-[6px] bg-Snakiu-black z-10",
      }),
    ],
  });
}
function Vg() {
  const { t: c } = _.useContext(Nl);
  return A.jsx("footer", {
    className: "w-full py-6",
    children: A.jsx("div", {
      className: "mx-auto max-w-[1200px] px-4 text-center",
      children: A.jsx("p", {
        className: "font-helvetica text-Snakiu-black text-sm sm:text-base",
        children: c("footer.text"),
      }),
    }),
  });
}
function Bn() {
  return A.jsxs(A.Fragment, {
    children: [
      A.jsx(w0, {}),
      A.jsx(L0, {}),
      A.jsx(Qg, {}),
      A.jsx(eg, {}),
      A.jsx(ag, {}),
      A.jsx(Vg, {}),
    ],
  });
}
const Xf = "/assets/Snakiu-logo-COjelWJY.png";
function Kg() {
  const { language: c, setLanguage: o } = _.useContext(Nl),
    [r, f] = _.useState(!1),
    [d, v] = _.useState("#home"),
    [b, O] = _.useState(!1),
    S = (B) => d === B,
    h = Rm(Ml.contractAddress),
    [N, T] = _.useState(!1);
  return (
    _.useEffect(() => {
      const B = (Y) => {
        (Y.target.closest && Y.target.closest("#mobile-lang-dropdown")) ||
          O(!1);
      };
      return (
        document.addEventListener("click", B),
        () => document.removeEventListener("click", B)
      );
    }, []),
    A.jsxs("div", {
      className: "md:hidden",
      children: [
        A.jsxs("div", {
          className:
            "pointer-events-auto flex items-center justify-between rounded-[22px] bg-Snakiu-black py-2 pl-3 pr-2",
          children: [
            A.jsxs("a", {
              href: "#home",
              className: "flex items-center gap-2",
              children: [
                A.jsx("img", {
                  src: Xf,
                  alt: "Snakiu",
                  className: "h-10 w-10 object-contain",
                }),
                A.jsx("span", { className: "sr-only", children: "Home" }),
              ],
            }),
            A.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                A.jsxs("div", {
                  id: "mobile-lang-dropdown",
                  className: "relative",
                  children: [
                    A.jsx("button", {
                      type: "button",
                      onClick: () => O((B) => !B),
                      className:
                        "h-10 px-3 rounded-[12px] bg-Snakiu-yellow-main font-manatee-solid text-Snakiu-black text-[16px]",
                      "aria-haspopup": "listbox",
                      "aria-expanded": b,
                      children: c === "en" ? "EN" : "中文",
                    }),
                    b &&
                      A.jsx("div", {
                        className:
                          "absolute right-0 mt-3 w-28 rounded-[12px] shadow-lg overflow-hidden p-2 bg-Snakiu-black",
                        children: [
                          { code: "en", label: "EN" },
                          { code: "zh", label: "中文" },
                        ].map((B) =>
                          A.jsx(
                            "button",
                            {
                              onClick: () => {
                                o(B.code), O(!1);
                              },
                              className: `w-full text-left px-3 py-2 font-manatee-solid ${
                                c === B.code
                                  ? "bg-Snakiu-yellow-main text-Snakiu-black rounded-lg"
                                  : "text-Snakiu-yellow-main hover:bg-Snakiu-yellow-main/10"
                              }`,
                              children: B.label,
                            },
                            B.code
                          )
                        ),
                      }),
                  ],
                }),
                A.jsxs("button", {
                  "aria-label": r ? "Close menu" : "Open menu",
                  "aria-expanded": r,
                  onClick: () => f((B) => !B),
                  className:
                    "relative h-10 w-10 rounded-[12px] bg-Snakiu-yellow-main",
                  children: [
                    A.jsx("span", {
                      className: `absolute left-1/2 top-1/2 h-[2px] w-6 -translate-x-1/2 -translate-y-1/2 bg-Snakiu-black transition-transform ${
                        r ? "rotate-45" : "-translate-y-[7px]"
                      }`,
                    }),
                    A.jsx("span", {
                      className: `absolute left-1/2 top-1/2 h-[2px] w-6 -translate-x-1/2 -translate-y-1/2 bg-Snakiu-black transition-opacity ${
                        r ? "opacity-0" : "opacity-100"
                      }`,
                    }),
                    A.jsx("span", {
                      className: `absolute left-1/2 top-1/2 h-[2px] w-6 -translate-x-1/2 -translate-y-1/2 bg-Snakiu-black transition-transform ${
                        r ? "-rotate-45" : "translate-y-[7px]"
                      }`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        A.jsxs("div", {
          className: `fixed inset-0 z-10 ${
            r ? "pointer-events-auto" : "pointer-events-none"
          }`,
          children: [
            A.jsx("div", {
              className: `absolute inset-0 transition-opacity duration-300 ${
                r ? "opacity-100" : "opacity-0"
              } bg-Snakiu-yellow-main`,
            }),
            A.jsxs("div", {
              className: `absolute inset-0 flex flex-col items-center justify-between p-6 transition-transform duration-300 ${
                r ? "translate-x-0" : "translate-x-full"
              }`,
              children: [
                A.jsxs("div", {
                  className: "w-full flex items-center justify-between",
                  children: [
                    A.jsx("img", {
                      src: Xf,
                      alt: "Snakiu",
                      className: "h-12 w-12 object-contain",
                    }),
                    A.jsxs("button", {
                      "aria-label": "Close menu",
                      onClick: () => f(!1),
                      className:
                        "h-10 w-10 rounded-[12px] bg-Snakiu-yellow-main flex items-center justify-center",
                      children: [
                        A.jsx("span", {
                          className:
                            "block h-[2px] w-6 bg-Snakiu-black rotate-45",
                        }),
                        A.jsx("span", {
                          className:
                            "absolute block h-[2px] w-6 bg-Snakiu-black -rotate-45",
                        }),
                      ],
                    }),
                  ],
                }),
                A.jsx("div", {
                  className:
                    "flex-1 w-full flex flex-col items-center justify-center gap-6",
                  children: Cm.map((B) =>
                    A.jsx(
                      "a",
                      {
                        href: B.route,
                        className: `text-Snakiu-yellow-main bg-Snakiu-black w-full text-center rounded-[18px] px-6 py-4 font-manatee-solid text-[28px] ${
                          S(B.route) ? "" : "opacity-90 hover:opacity-100"
                        }`,
                        onClick: () => {
                          v(B.route), f(!1);
                        },
                        children: B.title,
                      },
                      B.title
                    )
                  ),
                }),
                A.jsxs("div", {
                  className: "w-full flex flex-col items-stretch gap-3",
                  children: [
                    A.jsx("button", {
                      type: "button",
                      onClick: async () => {
                        const B = Ml.contractAddress.trim();
                        if (B)
                          try {
                            if (navigator?.clipboard?.writeText)
                              await navigator.clipboard.writeText(B);
                            else {
                              const Y = document.createElement("textarea");
                              (Y.value = B),
                                document.body.appendChild(Y),
                                Y.select(),
                                document.execCommand("copy"),
                                document.body.removeChild(Y);
                            }
                            T(!0), setTimeout(() => T(!1), 1200);
                          } catch {}
                      },
                      disabled: !1,
                      className:
                        "rounded-[18px] bg-Snakiu-black text-Snakiu-yellow-main px-6 py-3 text-center ",
                      title: "Copy contract address",
                      children: A.jsx("span", {
                        className:
                          "font-manatee-solid text-Snakiu-yellow-main text-[20px] align-middle",
                        children: N ? "Copied!" : `ca: ${h}`,
                      }),
                    }),
                    A.jsx("a", {
                      href: `https://four.meme/token/${Ml.contractAddress}`,
                      target: "_blank",
                      rel: "noreferrer noopener",
                      "aria-disabled": !1,
                      className:
                        "rounded-[18px] bg-Snakiu-black px-5 py-4 font-manatee-solid text-Snakiu-yellow-main text-[24px] text-center ",
                      onClick: (B) => {
                        f(!1);
                      },
                      children: "BUY $Snakiu",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function Jg() {
  const { language: c, setLanguage: o, t: r } = _.useContext(Nl),
    f = Rm(Ml.contractAddress),
    [d, v] = _.useState(!1),
    [b, O] = _.useState("#home"),
    [S, h] = _.useState(!1),
    N = (H) => b === H,
    T = Ml.contractAddress.trim(),
    B = T ? `https://four.meme/token/${T}` : "#";
  _.useEffect(() => {
    const H = (Z) => {
      (Z.target.closest && Z.target.closest("#nav-lang-dropdown")) || h(!1);
    };
    return (
      document.addEventListener("click", H),
      () => document.removeEventListener("click", H)
    );
  }, []);
  async function Y() {
    const H = Ml.contractAddress.trim();
    if (H)
      try {
        if (navigator?.clipboard?.writeText)
          await navigator.clipboard.writeText(H);
        else {
          const Z = document.createElement("textarea");
          (Z.value = H),
            document.body.appendChild(Z),
            Z.select(),
            document.execCommand("copy"),
            document.body.removeChild(Z);
        }
        v(!0), setTimeout(() => v(!1), 1200);
      } catch {}
  }
  return A.jsx("nav", {
    className: "pointer-events-none absolute left-0 right-0 top-4 z-20",
    children: A.jsxs("div", {
      className: "mx-auto max-w-[1200px] px-4",
      children: [
        A.jsxs("div", {
          className:
            "hidden md:flex pointer-events-auto items-center justify-between rounded-[28px] bg-Snakiu-black py-2 pl-4 pr-2",
          children: [
            A.jsx("div", {
              className: "flex items-center gap-6",
              children: Cm.map((H) =>
                A.jsx(
                  "a",
                  {
                    href: H.route,
                    onClick: () => O(H.route),
                    className: `text-Snakiu-yellow-main font-manatee-solid text-[22px] leading-none px-2 py-2 transition-opacity ${
                      N(H.route)
                        ? "opacity-100"
                        : "opacity-80 hover:opacity-100"
                    }`,
                    children: H.title,
                  },
                  H.title
                )
              ),
            }),
            A.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                A.jsx("button", {
                  type: "button",
                  onClick: Y,
                  disabled: !T,
                  className: `rounded-[18px] bg-Snakiu-yellow-main px-6 py-3 ${
                    T ? "cursor-pointer" : "opacity-60 cursor-not-allowed"
                  }`,
                  title: "Copy contract address",
                  children: A.jsx("span", {
                    className:
                      "font-manatee-solid text-Snakiu-black text-[20px] align-middle",
                    children: d ? r("button.copy.copied") : `ca: ${f}`,
                  }),
                }),
                A.jsx("a", {
                  href: B,
                  target: T ? "_blank" : void 0,
                  rel: T ? "noreferrer noopener" : void 0,
                  "aria-disabled": !T,
                  onClick: (H) => {
                    T || H.preventDefault();
                  },
                  className: `rounded-[18px] bg-Snakiu-yellow-main px-5 py-3 font-manatee-solid text-Snakiu-black text-[22px] ${
                    T ? "" : "opacity-60 cursor-not-allowed"
                  }`,
                  children: r("button.buy"),
                }),
                A.jsxs("div", {
                  id: "nav-lang-dropdown",
                  className: "relative",
                  children: [
                    A.jsx("button", {
                      type: "button",
                      onClick: () => h((H) => !H),
                      className:
                        "rounded-[18px] bg-Snakiu-yellow-main px-4 py-3 font-manatee-solid text-Snakiu-black text-[18px]",
                      title: "Switch language",
                      children: c === "en" ? "EN" : "中文",
                    }),
                    S &&
                      A.jsx("div", {
                        className:
                          "absolute right-0 mt-4 w-36 rounded-[12px] shadow-lg overflow-hidden p-2 bg-Snakiu-black",
                        children: [
                          { code: "en", label: "EN" },
                          { code: "zh", label: "中文" },
                        ].map((H) =>
                          A.jsx(
                            "button",
                            {
                              onClick: () => {
                                o(H.code), h(!1);
                              },
                              className: `w-full text-left px-4 py-2 font-manatee-solid ${
                                c === H.code
                                  ? "bg-Snakiu-yellow-main rounded-xl text-Snakiu-black"
                                  : "text-Snakiu-yellow-main hover:bg-Snakiu-yellow-main/10"
                              }`,
                              children: H.label,
                            },
                            H.code
                          )
                        ),
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
        A.jsx(Kg, {}),
      ],
    }),
  });
}
function kg() {
  const [c, o] = _.useState(0),
    [r, f] = _.useState(!0),
    [d, v] = _.useState(!1),
    b = _.useRef(null);
  return (
    _.useEffect(() => {
      let O = 0;
      const S = () => {
        d ||
          ((O = Math.min(O + 0.5, 95)),
          o(Math.round(O)),
          !d && r && (b.current = requestAnimationFrame(S)));
      };
      b.current = requestAnimationFrame(S);
      const h = () => v(!0);
      return (
        document.readyState === "complete"
          ? h()
          : window.addEventListener("load", h),
        () => {
          window.removeEventListener("load", h),
            b.current && cancelAnimationFrame(b.current);
        }
      );
    }, [r, d]),
    _.useEffect(() => {
      if (!d) return;
      let O;
      const S = () => {
        o((h) => (h >= 100 ? 100 : Math.min(h + 3, 100))),
          (O = requestAnimationFrame(() => {
            c < 100 && S();
          }));
      };
      return (
        S(),
        () => {
          O && cancelAnimationFrame(O);
        }
      );
    }, [d, c]),
    _.useEffect(() => {
      if (d && c >= 100) {
        const O = setTimeout(() => f(!1), 250);
        return () => clearTimeout(O);
      }
    }, [d, c]),
    r
      ? A.jsx("div", {
          className:
            "fixed inset-0 z-[100] flex items-center justify-center bg-Snakiu-yellow-main",
          children: A.jsxs("div", {
            className: "flex flex-col items-center gap-4",
            children: [
              A.jsx("img", {
                src: Xf,
                alt: "Snakiu",
                className: "h-28 w-28 object-contain",
              }),
              A.jsx("div", {
                className:
                  "w-56 h-3 rounded-full bg-Snakiu-black/20 overflow-hidden",
                children: A.jsx("div", {
                  className:
                    "h-full bg-Snakiu-black transition-[width] duration-150",
                  style: { width: `${c}%` },
                }),
              }),
              A.jsxs("div", {
                className: "font-manatee-solid text-Snakiu-black text-xl",
                children: [c, "%"],
              }),
            ],
          }),
        })
      : null
  );
}
function Fg() {
  return A.jsxs("div", {
    children: [
      A.jsx(kg, {}),
      A.jsx("div", { id: "nav", children: A.jsx(Jg, {}) }),
      A.jsx("div", {
        id: "app-routes",
        children: A.jsxs(e0, {
          children: [
            A.jsx(Ba, { path: "/", element: A.jsx(Bn, {}) }),
            A.jsx(Ba, { path: "/who-is-Snakiu", element: A.jsx(Bn, {}) }),
            A.jsx(Ba, { path: "/gallery", element: A.jsx(Bn, {}) }),
            A.jsx(Ba, { path: "/pfp-generator", element: A.jsx(Bn, {}) }),
            A.jsx(Ba, { path: "*", element: A.jsx(Bn, {}) }),
          ],
        }),
      }),
    ],
  });
}
ov.createRoot(document.getElementById("root")).render(
  A.jsx(z0, { children: A.jsx(Z0, { children: A.jsx(Fg, {}) }) })
);
