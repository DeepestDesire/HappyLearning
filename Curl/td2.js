function td_collect_exe() {
    ! function() {
        var f = _JdJrTdRiskFp.getData();
        ! function(f, r, u) {
            _JdJrRiskClientStorage.get("3AB9D23F7A4B3C9B", function(m) {
                var t = {
                    pin: _jdJrTdCommonsObtainPin(),
                    oid: f,
                    p: "https:" == document.location.protocol ? "s" : "h",
                    fp: u,
                    v: "2.4.10.1",
                    f: "1"
                };
                try {
                    t.o = _CurrentPageUrl, t.qs = _url_query_str
                } catch (e) {}
                void 0 !== m && null !== m && 0 < m.length && (_JdEid = m, _eidFlag = !0);
                void 0 !== _JdEid && 0 < _JdEid.length && (t.fc = _JdEid);
                m = !1;
                m = navigator.userAgent;
                m = 0 < m.indexOf("MSIE 7.0") || 0 < m.indexOf("MSIE 8.0") || 0 < m.indexOf("MSIE 9.0");
                try {
                    t.t = jd_risk_token_id
                } catch (e) {}
                try {
                    if ("undefined" != typeof gia_fp_qd_uuid && 0 <= gia_fp_qd_uuid.length) t.qi = gia_fp_qd_uuid;
                    else {
                        var x = _JdJrRiskClientStorage.jdtdstorage_cookie("qd_uid");
                        t.qi = void 0 == x ? "" : x
                    }
                } catch (e) {}
                t = "?a=" + (m ? encodeURIComponent(td_collect.tdencrypt(t)) : td_collect.tdencrypt(t));
                _JdJrRiskClientCollectData = td_collect.collect();
                x = [];
                x.g = td_collect.tdencrypt(r);
                x.d = _JdJrRiskClientCollectData;
                jdJrTdsendCorsRequest(_CurrentPageProtocol + _JdJrTdRiskDomainName + "/fcf.html" + t, x, t, function(f) {
                    var e = f;
                    0 < f.indexOf("*_*") && (e = f.split("*_*", 2), f = JSON.parse(e[1]), e = f.eid, _jd_e_joint_ = f);
                    32 <= e.length && 91 >= e.length && (_JdEid = e, _eidFlag = !0, _JdJrRiskClientStorage.set("3AB9D23F7A4B3C9B", e), _jdJrTdRelationEidPin(_JdEid), _JdJrReleaseResource())
                })
            })
        }("string" == typeof orderId ? orderId : "", f, _JdJrTdRiskFpInfo)
    }()
}

