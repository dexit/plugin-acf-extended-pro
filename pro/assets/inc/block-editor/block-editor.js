(() => {
    var e, t = {
            367: function(e, t) {
                var n, o;
                n = function(e, t) {
                    "use strict";
                    var n, o, r = "function" == typeof Map ? new Map : (n = [], o = [], {
                            has: function(e) {
                                return n.indexOf(e) > -1
                            },
                            get: function(e) {
                                return o[n.indexOf(e)]
                            },
                            set: function(e, t) {
                                -1 === n.indexOf(e) && (n.push(e), o.push(t))
                            },
                            delete: function(e) {
                                var t = n.indexOf(e);
                                t > -1 && (n.splice(t, 1), o.splice(t, 1))
                            }
                        }),
                        i = function(e) {
                            return new Event(e, {
                                bubbles: !0
                            })
                        };
                    try {
                        new Event("test")
                    } catch (e) {
                        i = function(e) {
                            var t = document.createEvent("Event");
                            return t.initEvent(e, !0, !1), t
                        }
                    }

                    function s(e) {
                        if (e && e.nodeName && "TEXTAREA" === e.nodeName && !r.has(e)) {
                            var t = null,
                                n = null,
                                o = null,
                                s = function() {
                                    e.clientWidth !== n && u()
                                },
                                a = function(t) {
                                    window.removeEventListener("resize", s, !1), e.removeEventListener("input", u, !1), e.removeEventListener("keyup", u, !1), e.removeEventListener("autosize:destroy", a, !1), e.removeEventListener("autosize:update", u, !1), Object.keys(t).forEach((function(n) {
                                        e.style[n] = t[n]
                                    })), r.delete(e)
                                }.bind(e, {
                                    height: e.style.height,
                                    resize: e.style.resize,
                                    overflowY: e.style.overflowY,
                                    overflowX: e.style.overflowX,
                                    wordWrap: e.style.wordWrap
                                });
                            e.addEventListener("autosize:destroy", a, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", u, !1), window.addEventListener("resize", s, !1), e.addEventListener("input", u, !1), e.addEventListener("autosize:update", u, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", r.set(e, {
                                destroy: a,
                                update: u
                            }), "vertical" === (l = window.getComputedStyle(e, null)).resize ? e.style.resize = "none" : "both" === l.resize && (e.style.resize = "horizontal"), t = "content-box" === l.boxSizing ? -(parseFloat(l.paddingTop) + parseFloat(l.paddingBottom)) : parseFloat(l.borderTopWidth) + parseFloat(l.borderBottomWidth), isNaN(t) && (t = 0), u()
                        }
                        var l;

                        function c(t) {
                            var n = e.style.width;
                            e.style.width = "0px", e.offsetWidth, e.style.width = n, e.style.overflowY = t
                        }

                        function d() {
                            if (0 !== e.scrollHeight) {
                                var o = function(e) {
                                        for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
                                            node: e.parentNode,
                                            scrollTop: e.parentNode.scrollTop
                                        }), e = e.parentNode;
                                        return t
                                    }(e),
                                    r = document.documentElement && document.documentElement.scrollTop;
                                e.style.height = "", e.style.height = e.scrollHeight + t + "px", n = e.clientWidth, o.forEach((function(e) {
                                    e.node.scrollTop = e.scrollTop
                                })), r && (document.documentElement.scrollTop = r)
                            }
                        }

                        function u() {
                            d();
                            var t = Math.round(parseFloat(e.style.height)),
                                n = window.getComputedStyle(e, null),
                                r = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : e.offsetHeight;
                            if (r < t ? "hidden" === n.overflowY && (c("scroll"), d(), r = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== n.overflowY && (c("hidden"), d(), r = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), o !== r) {
                                o = r;
                                var s = i("autosize:resized");
                                try {
                                    e.dispatchEvent(s)
                                } catch (e) {}
                            }
                        }
                    }

                    function a(e) {
                        var t = r.get(e);
                        t && t.destroy()
                    }

                    function l(e) {
                        var t = r.get(e);
                        t && t.update()
                    }
                    var c = null;
                    "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((c = function(e) {
                        return e
                    }).destroy = function(e) {
                        return e
                    }, c.update = function(e) {
                        return e
                    }) : ((c = function(e, t) {
                        return e && Array.prototype.forEach.call(e.length ? e : [e], (function(e) {
                            return s(e)
                        })), e
                    }).destroy = function(e) {
                        return e && Array.prototype.forEach.call(e.length ? e : [e], a), e
                    }, c.update = function(e) {
                        return e && Array.prototype.forEach.call(e.length ? e : [e], l), e
                    }), t.default = c, e.exports = t.default
                }, void 0 === (o = n.apply(t, [e, t])) || (e.exports = o)
            },
            817: (e, t, n) => {
                "use strict";
                var o = {};
                n.r(o), n.d(o, {
                    closeModal: () => Q,
                    disableComplementaryArea: () => K,
                    enableComplementaryArea: () => G,
                    openModal: () => X,
                    pinItem: () => Y,
                    setDefaultComplementaryArea: () => W,
                    setFeatureDefaults: () => q,
                    setFeatureValue: () => Z,
                    toggleFeature: () => J,
                    unpinItem: () => $
                });
                var r = {};
                n.r(r), n.d(r, {
                    getActiveComplementaryArea: () => ee,
                    isComplementaryAreaLoading: () => te,
                    isFeatureActive: () => oe,
                    isItemPinned: () => ne,
                    isModalActive: () => re
                });
                var i = {};
                n.r(i), n.d(i, {
                    getCanvasStyles: () => wn,
                    getCurrentPattern: () => pn,
                    getCurrentPatternName: () => un,
                    getEditorMode: () => ln,
                    getEditorSettings: () => cn,
                    getIgnoredContent: () => mn,
                    getNamedPattern: () => fn,
                    getPatterns: () => bn,
                    getPreviewDeviceType: () => vn,
                    isEditing: () => yn,
                    isEditorReady: () => dn,
                    isEditorSidebarOpened: () => hn,
                    isIframePreview: () => Cn,
                    isInserterOpened: () => gn,
                    isListViewOpened: () => En
                });
                var s = {};
                n.r(s), n.d(s, {
                    getBlocks: () => Sn,
                    getEditCount: () => xn,
                    getEditorSelection: () => Tn,
                    hasEditorRedo: () => On,
                    hasEditorUndo: () => kn
                });
                var a = {};
                n.r(a), n.d(a, {
                    isFeatureActive: () => An
                });
                var l = {};
                n.r(l), n.d(l, {
                    isOptionActive: () => In
                });
                var c = {};
                n.r(c), n.d(c, {
                    setUndoManager: () => Pn,
                    setYDoc: () => Mn
                });
                var d = {};
                n.r(d), n.d(d, {
                    getUndoManager: () => Ln,
                    getYDoc: () => Fn
                });
                var u = {};
                n.r(u), n.d(u, {
                    setAvailableCollabPeers: () => Rn,
                    setCollabPeerSelection: () => Bn
                });
                var p = {};
                n.r(p), n.d(p, {
                    getCollabPeers: () => Dn,
                    hasCollabPeers: () => Nn
                });
                var m = {};
                n.r(m), n.d(m, {
                    __experimentalConvertBlockToStatic: () => Gn,
                    __experimentalConvertBlocksToReusable: () => Kn,
                    __experimentalDeleteReusableBlock: () => Yn,
                    __experimentalSetEditingReusableBlock: () => $n
                });
                var f = {};
                n.r(f), n.d(f, {
                    __experimentalIsEditingReusableBlock: () => Jn
                });
                var g = {};
                n.r(g), n.d(g, {
                    disableComplementaryArea: () => Qn,
                    enableComplementaryArea: () => Xn,
                    pinItem: () => eo,
                    setDefaultComplementaryArea: () => qn,
                    setFeatureDefaults: () => ro,
                    setFeatureValue: () => oo,
                    toggleFeature: () => no,
                    unpinItem: () => to
                });
                var h = {};
                n.r(h), n.d(h, {
                    getActiveComplementaryArea: () => io,
                    isFeatureActive: () => ao,
                    isItemPinned: () => so
                });
                const y = window.wp.element,
                    b = window.wp.mediaUtils,
                    E = window.wp.editor,
                    v = window.wp.hooks,
                    _ = window.wp.components,
                    w = window.wp.blockLibrary,
                    C = window.wp.data,
                    S = (window.wp.formatLibrary, window.wp.keyboardShortcuts);
                var T = n(184),
                    k = n.n(T);
                const O = window.wp.compose,
                    x = window.lodash,
                    A = ["button", "submit"],
                    I = (0, O.createHigherOrderComponent)((e => class extends y.Component {
                        constructor() {
                            super(...arguments), this.bindNode = this.bindNode.bind(this), this.cancelBlurCheck = this.cancelBlurCheck.bind(this), this.queueBlurCheck = this.queueBlurCheck.bind(this), this.normalizeButtonFocus = this.normalizeButtonFocus.bind(this)
                        }
                        componentWillUnmount() {
                            clearTimeout(this.blurCheckTimeout)
                        }
                        bindNode(e) {
                            e ? this.node = e : (delete this.node, this.cancelBlurCheck())
                        }
                        queueBlurCheck(e) {
                            e.persist(), this.preventBlurCheck || (this.blurCheckTimeout = setTimeout((() => {
                                document.hasFocus() ? "function" == typeof this.node.handleFocusOutside && this.node.handleFocusOutside(e) : e.preventDefault()
                            }), 0))
                        }
                        cancelBlurCheck() {
                            clearTimeout(this.blurCheckTimeout), void 0 !== this.node && "function" == typeof this.node.handleFocus && this.node.handleFocus(event)
                        }
                        normalizeButtonFocus(e) {
                            const {
                                type: t,
                                target: n
                            } = e;
                            (0, x.includes)(["mouseup", "touchend"], t) ? this.preventBlurCheck = !1: function(e) {
                                switch (e.nodeName) {
                                    case "A":
                                    case "BUTTON":
                                        return !0;
                                    case "INPUT":
                                        return (0, x.includes)(A, e.type)
                                }
                                return !1
                            }(n) && (this.preventBlurCheck = !0)
                        }
                        render() {
                            return (0, y.createElement)("div", {
                                onFocus: this.cancelBlurCheck,
                                onMouseDown: this.normalizeButtonFocus,
                                onMouseUp: this.normalizeButtonFocus,
                                onTouchStart: this.normalizeButtonFocus,
                                onTouchEnd: this.normalizeButtonFocus,
                                onBlur: this.queueBlurCheck
                            }, (0, y.createElement)(e, {
                                ref: this.bindNode,
                                ...this.props
                            }))
                        }
                    }), "withFocusOutside")(class extends y.Component {
                        handleFocus(e) {
                            this.props.onFocus()
                        }
                        isInspectorElement(e) {
                            return !!(e.closest(".components-color-picker") || e.closest(".block-editor-block-inspector") || e.closest(".iso-inspector") || e.classList.contains("media-modal"))
                        }
                        handleFocusOutside(e) {
                            const t = e.relatedTarget || e.target;
                            t && this.isInspectorElement(t) || this.props.onOutside()
                        }
                        render() {
                            return this.props.children
                        }
                    }),
                    M = window.wp.blocks,
                    P = window.wp.blockEditor,
                    F = window.wp.keycodes,
                    L = window.wp.i18n,
                    R = window.wp.primitives,
                    B = (0, y.createElement)(R.SVG, {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }, (0, y.createElement)(R.Path, {
                        d: "M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"
                    })),
                    D = (0, y.createElement)(R.SVG, {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }, (0, y.createElement)(R.Path, {
                        d: "M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z"
                    })),
                    N = (0, y.createElement)(R.SVG, {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }, (0, y.createElement)(R.Path, {
                        fillRule: "evenodd",
                        d: "M9.706 8.646a.25.25 0 01-.188.137l-4.626.672a.25.25 0 00-.139.427l3.348 3.262a.25.25 0 01.072.222l-.79 4.607a.25.25 0 00.362.264l4.138-2.176a.25.25 0 01.233 0l4.137 2.175a.25.25 0 00.363-.263l-.79-4.607a.25.25 0 01.072-.222l3.347-3.262a.25.25 0 00-.139-.427l-4.626-.672a.25.25 0 01-.188-.137l-2.069-4.192a.25.25 0 00-.448 0L9.706 8.646zM12 7.39l-.948 1.921a1.75 1.75 0 01-1.317.957l-2.12.308 1.534 1.495c.412.402.6.982.503 1.55l-.362 2.11 1.896-.997a1.75 1.75 0 011.629 0l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39z",
                        clipRule: "evenodd"
                    })),
                    U = window.wp.viewport,
                    V = (0, y.createElement)(R.SVG, {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }, (0, y.createElement)(R.Path, {
                        d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"
                    })),
                    H = window.wp.deprecated;
                var z = n.n(H);
                const j = window.wp.preferences,
                    W = (e, t) => ({
                        type: "SET_DEFAULT_COMPLEMENTARY_AREA",
                        scope: e,
                        area: t
                    }),
                    G = (e, t) => ({
                        registry: n,
                        dispatch: o
                    }) => {
                        t && (n.select(j.store).get(e, "isComplementaryAreaVisible") || n.dispatch(j.store).set(e, "isComplementaryAreaVisible", !0), o({
                            type: "ENABLE_COMPLEMENTARY_AREA",
                            scope: e,
                            area: t
                        }))
                    },
                    K = e => ({
                        registry: t
                    }) => {
                        t.select(j.store).get(e, "isComplementaryAreaVisible") && t.dispatch(j.store).set(e, "isComplementaryAreaVisible", !1)
                    },
                    Y = (e, t) => ({
                        registry: n
                    }) => {
                        if (!t) return;
                        const o = n.select(j.store).get(e, "pinnedItems");
                        !0 !== o?.[t] && n.dispatch(j.store).set(e, "pinnedItems", {
                            ...o,
                            [t]: !0
                        })
                    },
                    $ = (e, t) => ({
                        registry: n
                    }) => {
                        if (!t) return;
                        const o = n.select(j.store).get(e, "pinnedItems");
                        n.dispatch(j.store).set(e, "pinnedItems", {
                            ...o,
                            [t]: !1
                        })
                    };

                function J(e, t) {
                    return function({
                        registry: n
                    }) {
                        z()("dispatch( 'core/interface' ).toggleFeature", {
                            since: "6.0",
                            alternative: "dispatch( 'core/preferences' ).toggle"
                        }), n.dispatch(j.store).toggle(e, t)
                    }
                }

                function Z(e, t, n) {
                    return function({
                        registry: o
                    }) {
                        z()("dispatch( 'core/interface' ).setFeatureValue", {
                            since: "6.0",
                            alternative: "dispatch( 'core/preferences' ).set"
                        }), o.dispatch(j.store).set(e, t, !!n)
                    }
                }

                function q(e, t) {
                    return function({
                        registry: n
                    }) {
                        z()("dispatch( 'core/interface' ).setFeatureDefaults", {
                            since: "6.0",
                            alternative: "dispatch( 'core/preferences' ).setDefaults"
                        }), n.dispatch(j.store).setDefaults(e, t)
                    }
                }

                function X(e) {
                    return {
                        type: "OPEN_MODAL",
                        name: e
                    }
                }

                function Q() {
                    return {
                        type: "CLOSE_MODAL"
                    }
                }
                const ee = (0, C.createRegistrySelector)((e => (t, n) => {
                        const o = e(j.store).get(n, "isComplementaryAreaVisible");
                        if (void 0 !== o) return !1 === o ? null : t?.complementaryAreas?.[n]
                    })),
                    te = (0, C.createRegistrySelector)((e => (t, n) => {
                        const o = e(j.store).get(n, "isComplementaryAreaVisible"),
                            r = t?.complementaryAreas?.[n];
                        return o && void 0 === r
                    })),
                    ne = (0, C.createRegistrySelector)((e => (t, n, o) => {
                        var r;
                        const i = e(j.store).get(n, "pinnedItems");
                        return null === (r = i?.[o]) || void 0 === r || r
                    })),
                    oe = (0, C.createRegistrySelector)((e => (t, n, o) => (z()("select( 'core/interface' ).isFeatureActive( scope, featureName )", {
                        since: "6.0",
                        alternative: "select( 'core/preferences' ).get( scope, featureName )"
                    }), !!e(j.store).get(n, o))));

                function re(e, t) {
                    return e.activeModal === t
                }
                const ie = (0, C.combineReducers)({
                        complementaryAreas: function(e = {}, t) {
                            switch (t.type) {
                                case "SET_DEFAULT_COMPLEMENTARY_AREA": {
                                    const {
                                        scope: n,
                                        area: o
                                    } = t;
                                    return e[n] ? e : {
                                        ...e,
                                        [n]: o
                                    }
                                }
                                case "ENABLE_COMPLEMENTARY_AREA": {
                                    const {
                                        scope: n,
                                        area: o
                                    } = t;
                                    return {
                                        ...e,
                                        [n]: o
                                    }
                                }
                            }
                            return e
                        },
                        activeModal: function(e = null, t) {
                            switch (t.type) {
                                case "OPEN_MODAL":
                                    return t.name;
                                case "CLOSE_MODAL":
                                    return null
                            }
                            return e
                        }
                    }),
                    se = (0, C.createReduxStore)("core/interface", {
                        reducer: ie,
                        actions: o,
                        selectors: r
                    });
                (0, C.register)(se);
                const ae = (0, window.wp.plugins.withPluginContext)(((e, t) => ({
                        icon: t.icon || e.icon,
                        identifier: t.identifier || `${e.name}/${t.name}`
                    }))),
                    le = ae((function({
                        as: e = _.Button,
                        scope: t,
                        identifier: n,
                        icon: o,
                        selectedIcon: r,
                        name: i,
                        ...s
                    }) {
                        const a = e,
                            l = (0, C.useSelect)((e => e(se).getActiveComplementaryArea(t) === n), [n]),
                            {
                                enableComplementaryArea: c,
                                disableComplementaryArea: d
                            } = (0, C.useDispatch)(se);
                        return (0, y.createElement)(a, {
                            icon: r && l ? r : o,
                            onClick: () => {
                                l ? d(t) : c(t, n)
                            },
                            ...s
                        })
                    })),
                    ce = ({
                        smallScreenTitle: e,
                        children: t,
                        className: n,
                        toggleButtonProps: o
                    }) => {
                        const r = (0, y.createElement)(le, {
                            icon: V,
                            ...o
                        });
                        return (0, y.createElement)(y.Fragment, null, (0, y.createElement)("div", {
                            className: "components-panel__header interface-complementary-area-header__small"
                        }, e && (0, y.createElement)("span", {
                            className: "interface-complementary-area-header__small-title"
                        }, e), r), (0, y.createElement)("div", {
                            className: k()("components-panel__header", "interface-complementary-area-header", n),
                            tabIndex: -1
                        }, t, r))
                    },
                    de = () => {};

                function ue({
                    name: e,
                    as: t = _.Button,
                    onClick: n,
                    ...o
                }) {
                    return (0, y.createElement)(_.Fill, {
                        name: e
                    }, (({
                        onClick: e
                    }) => (0, y.createElement)(t, {
                        onClick: n || e ? (...t) => {
                            (n || de)(...t), (e || de)(...t)
                        } : void 0,
                        ...o
                    })))
                }
                ue.Slot = function({
                    name: e,
                    as: t = _.ButtonGroup,
                    fillProps: n = {},
                    bubblesVirtually: o,
                    ...r
                }) {
                    return (0, y.createElement)(_.Slot, {
                        name: e,
                        bubblesVirtually: o,
                        fillProps: n
                    }, (e => {
                        if (!y.Children.toArray(e).length) return null;
                        const n = [];
                        y.Children.forEach(e, (({
                            props: {
                                __unstableExplicitMenuItem: e,
                                __unstableTarget: t
                            }
                        }) => {
                            t && e && n.push(t)
                        }));
                        const o = y.Children.map(e, (e => !e.props.__unstableExplicitMenuItem && n.includes(e.props.__unstableTarget) ? null : e));
                        return (0, y.createElement)(t, {
                            ...r
                        }, o)
                    }))
                };
                const pe = ue,
                    me = ({
                        __unstableExplicitMenuItem: e,
                        __unstableTarget: t,
                        ...n
                    }) => (0, y.createElement)(_.MenuItem, {
                        ...n
                    });

                function fe({
                    scope: e,
                    target: t,
                    __unstableExplicitMenuItem: n,
                    ...o
                }) {
                    return (0, y.createElement)(le, {
                        as: o => (0, y.createElement)(pe, {
                            __unstableExplicitMenuItem: n,
                            __unstableTarget: `${e}/${t}`,
                            as: me,
                            name: `${e}/plugin-more-menu`,
                            ...o
                        }),
                        role: "menuitemcheckbox",
                        selectedIcon: B,
                        name: t,
                        scope: e,
                        ...o
                    })
                }

                function ge({
                    scope: e,
                    ...t
                }) {
                    return (0, y.createElement)(_.Fill, {
                        name: `PinnedItems/${e}`,
                        ...t
                    })
                }
                ge.Slot = function({
                    scope: e,
                    className: t,
                    ...n
                }) {
                    return (0, y.createElement)(_.Slot, {
                        name: `PinnedItems/${e}`,
                        ...n
                    }, (e => e?.length > 0 && (0, y.createElement)("div", {
                        className: k()(t, "interface-pinned-items")
                    }, e)))
                };
                const he = ge;

                function ye({
                    scope: e,
                    children: t,
                    className: n
                }) {
                    return (0, y.createElement)(_.Fill, {
                        name: `ComplementaryArea/${e}`
                    }, (0, y.createElement)("div", {
                        className: n
                    }, t))
                }
                const be = ae((function({
                    children: e,
                    className: t,
                    closeLabel: n = (0, L.__)("Close plugin"),
                    identifier: o,
                    header: r,
                    headerClassName: i,
                    icon: s,
                    isPinnable: a = !0,
                    panelClassName: l,
                    scope: c,
                    name: d,
                    smallScreenTitle: u,
                    title: p,
                    toggleShortcut: m,
                    isActiveByDefault: f,
                    showIconLabels: g = !1
                }) {
                    const {
                        isLoading: h,
                        isActive: b,
                        isPinned: E,
                        activeArea: v,
                        isSmall: w,
                        isLarge: S
                    } = (0, C.useSelect)((e => {
                        const {
                            getActiveComplementaryArea: t,
                            isComplementaryAreaLoading: n,
                            isItemPinned: r
                        } = e(se), i = t(c);
                        return {
                            isLoading: n(c),
                            isActive: i === o,
                            isPinned: r(c, o),
                            activeArea: i,
                            isSmall: e(U.store).isViewportMatch("< medium"),
                            isLarge: e(U.store).isViewportMatch("large")
                        }
                    }), [o, c]);
                    ! function(e, t, n, o, r) {
                        const i = (0, y.useRef)(!1),
                            s = (0, y.useRef)(!1),
                            {
                                enableComplementaryArea: a,
                                disableComplementaryArea: l
                            } = (0, C.useDispatch)(se);
                        (0, y.useEffect)((() => {
                            o && r && !i.current ? (l(e), s.current = !0) : s.current && !r && i.current ? (s.current = !1, a(e, t)) : s.current && n && n !== t && (s.current = !1), r !== i.current && (i.current = r)
                        }), [o, r, e, t, n])
                    }(c, o, v, b, w);
                    const {
                        enableComplementaryArea: T,
                        disableComplementaryArea: O,
                        pinItem: x,
                        unpinItem: A
                    } = (0, C.useDispatch)(se);
                    return (0, y.useEffect)((() => {
                        f && void 0 === v && !w ? T(c, o) : void 0 === v && w && O(c, o)
                    }), [v, f, c, o, w]), (0, y.createElement)(y.Fragment, null, a && (0, y.createElement)(he, {
                        scope: c
                    }, E && (0, y.createElement)(le, {
                        scope: c,
                        identifier: o,
                        isPressed: b && (!g || S),
                        "aria-expanded": b,
                        "aria-disabled": h,
                        label: p,
                        icon: g ? B : s,
                        showTooltip: !g,
                        variant: g ? "tertiary" : void 0
                    })), d && a && (0, y.createElement)(fe, {
                        target: d,
                        scope: c,
                        icon: s
                    }, p), b && (0, y.createElement)(ye, {
                        className: k()("interface-complementary-area", t),
                        scope: c
                    }, (0, y.createElement)(ce, {
                        className: i,
                        closeLabel: n,
                        onClose: () => O(c),
                        smallScreenTitle: u,
                        toggleButtonProps: {
                            label: n,
                            shortcut: m,
                            scope: c,
                            identifier: o
                        }
                    }, r || (0, y.createElement)(y.Fragment, null, (0, y.createElement)("strong", null, p), a && (0, y.createElement)(_.Button, {
                        className: "interface-complementary-area__pin-unpin-item",
                        icon: E ? D : N,
                        label: E ? (0, L.__)("Unpin from toolbar") : (0, L.__)("Pin to toolbar"),
                        onClick: () => (E ? A : x)(c, o),
                        isPressed: E,
                        "aria-expanded": E
                    }))), (0, y.createElement)(_.Panel, {
                        className: l
                    }, e)))
                }));
                be.Slot = function({
                    scope: e,
                    ...t
                }) {
                    return (0, y.createElement)(_.Slot, {
                        name: `ComplementaryArea/${e}`,
                        ...t
                    })
                };
                const Ee = be,
                    ve = ({
                        isActive: e
                    }) => ((0, y.useEffect)((() => {
                        let e = !1;
                        return document.body.classList.contains("sticky-menu") && (e = !0, document.body.classList.remove("sticky-menu")), () => {
                            e && document.body.classList.add("sticky-menu")
                        }
                    }), []), (0, y.useEffect)((() => (e ? document.body.classList.add("is-fullscreen-mode") : document.body.classList.remove("is-fullscreen-mode"), () => {
                        e && document.body.classList.remove("is-fullscreen-mode")
                    })), [e]), null);

                function _e({
                    children: e,
                    className: t,
                    ariaLabel: n,
                    as: o = "div",
                    ...r
                }) {
                    return (0, y.createElement)(o, {
                        className: k()("interface-navigable-region", t),
                        "aria-label": n,
                        role: "region",
                        tabIndex: "-1",
                        ...r
                    }, e)
                }
                const we = {
                        hidden: {
                            opacity: 0
                        },
                        hover: {
                            opacity: 1,
                            transition: {
                                type: "tween",
                                delay: .2,
                                delayChildren: .2
                            }
                        },
                        distractionFreeInactive: {
                            opacity: 1,
                            transition: {
                                delay: 0
                            }
                        }
                    },
                    Ce = (0, y.forwardRef)((function({
                        isDistractionFree: e,
                        footer: t,
                        header: n,
                        editorNotices: o,
                        sidebar: r,
                        secondarySidebar: i,
                        notices: s,
                        content: a,
                        actions: l,
                        labels: c,
                        className: d,
                        enableRegionNavigation: u = !0,
                        shortcuts: p
                    }, m) {
                        const f = (0, _.__unstableUseNavigateRegions)(p);
                        ! function(e) {
                            (0, y.useEffect)((() => {
                                const t = document && document.querySelector(`html:not(.${e})`);
                                if (t) return t.classList.toggle(e), () => {
                                    t.classList.toggle(e)
                                }
                            }), [e])
                        }("interface-interface-skeleton__html-container");
                        const g = {
                            /* translators: accessibility text for the top bar landmark region. */
                            header: (0, L.__)("Header"),
                            /* translators: accessibility text for the content landmark region. */
                            body: (0, L.__)("Content"),
                            /* translators: accessibility text for the secondary sidebar landmark region. */
                            secondarySidebar: (0, L.__)("Block Library"),
                            /* translators: accessibility text for the settings landmark region. */
                            sidebar: (0, L.__)("Settings"),
                            /* translators: accessibility text for the publish landmark region. */
                            actions: (0, L.__)("Publish"),
                            /* translators: accessibility text for the footer landmark region. */
                            footer: (0, L.__)("Footer"),
                            ...c
                        };
                        return (0, y.createElement)("div", {
                            ...u ? f : {},
                            ref: (0, O.useMergeRefs)([m, u ? f.ref : void 0]),
                            className: k()(d, "interface-interface-skeleton", f.className, !!t && "has-footer")
                        }, (0, y.createElement)("div", {
                            className: "interface-interface-skeleton__editor"
                        }, !!n && (0, y.createElement)(_e, {
                            as: _.__unstableMotion.div,
                            className: "interface-interface-skeleton__header",
                            "aria-label": g.header,
                            initial: e ? "hidden" : "distractionFreeInactive",
                            whileHover: e ? "hover" : "distractionFreeInactive",
                            animate: e ? "hidden" : "distractionFreeInactive",
                            variants: we,
                            transition: e ? {
                                type: "tween",
                                delay: .8
                            } : void 0
                        }, n), e && (0, y.createElement)("div", {
                            className: "interface-interface-skeleton__header"
                        }, o), (0, y.createElement)("div", {
                            className: "interface-interface-skeleton__body"
                        }, !!i && (0, y.createElement)(_e, {
                            className: "interface-interface-skeleton__secondary-sidebar",
                            ariaLabel: g.secondarySidebar
                        }, i), !!s && (0, y.createElement)("div", {
                            className: "interface-interface-skeleton__notices"
                        }, s), (0, y.createElement)(_e, {
                            className: "interface-interface-skeleton__content",
                            ariaLabel: g.body
                        }, a), !!r && (0, y.createElement)(_e, {
                            className: "interface-interface-skeleton__sidebar",
                            ariaLabel: g.sidebar
                        }, r), !!l && (0, y.createElement)(_e, {
                            className: "interface-interface-skeleton__actions",
                            ariaLabel: g.actions
                        }, l))), !!t && (0, y.createElement)(_e, {
                            className: "interface-interface-skeleton__footer",
                            ariaLabel: g.footer
                        }, t))
                    })),
                    Se = (0, y.createElement)(R.SVG, {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }, (0, y.createElement)(R.Path, {
                        fillRule: "evenodd",
                        d: "M10.289 4.836A1 1 0 0111.275 4h1.306a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.025 6.025 0 010 2.435l1.149.946a1 1 0 01.23 1.272l-.653 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 01-.987.836h-1.306a1 1 0 01-.986-.836l-.244-1.466a5.995 5.995 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.149-.946a6.026 6.026 0 010-2.435l-1.148-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218l.244-1.466zM14.929 12a3 3 0 11-6 0 3 3 0 016 0z",
                        clipRule: "evenodd"
                    })),
                    Te = ({
                        sidebarName: e,
                        documentInspector: t
                    }) => {
                        const {
                            openGeneralSidebar: n
                        } = (0, C.useDispatch)("isolated/editor"), {
                            documentLabel: o
                        } = (0, C.useSelect)((e => ({
                            // translators: Default label for the Document sidebar tab, not selected.
                            documentLabel: t && "string" == typeof t ? t : (0, L._x)("Document", "noun")
                        })), []), [r, i] = "edit-post/document" === e ?
                            // translators: ARIA label for the Document sidebar tab, selected. %s: Document label.
                            [(0, L.sprintf)((0, L.__)("%s (selected)"), o), "is-active"] : [o, ""], [s, a] = "edit-post/block" === e ?
                            // translators: ARIA label for the Block Settings Sidebar tab, selected.
                            [(0, L.__)("Block (selected)"), "is-active"] :
                            // translators: ARIA label for the Block Settings Sidebar tab, not selected.
                            [(0, L.__)("Block"), ""];
                        return (0, y.createElement)("ul", null, !!t && (0, y.createElement)("li", null, (0, y.createElement)(_.Button, {
                            onClick: () => n("edit-post/document"),
                            className: `edit-post-sidebar__panel-tab ${i}`,
                            "aria-label": r,
                            "data-label": o
                        }, o)), (0, y.createElement)("li", null, (0, y.createElement)(_.Button, {
                                onClick: () => n("edit-post/block"),
                                className: `edit-post-sidebar__panel-tab ${a}`,
                                "aria-label": s,
                                "data-label": (0, L.__)("Block")
                            },
                            // translators: Text label for the Block Settings Sidebar tab.
                            (0, L.__)("Block"))))
                    },
                    {
                        Fill: ke,
                        Slot: Oe
                    } = (0, _.createSlotFill)("PluginDocumentSettingPanel"),
                    xe = ({
                        children: e
                    }) => (0, y.createElement)(ke, null, e);
                xe.Slot = function(e) {
                    return (0, y.createElement)(Oe, null, (e => 0 === e.length ? (0, y.createElement)("span", {
                        className: "block-editor-block-inspector__no-blocks"
                    }, (0, L.__)("Nothing to display")) : e))
                };
                const Ae = xe;

                function Ie({
                    as: e = _.Button,
                    scope: t,
                    identifier: n,
                    icon: o,
                    selectedIcon: r,
                    name: i,
                    ...s
                }) {
                    const a = e,
                        l = (0, C.useSelect)((e => e(se).getActiveComplementaryArea(t) === n), [n]),
                        {
                            enableComplementaryArea: c,
                            disableComplementaryArea: d
                        } = (0, C.useDispatch)(se);
                    return (0, y.createElement)(a, {
                        icon: r && l ? r : o,
                        onClick: () => {
                            l ? d(t) : c(t, n)
                        },
                        ...s
                    })
                }
                const Me = ({
                    smallScreenTitle: e,
                    children: t,
                    className: n,
                    toggleButtonProps: o
                }) => {
                    const r = (0, y.createElement)(Ie, {
                        icon: V,
                        ...o
                    });
                    return (0, y.createElement)(y.Fragment, null, (0, y.createElement)("div", {
                        className: "components-panel__header interface-complementary-area-header__small"
                    }, e && (0, y.createElement)("span", {
                        className: "interface-complementary-area-header__small-title"
                    }, e), r), (0, y.createElement)("div", {
                        className: k()("components-panel__header", "interface-complementary-area-header", n),
                        tabIndex: -1
                    }, t, r))
                };

                function Pe({
                    scope: e,
                    children: t,
                    className: n
                }) {
                    return (0, y.createElement)(_.Fill, {
                        name: `ComplementaryArea/${e}`
                    }, (0, y.createElement)("div", {
                        className: n
                    }, t))
                }

                function Fe({
                    className: e,
                    children: t,
                    header: n,
                    headerClassName: o,
                    toggleShortcut: r,
                    closeLabel: i,
                    title: s,
                    identifier: a,
                    ...l
                }) {
                    const {
                        postTitle: c,
                        isActive: d
                    } = (0, C.useSelect)((e => {
                        const {
                            getActiveComplementaryArea: t
                        } = e(se), n = t("isolated/editor");
                        return {
                            postTitle: "",
                            showIconLabels: e("isolated/editor").isFeatureActive("showIconLabels"),
                            isActive: (o = n, ["edit-post/document", "edit-post/block"].includes(o))
                        };
                        var o
                    }), []);
                    return d ? (0, y.createElement)(Pe, {
                        className: "interface-complementary-area",
                        scope: "isolated/editor"
                    }, (0, y.createElement)(Me, {
                        className: o,
                        smallScreenTitle: c || (0, L.__)("(no title)"),
                        toggleButtonProps: {
                            label: i,
                            shortcut: r,
                            scope: "isolated/editor",
                            identifier: a
                        }
                    }, n), (0, y.createElement)(_.Panel, {
                        className: "edit-post-sidebar"
                    }, t)) : null
                }
                const Le = ({
                        documentInspector: e
                    }) => {
                        const {
                            sidebarName: t,
                            keyboardShortcut: n
                        } = (0, C.useSelect)((e => {
                            let t = e(se).getActiveComplementaryArea("isolated/editor");
                            return ["edit-post/document", "edit-post/block"].includes(t) || (t = "edit-post/document", e(P.store).getBlockSelectionStart() && (t = "edit-post/block")), {
                                sidebarName: t,
                                keyboardShortcut: e(S.store).getShortcutRepresentation("core/edit-post/toggle-sidebar")
                            }
                        }), []);
                        return (0, y.createElement)(Fe, {
                            className: "iso-sidebar",
                            identifier: t,
                            header: (0, y.createElement)(Te, {
                                sidebarName: t,
                                documentInspector: e
                            }),
                            closeLabel: (0, L.__)("Close settings"),
                            headerClassName: "edit-post-sidebar__panel-tabs"
                                /* translators: button label text should, if possible, be under 16 characters. */
                                ,
                            title: (0, L.__)("Settings"),
                            toggleShortcut: n,
                            icon: Se,
                            isActiveByDefault: !1
                        }, "edit-post/document" === t && (0, y.createElement)(Ae.Slot, null), "edit-post/block" === t && (0, y.createElement)(P.BlockInspector, null))
                    },
                    Re = window.wp.privateApis,
                    {
                        Fill: Be,
                        Slot: De
                    } = (0, _.createSlotFill)("IsolatedEditorHeading"),
                    Ne = ({
                        children: e
                    }) => (0, y.createElement)(Be, null, e);
                Ne.Slot = function(e) {
                    return (0, y.createElement)(De, null, (e => e))
                };
                const Ue = Ne,
                    {
                        Fill: Ve,
                        Slot: He
                    } = (0, _.createSlotFill)("IsolatedFooter"),
                    ze = ({
                        children: e
                    }) => (0, y.createElement)(Ve, null, e);
                ze.Slot = function(e) {
                    return (0, y.createElement)(He, null, (e => e))
                };
                const je = ze,
                    {
                        lock: We,
                        unlock: Ge
                    } = (0, Re.__dangerousOptInToUnstableAPIsOnlyForCoreModules)("I know using unstable features means my plugin or theme will inevitably break on the next WordPress release.", "@wordpress/edit-post"),
                    {
                        LayoutStyle: Ke,
                        useLayoutClasses: Ye,
                        useLayoutStyles: $e
                    } = Ge(P.privateApis);

                function Je({
                    children: e,
                    contentRef: t,
                    shouldIframe: n,
                    styles: o,
                    style: r
                }) {
                    const i = (0, P.__unstableUseMouseMoveTypingReset)();
                    return n ? (0, y.createElement)(P.__unstableIframe, {
                        ref: i,
                        contentRef: t,
                        style: {
                            width: "100%",
                            height: "100%",
                            display: "block"
                        },
                        name: "editor-canvas"
                    }, (0, y.createElement)(P.__unstableEditorStyles, {
                        styles: o
                    }), e) : (0, y.createElement)(y.Fragment, null, (0, y.createElement)(P.__unstableEditorStyles, {
                        styles: o
                    }), (0, y.createElement)(P.WritingFlow, {
                        ref: t,
                        className: "editor-styles-wrapper",
                        style: {
                            flex: "1",
                            ...r
                        },
                        tabIndex: -1
                    }, e))
                }

                function Ze({
                    styles: e
                }) {
                    const {
                        deviceType: t,
                        isWelcomeGuideVisible: n,
                        isTemplateMode: o,
                        postContentAttributes: r,
                        editedPostTemplate: i = {},
                        wrapperBlockName: s,
                        wrapperUniqueId: a
                    } = (0, C.useSelect)((e => {
                        const {
                            isFeatureActive: t
                        } = e("isolated/editor"), {
                            getCurrentPostId: n,
                            getCurrentPostType: o,
                            getEditorSettings: r
                        } = e(E.store);
                        let i;
                        i = "wp_block" === o() ? "core/block" : "core/post-content";
                        const s = r();
                        return {
                            deviceType: "Desktop",
                            isWelcomeGuideVisible: t("welcomeGuide"),
                            isTemplateMode: !1,
                            postContentAttributes: r().postContentAttributes,
                            editedPostTemplate: void 0,
                            wrapperBlockName: i,
                            wrapperUniqueId: n(),
                            isBlockBasedTheme: s.__unstableIsBlockBasedTheme
                        }
                    }), []), {
                        isCleanNewPost: l
                    } = (0, C.useSelect)(E.store), {
                        themeHasDisabledLayoutStyles: c,
                        themeSupportsLayout: d
                    } = (0, C.useSelect)((e => {
                        const t = e(P.store).getSettings();
                        return {
                            themeHasDisabledLayoutStyles: t.disableLayoutStyles,
                            themeSupportsLayout: t.supportsLayout,
                            isFocusMode: t.focusMode
                        }
                    }), []), u = {
                        height: "100%",
                        width: "100%",
                        margin: 0,
                        display: "flex",
                        flexFlow: "column",
                        background: "white"
                    }, p = {
                        ...u,
                        borderRadius: "2px 2px 0 0",
                        border: "1px solid #ddd",
                        borderBottom: 0
                    }, m = (0, P.__experimentalUseResizeCanvas)(t, o), f = (0, P.useSetting)("layout"), g = "is-" + t.toLowerCase() + "-preview";
                    let h, b = o ? p : u;
                    m && (b = m), m || o || (h = "40vh");
                    const v = (0, y.useRef)(),
                        w = (0, O.useMergeRefs)([v, (0, P.__unstableUseClipboardHandler)(), (0, P.__unstableUseTypewriter)(), (0, P.__unstableUseTypingObserver)(), (0, P.__unstableUseBlockSelectionClearer)()]),
                        S = (0, P.__unstableUseBlockSelectionClearer)(),
                        T = (0, y.useMemo)((() => o ? {
                            type: "default"
                        } : d ? {
                            ...f,
                            type: "constrained"
                        } : {
                            type: "default"
                        }), [o, d, f]),
                        x = (0, y.useMemo)((() => i?.content || i?.blocks ? i?.blocks ? getPostContentAttributes(i?.blocks) : getPostContentAttributes(parse("string" == typeof i?.content ? i?.content : "")) || {} : r), [i?.content, i?.blocks, r]),
                        A = x?.layout || {},
                        I = Ye(x, "core/post-content"),
                        M = k()({
                            "is-layout-flow": !d
                        }, d && I),
                        F = $e(x, "core/post-content", ".block-editor-block-list__layout.is-root-container"),
                        L = (0, y.useMemo)((() => A && ("constrained" === A?.type || A?.inherit || A?.contentSize || A?.wideSize) ? {
                            ...f,
                            ...A,
                            type: "constrained"
                        } : {
                            ...f,
                            ...A,
                            type: "default"
                        }), [A?.type, A?.inherit, A?.contentSize, A?.wideSize, f]),
                        R = r ? L : T,
                        B = (0, y.useRef)();
                    return (0, y.useEffect)((() => {
                        !n && l() && B?.current?.focus()
                    }), [n, l]), e = (0, y.useMemo)((() => [...e, {
                        css: ".edit-post-visual-editor__post-title-wrapper{margin-top:4rem}" + (h ? `body{padding-bottom:${h}}` : "")
                    }]), [e]), (0, y.createElement)(P.BlockTools, {
                        __unstableContentRef: v,
                        className: k()("edit-post-visual-editor", {
                            "is-template-mode": o
                        })
                    }, (0, y.createElement)(E.VisualEditorGlobalKeyboardShortcuts, null), (0, y.createElement)(_.__unstableMotion.div, {
                        className: "edit-post-visual-editor__content-area",
                        animate: {
                            padding: o ? "48px 48px 0" : 0
                        },
                        ref: S
                    }, (0, y.createElement)(_.__unstableMotion.div, {
                        animate: b,
                        initial: u,
                        className: g
                    }, (0, y.createElement)(Je, {
                        shouldIframe: o || "Tablet" === t || "Mobile" === t,
                        contentRef: w,
                        styles: e,
                        style: {}
                    }, d && !c && !o && (0, y.createElement)(y.Fragment, null, (0, y.createElement)(Ke, {
                        selector: ".edit-post-visual-editor__post-title-wrapper, .block-editor-block-list__layout.is-root-container",
                        layout: T,
                        layoutDefinitions: f?.definitions
                    }), F && (0, y.createElement)(Ke, {
                        layout: L,
                        css: F,
                        layoutDefinitions: f?.definitions
                    })), (0, y.createElement)(Ue.Slot, {
                        mode: "visual"
                    }), (0, y.createElement)(P.__experimentalRecursionProvider, {
                        blockName: s,
                        uniqueId: a
                    }, (0, y.createElement)(P.BlockList, {
                        className: o ? "wp-site-blocks" : `${M} wp-block-post-content`,
                        __experimentalLayout: R
                    })), (0, y.createElement)(je.Slot, {
                        mode: "visual"
                    })))))
                }
                var qe = n(42);
                class Xe extends y.Component {
                    constructor(e) {
                        super(e), this.edit = this.edit.bind(this), this.stopEditing = this.stopEditing.bind(this), this.state = {}
                    }
                    static getDerivedStateFromProps(e, t) {
                        return t.isDirty ? null : {
                            value: e.value,
                            isDirty: !1
                        }
                    }
                    edit(e) {
                        const t = e.target.value;
                        this.props.onChange(t), this.setState({
                            value: t,
                            isDirty: !0
                        })
                    }
                    stopEditing() {
                        this.state.isDirty && (this.props.onPersist(this.state.value), this.setState({
                            isDirty: !1
                        }))
                    }
                    render() {
                        const {
                            value: e
                        } = this.state, {
                            instanceId: t
                        } = this.props;
                        return (0, y.createElement)(y.Fragment, null, (0, y.createElement)("label", {
                            htmlFor: `post-content-${t}`,
                            className: "screen-reader-text"
                        }, (0, L.__)("Type text or HTML")), (0, y.createElement)(qe.Z, {
                            autoComplete: "off",
                            dir: "auto",
                            value: e,
                            onChange: this.edit,
                            onBlur: this.stopEditing,
                            className: "editor-post-text-editor",
                            id: `post-content-${t}`,
                            placeholder: (0, L.__)("Start writing with text or HTML")
                        }))
                    }
                }
                const Qe = (0, O.compose)([(0, C.withSelect)((e => {
                        const {
                            getBlocks: t
                        } = e("isolated/editor");
                        return {
                            value: (0, M.serialize)(t())
                        }
                    })), (0, C.withDispatch)((e => {
                        const {
                            updateBlocksWithoutUndo: t
                        } = e("isolated/editor");
                        return {
                            onChange(e) {
                                const n = (0, M.parse)(e);
                                t(n)
                            },
                            onPersist(e) {
                                const n = (0, M.parse)(e);
                                t(n)
                            }
                        }
                    })), O.withInstanceId])(Xe),
                    et = function({}) {
                        return (0, y.createElement)("div", {
                            className: "edit-post-text-editor"
                        }, (0, y.createElement)("div", {
                            className: "edit-post-text-editor__body"
                        }, (0, y.createElement)(Ue.Slot, {
                            mode: "text"
                        }), (0, y.createElement)(Qe, null), (0, y.createElement)(je.Slot, {
                            mode: "text"
                        })))
                    },
                    tt = (0, y.createElement)(R.SVG, {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }, (0, y.createElement)(R.Path, {
                        d: "M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"
                    })),
                    nt = (0, O.compose)([(0, C.withSelect)(((e, {
                        feature: t
                    }) => ({
                        isActive: e("isolated/editor").isFeatureActive(t)
                    }))), (0, C.withDispatch)(((e, t) => ({
                        onToggle() {
                            e("isolated/editor").toggleFeature(t.feature), t.onClose()
                        }
                    }))), _.withSpokenMessages])((function({
                        onToggle: e,
                        isActive: t,
                        label: n,
                        info: o,
                        messageActivated: r,
                        messageDeactivated: i,
                        speak: s
                    }) {
                        return (0, y.createElement)(_.MenuItem, {
                            icon: t && B,
                            isSelected: t,
                            onClick: (0, x.flow)(e, (() => {
                                s(t ? i || (0, L.__)("Feature deactivated") : r || (0, L.__)("Feature activated"))
                            })),
                            role: "menuitemcheckbox",
                            info: o
                        }, n)
                    })),
                    ot = (0, O.compose)([(0, C.withSelect)(((e, {
                        option: t
                    }) => ({
                        isActive: e("isolated/editor").isOptionActive(t)
                    }))), (0, C.withDispatch)(((e, t) => ({
                        onToggle() {
                            e("isolated/editor").toggleOption(t.option), t.onClose()
                        }
                    }))), _.withSpokenMessages])((function({
                        onToggle: e,
                        isActive: t,
                        label: n,
                        info: o
                    }) {
                        return (0, y.createElement)(_.MenuItem, {
                            icon: t && B,
                            isSelected: t,
                            onClick: e,
                            role: "menuitemcheckbox",
                            info: o
                        }, n)
                    })),
                    rt = function({
                        onClose: e,
                        settings: t
                    }) {
                        const {
                            preview: n,
                            fullscreen: o,
                            topToolbar: r
                        } = t?.iso?.moreMenu || {}, {
                            isFullscreen: i
                        } = (0, C.useSelect)((e => ({
                            isFullscreen: e("isolated/editor").isOptionActive("fullscreenMode")
                        })), []);
                        return o || n || r ? (0, y.createElement)(_.MenuGroup, {
                            label: (0, L._x)("View", "noun")
                        }, r && (0, y.createElement)(y.Fragment, null, (0, y.createElement)(nt, {
                            feature: "fixedToolbar",
                            label: (0, L.__)("Top toolbar"),
                            info: (0, L.__)("Access all block and document tools in a single place."),
                            messageActivated: (0, L.__)("Top toolbar activated"),
                            messageDeactivated: (0, L.__)("Top toolbar deactivated"),
                            onClose: e
                        })), o && (0, y.createElement)(ot, {
                            option: "fullscreenMode",
                            label: (0, L.__)("Fullscreen"),
                            info: (0, L.__)("Show editor fullscreen."),
                            onClose: e
                        }), n && !i && (0, y.createElement)(ot, {
                            option: "preview",
                            label: (0, L.__)("Preview"),
                            info: (0, L.__)("Preview the content before posting."),
                            onClose: e
                        })) : null
                    },
                    it = (0, O.compose)([(0, C.withSelect)((e => {
                        const {
                            getEditorMode: t
                        } = e("isolated/editor"), {
                            codeEditingEnabled: n
                        } = e("core/editor").getEditorSettings();
                        return {
                            editorMode: t(),
                            isCodeEditingEnabled: n
                        }
                    })), (0, C.withDispatch)((e => ({
                        onSetMode(t) {
                            e("isolated/editor").setEditorMode(t)
                        }
                    })))])((function({
                        onClose: e,
                        editorMode: t,
                        onSetMode: n,
                        isCodeEditingEnabled: o,
                        settings: r
                    }) {
                        const i = t => {
                            n(t), e()
                        };
                        return o && !1 !== r?.iso?.moreMenu && r?.iso?.moreMenu?.editor ? (0, y.createElement)(_.MenuGroup, {
                            label: (0, L._x)("Editor", "noun")
                        }, (0, y.createElement)(_.MenuItem, {
                            icon: "visual" === t && B,
                            isSelected: "visual" === t,
                            onClick: () => i("visual"),
                            role: "menuitemcheckbox"
                        }, (0, L.__)("Visual editor")), (0, y.createElement)(_.MenuItem, {
                            icon: "text" === t && B,
                            isSelected: "text" === t,
                            onClick: () => i("text"),
                            role: "menuitemcheckbox"
                        }, (0, L.__)("Code editor"))) : null
                    })),
                    st = function({
                        settings: e
                    }) {
                        const {
                            linkMenu: t = []
                        } = e.iso || {};
                        return 0 === t.length ? null : (0, y.createElement)(_.MenuGroup, {
                            label: (0, L.__)("Links")
                        }, t.map((({
                            title: e,
                            url: t
                        }) => (0, y.createElement)(_.MenuItem, {
                            key: e
                        }, (0, y.createElement)(_.ExternalLink, {
                            href: t
                        }, e)))))
                    },
                    at = {
                        className: "edit-post-more-menu__content",
                        position: "bottom left"
                    },
                    lt = {
                        tooltipPosition: "bottom"
                    },
                    ct = ({
                        settings: e,
                        onClick: t,
                        renderMoreMenu: n
                    }) => (0, y.createElement)(_.DropdownMenu, {
                        className: "edit-post-more-menu",
                        icon: tt,
                        label: (0, L.__)("More tools & options"),
                        popoverProps: at,
                        toggleProps: {
                            ...lt,
                            onClick: t
                        }
                    }, (({
                        onClose: t
                    }) => (0, y.createElement)(y.Fragment, null, n && n(e, t), (0, y.createElement)(it, {
                        onClose: t,
                        settings: e
                    }), (0, y.createElement)(rt, {
                        onClose: t,
                        settings: e
                    }), (0, y.createElement)(st, {
                        settings: e
                    })))),
                    dt = (0, y.createElement)(R.SVG, {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }, (0, y.createElement)(R.Path, {
                        d: "M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"
                    })),
                    ut = (0, y.createElement)(R.SVG, {
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, (0, y.createElement)(R.Path, {
                        d: "M3 6h11v1.5H3V6Zm3.5 5.5h11V13h-11v-1.5ZM21 17H10v1.5h11V17Z"
                    })),
                    pt = (0, y.createElement)(R.SVG, {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }, (0, y.createElement)(R.Path, {
                        d: "M15.6 6.5l-1.1 1 2.9 3.3H8c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.3-.5h9.2L14.5 15l1.1 1.1 4.6-4.6-4.6-5z"
                    })),
                    mt = (0, y.forwardRef)((function(e, t) {
                        const n = (0, C.useSelect)((e => e("isolated/editor").hasEditorRedo()), []),
                            {
                                redo: o
                            } = (0, C.useDispatch)("isolated/editor");
                        return (0, y.createElement)(_.Button, {
                            ...e,
                            ref: t,
                            icon: pt,
                            label: (0, L.__)("Redo"),
                            shortcut: F.displayShortcut.primaryShift("z"),
                            "aria-disabled": !n,
                            onClick: n ? o : void 0,
                            className: "editor-history__redo"
                        })
                    })),
                    ft = (0, y.createElement)(R.SVG, {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }, (0, y.createElement)(R.Path, {
                        d: "M18.3 11.7c-.6-.6-1.4-.9-2.3-.9H6.7l2.9-3.3-1.1-1-4.5 5L8.5 16l1-1-2.7-2.7H16c.5 0 .9.2 1.3.5 1 1 1 3.4 1 4.5v.3h1.5v-.2c0-1.5 0-4.3-1.5-5.7z"
                    })),
                    gt = (0, y.forwardRef)((function(e, t) {
                        const n = (0, C.useSelect)((e => e("isolated/editor").hasEditorUndo()), []),
                            {
                                undo: o
                            } = (0, C.useDispatch)("isolated/editor");
                        return (0, y.createElement)(_.Button, {
                            ...e,
                            ref: t,
                            icon: ft,
                            label: (0, L.__)("Undo"),
                            shortcut: F.displayShortcut.primary("z"),
                            "aria-disabled": !n,
                            onClick: n ? o : void 0,
                            className: "editor-history__undo"
                        })
                    })),
                    ht = window.wp.dom;

                function yt() {
                    return (0, y.createElement)(_.SVG, {
                        width: "138",
                        height: "148",
                        viewBox: "0 0 138 148",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, (0, y.createElement)(_.Rect, {
                        width: "138",
                        height: "148",
                        rx: "4",
                        fill: "#F0F6FC"
                    }), (0, y.createElement)(_.Line, {
                        x1: "44",
                        y1: "28",
                        x2: "24",
                        y2: "28",
                        stroke: "#DDDDDD"
                    }), (0, y.createElement)(_.Rect, {
                        x: "48",
                        y: "16",
                        width: "27",
                        height: "23",
                        rx: "4",
                        fill: "#DDDDDD"
                    }), (0, y.createElement)(_.Path, {
                        d: "M54.7585 32V23.2727H56.6037V26.8736H60.3494V23.2727H62.1903V32H60.3494V28.3949H56.6037V32H54.7585ZM67.4574 23.2727V32H65.6122V25.0241H65.5611L63.5625 26.277V24.6406L65.723 23.2727H67.4574Z",
                        fill: "black"
                    }), (0, y.createElement)(_.Line, {
                        x1: "55",
                        y1: "59",
                        x2: "24",
                        y2: "59",
                        stroke: "#DDDDDD"
                    }), (0, y.createElement)(_.Rect, {
                        x: "59",
                        y: "47",
                        width: "29",
                        height: "23",
                        rx: "4",
                        fill: "#DDDDDD"
                    }), (0, y.createElement)(_.Path, {
                        d: "M65.7585 63V54.2727H67.6037V57.8736H71.3494V54.2727H73.1903V63H71.3494V59.3949H67.6037V63H65.7585ZM74.6605 63V61.6705L77.767 58.794C78.0313 58.5384 78.2528 58.3082 78.4318 58.1037C78.6136 57.8991 78.7514 57.6989 78.8452 57.5028C78.9389 57.304 78.9858 57.0895 78.9858 56.8594C78.9858 56.6037 78.9276 56.3835 78.8111 56.1989C78.6946 56.0114 78.5355 55.8679 78.3338 55.7685C78.1321 55.6662 77.9034 55.6151 77.6477 55.6151C77.3807 55.6151 77.1477 55.669 76.9489 55.777C76.75 55.8849 76.5966 56.0398 76.4886 56.2415C76.3807 56.4432 76.3267 56.6832 76.3267 56.9616H74.5753C74.5753 56.3906 74.7045 55.8949 74.9631 55.4744C75.2216 55.054 75.5838 54.7287 76.0497 54.4986C76.5156 54.2685 77.0526 54.1534 77.6605 54.1534C78.2855 54.1534 78.8295 54.2642 79.2926 54.4858C79.7585 54.7045 80.1207 55.0085 80.3793 55.3977C80.6378 55.7869 80.767 56.233 80.767 56.7358C80.767 57.0653 80.7017 57.3906 80.571 57.7116C80.4432 58.0327 80.2145 58.3892 79.8849 58.7812C79.5554 59.1705 79.0909 59.6378 78.4915 60.1832L77.2173 61.4318V61.4915H80.8821V63H74.6605Z",
                        fill: "black"
                    }), (0, y.createElement)(_.Line, {
                        x1: "80",
                        y1: "90",
                        x2: "24",
                        y2: "90",
                        stroke: "#DDDDDD"
                    }), (0, y.createElement)(_.Rect, {
                        x: "84",
                        y: "78",
                        width: "30",
                        height: "23",
                        rx: "4",
                        fill: "#F0B849"
                    }), (0, y.createElement)(_.Path, {
                        d: "M90.7585 94V85.2727H92.6037V88.8736H96.3494V85.2727H98.1903V94H96.3494V90.3949H92.6037V94H90.7585ZM99.5284 92.4659V91.0128L103.172 85.2727H104.425V87.2841H103.683L101.386 90.919V90.9872H106.564V92.4659H99.5284ZM103.717 94V92.0227L103.751 91.3793V85.2727H105.482V94H103.717Z",
                        fill: "black"
                    }), (0, y.createElement)(_.Line, {
                        x1: "66",
                        y1: "121",
                        x2: "24",
                        y2: "121",
                        stroke: "#DDDDDD"
                    }), (0, y.createElement)(_.Rect, {
                        x: "70",
                        y: "109",
                        width: "29",
                        height: "23",
                        rx: "4",
                        fill: "#DDDDDD"
                    }), (0, y.createElement)(_.Path, {
                        d: "M76.7585 125V116.273H78.6037V119.874H82.3494V116.273H84.1903V125H82.3494V121.395H78.6037V125H76.7585ZM88.8864 125.119C88.25 125.119 87.6832 125.01 87.1861 124.791C86.6918 124.57 86.3011 124.266 86.0142 123.879C85.7301 123.49 85.5838 123.041 85.5753 122.533H87.4332C87.4446 122.746 87.5142 122.933 87.642 123.095C87.7727 123.254 87.946 123.378 88.1619 123.466C88.3778 123.554 88.6207 123.598 88.8906 123.598C89.1719 123.598 89.4205 123.548 89.6364 123.449C89.8523 123.349 90.0213 123.212 90.1435 123.036C90.2656 122.859 90.3267 122.656 90.3267 122.426C90.3267 122.193 90.2614 121.987 90.1307 121.808C90.0028 121.626 89.8182 121.484 89.5767 121.382C89.3381 121.28 89.054 121.229 88.7244 121.229H87.9105V119.874H88.7244C89.0028 119.874 89.2486 119.825 89.4616 119.729C89.6776 119.632 89.8452 119.499 89.9645 119.328C90.0838 119.155 90.1435 118.953 90.1435 118.723C90.1435 118.504 90.0909 118.312 89.9858 118.148C89.8835 117.98 89.7386 117.849 89.5511 117.756C89.3665 117.662 89.1506 117.615 88.9034 117.615C88.6534 117.615 88.4247 117.661 88.2173 117.751C88.0099 117.839 87.8438 117.966 87.7188 118.131C87.5938 118.295 87.527 118.489 87.5185 118.71H85.75C85.7585 118.207 85.902 117.764 86.1804 117.381C86.4588 116.997 86.8338 116.697 87.3054 116.482C87.7798 116.263 88.3153 116.153 88.9119 116.153C89.5142 116.153 90.0412 116.263 90.4929 116.482C90.9446 116.7 91.2955 116.996 91.5455 117.368C91.7983 117.737 91.9233 118.152 91.9205 118.612C91.9233 119.101 91.7713 119.509 91.4645 119.835C91.1605 120.162 90.7642 120.369 90.2756 120.457V120.526C90.9176 120.608 91.4063 120.831 91.7415 121.195C92.0795 121.555 92.2472 122.007 92.2443 122.55C92.2472 123.047 92.1037 123.489 91.8139 123.875C91.527 124.261 91.1307 124.565 90.625 124.787C90.1193 125.009 89.5398 125.119 88.8864 125.119Z",
                        fill: "black"
                    }))
                }

                function bt() {
                    const {
                        headingCount: e
                    } = (0, C.useSelect)((e => {
                        const {
                            getGlobalBlockCount: t
                        } = e(P.store);
                        return {
                            headingCount: t("core/heading")
                        }
                    }), []);
                    return (0, y.createElement)(y.Fragment, null, (0, y.createElement)("div", {
                        className: "edit-post-editor__list-view-overview"
                    }, (0, y.createElement)("div", null, (0, y.createElement)(_.__experimentalText, null, (0, L.__)("Characters:")), (0, y.createElement)(_.__experimentalText, null, (0, y.createElement)(E.CharacterCount, null))), (0, y.createElement)("div", null, (0, y.createElement)(_.__experimentalText, null, (0, L.__)("Words:")), (0, y.createElement)(E.WordCount, null)), (0, y.createElement)("div", null, (0, y.createElement)(_.__experimentalText, null, (0, L.__)("Time to read:")), (0, y.createElement)(E.TimeToRead, null))), e > 0 ? (0, y.createElement)(E.DocumentOutline, null) : (0, y.createElement)("div", {
                        className: "edit-post-editor__list-view-empty-headings"
                    }, (0, y.createElement)(yt, null), (0, y.createElement)("p", null, (0, L.__)("Navigate the structure of your document and address issues like empty or incorrect heading levels."))))
                }

                function Et({
                    canClose: e = !0
                }) {
                    const {
                        setIsListViewOpened: t
                    } = (0, C.useDispatch)("isolated/editor"), n = (0, O.useFocusOnMount)("firstElement"), o = (0, O.useFocusReturn)(), r = (0, O.useFocusReturn)(), [i, s] = (0, y.useState)("list-view"), a = (0, y.useRef)(), l = (0, y.useRef)(), c = (0, y.useRef)(), d = (0, y.useRef)();
                    return (0, S.useShortcut)("core/edit-post/toggle-list-view", (() => {
                        a.current.contains(a.current.ownerDocument.activeElement) ? t(!1) : function(e) {
                            if ("list-view" === e) {
                                const e = ht.focus.tabbable.find(d.current)[0];
                                (a.current.contains(e) ? e : l.current).focus()
                            } else c.current.focus()
                        }(i)
                    })), (0, y.createElement)("div", {
                        "aria-label": (0, L.__)("Document Overview"),
                        className: "edit-post-editor__document-overview-panel",
                        onKeyDown: function(e) {
                            e.keyCode !== F.ESCAPE || e.defaultPrevented || (e.preventDefault(), t(!1))
                        },
                        ref: a
                    }, (0, y.createElement)("div", {
                        className: "edit-post-editor__document-overview-panel-header components-panel__header edit-post-sidebar__panel-tabs",
                        ref: o
                    }, e && (0, y.createElement)(_.Button, {
                        icon: V,
                        label: (0, L.__)("Close Document Overview Sidebar"),
                        onClick: () => t(!1)
                    }), (0, y.createElement)("ul", null, (0, y.createElement)("li", null, (0, y.createElement)(_.Button, {
                        ref: l,
                        onClick: () => {
                            s("list-view")
                        },
                        className: k()("edit-post-sidebar__panel-tab", {
                            "is-active": "list-view" === i
                        }),
                        "aria-current": "list-view" === i
                    }, (0, L.__)("List View"))), (0, y.createElement)("li", null, (0, y.createElement)(_.Button, {
                        ref: c,
                        onClick: () => {
                            s("outline")
                        },
                        className: k()("edit-post-sidebar__panel-tab", {
                            "is-active": "outline" === i
                        }),
                        "aria-current": "outline" === i
                    }, (0, L.__)("Outline"))))), (0, y.createElement)("div", {
                        ref: (0, O.useMergeRefs)([r, n, d]),
                        className: "edit-post-editor__list-view-container"
                    }, "list-view" === i && (0, y.createElement)("div", {
                        className: "edit-post-editor__list-view-panel-content"
                    }, (0, y.createElement)(P.__experimentalListView, null)), "outline" === i && (0, y.createElement)(bt, null)))
                }
                const vt = (0, y.forwardRef)((function({
                        isDisabled: e,
                        ...t
                    }, n) {
                        const o = (0, C.useSelect)((e => !!e(P.store).getBlockCount()), []) && !e;
                        return (0, y.createElement)(_.Dropdown, {
                            contentClassName: "block-editor-block-navigation__popover",
                            position: "bottom right",
                            renderToggle: ({
                                isOpen: e,
                                onToggle: r
                            }) => (0, y.createElement)(_.Button, {
                                ...t,
                                ref: n,
                                icon: ut,
                                "aria-expanded": e,
                                "aria-haspopup": "true",
                                onClick: o ? r : void 0
                                    /* translators: button label text should, if possible, be under 16 characters. */
                                    ,
                                label: (0, L.__)("List view"),
                                className: "block-editor-block-navigation",
                                "aria-disabled": !o
                            }),
                            renderContent: () => (0, y.createElement)(Et, {
                                canClose: !1
                            })
                        })
                    })),
                    _t = e => {
                        e.preventDefault()
                    },
                    wt = function(e) {
                        const t = (0, y.useRef)(),
                            {
                                setIsInserterOpened: n,
                                setIsListViewOpened: o
                            } = (0, C.useDispatch)("isolated/editor"),
                            r = (0, O.useViewportMatch)("medium", "<"),
                            {
                                hasFixedToolbar: i,
                                isInserterEnabled: s,
                                isTextModeEnabled: a,
                                showIconLabels: l,
                                previewDeviceType: c,
                                isInserterOpened: d,
                                isListViewOpen: u,
                                listViewShortcut: p
                            } = (0, C.useSelect)((e => {
                                const {
                                    hasInserterItems: t,
                                    getBlockRootClientId: n,
                                    getBlockSelectionEnd: o
                                } = e("core/block-editor"), {
                                    isListViewOpened: r
                                } = e("isolated/editor"), {
                                    getShortcutRepresentation: i
                                } = e(S.store);
                                return {
                                    hasFixedToolbar: e("isolated/editor").isFeatureActive("fixedToolbar"),
                                    isInserterEnabled: "visual" === e("isolated/editor").getEditorMode() && e("core/editor").getEditorSettings().richEditingEnabled && t(n(o())),
                                    isListViewOpen: r(),
                                    isTextModeEnabled: "text" === e("isolated/editor").getEditorMode(),
                                    previewDeviceType: "Desktop",
                                    isInserterOpened: e("isolated/editor").isInserterOpened(),
                                    showIconLabels: !1,
                                    listViewShortcut: i("core/edit-post/toggle-list-view")
                                }
                            }), []),
                            m = (0, O.useViewportMatch)("medium"),
                            {
                                inserter: f,
                                navigation: g,
                                undo: h,
                                selectorTool: b
                            } = e.settings.iso.toolbar,
                            E = e.settings?.iso?.sidebar?.inserter || !1,
                            v = !m || "Desktop" !== c || i ? /* translators: accessibility text for the editor toolbar when Top Toolbar is on */
                            (0, L.__)("Document and block tools") : /* translators: accessibility text for the editor toolbar when Top Toolbar is off */
                            (0, L.__)("Document tools"),
                            w = (0, y.useCallback)((() => {
                                n(!d)
                            }), [d, n]),
                            T = (0, y.useCallback)((() => o(!u)), [o, u]);
                        return (0, y.createElement)(P.NavigableToolbar, {
                            className: "edit-post-header-toolbar",
                            "aria-label": v
                        }, (f || h || g || b) && (0, y.createElement)("div", {
                            className: "edit-post-header-toolbar__left"
                        }, f && (0, y.createElement)(_.ToolbarItem, {
                            ref: t,
                            as: _.Button,
                            className: "edit-post-header-toolbar__inserter-toggle",
                            isPressed: d,
                            onMouseDown: _t,
                            onClick: w,
                            disabled: !s,
                            isPrimary: !0,
                            icon: dt
                                /* translators: button label text should, if possible, be under 16
                                    characters. */
                                ,
                            label: (0, L._x)("Toggle block inserter", "Generic label for block inserter button"),
                            showTooltip: !l
                        }), d && !E && (0, y.createElement)(_.Popover, {
                            position: "bottom right",
                            onClose: () => n(!1),
                            anchor: t.current
                        }, (0, y.createElement)(P.__experimentalLibrary, {
                            showMostUsedBlocks: !1,
                            showInserterHelpPanel: !0,
                            onSelect: () => {
                                r && n(!1)
                            }
                        })), b && (0, y.createElement)(P.ToolSelector, null), h && (0, y.createElement)(_.ToolbarItem, {
                            as: gt,
                            showTooltip: !l,
                            variant: l ? "tertiary" : void 0
                        }), h && (0, y.createElement)(_.ToolbarItem, {
                            as: mt,
                            showTooltip: !l,
                            variant: l ? "tertiary" : void 0
                        }), g && !E && (0, y.createElement)(_.ToolbarItem, {
                            as: vt,
                            isDisabled: a
                        }), g && E && (0, y.createElement)(_.ToolbarItem, {
                            as: _.Button,
                            className: "edit-post-header-toolbar__list-view-toggle",
                            icon: ut,
                            disabled: a,
                            isPressed: u
                                /* translators: button label text should, if possible, be under 16 characters. */
                                ,
                            label: (0, L.__)("List View"),
                            onClick: T,
                            shortcut: p,
                            showTooltip: !l
                        })))
                    },
                    Ct = function({
                        button: e,
                        onToggle: t
                    }) {
                        return (0, y.createElement)(_.Popover, {
                            position: "bottom left",
                            className: "iso-inspector",
                            anchor: e?.current,
                            onFocusOutside: function(e) {
                                null !== e.target.closest(".block-editor-block-inspector") || e.target.classList.contains("iso-inspector") || (t(!1), e.preventDefault(), e.stopPropagation())
                            }
                        }, (0, y.createElement)(Ee.Slot, {
                            scope: "isolated/editor"
                        }))
                    },
                    {
                        Fill: St,
                        Slot: Tt
                    } = (0, _.createSlotFill)("IsolatedToolbar"),
                    kt = ({
                        children: e
                    }) => (0, y.createElement)(St, null, e);
                kt.Slot = function(e) {
                    return (0, y.createElement)(Tt, null, (e => e))
                };
                const Ot = kt,
                    xt = e => {
                        const t = (0, y.useRef)(null),
                            {
                                settings: n,
                                editorMode: o,
                                renderMoreMenu: r
                            } = e,
                            i = (0, O.useViewportMatch)("huge", ">="),
                            {
                                inspector: s
                            } = n.iso?.toolbar || {},
                            {
                                moreMenu: a
                            } = n.iso || {},
                            l = n?.iso?.sidebar?.inspector || !1,
                            {
                                openGeneralSidebar: c,
                                closeGeneralSidebar: d
                            } = (0, C.useDispatch)("isolated/editor"),
                            {
                                setIsInserterOpened: u
                            } = (0, C.useDispatch)("isolated/editor"),
                            {
                                isEditorSidebarOpened: p,
                                isBlockSelected: m,
                                hasBlockSelected: f,
                                isInserterOpened: g,
                                isEditing: h
                            } = (0, C.useSelect)((e => ({
                                isEditing: e("isolated/editor"),
                                isEditorSidebarOpened: e("isolated/editor").isEditorSidebarOpened(),
                                isBlockSelected: !!e("core/block-editor").getBlockSelectionStart(),
                                hasBlockSelected: !!e("core/block-editor").getBlockSelectionStart(),
                                isInserterOpened: e("isolated/editor").isInserterOpened()
                            })), []);

                        function b(e) {
                            e ? c(f ? "edit-post/block" : "edit-post/document") : d()
                        }
                        return (0, y.useEffect)((() => {
                            l || d()
                        }), []), (0, y.useEffect)((() => {
                            l || h || m || !p || d()
                        }), [h]), (0, y.useEffect)((() => {
                            p && !i && u(!1)
                        }), [p, i]), (0, y.useEffect)((() => {
                            !g || i && l || d()
                        }), [g, i]), (0, y.createElement)("div", {
                            className: "edit-post-editor-regions__header",
                            role: "region",
                            tabIndex: -1
                        }, (0, y.createElement)("div", {
                            className: "edit-post-header"
                        }, (0, y.createElement)("div", {
                            className: "edit-post-header__toolbar"
                        }, (0, y.createElement)(wt, {
                            settings: n
                        })), (0, y.createElement)("div", {
                            className: "edit-post-header__settings",
                            ref: t
                        }, (0, y.createElement)(Ot.Slot, null), s && (0, y.createElement)(_.Button, {
                            icon: Se,
                            label: (0, L.__)("Settings"),
                            onClick: () => b(!p),
                            isPressed: p,
                            "aria-expanded": p,
                            disabled: "text" === o
                        }), p && !l && (0, y.createElement)(Ct, {
                            button: t,
                            onToggle: b
                        }), a && (0, y.createElement)(ct, {
                            settings: n,
                            onClick: () => d(),
                            renderMoreMenu: r
                        }))))
                    },
                    At = (0, y.createElement)(R.SVG, {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }, (0, y.createElement)(R.Path, {
                        d: "M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"
                    }));

                function It() {
                    const {
                        setIsInserterOpened: e
                    } = (0, C.useDispatch)("isolated/editor"), t = (0, O.useViewportMatch)("medium", "<"), n = t ? "div" : _.VisuallyHidden, [o, r] = (0, O.__experimentalUseDialog)({
                        onClose: () => e(!1),
                        focusOnMount: null
                    });
                    return (0, y.createElement)("div", {
                        ref: o,
                        ...r,
                        className: "edit-post-editor__inserter-panel"
                    }, (0, y.createElement)(n, {
                        className: "edit-post-editor__inserter-panel-header"
                    }, (0, y.createElement)(_.Button, {
                        icon: At,
                        onClick: () => e(!1)
                    })), (0, y.createElement)("div", {
                        className: "edit-post-editor__inserter-panel-content"
                    }, (0, y.createElement)(P.__experimentalLibrary, {
                        showMostUsedBlocks: !1,
                        showInserterHelpPanel: !0,
                        shouldFocusBlock: t
                    })))
                }
                const Mt = ({
                        editorMode: e
                    }) => {
                        const t = (0, O.useViewportMatch)("medium", "<"),
                            {
                                showBlockBreadcrumbs: n,
                                documentLabel: o
                            } = (0, C.useSelect)((e => {
                                const {
                                    getPostTypeLabel: t
                                } = e(E.store), n = t(), {
                                    isFeatureActive: o
                                } = e("isolated/editor");
                                return {
                                    hasFixedToolbar: o("fixedToolbar"),
                                    showBlockBreadcrumbs: !1,
                                    // translators: Default label for the Document in the Block Breadcrumb.
                                    documentLabel: n || (0, L._x)("Document", "noun")
                                }
                            }), []);
                        return (0, y.createElement)("div", {
                            className: "edit-post-layout__footer"
                        }, n && !t && "visual" === e && (0, y.createElement)(P.BlockBreadcrumb, {
                            rootLabelText: o
                        }), (0, y.createElement)(je.Slot, null))
                    },
                    {
                        Fill: Pt,
                        Slot: Ft
                    } = (0, _.createSlotFill)("IsolatedFooter"),
                    Lt = ({
                        children: e
                    }) => (0, y.createElement)(Pt, null, e);
                Lt.Slot = function() {
                    return (0, y.createElement)(Ft, null, (e => e))
                };
                const Rt = Lt,
                    Bt = {
                        secondarySidebar: (0, L.__)("Block library"),
                        /* translators: accessibility text for the editor top bar landmark region. */
                        header: (0, L.__)("Editor top bar"),
                        /* translators: accessibility text for the editor content landmark region. */
                        body: (0, L.__)("Editor content"),
                        /* translators: accessibility text for the editor settings landmark region. */
                        sidebar: (0, L.__)("Editor settings"),
                        /* translators: accessibility text for the editor publish landmark region. */
                        actions: (0, L.__)("Editor publish"),
                        /* translators: accessibility text for the editor footer landmark region. */
                        footer: (0, L.__)("Editor footer")
                    },
                    Dt = (0, C.withDispatch)((e => {
                        const {
                            redo: t,
                            undo: n
                        } = e("isolated/editor");
                        return {
                            redo: t,
                            undo: n
                        }
                    }))((function(e) {
                        var t, n, o;
                        const {
                            isEditing: r,
                            editorMode: i,
                            children: s,
                            undo: a,
                            redo: l,
                            settings: c,
                            renderMoreMenu: d
                        } = e, u = (0, O.useViewportMatch)("medium", "<"), p = c?.iso?.sidebar?.inspector || !1, m = c?.iso?.sidebar?.inserter || !1, f = null === (t = c?.iso?.header) || void 0 === t || t, g = c?.iso?.footer || !1, {
                            sidebarIsOpened: h,
                            hasFixedToolbar: b,
                            isInserterOpened: v,
                            isListViewOpened: w,
                            showIconLabels: T,
                            isFullscreenActive: x,
                            previousShortcut: A,
                            nextShortcut: I
                        } = (0, C.useSelect)((e => {
                            const {
                                isFeatureActive: t,
                                isInserterOpened: n,
                                isListViewOpened: o,
                                isOptionActive: r
                            } = e("isolated/editor");
                            return {
                                sidebarIsOpened: !!e(se).getActiveComplementaryArea("isolated/editor"),
                                hasFixedToolbar: t("fixedToolbar"),
                                isInserterOpened: n(),
                                isListViewOpened: o(),
                                isFullscreenActive: r("fullscreenMode"),
                                showIconLabels: t("showIconLabels"),
                                previousShortcut: e(S.store).getAllShortcutKeyCombinations("core/edit-post/previous-region"),
                                nextShortcut: e(S.store).getAllShortcutKeyCombinations("core/edit-post/next-region")
                            }
                        }), []), M = k()("edit-post-layout", "is-mode-" + i, {
                            "is-sidebar-opened": h,
                            "has-fixed-toolbar": b,
                            "show-icon-labels": T
                        });
                        (0, y.useEffect)((() => {
                            const e = document.querySelector("html");
                            return x ? e.classList.add("is-fullscreen-mode") : e.classList.remove("is-fullscreen-mode"), () => {
                                e && e.classList.remove("is-fullscreen-mode")
                            }
                        }), [x]);
                        const L = f ? (0, y.createElement)(xt, {
                                editorMode: i,
                                settings: c,
                                renderMoreMenu: d
                            }) : null,
                            R = null !== (n = c?.iso?.sidebar?.customComponent) && void 0 !== n ? n : Le;
                        return (0, y.createElement)(y.Fragment, null, (0, y.createElement)(R, {
                            documentInspector: null !== (o = c?.iso?.toolbar?.documentInspector) && void 0 !== o && o
                        }), (0, y.createElement)(ve, {
                            isActive: x
                        }), (0, y.createElement)(Ce, {
                            className: M,
                            labels: Bt,
                            header: L,
                            secondarySidebar: m ? "visual" === i && v ? (0, y.createElement)(It, null) : "visual" === i && w ? (0, y.createElement)(Et, null) : null : null,
                            sidebar: (!u || h) && p && (0, y.createElement)(Ee.Slot, {
                                scope: "isolated/editor"
                            }),
                            notices: (0, y.createElement)(E.EditorSnackbars, null),
                            content: (0, y.createElement)(y.Fragment, null, (0, y.createElement)(E.EditorNotices, null), r && (0, y.createElement)(y.Fragment, null, (0, y.createElement)(P.BlockEditorKeyboardShortcuts, null), (0, y.createElement)(P.BlockEditorKeyboardShortcuts.Register, null)), (0, y.createElement)(_.KeyboardShortcuts, {
                                bindGlobal: !1,
                                shortcuts: {
                                    [F.rawShortcut.primary("z")]: a,
                                    [F.rawShortcut.primaryShift("z")]: l
                                }
                            }, "visual" === i && (0, y.createElement)(Ze, {
                                styles: []
                            }), "text" === i && (0, y.createElement)(et, null)), s),
                            footer: g && (0, y.createElement)(Mt, {
                                editorMode: i
                            }),
                            actions: (0, y.createElement)(Rt.Slot, null),
                            shortcuts: {
                                previous: A,
                                next: I
                            }
                        }))
                    })),
                    Nt = (0, O.compose)([(0, C.withSelect)(((e, t) => {
                        var n;
                        const {
                            getBlocks: o,
                            getEditorSelection: r,
                            getEditorMode: i,
                            isEditing: s
                        } = e("isolated/editor");
                        return {
                            blocks: null !== (n = t.blocks) && void 0 !== n ? n : o(),
                            selection: r(),
                            isEditing: s(),
                            editorMode: i()
                        }
                    })), (0, C.withDispatch)(((e, t) => {
                        const {
                            updateBlocksWithUndo: n,
                            updateBlocksWithoutUndo: o
                        } = e("isolated/editor"), {
                            onInput: r,
                            onChange: i
                        } = t;
                        return {
                            onChange: (...e) => {
                                i?.(...e), n(...e)
                            },
                            onInput: (...e) => {
                                r?.(...e), o(...e)
                            }
                        }
                    }))])((function(e) {
                        const {
                            blocks: t,
                            onInput: n,
                            onChange: o,
                            selection: r,
                            isEditing: i,
                            editorMode: s
                        } = e, {
                            children: a,
                            settings: l,
                            renderMoreMenu: c,
                            onLoad: d
                        } = e;
                        return (0, y.useEffect)((() => {
                            (async () => {
                                const e = await async function(e, t) {
                                    var n;
                                    return (!(n = t) || "object" != typeof n && "function" != typeof n || "function" != typeof n.then ? new Promise((e => {
                                        e(t ? t(M.parse, M.rawHandler) : [])
                                    })) : t).then((t => function(e, t, n, o) {
                                        if (void 0 === e) return o;
                                        if (o && o.length > 0) return o;
                                        if (t) {
                                            const n = ((e, t) => e && e.find((e => e.name === t)))(e, t);
                                            if (n) return (0, M.parse)(n.content)
                                        }
                                        return n ? (0, M.synchronizeBlocksWithTemplate)(o, n) : []
                                    }(e.iso.patterns, e.iso.currentPattern, e.editor.template, t)))
                                }(l, d);
                                e.length > 0 && (!t || 0 === t.length) && n(e, {
                                    isInitialContent: !0
                                })
                            })()
                        }), []), (0, y.createElement)(P.BlockEditorProvider, {
                            value: t || [],
                            onInput: n,
                            onChange: o,
                            useSubRegistry: !1,
                            selection: r,
                            settings: l.editor
                        }, (0, y.createElement)(Dt, {
                            isEditing: i,
                            editorMode: s,
                            settings: l,
                            renderMoreMenu: c
                        }, a), (0, y.createElement)(_.Popover.Slot, null))
                    }));

                function Ut(e, t) {
                    const n = ["core/block-editor", "core/editor"];
                    return {
                        dispatch: t => null === Ut.targetDispatch || -1 === n.indexOf(t) ? e.dispatch(t) : Ut.targetDispatch(t),
                        select: t => null === Ut.targetSelect || -1 === n.indexOf(t) ? e.select(t) : Ut.targetSelect(t)
                    }
                }
                Ut.targetSelect = null, Ut.targetDispatch = null, Ut.setEditor = function(e, t) {
                    this.targetSelect = e, this.targetDispatch = t
                }, Ut.resetEditor = function() {
                    this.targetSelect = null, this.targetDispatch = null
                };
                const Vt = Ut,
                    Ht = (0, O.compose)([(0, C.withSelect)((e => {
                        const {
                            isEditing: t
                        } = e("isolated/editor");
                        return {
                            isEditing: t()
                        }
                    })), (0, C.withDispatch)(((e, t, {
                        select: n
                    }) => ({
                        hotSwap: t => {
                            Vt.resetEditor(), t && Vt.setEditor(n, e)
                        }
                    })))])((function({
                        isEditing: e,
                        hotSwap: t
                    }) {
                        return (0, y.useEffect)((() => {
                            t(e)
                        }), [e]), null
                    })),
                    zt = (0, O.compose)([(0, C.withSelect)((e => {
                        const {
                            isEditorReady: t,
                            getEditorMode: n,
                            isEditing: o,
                            isFeatureActive: r,
                            isOptionActive: i
                        } = e("isolated/editor");
                        return {
                            isEditorReady: t(),
                            editorMode: n(),
                            isEditing: o(),
                            hasFixedToolbar: r("fixedToolbar"),
                            isPreview: i("preview")
                        }
                    })), (0, C.withDispatch)((e => {
                        const {
                            setEditing: t
                        } = e("isolated/editor");
                        return {
                            setEditing: t
                        }
                    }))])((function(e) {
                        const {
                            children: t,
                            settings: n,
                            className: o,
                            onError: r,
                            renderMoreMenu: i,
                            onLoad: s,
                            onInput: a,
                            onChange: l,
                            blocks: c
                        } = e, {
                            isEditorReady: d,
                            editorMode: u,
                            isEditing: p,
                            setEditing: m,
                            hasFixedToolbar: f,
                            isPreview: g
                        } = e, [h, {
                            width: b
                        }] = (0, O.useResizeObserver)(), v = k()(o, {
                            "iso-editor": !0,
                            "is-large": !!b && b >= 720,
                            "is-medium": !b || b >= 480 && b < 720,
                            "is-small": !!b && b < 480,
                            "iso-editor__loading": !d,
                            "iso-editor__selected": p,
                            "block-editor": !0,
                            "edit-post-layout": !0,
                            "has-fixed-toolbar": f,
                            ["is-mode-" + u]: !0,
                            "is-preview-mode": g
                        });
                        return (0, y.createElement)("div", {
                            className: v
                        }, (0, y.createElement)(E.ErrorBoundary, {
                            onError: r
                        }, (0, y.createElement)(Ht, null), h, (0, y.createElement)(I, {
                            onOutside: () => m(!1),
                            onFocus: () => !p && m(!0)
                        }, (0, y.createElement)(Nt, {
                            blocks: c,
                            settings: n,
                            renderMoreMenu: i,
                            onLoad: s,
                            onInput: a,
                            onChange: l
                        }, t))))
                    }));
                var jt = n(90);
                const Wt = window.wp.isShallowEqual;
                var Gt = n.n(Wt);
                const Kt = {
                    editCount: 0,
                    selection: null,
                    blocks: null
                };

                function Yt(e, t) {
                    return e.find((e => e.clientId === t.clientId))
                }

                function $t(e, t) {
                    const {
                        type: n,
                        selection: o
                    } = e;
                    if ("UPDATE_BLOCKS_WITHOUT_UNDO" === n) return !1;
                    if (!o) return !0;
                    if (Gt()(o, t.selection)) {
                        const n = Yt(t.blocks, o.selectionStart),
                            r = Yt(e.blocks, o.selectionStart);
                        if (n && r && Gt()(n.attributes, r.attributes)) return !1
                    }
                    return !0
                }
                const Jt = (0, jt.ZP)(((e = Kt, t) => {
                        switch (t.type) {
                            case "UPDATE_BLOCKS_WITHOUT_UNDO":
                            case "UPDATE_BLOCKS_WITH_UNDO":
                                return {
                                    ...e, editCount: $t(t, e) ? e.editCount + 1 : e.editCount, blocks: t.blocks, selection: t.selection
                                }
                        }
                        return e
                    }), {
                        groupBy: (e, t, n) => t.editCount
                    }),
                    Zt = {
                        * undo() {
                            return yield jt.zF.undo()
                        },
                        * redo() {
                            return yield jt.zF.redo()
                        },
                        * updateBlocksWithUndo(e, t = {}) {
                            return yield {
                                type: "UPDATE_BLOCKS_WITH_UNDO",
                                blocks: e,
                                ...t
                            }
                        },
                        * updateBlocksWithoutUndo(e, t = {}) {
                            return yield {
                                type: "UPDATE_BLOCKS_WITHOUT_UNDO",
                                blocks: e,
                                ...t
                            }
                        }
                    },
                    qt = {
                        editorMode: "visual",
                        isInserterOpened: !1,
                        isEditing: !1,
                        isListViewOpened: !1,
                        isReady: !1,
                        patterns: [],
                        currentPattern: null,
                        gutenbergTemplate: null,
                        ignoredContent: [],
                        deviceType: "Desktop",
                        canvasStyles: null,
                        isIframePreview: !1,
                        settings: {
                            preferencesKey: null,
                            persistenceKey: null,
                            blocks: {
                                allowBlocks: [],
                                disallowBlocks: []
                            },
                            disallowEmbed: [],
                            customStores: [],
                            toolbar: {
                                inserter: !0,
                                undo: !0,
                                inspector: !0,
                                navigation: !1,
                                documentInspector: !1,
                                selectorTool: !1
                            },
                            sidebar: {
                                inspector: !1,
                                inserter: !1
                            },
                            moreMenu: {
                                editor: !1,
                                fullscreen: !1,
                                preview: !1,
                                topToolbar: !1
                            },
                            linkMenu: [],
                            currentPattern: null,
                            patterns: [],
                            defaultPreferences: {},
                            allowApi: !1,
                            disableCanvasAnimations: !1
                        }
                    };

                function Xt(e, t, n) {
                    const o = [(0, M.serialize)((0, M.createBlock)("core/paragraph")), (0, M.serialize)((0, M.createBlock)("core/paragraph", {
                            className: ""
                        }))],
                        r = ((e, t) => e && e.find((e => e.name === t)))(e, t);
                    return r && o.push((0, M.serialize)((0, M.parse)(r.content))), n && o.push((0, M.serialize)((0, M.synchronizeBlocksWithTemplate)([], n))), o
                }
                const Qt = (e = qt, t) => {
                        switch (t.type) {
                            case "SETUP_EDITOR": {
                                const {
                                    currentPattern: n,
                                    patterns: o
                                } = t.settings.iso;
                                return {
                                    ...e,
                                    patterns: o,
                                    currentPattern: n,
                                    ignoredContent: Xt(o, n, t.settings.editor.template),
                                    gutenbergTemplate: t.settings.editor.template,
                                    settings: {
                                        ...e.settings,
                                        ...t.settings.iso
                                    }
                                }
                            }
                            case "SET_CURRENT_PATTERN":
                                return {
                                    ...e, currentPattern: t.pattern, ignoredContent: Xt(e.patterns, t.pattern, e.gutenbergTemplate)
                                };
                            case "SET_EDITOR_MODE":
                                return {
                                    ...e, editorMode: t.editorMode
                                };
                            case "SET_INSERTER_OPEN":
                                return {
                                    ...e, isInserterOpened: t.isOpen, isInspectorOpened: !1, isListViewOpened: !1
                                };
                            case "SET_INSPECTOR_OPEN":
                                return {
                                    ...e, isInspectorOpened: t.isOpen, isListViewOpened: !1
                                };
                            case "SET_LISTVIEW_OPEN":
                                return {
                                    ...e, isInserterOpened: !1, isInspectorOpened: !1, isListViewOpened: t.isOpen
                                };
                            case "SET_EDITING":
                                return {
                                    ...e, isEditing: t.isEditing
                                };
                            case "SET_EDITOR_READY":
                                return {
                                    ...e, isReady: t.isReady
                                };
                            case "SET_DEVICE_TYPE":
                                return {
                                    ...e, deviceType: t.deviceType
                                };
                            case "SET_CANVAS_STYLES":
                                return {
                                    ...e, canvasStyles: t.canvasStyles
                                };
                            case "SET_IFRAME_PREVIEW":
                                return {
                                    ...e, isIframePreview: t.isIframePreview
                                }
                        }
                        return e
                    },
                    en = {
                        setReady: e => ({
                            type: "SET_EDITOR_READY",
                            isReady: e
                        }),
                        setEditorMode: e => ({
                            type: "SET_EDITOR_MODE",
                            editorMode: e
                        }),
                        setupEditor: e => ({
                            type: "SETUP_EDITOR",
                            settings: e
                        }),
                        setCurrentPattern: e => ({
                            type: "SET_CURRENT_PATTERN",
                            pattern: e
                        }),
                        setIsInserterOpened: e => ({
                            type: "SET_INSERTER_OPEN",
                            isOpen: e
                        }),
                        setDeviceType: e => ({
                            type: "SET_DEVICE_TYPE",
                            deviceType: e
                        }),
                        setCanvasStyles: e => ({
                            type: "SET_CANVAS_STYLES",
                            canvasStyles: e
                        }),
                        setIsIframePreview: e => ({
                            type: "SET_IFRAME_PREVIEW",
                            isIframePreview: e
                        }),
                        setEditing: e => ({
                            type: "SET_EDITING",
                            isEditing: e
                        }),
                        * openGeneralSidebar(e) {
                            yield C.controls.dispatch(se, "enableComplementaryArea", "isolated/editor", e)
                        },
                        * closeGeneralSidebar() {
                            yield C.controls.dispatch(se, "disableComplementaryArea", "isolated/editor")
                        },
                        setIsListViewOpened: e => ({
                            type: "SET_LISTVIEW_OPEN",
                            isOpen: e
                        })
                    },
                    tn = en,
                    nn = (e, t) => {
                        if ("TOGGLE_FEATURE" === t.type) {
                            const {
                                preferencesKey: n,
                                ...o
                            } = e, r = {
                                ...o,
                                [t.feature]: !e[t.feature] || !e[t.feature]
                            };
                            return n && window.localStorage && localStorage.setItem(n, JSON.stringify(r)), {
                                preferencesKey: n,
                                ...r
                            }
                        }
                        return e
                    },
                    on = {
                        toggleFeature: e => ({
                            type: "TOGGLE_FEATURE",
                            feature: e
                        })
                    },
                    rn = {},
                    sn = (e = rn, t) => "TOGGLE_OPTION" === t.type ? {
                        ...e,
                        [t.option]: !e[t.option] || !e[t.option]
                    } : e,
                    an = {
                        toggleOption: e => ({
                            type: "TOGGLE_OPTION",
                            option: e
                        })
                    };

                function ln(e) {
                    return e.editor.editorMode
                }

                function cn(e) {
                    return e.editor.settings
                }

                function dn(e) {
                    return e.editor.isReady
                }

                function un(e) {
                    return e.editor.currentPattern
                }

                function pn(e) {
                    const {
                        currentPattern: t,
                        patterns: n
                    } = e.editor;
                    if (t && n)
                        for (let e = 0; e < n.length; e++)
                            if (n[e].name === t) return n[e];
                    return null
                }

                function mn(e) {
                    return e.editor.ignoredContent
                }

                function fn(e, t) {
                    const {
                        patterns: n = []
                    } = e.editor;
                    let o = n.find((e => e.name === t));
                    return o || (o = n.find((e => e.name.replace("p2/", "") === t)), o || null)
                }

                function gn(e) {
                    return e.editor.isInserterOpened
                }
                const hn = (0, C.createRegistrySelector)((e => () => {
                    const t = e(se).getActiveComplementaryArea("isolated/editor");
                    return (0, x.includes)(["edit-post/document", "edit-post/block"], t)
                }));

                function yn(e) {
                    return e.editor.isEditing
                }

                function bn(e) {
                    return e.editor.patterns
                }

                function En(e) {
                    return e.editor.isListViewOpened
                }

                function vn(e) {
                    return e.editor.deviceType
                }

                function wn(e) {
                    return e.editor.canvasStyles
                }

                function Cn(e) {
                    return e.editor.isIframePreview || ["Tablet", "Mobile"].includes(e.editor.deviceType)
                }

                function Sn(e) {
                    return e.blocks.present.blocks
                }

                function Tn(e) {
                    return e.blocks.present.selection
                }

                function kn(e) {
                    return "visual" === ln(e) && (e.collab?.undoManager ? !!e.collab.undoManager.undoStack.length : e.blocks.past.length > 0)
                }

                function On(e) {
                    return "visual" === ln(e) && (e.collab?.undoManager ? !!e.collab.undoManager.redoStack.length : e.blocks.future.length > 0)
                }

                function xn(e) {
                    return e.blocks.present.editCount
                }

                function An(e, t) {
                    return !!e.preferences[t] && e.preferences[t]
                }

                function In(e, t) {
                    return !!e.options[t] && e.options[t]
                }

                function Mn(e) {
                    return {
                        type: "SET_COLLAB_YJS_DOC",
                        doc: e
                    }
                }

                function Pn(e) {
                    return {
                        type: "SET_COLLAB_UNDO_MANAGER",
                        undoManager: e
                    }
                }

                function Fn(e) {
                    return e.collab.yDoc
                }

                function Ln(e) {
                    return e.collab.undoManager
                }

                function Rn(e) {
                    return {
                        type: "SET_AVAILABLE_COLLAB_PEERS",
                        peers: e
                    }
                }

                function Bn(e, t) {
                    return {
                        type: "SET_COLLAB_PEER_SELECTION",
                        peerId: e,
                        selection: t
                    }
                }

                function Dn(e) {
                    return e.collabPeers
                }

                function Nn(e) {
                    return Object.keys(e.collabPeers).length > 0
                }
                const Un = n(227)("iso-editor:collab:undo"),
                    Vn = e => {
                        const {
                            clientId: t,
                            attributeKey: n
                        } = e.select("core/block-editor").getSelectionStart();
                        return "string" == typeof n ? {
                            clientId: t,
                            attributeKey: n
                        } : void 0
                    },
                    Hn = (0, C.createRegistryControl)((e => t => {
                        const n = e.select("isolated/editor").getYDoc();
                        return n && !t.isTriggeredByYDoc && n.applyLocalChangesToYDoc({
                            blocks: t.blocks
                        }, {
                            isInitialContent: t.isInitialContent,
                            richTextHint: Vn(e)
                        }), t
                    })),
                    zn = {
                        UPDATE_BLOCKS_WITH_UNDO: Hn,
                        UPDATE_BLOCKS_WITHOUT_UNDO: Hn,
                        [jt.zF.undo().type]: (0, C.createRegistryControl)((e => t => {
                            const n = e.select("isolated/editor").getUndoManager();
                            if (!n) return Un("Undoing from redux-undo state"), t;
                            Un("Undoing from yjs undoManager"), Un("undo"), n.undo()
                        })),
                        [jt.zF.redo().type]: (0, C.createRegistryControl)((e => t => {
                            if (!e.select("isolated/editor").getUndoManager()) return t;
                            Un("redo"), e.select("isolated/editor").getUndoManager().redo()
                        }))
                    },
                    jn = (e = {}, t) => {
                        switch (t.type) {
                            case "SET_COLLAB_YJS_DOC":
                                return {
                                    ...e, yDoc: t.doc
                                };
                            case "SET_COLLAB_UNDO_MANAGER":
                                return {
                                    ...e, undoManager: t.undoManager
                                }
                        }
                        return e
                    },
                    Wn = (e = {}, t) => {
                        switch (t.type) {
                            case "SET_COLLAB_PEER_SELECTION":
                                return e[t.peerId] ? {
                                    ...e,
                                    [t.peerId]: {
                                        ...e[t.peerId],
                                        ...t.selection
                                    }
                                } : e;
                            case "SET_AVAILABLE_COLLAB_PEERS":
                                return t.peers.reduce(((t, {
                                    id: n,
                                    name: o,
                                    color: r,
                                    avatarUrl: i
                                }) => (t[n] = e[n] || {
                                    name: o,
                                    color: r,
                                    avatarUrl: i
                                }, t)), {})
                        }
                        return e
                    };

                function* Gn(e) {
                    yield function(e) {
                        return {
                            type: "CONVERT_BLOCK_TO_STATIC",
                            clientId: e
                        }
                    }(e)
                }

                function* Kn(e) {
                    yield function(e) {
                        return {
                            type: "CONVERT_BLOCKS_TO_REUSABLE",
                            clientIds: e
                        }
                    }(e)
                }

                function* Yn(e) {
                    yield function(e) {
                        return {
                            type: "DELETE_REUSABLE_BLOCK",
                            id: e
                        }
                    }(e)
                }

                function $n(e, t) {
                    return {
                        type: "SET_EDITING_REUSABLE_BLOCK",
                        clientId: e,
                        isEditing: t
                    }
                }

                function Jn(e, t) {
                    return e.isEditingReusableBlock[t]
                }
                const Zn = {
                        actions: m,
                        controls: {
                            CONVERT_BLOCK_TO_STATIC: (0, C.createRegistryControl)((e => ({
                                clientId: t
                            }) => {
                                const n = e.select("core/block-editor").getBlock(t),
                                    o = e.select("core").getEditedEntityRecord("postType", "wp_block", n.attributes.ref),
                                    r = (0, M.parse)(o.content);
                                e.dispatch("core/block-editor").replaceBlocks(n.clientId, r)
                            })),
                            CONVERT_BLOCKS_TO_REUSABLE: (0, C.createRegistryControl)((e => async function({
                                clientIds: t
                            }) {
                                const n = {
                                        title: (0, L.__)("Untitled Reusable Block"),
                                        content: (0, M.serialize)(e.select("core/block-editor").getBlocksByClientId(t)),
                                        status: "publish"
                                    },
                                    o = await e.dispatch("core").saveEntityRecord("postType", "wp_block", n),
                                    r = (0, M.createBlock)("core/block", {
                                        ref: o.id
                                    });
                                e.dispatch("core/block-editor").replaceBlocks(t, r), e.dispatch(reusableBlocksStore).__experimentalSetEditingReusableBlock(r.clientId, !0)
                            })),
                            DELETE_REUSABLE_BLOCK: (0, C.createRegistryControl)((e => async function({
                                id: t
                            }) {
                                if (!e.select("core").getEditedEntityRecord("postType", "wp_block", t)) return;
                                const n = e.select("core/block-editor").getBlocks().filter((e => (0, M.isReusableBlock)(e) && e.attributes.ref === t)).map((e => e.clientId));
                                n.length && e.dispatch("core/block-editor").removeBlocks(n), await e.dispatch("core").deleteEntityRecord("postType", "wp_block", t)
                            }))
                        },
                        reducer: (0, C.combineReducers)({
                            isEditingReusableBlock: function(e = {}, t) {
                                return "SET_EDITING_REUSABLE_BLOCK" === t?.type ? {
                                    ...e,
                                    [t.clientId]: t.isEditing
                                } : e
                            }
                        }),
                        selectors: f
                    },
                    qn = (e, t) => ({
                        type: "SET_DEFAULT_COMPLEMENTARY_AREA",
                        scope: e,
                        area: t
                    }),
                    Xn = (e, t) => ({
                        registry: n,
                        dispatch: o
                    }) => {
                        t && (n.select(j.store).get(e, "isComplementaryAreaVisible") || n.dispatch(j.store).set(e, "isComplementaryAreaVisible", !0), o({
                            type: "ENABLE_COMPLEMENTARY_AREA",
                            scope: e,
                            area: t
                        }))
                    },
                    Qn = e => ({
                        registry: t
                    }) => {
                        t.select(j.store).get(e, "isComplementaryAreaVisible") && t.dispatch(j.store).set(e, "isComplementaryAreaVisible", !1)
                    },
                    eo = (e, t) => ({
                        registry: n
                    }) => {
                        if (!t) return;
                        const o = n.select(j.store).get(e, "pinnedItems");
                        !0 !== o?.[t] && n.dispatch(j.store).set(e, "pinnedItems", {
                            ...o,
                            [t]: !0
                        })
                    },
                    to = (e, t) => ({
                        registry: n
                    }) => {
                        if (!t) return;
                        const o = n.select(j.store).get(e, "pinnedItems");
                        n.dispatch(j.store).set(e, "pinnedItems", {
                            ...o,
                            [t]: !1
                        })
                    };

                function no(e, t) {
                    return function({
                        registry: n
                    }) {
                        z()("dispatch( 'core/interface' ).toggleFeature", {
                            since: "6.0",
                            alternative: "dispatch( 'core/preferences' ).toggle"
                        }), n.dispatch(j.store).toggle(e, t)
                    }
                }

                function oo(e, t, n) {
                    return function({
                        registry: o
                    }) {
                        z()("dispatch( 'core/interface' ).setFeatureValue", {
                            since: "6.0",
                            alternative: "dispatch( 'core/preferences' ).set"
                        }), o.dispatch(j.store).set(e, t, !!n)
                    }
                }

                function ro(e, t) {
                    return function({
                        registry: n
                    }) {
                        z()("dispatch( 'core/interface' ).setFeatureDefaults", {
                            since: "6.0",
                            alternative: "dispatch( 'core/preferences' ).setDefaults"
                        }), n.dispatch(j.store).setDefaults(e, t)
                    }
                }
                const io = (0, C.createRegistrySelector)((e => (t, n) => {
                        const o = e(j.store).get(n, "isComplementaryAreaVisible");
                        if (void 0 !== o) return o ? t?.complementaryAreas?.[n] : null
                    })),
                    so = (0, C.createRegistrySelector)((e => (t, n, o) => {
                        var r;
                        const i = e(j.store).get(n, "pinnedItems");
                        return null === (r = i?.[o]) || void 0 === r || r
                    })),
                    ao = (0, C.createRegistrySelector)((e => (t, n, o) => (z()("select( 'core/interface' ).isFeatureActive( scope, featureName )", {
                        since: "6.0",
                        alternative: "select( 'core/preferences' ).get( scope, featureName )"
                    }), !!e(j.store).get(n, o)))),
                    lo = {
                        reducer: (0, C.combineReducers)({
                            complementaryAreas: function(e = {}, t) {
                                switch (t.type) {
                                    case "SET_DEFAULT_COMPLEMENTARY_AREA": {
                                        const {
                                            scope: n,
                                            area: o
                                        } = t;
                                        return e[n] ? e : {
                                            ...e,
                                            [n]: o
                                        }
                                    }
                                    case "ENABLE_COMPLEMENTARY_AREA": {
                                        const {
                                            scope: n,
                                            area: o
                                        } = t;
                                        return {
                                            ...e,
                                            [n]: o
                                        }
                                    }
                                }
                                return e
                            }
                        }),
                        actions: g,
                        selectors: h
                    };
                let co = [];
                const uo = (0, O.createHigherOrderComponent)((e => (0, C.withRegistry)((t => {
                        const {
                            registry: n,
                            settings: o,
                            ...r
                        } = t, m = function(e) {
                            var t, n, o, r, i, s, a, l, c, d, u, p, m, f, g, h, y, b, E, v;
                            const {
                                iso: _,
                                editor: w
                            } = e;
                            return {
                                iso: {
                                    preferencesKey: null !== (t = _?.preferencesKey) && void 0 !== t ? t : null,
                                    persistenceKey: null !== (n = _?.persistenceKey) && void 0 !== n ? n : null,
                                    disallowEmbed: null !== (o = _?.disallowEmbed) && void 0 !== o ? o : [],
                                    customStores: null !== (r = _?.customStores) && void 0 !== r ? r : [],
                                    blocks: {
                                        allowBlocks: null !== (i = _?.blocks?.allowBlocks) && void 0 !== i ? i : [],
                                        disallowBlocks: null !== (s = _?.blocks?.disallowBlocks) && void 0 !== s ? s : []
                                    },
                                    toolbar: {
                                        inserter: !0,
                                        inspector: !1,
                                        navigation: !1,
                                        documentInspector: !1,
                                        undo: !0,
                                        selectorTool: !1,
                                        ...null !== (a = _?.toolbar) && void 0 !== a ? a : {}
                                    },
                                    header: null === (l = _?.header) || void 0 === l || l,
                                    sidebar: {
                                        inserter: !1,
                                        inspector: !1,
                                        customComponent: null,
                                        ...null !== (c = _?.sidebar) && void 0 !== c ? c : {}
                                    },
                                    footer: null !== (d = _?.footer) && void 0 !== d && d,
                                    moreMenu: (C = _?.moreMenu, S = {
                                        editor: !1,
                                        fullscreen: !1,
                                        preview: !1,
                                        topToolbar: !1,
                                        ...null !== (u = _?.moreMenu) && void 0 !== u ? u : {}
                                    }, !1 !== C && S),
                                    linkMenu: null !== (p = _?.linkMenu) && void 0 !== p ? p : [],
                                    defaultPreferences: {
                                        ...null !== (m = _?.defaultPreferences) && void 0 !== m ? m : {}
                                    },
                                    allowApi: null !== (f = _?.allowApi) && void 0 !== f && f,
                                    disableCanvasAnimations: null !== (g = _?.disableCanvasAnimations) && void 0 !== g && g,
                                    currentPattern: null !== (h = _?.currentPattern) && void 0 !== h ? h : null,
                                    patterns: null !== (y = _?.patterns) && void 0 !== y ? y : []
                                },
                                editor: {
                                    alignWide: !0,
                                    disableCustomColors: !1,
                                    disableCustomFontSizes: !1,
                                    disablePostFormats: !0,
                                    titlePlaceholder: (0, L.__)("Add title"),
                                    isRTL: !1,
                                    autosaveInterval: 60,
                                    maxUploadFileSize: 0,
                                    allowedMimeTypes: [],
                                    styles: [{
                                        baseURL: "",
                                        __unstableType: "theme",
                                        css: "body { font-family: 'Noto Serif' }"
                                    }],
                                    imageSizes: [],
                                    richEditingEnabled: !0,
                                    codeEditingEnabled: !1,
                                    allowedBlockTypes: !0,
                                    __experimentalCanUserUseUnfilteredHTML: !1,
                                    __experimentalBlockPatterns: [],
                                    reusableBlocks: [],
                                    fixedToolbar: !0,
                                    ...w,
                                    bodyPlaceholder: null !== (b = w?.bodyPlaceholder) && void 0 !== b ? b : (0, L.__)("Start writing or type / to choose a block"),
                                    availableLegacyWidgets: {},
                                    hasPermissionsToManageWidgets: !1,
                                    fetchLinkSuggestions: (null !== (E = w?.fetchLinkSuggestions) && void 0 !== E ? E : w?.__experimentalFetchLinkSuggestions) ? null !== (v = w?.fetchLinkSuggestions) && void 0 !== v ? v : w?.__experimentalFetchLinkSuggestions : () => []
                                }
                            };
                            var C, S
                        }(o), {
                            persistenceKey: f,
                            preferencesKey: g,
                            defaultPreferences: h,
                            customStores: b = []
                        } = m.iso || {}, [v, _] = (0, y.useState)(null);
                        return (0, y.useEffect)((() => {
                            const e = (0, C.createRegistry)({
                                "core/reusable-blocks": Zn,
                                "core/interface": lo
                            }, n);
                            f && e.use(C.plugins.persistence, {
                                persistenceKey: f
                            });
                            const t = e.registerStore("isolated/editor", function(e, t) {
                                    return {
                                        reducer: (0, C.combineReducers)({
                                            blocks: Jt,
                                            editor: Qt,
                                            preferences: nn,
                                            options: sn,
                                            collab: jn,
                                            collabPeers: Wn
                                        }),
                                        actions: {
                                            ...Zt,
                                            ...tn,
                                            ...an,
                                            ...on,
                                            ...c,
                                            ...u
                                        },
                                        selectors: {
                                            ...s,
                                            ...i,
                                            ...a,
                                            ...l,
                                            ...d,
                                            ...p
                                        },
                                        controls: {
                                            ...zn
                                        },
                                        persist: ["preferences"],
                                        initialState: {
                                            preferences: {
                                                preferencesKey: e,
                                                ...e && localStorage.getItem(e) ? JSON.parse(localStorage.getItem(e)) : t
                                            }
                                        }
                                    }
                                }(g, h)),
                                o = e.registerStore("core/block-editor", {
                                    ...P.storeConfig,
                                    persist: ["preferences"]
                                }),
                                r = e.registerStore("core/editor", {
                                    ...E.storeConfig,
                                    selectors: {
                                        ...E.storeConfig.selectors,
                                        ...(m = E.storeConfig.selectors, y = e.select, {
                                            getEditedPostAttribute: (e, t) => "content" === t ? (0, M.serialize)(y("core/block-editor").getBlocks()) : m.getEditedPostAttribute(e, t),
                                            getEditedPostContent: () => (0, M.serialize)(y("core/block-editor").getBlocks())
                                        })
                                    },
                                    persist: ["preferences"]
                                });
                            var m, y;
                            return b.map((t => {
                                    co.push(e.registerStore(t.name, t.config))
                                })), co.push(t), co.push(o), co.push(r), _(e),
                                function() {
                                    co = co.filter((e => e !== t))
                                }
                        }), [n]), v ? (0, y.createElement)(C.RegistryProvider, {
                            value: v
                        }, (0, y.createElement)(e, {
                            ...r,
                            settings: m
                        })) : null
                    }))), "withRegistryProvider"),
                    po = uo;

                function mo(e, t) {
                    return e && e.allowBlocks && e.allowBlocks.length > 0 ? e.allowBlocks : t.map((e => e.name))
                }

                function fo(e, t, n, o) {
                    const r = (i = t.blocks) && i.disallowBlocks ? i.disallowBlocks : [];
                    var i;
                    return {
                        ...e,
                        hasFixedToolbar: o,
                        allowedBlockTypes: mo(t.blocks, n).filter((e => -1 === r.indexOf(e)))
                    }
                }
                const go = (0, O.compose)([(0, C.withSelect)((e => {
                        const {
                            getCurrentPattern: t
                        } = e("isolated/editor");
                        return {
                            currentPattern: t()
                        }
                    })), (0, C.withDispatch)((e => {
                        const {
                            updateBlocksWithoutUndo: t
                        } = e("isolated/editor");
                        return {
                            updateBlocksWithoutUndo: t
                        }
                    }))])((function(e) {
                        const {
                            currentPattern: t,
                            updateBlocksWithoutUndo: n
                        } = e, o = (0, y.useRef)(null);
                        return (0, y.useEffect)((() => {
                            null !== t && o.current !== t ? (o.current = t.name, setTimeout((() => {
                                n((0, M.parse)(t.content))
                            }), 0)) : o.current = t
                        }), [t]), null
                    })),
                    ho = function(e) {
                        const {
                            onSaveBlocks: t,
                            onSaveContent: n
                        } = e, o = (0, y.useRef)(!0), {
                            setReady: r
                        } = (0, C.useDispatch)("isolated/editor"), {
                            blocks: i,
                            ignoredContent: s
                        } = (0, C.useSelect)((e => ({
                            blocks: e("isolated/editor").getBlocks(),
                            ignoredContent: e("isolated/editor").getIgnoredContent()
                        })), []);

                        function a() {
                            t?.(i, s), n?.((0, M.serialize)(i))
                        }
                        return (0, y.useEffect)((() => {
                            i ? o.current ? (o.current = !1, r(!0), i && i.length > 1 && a()) : a() : r(!0)
                        }), [i]), null
                    },
                    yo = window.wp.apiFetch;
                var bo = n.n(yo);

                function Eo({
                    undoManager: e
                } = {}) {
                    const {
                        setUndoManager: t
                    } = (0, C.useDispatch)("isolated/editor");
                    (0, y.useEffect)((() => {
                        t(e)
                    }), [e]), window.isoInitialisedBlocks || (window.isoInitialised || ((0, w.registerCoreBlocks)(), window.isoInitialised = !0), (0, C.use)(Vt, {}), bo().use(bo().createPreloadingMiddleware({
                        OPTIONS: {
                            "/wp/v2/blocks": {
                                body: []
                            }
                        },
                        "/wp/v2/types?context=view": {
                            body: {
                                post: {
                                    capabilities: {
                                        edit_post: "edit_post"
                                    },
                                    description: "",
                                    hierarchical: !1,
                                    viewable: !0,
                                    name: "Posts",
                                    slug: "post",
                                    labels: {
                                        name: "Posts",
                                        singular_name: "Post"
                                    },
                                    supports: {
                                        title: !1,
                                        editor: !0,
                                        author: !1,
                                        thumbnail: !1,
                                        excerpt: !1,
                                        trackbacks: !1,
                                        "custom-fields": !1,
                                        comments: !1,
                                        revisions: !1,
                                        "post-formats": !1,
                                        "geo-location": !1
                                    },
                                    taxonomies: [],
                                    rest_base: "posts"
                                }
                            }
                        },
                        "/wp/v2/types?context=edit": {
                            body: {
                                post: {
                                    capabilities: {
                                        edit_post: "edit_post"
                                    },
                                    description: "",
                                    hierarchical: !1,
                                    viewable: !0,
                                    name: "Posts",
                                    slug: "post",
                                    labels: {
                                        name: "Posts",
                                        singular_name: "Post"
                                    },
                                    supports: {
                                        title: !1,
                                        editor: !0,
                                        author: !1,
                                        thumbnail: !1,
                                        excerpt: !1,
                                        trackbacks: !1,
                                        "custom-fields": !1,
                                        comments: !1,
                                        revisions: !1,
                                        "post-formats": !1,
                                        "geo-location": !1
                                    },
                                    taxonomies: [],
                                    rest_base: "posts"
                                }
                            }
                        },
                        "/wp/v2/posts/0?context=edit": {
                            body: {
                                id: 0,
                                type: "post"
                            }
                        },
                        "/wp/v2/posts?context=edit": {
                            body: {
                                id: 0,
                                type: "post"
                            }
                        }
                    })), window.isoInitialisedBlocks = !0)
                }
                const vo = po((function(e) {
                        const {
                            children: t,
                            onSaveContent: n,
                            onSaveBlocks: o,
                            __experimentalUndoManager: r,
                            __experimentalOnInput: i,
                            __experimentalOnChange: s,
                            __experimentalValue: a,
                            __experimentalOnSelection: l,
                            ...c
                        } = e;
                        Eo({
                            undoManager: r
                        });
                        const d = function(e) {
                                const {
                                    undo: t,
                                    setupEditor: n
                                } = (0, C.useDispatch)("isolated/editor"), {
                                    updateEditorSettings: o,
                                    setupEditorState: r
                                } = (0, C.useDispatch)("core/editor"), {
                                    updateSettings: i
                                } = (0, C.useDispatch)("core/block-editor"), {
                                    isEditing: s,
                                    topToolbar: a,
                                    currentSettings: l
                                } = (0, C.useSelect)((n => {
                                    const {
                                        isEditing: o,
                                        isFeatureActive: r
                                    } = n("isolated/editor"), {
                                        getBlockTypes: i
                                    } = n(M.store), s = i(), a = r("fixedToolbar");
                                    return {
                                        isEditing: o(),
                                        topToolbar: a,
                                        currentSettings: {
                                            ...e,
                                            editor: {
                                                ...fo(e.editor, e.iso, s, void 0 !== e.iso?.defaultPreferences?.fixedToolbar ? e.iso?.defaultPreferences?.fixedToolbar : a),
                                                __experimentalReusableBlocks: [],
                                                __experimentalFetchReusableBlocks: !1,
                                                __experimentalUndo: t
                                            }
                                        }
                                    }
                                }), [e]);
                                return (0, y.useEffect)((() => {
                                    var e;
                                    void 0 === window.__editorAssets && (window.__editorAssets = {
                                        styles: "",
                                        scripts: ""
                                    }), n(l), i((e = l).editor), o(e.editor), r({
                                        id: 0,
                                        type: "post"
                                    }, [])
                                }), []), (0, y.useEffect)((() => {
                                    s && i(l)
                                }), [s, a, l?.editor?.reusableBlocks]), e
                            }(e.settings),
                            u = (0, C.useSelect)((e => ({
                                start: e("core/block-editor").getSelectionStart(),
                                end: e("core/block-editor").getSelectionEnd()
                            })), []);
                        return (0, y.useEffect)((() => {
                            l?.(u)
                        }), [u]), (0, y.createElement)(y.StrictMode, null, (0, y.createElement)(S.ShortcutProvider, null, (0, y.createElement)(ho, {
                            onSaveBlocks: o,
                            onSaveContent: n
                        }), (0, y.createElement)(go, null), (0, y.createElement)(_.SlotFillProvider, null, (0, y.createElement)(zt, {
                            ...c,
                            onInput: i,
                            onChange: s,
                            blocks: a,
                            settings: d
                        }, t))))
                    })),
                    _o = function({
                        onLoaded: e,
                        onLoading: t
                    }) {
                        const {
                            isEditorReady: n
                        } = (0, C.useSelect)((e => ({
                            isEditorReady: e("isolated/editor").isEditorReady()
                        })), []);
                        return (0, y.useEffect)((() => {
                            n ? e && e() : t && t()
                        }), [n]), null
                    },
                    wo = window.wp.domReady;
                var Co;
                const So = (e, t) => {
                    if ("POST" === e.method && "/wp/v2/media" === e.path) {
                        const t = e.body;
                        t instanceof FormData && t.has("post") && "null" === t.get("post") && t.delete("post")
                    }
                    return t(e)
                };
                n.n(wo)()((() => {
                    bo().use(So)
                }));
                const To = {
                    iso: {
                        moreMenu: !1
                    }
                };
                window.wp = {
                    ...null !== (Co = window.wp) && void 0 !== Co ? Co : {},
                    attachEditor: function(e, t = {}) {
                        if ("textarea" !== e.type.toLowerCase()) return;
                        const n = document.createElement("div");
                        n.classList.add("editor"), e.parentNode.insertBefore(n, e.nextSibling), e.style.display = "none";
                        var o = {
                            ...To,
                            ...t
                        };
                        o?.iso?.noToolbar && n.classList.add("no-toolbar"), o?.editor?.enableUpload && (o.editor.mediaUpload = E.mediaUpload), o?.editor?.enableLibrary && (0, v.addFilter)("editor.MediaUpload", "acfe/media-upload", (() => b.MediaUpload)), (0, y.createRoot)(n).render((0, y.createElement)(vo, {
                            settings: o,
                            onLoad: (t, n) => function(e, t, n) {
                                return -1 !== e.indexOf("\x3c!--") ? t(e) : n({
                                    HTML: e
                                })
                            }(e.value, t, n),
                            onSaveContent: t => function(e, t) {
                                t.value = e
                            }(t, e),
                            onError: () => document.location.reload()
                        }, (0, y.createElement)(_o, {
                            onLoaded: () => function(e) {
                                const t = e.closest(".iso-editor__loading");
                                t && t.classList.remove("iso-editor__loading")
                            }(e)
                        })))
                    },
                    detachEditor: function(e) {
                        const t = e.nextSibling;
                        t && t.classList.contains("editor") && ((0, y.unmountComponentAtNode)(t), e.style.display = null, t.parentNode.removeChild(t))
                    }
                }
            },
            184: (e, t) => {
                var n;
                ! function() {
                    "use strict";
                    var o = {}.hasOwnProperty;

                    function r() {
                        for (var e = [], t = 0; t < arguments.length; t++) {
                            var n = arguments[t];
                            if (n) {
                                var i = typeof n;
                                if ("string" === i || "number" === i) e.push(n);
                                else if (Array.isArray(n)) {
                                    if (n.length) {
                                        var s = r.apply(null, n);
                                        s && e.push(s)
                                    }
                                } else if ("object" === i) {
                                    if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
                                        e.push(n.toString());
                                        continue
                                    }
                                    for (var a in n) o.call(n, a) && n[a] && e.push(a)
                                }
                            }
                        }
                        return e.join(" ")
                    }
                    e.exports ? (r.default = r, e.exports = r) : void 0 === (n = function() {
                        return r
                    }.apply(t, [])) || (e.exports = n)
                }()
            },
            934: e => {
                e.exports = function(e, t, n) {
                    return ((n = window.getComputedStyle) ? n(e) : e.currentStyle)[t.replace(/-(\w)/gi, (function(e, t) {
                        return t.toUpperCase()
                    }))]
                }
            },
            227: (e, t, n) => {
                t.formatArgs = function(t) {
                    if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
                    const n = "color: " + this.color;
                    t.splice(1, 0, n, "color: inherit");
                    let o = 0,
                        r = 0;
                    t[0].replace(/%[a-zA-Z%]/g, (e => {
                        "%%" !== e && (o++, "%c" === e && (r = o))
                    })), t.splice(r, 0, n)
                }, t.save = function(e) {
                    try {
                        e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
                    } catch (e) {}
                }, t.load = function() {
                    let e;
                    try {
                        e = t.storage.getItem("debug")
                    } catch (e) {}
                    return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
                }, t.useColors = function() {
                    return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
                }, t.storage = function() {
                    try {
                        return localStorage
                    } catch (e) {}
                }(), t.destroy = (() => {
                    let e = !1;
                    return () => {
                        e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
                    }
                })(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.log = console.debug || console.log || (() => {}), e.exports = n(447)(t);
                const {
                    formatters: o
                } = e.exports;
                o.j = function(e) {
                    try {
                        return JSON.stringify(e)
                    } catch (e) {
                        return "[UnexpectedJSONParseError]: " + e.message
                    }
                }
            },
            447: (e, t, n) => {
                e.exports = function(e) {
                    function t(e) {
                        let n, r, i, s = null;

                        function a(...e) {
                            if (!a.enabled) return;
                            const o = a,
                                r = Number(new Date),
                                i = r - (n || r);
                            o.diff = i, o.prev = n, o.curr = r, n = r, e[0] = t.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                            let s = 0;
                            e[0] = e[0].replace(/%([a-zA-Z%])/g, ((n, r) => {
                                if ("%%" === n) return "%";
                                s++;
                                const i = t.formatters[r];
                                if ("function" == typeof i) {
                                    const t = e[s];
                                    n = i.call(o, t), e.splice(s, 1), s--
                                }
                                return n
                            })), t.formatArgs.call(o, e), (o.log || t.log).apply(o, e)
                        }
                        return a.namespace = e, a.useColors = t.useColors(), a.color = t.selectColor(e), a.extend = o, a.destroy = t.destroy, Object.defineProperty(a, "enabled", {
                            enumerable: !0,
                            configurable: !1,
                            get: () => null !== s ? s : (r !== t.namespaces && (r = t.namespaces, i = t.enabled(e)), i),
                            set: e => {
                                s = e
                            }
                        }), "function" == typeof t.init && t.init(a), a
                    }

                    function o(e, n) {
                        const o = t(this.namespace + (void 0 === n ? ":" : n) + e);
                        return o.log = this.log, o
                    }

                    function r(e) {
                        return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
                    }
                    return t.debug = t, t.default = t, t.coerce = function(e) {
                        return e instanceof Error ? e.stack || e.message : e
                    }, t.disable = function() {
                        const e = [...t.names.map(r), ...t.skips.map(r).map((e => "-" + e))].join(",");
                        return t.enable(""), e
                    }, t.enable = function(e) {
                        let n;
                        t.save(e), t.namespaces = e, t.names = [], t.skips = [];
                        const o = ("string" == typeof e ? e : "").split(/[\s,]+/),
                            r = o.length;
                        for (n = 0; n < r; n++) o[n] && ("-" === (e = o[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.slice(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
                    }, t.enabled = function(e) {
                        if ("*" === e[e.length - 1]) return !0;
                        let n, o;
                        for (n = 0, o = t.skips.length; n < o; n++)
                            if (t.skips[n].test(e)) return !1;
                        for (n = 0, o = t.names.length; n < o; n++)
                            if (t.names[n].test(e)) return !0;
                        return !1
                    }, t.humanize = n(824), t.destroy = function() {
                        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
                    }, Object.keys(e).forEach((n => {
                        t[n] = e[n]
                    })), t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function(e) {
                        let n = 0;
                        for (let t = 0; t < e.length; t++) n = (n << 5) - n + e.charCodeAt(t), n |= 0;
                        return t.colors[Math.abs(n) % t.colors.length]
                    }, t.enable(t.load()), t
                }
            },
            303: (e, t, n) => {
                var o = n(934);
                e.exports = function(e) {
                    var t = o(e, "line-height"),
                        n = parseFloat(t, 10);
                    if (t === n + "") {
                        var r = e.style.lineHeight;
                        e.style.lineHeight = t + "em", t = o(e, "line-height"), n = parseFloat(t, 10), r ? e.style.lineHeight = r : delete e.style.lineHeight
                    }
                    if (-1 !== t.indexOf("pt") ? (n *= 4, n /= 3) : -1 !== t.indexOf("mm") ? (n *= 96, n /= 25.4) : -1 !== t.indexOf("cm") ? (n *= 96, n /= 2.54) : -1 !== t.indexOf("in") ? n *= 96 : -1 !== t.indexOf("pc") && (n *= 16), n = Math.round(n), "normal" === t) {
                        var i = e.nodeName,
                            s = document.createElement(i);
                        s.innerHTML = "&nbsp;", "TEXTAREA" === i.toUpperCase() && s.setAttribute("rows", "1");
                        var a = o(e, "font-size");
                        s.style.fontSize = a, s.style.padding = "0px", s.style.border = "0px";
                        var l = document.body;
                        l.appendChild(s), n = s.offsetHeight, l.removeChild(s)
                    }
                    return n
                }
            },
            824: e => {
                var t = 1e3,
                    n = 60 * t,
                    o = 60 * n,
                    r = 24 * o;

                function i(e, t, n, o) {
                    var r = t >= 1.5 * n;
                    return Math.round(e / n) + " " + o + (r ? "s" : "")
                }
                e.exports = function(e, s) {
                    s = s || {};
                    var a, l, c = typeof e;
                    if ("string" === c && e.length > 0) return function(e) {
                        if (!((e = String(e)).length > 100)) {
                            var i = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                            if (i) {
                                var s = parseFloat(i[1]);
                                switch ((i[2] || "ms").toLowerCase()) {
                                    case "years":
                                    case "year":
                                    case "yrs":
                                    case "yr":
                                    case "y":
                                        return 315576e5 * s;
                                    case "weeks":
                                    case "week":
                                    case "w":
                                        return 6048e5 * s;
                                    case "days":
                                    case "day":
                                    case "d":
                                        return s * r;
                                    case "hours":
                                    case "hour":
                                    case "hrs":
                                    case "hr":
                                    case "h":
                                        return s * o;
                                    case "minutes":
                                    case "minute":
                                    case "mins":
                                    case "min":
                                    case "m":
                                        return s * n;
                                    case "seconds":
                                    case "second":
                                    case "secs":
                                    case "sec":
                                    case "s":
                                        return s * t;
                                    case "milliseconds":
                                    case "millisecond":
                                    case "msecs":
                                    case "msec":
                                    case "ms":
                                        return s;
                                    default:
                                        return
                                }
                            }
                        }
                    }(e);
                    if ("number" === c && isFinite(e)) return s.long ? (a = e, (l = Math.abs(a)) >= r ? i(a, l, r, "day") : l >= o ? i(a, l, o, "hour") : l >= n ? i(a, l, n, "minute") : l >= t ? i(a, l, t, "second") : a + " ms") : function(e) {
                        var i = Math.abs(e);
                        return i >= r ? Math.round(e / r) + "d" : i >= o ? Math.round(e / o) + "h" : i >= n ? Math.round(e / n) + "m" : i >= t ? Math.round(e / t) + "s" : e + "ms"
                    }(e);
                    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
                }
            },
            703: (e, t, n) => {
                "use strict";
                var o = n(414);

                function r() {}

                function i() {}
                i.resetWarningCache = r, e.exports = function() {
                    function e(e, t, n, r, i, s) {
                        if (s !== o) {
                            var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw a.name = "Invariant Violation", a
                        }
                    }

                    function t() {
                        return e
                    }
                    e.isRequired = e;
                    var n = {
                        array: e,
                        bigint: e,
                        bool: e,
                        func: e,
                        number: e,
                        object: e,
                        string: e,
                        symbol: e,
                        any: e,
                        arrayOf: t,
                        element: e,
                        elementType: e,
                        instanceOf: t,
                        node: e,
                        objectOf: t,
                        oneOf: t,
                        oneOfType: t,
                        shape: t,
                        exact: t,
                        checkPropTypes: i,
                        resetWarningCache: r
                    };
                    return n.PropTypes = n, n
                }
            },
            697: (e, t, n) => {
                e.exports = n(703)()
            },
            414: e => {
                "use strict";
                e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
            },
            857: function(e, t, n) {
                "use strict";
                var o, r = this && this.__extends || (o = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        },
                        function(e, t) {
                            function __() {
                                this.constructor = e
                            }
                            o(e, t), e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
                        }),
                    i = this && this.__assign || Object.assign || function(e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    },
                    s = this && this.__rest || function(e, t) {
                        var n = {};
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && (n[o[r]] = e[o[r]])
                        }
                        return n
                    };
                t.__esModule = !0;
                var a = n(196),
                    l = n(697),
                    c = n(367),
                    d = n(303),
                    u = "autosize:resized",
                    p = function(e) {
                        function t() {
                            var t = null !== e && e.apply(this, arguments) || this;
                            return t.state = {
                                lineHeight: null
                            }, t.textarea = null, t.onResize = function(e) {
                                t.props.onResize && t.props.onResize(e)
                            }, t.updateLineHeight = function() {
                                t.textarea && t.setState({
                                    lineHeight: d(t.textarea)
                                })
                            }, t.onChange = function(e) {
                                var n = t.props.onChange;
                                t.currentValue = e.currentTarget.value, n && n(e)
                            }, t
                        }
                        return r(t, e), t.prototype.componentDidMount = function() {
                            var e = this,
                                t = this.props,
                                n = t.maxRows,
                                o = t.async;
                            "number" == typeof n && this.updateLineHeight(), "number" == typeof n || o ? setTimeout((function() {
                                return e.textarea && c(e.textarea)
                            })) : this.textarea && c(this.textarea), this.textarea && this.textarea.addEventListener(u, this.onResize)
                        }, t.prototype.componentWillUnmount = function() {
                            this.textarea && (this.textarea.removeEventListener(u, this.onResize), c.destroy(this.textarea))
                        }, t.prototype.render = function() {
                            var e = this,
                                t = this.props,
                                n = (t.onResize, t.maxRows),
                                o = (t.onChange, t.style),
                                r = (t.innerRef, t.children),
                                l = s(t, ["onResize", "maxRows", "onChange", "style", "innerRef", "children"]),
                                c = this.state.lineHeight,
                                d = n && c ? c * n : null;
                            return a.createElement("textarea", i({}, l, {
                                onChange: this.onChange,
                                style: d ? i({}, o, {
                                    maxHeight: d
                                }) : o,
                                ref: function(t) {
                                    e.textarea = t, "function" == typeof e.props.innerRef ? e.props.innerRef(t) : e.props.innerRef && (e.props.innerRef.current = t)
                                }
                            }), r)
                        }, t.prototype.componentDidUpdate = function() {
                            this.textarea && c.update(this.textarea)
                        }, t.defaultProps = {
                            rows: 1,
                            async: !1
                        }, t.propTypes = {
                            rows: l.number,
                            maxRows: l.number,
                            onResize: l.func,
                            innerRef: l.any,
                            async: l.bool
                        }, t
                    }(a.Component);
                t.TextareaAutosize = a.forwardRef((function(e, t) {
                    return a.createElement(p, i({}, e, {
                        innerRef: t
                    }))
                }))
            },
            42: (e, t, n) => {
                "use strict";
                var o = n(857);
                t.Z = o.TextareaAutosize
            },
            236: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ActionCreators = t.ActionTypes = void 0;
                var n = {
                    UNDO: "@@redux-undo/UNDO",
                    REDO: "@@redux-undo/REDO",
                    JUMP_TO_FUTURE: "@@redux-undo/JUMP_TO_FUTURE",
                    JUMP_TO_PAST: "@@redux-undo/JUMP_TO_PAST",
                    JUMP: "@@redux-undo/JUMP",
                    CLEAR_HISTORY: "@@redux-undo/CLEAR_HISTORY"
                };
                t.ActionTypes = n;
                var o = {
                    undo: function() {
                        return {
                            type: n.UNDO
                        }
                    },
                    redo: function() {
                        return {
                            type: n.REDO
                        }
                    },
                    jumpToFuture: function(e) {
                        return {
                            type: n.JUMP_TO_FUTURE,
                            index: e
                        }
                    },
                    jumpToPast: function(e) {
                        return {
                            type: n.JUMP_TO_PAST,
                            index: e
                        }
                    },
                    jump: function(e) {
                        return {
                            type: n.JUMP,
                            index: e
                        }
                    },
                    clearHistory: function() {
                        return {
                            type: n.CLEAR_HISTORY
                        }
                    }
                };
                t.ActionCreators = o
            },
            823: (e, t) => {
                "use strict";

                function n(e) {
                    return function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                            return n
                        }
                    }(e) || function(e) {
                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance")
                    }()
                }
                var o, r;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.set = function(e) {
                    o = e
                }, t.start = function(e, t) {
                    r = {
                        header: [],
                        prev: [],
                        action: [],
                        next: [],
                        msgs: []
                    }, o && (console.group ? (r.header = ["%credux-undo", "font-style: italic", "action", e.type], r.action = s("action", i.action, e), r.prev = s("prev history", i.prevState, t)) : (r.header = ["redux-undo action", e.type], r.action = ["action", e], r.prev = ["prev history", t]))
                }, t.end = function(e) {
                    var t, a, l, c, d, u, p, m, f, g, h, y, b, E, v, _;
                    o && (console.group ? r.next = s("next history", i.nextState, e) : r.next = ["next history", e], y = (h = r).header, b = h.prev, E = h.next, v = h.action, _ = h.msgs, console.group ? ((t = console).groupCollapsed.apply(t, n(y)), (a = console).log.apply(a, n(b)), (l = console).log.apply(l, n(v)), (c = console).log.apply(c, n(E)), (d = console).log.apply(d, n(_)), console.groupEnd()) : ((u = console).log.apply(u, n(y)), (p = console).log.apply(p, n(b)), (m = console).log.apply(m, n(v)), (f = console).log.apply(f, n(E)), (g = console).log.apply(g, n(_))))
                }, t.log = function() {
                    if (o) {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        r.msgs = r.msgs.concat([].concat(t, ["\n"]))
                    }
                };
                var i = {
                    prevState: "#9E9E9E",
                    action: "#03A9F4",
                    nextState: "#4CAF50"
                };

                function s(e, t, n) {
                    return ["%c".concat(e), "color: ".concat(t, "; font-weight: bold"), n]
                }
            },
            619: (e, t) => {
                "use strict";

                function n(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    return Array.isArray(e) ? e : "string" == typeof e ? [e] : t
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.parseActions = n, t.isHistory = function(e) {
                    return void 0 !== e.present && void 0 !== e.future && void 0 !== e.past && Array.isArray(e.future) && Array.isArray(e.past)
                }, t.includeAction = function(e) {
                    var t = n(e);
                    return function(e) {
                        return t.indexOf(e.type) >= 0
                    }
                }, t.excludeAction = function(e) {
                    var t = n(e);
                    return function(e) {
                        return t.indexOf(e.type) < 0
                    }
                }, t.combineFilters = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t.reduce((function(e, t) {
                        return function(n, o, r) {
                            return e(n, o, r) && t(n, o, r)
                        }
                    }), (function() {
                        return !0
                    }))
                }, t.groupByActionTypes = function(e) {
                    var t = n(e);
                    return function(e) {
                        return t.indexOf(e.type) >= 0 ? e.type : null
                    }
                }, t.newHistory = function(e, t, n) {
                    return {
                        past: e,
                        present: t,
                        future: n,
                        group: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        _latestUnfiltered: t,
                        index: e.length,
                        limit: e.length + n.length + 1
                    }
                }
            },
            90: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "zF", {
                    enumerable: !0,
                    get: function() {
                        return r.ActionCreators
                    }
                }), Object.defineProperty(t, "ZP", {
                    enumerable: !0,
                    get: function() {
                        return i.default
                    }
                });
                var o, r = n(236),
                    i = (n(619), (o = n(479)) && o.__esModule ? o : {
                        default: o
                    })
            },
            479: (e, t, n) => {
                "use strict";

                function o(e) {
                    return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, o(e)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    r.set(t.debug);
                    var n, o = c({
                            limit: void 0,
                            filter: function() {
                                return !0
                            },
                            groupBy: function() {
                                return null
                            },
                            undoType: i.ActionTypes.UNDO,
                            redoType: i.ActionTypes.REDO,
                            jumpToPastType: i.ActionTypes.JUMP_TO_PAST,
                            jumpToFutureType: i.ActionTypes.JUMP_TO_FUTURE,
                            jumpType: i.ActionTypes.JUMP,
                            neverSkipReducer: !1,
                            ignoreInitialState: !1,
                            syncFilter: !1
                        }, t, {
                            initTypes: (0, s.parseActions)(t.initTypes, ["@@redux-undo/INIT"]),
                            clearHistoryType: (0, s.parseActions)(t.clearHistoryType, [i.ActionTypes.CLEAR_HISTORY])
                        }),
                        a = o.neverSkipReducer ? function(t, n) {
                            for (var o = arguments.length, r = new Array(o > 2 ? o - 2 : 0), i = 2; i < o; i++) r[i - 2] = arguments[i];
                            return c({}, t, {
                                present: e.apply(void 0, [t.present, n].concat(r))
                            })
                        } : function(e) {
                            return e
                        };
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        r.start(i, t);
                        for (var l, c, d = t, h = arguments.length, y = new Array(h > 2 ? h - 2 : 0), b = 2; b < h; b++) y[b - 2] = arguments[b];
                        if (!n) {
                            if (r.log("history is uninitialized"), void 0 === t) return d = p(e.apply(void 0, [t, {
                                type: "@@redux-undo/CREATE_HISTORY"
                            }].concat(y)), o.ignoreInitialState), r.log("do not set initialState on probe actions"), r.end(d), d;
                            (0, s.isHistory)(t) ? (d = n = o.ignoreInitialState ? t : (0, s.newHistory)(t.past, t.present, t.future), r.log("initialHistory initialized: initialState is a history", n)) : (d = n = p(t, o.ignoreInitialState), r.log("initialHistory initialized: initialState is not a history", n))
                        }
                        switch (i.type) {
                            case void 0:
                                return d;
                            case o.undoType:
                                return l = g(d, -1), r.log("perform undo"), r.end(l), a.apply(void 0, [l, i].concat(y));
                            case o.redoType:
                                return l = g(d, 1), r.log("perform redo"), r.end(l), a.apply(void 0, [l, i].concat(y));
                            case o.jumpToPastType:
                                return l = f(d, i.index), r.log("perform jumpToPast to ".concat(i.index)), r.end(l), a.apply(void 0, [l, i].concat(y));
                            case o.jumpToFutureType:
                                return l = m(d, i.index), r.log("perform jumpToFuture to ".concat(i.index)), r.end(l), a.apply(void 0, [l, i].concat(y));
                            case o.jumpType:
                                return l = g(d, i.index), r.log("perform jump to ".concat(i.index)), r.end(l), a.apply(void 0, [l, i].concat(y));
                            case c = i.type, o.clearHistoryType.indexOf(c) > -1 ? c:
                                !c: return l = p(d.present, o.ignoreInitialState), r.log("perform clearHistory"), r.end(l), a.apply(void 0, [l, i].concat(y));
                            default:
                                if (l = e.apply(void 0, [d.present, i].concat(y)), o.initTypes.some((function(e) {
                                        return e === i.type
                                    }))) return r.log("reset history due to init action"), r.end(n), n;
                                if (d._latestUnfiltered === l) return d;
                                if ("function" == typeof o.filter && !o.filter(i, l, d)) {
                                    var E = (0, s.newHistory)(d.past, l, d.future, d.group);
                                    return o.syncFilter || (E._latestUnfiltered = d._latestUnfiltered), r.log("filter ignored action, not storing it in past"), r.end(E), E
                                }
                                var v = o.groupBy(i, l, d);
                                if (null != v && v === d.group) {
                                    var _ = (0, s.newHistory)(d.past, l, d.future, d.group);
                                    return r.log("groupBy grouped the action with the previous action"), r.end(_), _
                                }
                                return d = function(e, t, n, o) {
                                    var i = e.past.length + 1;
                                    r.log("inserting", t), r.log("new free: ", n - i);
                                    var a = e.past,
                                        l = e._latestUnfiltered,
                                        c = n && n <= i,
                                        d = a.slice(c ? 1 : 0),
                                        p = null != l ? [].concat(u(d), [l]) : d;
                                    return (0, s.newHistory)(p, t, [], o)
                                }(d, l, o.limit, v), r.log("inserted new state into history"), r.end(d), d
                        }
                    }
                };
                var r = function(e) {
                        if (e && e.__esModule) return e;
                        if (null === e || "object" !== o(e) && "function" != typeof e) return {
                            default: e
                        };
                        var t = a();
                        if (t && t.has(e)) return t.get(e);
                        var n = {},
                            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var i in e)
                            if (Object.prototype.hasOwnProperty.call(e, i)) {
                                var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                                s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = e[i]
                            } return n.default = e, t && t.set(e, n), n
                    }(n(823)),
                    i = n(236),
                    s = n(619);

                function a() {
                    if ("function" != typeof WeakMap) return null;
                    var e = new WeakMap;
                    return a = function() {
                        return e
                    }, e
                }

                function l(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        t && (o = o.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, o)
                    }
                    return n
                }

                function c(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? l(Object(n), !0).forEach((function(t) {
                            d(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function d(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function u(e) {
                    return function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                            return n
                        }
                    }(e) || function(e) {
                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance")
                    }()
                }

                function p(e, t) {
                    var n = (0, s.newHistory)([], e, []);
                    return t && (n._latestUnfiltered = null), n
                }

                function m(e, t) {
                    if (t < 0 || t >= e.future.length) return e;
                    var n = e.past,
                        o = e.future,
                        r = e._latestUnfiltered,
                        i = [].concat(u(n), [r], u(o.slice(0, t))),
                        a = o[t],
                        l = o.slice(t + 1);
                    return (0, s.newHistory)(i, a, l)
                }

                function f(e, t) {
                    if (t < 0 || t >= e.past.length) return e;
                    var n = e.past,
                        o = e.future,
                        r = e._latestUnfiltered,
                        i = n.slice(0, t),
                        a = [].concat(u(n.slice(t + 1)), [r], u(o)),
                        l = n[t];
                    return (0, s.newHistory)(i, l, a)
                }

                function g(e, t) {
                    return t > 0 ? m(e, t - 1) : t < 0 ? f(e, e.past.length + t) : e
                }
            },
            196: e => {
                "use strict";
                e.exports = window.React
            }
        },
        n = {};

    function o(e) {
        var r = n[e];
        if (void 0 !== r) return r.exports;
        var i = n[e] = {
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, o), i.exports
    }
    o.m = t, e = [], o.O = (t, n, r, i) => {
        if (!n) {
            var s = 1 / 0;
            for (d = 0; d < e.length; d++) {
                n = e[d][0], r = e[d][1], i = e[d][2];
                for (var a = !0, l = 0; l < n.length; l++)(!1 & i || s >= i) && Object.keys(o.O).every((e => o.O[e](n[l]))) ? n.splice(l--, 1) : (a = !1, i < s && (s = i));
                if (a) {
                    e.splice(d--, 1);
                    var c = r();
                    void 0 !== c && (t = c)
                }
            }
            return t
        }
        i = i || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
        e[d] = [n, r, i]
    }, o.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return o.d(t, {
            a: t
        }), t
    }, o.d = (e, t) => {
        for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        var e = {
            826: 0,
            431: 0
        };
        o.O.j = t => 0 === e[t];
        var t = (t, n) => {
                var r, i, s = n[0],
                    a = n[1],
                    l = n[2],
                    c = 0;
                if (s.some((t => 0 !== e[t]))) {
                    for (r in a) o.o(a, r) && (o.m[r] = a[r]);
                    if (l) var d = l(o)
                }
                for (t && t(n); c < s.length; c++) i = s[c], o.o(e, i) && e[i] && e[i][0](), e[i] = 0;
                return o.O(d)
            },
            n = self.webpackChunkblocks_everywhere = self.webpackChunkblocks_everywhere || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    })();
    var r = o.O(void 0, [431], (() => o(817)));
    r = o.O(r)
})();