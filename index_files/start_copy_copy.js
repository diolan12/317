(function() {
    function callWithArgument(a, b, c) { return Function.prototype.call.apply(Array.prototype.slice, arguments) }

    function callerInit(a, b, c) { var e = callWithArgument(arguments, 2); return function() { return b.apply(a, e) } }

    function someForLoop(a, b) {
        var c = new someSetter(b);
        for (c.h = [a]; c.h.length;) {
            var e = c,
                d = c.h.shift();
            e.i(d);
            for (d = d.firstChild; d; d = d.nextSibling) 1 == d.nodeType && e.h.push(d)
        }
    }

    function someSetter(a) { this.i = a }

    function setDisplayBlank(a) { a.style.display = "" }

    function setDisplayNone(a) { a.style.display = "none" };
    var t = /\s*;\s*/;

    function applyToLowL(a, b) { this.lowLFunction.apply(this, arguments) }
    applyToLowL.prototype.lowLFunction = function(a, b) {
        this.a || (this.a = {});
        if (b) {
            var c = this.a,
                e = b.a;
            for (d in e) c[d] = e[d]
        } else {
            var d = this.a;
            e = someObject;
            for (c in e) d[c] = e[c]
        }
        this.a.$this = a;
        this.a.$context = this;
        this.f = "undefined" != typeof a && null != a ? a : "";
        b || (this.a.$top = this.f)
    };
    var someObject = { $default: null },
        blankArray = [];

    function pushToBlankArray(a) {
        for (var b in a.a) delete a.a[b];
        a.f = null;
        blankArray.push(a)
    }

    function callFromLowB(a, b, c) {
        try { return b.call(c, a.a, a.f) } catch (e) { return someObject.$default }
    }
    applyToLowL.prototype.clone = function(a, b, c) {
        if (0 <
            blankArray.length) {
            var e = blankArray.pop();
            applyToLowL.call(e, a, this);
            a = e
        } else a = new applyToLowL(a, this);
        a.a.$index = b;
        a.a.$count = c;
        return a
    };
    var dynamicCreateScript;
    window.trustedTypes && (dynamicCreateScript = trustedTypes.createPolicy("jstemplate", { createScript: function(a) { return a } }));
    var ObjectA = {};

    function CreateScript(a) {
        if (!ObjectA[a]) try {
            var b = "(function(a_, b_) { with (a_) with (b_) return " + a + " })",
                c = window.trustedTypes ? dynamicCreateScript.createScript(b) : b;
            ObjectA[a] = window.eval(c)
        } catch (e) {}
        return ObjectA[a]
    }

    function someRegexWithLowA(a) {
        var b = [];
        a = a.split(t);
        for (var
                c = 0, e = a.length; c < e; ++c) {
            var d = a[c].indexOf(":");
            if (!(0 > d)) {
                var g = a[c].substr(0, d).replace(/^\s+/, "").replace(/\s+$/, "");
                d = CreateScript(a[c].substr(d + 1));
                b.push(g, d)
            }
        }
        return b
    };

    function BlankFunction() {}
    var G = 0,
        H = { 0: {} },
        I = {},
        J = {},
        K = [];

    function prollyCache(a) {
        a.__jstcache || someForLoop(a, function(b) {
            setJstCache(b)
        })
    }
    var arrayOfSomething = [
        ["jsselect", CreateScript],
        ["jsdisplay", CreateScript],
        ["jsvalues", someRegexWithLowA],
        ["jsvars", someRegexWithLowA],
        ["jseval", function(a) {
            var b = [];
            a = a.split(t);
            for (var c = 0, e = a.length; c <
                e; ++c)
                if (a[c]) {
                    var d = CreateScript(a[c]);
                    b.push(d)
                }
            return b
        }],
        ["transclude", function(a) { return a }],
        ["jscontent", CreateScript],
        ["jsskip", CreateScript]
    ];

    function setJstCache(a) {
        if (a.__jstcache) return a.__jstcache;
        var b = a.getAttribute("jstcache");
        if (null != b) return
        a.__jstcache = H[b];
        b = K.length = 0;
        for (var c = arrayOfSomething.length; b < c; ++b) {
            var e = arrayOfSomething[b][0],
                d = a.getAttribute(e);
            J[e] = d;
            null != d && K.push(e + "=" + d)
        }
        if (0 == K.length) return a.setAttribute("jstcache", "0"), a.__jstcache = H[0];
        var g = K.join(
            "&");
        if (b = I[g]) return a.setAttribute("jstcache", b), a.__jstcache = H[b];
        var h = {};
        b = 0;
        for (c = arrayOfSomething.length; b < c; ++b) {
            d = arrayOfSomething[b];
            e = d[0];
            var f = d[1];
            d = J[e];
            null != d && (h[e] = f(d))
        }
        b = "" + ++G;
        a.setAttribute("jstcache", b);
        H[b] = h;
        I[g] = b;
        return a.__jstcache = h
    }

    function arrayPusher(a, b) {
        a.j.push(b);
        a.o.push(0)
    }

    function Q(a) { return a.c.length ? a.c.pop() : [] }
    BlankFunction.prototype.decisionMaking = function(a, b) {
        var c = getCacheOfSomething(b),
            e = c.transclude;
        if (e)(c = doingSomethingWithDocument(e)) ? (b.parentNode.replaceChild(c, b), e = Q(this),
            e.push(this.decisionMaking, a, c), arrayPusher(this, e)) : b.parentNode.removeChild(b);
        else if (c = c.jsselect) {
            c = callFromLowB(a, c, b);
            var d = b.getAttribute("jsinstance");
            var g = !1;
            d && ("*" == d.charAt(0) ? (d = parseInt(d.substr(1), 10), g = !0) : d = parseInt(d, 10));
            var
                h = null != c && "object" == typeof c && "number" == typeof c.length;
            e = h ? c.length : 1;
            var f = h && 0 == e;
            if (h)
                if (f) d ? b.parentNode.removeChild(b) : (b.setAttribute("jsinstance", "*0"), setDisplayNone(b));
                else if (setDisplayBlank(b), null === d || "" === d || g && d < e -
                1) {
                g = Q(this);
                d = d || 0;
                for (h = e - 1; d < h; ++d) {
                    var k = b.cloneNode(!0);
                    b.parentNode.insertBefore(k, b);
                    LowCSetter(k, c, d);
                    f = a.clone(c[d], d, e);
                    g.push(this.b, f, k, pushToBlankArray, f, null)
                }
                LowCSetter(b, c, d);
                f = a.clone(c[d], d, e);
                g.push(this.b, f, b, pushToBlankArray, f, null);
                arrayPusher(this, g)
            } else d < e ? (g = c[d], LowCSetter(b, c, d), f = a.clone(g, d, e), g = Q(this), g.push(this.b, f, b, pushToBlankArray, f, null), arrayPusher(this, g)) : b.parentNode.removeChild(b);
            else null == c ? setDisplayNone(b) : (setDisplayBlank(b), f = a.clone(c, 0, 1), g = Q(this), g.push(this.b, f, b, pushToBlankArray, f,
                null), arrayPusher(this, g))
        } else this.b(a, b)
    };
    BlankFunction.prototype.b = function(a, b) {
        var c = getCacheOfSomething(b),
            e = c.jsdisplay;
        if (e) {
            if (!callFromLowB(a, e, b)) { setDisplayNone(b); return }
            setDisplayBlank(b)
        }
        if (e = c.jsvars)
            for (var d = 0, g = e.length; d < g; d += 2) {
                var h = e[d],
                    f = callFromLowB(a, e[d + 1],
                        b);
                a.a[h] = f
            }
        if (e = c.jsvalues)
            for (d = 0, g = e.length; d < g; d += 2)
                if (f = e[d], h = callFromLowB(a, e[d + 1], b), "$" == f.charAt(0)) a.a[f] = h;
                else if ("." == f.charAt(0)) {
            f = f.substr(1).split(".");
            for (var k = b, O = f.length, C = 0, U = O - 1; C < U;
                ++C) {
                var D = f[C];
                k[D] || (k[D] = {});
                k = k[D]
            }
            k[f[O - 1]] = h
        } else f && ("boolean" == typeof h ? h ? b.setAttribute(f, f) : b.removeAttribute(f) : b.setAttribute(f, "" + h));
        if (e = c.jseval)
            for (d = 0, g = e.length; d < g; ++d) callFromLowB(a, e[d], b);
        e = c.jsskip;
        if (!e || !callFromLowB(a, e, b))
            if (c = c.jscontent) {
                if (c = "" + callFromLowB(a, c, b), b.innerHTML != c) {
                    for (; b.firstChild;) e = b.firstChild, e.parentNode.removeChild(e);
                    b.appendChild(this.m.createTextNode(c))
                }
            } else {
                c = Q(this);
                for (e = b.firstChild; e; e = e.nextSibling) 1 == e.nodeType && c.push(this.decisionMaking, a, e);
                c.length && arrayPusher(this, c)
            }
    };

    function getCacheOfSomething(a) {
        if (a.__jstcache) return a.__jstcache;
        var b = a.getAttribute("jstcache");
        return b ? a.__jstcache = H[b] : setJstCache(a)
    }

    function doingSomethingWithDocument(a, b) {
        var c = document;
        if (b) {
            var e = c.getElementById(a);
            if (!e) {
                e = b();
                var d = c.getElementById("jsts");
                d || (d = c.createElement("div"), d.id = "jsts", setDisplayNone(d), d.style.position = "absolute", c.body.appendChild(d));
                var g = c.createElement("div");
                d.appendChild(g);
                g.innerHTML = e;
                e = c.getElementById(a)
            }
            c = e
        } else c = c.getElementById(a);
        return c ? (prollyCache(c), c = c.cloneNode(!0), c.removeAttribute("id"), c) : null
    }

    function LowCSetter(a, b, c) {
        c == b.length - 1 ? a.setAttribute("jsinstance", "*" + c) : a.setAttribute("jsinstance", "" + c)
    };
    window.jstGetTemplate = doingSomethingWithDocument;
    window.JsEvalContext = applyToLowL;
    window.jstProcess = function(a, b) {
        console.log("jstProcess");
        var c = new BlankFunction;
        prollyCache(b);
        c.m = b ? 9 == b.nodeType ? b : b.ownerDocument || document : document;
        var e = callerInit(c, c.decisionMaking, a, b),
            d = c.j = [],
            g = c.o = [];
        c.c = [];
        e();
        for (var h, f, k; d.length;) h = d[d.length - 1], e = g[g.length - 1], e >= h.length ? (e = c, f = d.pop(), f.length = 0, e.c.push(f), g.pop()) : (f = h[e++], k = h[e++], h = h[e++], g[g.length - 1] = e, f.call(c, k, h))
    };
})()