function jdJrTdsendCorsRequest(f, m, r, u) {
    try {
        var w = navigator.userAgent;
        if (0 < w.indexOf("MSIE") && (0 < w.indexOf("MSIE 7.0") || 0 < w.indexOf("MSIE 8.0") || 0 < w.indexOf("MSIE 9.0"))) return r += "&g=" + encodeURIComponent(m.g), jdJrTdsendJsonpRequest("fc.html", r);
        try {
            var t = new window.XMLHttpRequest
        } catch (e) {}
        if (!t) try {
            t = new window.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
        if (!t) try {
            t = new window.ActiveXObject("Msxml2.XMLHTTP")
        } catch (e) {}
        if (!t) try {
            t = new window.ActiveXObject("Msxml3.XMLHTTP")
        } catch (e) {}
        t.open("POST", f, !0);
        t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
        t.onreadystatechange = function() {
            4 === t.readyState && 200 === t.status && u(t.responseText)
        };
        f = "";
        for (var x in m) f += ("" == f ? "" : "&") + x + "=" + m[x];
        t.send(f)
    } catch (e) {}
}

function jdJrTdsendJsonpRequest(f, m) {
    try {
        var r = document.createElement("script");
        r.src = _CurrentPageProtocol + _JdJrTdRiskDomainName + "/" + f + m;
        document.body.appendChild(r)
    } catch (u) {}
}

function _JdJrReleaseResource() {
    var f = document.getElementById("userdata_el");
    f && f.parentNode && f.parentNode.removeChild(f);
    _JdJrRiskClientStorage = _JdJrTdRiskFp = _JdJrRiskClientCollectData = null
}

function callEidfingerRisk_3AB9D23F7A4B3C9B(f) {
    try {
        32 <= f.length && (_eidFlag = !0, _JdEid = f, _JdJrRiskClientStorage.set("3AB9D23F7A4B3C9B", f), _jdJrTdRelationEidPin(f)), _JdJrReleaseResource()
    } catch (m) {}
}

function getJdEid(f, m, r) {
    if ("function" != typeof f) throw Error("callback must be a function.");
    if (void 0 === m && (m = 1), void 0 === r && (r = 15), !_eidFlag && m < r) setTimeout(function() {
        getJdEid(f, m, r)
    }, 15 * m), m++;
    else {
        _JdTdudfp.eid = !_JdEid || 120 < _JdEid.length ? "" : _JdEid;
        _JdTdudfp.fp = _JdJrTdRiskFpInfo;
        try {
            _JdTdudfp.date = Date.parse(new Date), _JdTdudfp.token = "string" == typeof jd_risk_token_id ? jd_risk_token_id : ""
        } catch (u) {}
        f(_JdEid, _JdJrTdRiskFpInfo, _JdTdudfp)
    }
}

function JdJrTdFingerDataStream(f, m, r) {
    if (void 0 === f || 0 == f) throw Error("sourceCode can not be null.");
    if (void 0 === m && (m = 1), void 0 === r && (r = 15), !_eidFlag && m < r) setTimeout(function() {
        JdJrTdFingerDataStream(f, m, r)
    }, 20 * m), m++;
    else if ("undefined" != typeof jd_risk_token_id && 0 < _JdEid.length && 0 < _JdJrTdRiskFpInfo.length) {
        var u = _jdJrTdCommonsObtainPin();
        0 < u.length && (u = {
            p: u,
            fp: _JdJrTdRiskFpInfo,
            e: _JdEid,
            ct: (new Date).getTime(),
            t: jd_risk_token_id,
            opt: f
        }, jdJrTdsendJsonpRequest("stream.html", "?c=" + td_collect.tdencrypt(u)))
    }
}

function _jdJrTdRelationEidPin(f) {
    try {
        if (32 <= f.length) {
            var m = _jdJrTdCommonsObtainPin();
            if (0 < m.length) {
                f = {
                    o: _CurrentPageUrl,
                    p: m,
                    e: f,
                    f: _JdJrTdRiskFpInfo
                };
                var r = navigator.userAgent,
                    u = 0 < r.indexOf("MSIE 7.0") || 0 < r.indexOf("MSIE 8.0") || 0 < r.indexOf("MSIE 9.0") ? encodeURIComponent(td_collect.tdencrypt(f)) : td_collect.tdencrypt(f);
                jdJrTdsendJsonpRequest("r.html?v=" + Math.random() + "&d=" + u, "")
            }
        }
    } catch (w) {}
}

function _jdJrTdCommonsObtainPin() {
    var f = "";
    return "string" == typeof pin ? f = pin : "object" == typeof pin && "string" == typeof jd_jr_td_risk_pin && (f = jd_jr_td_risk_pin), f
}
var start_time = (new Date).getTime(),
    _CurrentPageProtocol = "https:" == document.location.protocol ? "https://" : "http://",
    _JdJrTdRiskDomainName = "gia.jd.com";
if (void 0 === _jd_load_td_finger_flag) {
    var _jd_load_td_finger_flag = !0,
        _jdfp_canvas_md5 = "",
        _jdfp_webgl_md5 = "",
        use_breakcollect = !0,
        _url_query_str = "",
        _root_domain = "",
        _CurrentPageUrl = function() {
            var f = document.location.href.toString();
            try {
                _root_domain = /^https?:\/\/(?:\w+\.)*?(\w*\.(?:com\.cn|cn|com|net|id))[\\\/]*/.exec(f)[1]
            } catch (u) {}
            var m = f.indexOf("?");
            0 < m && (500 < (_url_query_str = f.substring(m + 1)).length && (_url_query_str = _url_query_str.substring(0, 499)), f = f.substring(0, m));
            var r = (f = f.substring(_CurrentPageProtocol.length)).indexOf("joybuy.com");
            return -1 < r && (-1 == m || r < m) && (_JdJrTdRiskDomainName = "gia.joybuy.com"), f
        }();
    try {
        "undefined" == typeof _jd_load_td_finger_switch || _jd_load_td_finger_switch || (_jd_load_td_finger_flag = !1)
    } catch (f) {}! function() {
        if (_jd_load_td_finger_flag) {
            var f = document.createElement("script");
            f.src = _CurrentPageProtocol + _JdJrTdRiskDomainName + "/y.html?v=" + Math.random() + "&o=" + _CurrentPageUrl;
            f.async = !1;
            document.body.appendChild(f)
        }
    }();
    (function(f, m, r) {
        "undefined" != typeof module && module.exports ? module.exports = r() : m.JdJrTdRiskFinger = r()
    })(0, this, function() {
        function f(a) {
            if (null == a || void 0 == a || "" == a) var c = "undefined";
            else {
                if (null == a || void 0 == a || "" == a) c = "";
                else {
                    c = [];
                    for (var b = (1 << A) - 1, h = 0; h < a.length * A; h += A) c[h >> 5] |= (a.charCodeAt(h / A) & b) << h % 32
                }
                a = a.length * A;
                c[a >> 5] |= 128 << a % 32;
                c[14 + (a + 64 >>> 9 << 4)] = a;
                a = 1732584193;
                b = -271733879;
                h = -1732584194;
                for (var g = 271733878, p = 0; p < c.length; p += 16) {
                    var d = a,
                        n = b,
                        f = h,
                        z = g;
                    b = t(b = t(b = t(b = t(b = w(b = w(b = w(b = w(b = u(b = u(b = u(b = u(b = r(b = r(b = r(b = r(b, h = r(h, g = r(g, a = r(a, b, h, g, c[p + 0], 7, -680876936), b, h, c[p + 1], 12, -389564586), a, b, c[p + 2], 17, 606105819), g, a, c[p + 3], 22, -1044525330), h = r(h, g = r(g, a = r(a, b, h, g, c[p + 4], 7, -176418897), b, h, c[p + 5], 12, 1200080426), a, b, c[p + 6], 17, -1473231341), g, a, c[p + 7], 22, -45705983), h = r(h, g = r(g, a = r(a, b, h, g, c[p + 8], 7, 1770035416), b, h, c[p + 9], 12, -1958414417), a, b, c[p + 10], 17, -42063), g, a, c[p + 11], 22, -1990404162), h = r(h, g = r(g, a = r(a, b, h, g, c[p + 12], 7, 1804603682), b, h, c[p + 13], 12, -40341101), a, b, c[p + 14], 17, -1502002290), g, a, c[p + 15], 22, 1236535329), h = u(h, g = u(g, a = u(a, b, h, g, c[p + 1], 5, -165796510), b, h, c[p + 6], 9, -1069501632), a, b, c[p + 11], 14, 643717713), g, a, c[p + 0], 20, -373897302), h = u(h, g = u(g, a = u(a, b, h, g, c[p + 5], 5, -701558691), b, h, c[p + 10], 9, 38016083), a, b, c[p + 15], 14, -660478335), g, a, c[p + 4], 20, -405537848), h = u(h, g = u(g, a = u(a, b, h, g, c[p + 9], 5, 568446438), b, h, c[p + 14], 9, -1019803690), a, b, c[p + 3], 14, -187363961), g, a, c[p + 8], 20, 1163531501), h = u(h, g = u(g, a = u(a, b, h, g, c[p + 13], 5, -1444681467), b, h, c[p + 2], 9, -51403784), a, b, c[p + 7], 14, 1735328473), g, a, c[p + 12], 20, -1926607734), h = w(h, g = w(g, a = w(a, b, h, g, c[p + 5], 4, -378558), b, h, c[p + 8], 11, -2022574463), a, b, c[p + 11], 16, 1839030562), g, a, c[p + 14], 23, -35309556), h = w(h, g = w(g, a = w(a, b, h, g, c[p + 1], 4, -1530992060), b, h, c[p + 4], 11, 1272893353), a, b, c[p + 7], 16, -155497632), g, a, c[p + 10], 23, -1094730640), h = w(h, g = w(g, a = w(a, b, h, g, c[p + 13], 4, 681279174), b, h, c[p + 0], 11, -358537222), a, b, c[p + 3], 16, -722521979), g, a, c[p + 6], 23, 76029189), h = w(h, g = w(g, a = w(a, b, h, g, c[p + 9], 4, -640364487), b, h, c[p + 12], 11, -421815835), a, b, c[p + 15], 16, 530742520), g, a, c[p + 2], 23, -995338651), h = t(h, g = t(g, a = t(a, b, h, g, c[p + 0], 6, -198630844), b, h, c[p + 7], 10, 1126891415), a, b, c[p + 14], 15, -1416354905), g, a, c[p + 5], 21, -57434055), h = t(h, g = t(g, a = t(a, b, h, g, c[p + 12], 6, 1700485571), b, h, c[p + 3], 10, -1894986606), a, b, c[p + 10], 15, -1051523), g, a, c[p + 1], 21, -2054922799), h = t(h, g = t(g, a = t(a, b, h, g, c[p + 8], 6, 1873313359), b, h, c[p + 15], 10, -30611744), a, b, c[p + 6], 15, -1560198380), g, a, c[p + 13], 21, 1309151649), h = t(h, g = t(g, a = t(a, b, h, g, c[p + 4], 6, -145523070), b, h, c[p + 11], 10, -1120210379), a, b, c[p + 2], 15, 718787259), g, a, c[p + 9], 21, -343485551);
                    a = x(a, d);
                    b = x(b, n);
                    h = x(h, f);
                    g = x(g, z)
                }
                c = [a, b, h, g];
                a = e ? "0123456789ABCDEF" : "0123456789abcdef";
                b = "";
                for (h = 0; h < 4 * c.length; h++) b += a.charAt(c[h >> 2] >> h % 4 * 8 + 4 & 15) + a.charAt(c[h >> 2] >> h % 4 * 8 & 15);
                c = b
            }
            return c
        }

        function m(a, c, b, h, g, d) {
            a = x(x(c, a), x(h, d));
            return x(a << g | a >>> 32 - g, b)
        }

        function r(a, c, b, h, g, d, n) {
            return m(c & b | ~c & h, a, c, g, d, n)
        }

        function u(a, c, b, h, g, d, n) {
            return m(c & h | b & ~h, a, c, g, d, n)
        }

        function w(a, c, b, h, g, d, n) {
            return m(c ^ b ^ h, a, c, g, d, n)
        }

        function t(a, c, b, h, g, d, n) {
            return m(b ^ (c | ~h), a, c, g, d, n)
        }

        function x(a, c) {
            var b = (65535 & a) + (65535 & c);
            return (a >> 16) + (c >> 16) + (b >> 16) << 16 | 65535 & b
        }
        var e = 0,
            A = 8,
            k = {},
            d = navigator.userAgent.toLowerCase(),
            B = navigator.language || navigator.browserLanguage; - 1 == d.indexOf("ipad") && -1 == d.indexOf("iphone os") && -1 == d.indexOf("midp") && -1 == d.indexOf("rv:1.2.3.4") && -1 == d.indexOf("ucweb") && -1 == d.indexOf("android") && -1 == d.indexOf("windows ce") && d.indexOf("windows mobile");
        var q = "NA",
            y = "NA";
        try {
            -1 != d.indexOf("win") && -1 != d.indexOf("95") && (q = "windows", y = "95"), -1 != d.indexOf("win") && -1 != d.indexOf("98") && (q = "windows", y = "98"), -1 != d.indexOf("win 9x") && -1 != d.indexOf("4.90") && (q = "windows", y = "me"), -1 != d.indexOf("win") && -1 != d.indexOf("nt 5.0") && (q = "windows", y = "2000"), -1 != d.indexOf("win") && -1 != d.indexOf("nt") && (q = "windows", y = "NT"), -1 != d.indexOf("win") && -1 != d.indexOf("nt 5.1") && (q = "windows", y = "xp"), -1 != d.indexOf("win") && -1 != d.indexOf("32") && (q = "windows", y = "32"), -1 != d.indexOf("win") && -1 != d.indexOf("nt 5.1") && (q = "windows", y = "7"), -1 != d.indexOf("win") && -1 != d.indexOf("6.0") && (q = "windows", y = "8"), -1 == d.indexOf("win") || -1 == d.indexOf("nt 6.0") && -1 == d.indexOf("nt 6.1") || (q = "windows", y = "9"), -1 != d.indexOf("win") && -1 != d.indexOf("nt 6.2") && (q = "windows", y = "10"), -1 != d.indexOf("linux") && (q = "linux"), -1 != d.indexOf("unix") && (q = "unix"), -1 != d.indexOf("sun") && -1 != d.indexOf("os") && (q = "sun os"), -1 != d.indexOf("ibm") && -1 != d.indexOf("os") && (q = "ibm os/2"), -1 != d.indexOf("mac") && -1 != d.indexOf("pc") && (q = "mac"), -1 != d.indexOf("aix") && (q = "aix"), -1 != d.indexOf("powerpc") && (q = "powerPC"), -1 != d.indexOf("hpux") && (q = "hpux"), -1 != d.indexOf("netbsd") && (q = "NetBSD"), -1 != d.indexOf("bsd") && (q = "BSD"), -1 != d.indexOf("osf1") && (q = "OSF1"), -1 != d.indexOf("irix") && (q = "IRIX", y = ""), -1 != d.indexOf("freebsd") && (q = "FreeBSD"), -1 != d.indexOf("symbianos") && (q = "SymbianOS", y = d.substring(d.indexOf("SymbianOS/") + 10, 3))
        } catch (a) {}
        var l = "NA",
            v = "NA",
            n = "";
        try {
            -1 != d.indexOf("msie") && (l = "ie", (v = d.substring(d.indexOf("msie ") + 5)).indexOf(";") && (v = v.substring(0, v.indexOf(";")))), -1 != d.indexOf("firefox") && (l = "Firefox", v = d.substring(d.indexOf("firefox/") + 8)), -1 != d.indexOf("opera") && (l = "Opera", v = d.substring(d.indexOf("opera/") + 6, 4)), -1 != d.indexOf("safari") && (l = "safari", v = d.substring(d.indexOf("safari/") + 7)), -1 != d.indexOf("chrome") && (l = "chrome", (v = d.substring(d.indexOf("chrome/") + 7)).indexOf(" ") && (v = v.substring(0, v.indexOf(" ")), "" != (n = v) && n.indexOf(".") && (n = v.substring(0, v.indexOf("."))))), -1 != d.indexOf("navigator") && (l = "navigator", v = d.substring(d.indexOf("navigator/") + 10)), -1 != d.indexOf("applewebkit") && (l = "applewebkit_chrome", (v = d.substring(d.indexOf("applewebkit/") + 12)).indexOf(" ") && (v = v.substring(0, v.indexOf(" ")))), -1 != d.indexOf("sogoumobilebrowser") && (l = "\u641c\u72d7\u624b\u673a\u6d4f\u89c8\u5668"), -1 == d.indexOf("ucbrowser") && -1 == d.indexOf("ucweb") || (l = "UC\u6d4f\u89c8\u5668"), -1 == d.indexOf("qqbrowser") && -1 == d.indexOf("tencenttraveler") || (l = "QQ\u6d4f\u89c8\u5668"), -1 != d.indexOf("metasr") && (l = "\u641c\u72d7\u6d4f\u89c8\u5668"), -1 != d.indexOf("360se") && (l = "360\u6d4f\u89c8\u5668"), -1 != d.indexOf("the world") && (l = "\u4e16\u754c\u4e4b\u7a97\u6d4f\u89c8\u5668"), -1 != d.indexOf("maxthon") && (l = "\u9068\u6e38\u6d4f\u89c8\u5668")
        } catch (a) {}
        var z = function(a) {
            this.options = this.extend(a, {});
            this.nativeForEach = Array.prototype.forEach;
            this.nativeMap = Array.prototype.map
        };
        return z.prototype = {
            extend: function(a, c) {
                if (null == a) return c;
                for (var b in a) null != a[b] && c[b] !== a[b] && (c[b] = a[b]);
                return c
            },
            getData: function() {
                return k
            },
            get: function(a) {
                var c = 1 * v,
                    b = [];
                "ie" == l && 7 <= c ? (b.push(d), b.push(B), k.userAgent = f(d), k.language = B, this.browserRedirect(d)) : (b = this.userAgentKey(b), b = this.languageKey(b));
                b.push(l);
                b.push(v);
                b.push(q);
                b.push(y);
                k.os = q;
                k.osVersion = y;
                k.browser = l;
                k.browserVersion = v;
                b = this.colorDepthKey(b);
                b = this.screenResolutionKey(b);
                b = this.timezoneOffsetKey(b);
                b = this.sessionStorageKey(b);
                b = this.localStorageKey(b);
                b = this.indexedDbKey(b);
                b = this.addBehaviorKey(b);
                b = this.openDatabaseKey(b);
                b = this.cpuClassKey(b);
                b = this.platformKey(b);
                b = this.hardwareConcurrencyKey(b);
                b = this.audioKey(b);
                b = this.doNotTrackKey(b);
                b = this.pluginsKey(b);
                b = this.canvasKey(b);
                c = this.webglKey(b).join("~~~");
                return a(this.x64hash128(c, 31))
            },
            userAgentKey: function(a) {
                return this.options.excludeUserAgent || (a.push(navigator.userAgent), k.userAgent = f(navigator.userAgent), this.browserRedirect(navigator.userAgent)), a
            },
            replaceAll: function(a, c, b) {
                for (; 0 <= a.indexOf(c);) a = a.replace(c, b);
                return a
            },
            browserRedirect: function(a) {
                var c = a.toLowerCase();
                a = "ipad" == c.match(/ipad/i);
                var b = "iphone os" == c.match(/iphone os/i),
                    h = "midp" == c.match(/midp/i),
                    g = "rv:1.2.3.4" == c.match(/rv:1.2.3.4/i),
                    d = "ucweb" == c.match(/ucweb/i),
                    n = "android" == c.match(/android/i),
                    f = "windows ce" == c.match(/windows ce/i);
                c = "windows mobile" == c.match(/windows mobile/i);
                k.origin = a || b || h || g || d || n || f || c ? "mobile" : "pc"
            },
            languageKey: function(a) {
                return this.options.excludeLanguage || (a.push(navigator.language), k.language = this.replaceAll(navigator.language, " ", "_")), a
            },
            colorDepthKey: function(a) {
                return this.options.excludeColorDepth || (a.push(screen.colorDepth), k.colorDepth = screen.colorDepth), a
            },
            screenResolutionKey: function(a) {
                if (!this.options.excludeScreenResolution) {
                    var c = this.getScreenResolution();
                    void 0 !== c && (a.push(c.join("x")), k.screenResolution = c.join("x"))
                }
                return a
            },
            getScreenResolution: function() {
                return this.options.detectScreenOrientation ? screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height] : [screen.height, screen.width]
            },
            timezoneOffsetKey: function(a) {
                return this.options.excludeTimezoneOffset || (a.push((new Date).getTimezoneOffset()), k.timezoneOffset = (new Date).getTimezoneOffset() / 60), a
            },
            sessionStorageKey: function(a) {
                return !this.options.excludeSessionStorage && this.hasSessionStorage() && (a.push("sessionStorageKey"), k.sessionStorage = !0), a
            },
            localStorageKey: function(a) {
                return !this.options.excludeSessionStorage && this.hasLocalStorage() && (a.push("localStorageKey"), k.localStorage = !0), a
            },
            indexedDbKey: function(a) {
                return !this.options.excludeIndexedDB && this.hasIndexedDB() && (a.push("indexedDbKey"), k.indexedDb = !0), a
            },
            addBehaviorKey: function(a) {
                return document.body && !this.options.excludeAddBehavior && document.body.addBehavior ? (a.push("addBehaviorKey"), k.addBehavior = !0) : k.addBehavior = !1, a
            },
            openDatabaseKey: function(a) {
                return !this.options.excludeOpenDatabase && window.openDatabase ? (a.push("openDatabase"), k.openDatabase = !0) : k.openDatabase = !1, a
            },
            cpuClassKey: function(a) {
                return this.options.excludeCpuClass || (k.cpu = this.getNavigatorCpuClass(), a.push(k.cpu)), a
            },
            platformKey: function(a) {
                return k.platform = this.getNavigatorPlatform(), a.push(k.platform), a
            },
            hardwareConcurrencyKey: function(a) {
                var c = this.getHardwareConcurrency();
                return a.push(c), k.ccn = c, a
            },
            audioKey: function(a) {
                var c = !0;
                if ("" != n && !isNaN(n) && 47 > parseInt(n) && (c = !1), c)
                    if (c = window.AudioContext || window.webkitAudioContext) {
                        c = new c;
                        var b = c.sampleRate.toString();
                        a.push(b);
                        k.asr = b;
                        c.close && c.close()
                    }
                return a
            },
            doNotTrackKey: function(a) {
                return this.options.excludeDoNotTrack || (k.track = this.getDoNotTrack(), a.push(k.track)), a
            },
            canvasKey: function(a) {
                var c = !0;
                if (use_breakcollect) {
                    var b = _JdJrRiskClientStorage.jdtdstorage_local_storage("cfjrrval"),
                        h = _JdJrRiskClientStorage.jdtdstorage_local_storage("cfvalmdjrr"),
                        g = _JdJrRiskClientStorage.jdtdstorage_local_storage("timecfjrr");
                    try {
                        b && h && g && 864E5 >= (new Date).getTime() - parseInt(g) && f(b) == h && (c = !1, k.canvas = h, _jdfp_canvas_md5 = h, a.push(b))
                    } catch (p) {}
                }
                c && !this.options.excludeCanvas && this.isCanvasSupported() && (c = this.getCanvasFp(), k.canvas = f(c), _jdfp_canvas_md5 = k.canvas, a.push(c), use_breakcollect && (_JdJrRiskClientStorage.jdtdstorage_local_storage("cfjrrval", c), _JdJrRiskClientStorage.jdtdstorage_local_storage("cfvalmdjrr", _jdfp_canvas_md5), _JdJrRiskClientStorage.jdtdstorage_local_storage("timecfjrr", (new Date).getTime())));
                return a
            },
            webglKey: function(a) {
                var c = !0;
                if (use_breakcollect) {
                    var b = _JdJrRiskClientStorage.jdtdstorage_local_storage("jrrwebglv"),
                        h = _JdJrRiskClientStorage.jdtdstorage_local_storage("webglvmdjrr"),
                        g = _JdJrRiskClientStorage.jdtdstorage_local_storage("timejrrwg");
                    try {
                        b && h && g && 864E5 >= (new Date).getTime() - parseInt(g) && f(b) == h && (c = !1, k.webgl = h, _jdfp_webgl_md5 = h, a.push(b))
                    } catch (p) {}
                }
                c && !this.options.excludeWebGL && this.isCanvasSupported() && (c = this.getWebglFp(), a.push(c), k.webglFp = f(c), _jdfp_webgl_md5 = k.webglFp, use_breakcollect && (_JdJrRiskClientStorage.jdtdstorage_local_storage("jrrwebglv", c), _JdJrRiskClientStorage.jdtdstorage_local_storage("webglvmdjrr", _jdfp_webgl_md5), _JdJrRiskClientStorage.jdtdstorage_local_storage("timejrrwg", (new Date).getTime())));
                return a
            },
            pluginsKey: function(a) {
                var c = this.isIE() ? this.getIEPluginsString() : this.getRegularPluginsString();
                a.push(c);
                k.plugins = f(c);
                return a
            },
            getRegularPluginsString: function() {
                return this.map(navigator.plugins, function(a) {
                    var c = this.map(a, function(a) {
                        return [a.type, a.suffixes].join("~")
                    }).join(",");
                    return [a.name, a.description, c].join("::")
                }, this).join(";")
            },
            getIEPluginsString: function() {
                return void 0 !== window.ActiveXObject ? this.map("AcroPDF.PDF;Adodb.Stream;AgControl.AgControl;DevalVRXCtrl.DevalVRXCtrl.1;MacromediaFlashPaper.MacromediaFlashPaper;Msxml2.DOMDocument;Msxml2.XMLHTTP;PDF.PdfCtrl;QuickTime.QuickTime;QuickTimeCheckObject.QuickTimeCheck.1;RealPlayer;RealPlayer.RealPlayer(tm) ActiveX Control (32-bit);RealVideo.RealVideo(tm) ActiveX Control (32-bit);Scripting.Dictionary;SWCtl.SWCtl;Shell.UIHelper;ShockwaveFlash.ShockwaveFlash;Skype.Detection;TDCCtl.TDCCtl;WMPlayer.OCX;rmocx.RealPlayer G2 Control;rmocx.RealPlayer G2 Control.1".split(";"), function(a) {
                    try {
                        return new ActiveXObject(a), a
                    } catch (c) {
                        return null
                    }
                }).join(";") : ""
            },
            hasSessionStorage: function() {
                try {
                    return !!window.sessionStorage
                } catch (a) {
                    return !0
                }
            },
            hasLocalStorage: function() {
                try {
                    return !!window.localStorage
                } catch (a) {
                    return !0
                }
            },
            hasIndexedDB: function() {
                return !!window.indexedDB
            },
            getNavigatorCpuClass: function() {
                return navigator.oscpu || navigator.cpuClass ? navigator.cpuClass : "NA"
            },
            getNavigatorPlatform: function() {
                return navigator.platform ? navigator.platform : "NA"
            },
            getHardwareConcurrency: function() {
                return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : "NA"
            },
            getDoNotTrack: function() {
                return navigator.doNotTrack || navigator.msDoNotTrack ? navigator.doNotTrack || navigator.msDoNotTrack : "NA"
            },
            getCanvasFp: function() {
                var a = [],
                    c = document.createElement("canvas");
                c.width = 2E3;
                c.height = 200;
                c.style.display = "inline";
                var b = c.getContext("2d");
                return b.rect(0, 0, 10, 10), b.rect(2, 2, 6, 6), a.push("cw:" + (!1 === b.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), b.textBaseline = "alphabetic", b.fillStyle = "#f60", b.fillRect(125, 1, 62, 20), b.fillStyle = "#069", b.font = "11pt no-real-font-123", b.fillText("Cwwm aa fjorddbank glbyphs veext qtuiz, \ud83d\ude03", 2, 15), b.fillStyle = "rgba(102, 204, 0, 0.2)", b.font = "18pt Arial", b.fillText("Cwwm aa fjorddbank glbyphs veext qtuiz, \ud83d\ude03", 4, 45), b.globalCompositeOperation = "multiply", b.fillStyle = "rgb(255,0,255)", b.beginPath(), b.arc(50, 50, 50, 0, 2 * Math.PI, !0), b.closePath(), b.fill(), b.fillStyle = "rgb(0,255,255)", b.beginPath(), b.arc(100, 50, 50, 0, 2 * Math.PI, !0), b.closePath(), b.fill(), b.fillStyle = "rgb(255,255,0)", b.beginPath(), b.arc(75, 100, 50, 0, 2 * Math.PI, !0), b.closePath(), b.fill(), b.fillStyle = "rgb(255,0,255)", b.arc(75, 75, 75, 0, 2 * Math.PI, !0), b.arc(75, 75, 25, 0, 2 * Math.PI, !0), b.fill("evenodd"), a.push("cfp:" + c.toDataURL()), a.join("~")
            },
            getWebglFp: function() {
                var a, c = function(b) {
                    return a.clearColor(0, 0, 0, 1), a.enable(a.DEPTH_TEST), a.depthFunc(a.LEQUAL), a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), "[" + b[0] + ", " + b[1] + "]"
                };
                if (!(a = this.getWebglCanvas())) return null;
                var b = [],
                    h = a.createBuffer();
                a.bindBuffer(a.ARRAY_BUFFER, h);
                var g = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                a.bufferData(a.ARRAY_BUFFER, g, a.STATIC_DRAW);
                h.itemSize = 3;
                h.numItems = 3;
                g = a.createProgram();
                var d = a.createShader(a.VERTEX_SHADER);
                a.shaderSource(d, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
                a.compileShader(d);
                var n = a.createShader(a.FRAGMENT_SHADER);
                a.shaderSource(n, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
                a.compileShader(n);
                a.attachShader(g, d);
                a.attachShader(g, n);
                a.linkProgram(g);
                a.useProgram(g);
                g.vertexPosAttrib = a.getAttribLocation(g, "attrVertex");
                g.offsetUniform = a.getUniformLocation(g, "uniformOffset");
                a.enableVertexAttribArray(g.vertexPosArray);
                a.vertexAttribPointer(g.vertexPosAttrib, h.itemSize, a.FLOAT, !1, 0, 0);
                a.uniform2f(g.offsetUniform, 1, 1);
                a.drawArrays(a.TRIANGLE_STRIP, 0, h.numItems);
                null != a.canvas && b.push(a.canvas.toDataURL());
                b.push("extensions:" + a.getSupportedExtensions().join(";"));
                b.push("w1" + c(a.getParameter(a.ALIASED_LINE_WIDTH_RANGE)));
                b.push("w2" + c(a.getParameter(a.ALIASED_POINT_SIZE_RANGE)));
                b.push("w3" + a.getParameter(a.ALPHA_BITS));
                b.push("w4" + (a.getContextAttributes().antialias ? "yes" : "no"));
                b.push("w5" + a.getParameter(a.BLUE_BITS));
                b.push("w6" + a.getParameter(a.DEPTH_BITS));
                b.push("w7" + a.getParameter(a.GREEN_BITS));
                b.push("w8" + function(a) {
                    var b, c = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic");
                    return c ? (0 === (b = a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT)) && (b = 2), b) : null
                }(a));
                b.push("w9" + a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
                b.push("w10" + a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE));
                b.push("w11" + a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS));
                b.push("w12" + a.getParameter(a.MAX_RENDERBUFFER_SIZE));
                b.push("w13" + a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS));
                b.push("w14" + a.getParameter(a.MAX_TEXTURE_SIZE));
                b.push("w15" + a.getParameter(a.MAX_VARYING_VECTORS));
                b.push("w16" + a.getParameter(a.MAX_VERTEX_ATTRIBS));
                b.push("w17" + a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
                b.push("w18" + a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS));
                b.push("w19" + c(a.getParameter(a.MAX_VIEWPORT_DIMS)));
                b.push("w20" + a.getParameter(a.RED_BITS));
                b.push("w21" + a.getParameter(a.RENDERER));
                b.push("w22" + a.getParameter(a.SHADING_LANGUAGE_VERSION));
                b.push("w23" + a.getParameter(a.STENCIL_BITS));
                b.push("w24" + a.getParameter(a.VENDOR));
                b.push("w25" + a.getParameter(a.VERSION));
                try {
                    var f = a.getExtension("WEBGL_debug_renderer_info");
                    f && (b.push("wuv:" + a.getParameter(f.UNMASKED_VENDOR_WEBGL)), b.push("wur:" + a.getParameter(f.UNMASKED_RENDERER_WEBGL)))
                } catch (C) {}
                return a.getShaderPrecisionFormat ? (b.push("w26" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).precision), b.push("w27" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMin), b.push("w28" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMax), b.push("w29" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).precision), b.push("w30" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMin), b.push("w31" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMax), b.push("w32" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).precision), b.push("w33" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMin), b.push("w34" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMax), b.push("w35" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).precision), b.push("w36" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMin), b.push("w37" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMax), b.push("w38" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).precision), b.push("w39" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMin), b.push("w40" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMax), b.push("w41" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).precision), b.push("w42" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMin), b.push("w43" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMax), b.push("w44" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).precision), b.push("w45" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).rangeMin), b.push("w46" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).rangeMax), b.push("w47" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).precision), b.push("w48" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMin), b.push("w49" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMax), b.push("w50" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).precision), b.push("w51" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).rangeMin), b.push("w52" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).rangeMax), b.push("w53" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).precision), b.push("w54" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).rangeMin), b.push("w55" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).rangeMax), b.push("w56" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).precision), b.push("w57" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMin), b.push("w58" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMax), b.push("w59" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).precision), b.push("w60" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMin), b.push("w61" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMax), b.join("\u00a7")) : b.join("\u00a7")
            },
            isCanvasSupported: function() {
                var a = document.createElement("canvas");
                return !(!a.getContext || !a.getContext("2d"))
            },
            isIE: function() {
                return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
            },
            getWebglCanvas: function() {
                var a = document.createElement("canvas"),
                    c = null;
                try {
                    c = a.getContext("webgl") || a.getContext("experimental-webgl")
                } catch (b) {}
                return c || (c = null), c
            },
            each: function(a, c, b) {
                if (null !== a)
                    if (this.nativeForEach && a.forEach === this.nativeForEach) a.forEach(c, b);
                    else if (a.length === +a.length)
                    for (var h = 0, g = a.length; h < g && c.call(b, a[h], h, a) !== {}; h++);
                else
                    for (h in a)
                        if (a.hasOwnProperty(h) && c.call(b, a[h], h, a) === {}) break
            },
            map: function(a, c, b) {
                var h = [];
                return null == a ? h : this.nativeMap && a.map === this.nativeMap ? a.map(c, b) : (this.each(a, function(a, d, n) {
                    h[h.length] = c.call(b, a, d, n)
                }), h)
            },
            x64Add: function(a, c) {
                a = [a[0] >>> 16, 65535 & a[0], a[1] >>> 16, 65535 & a[1]];
                c = [c[0] >>> 16, 65535 & c[0], c[1] >>> 16, 65535 & c[1]];
                var b = [0, 0, 0, 0];
                return b[3] += a[3] + c[3], b[2] += b[3] >>> 16, b[3] &= 65535, b[2] += a[2] + c[2], b[1] += b[2] >>> 16, b[2] &= 65535, b[1] += a[1] + c[1], b[0] += b[1] >>> 16, b[1] &= 65535, b[0] += a[0] + c[0], b[0] &= 65535, [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            },
            x64Multiply: function(a, c) {
                a = [a[0] >>> 16, 65535 & a[0], a[1] >>> 16, 65535 & a[1]];
                c = [c[0] >>> 16, 65535 & c[0], c[1] >>> 16, 65535 & c[1]];
                var b = [0, 0, 0, 0];
                return b[3] += a[3] * c[3], b[2] += b[3] >>> 16, b[3] &= 65535, b[2] += a[2] * c[3], b[1] += b[2] >>> 16, b[2] &= 65535, b[2] += a[3] * c[2], b[1] += b[2] >>> 16, b[2] &= 65535, b[1] += a[1] * c[3], b[0] += b[1] >>> 16, b[1] &= 65535, b[1] += a[2] * c[2], b[0] += b[1] >>> 16, b[1] &= 65535, b[1] += a[3] * c[1], b[0] += b[1] >>> 16, b[1] &= 65535, b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0], b[0] &= 65535, [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            },
            x64Rotl: function(a, c) {
                return c %= 64, 32 === c ? [a[1], a[0]] : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c] : (c -= 32, [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c])
            },
            x64LeftShift: function(a, c) {
                return c %= 64, 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0]
            },
            x64Xor: function(a, c) {
                return [a[0] ^ c[0], a[1] ^ c[1]]
            },
            x64Fmix: function(a) {
                return a = this.x64Xor(a, [0, a[0] >>> 1]), a = this.x64Multiply(a, [4283543511, 3981806797]), a = this.x64Xor(a, [0, a[0] >>> 1]), a = this.x64Multiply(a, [3301882366, 444984403]), this.x64Xor(a, [0, a[0] >>> 1])
            },
            x64hash128: function(a, c) {
                a = a || "";
                c = c || 0;
                var b = a.length % 16,
                    h = a.length - b,
                    g = [0, c];
                c = [0, c];
                for (var d, n, f = [2277735313, 289559509], z = [1291169091, 658871167], e = 0; e < h; e += 16) d = [255 & a.charCodeAt(e + 4) | (255 & a.charCodeAt(e + 5)) << 8 | (255 & a.charCodeAt(e + 6)) << 16 | (255 & a.charCodeAt(e + 7)) << 24, 255 & a.charCodeAt(e) | (255 & a.charCodeAt(e + 1)) << 8 | (255 & a.charCodeAt(e + 2)) << 16 | (255 & a.charCodeAt(e + 3)) << 24], n = [255 & a.charCodeAt(e + 12) | (255 & a.charCodeAt(e + 13)) << 8 | (255 & a.charCodeAt(e + 14)) << 16 | (255 & a.charCodeAt(e + 15)) << 24, 255 & a.charCodeAt(e + 8) | (255 & a.charCodeAt(e + 9)) << 8 | (255 & a.charCodeAt(e + 10)) << 16 | (255 & a.charCodeAt(e + 11)) << 24], d = this.x64Multiply(d, f), d = this.x64Rotl(d, 31), d = this.x64Multiply(d, z), g = this.x64Xor(g, d), g = this.x64Rotl(g, 27), g = this.x64Add(g, c), g = this.x64Add(this.x64Multiply(g, [0, 5]), [0, 1390208809]), n = this.x64Multiply(n, z), n = this.x64Rotl(n, 33), n = this.x64Multiply(n, f), c = this.x64Xor(c, n), c = this.x64Rotl(c, 31), c = this.x64Add(c, g), c = this.x64Add(this.x64Multiply(c, [0, 5]), [0, 944331445]);
                switch (d = [0, 0], n = [0, 0], b) {
                    case 15:
                        n = this.x64Xor(n, this.x64LeftShift([0, a.charCodeAt(e + 14)], 48));
                    case 14:
                        n = this.x64Xor(n, this.x64LeftShift([0, a.charCodeAt(e + 13)], 40));
                    case 13:
                        n = this.x64Xor(n, this.x64LeftShift([0, a.charCodeAt(e + 12)], 32));
                    case 12:
                        n = this.x64Xor(n, this.x64LeftShift([0, a.charCodeAt(e + 11)], 24));
                    case 11:
                        n = this.x64Xor(n, this.x64LeftShift([0, a.charCodeAt(e + 10)], 16));
                    case 10:
                        n = this.x64Xor(n, this.x64LeftShift([0, a.charCodeAt(e + 9)], 8));
                    case 9:
                        n = this.x64Xor(n, [0, a.charCodeAt(e + 8)]), n = this.x64Multiply(n, z), n = this.x64Rotl(n, 33), n = this.x64Multiply(n, f), c = this.x64Xor(c, n);
                    case 8:
                        d = this.x64Xor(d, this.x64LeftShift([0, a.charCodeAt(e + 7)], 56));
                    case 7:
                        d = this.x64Xor(d, this.x64LeftShift([0, a.charCodeAt(e + 6)], 48));
                    case 6:
                        d = this.x64Xor(d, this.x64LeftShift([0, a.charCodeAt(e + 5)], 40));
                    case 5:
                        d = this.x64Xor(d, this.x64LeftShift([0, a.charCodeAt(e + 4)], 32));
                    case 4:
                        d = this.x64Xor(d, this.x64LeftShift([0, a.charCodeAt(e + 3)], 24));
                    case 3:
                        d = this.x64Xor(d, this.x64LeftShift([0, a.charCodeAt(e + 2)], 16));
                    case 2:
                        d = this.x64Xor(d, this.x64LeftShift([0, a.charCodeAt(e + 1)], 8));
                    case 1:
                        d = this.x64Xor(d, [0, a.charCodeAt(e)]), d = this.x64Multiply(d, f), d = this.x64Rotl(d, 31), d = this.x64Multiply(d, z), g = this.x64Xor(g, d)
                }
                return g = this.x64Xor(g, [0, a.length]), c = this.x64Xor(c, [0, a.length]), g = this.x64Add(g, c), c = this.x64Add(c, g), g = this.x64Fmix(g), c = this.x64Fmix(c), g = this.x64Add(g, c), c = this.x64Add(c, g), ("00000000" + (g[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (g[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8)
            }
        }, z
    });
    try {
        ! function(f) {
            var m = f.document,
                r = (f.Image, f.globalStorage);
            try {
                var u = f.localStorage
            } catch (x) {}
            try {
                var w = f.sessionStorage
            } catch (x) {}
            var t = {
                history: !0,
                java: !1,
                tests: 5,
                silverlight: !1,
                domain: _root_domain,
                baseurl: _CurrentPageProtocol + _JdJrTdRiskDomainName,
                asseturi: ""
            };
            f.JDJRTDLOCALSTORAGE = function(x) {
                x = x || {};
                var e = {},
                    A;
                for (A in t) {
                    var k = x[A];
                    e[A] = void 0 !== k ? k : t[A]
                }
                "function" == typeof e.domain && (e.domain = e.domain(f));
                e.history;
                e.java;
                var d = e.tests,
                    B = (e.baseurl, e.asseturi, e.domain),
                    q = this;
                this._ec = {};
                this.get = function(d, e, a) {
                    q._jdtdstorage(d, e, void 0, void 0, a)
                };
                this.set = function(d, e) {
                    q._jdtdstorage(d, function() {}, e)
                };
                this._jdtdstorage = function(n, e, a, c, b) {
                    if (void 0 === q._jdtdstorage && (q = this), void 0 === c && (c = 1), 1 === c && (q.jdtdstorage_database_storage(n, a), q.jdtdstorage_indexdb_storage(n, a), q._ec.userData = q.jdtdstorage_userdata(n, a), q._ec.cookieData = q.jdtdstorage_cookie(n, a), q._ec.localData = q.jdtdstorage_local_storage(n, a), q._ec.globalData = q.jdtdstorage_global_storage(n, a), q._ec.sessionData = q.jdtdstorage_session_storage(n, a), q._ec.windowData = q.jdtdstorage_window(n, a)), void 0 == a)
                        if ((!("undefined" !== q._ec.userData && q._ec.userData || "undefined" !== q._ec.cookieData && q._ec.cookieData || "undefined" !== q._ec.localData && q._ec.localData || "undefined" !== q._ec.globalData && q._ec.globalData || "undefined" !== q._ec.sessionData && q._ec.sessionData || "undefined" !== q._ec.dbData && q._ec.dbData || "undefined" !== q._ec.idbData && q._ec.idbData) && f.openDatabase && void 0 === q._ec.dbData || ("indexedDB" in f || (f.indexedDB = f.indexedDB || f.mozIndexedDB || f.webkitIndexedDB || f.msIndexedDB)) && (void 0 === q._ec.idbData || "" === q._ec.idbData)) && c++ < d) setTimeout(function() {
                            q._jdtdstorage(n, e, a, c, b)
                        }, 30);
                        else {
                            var h, g, z = q._ec,
                                l = [],
                                k = 0;
                            q._ec = {};
                            for (g in z) z[g] && "null" !== z[g] && "undefined" !== z[g] && (l[z[g]] = void 0 === l[z[g]] ? 1 : l[z[g]] + 1);
                            for (g in l) l[g] > k && (k = l[g], h = g);
                            void 0 === h || void 0 !== b && 1 === b || q.set(n, h);
                            "function" == typeof e && e(h, z)
                        }
                };
                this.jdtdstorage_window = function(d, e) {
                    try {
                        if (void 0 === e) return this.getFromStr(d, f.name);
                        var a = f.name;
                        if (-1 < a.indexOf("&" + d + "=") || 0 === a.indexOf(d + "=")) {
                            var c, b = a.indexOf("&" + d + "=");
                            var h = (-1 === b && (b = a.indexOf(d + "=")), c = a.indexOf("&", b + 1), -1 !== c ? a.substr(0, b) + a.substr(c + (b ? 0 : 1)) + "&" + d + "=" + e : a.substr(0, b) + "&" + d + "=" + e)
                        } else h = a + "&" + d + "=" + e;
                        f.name = h
                    } catch (g) {}
                };
                this.jdtdstorage_userdata = function(d, e) {
                    try {
                        var a = this.createElem("div", "userdata_el", 1);
                        if (a.addBehavior) {
                            if (d = d.substring(1), a.style.behavior = "url(#default#userData)", void 0 === e) return a.load(d), a.getAttribute(d);
                            a.setAttribute(d, e);
                            a.save(d)
                        }
                    } catch (c) {}
                };
                this.jdtdstorage_lso = function(d, e) {};
                this.jdtdstorage_png = function(d, e) {};
                this.jdtdstorage_local_storage = function(d, e) {
                    try {
                        if (u) {
                            if (void 0 === e) return u.getItem(d);
                            u.setItem(d, e)
                        }
                    } catch (a) {}
                };
                this.jdtdstorage_database_storage = function(d, e) {
                    try {
                        if (f.openDatabase) {
                            var a = f.openDatabase("sqlite_jdtdstorage", "", "jdtdstorage", 1048576);
                            void 0 !== e ? a.transaction(function(a) {
                                a.executeSql("CREATE TABLE IF NOT EXISTS cache(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, value TEXT NOT NULL, UNIQUE (name))", [], function(a, c) {}, function(a, c) {});
                                a.executeSql("INSERT OR REPLACE INTO cache(name, value) VALUES(?, ?)", [d, e], function(a, c) {}, function(a, c) {})
                            }) : a.transaction(function(a) {
                                a.executeSql("SELECT value FROM cache WHERE name=?", [d], function(a, c) {
                                    1 <= c.rows.length ? q._ec.dbData = c.rows.item(0).value : q._ec.dbData = ""
                                }, function(a, c) {})
                            })
                        }
                    } catch (c) {}
                };
                this.jdtdstorage_indexdb_storage = function(d, e) {
                    try {
                        var a = f.indexedDB || f.mozIndexedDB || f.webkitIndexedDB || f.msIndexedDB;
                        f.IDBTransaction || f.webkitIDBTransaction || f.msIDBTransaction;
                        f.IDBKeyRange || f.webkitIDBKeyRange || f.msIDBKeyRange;
                        if (a) {
                            var c = a.open("idb_jdtdstorage", 1);
                            c.onerror = function(a) {};
                            c.onupgradeneeded = function() {
                                c.result.createObjectStore("jdtdstorage", {
                                    keyPath: "name"
                                })
                            };
                            c.onsuccess = function() {
                                var a = c.result,
                                    h = a.transaction(["jdtdstorage"], "readwrite"),
                                    g = h.objectStore(["jdtdstorage"]);
                                if (void 0 !== e) g.put({
                                    name: d,
                                    value: e
                                });
                                else {
                                    var n = g.get(d);
                                    n.onsuccess = function() {
                                        void 0 === n.result ? q._ec.idbData = void 0 : q._ec.idbData = n.result.value
                                    }
                                }
                                h.oncomplete = function() {
                                    a.close()
                                }
                            }
                        }
                    } catch (b) {}
                };
                this.jdtdstorage_session_storage = function(d, e) {
                    try {
                        if (w) {
                            if (void 0 === e) return w.getItem(d);
                            w.setItem(d, e)
                        }
                    } catch (a) {}
                };
                this.jdtdstorage_global_storage = function(d, e) {
                    if (r) {
                        var a = this.getHost();
                        try {
                            if (void 0 === e) return r[a][d];
                            r[a][d] = e
                        } catch (c) {}
                    }
                };
                this.jdtdstorage_silverlight = function(d, e) {};
                this.encode = function(d) {
                    var e, a, c = "",
                        b = 0;
                    for (d = this._utf8_encode(d); b < d.length;) {
                        var h = (e = d.charCodeAt(b++)) >> 2;
                        var g = (3 & e) << 4 | (e = d.charCodeAt(b++)) >> 4;
                        var n = (15 & e) << 2 | (a = d.charCodeAt(b++)) >> 6;
                        var f = 63 & a;
                        isNaN(e) ? n = f = 64 : isNaN(a) && (f = 64);
                        c = c + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(n) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f)
                    }
                    return c
                };
                this.decode = function(d) {
                    var e, a, c, b = "",
                        h = 0;
                    for (d = d.replace(/[^A-Za-z0-9\+\/=]/g, ""); h < d.length;) {
                        var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(d.charAt(h++)) << 2 | (e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(d.charAt(h++))) >> 4;
                        e = (15 & e) << 4 | (a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(d.charAt(h++))) >> 2;
                        var f = (3 & a) << 6 | (c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(d.charAt(h++)));
                        b += String.fromCharCode(g);
                        64 !== a && (b += String.fromCharCode(e));
                        64 !== c && (b += String.fromCharCode(f))
                    }
                    return this._utf8_decode(b)
                };
                this._utf8_encode = function(d) {
                    for (var e, a = "", c = 0, b = (d = d.replace(/\r\n/g, "\n")).length; c < b; c++) 128 > (e = d.charCodeAt(c)) ? a += String.fromCharCode(e) : 127 < e && 2048 > e ? (a += String.fromCharCode(e >> 6 | 192), a += String.fromCharCode(63 & e | 128)) : (a += String.fromCharCode(e >> 12 | 224), a += String.fromCharCode(e >> 6 & 63 | 128), a += String.fromCharCode(63 & e | 128));
                    return a
                };
                this._utf8_decode = function(d) {
                    for (var e = "", a = 0, c = d.length, b = 0, h = 0, g = 0; a < c;) 128 > (b = d.charCodeAt(a)) ? (e += String.fromCharCode(b), a += 1) : 191 < b && 224 > b ? (h = d.charCodeAt(a + 1), e += String.fromCharCode((31 & b) << 6 | 63 & h), a += 2) : (h = d.charCodeAt(a + 1), g = d.charCodeAt(a + 2), e += String.fromCharCode((15 & b) << 12 | (63 & h) << 6 | 63 & g), a += 3);
                    return e
                };
                this.jdtdstorage_history = function(d, e) {};
                this.createElem = function(d, e, a) {
                    var c;
                    return c = void 0 !== e && m.getElementById(e) ? m.getElementById(e) : m.createElement(d), c.style.visibility = "hidden", c.style.position = "absolute", e && c.setAttribute("id", e), a && m.body.appendChild(c), c
                };
                this.createIframe = function(d, e) {
                    e = this.createElem("iframe", e, 1);
                    return e.setAttribute("src", d), e
                };
                this.jdtdstorage_cookie = function(d, e) {
                    if (void 0 === e) return this.getFromStr(d, m.cookie);
                    m.cookie = d + "=" + e + "; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/; domain=" + B
                };
                this.getFromStr = function(d, e) {
                    if ("string" == typeof e) {
                        var a;
                        d += "=";
                        var c = e.split(/[;&]/);
                        for (e = 0; e < c.length; e++) {
                            for (a = c[e];
                                " " === a.charAt(0);) a = a.substring(1, a.length);
                            if (0 === a.indexOf(d)) return a.substring(d.length, a.length)
                        }
                    }
                };
                this.getHost = function() {
                    return f.location.host.replace(/:\d+/, "")
                };
                this.toHex = function(d) {
                    for (var e, a = "", c = d.length, b = 0; b < c;) {
                        for (e = d.charCodeAt(b++).toString(16); 2 > e.length;) e = "0" + e;
                        a += e
                    }
                    return a
                };
                this.fromHex = function(d) {
                    for (var e, a = "", c = d.length; 0 <= c;) e = c - 2, a = String.fromCharCode("0x" + d.substring(e, c)) + a, c = e;
                    return a
                };
                this.hasVisited = function(d) {};
                var y, l = this.createElem("a", "_ec_rgb_link");
                try {
                    var v = 1;
                    (y = m.createElement("style")).styleSheet ? y.styleSheet.innerHTML = "#_ec_rgb_link:visited{display:none;color:#FF0000}" : y.innerHTML ? y.innerHTML = "#_ec_rgb_link:visited{display:none;color:#FF0000}" : y.appendChild(m.createTextNode("#_ec_rgb_link:visited{display:none;color:#FF0000}"))
                } catch (n) {
                    v = 0
                }
                this._getRGB = function(d, e) {
                    if (e && 0 === v) return -1;
                    l.href = d;
                    l.innerHTML = d;
                    m.body.appendChild(y);
                    m.body.appendChild(l);
                    if (m.defaultView) {
                        if (null == m.defaultView.getComputedStyle(l, null)) return -1;
                        d = m.defaultView.getComputedStyle(l, null).getPropertyValue("color")
                    } else d = l.currentStyle.color;
                    return d
                };
                this._testURL = function(d, e) {
                    d = this._getRGB(d);
                    return "rgb(255, 0, 0)" === d || "#ff0000" === d ? 1 : e && d !== e ? 1 : 0
                }
            }
        }(window)
    } catch (f) {}
    var td_collect = new function() {
            function f() {
                var f = window.webkitRTCPeerConnection || window.mozRTCPeerConnection || window.RTCPeerConnection;
                if (f) {
                    var e = function(d) {
                            var e = /([0-9]{1,3}(\.[0-9]{1,3}){3})/,
                                f = /\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*/;
                            try {
                                var k = e.exec(d);
                                null != k && 0 != k.length && void 0 != k || (k = f.exec(d));
                                var l = k[1];
                                void 0 === m[l] && u.push(l);
                                m[l] = !0
                            } catch (v) {}
                        },
                        m = {};
                    try {
                        var k = new f({
                            iceServers: [{
                                urls: "stun:stun.services.mozilla.com"
                            }]
                        })
                    } catch (d) {}
                    try {
                        void 0 === k && (k = new f({
                            iceServers: []
                        }))
                    } catch (d) {}
                    if (k || window.mozRTCPeerConnection) try {
                        k.createDataChannel("chat", {
                            reliable: !1
                        })
                    } catch (d) {}
                    k && (k.onicecandidate = function(d) {
                        d.candidate && e(d.candidate.candidate)
                    }, k.createOffer(function(d) {
                        k.setLocalDescription(d, function() {}, function() {})
                    }, function() {}), setTimeout(function() {
                        try {
                            k.localDescription.sdp.split("\n").forEach(function(d) {
                                0 === d.indexOf("a=candidate:") && e(d)
                            })
                        } catch (d) {}
                    }, 500))
                }
            }

            function m() {
                function f(d) {
                    var e = {};
                    return k.style.fontFamily = d, document.body.appendChild(k), e.height = k.offsetHeight, e.width = k.offsetWidth, document.body.removeChild(k), e
                }
                var e = ["monospace", "sans-serif", "serif"],
                    m = [],
                    k = document.createElement("span");
                k.style.fontSize = "72px";
                k.style.visibility = "hidden";
                k.innerHTML = "mmmmmmmmmmlli";
                for (var d = 0; d < e.length; d++) m[d] = f(e[d]);
                this.checkSupportFont = function(d) {
                    for (var k = 0; k < m.length; k++) {
                        var x = f(d + "," + e[k]),
                            l = m[k];
                        if (x.height !== l.height || x.width !== l.width) return !0
                    }
                    return !1
                }
            }

            function r(f) {
                var e = {};
                e.name = f.name;
                e.filename = f.filename.toLowerCase();
                e.description = f.description;
                void 0 !== f.version && (e.version = f.version);
                e.mimeTypes = [];
                for (var m = 0; m < f.length; m++) {
                    var k = f[m],
                        d = {};
                    d.description = k.description;
                    d.suffixes = k.suffixes;
                    d.type = k.type;
                    e.mimeTypes.push(d)
                }
                return e
            }
            var u = [],
                w = "Abadi MT Condensed Light;Adobe Fangsong Std;Adobe Hebrew;Adobe Ming Std;Agency FB;Arab;Arabic Typesetting;Arial Black;Batang;Bauhaus 93;Bell MT;Bitstream Vera Serif;Bodoni MT;Bookman Old Style;Braggadocio;Broadway;Calibri;Californian FB;Castellar;Casual;Centaur;Century Gothic;Chalkduster;Colonna MT;Copperplate Gothic Light;DejaVu LGC Sans Mono;Desdemona;DFKai-SB;Dotum;Engravers MT;Eras Bold ITC;Eurostile;FangSong;Forte;Franklin Gothic Heavy;French Script MT;Gabriola;Gigi;Gisha;Goudy Old Style;Gulim;GungSeo;Haettenschweiler;Harrington;Hiragino Sans GB;Impact;Informal Roman;KacstOne;Kino MT;Kozuka Gothic Pr6N;Lohit Gujarati;Loma;Lucida Bright;Lucida Fax;Magneto;Malgun Gothic;Matura MT Script Capitals;Menlo;MingLiU-ExtB;MoolBoran;MS PMincho;MS Reference Sans Serif;News Gothic MT;Niagara Solid;Nyala;Palace Script MT;Papyrus;Perpetua;Playbill;PMingLiU;Rachana;Rockwell;Sawasdee;Script MT Bold;Segoe Print;Showcard Gothic;SimHei;Snap ITC;TlwgMono;Tw Cen MT Condensed Extra Bold;Ubuntu;Umpush;Univers;Utopia;Vladimir Script;Wide Latin".split(";"),
                t = "4game;AdblockPlugin;AdobeExManCCDetect;AdobeExManDetect;Alawar NPAPI utils;Aliedit Plug-In;Alipay Security Control 3;AliSSOLogin plugin;AmazonMP3DownloaderPlugin;AOL Media Playback Plugin;AppUp;ArchiCAD;AVG SiteSafety plugin;Babylon ToolBar;Battlelog Game Launcher;BitCometAgent;Bitdefender QuickScan;BlueStacks Install Detector;CatalinaGroup Update;Citrix ICA Client;Citrix online plug-in;Citrix Receiver Plug-in;Coowon Update;DealPlyLive Update;Default Browser Helper;DivX Browser Plug-In;DivX Plus Web Player;DivX VOD Helper Plug-in;doubleTwist Web Plugin;Downloaders plugin;downloadUpdater;eMusicPlugin DLM6;ESN Launch Mozilla Plugin;ESN Sonar API;Exif Everywhere;Facebook Plugin;File Downloader Plug-in;FileLab plugin;FlyOrDie Games Plugin;Folx 3 Browser Plugin;FUZEShare;GDL Object Web Plug-in 16.00;GFACE Plugin;Ginger;Gnome Shell Integration;Google Earth Plugin;Google Earth Plug-in;Google Gears 0.5.33.0;Google Talk Effects Plugin;Google Update;Harmony Firefox Plugin;Harmony Plug-In;Heroes & Generals live;HPDetect;Html5 location provider;IE Tab plugin;iGetterScriptablePlugin;iMesh plugin;Kaspersky Password Manager;LastPass;LogMeIn Plugin 1.0.0.935;LogMeIn Plugin 1.0.0.961;Ma-Config.com plugin;Microsoft Office 2013;MinibarPlugin;Native Client;Nitro PDF Plug-In;Nokia Suite Enabler Plugin;Norton Identity Safe;npAPI Plugin;NPLastPass;NPPlayerShell;npTongbuAddin;NyxLauncher;Octoshape Streaming Services;Online Storage plug-in;Orbit Downloader;Pando Web Plugin;Parom.TV player plugin;PDF integrado do WebKit;PDF-XChange Viewer;PhotoCenterPlugin1.1.2.2;Picasa;PlayOn Plug-in;QQ2013 Firefox Plugin;QQDownload Plugin;QQMiniDL Plugin;QQMusic;RealDownloader Plugin;Roblox Launcher Plugin;RockMelt Update;Safer Update;SafeSearch;Scripting.Dictionary;SefClient Plugin;Shell.UIHelper;Silverlight Plug-In;Simple Pass;Skype Web Plugin;SumatraPDF Browser Plugin;Symantec PKI Client;Tencent FTN plug-in;Thunder DapCtrl NPAPI Plugin;TorchHelper;Unity Player;Uplay PC;VDownloader;Veetle TV Core;VLC Multimedia Plugin;Web Components;WebKit-integrierte PDF;WEBZEN Browser Extension;Wolfram Mathematica;WordCaptureX;WPI Detector 1.4;Yandex Media Plugin;Yandex PDF Viewer;YouTube Plug-in;zako".split(";");
            this.toJson = "object" == typeof JSON && JSON.stringify;
            this.init = function() {
                f();
                "function" != typeof this.toJson && (this.toJson = function(f) {
                    if (void 0 == f || null == f) return null;
                    var e = "{",
                        m;
                    for (m in f) e += "'" + m + "':", "string" == typeof f[m] ? e += "'" + f[m] + "'" : e += f[m], e += ",";
                    return e = e.substring(0, e.length - 1), e + "}"
                })
            };
            this.minHash = function(f) {
                var e, m = 3 & f.length,
                    k = f.length - m;
                var d = void 0;
                for (e = 0; e < k;) {
                    var r = 255 & f.charCodeAt(e) | (255 & f.charCodeAt(++e)) << 8 | (255 & f.charCodeAt(++e)) << 16 | (255 & f.charCodeAt(++e)) << 24;
                    ++e;
                    r = 3432918353 * (65535 & r) + ((3432918353 * (r >>> 16) & 65535) << 16) & 4294967295;
                    r = r << 15 | r >>> 17;
                    r = 461845907 * (65535 & r) + ((461845907 * (r >>> 16) & 65535) << 16) & 4294967295;
                    d ^= r;
                    d = d << 13 | d >>> 19;
                    d = 5 * (65535 & d) + ((5 * (d >>> 16) & 65535) << 16) & 4294967295;
                    d = 27492 + (65535 & d) + ((58964 + (d >>> 16) & 65535) << 16)
                }
                switch (r = 0, m) {
                    case 3:
                        r ^= (255 & f.charCodeAt(e + 2)) << 16;
                    case 2:
                        r ^= (255 & f.charCodeAt(e + 1)) << 8;
                    case 1:
                        d ^= 461845907 * (65535 & (r = (r = 3432918353 * (65535 & (r ^= 255 & f.charCodeAt(e))) + ((3432918353 * (r >>> 16) & 65535) << 16) & 4294967295) << 15 | r >>> 17)) + ((461845907 * (r >>> 16) & 65535) << 16) & 4294967295
                }
                return d ^= f.length, d ^= d >>> 16, d = 2246822507 * (65535 & d) + ((2246822507 * (d >>> 16) & 65535) << 16) & 4294967295, d ^= d >>> 13, d = 3266489909 * (65535 & d) + ((3266489909 * (d >>> 16) & 65535) << 16) & 4294967295, (d ^ d >>> 16) >>> 0
            };
            this.tdencrypt = function(f) {
                f = this.toJson(f);
                f = encodeURIComponent(f);
                var e, m = "",
                    k, d = 0;
                do {
                    var r = (e = f.charCodeAt(d++)) >> 2;
                    var q = (3 & e) << 4 | (e = f.charCodeAt(d++)) >> 4;
                    var t = (15 & e) << 2 | (k = f.charCodeAt(d++)) >> 6;
                    var l = 63 & k;
                    isNaN(e) ? t = l = 64 : isNaN(k) && (l = 64);
                    m = m + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(r) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(q) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(t) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(l)
                } while (d < f.length);
                return m + "/"
            };
            this.collect = function() {
                var f = new Date;
                try {
                    var e = document.createElement("div"),
                        A = {},
                        k = "ActiveBorder ActiveCaption AppWorkspace Background ButtonFace ButtonHighlight ButtonShadow ButtonText CaptionText GrayText Highlight HighlightText InactiveBorder InactiveCaption InactiveCaptionText InfoBackground InfoText Menu MenuText Scrollbar ThreeDDarkShadow ThreeDFace ThreeDHighlight ThreeDLightShadow ThreeDShadow Window WindowFrame WindowText".split(" ");
                    if (window.getComputedStyle)
                        for (l = 0; l < k.length; l++) document.body.appendChild(e), e.style.color = k[l], A[k[l]] = window.getComputedStyle(e).getPropertyValue("color"), document.body.removeChild(e)
                } catch (p) {}
                e = {
                    ca: {},
                    ts: {},
                    m: {}
                };
                k = e.ca;
                k.tdHash = _jdfp_canvas_md5;
                k.webglHash = _jdfp_webgl_md5;
                var d = !1;
                if (window.WebGLRenderingContext) {
                    for (var B, q = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"], y = [], l = 0; l < q.length; l++) try {
                        var v = !1;
                        (v = document.createElement("canvas").getContext(q[l], {
                            stencil: !0
                        })) && v && (B = v, y.push(q[l]))
                    } catch (p) {}
                    y.length && (d = {
                        name: y,
                        gl: B
                    })
                }
                if (d) {
                    l = d.gl;
                    k.contextName = d.name.join();
                    k.webglversion = l.getParameter(l.VERSION);
                    k.shadingLV = l.getParameter(l.SHADING_LANGUAGE_VERSION);
                    k.vendor = l.getParameter(l.VENDOR);
                    k.renderer = l.getParameter(l.RENDERER);
                    B = [];
                    try {
                        B = l.getSupportedExtensions(), k.extensions = B
                    } catch (p) {}
                    try {
                        var n = l.getExtension("WEBGL_debug_renderer_info");
                        n && (k.wuv = l.getParameter(n.UNMASKED_VENDOR_WEBGL), k.wur = l.getParameter(n.UNMASKED_RENDERER_WEBGL))
                    } catch (p) {}
                }
                e.m.documentMode = document.documentMode;
                e.m.compatMode = document.compatMode;
                n = [];
                k = new m;
                for (l = 0; l < w.length; l++) B = w[l], k.checkSupportFont(B) && n.push(B);
                e.fo = n;
                l = {};
                n = [];
                for (var z in navigator) "object" != typeof navigator[z] && (l[z] = navigator[z]), n.push(z);
                l.enumerationOrder = n;
                l.javaEnabled = navigator.javaEnabled();
                try {
                    l.taintEnabled = navigator.taintEnabled()
                } catch (p) {}
                e.n = l;
                var a, c;
                l = navigator.userAgent.toLowerCase();
                (c = l.match(/rv:([\d.]+)\) like gecko/)) && (a = c[1]);
                (c = l.match(/msie ([\d.]+)/)) && (a = c[1]);
                c = [];
                if (a)
                    for (a = "AcroPDF.PDF;Adodb.Stream;AgControl.AgControl;DevalVRXCtrl.DevalVRXCtrl.1;MacromediaFlashPaper.MacromediaFlashPaper;Msxml2.DOMDocument;Msxml2.XMLHTTP;PDF.PdfCtrl;QuickTime.QuickTime;QuickTimeCheckObject.QuickTimeCheck.1;RealPlayer;RealPlayer.RealPlayer(tm) ActiveX Control (32-bit);RealVideo.RealVideo(tm) ActiveX Control (32-bit);rmocx.RealPlayer G2 Control;Scripting.Dictionary;Shell.UIHelper;ShockwaveFlash.ShockwaveFlash;SWCtl.SWCtl;TDCCtl.TDCCtl;WMPlayer.OCX".split(";"), l = 0; l < a.length; l++) {
                        var b = a[l];
                        try {
                            var h = new ActiveXObject(b);
                            (g = {}).name = b;
                            try {
                                g.version = h.GetVariable("$version")
                            } catch (p) {}
                            try {
                                g.version = h.GetVersions()
                            } catch (p) {}
                            g.version && 0 < g.version.length || (g.version = "");
                            c.push(g)
                        } catch (p) {}
                    } else {
                        a = navigator.plugins;
                        var g = {};
                        for (l = 0; l < a.length; l++) g[(b = a[l]).name] = 1, c.push(r(b));
                        for (l = 0; l < t.length; l++) h = t[l], g[h] || (b = a[h]) && c.push(r(b))
                    }
                h = "availHeight availWidth colorDepth bufferDepth deviceXDPI deviceYDPI height width logicalXDPI logicalYDPI pixelDepth updateInterval".split(" ");
                b = {};
                for (l = 0; h.length > l; l++) g = h[l], void 0 !== screen[g] && (b[g] = screen[g]);
                h = ["devicePixelRatio", "screenTop", "screenLeft"];
                a = {};
                for (l = 0; h.length > l; l++) g = h[l], void 0 !== window[g] && (a[g] = window[g]);
                e.p = c;
                e.w = a;
                e.s = b;
                e.sc = A;
                e.tz = f.getTimezoneOffset();
                e.lil = u.sort().join("|");
                e.wil = "";
                f = {};
                try {
                    f.cookie = navigator.cookieEnabled, f.localStorage = !!window.localStorage, f.sessionStorage = !!window.sessionStorage, f.globalStorage = !!window.globalStorage, f.indexedDB = !!window.indexedDB
                } catch (p) {}
                return e.ss = f, e.ts.deviceTime = start_time, e.ts.deviceEndTime = (new Date).getTime(), this.tdencrypt(e)
            }
        },
        _JdJrRiskClientCollectData = "",
        _JdJrRiskClientStorage = null,
        _JdJrTdRiskFp = null,
        _JdJrTdRiskFpInfo = "",
        _JdEid = "",
        _eidFlag = !1,
        _JdTdudfp = {},
        _jd_e_joint_;
    ! function() {
        _jd_load_td_finger_flag && (_JdJrRiskClientStorage = new JDJRTDLOCALSTORAGE, _JdJrTdRiskFp = "undefined" != typeof module && module.exports ? new module.exports : new JdJrTdRiskFinger, _JdJrRiskClientStorage.get("3AB9D23F7A4B3C9B", function(f) {
            void 0 != f && null != f && 32 <= f.length && (_JdEid = f, _eidFlag = !0)
        }), _JdJrTdRiskFp.get(function(f) {
            _JdJrTdRiskFpInfo = f
        }), td_collect.init(), void 0 !== document.body && document.body ? setTimeout(td_collect_exe, 100) : td_collect_exe())
    }()
};