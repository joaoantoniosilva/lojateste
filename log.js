/* Copyright 2011-2020 HeatMap Inc. - All rights reserved */
if (!self.heatmap) {
    self.heatmap = heatmap = {}
}
if (!heatmap.log) {
    heatmap.log = {
        version: 20.1204,
        h: function(c) {
            if (!c) {
                return 0
            }
            for (var b = 0, d = 5381, a = c.length; b < a; b++) {
                d = ((d << 5) + d) + c.charCodeAt(b)
            }
            return d & 4294967295
        },
        t: function(c) {
            var b = this
              , a = c.tagName;
            if (!b.t.d) {
                b.t.d = {
                    BODY: "0",
                    H1: "1",
                    H2: "2",
                    H3: "3",
                    H4: "4",
                    H5: "5",
                    H6: "6",
                    SUB: "_",
                    STRIKE: "-",
                    OUTPUT: ":",
                    IFRAME: "!",
                    SMALL: ".",
                    FIGCAPTION: "(",
                    FIGURE: ")",
                    HEADER: "[",
                    FOOTER: "]",
                    FIELDSET: "{",
                    ASIDE: "}",
                    PATH: "§",
                    ABBR: "@",
                    ARTICLE: "*",
                    I: "/",
                    VIDEO: "#",
                    PROGRESS: "%",
                    METER: "^",
                    SUP: "°",
                    HGROUP: "+",
                    DATALIST: "<",
                    BUTTON: "=",
                    MARK: ">",
                    SECTION: "|",
                    AUDIO: "~",
                    TIME: "$",
                    A: "a",
                    AREA: "A",
                    B: "B",
                    BLOCKQUOTE: "b",
                    CENTER: "c",
                    CITE: "C",
                    CANVAS: "D",
                    DIV: "d",
                    EM: "E",
                    EMBED: "e",
                    OBJECT: "e",
                    FONT: "f",
                    FORM: "F",
                    BIG: "G",
                    STRONG: "g",
                    HR: "h",
                    TH: "H",
                    IMG: "i",
                    INPUT: "I",
                    SAMP: "j",
                    TT: "J",
                    KBD: "k",
                    S: "K",
                    LABEL: "l",
                    LI: "L",
                    MAP: "m",
                    SVG: "M",
                    MENU: "n",
                    NAV: "N",
                    OL: "O",
                    OPTION: "o",
                    P: "p",
                    PRE: "P",
                    CODE: "Q",
                    Q: "q",
                    BDI: "R",
                    TR: "r",
                    SELECT: "s",
                    SPAN: "S",
                    TABLE: "T",
                    TD: "t",
                    ADDRESS: "U",
                    UL: "u",
                    U: "v",
                    VAR: "V",
                    DD: "w",
                    DL: "W",
                    DT: "X",
                    TEXTAREA: "x",
                    CAPTION: "Y",
                    LEGEND: "y",
                    DETAILS: "z",
                    SUMMARY: "Z"
                }
            }
            return (!a ? "" : b.t.d[a] || b.t.d[a.toUpperCase()] || "'")
        },
        p: function(e) {
            var c = this
              , a = document.body
              , d = "";
            while (e && e != a) {
                d = c.t(e) + d;
                e = e.parentNode
            }
            return d
        },
        peq: function(c, d) {
            var a = document.body;
            while (c && d && c != a && d != a) {
                if (c == d) {
                    return true
                } else {
                    if (c.tagName == d.tagName) {
                        c = c.parentNode;
                        d = d.parentNode
                    } else {
                        return false
                    }
                }
            }
            return (c == d)
        },
        trou: function(d) {
            if (d == document.body) {
                return {
                    t: "0",
                    r: 0,
                    o: 0,
                    u: 0,
                    path: "",
                    url: ""
                }
            }
            if (!d) {
                return {
                    t: "",
                    r: 0,
                    o: 0,
                    u: 0,
                    path: "",
                    url: ""
                }
            }
            var g = this;
            var m = g.p(d)
              , b = g.url(d);
            var a = g.h(m)
              , h = g.h(b)
              , c = 1;
            if (document.getElementsByTagName) {
                var f, e, j, k = document.getElementsByTagName(d.tagName);
                for (f = 0,
                e = k.length; f < e; f++) {
                    j = k[f];
                    if (d == j) {
                        break
                    }
                    if (g.peq(d, j)) {
                        c++
                    }
                }
            }
            return {
                t: g.t(d),
                r: a,
                o: (c > 1 ? c : 0),
                u: h,
                path: m,
                url: b
            }
        },
        css: function(f, b, d) {
            if (!f || !b) {
                return ""
            }
            var a = this;
            if (!a.cssf) {
                if (window.getComputedStyle) {
                    a.cssf = function(k, i, j) {
                        try {
                            var h = getComputedStyle(k, j);
                            return h ? h.getPropertyValue(i) : ""
                        } catch (g) {
                            return ""
                        }
                    }
                } else {
                    if (f.currentStyle) {
                        var c = /(\-([a-z]){1})/g;
                        a.cssf = function(h, g) {
                            if (g == "float") {
                                g = "styleFloat"
                            }
                            if (c.test(g)) {
                                g = g.replace(c, function() {
                                    return arguments[2].toUpperCase()
                                })
                            }
                            return (h.currentStyle ? h.currentStyle[g] : "")
                        }
                    } else {
                        a.cssf = function(h, g) {
                            return (!h.style ? "" : h.style[g])
                        }
                    }
                }
            }
            return a.cssf(f, b, d)
        },
        cssi: function(c, a, b) {
            return Math.round(parseFloat(this.css(c, a, b))) || 0
        },
        pos_area: function(e) {
            var q = this, l = document, m = e.hm_area, j;
            if (!m) {
                m = e.hm_area = {
                    l: 0,
                    t: 0,
                    r: 0,
                    b: 0
                }
            }
            if (!m.k && !m.img && l.getElementsByTagName) {
                m.k = 1;
                var b = e.parentNode
                  , k = l.getElementsByTagName("IMG")
                  , f = k.length
                  , g = "#" + b.id;
                for (j = 0; j < f; j++) {
                    if (k[j].useMap == g) {
                        m.img = k[j];
                        break
                    }
                }
            }
            if (!m.img) {
                return {
                    x: 0,
                    y: 0,
                    xf: 0,
                    yf: 0,
                    fixed: false,
                    w: 0,
                    h: 0,
                    bcr: 1
                }
            }
            var c = q.pos_bcr(m.img);
            if (!m.s && e.shape && e.shape.match(/(rect|poly)/i) && e.coords) {
                m.s = 1;
                var r = e.coords.split(","), h = r.length, n;
                for (j = 0; j < h; j++) {
                    n = parseInt(r[j], 10);
                    if (j % 2) {
                        m.t = (j == 1 ? n : Math.min(m.t, n));
                        m.b = (j == 1 ? n : Math.max(m.b, n))
                    } else {
                        m.l = (!j ? n : Math.min(m.l, n));
                        m.r = (!j ? n : Math.max(m.r, n))
                    }
                }
            }
            return m.s ? {
                x: c.x + m.l,
                y: c.y + m.t,
                fixed: c.fixed,
                xf: c.xf + m.l,
                yf: c.yf + m.t,
                w: m.r - m.l + 1,
                h: m.b - m.t + 1,
                v: c.v,
                bcr: 1
            } : c
        },
        pos_grow: function(g, v, n, f) {
            if (!v) {
                v = g.getBoundingClientRect()
            }
            var p, h = g.childNodes, d, q, e, k, j = v.left, w = v.top, a = v.right, s = v.bottom;
            for (var m = 0, u = Math.min(h.length, 10); m < u; m++) {
                p = h[m];
                v = (p.getBoundingClientRect ? p.getBoundingClientRect() : 0);
                if (!v || !v.width || !v.height) {
                    if (!f || !p.children || !p.children.length) {
                        continue
                    }
                    v = this.pos_grow(p, v, false, true);
                    if (!v || v.left == v.right || v.top == v.bottom) {
                        continue
                    }
                }
                d = v.left;
                q = v.right;
                e = v.top;
                k = v.bottom;
                if (n) {
                    if (this.css(p, "float") != "none" || this.css(p, "position") == "absolute") {
                        j = d;
                        a = q
                    }
                    w = e;
                    s = k;
                    n = false
                }
                if (j > d) {
                    j = d
                }
                if (a < q) {
                    a = q
                }
                if (w > e) {
                    w = e
                }
                if (s < k) {
                    s = k
                }
            }
            return {
                left: j,
                top: w,
                right: a,
                bottom: s
            }
        },
        pos_bcr: function(z) {
            var L = this
              , F = document
              , G = F.body
              , q = "";
            if (!z || !z.getBoundingClientRect) {
                return {
                    x: 0,
                    y: 0,
                    w: 0,
                    h: 0,
                    v: (!z ? "no obj" : "no bcr"),
                    bcr: 1
                }
            } else {
                if (z == G) {
                    var y = L.ds();
                    return {
                        x: 0,
                        y: 0,
                        w: y.w,
                        h: y.h,
                        v: "body",
                        bcr: 1
                    }
                } else {
                    if (z.tagName == "AREA" && z.parentNode && z.parentNode.id) {
                        return L.pos_area(z)
                    } else {
                        var K = z
                          , h = 0
                          , a = L.ws()
                          , w = L.pos.v
                          , p = z.getBoundingClientRect()
                          , A = p.left
                          , u = p.top
                          , x = p.right
                          , I = p.bottom;
                        do {
                            if (L.css(K, "position") == "fixed") {
                                h = true
                            }
                            K = K.offsetParent
                        } while (K && !h);
                        var f = (z.tagName == "A" && /inline/.test(L.css(z, "display")));
                        if (f) {
                            var k = z.childNodes, m, j, n = 0, E = 0, B = 0, g = /\S/;
                            for (var D = 0, s = Math.min(k.length, 10); D < s; D++) {
                                m = k[D];
                                j = m.nodeType;
                                if (!n && j == 3 && g.test(m.nodeValue)) {
                                    n = 1
                                } else {
                                    if (!E && j == 1) {
                                        E = 1;
                                        B = L.cssi(z, "padding-left") || L.cssi(z, "padding-top")
                                    }
                                }
                            }
                            if (E) {
                                var H = !n && !B
                                  , J = L.pos_grow(z, p, H);
                                A = J.left;
                                u = J.top;
                                x = J.right;
                                I = J.bottom;
                                if (w) {
                                    q += "inline fix hasText=" + n + " hasPadding=" + B + " reset=" + H + "<br>"
                                }
                            }
                        }
                        if (A == x || u == I) {
                            if (w) {
                                q += "flat size fix<br>"
                            }
                            var e = L.pos_grow(z, p, true, true);
                            A = e.left;
                            u = e.top;
                            x = e.right;
                            I = e.bottom
                        }
                        if (A == x || u == I) {
                            if (w) {
                                q += "before/after fix<br>"
                            }
                            for (var D = 0, c = [null, ":before", ":after"], C = c.length; D < C; D++) {
                                if (A == x) {
                                    x += L.cssi(z, "width", c[D])
                                }
                                if (u == I) {
                                    I += L.cssi(z, "height", c[D])
                                }
                            }
                        }
                        if (w) {
                            q += z.tagName + " l=" + A + " " + (z.className || "") + " offsetLeft=" + z.offsetLeft + " scrollLeft=" + z.scrollLeft + "<br>";
                            q += z.tagName + " t=" + u + " " + (z.className || "") + " offsetTop=" + z.offsetTop + " scrollTop=" + z.scrollTop + "<br>";
                            if (!h) {
                                q += "scroll l=" + (A + a.l) + " ws.l=" + a.l + "<br>";
                                q += "scroll t=" + (u + a.t) + " ws.t=" + a.t + "<br>"
                            }
                        }
                        return {
                            x: A + a.l,
                            y: u + a.t,
                            fixed: h,
                            xf: A,
                            yf: u,
                            w: x - A,
                            h: I - u,
                            v: q,
                            bcr: 1
                        }
                    }
                }
            }
        },
        use_bcr: function(a) {
            return 1
        },
        pos: function(K) {
            var T = this
              , O = document
              , R = O.body;
            if (!K || K == R) {
                return {
                    x: 0,
                    y: 0
                }
            }
            if (K.tagName == "PATH") {
                return T.pos_bcr(K)
            }
            if (K.tagName == "AREA" && K.parentNode && K.parentNode.id) {
                return T.pos_bcr(K)
            }
            var L = 0
              , J = 0
              , y = 0
              , B = 0
              , h = 0
              , r = ""
              , N = O.documentElement
              , Q = T.ws()
              , H = "";
            var k = K, p = T.nav(), D = p.ff, c = p.wk, E = p.ie, f, x, g = (T.ext("bcr") && K.getBoundingClientRect), a = T.pos.v;
            x = (g ? T.css(K, "transform") : "");
            if (x && x != "none") {
                return T.pos_bcr(k)
            }
            if (T.css(K, "box-sizing") == "border-box") {
                f = false
            } else {
                f = D || c
            }
            L = K.offsetLeft - K.scrollLeft + (f ? T.cssi(K, "border-left-width") : 0);
            r = T.css(K, "position");
            if (a) {
                H += K.tagName + " l=" + L + " " + (K.className || "") + " " + r + " offsetLeft=" + K.offsetLeft + " scrollLeft=" + K.scrollLeft + " border-left-width=" + (f ? T.cssi(K, "border-left-width") : 0) + "<br>"
            }
            var m = (K.tagName == "A" && T.css(K, "display") == "inline" && K.innerHTML.match(/<(img|div|h1|h2|h3)/i));
            var z, G, u, F, C, n, w;
            if (m) {
                z = K.style;
                G = z.display;
                u = z.width;
                F = z.height;
                C = z.margin;
                n = z.marginTop;
                w = z.marginBottom;
                var j = K.parentNode
                  , s = j.align
                  , S = T.css(j, "text-align")
                  , M = T.css(j, "float");
                var I = T.cssi(K, "padding-top")
                  , P = T.cssi(K, "padding-bottom");
                z.marginTop = (-I) + "px";
                z.marginBottom = (-P) + "px";
                z.display = "inline-block";
                if (D) {
                    L = K.offsetLeft - K.scrollLeft + (f ? T.cssi(K, "border-left-width") : 0);
                    if (a) {
                        H += K.tagName + " !FF! l=" + L + " " + (K.className || "") + " " + r + " offsetLeft=" + K.offsetLeft + " scrollLeft=" + K.scrollLeft + " border-left-width=" + (f ? T.cssi(K, "border-left-width") : 0) + "<br>"
                    }
                }
                z.width = (s == "right" || s == "center" || S == "right" || S == "center" || M == "right" ? "auto" : "1px");
                z.height = "auto"
            }
            J = K.offsetTop - K.scrollTop + (f ? T.cssi(K, "border-top-width") : 0);
            if (a) {
                H += K.tagName + " t=" + J + " " + (K.className || "") + " " + r + " offsetTop=" + K.offsetTop + " scrollTop=" + K.scrollTop + " border-top-width=" + (f ? T.cssi(K, "border-top-width") : 0) + "<br>"
            }
            if (m) {
                z.display = G;
                z.width = u;
                z.height = F;
                z.margin = C;
                z.marginTop = n;
                z.marginBottom = w
            }
            while (K = K.offsetParent) {
                x = (g ? T.css(K, "transform") : "");
                if (x && x != "none") {
                    return T.pos_bcr(k)
                }
                var A = T.css(K, "position");
                if (T.css(K, "display") == "inline" && A == "relative" && r != "absolute") {
                    L = T.cssi(K, "padding-left");
                    J = T.cssi(K, "padding-top");
                    if (a) {
                        H += K.tagName + " RESET l=" + L + " " + T.css(K, "display") + " " + A + "<br>"
                    }
                    if (a) {
                        H += K.tagName + " RESET t=" + J + " " + T.css(K, "display") + " " + A + "<br>"
                    }
                }
                if (T.css(K, "box-sizing") == "border-box") {
                    f = false
                } else {
                    f = D || c
                }
                L += K.offsetLeft + (f && K != R ? T.cssi(K, "border-left-width") : 0);
                J += K.offsetTop + (f && K != R ? T.cssi(K, "border-top-width") : 0);
                if (A == "absolute" && r != "fixed") {
                    r = A
                } else {
                    if (A == "relative" && r == "absolute") {
                        r = A
                    } else {
                        if (A == "fixed") {
                            r = A
                        }
                    }
                }
                if (a) {
                    H += K.tagName + " l=" + L + " " + (K.className || "") + " " + A + " offsetLeft=" + K.offsetLeft + " scrollLeft=" + (K != R ? K.scrollLeft : 0) + " border-left-width=" + (f && K != R ? T.cssi(K, "border-left-width") : 0) + "<br>"
                }
                if (a) {
                    H += K.tagName + " t=" + J + " " + (K.className || "") + " " + A + " offsetTop=" + K.offsetTop + " scrollTop=" + (K != R ? K.scrollTop : 0) + " border-top-width=" + (f && K != R ? T.cssi(K, "border-top-width") : 0) + "<br>"
                }
            }
            while ((k = k.parentNode) && k != R) {
                L -= k.scrollLeft;
                J -= k.scrollTop
            }
            var i = false;
            if (r == "fixed") {
                h = true;
                y = L;
                B = J;
                L += Q.l - (N.clientLeft || R.clientLeft || 0) + T.cssi(R, "border-left-width");
                J += Q.t - (N.clientTop || R.clientTop || 0) + T.cssi(R, "border-top-width");
                if (a) {
                    H += "fixed, l+= " + (Q.l - (N.clientLeft || R.clientLeft || 0) + T.cssi(R, "border-left-width")) + "<br>"
                }
                if (a) {
                    H += "fixed, t+= " + (Q.t - (N.clientTop || R.clientTop || 0) + T.cssi(R, "border-top-width")) + "<br>"
                }
            } else {
                if (T.css(R, "position") == "relative") {
                    if (R.getBoundingClientRect) {
                        i = true;
                        var q = R.getBoundingClientRect();
                        L += q.left + Q.l;
                        J += q.top + Q.t;
                        if (a) {
                            H += "body relative, l+= " + (q.left + Q.l) + "<br>"
                        }
                        if (a) {
                            H += "body relative, t+= " + (q.top + Q.t) + "<br>"
                        }
                    } else {
                        L += T.cssi(R, "left");
                        J += T.cssi(R, "top");
                        if (a) {
                            H += "body relative, l+= " + T.cssi(R, "left") + "<br>"
                        }
                        if (a) {
                            H += "body relative, t+= " + T.cssi(R, "top") + "<br>"
                        }
                    }
                }
            }
            if (N && !i && !E && r != "absolute") {
                L += T.cssi(N, "margin-left");
                J += T.cssi(N, "margin-top");
                if (a) {
                    H += "html margin, l+= " + T.cssi(N, "margin-left") + "<br>"
                }
                if (a) {
                    H += "html margin, t+= " + T.cssi(N, "margin-top") + "<br>"
                }
            }
            return {
                x: L,
                y: J,
                fixed: h,
                xf: y,
                yf: B,
                v: H
            }
        },
        nav: function() {
            var b = this;
            if (typeof (b.nav.v) == "undefined") {
                var c = navigator.userAgent.toLowerCase()
                  , a = {};
                a = {
                    ie: c.match(/(msie|trident)/),
                    wk: c.match(/(chrome|safari|webkit)/)
                };
                a.ff = (c.indexOf("firefox") > -1 && !a.ie && !a.wk);
                b.nav.v = a
            }
            return b.nav.v
        },
        ifr: function(b) {
            var u = this;
            if (!u.ifr.c && b) {
                u.ifr.c = b
            }
            if (!u.ifr.init) {
                u.ifr.init = 1
            } else {
                return
            }
            var l = 0
              , k = 0
              , o = 0
              , m = 0
              , i = 0
              , h = 0
              , g = 0
              , e = function(x) {
                if (u.ifr.v) {
                    console.log(x)
                }
            }
              , v = function(x) {
                if (!x) {
                    x = window.event
                }
                return (x ? x.target || x.srcElement : 0)
            }
              , c = function(z, y, x) {
                return Math.min(Math.max(y, z), x)
            }
              , q = function(C) {
                var x = (new Date()).getTime()
                  , y = x - g;
                if (y < 20) {
                    return
                }
                var z = u.mpos(C)
                  , B = z.x
                  , A = z.y;
                if (!g) {
                    l = B;
                    k = A;
                    g = x;
                    return
                }
                var E = (B - l) / y
                  , D = (A - k) / y;
                var G = (E - o) / y
                  , F = (D - m) / y;
                l = B;
                k = A;
                o = (E + 4 * o) / 5;
                m = (D + 4 * m) / 5;
                i = (G + 2 * i) / 3;
                h = (F + 2 * h) / 3;
                g = x
            }
              , p = function(A) {
                var x = (new Date()).getTime()
                  , H = x - g + 20
                  , F = 10;
                if (H < F || (!o && !m)) {
                    return {
                        x: l,
                        y: k
                    }
                }
                var N = l, M = k, P = o, O = m, K = i, J = h, y, C = 0, B = 0;
                var D = A.offsetWidth / 2
                  , L = A.offsetHeight / 2;
                var z = (u.use_bcr(A) ? u.pos_bcr(A) : u.pos(A))
                  , G = z.x + D
                  , E = z.y + L;
                N = c(N, z.x, G + D);
                M = c(M, z.y, E + L);
                if (H > 2000) {
                    H = 2000
                }
                for (var I = 0; I <= H; I += F) {
                    if (D) {
                        C = N < G ? P < 0 : P > 0;
                        C = C ? 1 - Math.abs(N - G) / D : 1;
                        if (C < 0) {
                            C = 0
                        }
                    }
                    if (L) {
                        B = M < E ? O < 0 : O > 0;
                        B = B ? 1 - Math.abs(M - E) / L : 1;
                        if (B < 0) {
                            B = 0
                        }
                    }
                    y = Math.pow(1 - I / H, 2);
                    K = i * y * C;
                    J = h * y * B;
                    P = (P + K * F) * y * C;
                    O = (O + J * F) * y * B;
                    N += P * F;
                    M += O * F
                }
                N = c(N, z.x, G + D);
                M = c(M, z.y, E + L);
                return {
                    x: N,
                    y: M
                }
            };
            var f = u.nav()
              , w = document
              , s = null
              , a = false
              , d = null
              , r = function(y) {
                d = y;
                var z = p(y)
                  , x = u.url(y) || "";
                a = x.match(/facebook.com\/plugins\/comments.php/gi) || (x == "iframe") || (y.offsetWidth * y.offsetHeight > 22500);
                if (u.ifr.c) {
                    u.ifr.c(y, z)
                }
                u.clk({
                    target: y,
                    pageX: Math.round(z.x),
                    pageY: Math.round(z.y)
                });
                e("click " + x)
            }
              , t = false
              , j = function(B) {
                var y = w.activeElement;
                if (y && y.tagName != "IFRAME" && y != w.body) {
                    return
                }
                var z = w.createElement("INPUT")
                  , A = z.style
                  , x = u.mpos(B);
                z.type = "text";
                A.position = "absolute";
                A.width = A.height = "1px";
                A.opacity = "0.01";
                A.left = (x.x + 20) + "px";
                A.top = (x.y + 20) + "px";
                w.body.appendChild(z);
                z.focus();
                w.body.removeChild(z);
                e("focusFF");
                t = true
            }
              , n = function(x) {
                if (f.ie) {
                    return
                }
                if (f.ff) {
                    j(x)
                }
                window.focus();
                e("focus window")
            };
            if (f.ie) {
                u.listen("focusin", function(y) {
                    var x = v(y);
                    if (x && x.tagName == "IFRAME" && x != d) {
                        r(x)
                    }
                    e("focusin " + (x ? x.tagName + " " + x.id : ""))
                })
            } else {
                if (f.wk || f.ff) {
                    u.listen("mouseover", function(y) {
                        var x = v(y);
                        if (x && x.tagName == "IFRAME") {
                            if (x != s) {
                                if ((f.ff && !t) || (d && x != d)) {
                                    n(y)
                                }
                                s = x;
                                d = null
                            }
                        } else {
                            if (s) {
                                if (d && !a) {
                                    n(y);
                                    d = null
                                }
                                s = null
                            }
                        }
                        e("over " + (s ? s.tagName + " " + s.id : ""))
                    });
                    u.listen("blur", function(y) {
                        if (s) {
                            var x = v(y);
                            if (x != s && x != d && d != s) {
                                var z = (s == w.activeElement);
                                if (z || !f.wk) {
                                    r(s)
                                }
                            }
                            e("blur " + (x ? x.tagName + " " + x.id : "") + " " + w.activeElement)
                        } else {
                            e("blur " + w.activeElement)
                        }
                    }, window)
                }
            }
            u.listen("mousemove", function(x) {
                q(x)
            });
            u.listen("mouseover", function(x) {
                if (v(x).tagName == "IFRAME") {
                    q(x)
                }
            })
        },
        ws: function(c) {
            if (c === false) {
                delete this.ws.r
            }
            var a = this.ws.r;
            if (a) {
                return a
            }
            var g = window
              , m = document
              , n = m.body
              , k = m.documentElement;
            var o = (g.innerWidth || (k ? k.clientWidth : 0) || (n ? n.clientWidth : 0) || 0);
            var j = (g.innerHeight || (k ? k.clientHeight : 0) || (n ? n.clientHeight : 0) || 0);
            var f = (g.pageXOffset || (k ? k.scrollLeft : 0) || (n ? n.scrollLeft : 0) || 0);
            var p = (g.pageYOffset || (k ? k.scrollTop : 0) || (n ? n.scrollTop : 0) || 0);
            a = {
                l: f,
                t: p,
                r: f + o,
                b: p + j,
                w: o,
                h: j
            };
            if (c === true) {
                this.ws.r = a
            }
            return a
        },
        ds: function() {
            var f = document
              , a = f.body
              , c = f.documentElement;
            return {
                w: Math.max(a ? Math.max(a.scrollWidth || 0, a.offsetWidth || 0, a.clientWidth || 0) : 0, c ? Math.max(c.scrollWidth || 0, c.offsetWidth || 0, c.clientWidth || 0) : 0),
                h: Math.max(a ? Math.max(a.scrollHeight || 0, a.offsetHeight || 0, a.clientHeight || 0) : 0, c ? Math.max(c.scrollHeight || 0, c.offsetHeight || 0, c.clientHeight || 0) : 0)
            }
        },
        mpos: function(b) {
            if (!b) {
                b = window.event
            }
            var a = this.ws();
            return {
                x: (b.clientX ? b.clientX + a.l : b.pageX),
                y: (b.clientY ? b.clientY + a.t : b.pageY)
            }
        },
        clean: function(a) {
            if (typeof (a) != "string") {
                try {
                    a = a.toString()
                } catch (c) {
                    return ""
                }
            }
            var b = (this.ext("cleanupURL", a) || a);
            b = b.toLowerCase();
            b = b.replace(/[\s\n]+/gi, "");
            b = b.replace(/%20/gi, "");
            b = b.replace(/\/\*.*?\*\//gi, "");
            b = b.replace(/^function.+?{/gi, "").replace(/}$/gi, "");
            b = b.replace(/(\()[+](\d)/gi, "$1$2");
            b = b.replace(/^(document.|\s*)location.href=['"]([^'"]+)['"].*/gi, "$2");
            b = b.replace(/dev\./gi, "www.");
            b = b.replace(/(http.+?\/a\/clic\/[^\d]+\d+)([^\s]*)/gi, "$1");
            b = b.replace(/^(\/a\/clic\/[^\d]+\d+)([^\s]*)/gi, "$1");
            b = b.replace(/(http.+?\/clic\/countgo[^\d]+\d+[^\d]+\d+)([^\s]*)/gi, "$1");
            b = b.replace(/(http.+?\/call\/cliccommand\/\d+)([^\s]*)/gi, "$1");
            b = b.replace(/(http.+?\/diff\/\d+\/\d+\/.+?)(\?[^\s]*)/gi, "$1");
            b = b.replace(/(http.+?serving-sys.com\/.+?)(\?[^\s]*)/gi, "$1");
            b = b.replace(/(http.+?adtech.de\/adlink[\/\d]+AdId=\d+)([^\s]*)/gi, "$1");
            try {
                if (b.match(/^http[s]?:\/\/www\.facebook\.com[^?]+plugins/i)) {
                    b = b.match(/(^[^?]+|[?&](?:action|href|id|appid|app_id)=[^&]*)/gi).join("")
                }
                if (b.match(/^http[s]?:\/\/apis\.google\.com[^?]*\/_\//i)) {
                    b = b.match(/(^[^?]+|[?&](?:clientid|origin|url)=[^&]*)/gi).join("")
                }
                if (b.match(/^http[s]?:\/\/platform\.twitter\.com[^?]+widgets/i)) {
                    b = b.match(/(^[^#]+|[#&](?:url|text)=[^&]*)/gi).join("")
                }
                b = b.replace(/(^http[s]?[:\/\.a-z]+wufoo\.com\/embed\/[^\/]+\/)(.*)$/gi, "$1");
                b = b.replace(/^https/i, "http")
            } catch (c) {}
            b = b.replace(/[{}"';]/gi, "");
            b = b.replace(/[\u25C4\u25C0]/gi, "<");
            b = b.replace(/[\u25BA\u25B6]/gi, ">");
            b = b.replace(/[?&#]$/, "");
            return b
        },
        ext: function(h, f, d, k) {
            if (typeof (heatmap_ext) != "undefined") {
                var g = heatmap_ext[h]
                  , j = typeof (g);
                if (j == "function" && g.length <= 3) {
                    try {
                        return g(f, d, k)
                    } catch (i) {
                        return null
                    }
                } else {
                    if (j != "undefined") {
                        return g
                    }
                }
            }
        },
        txt: function(c) {
            if (c == document.body) {
                return ""
            }
            var b = c.tagName;
            if (b == "IMG" && c.alt) {
                return c.alt
            } else {
                if (b == "INPUT" && c.placeholder) {
                    return c.placeholder
                }
            }
            var a = "", d;
            for (d = c.firstChild; d && a.length < 300; d = d.nextSibling) {
                switch (d.nodeType) {
                case 3:
                case 4:
                    a += d.nodeValue;
                    break;
                case 8:
                    break;
                case 1:
                    if (d.tagName == "SCRIPT") {
                        break
                    }
                default:
                    a += this.txt(d);
                    break
                }
            }
            return a
        },
        mix: function(b, e) {
            var a = this;
            var d = a.clean(b).substr(0, 200);
            if (d && !d.match(/^http/gi)) {
                var c = a.txt(e);
                if (c) {
                    c = a.clean(c);
                    d = d.substr(0, 99);
                    d = c.substr(0, 200 - d.length) + d
                }
            }
            return d
        },
        attr: function(b, a) {
            return b.getAttribute ? b.getAttribute(a) : ""
        },
        getLibEvent: function(d, a) {
            var l, j, b, k = this;
            try {
                if (window.jQuery) {
                    var c = d
                      , g = jQuery
                      , i = g(d);
                    var f = (g._data || g.data);
                    if (typeof f == "function") {
                        while (c) {
                            l = f(c, "events");
                            if (l) {
                                j = g.grep(l.vclick || l.click || [], c == d ? function(m) {
                                    return !m.selector
                                }
                                : function(m) {
                                    try {
                                        return i.is(m.selector)
                                    } catch (n) {}
                                }
                                );
                                if (j.length > 0) {
                                    if (!a) {
                                        return true
                                    } else {
                                        b = f(d, "url");
                                        if (b) {
                                            return k.clean(b)
                                        } else {
                                            b = g.map(j, function(m) {
                                                return m.handler.toString()
                                            }).join();
                                            return k.mix(b, d)
                                        }
                                    }
                                }
                            }
                            c = c.parentNode
                        }
                    }
                }
                if (window.MooTools) {
                    l = (d.retrieve ? d.retrieve("events") : d.$events);
                    if (l && l.click) {
                        if (!a) {
                            return true
                        } else {
                            b = Array.map(l.click.keys, function(e) {
                                return e.toString()
                            }).join();
                            return k.mix(b, d)
                        }
                    }
                }
                if (window.Prototype) {
                    l = (Event && Event.cache && Event.cache[d._prototypeUID || d._eventId || (d._prototypeEventID || [])[0]]);
                    if (l && l.click) {
                        if (!a) {
                            return true
                        } else {
                            b = l.click.map(function(m) {
                                return m.handler.toString()
                            }).join();
                            return k.mix(b, d)
                        }
                    }
                    l = d.getStorage && d.getStorage().get("prototype_event_registry");
                    if (l && l.get("click")) {
                        if (!a) {
                            return true
                        } else {
                            return k.clean(k.txt(d)).substr(0, 200)
                        }
                    }
                }
                if (window.angular) {
                    b = k.attr(d, "ui-sref");
                    if (!a) {
                        return !!b
                    } else {
                        return k.clean(b)
                    }
                }
            } catch (h) {
                heatmap.log.err(h)
            }
        },
        fn2str: function(f, c) {
            var b, a = this;
            try {
                if (b = f["on" + c]) {
                    return a.clean(b.toString())
                } else {
                    if (b = a.attr(f, "ng-" + c)) {
                        return a.clean(b.toString())
                    }
                }
            } catch (d) {}
        },
        labelFor: function(f) {
            var e = this.attr(f, "for");
            if (e) {
                return document.getElementById(e)
            }
            var d = f.childNodes;
            for (var b = 0, a = Math.min(d.length, 10); b < a; b++) {
                if (/(INPUT|SELECT|TEXTAREA|BUTTON)/.test(d[b].tagName)) {
                    return d[b]
                }
            }
            var g = f.getElementsByTagName("INPUT");
            if (g && g[0]) {
                return g[0]
            }
        },
        isActive: function(c) {
            if (!c || c == document.body) {
                return true
            }
            var a = this;
            if (a.fn2str(c, "mousedown") || c.hm_oldmousedown) {
                return true
            }
            var b = c.tagName;
            if (a.fn2str(c, "click")) {
                return true
            }
            if (b == "A" && c.href) {
                return true
            }
            if (b == "OBJECT" || b == "EMBED") {
                return true
            }
            if (b == "INPUT" || b == "SELECT" || b == "TEXTAREA" || b == "BUTTON") {
                return true
            }
            if (b == "AREA" && c.href) {
                return true
            }
            if (b == "IFRAME") {
                return true
            }
            if (b == "LABEL" && a.labelFor(c)) {
                return true
            }
            if (a.getLibEvent(c)) {
                return true
            }
            if (a.ext("isActive", c)) {
                return true
            }
            return false
        },
        url: function(b) {
            if (b == document.body) {
                return ""
            }
            var l = this, m = "", f = b.tagName, k, h;
            if (k = l.fn2str(b, "mousedown")) {
                m = l.mix(k, b);
                if (!b.hm_oldmousedown) {
                    b.hm_oldmousedown = m
                }
            } else {
                if (b.hm_oldmousedown) {
                    m = b.hm_oldmousedown
                } else {
                    if (k = l.fn2str(b, "click")) {
                        m = l.mix(k + (b.href ? l.clean(b.href) : ""), b)
                    } else {
                        if (f == "A" && b.href) {
                            var i = l.attr(b, "href") || b.href;
                            if ((i == "#" || i == "") && l.getLibEvent(b)) {
                                m = l.getLibEvent(b, true)
                            } else {
                                m = l.clean(b.href)
                            }
                        } else {
                            if (f == "OBJECT" || f == "EMBED") {
                                var a = l.attr(b, "src") || b.src || l.attr(b, "data") || b.data;
                                if (a) {
                                    m = l.clean(a)
                                } else {
                                    for (var j = b.firstChild; j; j = j.nextSibling) {
                                        if (j.name && j.name.toLowerCase() == "movie") {
                                            m = l.clean(j.value)
                                        }
                                    }
                                }
                            } else {
                                if (f == "INPUT" || f == "SELECT" || f == "TEXTAREA" || f == "BUTTON") {
                                    var p = ""
                                      , d = (b.name || "");
                                    if (f == "INPUT") {
                                        p = (b.type ? b.type : "")
                                    }
                                    if (d || p) {
                                        m = l.clean(d + p)
                                    }
                                    if (!m && l.getLibEvent(b)) {
                                        m = l.getLibEvent(b, true)
                                    }
                                    if (!m) {
                                        m = "untitled"
                                    }
                                } else {
                                    if (f == "AREA" && b.href) {
                                        m = l.clean(b.href)
                                    } else {
                                        if (f == "IFRAME") {
                                            try {
                                                m = l.clean(b.src)
                                            } catch (g) {}
                                            if (!m) {
                                                m = "iframe"
                                            }
                                        } else {
                                            if (f == "LABEL" && (h = l.labelFor(b))) {
                                                m = l.url(h)
                                            } else {
                                                if (l.getLibEvent(b)) {
                                                    m = l.clean(l.ext("getURL", b) || "");
                                                    if (!m) {
                                                        m = l.getLibEvent(b, true)
                                                    }
                                                } else {
                                                    if (l.ext("isActive", b)) {
                                                        m = l.clean(l.ext("getURL", b) || "")
                                                    } else {
                                                        if (b.id) {
                                                            m = "id=" + l.clean(b.id)
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return (m ? m.replace(/[\s\n]+/gi, "").substr(0, 200) : "")
        },
        curl: function(G) {
            var J = this
              , p = window.location
              , j = J.ext("getCurrentURL")
              , f = /^([a-z]+):\/\/([^\/]+)/i;
            if (j && f.test(j)) {
                var A = j.match(f)
                  , q = /^www\./i
                  , o = (A && A.length == 3 ? A[2] : "").replace(q, "")
                  , w = p.host.replace(q, "")
                  , l = (o.length < w.length)
                  , h = (l ? o : w)
                  , B = (l ? w : o);
                if (B != h && B.slice(-h.length - 1) != "." + h) {
                    j = j.replace(f, "$1://" + p.host)
                }
            } else {
                j = p.href.replace(/#(.*)$/, "")
            }
            j = j.replace(/[\s\n]+/gi, "");
            j = j.replace(/[?&#]$/, "");
            j = j.replace(/'/g, "%27");
            j = j.replace(/(http[^#]+)(#heatmap.*)/gi, "$1");
            var z = "", C = "", g = "", c = "", H;
            try {
                if (j.match(/\?/)) {
                    H = document.createElement("a");
                    H.href = j;
                    var k = H.search.substr(1);
                    var I = k.split("&");
                    I.sort();
                    var y = ["utm_source", "utm_medium", "utm_term", "utm_campaign", "utm_content", "utm_referrer", "utm_expid", "gclid", "_ga", "fbclid"];
                    var s = ["fus", "fum", "fut", "fuc", "fuo"];
                    var x = I.length
                      , v = s.length;
                    var b = (Array.prototype.indexOf ? function(a, e) {
                        return a.indexOf(e)
                    }
                    : function(a, t) {
                        for (var m = 0, e = a.length; m < e; m++) {
                            if (a[m] === t) {
                                return m
                            }
                        }
                        return -1
                    }
                    );
                    for (var D = 0; D < x; D++) {
                        var F = I[D].split("=");
                        var d = b(y, F[0].toLowerCase());
                        if (d >= 0) {
                            if (G && d < v) {
                                z += "&" + s[d] + "=" + F[1]
                            }
                        } else {
                            C += (C ? "&" : "") + I[D]
                        }
                    }
                    H.search = (C ? "?" + C : "");
                    j = H.href;
                    if (!C) {
                        j = j.replace(/(?:[?&])(#|$)/, "$1")
                    }
                }
                if (G) {
                    try {
                        g = document.referrer
                    } catch (r) {}
                    if (g) {
                        H = document.createElement("a");
                        H.href = g;
                        g = H.hostname;
                        z += "&fr=" + encodeURIComponent(g)
                    }
                    var K = J.ext("getTemplates", j), n = (K ? K.length : 0), u;
                    if (n) {
                        for (var D = 0; D < n; D++) {
                            u = K[D];
                            if (u && u.name && (u.value || u.on)) {
                                c += (c ? "." : "") + J.h(u.name)
                            }
                        }
                    }
                }
            } catch (E) {
                heatmap.log.err(E)
            }
            return G ? {
                url: j,
                filter: z,
                referrer: g,
                templates: c || "."
            } : j
        },
        query: function(d) {
            var b = this
              , c = ""
              , a = "";
            for (a in d) {
                if (d.hasOwnProperty && !d.hasOwnProperty(a)) {
                    continue
                }
                if (d[a] === "") {
                    continue
                }
                c += (c ? "&" : "") + encodeURIComponent(a) + "=" + encodeURIComponent(typeof (d[a]) == "object" ? b.query(d[a]) : d[a])
            }
            return c
        },
        conv: function(b, e) {
            var g = this, a = 0, l = g.ext("getConversions", b, e), j = {}, c = "", h;
            if (l) {
                if (l.length) {
                    for (var d = 0, f = l.length; d < f; d++) {
                        c = l[d].name;
                        h = parseFloat(l[d].value);
                        if (!isNaN(h) && h) {
                            j[c] = h;
                            a++
                        }
                    }
                } else {
                    for (c in l) {
                        if (l.hasOwnProperty && !l.hasOwnProperty(c)) {
                            continue
                        }
                        h = parseFloat(l[c]);
                        if (!isNaN(h) && h) {
                            j[c] = h;
                            a++
                        }
                    }
                }
            }
            return (a ? j : "")
        },
        sid: function(n) {
            var o = this, a = o.ext("getSessionName"), k;
            if (!a) {
                return ""
            }
            a = a.replace(/[^a-zA-Z_]/g, "");
            if (!o.sid.id) {
                k = document.cookie.match(new RegExp(a + "[^;]*=[^;]*\\d+_\\d+[^;]*","gi"));
                if (k) {
                    var f = k[0].match(/\d+/gi);
                    o.sid.id = f[0];
                    o.sid.n = f[1]
                }
            }
            if (!o.sid.id) {
                o.sid.id = 1 + Math.floor(Math.random() * 2147483646);
                o.sid.n = 0;
                n = true
            }
            if (n) {
                o.sid.n++;
                k = o.sid.id + "_" + o.sid.n;
                var l = new RegExp(a + "[^;]*=[^;]*" + k,"gi");
                var e = new Date();
                e.setTime(e.getTime() + 1800000);
                var b = window.location.hostname.split(".").reverse(), j, h;
                for (j = b[0],
                h = 1; h < b.length; h++) {
                    try {
                        j = b[h] + "." + j;
                        document.cookie = a + "=" + k + "; expires=" + e.toGMTString() + "; SameSite=Lax; path=/; domain=" + j;
                        if (document.cookie.match(l)) {
                            break
                        }
                    } catch (g) {}
                }
            }
            return o.sid.id + "_" + o.sid.n
        },
        isDisabled: function(c) {
            var a = this;
            if (a.disabled) {
                return true
            }
            var b = a.ext("recordDisabled") || a.ext("logDisabled");
            return (b == "pv" ? b == c : b)
        },
        pv: function(d) {
            var b = this;
            var a = b.curl(true);
            if (b.isDisabled("pv")) {
                b.ourl = a
            }
            if (!b.ourl || b.ourl.url != a.url) {
                b.ourl = a;
                b.lastEvent = null;
                b.lastTime = 0;
                b.lastTarget = null;
                b.logs = [];
                b.logs[0] = {
                    i1: new Image()
                };
                var g = b.ext("getTitle") || document.title
                  , f = {
                    pid: heatmap.property_id || 0,
                    u: a.url,
                    tpl: a.templates,
                    sid: b.sid(true),
                    conv: b.conv(a.url),
                    pw: b.ext("getAuthor") || "",
                    pt: (g ? g.substr(0, 200) : ""),
                    debug: (b.debug ? 1 : ""),
                    t: Math.floor(999999 * Math.random())
                };
                b.logs[0].i1.src = "//" + heatmap.dom_api + "/log/pv?" + b.query(f) + a.filter
            }
            if (!d) {
                d = window.event
            }
            if (d) {
                var c = (d.target || d.srcElement);
                if (c) {
                    c = b.target(c);
                    if (c && c.onmousedown && !c.hm_oldmousedown) {
                        b.url(c)
                    }
                }
            }
        },
        clk: function(r) {
            var s = this;
            if (s.isDisabled()) {
                return
            }
            if (!s.ourl) {
                s.pv()
            }
            if (!r) {
                r = window.event
            }
            if (!r || r == s.lastEvent) {
                return
            }
            s.lastEvent = r;
            var k = (r.target || r.srcElement);
            if (!k) {
                return
            }
            var n = (new Date()).getTime();
            if (s.lastTarget == k && (n - (s.lastTime || 0)) < 500) {
                return
            }
            s.lastTarget = k;
            s.lastTime = n;
            var l = s.mpos(r)
              , j = l.x
              , h = l.y;
            var i = s.target(k);
            if (i == document.body) {
                var a = s.ws();
                if (Math.abs(a.r - j) < 20 || Math.abs(a.b - h) < 20) {
                    return
                }
                var p = s.ext("align");
                if (!p || p == "center") {
                    h = -h;
                    j -= Math.floor(Math.max(a.w, s.ds().w) / 2)
                }
            }
            var m, d = "", c = 0;
            try {
                m = (s.use_bcr(i) ? s.pos_bcr(i) : s.pos(i))
            } catch (q) {
                m = {
                    x: 0,
                    y: 0
                };
                d = q.message || q.toString()
            }
            var o = s.trou(i);
            if (m.bcr && i != document.body) {
                c = 100000;
                if (Math.random() < 0.1 && i && i.tagName != "SELECT") {
                    if (!m.w || !m.h) {
                        d = "bcr flat"
                    }
                    if (d) {
                        d += " " + s.h(o.r + "|" + o.u)
                    }
                }
                if (Math.random() < 0.1 && !i) {
                    d = "no target"
                }
            }
            var b = (new Date()).getTime();
            if ((s.maxTime || -1) < (b - n)) {
                s.maxTime = (b - n)
            }
            if (o.t) {
                var g = s.logs.length;
                var f = {
                    pid: heatmap.property_id || 0,
                    u: s.ourl.url,
                    sid: s.sid(),
                    dpath: o.path,
                    durl: o.url,
                    dt: o.t,
                    dr: o.r,
                    "do": o.o,
                    du: o.u,
                    mx: Math.round(j - m.x) + c,
                    my: Math.round(h - m.y),
                    mn: g,
                    mt: s.maxTime,
                    conv: s.conv(s.ourl.url, i),
                    debug: (s.debug ? 1 : ""),
                    t: Math.floor(999999 * Math.random())
                };
                if (d) {
                    f.err = d.substr(0, 50)
                }
                s.logs[g] = {
                    i1: new Image()
                };
                s.logs[g].i1.src = "//" + heatmap.dom_api + "/log/clk?" + s.query(f) + s.ourl.filter
            } else {}
            if (!s.ourl || s.ourl.url != s.curl()) {
                s.pv()
            }
        },
        target: function(d) {
            var b = this
              , c = d
              , a = document.body;
            while (c && !b.isActive(c)) {
                c = c.parentNode
            }
            if (c == a) {
                c = d;
                while (c && !c.id && c != a) {
                    c = c.parentNode
                }
            }
            return c || a
        },
        cook: function(i) {
            var j = this
              , b = (window.location.hash || "")
              , e = j.h(b);
            if (i || j.cook.h != e) {
                j.cook.h = e;
                var g = 17947688
                  , d = 1229391198
                  , f = 592273765
                  , o = -634150890
                  , k = j.h(navigator.userAgent.substr(12, 19))
                  , c = j.h(b.substring(0, 9))
                  , n = b.substr(9);
                if (i || e == g || e == d) {
                    j.cook.v = Math.round(((new Date()).getTime() - (new Date("01/01/2019")).getTime()) / 1000);
                    j.cook.s = (e == d ? n : "")
                } else {
                    if (c == f && n) {
                        heatmap.hmuiauth = n;
                        j.cook.v = Math.abs(j.h(n));
                        j.cook.s = ""
                    } else {
                        if (k == o) {
                            j.cook.v = Math.abs(j.h(navigator.userAgent));
                            j.cook.s = ""
                        } else {
                            var a = document.cookie.match(/\W*hmuiauth\W*=([^;@]*)([^;]*)/i);
                            j.cook.v = Math.abs(j.h(a ? a[1] : ""));
                            j.cook.s = (a && a[2] ? a[2].substr(1) : "")
                        }
                    }
                }
            }
            return (j.cook.v ? {
                v: j.cook.v,
                d3v: j.cook.s
            } : null)
        },
        keydown: function(c) {
            var b = this;
            if (b.ext("altShiftH") === false) {
                return
            }
            if (!c) {
                c = window.event
            }
            if (!c) {
                return
            }
            var a = String.fromCharCode(c.keyCode);
            if (a) {
                a = (c.altKey ? "ALT-" : "") + (c.ctrlKey ? "CTRL-" : "") + (c.metaKey ? "META-" : "") + (c.shiftKey ? "SHIFT-" : "") + a;
                if (a && b.h(a) == 1575243174) {
                    b.startui()
                }
            }
        },
        load: function(c) {
            var d = navigator.userAgent.toLowerCase()
              , b = (d.indexOf("msie") != -1) ? parseInt(d.split("msie")[1]) : false
              , a = function() {
                var f = document.createElement("script");
                f.type = "text/javascript";
                f.async = true;
                f.src = c;
                var e = document.getElementsByTagName("script")[0];
                e.parentNode.insertBefore(f, e)
            };
            if (b && b < 9) {
                window.setTimeout(a, 1)
            } else {
                a()
            }
        },
        startui: function() {
            var a = this;
            if (heatmap.sidebar) {
                heatmap.sidebar.toggleAll()
            } else {
                if (!a.disabled) {
                    var b = a.cook();
                    if (!b) {
                        b = a.cook(1)
                    }
                    a.load("//" + (b.d3v || "u.heatmap.it/ui.js") + "?v=" + b.v)
                }
            }
            a.disabled = true
        },
        listen: function(c, b, d) {
            var a = function(g, f, k, j, i) {
                try {
                    return b(g, f, k, j, i)
                } catch (h) {
                    heatmap.log.err(h)
                }
            };
            if (!d) {
                d = document
            }
            if (d.addEventListener) {
                d.addEventListener(c, a, true)
            } else {
                if (d.attachEvent) {
                    d.attachEvent("on" + c, a)
                }
            }
        },
        err: function(g) {
            if (!g) {
                return
            }
            var c = this;
            if (!c.err.i) {
                c.err.i = []
            } else {
                if (!c.disabled && c.err.i.length > 10) {
                    return
                }
            }
            if (typeof g == "string") {
                g = new Error(g)
            }
            var h = g.message || g.description || "";
            var b = g.stack || "";
            if (h && b && b.indexOf(h) > -1) {
                h = b
            } else {
                h += " " + b
            }
            var a = h.match(/([\.\/\w_:-]*.js):(\d*):(\d*)/i);
            h = h.replace(/[\n\r\s]/g, " ").replace(/\s{2,}/g, " ").replace(/(^\s|\s$)/g, "");
            h = h.replace(/\s\([^\s]*?(\d+):(\d+)\)\s/g, "@$1:$2 ");
            h = h.replace(/@[^\s]*?(\d+):(\d+)(\s|$)/g, "@$1:$2$3");
            var f = {
                u: c.curl(),
                m: h,
                p: (c.disabled ? "ui" : "log." + c.version) + ".js",
                l: ((a ? (a[2] > 2 ? a[2] : a[3]) : 0) || g.line || g.lineNumber || g.lineno || 0),
                t: Math.floor(999999 * Math.random())
            };
            if (!f.m || (/(^Script error|isTrusted=true)/i).test(f.m)) {
                return
            }
            var d = new Image();
            d.src = "//" + (heatmap.dom_api || "eu4.heatmap.it") + "/log/err?" + c.query(f);
            c.err.i.push(d)
        },
        conf: function() {
            var a = this
              , b = a.cook();
            if (a.confed) {
                return
            } else {
                a.confed = true
            }
            if (b && b.d3v) {
                a.startui()
            } else {
                if (!(/\b(googlebot|mediapartners|adsbot|bot)\b/i).test(navigator.userAgent)) {
                    a.load("//u.heatmap.it/conf/" + window.location.hostname + ".js")
                }
            }
            a.listen("keydown", function(c) {
                return a.keydown(c)
            })
        },
        start: function(a, d) {
            var b = this;
            heatmap.dom_api = (d || "m1") + ".heatmap.it";
            if (!a) {
                return
            } else {
                heatmap.property_id = a
            }
            if (b.started) {
                return
            } else {
                b.started = true
            }
            if (b.cook()) {
                b.startui()
            } else {
                b.pv();
                b.listen("mouseover", function(g) {
                    b.pv(g)
                });
                b.listen("mousedown", function(g) {
                    b.clk(g)
                });
                b.ifr();
                b.listen("hashchange", function(g) {
                    b.pv()
                });
                window.setInterval(function() {
                    try {
                        var h = window.location.href;
                        if (b.loc != h) {
                            if (b.loc) {
                                b.pv()
                            }
                            b.loc = h
                        }
                    } catch (g) {
                        heatmap.log.err(g)
                    }
                }, 1000);
                if (self != top && top && top.postMessage) {
                    try {
                        b.listen("message", function(h) {
                            var g = /^\w+:\/\/([^/]+\.)?heatmap\.(com|it|me)/;
                            if (!g.test(h.origin)) {
                                return
                            }
                            if (b.h(("" + h.data).substring(0, 17)) == 654510517) {
                                heatmap.hmuiauth = ("" + h.data).substring(17);
                                b.startui()
                            }
                        }, self);
                        var e = window.location;
                        var f = e.protocol + "//" + e.hostname;
                        top.postMessage("heatmap.started?" + a + "?" + f, "https://heatmap.it")
                    } catch (c) {
                        heatmap.log.err(c)
                    }
                }
            }
        }
    }
}