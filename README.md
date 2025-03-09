<!doctype html>
<html lang="en-US">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <title>Liva &#8211; eCommerce WordPress Theme</title>
    <meta name='robots' content='noindex, nofollow' />
    <style>
        img:is([sizes="auto" i], [sizes^="auto," i]) {
            contain-intrinsic-size: 3000px 1500px
        }
    </style>
    <link rel='dns-prefetch' href='//fonts.googleapis.com' />
    <link rel="alternate" type="application/rss+xml" title="Liva &raquo; Feed" href="https://themes.envytheme.com/liva/feed/" />
    <link rel="alternate" type="application/rss+xml" title="Liva &raquo; Comments Feed" href="https://themes.envytheme.com/liva/comments/feed/" />
    <script>
        window._wpemojiSettings = {
            "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/72x72\/",
            "ext": ".png",
            "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/svg\/",
            "svgExt": ".svg",
            "source": {
                "concatemoji": "https:\/\/themes.envytheme.com\/liva\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.7.1"
            }
        };
        /*! This file is auto-generated */
        ! function(i, n) {
            var o, s, e;

            function c(e) {
                try {
                    var t = {
                        supportTests: e,
                        timestamp: (new Date).valueOf()
                    };
                    sessionStorage.setItem(o, JSON.stringify(t))
                } catch (e) {}
            }

            function p(e, t, n) {
                e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(t, 0, 0);
                var t = new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data),
                    r = (e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(n, 0, 0), new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data));
                return t.every(function(e, t) {
                    return e === r[t]
                })
            }

            function u(e, t, n) {
                switch (t) {
                    case "flag":
                        return n(e, "\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f", "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f") ? !1 : !n(e, "\ud83c\uddfa\ud83c\uddf3", "\ud83c\uddfa\u200b\ud83c\uddf3") && !n(e, "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f", "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");
                    case "emoji":
                        return !n(e, "\ud83d\udc26\u200d\u2b1b", "\ud83d\udc26\u200b\u2b1b")
                }
                return !1
            }

            function f(e, t, n) {
                var r = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? new OffscreenCanvas(300, 150) : i.createElement("canvas"),
                    a = r.getContext("2d", {
                        willReadFrequently: !0
                    }),
                    o = (a.textBaseline = "top", a.font = "600 32px Arial", {});
                return e.forEach(function(e) {
                    o[e] = t(a, e, n)
                }), o
            }

            function t(e) {
                var t = i.createElement("script");
                t.src = e, t.defer = !0, i.head.appendChild(t)
            }
            "undefined" != typeof Promise && (o = "wpEmojiSettingsSupports", s = ["flag", "emoji"], n.supports = {
                everything: !0,
                everythingExceptFlag: !0
            }, e = new Promise(function(e) {
                i.addEventListener("DOMContentLoaded", e, {
                    once: !0
                })
            }), new Promise(function(t) {
                var n = function() {
                    try {
                        var e = JSON.parse(sessionStorage.getItem(o));
                        if ("object" == typeof e && "number" == typeof e.timestamp && (new Date).valueOf() < e.timestamp + 604800 && "object" == typeof e.supportTests) return e.supportTests
                    } catch (e) {}
                    return null
                }();
                if (!n) {
                    if ("undefined" != typeof Worker && "undefined" != typeof OffscreenCanvas && "undefined" != typeof URL && URL.createObjectURL && "undefined" != typeof Blob) try {
                        var e = "postMessage(" + f.toString() + "(" + [JSON.stringify(s), u.toString(), p.toString()].join(",") + "));",
                            r = new Blob([e], {
                                type: "text/javascript"
                            }),
                            a = new Worker(URL.createObjectURL(r), {
                                name: "wpTestEmojiSupports"
                            });
                        return void(a.onmessage = function(e) {
                            c(n = e.data), a.terminate(), t(n)
                        })
                    } catch (e) {}
                    c(n = f(s, u, p))
                }
                t(n)
            }).then(function(e) {
                for (var t in e) n.supports[t] = e[t], n.supports.everything = n.supports.everything && n.supports[t], "flag" !== t && (n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && n.supports[t]);
                n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && !n.supports.flag, n.DOMReady = !1, n.readyCallback = function() {
                    n.DOMReady = !0
                }
            }).then(function() {
                return e
            }).then(function() {
                var e;
                n.supports.everything || (n.readyCallback(), (e = n.source || {}).concatemoji ? t(e.concatemoji) : e.wpemoji && e.twemoji && (t(e.twemoji), t(e.wpemoji)))
            }))
        }((window, document), window._wpemojiSettings);
    </script>
    <link rel='stylesheet' id='reusablec-block-css-css' href='https://themes.envytheme.com/liva/wp-content/plugins/liva-toolkit/inc/reusablec-block/includes/css/reusablec-block.css?ver=6.7.1' media='all' />
    <style id='wp-emoji-styles-inline-css'>
        img.wp-smiley,
        img.emoji {
            display: inline !important;
            border: none !important;
            box-shadow: none !important;
            height: 1em !important;
            width: 1em !important;
            margin: 0 0.07em !important;
            vertical-align: -0.1em !important;
            background: none !important;
            padding: 0 !important;
        }
    </style>
    <style id='classic-theme-styles-inline-css'>
        /*! This file is auto-generated */

        .wp-block-button__link {
            color: #fff;
            background-color: #32373c;
            border-radius: 9999px;
            box-shadow: none;
            text-decoration: none;
            padding: calc(.667em + 2px) calc(1.333em + 2px);
            font-size: 1.125em
        }

        .wp-block-file__button {
            background: #32373c;
            color: #fff;
            text-decoration: none
        }
    </style>
    <style id='global-styles-inline-css'>
        :root {
            --wp--preset--aspect-ratio--square: 1;
            --wp--preset--aspect-ratio--4-3: 4/3;
            --wp--preset--aspect-ratio--3-4: 3/4;
            --wp--preset--aspect-ratio--3-2: 3/2;
            --wp--preset--aspect-ratio--2-3: 2/3;
            --wp--preset--aspect-ratio--16-9: 16/9;
            --wp--preset--aspect-ratio--9-16: 9/16;
            --wp--preset--color--black: #000000;
            --wp--preset--color--cyan-bluish-gray: #abb8c3;
            --wp--preset--color--white: #ffffff;
            --wp--preset--color--pale-pink: #f78da7;
            --wp--preset--color--vivid-red: #cf2e2e;
            --wp--preset--color--luminous-vivid-orange: #ff6900;
            --wp--preset--color--luminous-vivid-amber: #fcb900;
            --wp--preset--color--light-green-cyan: #7bdcb5;
            --wp--preset--color--vivid-green-cyan: #00d084;
            --wp--preset--color--pale-cyan-blue: #8ed1fc;
            --wp--preset--color--vivid-cyan-blue: #0693e3;
            --wp--preset--color--vivid-purple: #9b51e0;
            --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%);
            --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg, rgb(122, 220, 180) 0%, rgb(0, 208, 130) 100%);
            --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg, rgba(252, 185, 0, 1) 0%, rgba(255, 105, 0, 1) 100%);
            --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg, rgba(255, 105, 0, 1) 0%, rgb(207, 46, 46) 100%);
            --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg, rgb(238, 238, 238) 0%, rgb(169, 184, 195) 100%);
            --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg, rgb(74, 234, 220) 0%, rgb(151, 120, 209) 20%, rgb(207, 42, 186) 40%, rgb(238, 44, 130) 60%, rgb(251, 105, 98) 80%, rgb(254, 248, 76) 100%);
            --wp--preset--gradient--blush-light-purple: linear-gradient(135deg, rgb(255, 206, 236) 0%, rgb(152, 150, 240) 100%);
            --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg, rgb(254, 205, 165) 0%, rgb(254, 45, 45) 50%, rgb(107, 0, 62) 100%);
            --wp--preset--gradient--luminous-dusk: linear-gradient(135deg, rgb(255, 203, 112) 0%, rgb(199, 81, 192) 50%, rgb(65, 88, 208) 100%);
            --wp--preset--gradient--pale-ocean: linear-gradient(135deg, rgb(255, 245, 203) 0%, rgb(182, 227, 212) 50%, rgb(51, 167, 181) 100%);
            --wp--preset--gradient--electric-grass: linear-gradient(135deg, rgb(202, 248, 128) 0%, rgb(113, 206, 126) 100%);
            --wp--preset--gradient--midnight: linear-gradient(135deg, rgb(2, 3, 129) 0%, rgb(40, 116, 252) 100%);
            --wp--preset--font-size--small: 13px;
            --wp--preset--font-size--medium: 20px;
            --wp--preset--font-size--large: 36px;
            --wp--preset--font-size--x-large: 42px;
            --wp--preset--font-family--inter: "Inter", sans-serif;
            --wp--preset--font-family--cardo: Cardo;
            --wp--preset--spacing--20: 0.44rem;
            --wp--preset--spacing--30: 0.67rem;
            --wp--preset--spacing--40: 1rem;
            --wp--preset--spacing--50: 1.5rem;
            --wp--preset--spacing--60: 2.25rem;
            --wp--preset--spacing--70: 3.38rem;
            --wp--preset--spacing--80: 5.06rem;
            --wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
            --wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
            --wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
            --wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);
            --wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);
        }

        :where(.is-layout-flex) {
            gap: 0.5em;
        }

        :where(.is-layout-grid) {
            gap: 0.5em;
        }

        body .is-layout-flex {
            display: flex;
        }

        .is-layout-flex {
            flex-wrap: wrap;
            align-items: center;
        }

        .is-layout-flex> :is(*, div) {
            margin: 0;
        }

        body .is-layout-grid {
            display: grid;
        }

        .is-layout-grid> :is(*, div) {
            margin: 0;
        }

        :where(.wp-block-columns.is-layout-flex) {
            gap: 2em;
        }

        :where(.wp-block-columns.is-layout-grid) {
            gap: 2em;
        }

        :where(.wp-block-post-template.is-layout-flex) {
            gap: 1.25em;
        }

        :where(.wp-block-post-template.is-layout-grid) {
            gap: 1.25em;
        }

        .has-black-color {
            color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-color {
            color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-color {
            color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-color {
            color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-color {
            color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-color {
            color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-color {
            color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-color {
            color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-color {
            color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-color {
            color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-color {
            color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-color {
            color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-black-background-color {
            background-color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-background-color {
            background-color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-background-color {
            background-color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-background-color {
            background-color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-background-color {
            background-color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-background-color {
            background-color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-background-color {
            background-color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-background-color {
            background-color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-background-color {
            background-color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-background-color {
            background-color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-background-color {
            background-color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-background-color {
            background-color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-black-border-color {
            border-color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-border-color {
            border-color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-border-color {
            border-color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-border-color {
            border-color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-border-color {
            border-color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-border-color {
            border-color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-border-color {
            border-color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-border-color {
            border-color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-border-color {
            border-color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-border-color {
            border-color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-border-color {
            border-color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-border-color {
            border-color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-vivid-cyan-blue-to-vivid-purple-gradient-background {
            background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;
        }

        .has-light-green-cyan-to-vivid-green-cyan-gradient-background {
            background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;
        }

        .has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {
            background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-orange-to-vivid-red-gradient-background {
            background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;
        }

        .has-very-light-gray-to-cyan-bluish-gray-gradient-background {
            background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;
        }

        .has-cool-to-warm-spectrum-gradient-background {
            background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;
        }

        .has-blush-light-purple-gradient-background {
            background: var(--wp--preset--gradient--blush-light-purple) !important;
        }

        .has-blush-bordeaux-gradient-background {
            background: var(--wp--preset--gradient--blush-bordeaux) !important;
        }

        .has-luminous-dusk-gradient-background {
            background: var(--wp--preset--gradient--luminous-dusk) !important;
        }

        .has-pale-ocean-gradient-background {
            background: var(--wp--preset--gradient--pale-ocean) !important;
        }

        .has-electric-grass-gradient-background {
            background: var(--wp--preset--gradient--electric-grass) !important;
        }

        .has-midnight-gradient-background {
            background: var(--wp--preset--gradient--midnight) !important;
        }

        .has-small-font-size {
            font-size: var(--wp--preset--font-size--small) !important;
        }

        .has-medium-font-size {
            font-size: var(--wp--preset--font-size--medium) !important;
        }

        .has-large-font-size {
            font-size: var(--wp--preset--font-size--large) !important;
        }

        .has-x-large-font-size {
            font-size: var(--wp--preset--font-size--x-large) !important;
        }

        :where(.wp-block-post-template.is-layout-flex) {
            gap: 1.25em;
        }

        :where(.wp-block-post-template.is-layout-grid) {
            gap: 1.25em;
        }

        :where(.wp-block-columns.is-layout-flex) {
            gap: 2em;
        }

        :where(.wp-block-columns.is-layout-grid) {
            gap: 2em;
        }

        :root :where(.wp-block-pullquote) {
            font-size: 1.5em;
            line-height: 1.6;
        }
    </style>
    <link rel='stylesheet' id='contact-form-7-css' href='https://themes.envytheme.com/liva/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=6.0.1' media='all' />
    <link rel='stylesheet' id='woocommerce-layout-css' href='https://themes.envytheme.com/liva/wp-content/plugins/woocommerce/assets/css/woocommerce-layout.css?ver=9.4.3' media='all' />
    <link rel='stylesheet' id='woocommerce-smallscreen-css' href='https://themes.envytheme.com/liva/wp-content/plugins/woocommerce/assets/css/woocommerce-smallscreen.css?ver=9.4.3' media='only screen and (max-width: 768px)' />
    <link rel='stylesheet' id='woocommerce-general-css' href='https://themes.envytheme.com/liva/wp-content/plugins/woocommerce/assets/css/woocommerce.css?ver=9.4.3' media='all' />
    <style id='woocommerce-inline-inline-css'>
        .woocommerce form .form-row .required {
            visibility: visible;
        }
    </style>
    <link rel='stylesheet' id='woo-multi-currency-css' href='https://themes.envytheme.com/liva/wp-content/plugins/woo-multi-currency/css/woo-multi-currency.min.css?ver=2.2.4' media='all' />
    <style id='woo-multi-currency-inline-css'>
        .woo-multi-currency .wmc-list-currencies .wmc-currency.wmc-active,
        .woo-multi-currency .wmc-list-currencies .wmc-currency:hover {
            background: #f78080 !important;
        }

        .woo-multi-currency .wmc-list-currencies .wmc-currency,
        .woo-multi-currency .wmc-title,
        .woo-multi-currency.wmc-price-switcher a {
            background: #212121 !important;
        }

        .woo-multi-currency .wmc-title,
        .woo-multi-currency .wmc-list-currencies .wmc-currency span,
        .woo-multi-currency .wmc-list-currencies .wmc-currency a,
        .woo-multi-currency.wmc-price-switcher a {
            color: #ffffff !important;
        }

        .woo-multi-currency.wmc-shortcode .wmc-currency {
            background-color: #ffffff;
            color: #212121
        }

        .woo-multi-currency.wmc-shortcode .wmc-currency.wmc-active,
        .woo-multi-currency.wmc-shortcode .wmc-current-currency {
            background-color: #ffffff;
            color: #212121
        }

        .woo-multi-currency.wmc-shortcode.vertical-currency-symbols-circle:not(.wmc-currency-trigger-click) .wmc-currency-wrapper:hover .wmc-sub-currency,
        .woo-multi-currency.wmc-shortcode.vertical-currency-symbols-circle.wmc-currency-trigger-click .wmc-sub-currency {
            animation: height_slide 100ms;
        }

        @keyframes height_slide {
            0% {
                height: 0;
            }
            100% {
                height: 100%;
            }
        }
    </style>
    <link rel='stylesheet' id='wmc-flags-css' href='https://themes.envytheme.com/liva/wp-content/plugins/woo-multi-currency/css/flags-64.min.css?ver=2.2.4' media='all' />
    <link rel='preload' as='font' type='font/woff2' crossorigin='anonymous' id='tinvwl-webfont-font-css' href='https://themes.envytheme.com/liva/wp-content/plugins/ti-woocommerce-wishlist/assets/fonts/tinvwl-webfont.woff2?ver=xu2uyi' media='all' />
    <link rel='stylesheet' id='tinvwl-webfont-css' href='https://themes.envytheme.com/liva/wp-content/plugins/ti-woocommerce-wishlist/assets/css/webfont.min.css?ver=2.9.2' media='all' />
    <link rel='stylesheet' id='tinvwl-css' href='https://themes.envytheme.com/liva/wp-content/plugins/ti-woocommerce-wishlist/assets/css/public.min.css?ver=2.9.2' media='all' />
    <link rel='stylesheet' id='liva-style-css' href='https://themes.envytheme.com/liva/wp-content/themes/liva/style.css?ver=6.7.1' media='all' />
    <link rel='stylesheet' id='flaticon-css' href='https://themes.envytheme.com/liva/wp-content/themes/liva/assets/css/flaticon.css?ver=1738731048' media='all' />
    <link rel='stylesheet' id='remixicon-css' href='https://themes.envytheme.com/liva/wp-content/themes/liva/assets/css/remixicon.css?ver=1738731048' media='all' />
    <link rel='stylesheet' id='swiper-css' href='https://themes.envytheme.com/liva/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=8.4.5' media='all' />
    <link rel='stylesheet' id='swipscrollCueer-css' href='https://themes.envytheme.com/liva/wp-content/themes/liva/assets/css/scrollCue.css?ver=1738731048' media='all' />
    <link rel='stylesheet' id='nouislider-css' href='https://themes.envytheme.com/liva/wp-content/themes/liva/assets/css/nouislider.css?ver=1738731048' media='all' />
    <link rel='stylesheet' id='satoshi-font-css' href='https://themes.envytheme.com/liva/wp-content/themes/liva/assets/css/satoshi-font.css?ver=1738731048' media='all' />
    <link rel='stylesheet' id='liva-woocommerce-css' href='https://themes.envytheme.com/liva/wp-content/themes/liva/assets/css/woocommerce.css?ver=6.7.1' media='all' />
    <link rel='stylesheet' id='liva-main-css' href='https://themes.envytheme.com/liva/wp-content/themes/liva/assets/css/liva-main.css?ver=1738731048' media='all' />
    <link rel='stylesheet' id='liva-blog-css' href='https://themes.envytheme.com/liva/wp-content/themes/liva/assets/css/liva-blog.css?ver=1738731048' media='all' />
    <style id='liva-blog-inline-css'>
        :root {
            --secondaryColor: #F7931E;
            --mainColor: #F7931E;
            --bs-primary: #5093F7;
            --optionalColor: #000080;
            --bs-body-color: #474747;
            --mainGlobalColor: #F7931E;
        }

        .widget_rss ul li a:hover {
            color: #F7931E !important;
        }

        .post-password-form input[type="submit"]:hover {
            border-color: #F7931E;
        }

        .navbar-area .navbar .navbar-nav .nav-item .nav-link,
        .navbar-area .navbar .navbar-nav .nav-item .dropdown-menu .nav-item .nav-link {
            color: #000000;
        }

        .elementor-editor-active .preloader-area,
        .elementor-editor-preview .preloader-area,
        .elementor-editor-kit .preloader-area {
            display: none;
        }

        .single-products .sale-btn,
        .single-products .products-image ul li a:hover,
        .productsQuickView .modal-dialog .modal-content .products-content form button,
        .productsQuickView .modal-dialog .modal-content button.close:hover,
        .productsQuickView .modal-dialog .modal-content button.close:hover,
        .woocommerce ul.products li.product:hover .add-to-cart-btn,
        .shop-sidebar .widget_product_search form button,
        .shop-sidebar a.button,
        .shop-sidebar .woocommerce-widget-layered-nav-dropdown__submit,
        .shop-sidebar .woocommerce button.button,
        .woocommerce #respond input#submit.alt,
        .woocommerce a.button.alt,
        .woocommerce button.button.alt,
        .woocommerce input.button.alt,
        .products_details div.product .woocommerce-tabs .panel #respond input#submit,
        .products_details div.product .product_title::before,
        .woocommerce #respond input#submit.alt.disabled,
        .woocommerce #respond input#submit.alt.disabled:hover,
        .woocommerce #respond input#submit.alt:disabled,
        .woocommerce #respond input#submit.alt:disabled:hover,
        .woocommerce #respond input#submit.alt:disabled[disabled],
        .woocommerce #respond input#submit.alt:disabled[disabled]:hover,
        .woocommerce a.button.alt.disabled,
        .woocommerce a.button.alt.disabled:hover,
        .woocommerce a.button.alt:disabled,
        .woocommerce a.button.alt:disabled:hover,
        .woocommerce a.button.alt:disabled[disabled],
        .woocommerce a.button.alt:disabled[disabled]:hover,
        .woocommerce button.button.alt.disabled,
        .woocommerce button.button.alt.disabled:hover,
        .woocommerce button.button.alt:disabled,
        .woocommerce button.button.alt:disabled:hover,
        .woocommerce button.button.alt:disabled[disabled],
        .woocommerce button.button.alt:disabled[disabled]:hover,
        .woocommerce input.button.alt.disabled,
        .woocommerce input.button.alt.disabled:hover,
        .woocommerce input.button.alt:disabled,
        .woocommerce input.button.alt:disabled:hover,
        .woocommerce input.button.alt:disabled[disabled],
        .woocommerce input.button.alt:disabled[disabled]:hover,
        .woocommerce #respond input#submit,
        .woocommerce a.button,
        .woocommerce button.button,
        .woocommerce input.button,
        .woocommerce .woocommerce-MyAccount-navigation ul .is-active a,
        .woocommerce .woocommerce-MyAccount-navigation ul li a:hover,
        .shop-sidebar .tagcloud a:focus,
        .shop-sidebar .widget_search form button,
        .shop-sidebar .widget .widget-title::before,
        .shop-sidebar .widget ul li::before,
        .shop-sidebar .tagcloud a:hover,
        .shop-sidebar .tagcloud a:focus {
            background-color: #F7931E;
        }

        .productsQuickView .modal-dialog .modal-content .products-content .product-meta span a:hover,
        .woocommerce ul.products li.product h3 a:hover,
        .woocommerce ul.products li.product .add-to-cart-btn,
        .woocommerce div.product .woocommerce-tabs ul.tabs li.active a,
        .products_details div.product .woocommerce-tabs ul.tabs li a:hover,
        .products_details div.product .woocommerce-tabs ul.tabs li.active,
        .products_details div.product .woocommerce-tabs ul.tabs li.active a:hover,
        .products_details div.product .product_meta span.posted_in a:hover,
        .products_details div.product .product_meta span.tagged_as a:hover,
        .products_details div.product span.price,
        .woocommerce-message::before,
        .woocommerce-info::before,
        .shop-sidebar .widget ul li a:hover,
        .shop-sidebar .widget_rss .widget-title .rsswidget {
            color: #F7931E;
        }

        .woocommerce-info,
        .woocommerce-message {
            border-top-color: #F7931E;
        }

        .shop-sidebar .widget_shopping_cart .cart_list li a:hover,
        .shop-sidebar ul li a:hover {
            color: #F7931E !important;
        }

        .woocommerce ul.products li.product:hover .add-to-cart-btn,
        .shop-sidebar .tagcloud a:hover,
        .shop-sidebar .tagcloud a:focus,
        .tutor-button.tutor-success {
            border-color: #F7931E;
        }

        .responsive-navbar .offcanvas-body .menu li a,
        .responsive-navbar .offcanvas-body .menu li .sub-menu .menu-item a {
            color: #000000 !important;
        }

        .products_details div.product span.sale-btn {
            width: auto;
        }

        .tinv-wishlist .product-action .button {
            width: 100%;
            background-color: var(--mainColor) !important;
            color: #fff !important;
            border-radius: 10px !important;
            font-size: 10px !important;
            line-height: 16px !important;
            text-decoration: none;
            font-weight: bold !important;
            border: none !important;
        }
    </style>
    <link rel='stylesheet' id='liva-manrope-css' href='//fonts.googleapis.com/css2?family=Manrope%3Awght%40300%3B400%3B500%3B600%3B700%3B800&#038;display=swap&#038;ver=1.0.0' media='screen' />
    <link rel='stylesheet' id='elementor-frontend-css' href='https://themes.envytheme.com/liva/wp-content/plugins/elementor/assets/css/frontend.min.css?ver=3.25.10' media='all' />
    <link rel='stylesheet' id='e-swiper-css' href='https://themes.envytheme.com/liva/wp-content/plugins/elementor/assets/css/conditionals/e-swiper.min.css?ver=3.25.10' media='all' />
    <link rel='stylesheet' id='elementor-post-7-css' href='https://themes.envytheme.com/liva/wp-content/uploads/elementor/css/post-7.css?ver=1733396846' media='all' />
    <link rel='stylesheet' id='font-awesome-5-all-css' href='https://themes.envytheme.com/liva/wp-content/plugins/elementor/assets/lib/font-awesome/css/all.min.css?ver=3.25.10' media='all' />
    <link rel='stylesheet' id='font-awesome-4-shim-css' href='https://themes.envytheme.com/liva/wp-content/plugins/elementor/assets/lib/font-awesome/css/v4-shims.min.css?ver=3.25.10' media='all' />
    <link rel='stylesheet' id='elementor-post-144-css' href='https://themes.envytheme.com/liva/wp-content/uploads/elementor/css/post-144.css?ver=1733396846' media='all' />
    <script src="https://themes.envytheme.com/liva/wp-includes/js/jquery/jquery.min.js?ver=3.7.1" id="jquery-core-js"></script>
    <script src="https://themes.envytheme.com/liva/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1" id="jquery-migrate-js"></script>
    <script src="https://themes.envytheme.com/liva/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js?ver=2.7.0-wc.9.4.3" id="jquery-blockui-js" data-wp-strategy="defer"></script>
    <script id="wc-add-to-cart-js-extra">
        var wc_add_to_cart_params = {
            "ajax_url": "\/liva\/wp-admin\/admin-ajax.php",
            "wc_ajax_url": "\/liva\/?wc-ajax=%%endpoint%%",
            "i18n_view_cart": "View cart",
            "cart_url": "https:\/\/themes.envytheme.com\/liva\/cart\/",
            "is_cart": "",
            "cart_redirect_after_add": "no"
        };
    </script>
    <script src="https://themes.envytheme.com/liva/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=9.4.3" id="wc-add-to-cart-js" defer data-wp-strategy="defer"></script>
    <script src="https://themes.envytheme.com/liva/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js?ver=2.1.4-wc.9.4.3" id="js-cookie-js" data-wp-strategy="defer"></script>
    <script id="woocommerce-js-extra">
        var woocommerce_params = {
            "ajax_url": "\/liva\/wp-admin\/admin-ajax.php",
            "wc_ajax_url": "\/liva\/?wc-ajax=%%endpoint%%"
        };
    </script>
    <script src="https://themes.envytheme.com/liva/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=9.4.3" id="woocommerce-js" defer data-wp-strategy="defer"></script>
    <script id="woo-multi-currency-js-extra">
        var wooMultiCurrencyParams = {
            "enableCacheCompatible": "0",
            "ajaxUrl": "https:\/\/themes.envytheme.com\/liva\/wp-admin\/admin-ajax.php",
            "extra_params": [],
            "current_currency": "USD"
        };
    </script>
    <script src="https://themes.envytheme.com/liva/wp-content/plugins/woo-multi-currency/js/woo-multi-currency.min.js?ver=2.2.4" id="woo-multi-currency-js"></script>
    <script src="https://themes.envytheme.com/liva/wp-content/themes/liva/assets/js/bootstrap.bundle.min.js?ver=1738731048" id="bootstrap-bundle-js"></script>
    <script src="https://themes.envytheme.com/liva/wp-content/themes/liva/assets/js/swiper-bundle.min.js?ver=1738731048" id="swiper-bundle-js"></script>
    <script src="https://themes.envytheme.com/liva/wp-content/themes/liva/assets/js/scrollCue.min.js?ver=1738731048" id="scrollCue-js"></script>
    <script src="https://themes.envytheme.com/liva/wp-content/themes/liva/assets/js/nouislider.js?ver=1738731048" id="nouislider-js"></script>
    <script src="https://themes.envytheme.com/liva/wp-content/themes/liva/assets/js/ajaxchimp.min.js?ver=1738731048" id="ajaxchimp-js"></script>
    <script id="liva-main-js-extra">
        var liva_ajax = {
            "ajax_url": "https:\/\/themes.envytheme.com\/liva\/wp-admin\/admin-ajax.php"
        };
    </script>
    <script src="https://themes.envytheme.com/liva/wp-content/themes/liva/assets/js/liva-main.js?ver=1738731048" id="liva-main-js"></script>
    <script id="liva-main-js-after">
        (function($) {
            "use strict";
            jQuery(document).on("ready", function() {
                const getHeaderId = document.getElementById("navbar");
                if (getHeaderId) {
                    window.addEventListener("scroll", event => {
                        const height = 150;
                        const {
                            scrollTop
                        } = event.target.scrollingElement;
                        document.querySelector("#navbar").classList.toggle("sticky", scrollTop >= height);
                    });
                }
            });
        }(jQuery));
    </script>
    <script src="https://themes.envytheme.com/liva/wp-content/plugins/elementor/assets/lib/font-awesome/js/v4-shims.min.js?ver=3.25.10" id="font-awesome-4-shim-js"></script>
    <link rel="https://api.w.org/" href="https://themes.envytheme.com/liva/wp-json/" />
    <link rel="alternate" title="JSON" type="application/json" href="https://themes.envytheme.com/liva/wp-json/wp/v2/pages/144" />
    <link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://themes.envytheme.com/liva/xmlrpc.php?rsd" />
    <meta name="generator" content="WordPress 6.7.1" />
    <meta name="generator" content="WooCommerce 9.4.3" />
    <link rel="canonical" href="https://themes.envytheme.com/liva/" />
    <link rel='shortlink' href='https://themes.envytheme.com/liva/' />
    <link rel="alternate" title="oEmbed (JSON)" type="application/json+oembed" href="https://themes.envytheme.com/liva/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fthemes.envytheme.com%2Fliva%2F" />
    <link rel="alternate" title="oEmbed (XML)" type="text/xml+oembed" href="https://themes.envytheme.com/liva/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fthemes.envytheme.com%2Fliva%2F&#038;format=xml" />
    <meta name="generator" content="Redux 4.4.17" /> <noscript><style>.woocommerce-product-gallery{ opacity: 1 !important; }</style></noscript>
    <meta name="generator" content="Elementor 3.25.10; features: e_font_icon_svg, additional_custom_breakpoints, e_optimized_control_loading; settings: css_print_method-external, google_font-enabled, font_display-swap">
    <style>
        .e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload),
        .e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload) * {
            background-image: none !important;
        }

        @media screen and (max-height: 1024px) {
            .e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload),
            .e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload) * {
                background-image: none !important;
            }
        }

        @media screen and (max-height: 640px) {
            .e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload),
            .e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload) * {
                background-image: none !important;
            }
        }
    </style>
    <style class='wp-fonts-local'>
        @font-face {
            font-family: Inter;
            font-style: normal;
            font-weight: 300 900;
            font-display: fallback;
            src: url('https://themes.envytheme.com/liva/wp-content/plugins/woocommerce/assets/fonts/Inter-VariableFont_slnt,wght.woff2') format('woff2');
            font-stretch: normal;
        }

        @font-face {
            font-family: Cardo;
            font-style: normal;
            font-weight: 400;
            font-display: fallback;
            src: url('https://themes.envytheme.com/liva/wp-content/plugins/woocommerce/assets/fonts/cardo_normal_400.woff2') format('woff2');
        }
    </style>
    <link rel="icon" href="https://themes.envytheme.com/liva/wp-content/uploads/2024/03/elementor-icon.svg" sizes="32x32" />
    <link rel="icon" href="https://themes.envytheme.com/liva/wp-content/uploads/2024/03/elementor-icon.svg" sizes="192x192" />
    <link rel="apple-touch-icon" href="https://themes.envytheme.com/liva/wp-content/uploads/2024/03/elementor-icon.svg" />
    <meta name="msapplication-TileImage" content="https://themes.envytheme.com/liva/wp-content/uploads/2024/03/elementor-icon.svg" />
    <style id="liva_opt-dynamic-css" title="dynamic-css" class="redux-options-output">
        .navbar .navbar-nav .nav-item .nav-link,
        .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-item,
        .navbar .elementor-icon-list-text {
            color: #000000;
        }
    </style>
</head>

<body class="home page-template-default page page-id-144 theme-liva liva-toolkit-activate  not-logged-in woocommerce-no-js woocommerce-multi-currency-USD tinvwl-theme-style elementor-default elementor-kit-7 elementor-page elementor-page-144">
    <div id="preloader">
        <div class="preloader">
            <div class="waviy">
                <span>L</span>
                <span>I</span>
                <span>V</span>
                <span>A</span>
            </div>
        </div>
    </div>
    <!-- Start Header Area -->
    <div class="top-header-area border-bottom ptb-12">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-5">
                    <ul id="menu-top-menu" class="ps-0 mb-0 list-unstyled info-link d-flex align-items-center justify-content-center justify-content-md-start position-relative tops-1">
                        <li id="menu-item-22" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-22"><a href="https://themes.envytheme.com/liva/about-us/">About Us</a></li>
                        <li id="menu-item-21" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21"><a href="https://themes.envytheme.com/liva/faqs/">FAQs</a></li>
                        <li id="menu-item-20" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-20"><a href="https://themes.envytheme.com/liva/contact/">Help &#038; Contact</a></li>
                    </ul>
                </div>
                <div class="col-lg-6 col-md-7">
                    <ul class="ps-0 mb-0 list-unstyled info-link info-rt d-flex align-items-center justify-content-center justify-content-md-end mt-2 mt-md-0">
                        <li>
                            <a href="https://themes.envytheme.com/liva/shop" class="text-dangerdiv d-felx align-items-center position-relative tops-1">
											<i class="flaticon-flash-sale"></i>
											<span>Flash sale 20% off</span>
										</a>
                        </li>

                        <li>
                            <form method="get" class="liva-currency-form">
                                <select class="form-select p-0 border-0 currency fw-medium fs-14 text-secondary" name="wmc-currency" id="wmc-currency">
																											<option value="USD" selected>USD &#036;</option>
																											<option value="EUR" >EUR &euro;</option>
																									</select>
                            </form>
                        </li>

                        <li class="liva-gtranslate">
                            <div class="gtranslate_wrapper" id="gt-wrapper-81397522"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- End Header Area -->

    <!-- Start Middle Header Area -->
    <div class="middle-header-area ptb-20 middle-2">
        <div class="container">
            <div class="d-lg-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center middle-header-lt justify-content-center justify-content-lg-end">
                    <a class="d-none d-lg-block middle-logo" href="https://themes.envytheme.com/liva/">
																			<img src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/logo.svg" alt="Liva">
																	</a>

                    <form class="d-flex" role="search" method="get" id="searchform" action="https://themes.envytheme.com/liva/">
                        <div class="liva-header-search">
                            <select class="form-select custom-width" name="product_cat" id="categories">
														<option class="select-value" value="" selected="selected"></option>
																														<option value="uncategorized">Uncategorized</option>
																																<option value="dell-screen">Dell Screen</option>
																																<option value="desktop-barebones">Desktop Barebones</option>
																																<option value="drone-camera">Drone &amp; Camera</option>
																																<option value="electronics-accessories">Electronics Accessories</option>
																																<option value="gaming-computer">Gaming Computer</option>
																																<option value="gaming-monitor">Gaming Monitor</option>
																																<option value="headphones">Headphones</option>
																																<option value="internal-components">Internal Components</option>
																																<option value="laptop-desktop">Laptop &amp; Desktop</option>
																																<option value="mega-sale-11-11">Mega Sale 11.11</option>
																																<option value="smart-home-electronics">Smart Home Electronics</option>
																																<option value="smart-monitor">Smart Monitor</option>
																																<option value="smart-watches">Smart Watches</option>
																																<option value="smartphone-tablets">Smartphone &amp; Tablets</option>
																																<option value="virtual-reality-headsets">Virtual Reality Headsets</option>
																																<option value="wireless-headphone">Wireless Headphone</option>
																													</select>
                        </div>

                        <div class="position-relative">
                            <input type="text" value="" name="s" id="s" class="form-control border-2" placeholder="Search for products...">
                            <button type="submit" class="position-absolute top-50 end-0 translate-middle-y btn btn-primary fs-14 fw-medium text-white">
														<i class="ri-search-line"></i>
														<span class="d-none d-sm-inline-block">Search</span>
													</button>
                        </div>
                        <input type="hidden" name="post_type" value="product" />
                    </form>
                </div>

                <ul class="d-flex middle-header-rt ps-0 mb-0 list-unstyled justify-content-center justify-content-lg-end mt-3 mt-lg-0">
                    <li class="buy-info">
                        <a href="https://themes.envytheme.com/liva/my-account/" class="text-decoration-none">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <i class="ri-user-line"></i>
                                </div>
                                <div class="flex-grow-1 ms-10">
                                    <span>Login Your</span>
                                    <h3>Account</h3>
                                </div>
                            </div>
                        </a>
                    </li>

                    <li class="buy-info">
                        <a href="https://themes.envytheme.com/liva/wishlist/" class="text-decoration-none">
                            <div class="position-relative me-9">
                                <i class="ri-heart-line"></i>
                                <span class="count wishlist_products_counter_number"></span>
                            </div>
                        </a>
                    </li>

                    <li class="buy-info">
                        <div class="cart-dropdown-btn">
                            <a class="text-decoration-none" href="javascript:void(0);">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0">
                                        <div class="position-relative me-9">
                                            <i class="ri-shopping-cart-line"></i>
                                            <span class="count liva-cart-number liva-tools-count">0</span>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 ms-1">
                                        <span>Your Cart</span>
                                        <h3 class="liva-cart-total"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#36;</span>0</span>
                                        </h3>
                                    </div>
                                </div>
                            </a>

                            <ul class="liva-header-cart-content cart-dropdown">
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- End Middle Header Area -->
    <!-- Start Navbar Area -->
    <nav class="navbar navbar-expand-lg bg-white" id="navbar">
        <div class="container mw-1610">
            <a class="navbar-brand d-lg-none" href="https://themes.envytheme.com/liva/">
													<img src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/logo.svg" alt="Liva" class="main-logo">
											</a>
            <a class="navbar-toggler" data-bs-toggle="offcanvas" href="#navbarOffcanvas" role="button" aria-controls="navbarOffcanvas">
						<span class="burger-menu">
							<span class="top-bar"></span>
							<span class="middle-bar"></span>
							<span class="bottom-bar"></span>
						</span>
					</a>

            <ul class="categories-nav d-none d-lg-block">
                <li class="categories-item dropdown">
                    <a class="categories-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
									<i class="ri-menu-2-line"></i>
									<span>Browse Categories</span>
								</a>

                    <div class="dropdown-menu">
                        <ul id="menu-sidebar-menu" class="category-menu">
                            <li id="menu-item-216" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children mega-menu mega-menu-elementor sidebar-mega menu-item-216"><a href="https://themes.envytheme.com/liva/product-category/smartphone-tablets/"><i class="flaticon-mobile-phone"></i>Smartphone &amp; Tablets</a>
                                <ul class="sub-menu">
                                    <li id="menu-item-256" class="liva-elementor-template menu-item menu-item-type-custom menu-item-object-custom menu-item-256">
                                        <div class="liva-elementor-template template-184">
                                            <div data-elementor-type="section" data-elementor-id="184" class="elementor elementor-184">
                                                <div class="elementor-element elementor-element-b5487c6 e-flex e-con-boxed e-con e-parent" data-id="b5487c6" data-element_type="container">
                                                    <div class="e-con-inner">
                                                        <div class="elementor-element elementor-element-16ab3fb e-con-full e-flex e-con e-child" data-id="16ab3fb" data-element_type="container">
                                                            <div class="elementor-element elementor-element-e3ddfa7 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="e3ddfa7" data-element_type="widget" data-widget_type="icon-list.default">
                                                                <div class="elementor-widget-container">
                                                                    <ul class="elementor-icon-list-items">
                                                                        <li class="elementor-icon-list-item">
                                                                            <a href="https://themes.envytheme.com/liva/product-category/electronics-accessories/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Electronics Accessories</span>
											</a>
                                                                        </li>
                                                                        <li class="elementor-icon-list-item">
                                                                            <a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/gaming-computer/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Gaming Computer</span>
											</a>
                                                                        </li>
                                                                        <li class="elementor-icon-list-item">
                                                                            <a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/gaming-monitor/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Gaming Monitor</span>
											</a>
                                                                        </li>
                                                                        <li class="elementor-icon-list-item">
                                                                            <a href="https://themes.envytheme.com/liva/product-category/headphones/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Latest Headphones</span>
											</a>
                                                                        </li>
                                                                        <li class="elementor-icon-list-item">
                                                                            <a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/internal-components/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Internal Components</span>
											</a>
                                                                        </li>
                                                                        <li class="elementor-icon-list-item">
                                                                            <a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Laptop & Desktop</span>
											</a>
                                                                        </li>
                                                                        <li class="elementor-icon-list-item">
                                                                            <a href="https://themes.envytheme.com/liva/product-category/smart-home-electronics/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Smart Home Electronics</span>
											</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="elementor-element elementor-element-791bddb e-con-full e-flex e-con e-child" data-id="791bddb" data-element_type="container">
                                                            <div class="elementor-element elementor-element-684abb1 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="684abb1" data-element_type="widget" data-widget_type="icon-list.default">
                                                                <div class="elementor-widget-container">
                                                                    <ul class="elementor-icon-list-items">
                                                                        <li class="elementor-icon-list-item">
                                                                            <a href="https://themes.envytheme.com/liva/product-category/wireless-headphone/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Wireless Headphone</span>
											</a>
                                                                        </li>
                                                                        <li class="elementor-icon-list-item">
                                                                            <a href="https://themes.envytheme.com/liva/product-category/virtual-reality-headsets/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Virtual Reality Headsets</span>
											</a>
                                                                        </li>
                                                                        <li class="elementor-icon-list-item">
                                                                            <a href="https://themes.envytheme.com/liva/product-category/smartphone-tablets/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Smartphone & Tablets</span>
											</a>
                                                                        </li>
                                                                        <li class="elementor-icon-list-item">
                                                                            <a href="https://themes.envytheme.com/liva/product-category/smart-watches/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Smart Watches</span>
											</a>
                                                                        </li>
                                                                        <li class="elementor-icon-list-item">
                                                                            <a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/smart-monitor/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Smart Monitor</span>
											</a>
                                                                        </li>
                                                                        <li class="elementor-icon-list-item">
                                                                            <a href="https://themes.envytheme.com/liva/product-category/smart-home-electronics/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Smart Home Electronics</span>
											</a>
                                                                        </li>
                                                                        <li class="elementor-icon-list-item">
                                                                            <a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/internal-components/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Internal Components</span>
											</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="elementor-element elementor-element-3b2d3ea e-con-full e-flex e-con e-child" data-id="3b2d3ea" data-element_type="container">
                                                            <div class="elementor-element elementor-element-06ec7f0 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="06ec7f0" data-element_type="widget" data-widget_type="icon-list.default">
                                                                <div class="elementor-widget-container">
                                                                    <ul class="elementor-icon-list-items">
                                                                        <li class="elementor-icon-list-item">
                                                                            <a href="https://themes.envytheme.com/liva/product-category/smart-home-electronics/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Smart Home Electronics</span>
											</a>
                                                                        </li>
                                                                        <li class="elementor-icon-list-item">
                                                                            <a href="https://themes.envytheme.com/liva/product-category/virtual-reality-headsets/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Virtual Reality Headsets</span>
											</a>
                                                                        </li>
                                                                        <li class="elementor-icon-list-item">
                                                                            <a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/smart-monitor/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Smart Monitor</span>
											</a>
                                                                        </li>
                                                                        <li class="elementor-icon-list-item">
                                                                            <a href="https://themes.envytheme.com/liva/product-category/smartphone-tablets/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Smartphone & Tablets</span>
											</a>
                                                                        </li>
                                                                        <li class="elementor-icon-list-item">
                                                                            <a href="https://themes.envytheme.com/liva/product-category/smart-watches/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Smart Watches</span>
											</a>
                                                                        </li>
                                                                        <li class="elementor-icon-list-item">
                                                                            <a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/internal-components/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Internal Components</span>
											</a>
                                                                        </li>
                                                                        <li class="elementor-icon-list-item">
                                                                            <a href="https://themes.envytheme.com/liva/product-category/wireless-headphone/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Wireless Headphone</span>
											</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li id="menu-item-213" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children mega-menu mega-menu-elementor sidebar-mega menu-item-213"><a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/"><i class="flaticon-laptop"></i>Laptop &amp; Desktop</a>
                                <ul class="sub-menu">
                                    <li id="menu-item-264" class="liva-elementor-template menu-item menu-item-type-custom menu-item-object-custom menu-item-264">
                                        <div class="liva-elementor-template template-258">
                                            <div data-elementor-type="section" data-elementor-id="258" class="elementor elementor-258">
                                                <div class="elementor-element elementor-element-b5487c6 e-flex e-con-boxed e-con e-parent" data-id="b5487c6" data-element_type="container">
                                                    <div class="e-con-inner">
                                                        <div class="elementor-element elementor-element-16ab3fb e-con-full e-flex e-con e-child" data-id="16ab3fb" data-element_type="container">
                                                            <div class="elementor-element elementor-element-e3ddfa7 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="e3ddfa7" data-element_type="widget" data-widget_type="icon-list.default">
                                                                <div class="elementor-widget-container">
                                                                    <ul class="elementor-icon-list-items">
                                                                        <li class="elementor-icon-list-item">
                                                                            <a href="https://themes.envytheme.com/liva/product-category/electronics-accessories/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Electronics Accessories</span>
											</a>
                                                                        </li>
                                                                        <li class="elementor-icon-list-item">
                                                                            <a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/internal-components/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Internal Components</span>
											</a>
                                                                        </li>
                                                                        <li class="elementor-icon-list-item">
                                                                            <a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Laptop & Desktop</span>
											</a>
                                                                        </li>
                                                                        <li class="elementor-icon-list-item">
                                                                            <a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/smart-monitor/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Smart Monitor</span>
											</a>
                                                                        </li>
                                                                        <li class="elementor-icon-list-item">
                                                                            <a href="https://themes.envytheme.com/liva/product-category/smartphone-tablets/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Smartphone & Tablets</span>
											</a>
                                                                        </li>
                                                                        <li class="elementor-icon-list-item">
                                                                            <a href="https://themes.envytheme.com/liva/product-category/virtual-reality-headsets/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Virtual Reality Headsets</span>
											</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="elementor-element elementor-element-972e0e0 e-con-full e-flex e-con e-child" data-id="972e0e0" data-element_type="container">
                                                            <div class="elementor-element elementor-element-2e2cbbe elementor-widget elementor-widget-image" data-id="2e2cbbe" data-element_type="widget" data-widget_type="image.default">
                                                                <div class="elementor-widget-container">
                                                                    <img fetchpriority="high" width="590" height="330" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/subscribe-img.png" class="attachment-large size-large wp-image-262" alt="subscribe-img" srcset="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/subscribe-img.png 590w, https://themes.envytheme.com/liva/wp-content/uploads/2024/02/subscribe-img-300x168.png 300w"
                                                                        sizes="(max-width: 590px) 100vw, 590px" /> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li id="menu-item-214" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-214"><a href="https://themes.envytheme.com/liva/product-category/smart-home-electronics/"><i class="flaticon-smart-home"></i>Smart Home Electronics</a>
                                <ul class="sub-menu">
                                    <li id="menu-item-221" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-221"><a href="https://themes.envytheme.com/liva/product-category/drone-camera/">Drone &amp; Camera</a></li>
                                    <li id="menu-item-222" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-222"><a href="https://themes.envytheme.com/liva/product-category/electronics-accessories/">Electronics Accessories</a></li>
                                    <li id="menu-item-223" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-223"><a href="https://themes.envytheme.com/liva/product-category/headphones/">Headphones</a></li>
                                    <li id="menu-item-224" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-224"><a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/">Laptop &amp; Desktop</a></li>
                                    <li id="menu-item-225" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-225"><a href="https://themes.envytheme.com/liva/product-category/mega-sale-11-11/">Mega Sale 11.11</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-212" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-212"><a href="https://themes.envytheme.com/liva/product-category/headphones/"><i class="flaticon-headphones"></i>Headphones</a>
                                <ul class="sub-menu">
                                    <li id="menu-item-226" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-226"><a href="https://themes.envytheme.com/liva/product-category/smart-home-electronics/">Smart Home Electronics</a></li>
                                    <li id="menu-item-227" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-227"><a href="https://themes.envytheme.com/liva/product-category/smart-watches/">Smart Watches</a></li>
                                    <li id="menu-item-228" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-228"><a href="https://themes.envytheme.com/liva/product-category/smartphone-tablets/">Smartphone &amp; Tablets</a></li>
                                    <li id="menu-item-229" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-229"><a href="https://themes.envytheme.com/liva/product-category/virtual-reality-headsets/">Virtual Reality Headsets</a></li>
                                    <li id="menu-item-230" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-230"><a href="https://themes.envytheme.com/liva/product-category/wireless-headphone/">Wireless Headphone</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-215" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-215"><a href="https://themes.envytheme.com/liva/product-category/smart-watches/"><i class="flaticon-electronics"></i>Smart Watches</a>
                                <ul class="sub-menu">
                                    <li id="menu-item-231" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-231"><a href="https://themes.envytheme.com/liva/product-category/smart-home-electronics/">Smart Home Electronics</a></li>
                                    <li id="menu-item-232" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-232"><a href="https://themes.envytheme.com/liva/product-category/smart-watches/">Smart Watches</a></li>
                                    <li id="menu-item-233" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-233"><a href="https://themes.envytheme.com/liva/product-category/smartphone-tablets/">Smartphone &amp; Tablets</a></li>
                                    <li id="menu-item-234" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-234"><a href="https://themes.envytheme.com/liva/product-category/virtual-reality-headsets/">Virtual Reality Headsets</a></li>
                                    <li id="menu-item-235" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-235"><a href="https://themes.envytheme.com/liva/product-category/wireless-headphone/">Wireless Headphone</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-218" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-218"><a href="https://themes.envytheme.com/liva/product-category/virtual-reality-headsets/"><i class="flaticon-vr"></i>Virtual Reality Headsets</a>
                                <ul class="sub-menu">
                                    <li id="menu-item-236" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-236"><a href="https://themes.envytheme.com/liva/product-category/mega-sale-11-11/">Mega Sale 11.11</a></li>
                                    <li id="menu-item-237" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-237"><a href="https://themes.envytheme.com/liva/product-category/smart-home-electronics/">Smart Home Electronics</a></li>
                                    <li id="menu-item-238" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-238"><a href="https://themes.envytheme.com/liva/product-category/smart-watches/">Smart Watches</a></li>
                                    <li id="menu-item-239" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-239"><a href="https://themes.envytheme.com/liva/product-category/smartphone-tablets/">Smartphone &amp; Tablets</a></li>
                                    <li id="menu-item-240" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-240"><a href="https://themes.envytheme.com/liva/product-category/virtual-reality-headsets/">Virtual Reality Headsets</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-210" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-210"><a href="https://themes.envytheme.com/liva/product-category/drone-camera/"><i class="flaticon-drone"></i>Drone &amp; Camera</a>
                                <ul class="sub-menu">
                                    <li id="menu-item-242" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-242"><a href="https://themes.envytheme.com/liva/product-category/smartphone-tablets/">Smartphone &amp; Tablets</a></li>
                                    <li id="menu-item-243" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-243"><a href="https://themes.envytheme.com/liva/product-category/virtual-reality-headsets/">Virtual Reality Headsets</a></li>
                                    <li id="menu-item-244" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-244"><a href="https://themes.envytheme.com/liva/product-category/wireless-headphone/">Wireless Headphone</a></li>
                                    <li id="menu-item-241" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-241"><a href="https://themes.envytheme.com/liva/product-category/smart-watches/">Smart Watches</a></li>
                                    <li id="menu-item-245" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-245"><a href="https://themes.envytheme.com/liva/product-category/drone-camera/">Drone &amp; Camera</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-219" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-219"><a href="https://themes.envytheme.com/liva/product-category/wireless-headphone/"><i class="flaticon-headphones-1"></i>Wireless Headphone</a>
                                <ul class="sub-menu">
                                    <li id="menu-item-246" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-246"><a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/dell-screen/">Dell Screen</a></li>
                                    <li id="menu-item-247" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-247"><a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/desktop-barebones/">Desktop Barebones</a></li>
                                    <li id="menu-item-248" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-248"><a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/gaming-computer/">Gaming Computer</a></li>
                                    <li id="menu-item-249" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-249"><a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/gaming-monitor/">Gaming Monitor</a></li>
                                    <li id="menu-item-250" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-250"><a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/internal-components/">Internal Components</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-211" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-211"><a href="https://themes.envytheme.com/liva/product-category/electronics-accessories/"><i class="flaticon-adapter"></i>Electronics Accessories</a>
                                <ul class="sub-menu">
                                    <li id="menu-item-251" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-251"><a href="https://themes.envytheme.com/liva/product-category/smart-home-electronics/">Smart Home Electronics</a></li>
                                    <li id="menu-item-253" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-253"><a href="https://themes.envytheme.com/liva/product-category/smartphone-tablets/">Smartphone &amp; Tablets</a></li>
                                    <li id="menu-item-254" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-254"><a href="https://themes.envytheme.com/liva/product-category/virtual-reality-headsets/">Virtual Reality Headsets</a></li>
                                    <li id="menu-item-255" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-255"><a href="https://themes.envytheme.com/liva/product-category/wireless-headphone/">Wireless Headphone</a></li>
                                    <li id="menu-item-252" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-252"><a href="https://themes.envytheme.com/liva/product-category/smart-watches/">Smart Watches</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-220" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-220"><a href="https://themes.envytheme.com/liva/product-category/mega-sale-11-11/">Mega Sale 11.11</a></li>
                        </ul>
                    </div>
                </li>
            </ul>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul id="menu-main-menu" class="navbar-nav me-auto ms-68">
                    <li id="menu-item-269" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-144 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children dropdown active menu-item-269 nav-item"><a title="Home" href="https://themes.envytheme.com/liva/" data-hover="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle nav-link" id="menu-item-dropdown-269">Home</a>
                        <ul class="dropdown-menu" aria-labelledby="menu-item-dropdown-269" role="menu">
                            <li id="menu-item-667" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-144 current_page_item active menu-item-667 nav-item"><a title="Electronics &amp; Telemobile Online Shop" href="https://themes.envytheme.com/liva/" class="nav-link dropdown-item">Electronics &#038; Telemobile Online Shop</a></li>
                            <li id="menu-item-666" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-666 nav-item"><a title="Grocery Shop" href="https://themes.envytheme.com/liva-grocery/" class="nav-link dropdown-item">Grocery Shop</a></li>
                            <li id="menu-item-668" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-668 nav-item"><a title="Healthy Diet Foods Shop" href="https://themes.envytheme.com/liva-grocery/healthy-diet-foods-shop/" class="nav-link dropdown-item">Healthy Diet Foods Shop</a></li>
                        </ul>
                    </li>
                    <li id="menu-item-589" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-589 nav-item"><a title="Pages" href="#" data-hover="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle nav-link" id="menu-item-dropdown-589">Pages</a>
                        <ul class="dropdown-menu" aria-labelledby="menu-item-dropdown-589" role="menu">
                            <li id="menu-item-35" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-35 nav-item"><a title="About Us" href="https://themes.envytheme.com/liva/about-us/" class="nav-link dropdown-item">About Us</a></li>
                            <li id="menu-item-604" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-604 nav-item"><a title="Login/Register" href="https://themes.envytheme.com/liva/my-account/" class="nav-link dropdown-item">Login/Register</a></li>
                            <li id="menu-item-34" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-34 nav-item"><a title="FAQs" href="https://themes.envytheme.com/liva/faqs/" class="nav-link dropdown-item">FAQs</a></li>
                            <li id="menu-item-601" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-601 nav-item"><a title="Terms &#038; Conditions" href="https://themes.envytheme.com/liva/terms-conditions/" class="nav-link dropdown-item">Terms &#038; Conditions</a></li>
                            <li id="menu-item-602" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-602 nav-item"><a title="Privacy Policy" href="https://themes.envytheme.com/liva/privacy-policy/" class="nav-link dropdown-item">Privacy Policy</a></li>
                        </ul>
                    </li>
                    <li id="menu-item-39" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mega-menu mega-menu-elementor dropdown menu-item-39 nav-item"><a title="Shop" href="https://themes.envytheme.com/liva/shop/" data-hover="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle nav-link" id="menu-item-dropdown-39">Shop</a>
                        <ul class="dropdown-menu" aria-labelledby="menu-item-dropdown-39" role="menu">
                            <li id="menu-item-280" class="liva-elementor-template menu-item menu-item-type-custom menu-item-object-custom menu-item-280 nav-item">
                                <div class="liva-elementor-template template-276">
                                    <div data-elementor-type="section" data-elementor-id="276" class="elementor elementor-276">
                                        <div class="elementor-element elementor-element-b5487c6 e-flex e-con-boxed e-con e-parent" data-id="b5487c6" data-element_type="container">
                                            <div class="e-con-inner">
                                                <div class="elementor-element elementor-element-16ab3fb e-con-full e-flex e-con e-child" data-id="16ab3fb" data-element_type="container">
                                                    <div class="elementor-element elementor-element-5302571 sub-menu-title elementor-widget elementor-widget-heading" data-id="5302571" data-element_type="widget" data-widget_type="heading.default">
                                                        <div class="elementor-widget-container">
                                                            <h6 class="elementor-heading-title elementor-size-default">Product Layouts</h6>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-e3ddfa7 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="e3ddfa7" data-element_type="widget" data-widget_type="icon-list.default">
                                                        <div class="elementor-widget-container">
                                                            <ul class="elementor-icon-list-items">
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/shop/?orderby=date">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">New Arrivals </span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/shop/?orderby=popularity">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Popular Products</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/shop/?orderby=rating">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Best Rated</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/shop/?shop_view=list_view">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">List View</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/shop">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Grid View</span>
											</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="elementor-element elementor-element-6774be2 e-con-full e-flex e-con e-child" data-id="6774be2" data-element_type="container">
                                                    <div class="elementor-element elementor-element-635f172 sub-menu-title elementor-widget elementor-widget-heading" data-id="635f172" data-element_type="widget" data-widget_type="heading.default">
                                                        <div class="elementor-widget-container">
                                                            <h6 class="elementor-heading-title elementor-size-default">Products Step
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-6ea358d elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="6ea358d" data-element_type="widget" data-widget_type="icon-list.default">
                                                        <div class="elementor-widget-container">
                                                            <ul class="elementor-icon-list-items">
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/shop">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Products</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/cart">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Cart</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/checkout/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Checkout</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/wishlist/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Wishlist</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product/apple-macbook-pro-16-2-with-liquid-retina-xdr-display/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Product Details</span>
											</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="elementor-element elementor-element-aa17779 e-con-full e-flex e-con e-child" data-id="aa17779" data-element_type="container">
                                                    <div class="elementor-element elementor-element-aba1708 sub-menu-title elementor-widget elementor-widget-heading" data-id="aba1708" data-element_type="widget" data-widget_type="heading.default">
                                                        <div class="elementor-widget-container">
                                                            <h6 class="elementor-heading-title elementor-size-default">Admin Page
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-9f038d3 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="9f038d3" data-element_type="widget" data-widget_type="icon-list.default">
                                                        <div class="elementor-widget-container">
                                                            <ul class="elementor-icon-list-items">
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/my-account/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Dashboard</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/my-account/edit-account/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Edit Profile</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/my-account/edit-account/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Edit Profile</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/my-account/orders/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Order History</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/my-account/edit-account/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Change Password</span>
											</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="elementor-element elementor-element-06ddaef e-con-full e-flex e-con e-child" data-id="06ddaef" data-element_type="container">
                                                    <div class="elementor-element elementor-element-cb1a1d2 elementor-widget elementor-widget-image" data-id="cb1a1d2" data-element_type="widget" data-widget_type="image.default">
                                                        <div class="elementor-widget-container">
                                                            <a href="https://themes.envytheme.com/liva/shop">
							<img width="416" height="274" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/menu-product.jpg" class="attachment-full size-full wp-image-278" alt="" srcset="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/menu-product.jpg 416w, https://themes.envytheme.com/liva/wp-content/uploads/2024/02/menu-product-300x198.jpg 300w" sizes="(max-width: 416px) 100vw, 416px" />								</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li id="menu-item-606" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-606 nav-item"><a title="Blog" href="https://themes.envytheme.com/liva/blog/" data-hover="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle nav-link" id="menu-item-dropdown-606">Blog</a>
                        <ul class="dropdown-menu" aria-labelledby="menu-item-dropdown-606" role="menu">
                            <li id="menu-item-607" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-607 nav-item"><a title="Blog" href="https://themes.envytheme.com/liva/blog/" class="nav-link dropdown-item">Blog</a></li>
                            <li id="menu-item-610" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-610 nav-item"><a title="Blog Details" href="https://themes.envytheme.com/liva/the-future-of-tech-a-sneak-peek-into-innovation/" class="nav-link dropdown-item">Blog Details</a></li>
                        </ul>
                    </li>
                    <li id="menu-item-608" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-608 nav-item"><a title="Contact" href="https://themes.envytheme.com/liva/contact/" class="nav-link">Contact</a></li>
                </ul>
            </div>

            <ul class="d-none d-lg-flex others-options ps-0 mb-0 list-unstyled justify-content-end">

                <li class="info">
                    <a href="tel:808-555-0111" class="text-decoration-none">
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0">
                                <i class="ri-phone-line bg-danger-10"></i>
                            </div>
                            <div class="flex-grow-1 ms-10">
                                <span>Hotline</span>
                                <h3>(808) 555-0111)</h3>
                            </div>
                        </div>
                    </a>
                </li>

                <li class="info">
                    <a href="#" class="text-decoration-none location-button" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0">
                                <i class="ri-map-pin-2-line"></i>
                            </div>
                            <div class="flex-grow-1 ms-10">
                                <span>Deliver to</span>
                                <h3>Find Location</h3>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    <!-- End Navbar Area -->

    <!-- Start Mobile Navbar Area -->
    <div class="responsive-navbar mobile-navbar offcanvas offcanvas-end border-0" data-bs-backdrop="static" tabindex="-1" id="navbarOffcanvas">
        <div class="offcanvas-header">

            <a class="logo d-inline-block" href="https://themes.envytheme.com/liva/">
											<img src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/logo.svg" alt="Liva">
									</a>

            <button type="button" class="close-btn bg-transparent position-relative lh-1 p-0 border-0" data-bs-dismiss="offcanvas" aria-label="Close">
					<i class="ri-close-fill"></i>
				</button>
        </div>

        <div class="offcanvas-body">

            <h3 class="mobile-menu-title">Main Menu</h3>
            <ul id="menu-main-menu-1" class="menu">
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-144 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-269"><a href="https://themes.envytheme.com/liva/" aria-current="page">Home</a>
                    <ul class="sub-menu">
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-144 current_page_item menu-item-667"><a href="https://themes.envytheme.com/liva/" aria-current="page">Electronics &#038; Telemobile Online Shop</a></li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-666"><a href="https://themes.envytheme.com/liva-grocery/">Grocery Shop</a></li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-668"><a href="https://themes.envytheme.com/liva-grocery/healthy-diet-foods-shop/">Healthy Diet Foods Shop</a></li>
                    </ul>
                </li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-589"><a href="#">Pages</a>
                    <ul class="sub-menu">
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-35"><a href="https://themes.envytheme.com/liva/about-us/">About Us</a></li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-604"><a href="https://themes.envytheme.com/liva/my-account/">Login/Register</a></li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-34"><a href="https://themes.envytheme.com/liva/faqs/">FAQs</a></li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-601"><a href="https://themes.envytheme.com/liva/terms-conditions/">Terms &#038; Conditions</a></li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-602"><a rel="privacy-policy" href="https://themes.envytheme.com/liva/privacy-policy/">Privacy Policy</a></li>
                    </ul>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mega-menu mega-menu-elementor menu-item-39"><a href="https://themes.envytheme.com/liva/shop/">Shop</a>
                    <ul class="sub-menu">
                        <li class="liva-elementor-template menu-item menu-item-type-custom menu-item-object-custom menu-item-280">
                            <div class="liva-elementor-template template-276">
                                <div data-elementor-type="section" data-elementor-id="276" class="elementor elementor-276">
                                    <div class="elementor-element elementor-element-b5487c6 e-flex e-con-boxed e-con e-parent" data-id="b5487c6" data-element_type="container">
                                        <div class="e-con-inner">
                                            <div class="elementor-element elementor-element-16ab3fb e-con-full e-flex e-con e-child" data-id="16ab3fb" data-element_type="container">
                                                <div class="elementor-element elementor-element-5302571 sub-menu-title elementor-widget elementor-widget-heading" data-id="5302571" data-element_type="widget" data-widget_type="heading.default">
                                                    <div class="elementor-widget-container">
                                                        <h6 class="elementor-heading-title elementor-size-default">Product Layouts</h6>
                                                    </div>
                                                </div>
                                                <div class="elementor-element elementor-element-e3ddfa7 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="e3ddfa7" data-element_type="widget" data-widget_type="icon-list.default">
                                                    <div class="elementor-widget-container">
                                                        <ul class="elementor-icon-list-items">
                                                            <li class="elementor-icon-list-item">
                                                                <a href="https://themes.envytheme.com/liva/shop/?orderby=date">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">New Arrivals </span>
											</a>
                                                            </li>
                                                            <li class="elementor-icon-list-item">
                                                                <a href="https://themes.envytheme.com/liva/shop/?orderby=popularity">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Popular Products</span>
											</a>
                                                            </li>
                                                            <li class="elementor-icon-list-item">
                                                                <a href="https://themes.envytheme.com/liva/shop/?orderby=rating">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Best Rated</span>
											</a>
                                                            </li>
                                                            <li class="elementor-icon-list-item">
                                                                <a href="https://themes.envytheme.com/liva/shop/?shop_view=list_view">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">List View</span>
											</a>
                                                            </li>
                                                            <li class="elementor-icon-list-item">
                                                                <a href="https://themes.envytheme.com/liva/shop">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Grid View</span>
											</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-6774be2 e-con-full e-flex e-con e-child" data-id="6774be2" data-element_type="container">
                                                <div class="elementor-element elementor-element-635f172 sub-menu-title elementor-widget elementor-widget-heading" data-id="635f172" data-element_type="widget" data-widget_type="heading.default">
                                                    <div class="elementor-widget-container">
                                                        <h6 class="elementor-heading-title elementor-size-default">Products Step
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div class="elementor-element elementor-element-6ea358d elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="6ea358d" data-element_type="widget" data-widget_type="icon-list.default">
                                                    <div class="elementor-widget-container">
                                                        <ul class="elementor-icon-list-items">
                                                            <li class="elementor-icon-list-item">
                                                                <a href="https://themes.envytheme.com/liva/shop">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Products</span>
											</a>
                                                            </li>
                                                            <li class="elementor-icon-list-item">
                                                                <a href="https://themes.envytheme.com/liva/cart">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Cart</span>
											</a>
                                                            </li>
                                                            <li class="elementor-icon-list-item">
                                                                <a href="https://themes.envytheme.com/liva/checkout/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Checkout</span>
											</a>
                                                            </li>
                                                            <li class="elementor-icon-list-item">
                                                                <a href="https://themes.envytheme.com/liva/wishlist/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Wishlist</span>
											</a>
                                                            </li>
                                                            <li class="elementor-icon-list-item">
                                                                <a href="https://themes.envytheme.com/liva/product/apple-macbook-pro-16-2-with-liquid-retina-xdr-display/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Product Details</span>
											</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-aa17779 e-con-full e-flex e-con e-child" data-id="aa17779" data-element_type="container">
                                                <div class="elementor-element elementor-element-aba1708 sub-menu-title elementor-widget elementor-widget-heading" data-id="aba1708" data-element_type="widget" data-widget_type="heading.default">
                                                    <div class="elementor-widget-container">
                                                        <h6 class="elementor-heading-title elementor-size-default">Admin Page
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div class="elementor-element elementor-element-9f038d3 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="9f038d3" data-element_type="widget" data-widget_type="icon-list.default">
                                                    <div class="elementor-widget-container">
                                                        <ul class="elementor-icon-list-items">
                                                            <li class="elementor-icon-list-item">
                                                                <a href="https://themes.envytheme.com/liva/my-account/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Dashboard</span>
											</a>
                                                            </li>
                                                            <li class="elementor-icon-list-item">
                                                                <a href="https://themes.envytheme.com/liva/my-account/edit-account/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Edit Profile</span>
											</a>
                                                            </li>
                                                            <li class="elementor-icon-list-item">
                                                                <a href="https://themes.envytheme.com/liva/my-account/edit-account/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Edit Profile</span>
											</a>
                                                            </li>
                                                            <li class="elementor-icon-list-item">
                                                                <a href="https://themes.envytheme.com/liva/my-account/orders/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Order History</span>
											</a>
                                                            </li>
                                                            <li class="elementor-icon-list-item">
                                                                <a href="https://themes.envytheme.com/liva/my-account/edit-account/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Change Password</span>
											</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-06ddaef e-con-full e-flex e-con e-child" data-id="06ddaef" data-element_type="container">
                                                <div class="elementor-element elementor-element-cb1a1d2 elementor-widget elementor-widget-image" data-id="cb1a1d2" data-element_type="widget" data-widget_type="image.default">
                                                    <div class="elementor-widget-container">
                                                        <a href="https://themes.envytheme.com/liva/shop">
							<img width="416" height="274" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/menu-product.jpg" class="attachment-full size-full wp-image-278" alt="" srcset="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/menu-product.jpg 416w, https://themes.envytheme.com/liva/wp-content/uploads/2024/02/menu-product-300x198.jpg 300w" sizes="(max-width: 416px) 100vw, 416px" />								</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-606"><a href="https://themes.envytheme.com/liva/blog/">Blog</a>
                    <ul class="sub-menu">
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-607"><a href="https://themes.envytheme.com/liva/blog/">Blog</a></li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-610"><a href="https://themes.envytheme.com/liva/the-future-of-tech-a-sneak-peek-into-innovation/">Blog Details</a></li>
                    </ul>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-608"><a href="https://themes.envytheme.com/liva/contact/">Contact</a></li>
            </ul>
            <div class="mobile-sidebar-menu">
                <h3 class="mobile-menu-title">Browse Categories</h3>
                <ul id="category-menu" class="menu">
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children mega-menu mega-menu-elementor sidebar-mega menu-item-216"><a href="https://themes.envytheme.com/liva/product-category/smartphone-tablets/"><i class="flaticon-mobile-phone"></i>Smartphone &amp; Tablets</a>
                        <ul class="sub-menu">
                            <li class="liva-elementor-template menu-item menu-item-type-custom menu-item-object-custom menu-item-256">
                                <div class="liva-elementor-template template-184">
                                    <div data-elementor-type="section" data-elementor-id="184" class="elementor elementor-184">
                                        <div class="elementor-element elementor-element-b5487c6 e-flex e-con-boxed e-con e-parent" data-id="b5487c6" data-element_type="container">
                                            <div class="e-con-inner">
                                                <div class="elementor-element elementor-element-16ab3fb e-con-full e-flex e-con e-child" data-id="16ab3fb" data-element_type="container">
                                                    <div class="elementor-element elementor-element-e3ddfa7 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="e3ddfa7" data-element_type="widget" data-widget_type="icon-list.default">
                                                        <div class="elementor-widget-container">
                                                            <ul class="elementor-icon-list-items">
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product-category/electronics-accessories/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Electronics Accessories</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/gaming-computer/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Gaming Computer</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/gaming-monitor/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Gaming Monitor</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product-category/headphones/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Latest Headphones</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/internal-components/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Internal Components</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Laptop & Desktop</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product-category/smart-home-electronics/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Smart Home Electronics</span>
											</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="elementor-element elementor-element-791bddb e-con-full e-flex e-con e-child" data-id="791bddb" data-element_type="container">
                                                    <div class="elementor-element elementor-element-684abb1 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="684abb1" data-element_type="widget" data-widget_type="icon-list.default">
                                                        <div class="elementor-widget-container">
                                                            <ul class="elementor-icon-list-items">
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product-category/wireless-headphone/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Wireless Headphone</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product-category/virtual-reality-headsets/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Virtual Reality Headsets</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product-category/smartphone-tablets/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Smartphone & Tablets</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product-category/smart-watches/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Smart Watches</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/smart-monitor/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Smart Monitor</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product-category/smart-home-electronics/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Smart Home Electronics</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/internal-components/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Internal Components</span>
											</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="elementor-element elementor-element-3b2d3ea e-con-full e-flex e-con e-child" data-id="3b2d3ea" data-element_type="container">
                                                    <div class="elementor-element elementor-element-06ec7f0 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="06ec7f0" data-element_type="widget" data-widget_type="icon-list.default">
                                                        <div class="elementor-widget-container">
                                                            <ul class="elementor-icon-list-items">
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product-category/smart-home-electronics/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Smart Home Electronics</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product-category/virtual-reality-headsets/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Virtual Reality Headsets</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/smart-monitor/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Smart Monitor</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product-category/smartphone-tablets/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Smartphone & Tablets</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product-category/smart-watches/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Smart Watches</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/internal-components/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Internal Components</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product-category/wireless-headphone/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Wireless Headphone</span>
											</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children mega-menu mega-menu-elementor sidebar-mega menu-item-213"><a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/"><i class="flaticon-laptop"></i>Laptop &amp; Desktop</a>
                        <ul class="sub-menu">
                            <li class="liva-elementor-template menu-item menu-item-type-custom menu-item-object-custom menu-item-264">
                                <div class="liva-elementor-template template-258">
                                    <div data-elementor-type="section" data-elementor-id="258" class="elementor elementor-258">
                                        <div class="elementor-element elementor-element-b5487c6 e-flex e-con-boxed e-con e-parent" data-id="b5487c6" data-element_type="container">
                                            <div class="e-con-inner">
                                                <div class="elementor-element elementor-element-16ab3fb e-con-full e-flex e-con e-child" data-id="16ab3fb" data-element_type="container">
                                                    <div class="elementor-element elementor-element-e3ddfa7 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="e3ddfa7" data-element_type="widget" data-widget_type="icon-list.default">
                                                        <div class="elementor-widget-container">
                                                            <ul class="elementor-icon-list-items">
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product-category/electronics-accessories/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Electronics Accessories</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/internal-components/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Internal Components</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Laptop & Desktop</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/smart-monitor/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Smart Monitor</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product-category/smartphone-tablets/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Smartphone & Tablets</span>
											</a>
                                                                </li>
                                                                <li class="elementor-icon-list-item">
                                                                    <a href="https://themes.envytheme.com/liva/product-category/virtual-reality-headsets/">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-square-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 512H0V0h512v512z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Virtual Reality Headsets</span>
											</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="elementor-element elementor-element-972e0e0 e-con-full e-flex e-con e-child" data-id="972e0e0" data-element_type="container">
                                                    <div class="elementor-element elementor-element-2e2cbbe elementor-widget elementor-widget-image" data-id="2e2cbbe" data-element_type="widget" data-widget_type="image.default">
                                                        <div class="elementor-widget-container">
                                                            <img fetchpriority="high" width="590" height="330" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/subscribe-img.png" class="attachment-large size-large wp-image-262" alt="subscribe-img" srcset="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/subscribe-img.png 590w, https://themes.envytheme.com/liva/wp-content/uploads/2024/02/subscribe-img-300x168.png 300w"
                                                                sizes="(max-width: 590px) 100vw, 590px" /> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-214"><a href="https://themes.envytheme.com/liva/product-category/smart-home-electronics/"><i class="flaticon-smart-home"></i>Smart Home Electronics</a>
                        <ul class="sub-menu">
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-221"><a href="https://themes.envytheme.com/liva/product-category/drone-camera/">Drone &amp; Camera</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-222"><a href="https://themes.envytheme.com/liva/product-category/electronics-accessories/">Electronics Accessories</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-223"><a href="https://themes.envytheme.com/liva/product-category/headphones/">Headphones</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-224"><a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/">Laptop &amp; Desktop</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-225"><a href="https://themes.envytheme.com/liva/product-category/mega-sale-11-11/">Mega Sale 11.11</a></li>
                        </ul>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-212"><a href="https://themes.envytheme.com/liva/product-category/headphones/"><i class="flaticon-headphones"></i>Headphones</a>
                        <ul class="sub-menu">
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-226"><a href="https://themes.envytheme.com/liva/product-category/smart-home-electronics/">Smart Home Electronics</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-227"><a href="https://themes.envytheme.com/liva/product-category/smart-watches/">Smart Watches</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-228"><a href="https://themes.envytheme.com/liva/product-category/smartphone-tablets/">Smartphone &amp; Tablets</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-229"><a href="https://themes.envytheme.com/liva/product-category/virtual-reality-headsets/">Virtual Reality Headsets</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-230"><a href="https://themes.envytheme.com/liva/product-category/wireless-headphone/">Wireless Headphone</a></li>
                        </ul>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-215"><a href="https://themes.envytheme.com/liva/product-category/smart-watches/"><i class="flaticon-electronics"></i>Smart Watches</a>
                        <ul class="sub-menu">
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-231"><a href="https://themes.envytheme.com/liva/product-category/smart-home-electronics/">Smart Home Electronics</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-232"><a href="https://themes.envytheme.com/liva/product-category/smart-watches/">Smart Watches</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-233"><a href="https://themes.envytheme.com/liva/product-category/smartphone-tablets/">Smartphone &amp; Tablets</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-234"><a href="https://themes.envytheme.com/liva/product-category/virtual-reality-headsets/">Virtual Reality Headsets</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-235"><a href="https://themes.envytheme.com/liva/product-category/wireless-headphone/">Wireless Headphone</a></li>
                        </ul>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-218"><a href="https://themes.envytheme.com/liva/product-category/virtual-reality-headsets/"><i class="flaticon-vr"></i>Virtual Reality Headsets</a>
                        <ul class="sub-menu">
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-236"><a href="https://themes.envytheme.com/liva/product-category/mega-sale-11-11/">Mega Sale 11.11</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-237"><a href="https://themes.envytheme.com/liva/product-category/smart-home-electronics/">Smart Home Electronics</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-238"><a href="https://themes.envytheme.com/liva/product-category/smart-watches/">Smart Watches</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-239"><a href="https://themes.envytheme.com/liva/product-category/smartphone-tablets/">Smartphone &amp; Tablets</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-240"><a href="https://themes.envytheme.com/liva/product-category/virtual-reality-headsets/">Virtual Reality Headsets</a></li>
                        </ul>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-210"><a href="https://themes.envytheme.com/liva/product-category/drone-camera/"><i class="flaticon-drone"></i>Drone &amp; Camera</a>
                        <ul class="sub-menu">
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-242"><a href="https://themes.envytheme.com/liva/product-category/smartphone-tablets/">Smartphone &amp; Tablets</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-243"><a href="https://themes.envytheme.com/liva/product-category/virtual-reality-headsets/">Virtual Reality Headsets</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-244"><a href="https://themes.envytheme.com/liva/product-category/wireless-headphone/">Wireless Headphone</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-241"><a href="https://themes.envytheme.com/liva/product-category/smart-watches/">Smart Watches</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-245"><a href="https://themes.envytheme.com/liva/product-category/drone-camera/">Drone &amp; Camera</a></li>
                        </ul>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-219"><a href="https://themes.envytheme.com/liva/product-category/wireless-headphone/"><i class="flaticon-headphones-1"></i>Wireless Headphone</a>
                        <ul class="sub-menu">
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-246"><a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/dell-screen/">Dell Screen</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-247"><a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/desktop-barebones/">Desktop Barebones</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-248"><a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/gaming-computer/">Gaming Computer</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-249"><a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/gaming-monitor/">Gaming Monitor</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-250"><a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/internal-components/">Internal Components</a></li>
                        </ul>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-211"><a href="https://themes.envytheme.com/liva/product-category/electronics-accessories/"><i class="flaticon-adapter"></i>Electronics Accessories</a>
                        <ul class="sub-menu">
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-251"><a href="https://themes.envytheme.com/liva/product-category/smart-home-electronics/">Smart Home Electronics</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-253"><a href="https://themes.envytheme.com/liva/product-category/smartphone-tablets/">Smartphone &amp; Tablets</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-254"><a href="https://themes.envytheme.com/liva/product-category/virtual-reality-headsets/">Virtual Reality Headsets</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-255"><a href="https://themes.envytheme.com/liva/product-category/wireless-headphone/">Wireless Headphone</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-252"><a href="https://themes.envytheme.com/liva/product-category/smart-watches/">Smart Watches</a></li>
                        </ul>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-220"><a href="https://themes.envytheme.com/liva/product-category/mega-sale-11-11/">Mega Sale 11.11</a></li>
                </ul>
            </div>
        </div>
    </div>
    <!-- End Mobile Navbar Area -->

    <div class="page-area">

        <div id="post-144" class="post-144 page type-page status-publish hentry">


            <div class="entry-content">
                <div data-elementor-type="wp-page" data-elementor-id="144" class="elementor elementor-144">
                    <div class="elementor-element elementor-element-528ba12 e-con-full e-flex e-con e-parent" data-id="528ba12" data-element_type="container">
                        <div class="elementor-element elementor-element-21379c5 elementor-widget elementor-widget-Liva_Banner_Slider_One" data-id="21379c5" data-element_type="widget" data-widget_type="Liva_Banner_Slider_One.default">
                            <div class="elementor-widget-container">
                                <div class="banner-area bg-gray1">
                                    <div class="swiper banner-slide position-relative">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <div class="container">
                                                    <div class="banner-wrap">
                                                        <div class="row">
                                                            <div class="col-lg-6 col-md-6">
                                                                <div class="banner-content">
                                                                    <span class="top-title">
                                                                                                                    <i class="flaticon-flash-sale"></i> 
                                                                                                                 Mega Sale Madness! Enjoy 50% off                                                    </span>

                                                                    <h2 class="liva-el-title">Spark Your Savings on Electronics!</h2>

                                                                    <p>New Electronics Deals Added! Explore the latest discounts on cameras, wearables, and smart home devices.</p>

                                                                    <a href="https://themes.envytheme.com/liva/shop/" class="btn btn-warning rounded-pill text-white">
                                                        <span>Shop Now</span>
                                                                                                                    <i class="ri-arrow-right-up-line"></i> 
                                                                                                            </a>
                                                                </div>
                                                            </div>

                                                            <div class="col-lg-6 col-md-6">
                                                                <div class="banner-img">
                                                                    <img decoding="async" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/banner-img.png" alt="banner-img">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="container">
                                                    <div class="banner-wrap">
                                                        <div class="row">
                                                            <div class="col-lg-6 col-md-6">
                                                                <div class="banner-content">
                                                                    <span class="top-title">
                                                                                                                    <i class="flaticon-flash-sale"></i> 
                                                                                                                Mega Sale Madness! Enjoy 30% off                                                    </span>

                                                                    <h2 class="liva-el-title">Mobile Madness - Save Big Today!</h2>

                                                                    <p>New Electronics Deals Added! Explore the latest discounts on cameras, wearables, and smart home devices.</p>

                                                                    <a href="https://themes.envytheme.com/liva/shop/" class="btn btn-warning rounded-pill text-white">
                                                        <span>Shop Now</span>
                                                                                                                    <i class="ri-arrow-right-up-line"></i> 
                                                                                                            </a>
                                                                </div>
                                                            </div>

                                                            <div class="col-lg-6 col-md-6">
                                                                <div class="banner-img">
                                                                    <img decoding="async" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/banner-img-2.png" alt="banner-img-2">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="container">
                                                    <div class="banner-wrap">
                                                        <div class="row">
                                                            <div class="col-lg-6 col-md-6">
                                                                <div class="banner-content">
                                                                    <span class="top-title">
                                                                                                                    <i class="flaticon-flash-sale"></i> 
                                                                                                                Mega Sale Madness! Enjoy 30% off                                                    </span>

                                                                    <h2 class="liva-el-title">Wrist Tech Marvels on a Budget!</h2>

                                                                    <p>New Electronics Deals Added! Explore the latest discounts on cameras, wearables, and smart home devices.</p>

                                                                    <a href="https://themes.envytheme.com/liva/shop/" class="btn btn-warning rounded-pill text-white">
                                                        <span>Shop Now</span>
                                                                                                                    <i class="ri-arrow-right-up-line"></i> 
                                                                                                            </a>
                                                                </div>
                                                            </div>

                                                            <div class="col-lg-6 col-md-6">
                                                                <div class="banner-img">
                                                                    <img decoding="async" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/banner-img-3.png" alt="banner-img-3">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="container">


                                            <div class="banner-controller">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="controller-icon prev">
                                                        <i class="flaticon-chevron"></i>
                                                    </div>
                                                    <div class="controller-icon next">
                                                        <i class="flaticon-chevron"></i>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="swiper-pagination-banner"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-e98395a e-con-full e-flex e-con e-parent" data-id="e98395a" data-element_type="container">
                        <div class="elementor-element elementor-element-6ce4871 elementor-widget elementor-widget-ImageBox" data-id="6ce4871" data-element_type="widget" data-widget_type="ImageBox.default">
                            <div class="elementor-widget-container">
                                <div class="best-deals-area pt-60 pb-35">
                                    <div class="container">
                                        <div class="d-sm-flex align-items-center justify-content-between text-center mb-38 mt-minus-6">
                                            <h3 class="fs-3 mb-0 mb-1 mb-sm-0 liva-el-title">Today’s Best Deals</h3>

                                            <div>
                                                <a href="https://themes.envytheme.com/liva/shop/" class="read-more">
                                    <span>See All Deals</span>
                                    <i class="ri-arrow-right-up-line  ms-1"></i> 
                                </a>
                                            </div>
                                        </div>

                                        <div class="row justify-content-center">
                                            <div class="col-xxl-3 col-sm-6">
                                                <div class="single-best-deals-item bg-gray1 pb-0">
                                                    <div class="best-deals-content">
                                                        <h3>iPad &amp; Tablets</h3>
                                                        <p>Up to 50% off today!</p>

                                                        <a href="https://themes.envytheme.com/liva/shop/" class="read-more">
                                            <span>Shop Now</span>
                                            <i class="ri-arrow-right-up-line  ms-1"></i> 
                                        </a>
                                                    </div>

                                                    <img decoding="async" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-2.png" alt="product-2">

                                                </div>
                                            </div>
                                            <div class="col-xxl-3 col-sm-6">
                                                <div class="single-best-deals-item bg-gray1 pb-0">
                                                    <div class="best-deals-content">
                                                        <h3>Cell Phones &amp; Smartphones</h3>
                                                        <p>Up to 20% off today!</p>

                                                        <a href="https://themes.envytheme.com/liva/shop/" class="read-more">
                                            <span>Shop Now</span>
                                            <i class="ri-arrow-right-up-line  ms-1"></i> 
                                        </a>
                                                    </div>

                                                    <img decoding="async" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-3.png" alt="product-3">

                                                </div>
                                            </div>
                                            <div class="col-xxl-3 col-sm-6">
                                                <div class="single-best-deals-item bg-gray1 pb-0">
                                                    <div class="best-deals-content">
                                                        <h3>Audio &amp; SmartTV</h3>
                                                        <p>Up to 70% off today!
                                                        </p>

                                                        <a href="https://themes.envytheme.com/liva/shop/" class="read-more">
                                            <span>Shop Now</span>
                                            <i class="ri-arrow-right-up-line  ms-1"></i> 
                                        </a>
                                                    </div>

                                                    <img decoding="async" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-4.png" alt="product-4">

                                                </div>
                                            </div>
                                            <div class="col-xxl-3 col-sm-6">
                                                <div class="single-best-deals-item bg-gray1 pb-0">
                                                    <div class="best-deals-content">
                                                        <h3>Premium Headphones</h3>
                                                        <p>Up to 40% off today!

                                                        </p>

                                                        <a href="https://themes.envytheme.com/liva/shop/" class="read-more">
                                            <span>Shop Now</span>
                                            <i class="ri-arrow-right-up-line  ms-1"></i> 
                                        </a>
                                                    </div>

                                                    <img decoding="async" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-5.png" alt="product-5">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-884cf97 e-con-full e-flex e-con e-parent" data-id="884cf97" data-element_type="container">
                        <div class="elementor-element elementor-element-15620a6 elementor-widget elementor-widget-liva-product-tab-carousel-default" data-id="15620a6" data-element_type="widget" data-widget_type="liva-product-tab-carousel-default.default">
                            <div class="elementor-widget-container">
                                <div class="this-month-sales-area pb-60">
                                    <div class="container position-relative">
                                        <div class="d-lg-flex align-items-center justify-content-between text-center mb-27 mt-minus-6">
                                            <div class="d-lg-flex align-items-center">
                                                <h3 class="fs-3 mb-0 mb-1 mb-sm-0 liva-el-title">This Month Sales</h3>

                                                <ul class="nav nav-tabs border-0 this-month-tabs justify-content-center justify-content-lg-start mb-2 mb-lg-0" id="myTab15620a6" role="tablist">

                                                    <li class="nav-item mt-3 mt-lg-0" role="presentation">
                                                        <button class="nav-link active" id="all-tab-15620a6" data-bs-toggle="tab" data-bs-target="#all-tab-15620a6-pane" type="button" role="tab" aria-controls="all-tab-15620a6-pane" aria-selected="true">All</button>
                                                    </li>

                                                    <li class="nav-item mt-3 mt-lg-0" role="presentation">
                                                        <button class="nav-link" id="tab-31" data-bs-toggle="tab" data-bs-target="#tab-31-pane" type="button" role="tab" aria-controls="tab-31-pane" aria-selected="false">Electronics Accessories</button>
                                                    </li>
                                                    <li class="nav-item mt-3 mt-lg-0" role="presentation">
                                                        <button class="nav-link" id="tab-18" data-bs-toggle="tab" data-bs-target="#tab-18-pane" type="button" role="tab" aria-controls="tab-18-pane" aria-selected="false">Laptop &amp; Desktop</button>
                                                    </li>
                                                    <li class="nav-item mt-3 mt-lg-0" role="presentation">
                                                        <button class="nav-link" id="tab-17" data-bs-toggle="tab" data-bs-target="#tab-17-pane" type="button" role="tab" aria-controls="tab-17-pane" aria-selected="false">Smartphone &amp; Tablets</button>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div>
                                                <a href="https://themes.envytheme.com/liva/shop/" class="read-more">
                                <span>See All Deals</span>
                                <i class="ri-arrow-right-up-line  ms-1"></i> 
                            </a>
                                            </div>
                                        </div>
                                        <div class="tab-content" id="myTabContent15620a6">
                                            <div class="tab-pane fade show active" id="all-tab-15620a6-pane" role="tabpanel" aria-labelledby="all-tab-15620a6" tabindex="0">
                                                <div class="swiper product-slide">
                                                    <div class="swiper-wrapper">
                                                        <div class="swiper-slide">
                                                            <div class="single-product-telemobile-item">
                                                                <div class="product-img position-relative">
                                                                    <a href="https://themes.envytheme.com/liva/product/microwave-oven-with-led-lighting-700-watts-0-7-cu-ft/" class="d-block">
                <img decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-1-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                    <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                        <span class="minus-count">-11%</span>
                                                                        <div class="border-0 wish-btn">
                                                                            <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="451">
                                                                                <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="451" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                    data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                                <div class="tinvwl-tooltip"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="product-content">
                                                                    <a href="https://themes.envytheme.com/liva/product/microwave-oven-with-led-lighting-700-watts-0-7-cu-ft/" class="title">Microwave Oven With LED Lighting &#8211;  700 Watts, 0.7 cu ft</a>
                                                                    <div class="d-flex gap-1 review">
                                                                        <div class="product-rating">
                                                                            <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span style="width:100%">Rated <strong class="rating">5.00</strong> out of 5</span></div>
                                                                            <div class="prt">(1 review)</div>
                                                                        </div>
                                                                    </div>
                                                                    <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>450</span></del> <span class="screen-reader-text">Original price was: &#036;450.</span>
                                                                        <span
                                                                            class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>399</span><span class="screen-reader-text">Current price is: &#036;399.</span></h3>
                                                                    <div class="d-flex sold-stock gap-4 align-items-center">
                                                                        <span class="sold">21 Sold</span>
                                                                        <span class="stock"><i class="ri-check-line"></i> 214 in stock</span>
                                                                    </div>
                                                                    <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                        <div class="flex-shrink-0">
                                                                            <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                        </div>
                                                                        <div class="flex-grow-1">
                                                                            <div class="d-flex gap-1 justify-content-end">
                                                                                <a href="?add-to-cart=451" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="451" data-product_sku="" aria-label="Add to cart: &ldquo;Microwave Oven With LED Lighting -  700 Watts, 0.7 cu ft&rdquo;"
                                                                                    rel="nofollow" data-success_message="&ldquo;Microwave Oven With LED Lighting -  700 Watts, 0.7 cu ft&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <div class="single-product-telemobile-item">
                                                                <div class="product-img position-relative">
                                                                    <a href="https://themes.envytheme.com/liva/product/apple-macbook-pro-16-2-with-liquid-retina-xdr-display/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-9-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                    <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                        <div class="border-0 wish-btn">
                                                                            <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="448">
                                                                                <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="448" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                    data-tinv-wl-producttype="variable" data-tinv-wl-action="add"></a>
                                                                                <div class="tinvwl-tooltip"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="product-content">
                                                                    <a href="https://themes.envytheme.com/liva/product/apple-macbook-pro-16-2-with-liquid-retina-xdr-display/" class="title">Apple MacBook Pro 16.2&#8243; with Liquid Retina XDR Display</a>
                                                                    <div class="d-flex gap-1 review">
                                                                        <div class="product-rating">
                                                                            <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span style="width:100%">Rated <strong class="rating">5.00</strong> out of 5</span></div>
                                                                            <div class="prt">(1 review)</div>
                                                                        </div>
                                                                    </div>
                                                                    <h3><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>1,500</span> &ndash; <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>2,400</span>
                                                                    </h3>
                                                                    <div class="d-flex sold-stock gap-4 align-items-center">
                                                                        <span class="sold">6 Sold</span>
                                                                        <span class="stock"><i class="ri-check-line"></i> 494 in stock</span>
                                                                    </div>
                                                                    <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                        <div class="flex-shrink-0">
                                                                            <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                        </div>
                                                                        <div class="flex-grow-1">
                                                                            <div class="d-flex gap-1 justify-content-end">
                                                                                <a href="https://themes.envytheme.com/liva/product/apple-macbook-pro-16-2-with-liquid-retina-xdr-display/" data-quantity="1" class="button product_type_variable add_to_cart_button add-to-cart-btn" data-product_id="448" data-product_sku="SMTGS6T45" aria-label="Select options for &ldquo;Apple MacBook Pro 16.2&quot; with Liquid Retina XDR Display&rdquo;"
                                                                                    rel="nofollow"><i class="ri-shopping-cart-line"></i>Select options</a> </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <div class="single-product-telemobile-item">
                                                                <div class="product-img position-relative">
                                                                    <a href="https://themes.envytheme.com/liva/product/15-pro-max-5g-unlocked-smartphone6gb256gb/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-20-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                    <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                        <div class="border-0 wish-btn">
                                                                            <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="447">
                                                                                <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="447" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                    data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                                <div class="tinvwl-tooltip"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="product-content">
                                                                    <a href="https://themes.envytheme.com/liva/product/15-pro-max-5g-unlocked-smartphone6gb256gb/" class="title">15 Pro Max 5G Unlocked Smartphone,6GB+256GB</a>
                                                                    <div class="d-flex gap-1 review review-blank">
                                                                        <i class="flaticon-star-1"></i>
                                                                        <i class="flaticon-star-1"></i>
                                                                        <i class="flaticon-star-1"></i>
                                                                        <i class="flaticon-star-1"></i>
                                                                        <i class="flaticon-star-1"></i>
                                                                        <div class="prt">0 reviews</div>
                                                                    </div>
                                                                    <h3><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>999</span>
                                                                    </h3>
                                                                    <div class="d-flex sold-stock gap-4 align-items-center">
                                                                        <span class="sold">16 Sold</span>
                                                                        <span class="stock"><i class="ri-check-line"></i> 184 in stock</span>
                                                                    </div>
                                                                    <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                        <div class="flex-shrink-0">
                                                                            <span class="delivery"><i class="ri-truck-line"></i> Free Delivery</span>
                                                                        </div>
                                                                        <div class="flex-grow-1">
                                                                            <div class="d-flex gap-1 justify-content-end">
                                                                                <a href="?add-to-cart=447" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="447" data-product_sku="" aria-label="Add to cart: &ldquo;15 Pro Max 5G Unlocked Smartphone,6GB+256GB&rdquo;"
                                                                                    rel="nofollow" data-success_message="&ldquo;15 Pro Max 5G Unlocked Smartphone,6GB+256GB&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <div class="single-product-telemobile-item">
                                                                <div class="product-img position-relative">
                                                                    <a href="https://themes.envytheme.com/liva/product/32-inch-d-series-hd-720p-smart-tv-with-apple-airplay/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-8-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                    <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                        <span class="minus-count">-19%</span>
                                                                        <div class="border-0 wish-btn">
                                                                            <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="444">
                                                                                <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="444" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                    data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                                <div class="tinvwl-tooltip"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="product-content">
                                                                    <a href="https://themes.envytheme.com/liva/product/32-inch-d-series-hd-720p-smart-tv-with-apple-airplay/" class="title">32 inch D-Series HD 720p Smart TV with Apple AirPlay</a>
                                                                    <div class="d-flex gap-1 review review-blank">
                                                                        <i class="flaticon-star-1"></i>
                                                                        <i class="flaticon-star-1"></i>
                                                                        <i class="flaticon-star-1"></i>
                                                                        <i class="flaticon-star-1"></i>
                                                                        <i class="flaticon-star-1"></i>
                                                                        <div class="prt">0 reviews</div>
                                                                    </div>
                                                                    <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>159</span></del> <span class="screen-reader-text">Original price was: &#036;159.</span>
                                                                        <span
                                                                            class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>128</span><span class="screen-reader-text">Current price is: &#036;128.</span></h3>
                                                                    <div class="d-flex sold-stock gap-4 align-items-center">
                                                                        <span class="sold">7 Sold</span>
                                                                        <span class="stock"><i class="ri-check-line"></i> 893 in stock</span>
                                                                    </div>
                                                                    <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                        <div class="flex-shrink-0">
                                                                            <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                        </div>
                                                                        <div class="flex-grow-1">
                                                                            <div class="d-flex gap-1 justify-content-end">
                                                                                <a href="?add-to-cart=444" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="444" data-product_sku="" aria-label="Add to cart: &ldquo;32 inch D-Series HD 720p Smart TV with Apple AirPlay&rdquo;"
                                                                                    rel="nofollow" data-success_message="&ldquo;32 inch D-Series HD 720p Smart TV with Apple AirPlay&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <div class="single-product-telemobile-item">
                                                                <div class="product-img position-relative">
                                                                    <a href="https://themes.envytheme.com/liva/product/14-pro-max-5g-unlocked-smartphone-6gb256gb/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-24-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                    <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                        <span class="minus-count">-6%</span>
                                                                        <div class="border-0 wish-btn">
                                                                            <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="405">
                                                                                <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="405" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                    data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                                <div class="tinvwl-tooltip"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="product-content">
                                                                    <a href="https://themes.envytheme.com/liva/product/14-pro-max-5g-unlocked-smartphone-6gb256gb/" class="title">14 Pro Max 5G Unlocked Smartphone &#8211; 6GB+256GB</a>
                                                                    <div class="d-flex gap-1 review review-blank">
                                                                        <i class="flaticon-star-1"></i>
                                                                        <i class="flaticon-star-1"></i>
                                                                        <i class="flaticon-star-1"></i>
                                                                        <i class="flaticon-star-1"></i>
                                                                        <i class="flaticon-star-1"></i>
                                                                        <div class="prt">0 reviews</div>
                                                                    </div>
                                                                    <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>849</span></del> <span class="screen-reader-text">Original price was: &#036;849.</span>
                                                                        <span
                                                                            class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>799</span><span class="screen-reader-text">Current price is: &#036;799.</span></h3>
                                                                    <div class="d-flex sold-stock gap-4 align-items-center">
                                                                        <span class="sold">9 Sold</span>
                                                                        <span class="stock"><i class="ri-check-line"></i> 441 in stock</span>
                                                                    </div>
                                                                    <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                        <div class="flex-shrink-0">
                                                                            <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                        </div>
                                                                        <div class="flex-grow-1">
                                                                            <div class="d-flex gap-1 justify-content-end">
                                                                                <a href="?add-to-cart=405" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="405" data-product_sku="" aria-label="Add to cart: &ldquo;14 Pro Max 5G Unlocked Smartphone - 6GB+256GB&rdquo;"
                                                                                    rel="nofollow" data-success_message="&ldquo;14 Pro Max 5G Unlocked Smartphone - 6GB+256GB&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <div class="single-product-telemobile-item">
                                                                <div class="product-img position-relative">
                                                                    <a href="https://themes.envytheme.com/liva/product/power-bank-25600mah-portable-charger-87w-bundle/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-11-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                    <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                        <div class="border-0 wish-btn">
                                                                            <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="31">
                                                                                <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="31" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                    data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                                <div class="tinvwl-tooltip"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="product-content">
                                                                    <a href="https://themes.envytheme.com/liva/product/power-bank-25600mah-portable-charger-87w-bundle/" class="title">Power Bank, 25,600mAh Portable Charger 87W Bundle</a>
                                                                    <div class="d-flex gap-1 review review-blank">
                                                                        <i class="flaticon-star-1"></i>
                                                                        <i class="flaticon-star-1"></i>
                                                                        <i class="flaticon-star-1"></i>
                                                                        <i class="flaticon-star-1"></i>
                                                                        <i class="flaticon-star-1"></i>
                                                                        <div class="prt">0 reviews</div>
                                                                    </div>
                                                                    <h3><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>100</span>
                                                                    </h3>
                                                                    <div class="d-flex sold-stock gap-4 align-items-center">
                                                                        <span class="sold">1 Sold</span>
                                                                        <span class="stock"><i class="ri-check-line"></i> 44 in stock</span>
                                                                    </div>
                                                                    <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                        <div class="flex-shrink-0">
                                                                            <span class="delivery"><i class="ri-truck-line"></i> Free Delivery</span>
                                                                        </div>
                                                                        <div class="flex-grow-1">
                                                                            <div class="d-flex gap-1 justify-content-end">
                                                                                <a href="?add-to-cart=31" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="31" data-product_sku="" aria-label="Add to cart: &ldquo;Power Bank, 25,600mAh Portable Charger 87W Bundle&rdquo;"
                                                                                    rel="nofollow" data-success_message="&ldquo;Power Bank, 25,600mAh Portable Charger 87W Bundle&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-controller">
                                                    <div class="controller-icon prev">
                                                        <i class="flaticon-chevron"></i>
                                                    </div>
                                                    <div class="controller-icon next">
                                                        <i class="flaticon-chevron"></i>
                                                    </div>
                                                </div>
                                                <div class="swiper-pagination-product text-center mt-3 lh-1"></div>
                                            </div>

                                            <div class="tab-pane fade" id="tab-31-pane" role="tabpanel" aria-labelledby="tab-31" tabindex="0">
                                                <div class="row g-xl-0 justify-content-center">
                                                    <div class="col-c-20">
                                                        <div class="single-product-telemobile-item">
                                                            <div class="product-img position-relative">
                                                                <a href="https://themes.envytheme.com/liva/product/microwave-oven-with-led-lighting-700-watts-0-7-cu-ft/" class="d-block">
                <img decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-1-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                    <span class="minus-count">-11%</span>
                                                                    <div class="border-0 wish-btn">
                                                                        <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="451">
                                                                            <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="451" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                            <div class="tinvwl-tooltip"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-content">
                                                                <a href="https://themes.envytheme.com/liva/product/microwave-oven-with-led-lighting-700-watts-0-7-cu-ft/" class="title">Microwave Oven With LED Lighting &#8211;  700 Watts, 0.7 cu ft</a>
                                                                <div class="d-flex gap-1 review">
                                                                    <div class="product-rating">
                                                                        <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span style="width:100%">Rated <strong class="rating">5.00</strong> out of 5</span></div>
                                                                        <div class="prt">(1 review)</div>
                                                                    </div>
                                                                </div>
                                                                <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>450</span></del> <span class="screen-reader-text">Original price was: &#036;450.</span>
                                                                    <span
                                                                        class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>399</span><span class="screen-reader-text">Current price is: &#036;399.</span></h3>
                                                                <div class="d-flex sold-stock gap-4 align-items-center">
                                                                    <span class="sold">21 Sold</span>
                                                                    <span class="stock"><i class="ri-check-line"></i> 214 in stock</span>
                                                                </div>
                                                                <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                    <div class="flex-shrink-0">
                                                                        <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                    </div>
                                                                    <div class="flex-grow-1">
                                                                        <div class="d-flex gap-1 justify-content-end">
                                                                            <a href="?add-to-cart=451" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="451" data-product_sku="" aria-label="Add to cart: &ldquo;Microwave Oven With LED Lighting -  700 Watts, 0.7 cu ft&rdquo;"
                                                                                rel="nofollow" data-success_message="&ldquo;Microwave Oven With LED Lighting -  700 Watts, 0.7 cu ft&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                            </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-c-20">
                                                        <div class="single-product-telemobile-item">
                                                            <div class="product-img position-relative">
                                                                <a href="https://themes.envytheme.com/liva/product/power-bank-25600mah-portable-charger-87w-bundle/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-11-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                    <div class="border-0 wish-btn">
                                                                        <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="31">
                                                                            <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="31" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                            <div class="tinvwl-tooltip"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-content">
                                                                <a href="https://themes.envytheme.com/liva/product/power-bank-25600mah-portable-charger-87w-bundle/" class="title">Power Bank, 25,600mAh Portable Charger 87W Bundle</a>
                                                                <div class="d-flex gap-1 review review-blank">
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <div class="prt">0 reviews</div>
                                                                </div>
                                                                <h3><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>100</span>
                                                                </h3>
                                                                <div class="d-flex sold-stock gap-4 align-items-center">
                                                                    <span class="sold">1 Sold</span>
                                                                    <span class="stock"><i class="ri-check-line"></i> 44 in stock</span>
                                                                </div>
                                                                <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                    <div class="flex-shrink-0">
                                                                        <span class="delivery"><i class="ri-truck-line"></i> Free Delivery</span>
                                                                    </div>
                                                                    <div class="flex-grow-1">
                                                                        <div class="d-flex gap-1 justify-content-end">
                                                                            <a href="?add-to-cart=31" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="31" data-product_sku="" aria-label="Add to cart: &ldquo;Power Bank, 25,600mAh Portable Charger 87W Bundle&rdquo;"
                                                                                rel="nofollow" data-success_message="&ldquo;Power Bank, 25,600mAh Portable Charger 87W Bundle&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                            </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="tab-18-pane" role="tabpanel" aria-labelledby="tab-18" tabindex="0">
                                                <div class="row g-xl-0 justify-content-center">
                                                    <div class="col-c-20">
                                                        <div class="single-product-telemobile-item">
                                                            <div class="product-img position-relative">
                                                                <a href="https://themes.envytheme.com/liva/product/apple-macbook-pro-16-2-with-liquid-retina-xdr-display/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-9-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                    <div class="border-0 wish-btn">
                                                                        <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="448">
                                                                            <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="448" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                data-tinv-wl-producttype="variable" data-tinv-wl-action="add"></a>
                                                                            <div class="tinvwl-tooltip"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-content">
                                                                <a href="https://themes.envytheme.com/liva/product/apple-macbook-pro-16-2-with-liquid-retina-xdr-display/" class="title">Apple MacBook Pro 16.2&#8243; with Liquid Retina XDR Display</a>
                                                                <div class="d-flex gap-1 review">
                                                                    <div class="product-rating">
                                                                        <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span style="width:100%">Rated <strong class="rating">5.00</strong> out of 5</span></div>
                                                                        <div class="prt">(1 review)</div>
                                                                    </div>
                                                                </div>
                                                                <h3><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>1,500</span> &ndash; <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>2,400</span>
                                                                </h3>
                                                                <div class="d-flex sold-stock gap-4 align-items-center">
                                                                    <span class="sold">6 Sold</span>
                                                                    <span class="stock"><i class="ri-check-line"></i> 494 in stock</span>
                                                                </div>
                                                                <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                    <div class="flex-shrink-0">
                                                                        <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                    </div>
                                                                    <div class="flex-grow-1">
                                                                        <div class="d-flex gap-1 justify-content-end">
                                                                            <a href="https://themes.envytheme.com/liva/product/apple-macbook-pro-16-2-with-liquid-retina-xdr-display/" data-quantity="1" class="button product_type_variable add_to_cart_button add-to-cart-btn" data-product_id="448" data-product_sku="SMTGS6T45" aria-label="Select options for &ldquo;Apple MacBook Pro 16.2&quot; with Liquid Retina XDR Display&rdquo;"
                                                                                rel="nofollow"><i class="ri-shopping-cart-line"></i>Select options</a> </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-c-20">
                                                        <div class="single-product-telemobile-item">
                                                            <div class="product-img position-relative">
                                                                <a href="https://themes.envytheme.com/liva/product/32-inch-d-series-hd-720p-smart-tv-with-apple-airplay/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-8-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                    <span class="minus-count">-19%</span>
                                                                    <div class="border-0 wish-btn">
                                                                        <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="444">
                                                                            <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="444" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                            <div class="tinvwl-tooltip"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-content">
                                                                <a href="https://themes.envytheme.com/liva/product/32-inch-d-series-hd-720p-smart-tv-with-apple-airplay/" class="title">32 inch D-Series HD 720p Smart TV with Apple AirPlay</a>
                                                                <div class="d-flex gap-1 review review-blank">
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <div class="prt">0 reviews</div>
                                                                </div>
                                                                <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>159</span></del> <span class="screen-reader-text">Original price was: &#036;159.</span>
                                                                    <span
                                                                        class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>128</span><span class="screen-reader-text">Current price is: &#036;128.</span></h3>
                                                                <div class="d-flex sold-stock gap-4 align-items-center">
                                                                    <span class="sold">7 Sold</span>
                                                                    <span class="stock"><i class="ri-check-line"></i> 893 in stock</span>
                                                                </div>
                                                                <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                    <div class="flex-shrink-0">
                                                                        <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                    </div>
                                                                    <div class="flex-grow-1">
                                                                        <div class="d-flex gap-1 justify-content-end">
                                                                            <a href="?add-to-cart=444" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="444" data-product_sku="" aria-label="Add to cart: &ldquo;32 inch D-Series HD 720p Smart TV with Apple AirPlay&rdquo;"
                                                                                rel="nofollow" data-success_message="&ldquo;32 inch D-Series HD 720p Smart TV with Apple AirPlay&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                            </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-c-20">
                                                        <div class="single-product-telemobile-item">
                                                            <div class="product-img position-relative">
                                                                <a href="https://themes.envytheme.com/liva/product/apple-2023-imac-all-in-one-desktop-computer-with-m3-chip/" class="d-block">
                <img loading="lazy" decoding="async" width="442" height="284" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/discover-img.png" class="attachment-470x323 size-470x323" alt="discover-img" />            </a>
                                                                <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                    <span class="minus-count">-11%</span>
                                                                    <div class="border-0 wish-btn">
                                                                        <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="493">
                                                                            <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="493" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                            <div class="tinvwl-tooltip"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-content">
                                                                <a href="https://themes.envytheme.com/liva/product/apple-2023-imac-all-in-one-desktop-computer-with-m3-chip/" class="title">Apple 2023 iMac All-in-One Desktop Computer with M3 chip</a>
                                                                <div class="d-flex gap-1 review review-blank">
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <div class="prt">0 reviews</div>
                                                                </div>
                                                                <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>1,899</span></del> <span class="screen-reader-text">Original price was: &#036;1,899.</span>
                                                                    <span
                                                                        class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>1,699</span><span class="screen-reader-text">Current price is: &#036;1,699.</span></h3>
                                                                <div class="d-flex sold-stock gap-4 align-items-center">
                                                                    <span class="sold">10 Sold</span>
                                                                    <span class="stock"><i class="ri-check-line"></i> 40 in stock</span>
                                                                </div>
                                                                <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                    <div class="flex-shrink-0">
                                                                        <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                    </div>
                                                                    <div class="flex-grow-1">
                                                                        <div class="d-flex gap-1 justify-content-end">
                                                                            <a href="?add-to-cart=493" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="493" data-product_sku="" aria-label="Add to cart: &ldquo;Apple 2023 iMac All-in-One Desktop Computer with M3 chip&rdquo;"
                                                                                rel="nofollow" data-success_message="&ldquo;Apple 2023 iMac All-in-One Desktop Computer with M3 chip&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                            </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-c-20">
                                                        <div class="single-product-telemobile-item">
                                                            <div class="product-img position-relative">
                                                                <a href="https://themes.envytheme.com/liva/product/samsung-32-inch-class-qled-4k-q60c-series-quantum-hdr/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/monitor-2-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                    <span class="minus-count">-20%</span>
                                                                    <div class="border-0 wish-btn">
                                                                        <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="449">
                                                                            <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="449" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                            <div class="tinvwl-tooltip"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-content">
                                                                <a href="https://themes.envytheme.com/liva/product/samsung-32-inch-class-qled-4k-q60c-series-quantum-hdr/" class="title">SAMSUNG 32-Inch Class QLED 4K Q60C Series Quantum HDR</a>
                                                                <div class="d-flex gap-1 review review-blank">
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <div class="prt">0 reviews</div>
                                                                </div>
                                                                <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>499</span></del> <span class="screen-reader-text">Original price was: &#036;499.</span>
                                                                    <span
                                                                        class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>399</span><span class="screen-reader-text">Current price is: &#036;399.</span></h3>
                                                                <div class="d-flex sold-stock gap-4 align-items-center">
                                                                    <span class="sold">10 Sold</span>
                                                                    <span class="stock"><i class="ri-check-line"></i> 278 in stock</span>
                                                                </div>
                                                                <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                    <div class="flex-shrink-0">
                                                                        <span class="delivery"><i class="ri-truck-line"></i> Free Delivery</span>
                                                                    </div>
                                                                    <div class="flex-grow-1">
                                                                        <div class="d-flex gap-1 justify-content-end">
                                                                            <a href="?add-to-cart=449" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="449" data-product_sku="" aria-label="Add to cart: &ldquo;SAMSUNG 32-Inch Class QLED 4K Q60C Series Quantum HDR&rdquo;"
                                                                                rel="nofollow" data-success_message="&ldquo;SAMSUNG 32-Inch Class QLED 4K Q60C Series Quantum HDR&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                            </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-c-20">
                                                        <div class="single-product-telemobile-item">
                                                            <div class="product-img position-relative">
                                                                <a href="https://themes.envytheme.com/liva/product/macbook-air-13-inch-and-macbook-air-15-inch-apple/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/03/mac-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                    <span class="minus-count">-8%</span>
                                                                    <div class="border-0 wish-btn">
                                                                        <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="586">
                                                                            <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="586" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                            <div class="tinvwl-tooltip"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-content">
                                                                <a href="https://themes.envytheme.com/liva/product/macbook-air-13-inch-and-macbook-air-15-inch-apple/" class="title">MacBook Air 13-inch and MacBook Air 15-inch &#8211; Apple</a>
                                                                <div class="d-flex gap-1 review review-blank">
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <div class="prt">0 reviews</div>
                                                                </div>
                                                                <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>3,799</span></del> <span class="screen-reader-text">Original price was: &#036;3,799.</span>
                                                                    <span
                                                                        class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>3,499</span><span class="screen-reader-text">Current price is: &#036;3,499.</span></h3>
                                                                <div class="d-flex sold-stock gap-4 align-items-center">
                                                                    <span class="stock"><i class="ri-check-line"></i> 495 in stock</span>
                                                                </div>
                                                                <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                    <div class="flex-shrink-0">
                                                                        <span class="delivery"><i class="ri-truck-line"></i> Free Delivery</span>
                                                                    </div>
                                                                    <div class="flex-grow-1">
                                                                        <div class="d-flex gap-1 justify-content-end">
                                                                            <a href="?add-to-cart=586" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="586" data-product_sku="SMTGS6T45-1" aria-label="Add to cart: &ldquo;MacBook Air 13-inch and MacBook Air 15-inch - Apple&rdquo;"
                                                                                rel="nofollow" data-success_message="&ldquo;MacBook Air 13-inch and MacBook Air 15-inch - Apple&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                            </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="tab-17-pane" role="tabpanel" aria-labelledby="tab-17" tabindex="0">
                                                <div class="row g-xl-0 justify-content-center">
                                                    <div class="col-c-20">
                                                        <div class="single-product-telemobile-item">
                                                            <div class="product-img position-relative">
                                                                <a href="https://themes.envytheme.com/liva/product/15-pro-max-5g-unlocked-smartphone6gb256gb/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-20-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                    <div class="border-0 wish-btn">
                                                                        <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="447">
                                                                            <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="447" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                            <div class="tinvwl-tooltip"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-content">
                                                                <a href="https://themes.envytheme.com/liva/product/15-pro-max-5g-unlocked-smartphone6gb256gb/" class="title">15 Pro Max 5G Unlocked Smartphone,6GB+256GB</a>
                                                                <div class="d-flex gap-1 review review-blank">
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <div class="prt">0 reviews</div>
                                                                </div>
                                                                <h3><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>999</span>
                                                                </h3>
                                                                <div class="d-flex sold-stock gap-4 align-items-center">
                                                                    <span class="sold">16 Sold</span>
                                                                    <span class="stock"><i class="ri-check-line"></i> 184 in stock</span>
                                                                </div>
                                                                <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                    <div class="flex-shrink-0">
                                                                        <span class="delivery"><i class="ri-truck-line"></i> Free Delivery</span>
                                                                    </div>
                                                                    <div class="flex-grow-1">
                                                                        <div class="d-flex gap-1 justify-content-end">
                                                                            <a href="?add-to-cart=447" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="447" data-product_sku="" aria-label="Add to cart: &ldquo;15 Pro Max 5G Unlocked Smartphone,6GB+256GB&rdquo;"
                                                                                rel="nofollow" data-success_message="&ldquo;15 Pro Max 5G Unlocked Smartphone,6GB+256GB&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                            </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-c-20">
                                                        <div class="single-product-telemobile-item">
                                                            <div class="product-img position-relative">
                                                                <a href="https://themes.envytheme.com/liva/product/14-pro-max-5g-unlocked-smartphone-6gb256gb/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-24-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                    <span class="minus-count">-6%</span>
                                                                    <div class="border-0 wish-btn">
                                                                        <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="405">
                                                                            <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="405" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                            <div class="tinvwl-tooltip"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-content">
                                                                <a href="https://themes.envytheme.com/liva/product/14-pro-max-5g-unlocked-smartphone-6gb256gb/" class="title">14 Pro Max 5G Unlocked Smartphone &#8211; 6GB+256GB</a>
                                                                <div class="d-flex gap-1 review review-blank">
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <div class="prt">0 reviews</div>
                                                                </div>
                                                                <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>849</span></del> <span class="screen-reader-text">Original price was: &#036;849.</span>
                                                                    <span
                                                                        class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>799</span><span class="screen-reader-text">Current price is: &#036;799.</span></h3>
                                                                <div class="d-flex sold-stock gap-4 align-items-center">
                                                                    <span class="sold">9 Sold</span>
                                                                    <span class="stock"><i class="ri-check-line"></i> 441 in stock</span>
                                                                </div>
                                                                <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                    <div class="flex-shrink-0">
                                                                        <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                    </div>
                                                                    <div class="flex-grow-1">
                                                                        <div class="d-flex gap-1 justify-content-end">
                                                                            <a href="?add-to-cart=405" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="405" data-product_sku="" aria-label="Add to cart: &ldquo;14 Pro Max 5G Unlocked Smartphone - 6GB+256GB&rdquo;"
                                                                                rel="nofollow" data-success_message="&ldquo;14 Pro Max 5G Unlocked Smartphone - 6GB+256GB&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                            </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-2b06563 e-con-full e-flex e-con e-parent" data-id="2b06563" data-element_type="container">
                        <div class="elementor-element elementor-element-4c207cc elementor-widget elementor-widget-OfferArea" data-id="4c207cc" data-element_type="widget" data-widget_type="OfferArea.default">
                            <div class="elementor-widget-container">
                                <div class="offer-area pb-35">
                                    <div class="container">
                                        <div class="row justify-content-center">
                                            <div class="col-xl-4 col-md-6">
                                                <div class="single-offer-item position-relative z-1 elementor-repeater-item-3f93110">
                                                    <span class="top-title">Black Friday Sale</span>
                                                    <h3>Computer &amp; Gaming</h3>
                                                    <p>Up to 70% off!</p>

                                                    <a href="https://themes.envytheme.com/liva/shop/" class="read-more">
                                        <span>Shop Now</span>
                                        <i class="ri-arrow-right-up-line  ms-1"></i> 
                                    </a>

                                                    <img decoding="async" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/offer-1.png" class="position-absolute bottom-0 end-0 z-n1" alt="offer-1">
                                                </div>
                                            </div>
                                            <div class="col-xl-4 col-md-6">
                                                <div class="single-offer-item position-relative z-1 elementor-repeater-item-246b344">
                                                    <span class="top-title">Home Electronics</span>
                                                    <h3>Computer &amp; Gaming</h3>
                                                    <p>Up to 70% off!</p>

                                                    <a href="https://themes.envytheme.com/liva/shop/" class="read-more">
                                        <span>Shop Now</span>
                                        <i class="ri-arrow-right-up-line  ms-1"></i> 
                                    </a>

                                                    <img decoding="async" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/offer-2.png" class="position-absolute bottom-0 end-0 z-n1" alt="offer-2">
                                                </div>
                                            </div>
                                            <div class="col-xl-4 col-md-6">
                                                <div class="single-offer-item position-relative z-1 elementor-repeater-item-89f90bb">
                                                    <span class="top-title">Black Friday Sale</span>
                                                    <h3>Mobile Accessories</h3>
                                                    <p>Up to 70% off!</p>

                                                    <a href="https://themes.envytheme.com/liva/shop/" class="read-more">
                                        <span>Shop Now</span>
                                        <i class="ri-arrow-right-up-line  ms-1"></i> 
                                    </a>

                                                    <img decoding="async" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/offer-3.png" class="position-absolute bottom-0 end-0 z-n1" alt="offer-3">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-9083137 e-con-full e-flex e-con e-parent" data-id="9083137" data-element_type="container">
                        <div class="elementor-element elementor-element-00c6ea2 elementor-widget elementor-widget-liva-product-tab-filter" data-id="00c6ea2" data-element_type="widget" data-widget_type="liva-product-tab-filter.default">
                            <div class="elementor-widget-container">
                                <div class="discover-new-deals-area pb-60">
                                    <div class="container liva-module">
                                        <div class="d-lg-flex align-items-center justify-content-between text-center mb-38 mt-minus-6">
                                            <ul class="nav nav-tabs border-0 discover-month-tabs justify-content-center justify-content-lg-start mb-2 mb-lg-0">
                                                <li class="nav-item mt-3 mt-lg-0" role="presentation">
                                                    <button class="nav-link active" id="new-in-tab" data-bs-toggle="tab" data-bs-target="#new-in-tab-pane" type="button" role="tab" aria-controls="new-in-tab-pane" aria-selected="true">New In</button>
                                                </li>

                                                <li class="nav-item mt-3 mt-lg-0">
                                                    <button class="nav-link" id="best-selling-tab" data-bs-toggle="tab" data-bs-target="#best-selling-tab-pane" type="button" role="tab" aria-controls="best-selling-tab-pane" aria-selected="false">
                                    Best Selling                                </button>
                                                </li>

                                                <li class="nav-item mt-3 mt-lg-0" role="presentation">
                                                    <button class="nav-link" id="featured-tab" data-bs-toggle="tab" data-bs-target="#featured-tab-pane" type="button" role="tab" aria-controls="featured-tab-pane" aria-selected="false">
                                    Featured                                </button>
                                                </li>

                                                <li class="nav-item mt-3 mt-lg-0" role="presentation">
                                                    <button class="nav-link" id="discounted-tab" data-bs-toggle="tab" data-bs-target="#discounted-tab-pane" type="button" role="tab" aria-controls="discounted-tab-pane" aria-selected="false">Discounted</button>
                                                </li>
                                            </ul>
                                            <div>
                                                <a href="https://themes.envytheme.com/liva/shop/" class="read-more">
                                <span>View all Products</span>
                                <i class="ri-arrow-right-up-line  ms-1"></i> 
                            </a>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-5">
                                                <div class="discover-new-deals-content text-center">
                                                    <h3>Discover New Deals!</h3>
                                                    <span class="offer">End of the offer</span>

                                                    <div class="clockdiv" data-date="February 20, 2025">
                                                        <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center gap-1 justify-content-center">
                                                            <li class="time">
                                                                <span class="days"></span>
                                                            </li>
                                                            <li class="time">
                                                                <span class="hours"></span>
                                                            </li>
                                                            <li class="time">
                                                                <span class="minutes"></span>
                                                            </li>
                                                            <li class="time">
                                                                <span class="seconds"></span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <img decoding="async" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/discover-img.png" alt="Apple 2023 iMac All-in-One Desktop Computer with M3 chip">

                                                    <div class="mw-345 m-auto">
                                                        <a href="https://themes.envytheme.com/liva/product/apple-2023-imac-all-in-one-desktop-computer-with-m3-chip/" class="title">Apple 2023 iMac All-in-One Desktop Computer with M3 chip</a>

                                                        <div class="d-flex gap-1 review justify-content-center">
                                                            <i class="flaticon-star-1"></i>
                                                            <i class="flaticon-star-1"></i>
                                                            <i class="flaticon-star-1"></i>
                                                            <i class="flaticon-star-1"></i>
                                                            <i class="flaticon-star-1"></i>
                                                        </div>

                                                        <h3 class="price"><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>1,899</span></del> <span class="screen-reader-text">Original price was: &#036;1,899.</span>
                                                            <span
                                                                class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>1,699</span><span class="screen-reader-text">Current price is: &#036;1,699.</span></h3>

                                                        <div class="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 5px">
                                                            <div class="progress-bar" style="width: 25%"></div>
                                                        </div>
                                                        <div class="d-flex sold-stock justify-content-between align-items-center">
                                                            <span class="sold">10 Sold</span>
                                                            <span class="stock"><i class="ri-check-line"></i> 40 in stock</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-7">
                                                <div class="tab-content" id="myTabContent2">
                                                    <div class="tab-pane fade show active" id="new-in-tab-pane" role="tabpanel" aria-labelledby="new-in-tab" tabindex="0">
                                                        <div class="discover-new-deals-wrap">
                                                            <div class="row g-lg-0">
                                                                <div class="col-xl-4 col-sm-6">
                                                                    <div class="single-product-telemobile-item">
                                                                        <div class="product-img position-relative">
                                                                            <a href="https://themes.envytheme.com/liva/product/microwave-oven-with-led-lighting-700-watts-0-7-cu-ft/" class="d-block">
                <img decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-1-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                                <span class="minus-count">-11%</span>
                                                                                <div class="border-0 wish-btn">
                                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="451">
                                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="451" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                                        <div class="tinvwl-tooltip"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-content">
                                                                            <a href="https://themes.envytheme.com/liva/product/microwave-oven-with-led-lighting-700-watts-0-7-cu-ft/" class="title">Microwave Oven With LED Lighting &#8211;  700 Watts, 0.7 cu ft</a>
                                                                            <div class="d-flex gap-1 review">
                                                                                <div class="product-rating">
                                                                                    <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span style="width:100%">Rated <strong class="rating">5.00</strong> out of 5</span></div>
                                                                                    <div class="prt">(1 review)</div>
                                                                                </div>
                                                                            </div>
                                                                            <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>450</span></del> <span class="screen-reader-text">Original price was: &#036;450.</span>
                                                                                <span
                                                                                    class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>399</span><span class="screen-reader-text">Current price is: &#036;399.</span></h3>
                                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                                <span class="sold">21 Sold</span>
                                                                                <span class="stock"><i class="ri-check-line"></i> 214 in stock</span>
                                                                            </div>
                                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                                <div class="flex-shrink-0">
                                                                                    <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                                        <a href="?add-to-cart=451" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="451" data-product_sku="" aria-label="Add to cart: &ldquo;Microwave Oven With LED Lighting -  700 Watts, 0.7 cu ft&rdquo;"
                                                                                            rel="nofollow" data-success_message="&ldquo;Microwave Oven With LED Lighting -  700 Watts, 0.7 cu ft&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 col-sm-6">
                                                                    <div class="single-product-telemobile-item">
                                                                        <div class="product-img position-relative">
                                                                            <a href="https://themes.envytheme.com/liva/product/multiplatform-wireless-noise-cancelling-gaming-headset/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-6-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                                <span class="minus-count">-15%</span>
                                                                                <div class="border-0 wish-btn">
                                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="450">
                                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="450" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                                        <div class="tinvwl-tooltip"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-content">
                                                                            <a href="https://themes.envytheme.com/liva/product/multiplatform-wireless-noise-cancelling-gaming-headset/" class="title">Multiplatform Wireless Noise-Cancelling Gaming Headset</a>
                                                                            <div class="d-flex gap-1 review review-blank">
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <div class="prt">0 reviews</div>
                                                                            </div>
                                                                            <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>329</span></del> <span class="screen-reader-text">Original price was: &#036;329.</span>
                                                                                <span
                                                                                    class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>279</span><span class="screen-reader-text">Current price is: &#036;279.</span></h3>
                                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                                <span class="sold">7 Sold</span>
                                                                                <span class="stock"><i class="ri-check-line"></i> 115 in stock</span>
                                                                            </div>
                                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                                <div class="flex-shrink-0">
                                                                                    <span class="delivery"><i class="ri-truck-line"></i> Free Delivery</span>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                                        <a href="?add-to-cart=450" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="450" data-product_sku="" aria-label="Add to cart: &ldquo;Multiplatform Wireless Noise-Cancelling Gaming Headset&rdquo;"
                                                                                            rel="nofollow" data-success_message="&ldquo;Multiplatform Wireless Noise-Cancelling Gaming Headset&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 col-sm-6">
                                                                    <div class="single-product-telemobile-item">
                                                                        <div class="product-img position-relative">
                                                                            <a href="https://themes.envytheme.com/liva/product/apple-macbook-pro-16-2-with-liquid-retina-xdr-display/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-9-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                                <div class="border-0 wish-btn">
                                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="448">
                                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="448" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                            data-tinv-wl-producttype="variable" data-tinv-wl-action="add"></a>
                                                                                        <div class="tinvwl-tooltip"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-content">
                                                                            <a href="https://themes.envytheme.com/liva/product/apple-macbook-pro-16-2-with-liquid-retina-xdr-display/" class="title">Apple MacBook Pro 16.2&#8243; with Liquid Retina XDR Display</a>
                                                                            <div class="d-flex gap-1 review">
                                                                                <div class="product-rating">
                                                                                    <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span style="width:100%">Rated <strong class="rating">5.00</strong> out of 5</span></div>
                                                                                    <div class="prt">(1 review)</div>
                                                                                </div>
                                                                            </div>
                                                                            <h3><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>1,500</span> &ndash; <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>2,400</span>
                                                                            </h3>
                                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                                <span class="sold">6 Sold</span>
                                                                                <span class="stock"><i class="ri-check-line"></i> 494 in stock</span>
                                                                            </div>
                                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                                <div class="flex-shrink-0">
                                                                                    <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                                        <a href="https://themes.envytheme.com/liva/product/apple-macbook-pro-16-2-with-liquid-retina-xdr-display/" data-quantity="1" class="button product_type_variable add_to_cart_button add-to-cart-btn" data-product_id="448" data-product_sku="SMTGS6T45" aria-label="Select options for &ldquo;Apple MacBook Pro 16.2&quot; with Liquid Retina XDR Display&rdquo;"
                                                                                            rel="nofollow"><i class="ri-shopping-cart-line"></i>Select options</a> </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 col-sm-6">
                                                                    <div class="single-product-telemobile-item">
                                                                        <div class="product-img position-relative">
                                                                            <a href="https://themes.envytheme.com/liva/product/15-pro-max-5g-unlocked-smartphone6gb256gb/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-20-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                                <div class="border-0 wish-btn">
                                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="447">
                                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="447" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                                        <div class="tinvwl-tooltip"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-content">
                                                                            <a href="https://themes.envytheme.com/liva/product/15-pro-max-5g-unlocked-smartphone6gb256gb/" class="title">15 Pro Max 5G Unlocked Smartphone,6GB+256GB</a>
                                                                            <div class="d-flex gap-1 review review-blank">
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <div class="prt">0 reviews</div>
                                                                            </div>
                                                                            <h3><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>999</span>
                                                                            </h3>
                                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                                <span class="sold">16 Sold</span>
                                                                                <span class="stock"><i class="ri-check-line"></i> 184 in stock</span>
                                                                            </div>
                                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                                <div class="flex-shrink-0">
                                                                                    <span class="delivery"><i class="ri-truck-line"></i> Free Delivery</span>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                                        <a href="?add-to-cart=447" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="447" data-product_sku="" aria-label="Add to cart: &ldquo;15 Pro Max 5G Unlocked Smartphone,6GB+256GB&rdquo;"
                                                                                            rel="nofollow" data-success_message="&ldquo;15 Pro Max 5G Unlocked Smartphone,6GB+256GB&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 col-sm-6">
                                                                    <div class="single-product-telemobile-item">
                                                                        <div class="product-img position-relative">
                                                                            <a href="https://themes.envytheme.com/liva/product/wireless-bluetooth-over-ear-headphones-noise-cancelling/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-21-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                                <span class="minus-count">-30%</span>
                                                                                <div class="border-0 wish-btn">
                                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="446">
                                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="446" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                                        <div class="tinvwl-tooltip"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-content">
                                                                            <a href="https://themes.envytheme.com/liva/product/wireless-bluetooth-over-ear-headphones-noise-cancelling/" class="title">Wireless Bluetooth Over Ear Headphones, Noise Cancelling</a>
                                                                            <div class="d-flex gap-1 review review-blank">
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <div class="prt">0 reviews</div>
                                                                            </div>
                                                                            <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>99</span></del> <span class="screen-reader-text">Original price was: &#036;99.</span>
                                                                                <span
                                                                                    class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>69</span><span class="screen-reader-text">Current price is: &#036;69.</span></h3>
                                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                                <span class="stock"><i class="ri-check-line"></i> 77 in stock</span>
                                                                            </div>
                                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                                <div class="flex-shrink-0">
                                                                                    <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                                        <a href="?add-to-cart=446" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="446" data-product_sku="" aria-label="Add to cart: &ldquo;Wireless Bluetooth Over Ear Headphones, Noise Cancelling&rdquo;"
                                                                                            rel="nofollow" data-success_message="&ldquo;Wireless Bluetooth Over Ear Headphones, Noise Cancelling&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 col-sm-6">
                                                                    <div class="single-product-telemobile-item">
                                                                        <div class="product-img position-relative">
                                                                            <a href="https://themes.envytheme.com/liva/product/smart-watch-answer-make-calls-1-85-smart-watches/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-22-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                                <span class="minus-count">-72%</span>
                                                                                <div class="border-0 wish-btn">
                                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="445">
                                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="445" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                                        <div class="tinvwl-tooltip"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-content">
                                                                            <a href="https://themes.envytheme.com/liva/product/smart-watch-answer-make-calls-1-85-smart-watches/" class="title">Smart Watch (Answer/Make Calls), 1.85&#8243; Smart Watches</a>
                                                                            <div class="d-flex gap-1 review review-blank">
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <div class="prt">0 reviews</div>
                                                                            </div>
                                                                            <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>89</span></del> <span class="screen-reader-text">Original price was: &#036;89.</span>
                                                                                <span
                                                                                    class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>25</span><span class="screen-reader-text">Current price is: &#036;25.</span></h3>
                                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                                <span class="stock"><i class="ri-check-line"></i> 28 in stock</span>
                                                                            </div>
                                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                                <div class="flex-shrink-0">
                                                                                    <span class="delivery"><i class="ri-truck-line"></i> Free Delivery</span>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                                        <a href="?add-to-cart=445" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="445" data-product_sku="" aria-label="Add to cart: &ldquo;Smart Watch (Answer/Make Calls), 1.85&quot; Smart Watches&rdquo;"
                                                                                            rel="nofollow" data-success_message="&ldquo;Smart Watch (Answer/Make Calls), 1.85&quot; Smart Watches&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="tab-pane fade" id="best-selling-tab-pane" role="tabpanel" aria-labelledby="best-selling-tab" tabindex="0">
                                                        <div class="discover-new-deals-wrap">
                                                            <div class="row g-lg-0">
                                                                <div class="col-xl-4 col-sm-6">
                                                                    <div class="single-product-telemobile-item">
                                                                        <div class="product-img position-relative">
                                                                            <a href="https://themes.envytheme.com/liva/product/microwave-oven-with-led-lighting-700-watts-0-7-cu-ft/" class="d-block">
                <img decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-1-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                                <span class="minus-count">-11%</span>
                                                                                <div class="border-0 wish-btn">
                                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="451">
                                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="451" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                                        <div class="tinvwl-tooltip"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-content">
                                                                            <a href="https://themes.envytheme.com/liva/product/microwave-oven-with-led-lighting-700-watts-0-7-cu-ft/" class="title">Microwave Oven With LED Lighting &#8211;  700 Watts, 0.7 cu ft</a>
                                                                            <div class="d-flex gap-1 review">
                                                                                <div class="product-rating">
                                                                                    <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span style="width:100%">Rated <strong class="rating">5.00</strong> out of 5</span></div>
                                                                                    <div class="prt">(1 review)</div>
                                                                                </div>
                                                                            </div>
                                                                            <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>450</span></del> <span class="screen-reader-text">Original price was: &#036;450.</span>
                                                                                <span
                                                                                    class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>399</span><span class="screen-reader-text">Current price is: &#036;399.</span></h3>
                                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                                <span class="sold">21 Sold</span>
                                                                                <span class="stock"><i class="ri-check-line"></i> 214 in stock</span>
                                                                            </div>
                                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                                <div class="flex-shrink-0">
                                                                                    <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                                        <a href="?add-to-cart=451" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="451" data-product_sku="" aria-label="Add to cart: &ldquo;Microwave Oven With LED Lighting -  700 Watts, 0.7 cu ft&rdquo;"
                                                                                            rel="nofollow" data-success_message="&ldquo;Microwave Oven With LED Lighting -  700 Watts, 0.7 cu ft&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 col-sm-6">
                                                                    <div class="single-product-telemobile-item">
                                                                        <div class="product-img position-relative">
                                                                            <a href="https://themes.envytheme.com/liva/product/15-pro-max-5g-unlocked-smartphone6gb256gb/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-20-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                                <div class="border-0 wish-btn">
                                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="447">
                                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="447" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                                        <div class="tinvwl-tooltip"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-content">
                                                                            <a href="https://themes.envytheme.com/liva/product/15-pro-max-5g-unlocked-smartphone6gb256gb/" class="title">15 Pro Max 5G Unlocked Smartphone,6GB+256GB</a>
                                                                            <div class="d-flex gap-1 review review-blank">
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <div class="prt">0 reviews</div>
                                                                            </div>
                                                                            <h3><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>999</span>
                                                                            </h3>
                                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                                <span class="sold">16 Sold</span>
                                                                                <span class="stock"><i class="ri-check-line"></i> 184 in stock</span>
                                                                            </div>
                                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                                <div class="flex-shrink-0">
                                                                                    <span class="delivery"><i class="ri-truck-line"></i> Free Delivery</span>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                                        <a href="?add-to-cart=447" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="447" data-product_sku="" aria-label="Add to cart: &ldquo;15 Pro Max 5G Unlocked Smartphone,6GB+256GB&rdquo;"
                                                                                            rel="nofollow" data-success_message="&ldquo;15 Pro Max 5G Unlocked Smartphone,6GB+256GB&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 col-sm-6">
                                                                    <div class="single-product-telemobile-item">
                                                                        <div class="product-img position-relative">
                                                                            <a href="https://themes.envytheme.com/liva/product/samsung-32-inch-class-qled-4k-q60c-series-quantum-hdr/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/monitor-2-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                                <span class="minus-count">-20%</span>
                                                                                <div class="border-0 wish-btn">
                                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="449">
                                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="449" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                                        <div class="tinvwl-tooltip"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-content">
                                                                            <a href="https://themes.envytheme.com/liva/product/samsung-32-inch-class-qled-4k-q60c-series-quantum-hdr/" class="title">SAMSUNG 32-Inch Class QLED 4K Q60C Series Quantum HDR</a>
                                                                            <div class="d-flex gap-1 review review-blank">
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <div class="prt">0 reviews</div>
                                                                            </div>
                                                                            <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>499</span></del> <span class="screen-reader-text">Original price was: &#036;499.</span>
                                                                                <span
                                                                                    class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>399</span><span class="screen-reader-text">Current price is: &#036;399.</span></h3>
                                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                                <span class="sold">10 Sold</span>
                                                                                <span class="stock"><i class="ri-check-line"></i> 278 in stock</span>
                                                                            </div>
                                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                                <div class="flex-shrink-0">
                                                                                    <span class="delivery"><i class="ri-truck-line"></i> Free Delivery</span>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                                        <a href="?add-to-cart=449" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="449" data-product_sku="" aria-label="Add to cart: &ldquo;SAMSUNG 32-Inch Class QLED 4K Q60C Series Quantum HDR&rdquo;"
                                                                                            rel="nofollow" data-success_message="&ldquo;SAMSUNG 32-Inch Class QLED 4K Q60C Series Quantum HDR&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 col-sm-6">
                                                                    <div class="single-product-telemobile-item">
                                                                        <div class="product-img position-relative">
                                                                            <a href="https://themes.envytheme.com/liva/product/apple-2023-imac-all-in-one-desktop-computer-with-m3-chip/" class="d-block">
                <img loading="lazy" decoding="async" width="442" height="284" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/discover-img.png" class="attachment-470x323 size-470x323" alt="discover-img" />            </a>
                                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                                <span class="minus-count">-11%</span>
                                                                                <div class="border-0 wish-btn">
                                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="493">
                                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="493" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                                        <div class="tinvwl-tooltip"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-content">
                                                                            <a href="https://themes.envytheme.com/liva/product/apple-2023-imac-all-in-one-desktop-computer-with-m3-chip/" class="title">Apple 2023 iMac All-in-One Desktop Computer with M3 chip</a>
                                                                            <div class="d-flex gap-1 review review-blank">
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <div class="prt">0 reviews</div>
                                                                            </div>
                                                                            <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>1,899</span></del> <span class="screen-reader-text">Original price was: &#036;1,899.</span>
                                                                                <span
                                                                                    class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>1,699</span><span class="screen-reader-text">Current price is: &#036;1,699.</span></h3>
                                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                                <span class="sold">10 Sold</span>
                                                                                <span class="stock"><i class="ri-check-line"></i> 40 in stock</span>
                                                                            </div>
                                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                                <div class="flex-shrink-0">
                                                                                    <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                                        <a href="?add-to-cart=493" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="493" data-product_sku="" aria-label="Add to cart: &ldquo;Apple 2023 iMac All-in-One Desktop Computer with M3 chip&rdquo;"
                                                                                            rel="nofollow" data-success_message="&ldquo;Apple 2023 iMac All-in-One Desktop Computer with M3 chip&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 col-sm-6">
                                                                    <div class="single-product-telemobile-item">
                                                                        <div class="product-img position-relative">
                                                                            <a href="https://themes.envytheme.com/liva/product/14-pro-max-5g-unlocked-smartphone-6gb256gb/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-24-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                                <span class="minus-count">-6%</span>
                                                                                <div class="border-0 wish-btn">
                                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="405">
                                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="405" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                                        <div class="tinvwl-tooltip"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-content">
                                                                            <a href="https://themes.envytheme.com/liva/product/14-pro-max-5g-unlocked-smartphone-6gb256gb/" class="title">14 Pro Max 5G Unlocked Smartphone &#8211; 6GB+256GB</a>
                                                                            <div class="d-flex gap-1 review review-blank">
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <div class="prt">0 reviews</div>
                                                                            </div>
                                                                            <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>849</span></del> <span class="screen-reader-text">Original price was: &#036;849.</span>
                                                                                <span
                                                                                    class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>799</span><span class="screen-reader-text">Current price is: &#036;799.</span></h3>
                                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                                <span class="sold">9 Sold</span>
                                                                                <span class="stock"><i class="ri-check-line"></i> 441 in stock</span>
                                                                            </div>
                                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                                <div class="flex-shrink-0">
                                                                                    <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                                        <a href="?add-to-cart=405" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="405" data-product_sku="" aria-label="Add to cart: &ldquo;14 Pro Max 5G Unlocked Smartphone - 6GB+256GB&rdquo;"
                                                                                            rel="nofollow" data-success_message="&ldquo;14 Pro Max 5G Unlocked Smartphone - 6GB+256GB&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 col-sm-6">
                                                                    <div class="single-product-telemobile-item">
                                                                        <div class="product-img position-relative">
                                                                            <a href="https://themes.envytheme.com/liva/product/32-inch-d-series-hd-720p-smart-tv-with-apple-airplay/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-8-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                                <span class="minus-count">-19%</span>
                                                                                <div class="border-0 wish-btn">
                                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="444">
                                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="444" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                                        <div class="tinvwl-tooltip"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-content">
                                                                            <a href="https://themes.envytheme.com/liva/product/32-inch-d-series-hd-720p-smart-tv-with-apple-airplay/" class="title">32 inch D-Series HD 720p Smart TV with Apple AirPlay</a>
                                                                            <div class="d-flex gap-1 review review-blank">
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <div class="prt">0 reviews</div>
                                                                            </div>
                                                                            <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>159</span></del> <span class="screen-reader-text">Original price was: &#036;159.</span>
                                                                                <span
                                                                                    class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>128</span><span class="screen-reader-text">Current price is: &#036;128.</span></h3>
                                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                                <span class="sold">7 Sold</span>
                                                                                <span class="stock"><i class="ri-check-line"></i> 893 in stock</span>
                                                                            </div>
                                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                                <div class="flex-shrink-0">
                                                                                    <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                                        <a href="?add-to-cart=444" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="444" data-product_sku="" aria-label="Add to cart: &ldquo;32 inch D-Series HD 720p Smart TV with Apple AirPlay&rdquo;"
                                                                                            rel="nofollow" data-success_message="&ldquo;32 inch D-Series HD 720p Smart TV with Apple AirPlay&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="tab-pane fade" id="featured-tab-pane" role="tabpanel" aria-labelledby="featured-tab" tabindex="0">
                                                        <div class="discover-new-deals-wrap">
                                                            <div class="row g-lg-0">
                                                                <div class="col-xl-4 col-sm-6">
                                                                    <div class="single-product-telemobile-item">
                                                                        <div class="product-img position-relative">
                                                                            <a href="https://themes.envytheme.com/liva/product/multiplatform-wireless-noise-cancelling-gaming-headset/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-6-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                                <span class="minus-count">-15%</span>
                                                                                <div class="border-0 wish-btn">
                                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="450">
                                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="450" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                                        <div class="tinvwl-tooltip"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-content">
                                                                            <a href="https://themes.envytheme.com/liva/product/multiplatform-wireless-noise-cancelling-gaming-headset/" class="title">Multiplatform Wireless Noise-Cancelling Gaming Headset</a>
                                                                            <div class="d-flex gap-1 review review-blank">
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <div class="prt">0 reviews</div>
                                                                            </div>
                                                                            <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>329</span></del> <span class="screen-reader-text">Original price was: &#036;329.</span>
                                                                                <span
                                                                                    class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>279</span><span class="screen-reader-text">Current price is: &#036;279.</span></h3>
                                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                                <span class="sold">7 Sold</span>
                                                                                <span class="stock"><i class="ri-check-line"></i> 115 in stock</span>
                                                                            </div>
                                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                                <div class="flex-shrink-0">
                                                                                    <span class="delivery"><i class="ri-truck-line"></i> Free Delivery</span>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                                        <a href="?add-to-cart=450" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="450" data-product_sku="" aria-label="Add to cart: &ldquo;Multiplatform Wireless Noise-Cancelling Gaming Headset&rdquo;"
                                                                                            rel="nofollow" data-success_message="&ldquo;Multiplatform Wireless Noise-Cancelling Gaming Headset&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 col-sm-6">
                                                                    <div class="single-product-telemobile-item">
                                                                        <div class="product-img position-relative">
                                                                            <a href="https://themes.envytheme.com/liva/product/apple-macbook-pro-16-2-with-liquid-retina-xdr-display/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-9-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                                <div class="border-0 wish-btn">
                                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="448">
                                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="448" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                            data-tinv-wl-producttype="variable" data-tinv-wl-action="add"></a>
                                                                                        <div class="tinvwl-tooltip"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-content">
                                                                            <a href="https://themes.envytheme.com/liva/product/apple-macbook-pro-16-2-with-liquid-retina-xdr-display/" class="title">Apple MacBook Pro 16.2&#8243; with Liquid Retina XDR Display</a>
                                                                            <div class="d-flex gap-1 review">
                                                                                <div class="product-rating">
                                                                                    <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span style="width:100%">Rated <strong class="rating">5.00</strong> out of 5</span></div>
                                                                                    <div class="prt">(1 review)</div>
                                                                                </div>
                                                                            </div>
                                                                            <h3><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>1,500</span> &ndash; <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>2,400</span>
                                                                            </h3>
                                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                                <span class="sold">6 Sold</span>
                                                                                <span class="stock"><i class="ri-check-line"></i> 494 in stock</span>
                                                                            </div>
                                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                                <div class="flex-shrink-0">
                                                                                    <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                                        <a href="https://themes.envytheme.com/liva/product/apple-macbook-pro-16-2-with-liquid-retina-xdr-display/" data-quantity="1" class="button product_type_variable add_to_cart_button add-to-cart-btn" data-product_id="448" data-product_sku="SMTGS6T45" aria-label="Select options for &ldquo;Apple MacBook Pro 16.2&quot; with Liquid Retina XDR Display&rdquo;"
                                                                                            rel="nofollow"><i class="ri-shopping-cart-line"></i>Select options</a> </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 col-sm-6">
                                                                    <div class="single-product-telemobile-item">
                                                                        <div class="product-img position-relative">
                                                                            <a href="https://themes.envytheme.com/liva/product/32-inch-d-series-hd-720p-smart-tv-with-apple-airplay/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-8-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                                <span class="minus-count">-19%</span>
                                                                                <div class="border-0 wish-btn">
                                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="444">
                                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="444" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                                        <div class="tinvwl-tooltip"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-content">
                                                                            <a href="https://themes.envytheme.com/liva/product/32-inch-d-series-hd-720p-smart-tv-with-apple-airplay/" class="title">32 inch D-Series HD 720p Smart TV with Apple AirPlay</a>
                                                                            <div class="d-flex gap-1 review review-blank">
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <div class="prt">0 reviews</div>
                                                                            </div>
                                                                            <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>159</span></del> <span class="screen-reader-text">Original price was: &#036;159.</span>
                                                                                <span
                                                                                    class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>128</span><span class="screen-reader-text">Current price is: &#036;128.</span></h3>
                                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                                <span class="sold">7 Sold</span>
                                                                                <span class="stock"><i class="ri-check-line"></i> 893 in stock</span>
                                                                            </div>
                                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                                <div class="flex-shrink-0">
                                                                                    <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                                        <a href="?add-to-cart=444" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="444" data-product_sku="" aria-label="Add to cart: &ldquo;32 inch D-Series HD 720p Smart TV with Apple AirPlay&rdquo;"
                                                                                            rel="nofollow" data-success_message="&ldquo;32 inch D-Series HD 720p Smart TV with Apple AirPlay&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 col-sm-6">
                                                                    <div class="single-product-telemobile-item">
                                                                        <div class="product-img position-relative">
                                                                            <a href="https://themes.envytheme.com/liva/product/mini-drone-for-beginners-syma-portable-indoor-quadcopter/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-14-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                                <span class="minus-count">-10%</span>
                                                                                <div class="border-0 wish-btn">
                                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="443">
                                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="443" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                                        <div class="tinvwl-tooltip"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-content">
                                                                            <a href="https://themes.envytheme.com/liva/product/mini-drone-for-beginners-syma-portable-indoor-quadcopter/" class="title">Mini Drone for Beginners, SYMA Portable Indoor Quadcopter</a>
                                                                            <div class="d-flex gap-1 review">
                                                                                <div class="product-rating">
                                                                                    <div class="star-rating" role="img" aria-label="Rated 4.00 out of 5"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div>
                                                                                    <div class="prt">(1 review)</div>
                                                                                </div>
                                                                            </div>
                                                                            <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>500</span></del> <span class="screen-reader-text">Original price was: &#036;500.</span>
                                                                                <span
                                                                                    class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>450</span><span class="screen-reader-text">Current price is: &#036;450.</span></h3>
                                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                                <span class="sold">6 Sold</span>
                                                                                <span class="stock"><i class="ri-check-line"></i> 264 in stock</span>
                                                                            </div>
                                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                                <div class="flex-shrink-0">
                                                                                    <span class="delivery"><i class="ri-truck-line"></i> Free Delivery</span>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                                        <a href="?add-to-cart=443" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="443" data-product_sku="" aria-label="Add to cart: &ldquo;Mini Drone for Beginners, SYMA Portable Indoor Quadcopter&rdquo;"
                                                                                            rel="nofollow" data-success_message="&ldquo;Mini Drone for Beginners, SYMA Portable Indoor Quadcopter&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 col-sm-6">
                                                                    <div class="single-product-telemobile-item">
                                                                        <div class="product-img position-relative">
                                                                            <a href="https://themes.envytheme.com/liva/product/14-pro-max-5g-unlocked-smartphone-6gb256gb/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-24-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                                <span class="minus-count">-6%</span>
                                                                                <div class="border-0 wish-btn">
                                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="405">
                                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="405" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                                        <div class="tinvwl-tooltip"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-content">
                                                                            <a href="https://themes.envytheme.com/liva/product/14-pro-max-5g-unlocked-smartphone-6gb256gb/" class="title">14 Pro Max 5G Unlocked Smartphone &#8211; 6GB+256GB</a>
                                                                            <div class="d-flex gap-1 review review-blank">
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <div class="prt">0 reviews</div>
                                                                            </div>
                                                                            <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>849</span></del> <span class="screen-reader-text">Original price was: &#036;849.</span>
                                                                                <span
                                                                                    class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>799</span><span class="screen-reader-text">Current price is: &#036;799.</span></h3>
                                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                                <span class="sold">9 Sold</span>
                                                                                <span class="stock"><i class="ri-check-line"></i> 441 in stock</span>
                                                                            </div>
                                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                                <div class="flex-shrink-0">
                                                                                    <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                                        <a href="?add-to-cart=405" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="405" data-product_sku="" aria-label="Add to cart: &ldquo;14 Pro Max 5G Unlocked Smartphone - 6GB+256GB&rdquo;"
                                                                                            rel="nofollow" data-success_message="&ldquo;14 Pro Max 5G Unlocked Smartphone - 6GB+256GB&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 col-sm-6">
                                                                    <div class="single-product-telemobile-item">
                                                                        <div class="product-img position-relative">
                                                                            <a href="https://themes.envytheme.com/liva/product/gps-smartwatch-with-bright-touchscreen-display/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-7-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                                <span class="minus-count">-40%</span>
                                                                                <div class="border-0 wish-btn">
                                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="24">
                                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="24" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                                        <div class="tinvwl-tooltip"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-content">
                                                                            <a href="https://themes.envytheme.com/liva/product/gps-smartwatch-with-bright-touchscreen-display/" class="title">GPS Smartwatch with Bright Touchscreen Display</a>
                                                                            <div class="d-flex gap-1 review review-blank">
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <div class="prt">0 reviews</div>
                                                                            </div>
                                                                            <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>199</span></del> <span class="screen-reader-text">Original price was: &#036;199.</span>
                                                                                <span
                                                                                    class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>119</span><span class="screen-reader-text">Current price is: &#036;119.</span></h3>
                                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                                <span class="sold">2 Sold</span>
                                                                            </div>
                                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                                <div class="flex-shrink-0">
                                                                                    <span class="delivery"><i class="ri-truck-line"></i> Free Delivery</span>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                                        <a href="?add-to-cart=24" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="24" data-product_sku="" aria-label="Add to cart: &ldquo;GPS Smartwatch with Bright Touchscreen Display&rdquo;"
                                                                                            rel="nofollow" data-success_message="&ldquo;GPS Smartwatch with Bright Touchscreen Display&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="tab-pane fade" id="discounted-tab-pane" role="tabpanel" aria-labelledby="discounted-tab" tabindex="0">
                                                        <div class="discover-new-deals-wrap">
                                                            <div class="row g-lg-0">
                                                                <div class="col-xl-4 col-sm-6">
                                                                    <div class="single-product-telemobile-item">
                                                                        <div class="product-img position-relative">
                                                                            <a href="https://themes.envytheme.com/liva/product/microwave-oven-with-led-lighting-700-watts-0-7-cu-ft/" class="d-block">
                <img decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-1-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                                <span class="minus-count">-11%</span>
                                                                                <div class="border-0 wish-btn">
                                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="451">
                                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="451" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                                        <div class="tinvwl-tooltip"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-content">
                                                                            <a href="https://themes.envytheme.com/liva/product/microwave-oven-with-led-lighting-700-watts-0-7-cu-ft/" class="title">Microwave Oven With LED Lighting &#8211;  700 Watts, 0.7 cu ft</a>
                                                                            <div class="d-flex gap-1 review">
                                                                                <div class="product-rating">
                                                                                    <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span style="width:100%">Rated <strong class="rating">5.00</strong> out of 5</span></div>
                                                                                    <div class="prt">(1 review)</div>
                                                                                </div>
                                                                            </div>
                                                                            <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>450</span></del> <span class="screen-reader-text">Original price was: &#036;450.</span>
                                                                                <span
                                                                                    class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>399</span><span class="screen-reader-text">Current price is: &#036;399.</span></h3>
                                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                                <span class="sold">21 Sold</span>
                                                                                <span class="stock"><i class="ri-check-line"></i> 214 in stock</span>
                                                                            </div>
                                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                                <div class="flex-shrink-0">
                                                                                    <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                                        <a href="?add-to-cart=451" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="451" data-product_sku="" aria-label="Add to cart: &ldquo;Microwave Oven With LED Lighting -  700 Watts, 0.7 cu ft&rdquo;"
                                                                                            rel="nofollow" data-success_message="&ldquo;Microwave Oven With LED Lighting -  700 Watts, 0.7 cu ft&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 col-sm-6">
                                                                    <div class="single-product-telemobile-item">
                                                                        <div class="product-img position-relative">
                                                                            <a href="https://themes.envytheme.com/liva/product/multiplatform-wireless-noise-cancelling-gaming-headset/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-6-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                                <span class="minus-count">-15%</span>
                                                                                <div class="border-0 wish-btn">
                                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="450">
                                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="450" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                                        <div class="tinvwl-tooltip"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-content">
                                                                            <a href="https://themes.envytheme.com/liva/product/multiplatform-wireless-noise-cancelling-gaming-headset/" class="title">Multiplatform Wireless Noise-Cancelling Gaming Headset</a>
                                                                            <div class="d-flex gap-1 review review-blank">
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <div class="prt">0 reviews</div>
                                                                            </div>
                                                                            <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>329</span></del> <span class="screen-reader-text">Original price was: &#036;329.</span>
                                                                                <span
                                                                                    class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>279</span><span class="screen-reader-text">Current price is: &#036;279.</span></h3>
                                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                                <span class="sold">7 Sold</span>
                                                                                <span class="stock"><i class="ri-check-line"></i> 115 in stock</span>
                                                                            </div>
                                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                                <div class="flex-shrink-0">
                                                                                    <span class="delivery"><i class="ri-truck-line"></i> Free Delivery</span>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                                        <a href="?add-to-cart=450" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="450" data-product_sku="" aria-label="Add to cart: &ldquo;Multiplatform Wireless Noise-Cancelling Gaming Headset&rdquo;"
                                                                                            rel="nofollow" data-success_message="&ldquo;Multiplatform Wireless Noise-Cancelling Gaming Headset&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 col-sm-6">
                                                                    <div class="single-product-telemobile-item">
                                                                        <div class="product-img position-relative">
                                                                            <a href="https://themes.envytheme.com/liva/product/wireless-bluetooth-over-ear-headphones-noise-cancelling/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-21-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                                <span class="minus-count">-30%</span>
                                                                                <div class="border-0 wish-btn">
                                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="446">
                                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="446" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                                        <div class="tinvwl-tooltip"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-content">
                                                                            <a href="https://themes.envytheme.com/liva/product/wireless-bluetooth-over-ear-headphones-noise-cancelling/" class="title">Wireless Bluetooth Over Ear Headphones, Noise Cancelling</a>
                                                                            <div class="d-flex gap-1 review review-blank">
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <div class="prt">0 reviews</div>
                                                                            </div>
                                                                            <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>99</span></del> <span class="screen-reader-text">Original price was: &#036;99.</span>
                                                                                <span
                                                                                    class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>69</span><span class="screen-reader-text">Current price is: &#036;69.</span></h3>
                                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                                <span class="stock"><i class="ri-check-line"></i> 77 in stock</span>
                                                                            </div>
                                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                                <div class="flex-shrink-0">
                                                                                    <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                                        <a href="?add-to-cart=446" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="446" data-product_sku="" aria-label="Add to cart: &ldquo;Wireless Bluetooth Over Ear Headphones, Noise Cancelling&rdquo;"
                                                                                            rel="nofollow" data-success_message="&ldquo;Wireless Bluetooth Over Ear Headphones, Noise Cancelling&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 col-sm-6">
                                                                    <div class="single-product-telemobile-item">
                                                                        <div class="product-img position-relative">
                                                                            <a href="https://themes.envytheme.com/liva/product/smart-watch-answer-make-calls-1-85-smart-watches/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-22-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                                <span class="minus-count">-72%</span>
                                                                                <div class="border-0 wish-btn">
                                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="445">
                                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="445" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                                        <div class="tinvwl-tooltip"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-content">
                                                                            <a href="https://themes.envytheme.com/liva/product/smart-watch-answer-make-calls-1-85-smart-watches/" class="title">Smart Watch (Answer/Make Calls), 1.85&#8243; Smart Watches</a>
                                                                            <div class="d-flex gap-1 review review-blank">
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <div class="prt">0 reviews</div>
                                                                            </div>
                                                                            <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>89</span></del> <span class="screen-reader-text">Original price was: &#036;89.</span>
                                                                                <span
                                                                                    class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>25</span><span class="screen-reader-text">Current price is: &#036;25.</span></h3>
                                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                                <span class="stock"><i class="ri-check-line"></i> 28 in stock</span>
                                                                            </div>
                                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                                <div class="flex-shrink-0">
                                                                                    <span class="delivery"><i class="ri-truck-line"></i> Free Delivery</span>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                                        <a href="?add-to-cart=445" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="445" data-product_sku="" aria-label="Add to cart: &ldquo;Smart Watch (Answer/Make Calls), 1.85&quot; Smart Watches&rdquo;"
                                                                                            rel="nofollow" data-success_message="&ldquo;Smart Watch (Answer/Make Calls), 1.85&quot; Smart Watches&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 col-sm-6">
                                                                    <div class="single-product-telemobile-item">
                                                                        <div class="product-img position-relative">
                                                                            <a href="https://themes.envytheme.com/liva/product/32-inch-d-series-hd-720p-smart-tv-with-apple-airplay/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-8-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                                <span class="minus-count">-19%</span>
                                                                                <div class="border-0 wish-btn">
                                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="444">
                                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="444" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                                        <div class="tinvwl-tooltip"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-content">
                                                                            <a href="https://themes.envytheme.com/liva/product/32-inch-d-series-hd-720p-smart-tv-with-apple-airplay/" class="title">32 inch D-Series HD 720p Smart TV with Apple AirPlay</a>
                                                                            <div class="d-flex gap-1 review review-blank">
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <i class="flaticon-star-1"></i>
                                                                                <div class="prt">0 reviews</div>
                                                                            </div>
                                                                            <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>159</span></del> <span class="screen-reader-text">Original price was: &#036;159.</span>
                                                                                <span
                                                                                    class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>128</span><span class="screen-reader-text">Current price is: &#036;128.</span></h3>
                                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                                <span class="sold">7 Sold</span>
                                                                                <span class="stock"><i class="ri-check-line"></i> 893 in stock</span>
                                                                            </div>
                                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                                <div class="flex-shrink-0">
                                                                                    <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                                        <a href="?add-to-cart=444" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="444" data-product_sku="" aria-label="Add to cart: &ldquo;32 inch D-Series HD 720p Smart TV with Apple AirPlay&rdquo;"
                                                                                            rel="nofollow" data-success_message="&ldquo;32 inch D-Series HD 720p Smart TV with Apple AirPlay&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-4 col-sm-6">
                                                                    <div class="single-product-telemobile-item">
                                                                        <div class="product-img position-relative">
                                                                            <a href="https://themes.envytheme.com/liva/product/mini-drone-for-beginners-syma-portable-indoor-quadcopter/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-14-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                                <span class="minus-count">-10%</span>
                                                                                <div class="border-0 wish-btn">
                                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="443">
                                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="443" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                                        <div class="tinvwl-tooltip"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-content">
                                                                            <a href="https://themes.envytheme.com/liva/product/mini-drone-for-beginners-syma-portable-indoor-quadcopter/" class="title">Mini Drone for Beginners, SYMA Portable Indoor Quadcopter</a>
                                                                            <div class="d-flex gap-1 review">
                                                                                <div class="product-rating">
                                                                                    <div class="star-rating" role="img" aria-label="Rated 4.00 out of 5"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div>
                                                                                    <div class="prt">(1 review)</div>
                                                                                </div>
                                                                            </div>
                                                                            <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>500</span></del> <span class="screen-reader-text">Original price was: &#036;500.</span>
                                                                                <span
                                                                                    class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>450</span><span class="screen-reader-text">Current price is: &#036;450.</span></h3>
                                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                                <span class="sold">6 Sold</span>
                                                                                <span class="stock"><i class="ri-check-line"></i> 264 in stock</span>
                                                                            </div>
                                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                                <div class="flex-shrink-0">
                                                                                    <span class="delivery"><i class="ri-truck-line"></i> Free Delivery</span>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                                        <a href="?add-to-cart=443" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="443" data-product_sku="" aria-label="Add to cart: &ldquo;Mini Drone for Beginners, SYMA Portable Indoor Quadcopter&rdquo;"
                                                                                            rel="nofollow" data-success_message="&ldquo;Mini Drone for Beginners, SYMA Portable Indoor Quadcopter&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-e443550 e-con-full e-flex e-con e-parent" data-id="e443550" data-element_type="container">
                        <div class="elementor-element elementor-element-8b59a87 elementor-widget elementor-widget-Liva_CTA" data-id="8b59a87" data-element_type="widget" data-widget_type="Liva_CTA.default">
                            <div class="elementor-widget-container">
                                <div class="hurry-up-area">
                                    <div class="container">
                                        <div class="bg-gray1 rounded-2 position-relative z-1 overflow-hidden">
                                            <div class="row align-items-end">
                                                <div class="col-lg-6">
                                                    <div class="hurry-content">
                                                        <span class="top-title">Hurry Up!</span>
                                                        <h2>Year Ending Sale Up To 70% Off!</h2>
                                                        <p>Explore our exclusive sale on cutting-edge electronics devices</p>

                                                        <a href="https://themes.envytheme.com/liva/shop/" class="btn btn-warning text-white rounded-pill">
                                        <span>Shop Now</span>
                                        <i class="ri-arrow-right-up-line ms-1 fs-15"></i>
                                    </a>
                                                    </div>
                                                </div>

                                                <div class="col-lg-6">
                                                    <div class="hurry-img text-center">
                                                        <img decoding="async" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/iphone.png" alt="iphone">
                                                    </div>
                                                </div>
                                            </div>

                                            <img decoding="async" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/hurry-shape.png" class="position-absolute bottom-0 end-0 z-n1 shape" alt="hurry-shape">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-c91c829 best-top-area ptb-60 e-flex e-con-boxed e-con e-parent" data-id="c91c829" data-element_type="container">
                        <div class="e-con-inner">
                            <div class="elementor-element elementor-element-f6f5718 e-con-full e-flex e-con e-child" data-id="f6f5718" data-element_type="container">
                                <div class="elementor-element elementor-element-c02b23b elementor-widget elementor-widget-liva-product-carousel" data-id="c02b23b" data-element_type="widget" data-widget_type="liva-product-carousel.default">
                                    <div class="elementor-widget-container">
                                        <div class="liva-slider-area">
                                            <div class="d-sm-flex align-items-center justify-content-between text-center mb-38 mt-minus-6">
                                                <h3 class="fs-3 mb-0 mb-1 mb-sm-0 liva-el-title">Best Seller</h3>

                                                <div>
                                                    <a href="https://themes.envytheme.com/liva/shop/" class="read-more">
                            <span>See All Products </span>
                            <i class="ri-arrow-right-up-line  ms-1"></i> 
                        </a>
                                                </div>
                                            </div>

                                            <div class="swiper best-product-slide">
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide">
                                                        <div class="single-product-telemobile-item">
                                                            <div class="product-img position-relative">
                                                                <a href="https://themes.envytheme.com/liva/product/mini-drone-for-beginners-syma-portable-indoor-quadcopter/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-14-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                    <span class="minus-count">-10%</span>
                                                                    <div class="border-0 wish-btn">
                                                                        <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="443">
                                                                            <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="443" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                            <div class="tinvwl-tooltip"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-content">
                                                                <a href="https://themes.envytheme.com/liva/product/mini-drone-for-beginners-syma-portable-indoor-quadcopter/" class="title">Mini Drone for Beginners, SYMA Portable Indoor Quadcopter</a>
                                                                <div class="d-flex gap-1 review">
                                                                    <div class="product-rating">
                                                                        <div class="star-rating" role="img" aria-label="Rated 4.00 out of 5"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div>
                                                                        <div class="prt">(1 review)</div>
                                                                    </div>
                                                                </div>
                                                                <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>500</span></del> <span class="screen-reader-text">Original price was: &#036;500.</span>
                                                                    <span
                                                                        class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>450</span><span class="screen-reader-text">Current price is: &#036;450.</span></h3>
                                                                <div class="d-flex sold-stock gap-4 align-items-center">
                                                                    <span class="sold">6 Sold</span>
                                                                    <span class="stock"><i class="ri-check-line"></i> 264 in stock</span>
                                                                </div>
                                                                <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                    <div class="flex-shrink-0">
                                                                        <span class="delivery"><i class="ri-truck-line"></i> Free Delivery</span>
                                                                    </div>
                                                                    <div class="flex-grow-1">
                                                                        <div class="d-flex gap-1 justify-content-end">
                                                                            <a href="?add-to-cart=443" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="443" data-product_sku="" aria-label="Add to cart: &ldquo;Mini Drone for Beginners, SYMA Portable Indoor Quadcopter&rdquo;"
                                                                                rel="nofollow" data-success_message="&ldquo;Mini Drone for Beginners, SYMA Portable Indoor Quadcopter&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                            </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="single-product-telemobile-item">
                                                            <div class="product-img position-relative">
                                                                <a href="https://themes.envytheme.com/liva/product/5k-digital-camera-wifi-vlogging-with-32g-sd-card/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-15-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                    <div class="border-0 wish-btn">
                                                                        <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="442">
                                                                            <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="442" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                            <div class="tinvwl-tooltip"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-content">
                                                                <a href="https://themes.envytheme.com/liva/product/5k-digital-camera-wifi-vlogging-with-32g-sd-card/" class="title">5K Digital Camera, WiFi Vlogging with 32G SD Card</a>
                                                                <div class="d-flex gap-1 review review-blank">
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <div class="prt">0 reviews</div>
                                                                </div>
                                                                <h3><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>129</span>
                                                                </h3>
                                                                <div class="d-flex sold-stock gap-4 align-items-center">
                                                                    <span class="sold">4 Sold</span>
                                                                    <span class="stock"><i class="ri-check-line"></i> 146 in stock</span>
                                                                </div>
                                                                <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                    <div class="flex-shrink-0">
                                                                        <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                    </div>
                                                                    <div class="flex-grow-1">
                                                                        <div class="d-flex gap-1 justify-content-end">
                                                                            <a href="?add-to-cart=442" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="442" data-product_sku="" aria-label="Add to cart: &ldquo;5K Digital Camera, WiFi Vlogging with 32G SD Card&rdquo;"
                                                                                rel="nofollow" data-success_message="&ldquo;5K Digital Camera, WiFi Vlogging with 32G SD Card&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                            </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="single-product-telemobile-item">
                                                            <div class="product-img position-relative">
                                                                <a href="https://themes.envytheme.com/liva/product/wireless-bluetooth-over-ear-headphones-with-active/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-10-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                    <span class="minus-count">-30%</span>
                                                                    <div class="border-0 wish-btn">
                                                                        <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="441">
                                                                            <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="441" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                            <div class="tinvwl-tooltip"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-content">
                                                                <a href="https://themes.envytheme.com/liva/product/wireless-bluetooth-over-ear-headphones-with-active/" class="title">Wireless Bluetooth Over Ear Headphones, with Active</a>
                                                                <div class="d-flex gap-1 review review-blank">
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <i class="flaticon-star-1"></i>
                                                                    <div class="prt">0 reviews</div>
                                                                </div>
                                                                <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>99</span></del> <span class="screen-reader-text">Original price was: &#036;99.</span>
                                                                    <span
                                                                        class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>69</span><span class="screen-reader-text">Current price is: &#036;69.</span></h3>
                                                                <div class="d-flex sold-stock gap-4 align-items-center">
                                                                    <span class="sold">1 Sold</span>
                                                                    <span class="stock"><i class="ri-check-line"></i> 29 in stock</span>
                                                                </div>
                                                                <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                    <div class="flex-shrink-0">
                                                                        <span class="delivery"><i class="ri-truck-line"></i> Free Delivery</span>
                                                                    </div>
                                                                    <div class="flex-grow-1">
                                                                        <div class="d-flex gap-1 justify-content-end">
                                                                            <a href="?add-to-cart=441" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="441" data-product_sku="" aria-label="Add to cart: &ldquo;Wireless Bluetooth Over Ear Headphones, with Active&rdquo;"
                                                                                rel="nofollow" data-success_message="&ldquo;Wireless Bluetooth Over Ear Headphones, with Active&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                            </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="product-controller best">
                                                    <div class="controller-icon prev">
                                                        <i class="flaticon-chevron"></i>
                                                    </div>
                                                    <div class="controller-icon next">
                                                        <i class="flaticon-chevron"></i>
                                                    </div>
                                                </div>
                                                <div class="swiper-pagination-best-product text-center mt-4 lh-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="elementor-element elementor-element-7e7b5e8 e-con-full e-flex e-con e-child" data-id="7e7b5e8" data-element_type="container">
                                <div class="elementor-element elementor-element-621c794 elementor-widget elementor-widget-liva-product-carousel" data-id="621c794" data-element_type="widget" data-widget_type="liva-product-carousel.default">
                                    <div class="elementor-widget-container">
                                        <div class="liva-slider-area">
                                            <div class="d-sm-flex align-items-center justify-content-between text-center mb-38 mt-minus-6">
                                                <h3 class="fs-3 mb-0 mb-1 mb-sm-0 liva-el-title">Top Rated</h3>

                                                <div>
                                                    <a href="https://themes.envytheme.com/liva/shop/" class="read-more">
                            <span>See All Products </span>
                            <i class="ri-arrow-right-up-line  ms-1"></i> 
                        </a>
                                                </div>
                                            </div>

                                            <div class="swiper best-product-slide">
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide">
                                                        <div class="single-product-telemobile-item">
                                                            <div class="product-img position-relative">
                                                                <a href="https://themes.envytheme.com/liva/product/apple-macbook-pro-16-2-with-liquid-retina-xdr-display/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-9-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                    <div class="border-0 wish-btn">
                                                                        <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="448">
                                                                            <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="448" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                data-tinv-wl-producttype="variable" data-tinv-wl-action="add"></a>
                                                                            <div class="tinvwl-tooltip"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-content">
                                                                <a href="https://themes.envytheme.com/liva/product/apple-macbook-pro-16-2-with-liquid-retina-xdr-display/" class="title">Apple MacBook Pro 16.2&#8243; with Liquid Retina XDR Display</a>
                                                                <div class="d-flex gap-1 review">
                                                                    <div class="product-rating">
                                                                        <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span style="width:100%">Rated <strong class="rating">5.00</strong> out of 5</span></div>
                                                                        <div class="prt">(1 review)</div>
                                                                    </div>
                                                                </div>
                                                                <h3><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>1,500</span> &ndash; <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>2,400</span>
                                                                </h3>
                                                                <div class="d-flex sold-stock gap-4 align-items-center">
                                                                    <span class="sold">6 Sold</span>
                                                                    <span class="stock"><i class="ri-check-line"></i> 494 in stock</span>
                                                                </div>
                                                                <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                    <div class="flex-shrink-0">
                                                                        <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                    </div>
                                                                    <div class="flex-grow-1">
                                                                        <div class="d-flex gap-1 justify-content-end">
                                                                            <a href="https://themes.envytheme.com/liva/product/apple-macbook-pro-16-2-with-liquid-retina-xdr-display/" data-quantity="1" class="button product_type_variable add_to_cart_button add-to-cart-btn" data-product_id="448" data-product_sku="SMTGS6T45" aria-label="Select options for &ldquo;Apple MacBook Pro 16.2&quot; with Liquid Retina XDR Display&rdquo;"
                                                                                rel="nofollow"><i class="ri-shopping-cart-line"></i>Select options</a> </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="single-product-telemobile-item">
                                                            <div class="product-img position-relative">
                                                                <a href="https://themes.envytheme.com/liva/product/microwave-oven-with-led-lighting-700-watts-0-7-cu-ft/" class="d-block">
                <img decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-1-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                    <span class="minus-count">-11%</span>
                                                                    <div class="border-0 wish-btn">
                                                                        <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="451">
                                                                            <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="451" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                            <div class="tinvwl-tooltip"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-content">
                                                                <a href="https://themes.envytheme.com/liva/product/microwave-oven-with-led-lighting-700-watts-0-7-cu-ft/" class="title">Microwave Oven With LED Lighting &#8211;  700 Watts, 0.7 cu ft</a>
                                                                <div class="d-flex gap-1 review">
                                                                    <div class="product-rating">
                                                                        <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span style="width:100%">Rated <strong class="rating">5.00</strong> out of 5</span></div>
                                                                        <div class="prt">(1 review)</div>
                                                                    </div>
                                                                </div>
                                                                <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>450</span></del> <span class="screen-reader-text">Original price was: &#036;450.</span>
                                                                    <span
                                                                        class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>399</span><span class="screen-reader-text">Current price is: &#036;399.</span></h3>
                                                                <div class="d-flex sold-stock gap-4 align-items-center">
                                                                    <span class="sold">21 Sold</span>
                                                                    <span class="stock"><i class="ri-check-line"></i> 214 in stock</span>
                                                                </div>
                                                                <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                    <div class="flex-shrink-0">
                                                                        <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                    </div>
                                                                    <div class="flex-grow-1">
                                                                        <div class="d-flex gap-1 justify-content-end">
                                                                            <a href="?add-to-cart=451" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="451" data-product_sku="" aria-label="Add to cart: &ldquo;Microwave Oven With LED Lighting -  700 Watts, 0.7 cu ft&rdquo;"
                                                                                rel="nofollow" data-success_message="&ldquo;Microwave Oven With LED Lighting -  700 Watts, 0.7 cu ft&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                            </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="single-product-telemobile-item">
                                                            <div class="product-img position-relative">
                                                                <a href="https://themes.envytheme.com/liva/product/mini-drone-for-beginners-syma-portable-indoor-quadcopter/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-14-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                                <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                    <span class="minus-count">-10%</span>
                                                                    <div class="border-0 wish-btn">
                                                                        <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="443">
                                                                            <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="443" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                                data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                            <div class="tinvwl-tooltip"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-content">
                                                                <a href="https://themes.envytheme.com/liva/product/mini-drone-for-beginners-syma-portable-indoor-quadcopter/" class="title">Mini Drone for Beginners, SYMA Portable Indoor Quadcopter</a>
                                                                <div class="d-flex gap-1 review">
                                                                    <div class="product-rating">
                                                                        <div class="star-rating" role="img" aria-label="Rated 4.00 out of 5"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div>
                                                                        <div class="prt">(1 review)</div>
                                                                    </div>
                                                                </div>
                                                                <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>500</span></del> <span class="screen-reader-text">Original price was: &#036;500.</span>
                                                                    <span
                                                                        class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>450</span><span class="screen-reader-text">Current price is: &#036;450.</span></h3>
                                                                <div class="d-flex sold-stock gap-4 align-items-center">
                                                                    <span class="sold">6 Sold</span>
                                                                    <span class="stock"><i class="ri-check-line"></i> 264 in stock</span>
                                                                </div>
                                                                <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                    <div class="flex-shrink-0">
                                                                        <span class="delivery"><i class="ri-truck-line"></i> Free Delivery</span>
                                                                    </div>
                                                                    <div class="flex-grow-1">
                                                                        <div class="d-flex gap-1 justify-content-end">
                                                                            <a href="?add-to-cart=443" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="443" data-product_sku="" aria-label="Add to cart: &ldquo;Mini Drone for Beginners, SYMA Portable Indoor Quadcopter&rdquo;"
                                                                                rel="nofollow" data-success_message="&ldquo;Mini Drone for Beginners, SYMA Portable Indoor Quadcopter&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                            </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="product-controller best">
                                                    <div class="controller-icon prev">
                                                        <i class="flaticon-chevron"></i>
                                                    </div>
                                                    <div class="controller-icon next">
                                                        <i class="flaticon-chevron"></i>
                                                    </div>
                                                </div>
                                                <div class="swiper-pagination-best-product text-center mt-4 lh-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-fd79ccb e-con-full e-flex e-con e-parent" data-id="fd79ccb" data-element_type="container">
                        <div class="elementor-element elementor-element-b5f91f5 elementor-widget elementor-widget-OfferArea2" data-id="b5f91f5" data-element_type="widget" data-widget_type="OfferArea2.default">
                            <div class="elementor-widget-container">
                                <div class="offer-area pb-35">
                                    <div class="container">
                                        <div class="row justify-content-center">
                                            <div class="col-xl-6">
                                                <div class="single-offer-item style-two position-relative z-1 elementor-repeater-item-53db1aa">

                                                    <div class="offer-content">
                                                        <span class="top-title">Hurry Up!</span>
                                                        <h3>Time to Upgrade: Smart Watches Sale</h3>
                                                        <p>Unleash Smart Savings Today!</p>

                                                        <a href="https://themes.envytheme.com/liva/shop/" class="btn btn-warning text-white rounded-pill">
                                            <span>Shop Now</span>
                                            <i class="ri-arrow-right-up-line  ms-1"></i> 
                                        </a>
                                                    </div>

                                                    <img decoding="async" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/offer-4.png" class="position-absolute bottom-0 end-0 z-n1" alt="offer-4">
                                                </div>
                                            </div>
                                            <div class="col-xl-6">
                                                <div class="single-offer-item style-two position-relative z-1 elementor-repeater-item-4ba56a6">

                                                    <div class="offer-content">
                                                        <span class="top-title">Weekend Sale</span>
                                                        <h3>Laptop Sale - Unmissable Deals Await!</h3>
                                                        <p>Unleash Smart Savings Today!</p>

                                                        <a href="https://themes.envytheme.com/liva/shop/" class="btn btn-warning text-white rounded-pill">
                                            <span>Shop Now</span>
                                            <i class="ri-arrow-right-up-line  ms-1"></i> 
                                        </a>
                                                    </div>

                                                    <img decoding="async" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/offer-5.png" class="position-absolute bottom-0 end-0 z-n1" alt="offer-5">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-12199b3 e-con-full e-flex e-con e-parent" data-id="12199b3" data-element_type="container">
                        <div class="elementor-element elementor-element-18a4050 elementor-widget elementor-widget-liva-product-carousel2" data-id="18a4050" data-element_type="widget" data-widget_type="liva-product-carousel2.default">
                            <div class="elementor-widget-container">
                                <div class="flash-sale-area pb-60">
                                    <div class="container position-relative">
                                        <div class="d-lg-flex align-items-center justify-content-between text-center mb-27 mt-minus-6">
                                            <div class="d-lg-flex align-items-center">
                                                <h3 class="fs-3 mb-0 mb-1 mb-sm-0 liva-el-title">Flash Sale <i class="flaticon-flash-sale text-dangerdiv position-relative tops-3"></i></h3>
                                                <div class="d-flex align-items-center ms-70 justify-content-center my-3 my-lg-0">
                                                    <span class="title d-none d-sm-inline-block">End of the offer</span>
                                                    <div class="clockdiv mb-0 ms-sm-3" data-date="February 20, 2025">
                                                        <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center gap-1 justify-content-center">
                                                            <li class="time">
                                                                <span class="days"></span>
                                                            </li>
                                                            <li class="time">
                                                                <span class="hours"></span>
                                                            </li>
                                                            <li class="time">
                                                                <span class="minutes"></span>
                                                            </li>
                                                            <li class="time">
                                                                <span class="seconds"></span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <a href="https://themes.envytheme.com/liva/shop/" class="read-more">
                                <span>See All Deals</span>
                                <i class="ri-arrow-right-up-line ms-1"></i> 
                            </a>
                                            </div>
                                        </div>

                                        <div class="swiper flash-products-slide">
                                            <div class="swiper-wrapper">
                                                <div class="swiper-slide">
                                                    <div class="single-product-telemobile-item">
                                                        <div class="product-img position-relative">
                                                            <a href="https://themes.envytheme.com/liva/product/microwave-oven-with-led-lighting-700-watts-0-7-cu-ft/" class="d-block">
                <img decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-1-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                <span class="minus-count">-11%</span>
                                                                <div class="border-0 wish-btn">
                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="451">
                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="451" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                        <div class="tinvwl-tooltip"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <a href="https://themes.envytheme.com/liva/product/microwave-oven-with-led-lighting-700-watts-0-7-cu-ft/" class="title">Microwave Oven With LED Lighting &#8211;  700 Watts, 0.7 cu ft</a>
                                                            <div class="d-flex gap-1 review">
                                                                <div class="product-rating">
                                                                    <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span style="width:100%">Rated <strong class="rating">5.00</strong> out of 5</span></div>
                                                                    <div class="prt">(1 review)</div>
                                                                </div>
                                                            </div>
                                                            <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>450</span></del> <span class="screen-reader-text">Original price was: &#036;450.</span>
                                                                <span
                                                                    class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>399</span><span class="screen-reader-text">Current price is: &#036;399.</span></h3>
                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                <span class="sold">21 Sold</span>
                                                                <span class="stock"><i class="ri-check-line"></i> 214 in stock</span>
                                                            </div>
                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                <div class="flex-shrink-0">
                                                                    <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                </div>
                                                                <div class="flex-grow-1">
                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                        <a href="?add-to-cart=451" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="451" data-product_sku="" aria-label="Add to cart: &ldquo;Microwave Oven With LED Lighting -  700 Watts, 0.7 cu ft&rdquo;"
                                                                            rel="nofollow" data-success_message="&ldquo;Microwave Oven With LED Lighting -  700 Watts, 0.7 cu ft&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                        </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="swiper-slide">
                                                    <div class="single-product-telemobile-item">
                                                        <div class="product-img position-relative">
                                                            <a href="https://themes.envytheme.com/liva/product/multiplatform-wireless-noise-cancelling-gaming-headset/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-6-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                <span class="minus-count">-15%</span>
                                                                <div class="border-0 wish-btn">
                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="450">
                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="450" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                        <div class="tinvwl-tooltip"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <a href="https://themes.envytheme.com/liva/product/multiplatform-wireless-noise-cancelling-gaming-headset/" class="title">Multiplatform Wireless Noise-Cancelling Gaming Headset</a>
                                                            <div class="d-flex gap-1 review review-blank">
                                                                <i class="flaticon-star-1"></i>
                                                                <i class="flaticon-star-1"></i>
                                                                <i class="flaticon-star-1"></i>
                                                                <i class="flaticon-star-1"></i>
                                                                <i class="flaticon-star-1"></i>
                                                                <div class="prt">0 reviews</div>
                                                            </div>
                                                            <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>329</span></del> <span class="screen-reader-text">Original price was: &#036;329.</span>
                                                                <span
                                                                    class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>279</span><span class="screen-reader-text">Current price is: &#036;279.</span></h3>
                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                <span class="sold">7 Sold</span>
                                                                <span class="stock"><i class="ri-check-line"></i> 115 in stock</span>
                                                            </div>
                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                <div class="flex-shrink-0">
                                                                    <span class="delivery"><i class="ri-truck-line"></i> Free Delivery</span>
                                                                </div>
                                                                <div class="flex-grow-1">
                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                        <a href="?add-to-cart=450" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="450" data-product_sku="" aria-label="Add to cart: &ldquo;Multiplatform Wireless Noise-Cancelling Gaming Headset&rdquo;"
                                                                            rel="nofollow" data-success_message="&ldquo;Multiplatform Wireless Noise-Cancelling Gaming Headset&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                        </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="swiper-slide">
                                                    <div class="single-product-telemobile-item">
                                                        <div class="product-img position-relative">
                                                            <a href="https://themes.envytheme.com/liva/product/wireless-bluetooth-over-ear-headphones-noise-cancelling/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-21-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                <span class="minus-count">-30%</span>
                                                                <div class="border-0 wish-btn">
                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="446">
                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="446" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                        <div class="tinvwl-tooltip"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <a href="https://themes.envytheme.com/liva/product/wireless-bluetooth-over-ear-headphones-noise-cancelling/" class="title">Wireless Bluetooth Over Ear Headphones, Noise Cancelling</a>
                                                            <div class="d-flex gap-1 review review-blank">
                                                                <i class="flaticon-star-1"></i>
                                                                <i class="flaticon-star-1"></i>
                                                                <i class="flaticon-star-1"></i>
                                                                <i class="flaticon-star-1"></i>
                                                                <i class="flaticon-star-1"></i>
                                                                <div class="prt">0 reviews</div>
                                                            </div>
                                                            <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>99</span></del> <span class="screen-reader-text">Original price was: &#036;99.</span>
                                                                <span
                                                                    class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>69</span><span class="screen-reader-text">Current price is: &#036;69.</span></h3>
                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                <span class="stock"><i class="ri-check-line"></i> 77 in stock</span>
                                                            </div>
                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                <div class="flex-shrink-0">
                                                                    <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                </div>
                                                                <div class="flex-grow-1">
                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                        <a href="?add-to-cart=446" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="446" data-product_sku="" aria-label="Add to cart: &ldquo;Wireless Bluetooth Over Ear Headphones, Noise Cancelling&rdquo;"
                                                                            rel="nofollow" data-success_message="&ldquo;Wireless Bluetooth Over Ear Headphones, Noise Cancelling&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                        </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="swiper-slide">
                                                    <div class="single-product-telemobile-item">
                                                        <div class="product-img position-relative">
                                                            <a href="https://themes.envytheme.com/liva/product/smart-watch-answer-make-calls-1-85-smart-watches/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-22-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                <span class="minus-count">-72%</span>
                                                                <div class="border-0 wish-btn">
                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="445">
                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="445" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                        <div class="tinvwl-tooltip"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <a href="https://themes.envytheme.com/liva/product/smart-watch-answer-make-calls-1-85-smart-watches/" class="title">Smart Watch (Answer/Make Calls), 1.85&#8243; Smart Watches</a>
                                                            <div class="d-flex gap-1 review review-blank">
                                                                <i class="flaticon-star-1"></i>
                                                                <i class="flaticon-star-1"></i>
                                                                <i class="flaticon-star-1"></i>
                                                                <i class="flaticon-star-1"></i>
                                                                <i class="flaticon-star-1"></i>
                                                                <div class="prt">0 reviews</div>
                                                            </div>
                                                            <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>89</span></del> <span class="screen-reader-text">Original price was: &#036;89.</span>
                                                                <span
                                                                    class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>25</span><span class="screen-reader-text">Current price is: &#036;25.</span></h3>
                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                <span class="stock"><i class="ri-check-line"></i> 28 in stock</span>
                                                            </div>
                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                <div class="flex-shrink-0">
                                                                    <span class="delivery"><i class="ri-truck-line"></i> Free Delivery</span>
                                                                </div>
                                                                <div class="flex-grow-1">
                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                        <a href="?add-to-cart=445" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="445" data-product_sku="" aria-label="Add to cart: &ldquo;Smart Watch (Answer/Make Calls), 1.85&quot; Smart Watches&rdquo;"
                                                                            rel="nofollow" data-success_message="&ldquo;Smart Watch (Answer/Make Calls), 1.85&quot; Smart Watches&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                        </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="swiper-slide">
                                                    <div class="single-product-telemobile-item">
                                                        <div class="product-img position-relative">
                                                            <a href="https://themes.envytheme.com/liva/product/32-inch-d-series-hd-720p-smart-tv-with-apple-airplay/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-8-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                <span class="minus-count">-19%</span>
                                                                <div class="border-0 wish-btn">
                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="444">
                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="444" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                        <div class="tinvwl-tooltip"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <a href="https://themes.envytheme.com/liva/product/32-inch-d-series-hd-720p-smart-tv-with-apple-airplay/" class="title">32 inch D-Series HD 720p Smart TV with Apple AirPlay</a>
                                                            <div class="d-flex gap-1 review review-blank">
                                                                <i class="flaticon-star-1"></i>
                                                                <i class="flaticon-star-1"></i>
                                                                <i class="flaticon-star-1"></i>
                                                                <i class="flaticon-star-1"></i>
                                                                <i class="flaticon-star-1"></i>
                                                                <div class="prt">0 reviews</div>
                                                            </div>
                                                            <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>159</span></del> <span class="screen-reader-text">Original price was: &#036;159.</span>
                                                                <span
                                                                    class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>128</span><span class="screen-reader-text">Current price is: &#036;128.</span></h3>
                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                <span class="sold">7 Sold</span>
                                                                <span class="stock"><i class="ri-check-line"></i> 893 in stock</span>
                                                            </div>
                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                <div class="flex-shrink-0">
                                                                    <span class="delivery"><i class="ri-truck-line"></i> Fast Delivery</span>
                                                                </div>
                                                                <div class="flex-grow-1">
                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                        <a href="?add-to-cart=444" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="444" data-product_sku="" aria-label="Add to cart: &ldquo;32 inch D-Series HD 720p Smart TV with Apple AirPlay&rdquo;"
                                                                            rel="nofollow" data-success_message="&ldquo;32 inch D-Series HD 720p Smart TV with Apple AirPlay&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                        </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="swiper-slide">
                                                    <div class="single-product-telemobile-item">
                                                        <div class="product-img position-relative">
                                                            <a href="https://themes.envytheme.com/liva/product/mini-drone-for-beginners-syma-portable-indoor-quadcopter/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-14-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                <span class="minus-count">-10%</span>
                                                                <div class="border-0 wish-btn">
                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="443">
                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="443" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                        <div class="tinvwl-tooltip"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <a href="https://themes.envytheme.com/liva/product/mini-drone-for-beginners-syma-portable-indoor-quadcopter/" class="title">Mini Drone for Beginners, SYMA Portable Indoor Quadcopter</a>
                                                            <div class="d-flex gap-1 review">
                                                                <div class="product-rating">
                                                                    <div class="star-rating" role="img" aria-label="Rated 4.00 out of 5"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div>
                                                                    <div class="prt">(1 review)</div>
                                                                </div>
                                                            </div>
                                                            <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>500</span></del> <span class="screen-reader-text">Original price was: &#036;500.</span>
                                                                <span
                                                                    class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>450</span><span class="screen-reader-text">Current price is: &#036;450.</span></h3>
                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                <span class="sold">6 Sold</span>
                                                                <span class="stock"><i class="ri-check-line"></i> 264 in stock</span>
                                                            </div>
                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                <div class="flex-shrink-0">
                                                                    <span class="delivery"><i class="ri-truck-line"></i> Free Delivery</span>
                                                                </div>
                                                                <div class="flex-grow-1">
                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                        <a href="?add-to-cart=443" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="443" data-product_sku="" aria-label="Add to cart: &ldquo;Mini Drone for Beginners, SYMA Portable Indoor Quadcopter&rdquo;"
                                                                            rel="nofollow" data-success_message="&ldquo;Mini Drone for Beginners, SYMA Portable Indoor Quadcopter&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                        </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="swiper-slide">
                                                    <div class="single-product-telemobile-item">
                                                        <div class="product-img position-relative">
                                                            <a href="https://themes.envytheme.com/liva/product/wireless-bluetooth-over-ear-headphones-with-active/" class="d-block">
                <img loading="lazy" decoding="async" width="470" height="323" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/product-10-470x323.png" class="attachment-470x323 size-470x323" alt="" />            </a>
                                                            <div class="d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0">
                                                                <span class="minus-count">-30%</span>
                                                                <div class="border-0 wish-btn">
                                                                    <div class="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart tinvwl-the_content" data-tinvwl_product_id="441">
                                                                        <a role="button" tabindex="0" name="" aria-label="" class="tinvwl_add_to_wishlist_button tinvwl-icon-heart no-txt  tinvwl-position-after" data-tinv-wl-list="[]" data-tinv-wl-product="441" data-tinv-wl-productvariation="0" data-tinv-wl-productvariations="[]"
                                                                            data-tinv-wl-producttype="simple" data-tinv-wl-action="add"></a>
                                                                        <div class="tinvwl-tooltip"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <a href="https://themes.envytheme.com/liva/product/wireless-bluetooth-over-ear-headphones-with-active/" class="title">Wireless Bluetooth Over Ear Headphones, with Active</a>
                                                            <div class="d-flex gap-1 review review-blank">
                                                                <i class="flaticon-star-1"></i>
                                                                <i class="flaticon-star-1"></i>
                                                                <i class="flaticon-star-1"></i>
                                                                <i class="flaticon-star-1"></i>
                                                                <i class="flaticon-star-1"></i>
                                                                <div class="prt">0 reviews</div>
                                                            </div>
                                                            <h3><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>99</span></del> <span class="screen-reader-text">Original price was: &#036;99.</span>
                                                                <span
                                                                    class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>69</span><span class="screen-reader-text">Current price is: &#036;69.</span></h3>
                                                            <div class="d-flex sold-stock gap-4 align-items-center">
                                                                <span class="sold">1 Sold</span>
                                                                <span class="stock"><i class="ri-check-line"></i> 29 in stock</span>
                                                            </div>
                                                            <div class="d-flex align-items-center justify-content-between delivery-cart gap-4">
                                                                <div class="flex-shrink-0">
                                                                    <span class="delivery"><i class="ri-truck-line"></i> Free Delivery</span>
                                                                </div>
                                                                <div class="flex-grow-1">
                                                                    <div class="d-flex gap-1 justify-content-end">
                                                                        <a href="?add-to-cart=441" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart add-to-cart-btn" data-product_id="441" data-product_sku="" aria-label="Add to cart: &ldquo;Wireless Bluetooth Over Ear Headphones, with Active&rdquo;"
                                                                            rel="nofollow" data-success_message="&ldquo;Wireless Bluetooth Over Ear Headphones, with Active&rdquo; has been added to your cart"><i class="ri-shopping-cart-line"></i>Add to cart</a>                                                                        </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-controller">
                                            <div class="controller-icon prev7">
                                                <i class="flaticon-chevron"></i>
                                            </div>
                                            <div class="controller-icon next7">
                                                <i class="flaticon-chevron"></i>
                                            </div>
                                        </div>
                                        <div class="swiper-pagination-flash-products text-center mt-4 lh-1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- .entry-content -->

        </div>
        <!-- #post-144 -->
    </div>

    <div data-elementor-type="wp-post" data-elementor-id="72" class="elementor elementor-72">
        <div class="elementor-element elementor-element-1fcd1f3 e-con-full e-flex e-con e-parent" data-id="1fcd1f3" data-element_type="container">
            <div class="elementor-element elementor-element-3480fcd elementor-widget elementor-widget-ServicesBox" data-id="3480fcd" data-element_type="widget" data-widget_type="ServicesBox.default">
                <div class="elementor-widget-container">
                    <div class="services-area bg-gray1 pt-60 pb-35">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-3 col-sm-6">
                                    <div class="d-flex align-items-center single-services-item">

                                        <div class="flex-shrink-0">
                                            <img src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/shipped.png" alt="Fast Delivery">
                                        </div>

                                        <div class="flex-grow-1 ms-3">
                                            <h3>Fast Delivery</h3>
                                            <span>Experience Lightning-Fast Delivery</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6">
                                    <div class="d-flex align-items-center single-services-item">

                                        <div class="flex-shrink-0">
                                            <img src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/credit.png" alt="Secured Payment">
                                        </div>

                                        <div class="flex-grow-1 ms-3">
                                            <h3>Secured Payment</h3>
                                            <span>Shop with Confidence
</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6">
                                    <div class="d-flex align-items-center single-services-item">

                                        <div class="flex-shrink-0">
                                            <img src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/wallet.png" alt="Money Back">
                                        </div>

                                        <div class="flex-grow-1 ms-3">
                                            <h3>Money Back</h3>
                                            <span>100% Money-Back Guarantee
</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6">
                                    <div class="d-flex align-items-center single-services-item">

                                        <div class="flex-shrink-0">
                                            <img src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/headphones.png" alt="24/7 Support">
                                        </div>

                                        <div class="flex-grow-1 ms-3">
                                            <h3>24/7 Support</h3>
                                            <span>Always Here for You</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="elementor-element elementor-element-a2ddf3f bg-gray1 border-top pt-60 pb-35 e-flex e-con-boxed e-con e-parent" data-id="a2ddf3f" data-element_type="container">
            <div class="e-con-inner">
                <div class="elementor-element elementor-element-73a185f e-con-full single-footer-widget  e-flex e-con e-child" data-id="73a185f" data-element_type="container">
                    <div class="elementor-element elementor-element-a60d937 elementor-widget elementor-widget-heading" data-id="a60d937" data-element_type="widget" data-widget_type="heading.default">
                        <div class="elementor-widget-container">
                            <h3 class="elementor-heading-title elementor-size-default">About The Shop</h3>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-8606fd6 elementor-widget elementor-widget-text-editor" data-id="8606fd6" data-element_type="widget" data-widget_type="text-editor.default">
                        <div class="elementor-widget-container">
                            <p>We&#8217;re not just an online store; we&#8217;re your gateway to a world of cutting-edge electronics and telemobile devices</p>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-9d2937f elementor-widget elementor-widget-CallInfo" data-id="9d2937f" data-element_type="widget" data-widget_type="CallInfo.default">
                        <div class="elementor-widget-container">
                            <div class="call-info">
                                <span class="title">Got Question? Call us 24/7</span>
                                <div class="d-flex align-items-center">
                                    <i class="flaticon-headphones-1"></i>

                                    <a href="tel:808555-0111">(808) 555-0111</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="elementor-element elementor-element-bddfb0d e-con-full e-flex e-con e-child" data-id="bddfb0d" data-element_type="container">
                    <div class="elementor-element elementor-element-6931d60 elementor-widget elementor-widget-ListArea" data-id="6931d60" data-element_type="widget" data-widget_type="ListArea.default">
                        <div class="elementor-widget-container">
                            <div class="single-footer-widget">
                                <h3>Popular Categories</h3>

                                <ul class="ps-0 mb-0 list-unstyled import-link">
                                    <li>
                                        <a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/">Laptop &amp; Desktop</a>
                                    </li>
                                    <li>
                                        <a href="https://themes.envytheme.com/liva/product-category/smart-home-electronics/">Smart Home Electronics</a>
                                    </li>
                                    <li>
                                        <a href="https://themes.envytheme.com/liva/product-category/smart-watches/">Smart Watches</a>
                                    </li>
                                    <li>
                                        <a href="https://themes.envytheme.com/liva/product-category/wireless-headphone/">Wireless Headphone</a>
                                    </li>
                                    <li>
                                        <a href="https://themes.envytheme.com/liva/product-category/virtual-reality-headsets/">Virtual Reality Headsets</a>
                                    </li>
                                    <li>
                                        <a href="https://themes.envytheme.com/liva/product-category/laptop-desktop/internal-components/">Internal Components</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="elementor-element elementor-element-879c849 e-con-full e-flex e-con e-child" data-id="879c849" data-element_type="container">
                    <div class="elementor-element elementor-element-47fdeed elementor-widget elementor-widget-ListArea" data-id="47fdeed" data-element_type="widget" data-widget_type="ListArea.default">
                        <div class="elementor-widget-container">
                            <div class="single-footer-widget">
                                <h3>Let Us Help You</h3>

                                <ul class="ps-0 mb-0 list-unstyled import-link">
                                    <li>
                                        <a href="https://themes.envytheme.com/liva/my-account/">Your Account</a>
                                    </li>
                                    <li>
                                        <a href="https://themes.envytheme.com/liva/my-account/orders/">Your Order</a>
                                    </li>
                                    <li>
                                        <a href="https://themes.envytheme.com/liva/terms-conditions/">Return Policy</a>
                                    </li>
                                    <li>
                                        <a href="https://themes.envytheme.com/liva/contact/">Help Center</a>
                                    </li>
                                    <li>
                                        <a href="https://themes.envytheme.com/liva/my-account/edit-account/">Change Password</a>
                                    </li>
                                    <li>
                                        <a href="https://themes.envytheme.com/liva/shop/?orderby=popularity">Popular Products</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="elementor-element elementor-element-e16553b e-con-full e-flex e-con e-child" data-id="e16553b" data-element_type="container">
                    <div class="elementor-element elementor-element-bf00fe1 elementor-widget elementor-widget-ListArea" data-id="bf00fe1" data-element_type="widget" data-widget_type="ListArea.default">
                        <div class="elementor-widget-container">
                            <div class="single-footer-widget">
                                <h3>Get to Know Us</h3>

                                <ul class="ps-0 mb-0 list-unstyled import-link">
                                    <li>
                                        <a href="https://themes.envytheme.com/liva/about-us/">About Us</a>
                                    </li>
                                    <li>
                                        <a href="https://themes.envytheme.com/liva/my-account/">Login/Register</a>
                                    </li>
                                    <li>
                                        <a href="https://themes.envytheme.com/liva/terms-conditions/">Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a href="https://themes.envytheme.com/liva/privacy-policy/">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="https://themes.envytheme.com/liva/contact/">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="https://themes.envytheme.com/liva/faqs/">FAQs</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="elementor-element elementor-element-9b1849b bg-gray1 pb-60 e-flex e-con-boxed e-con e-parent" data-id="9b1849b" data-element_type="container">
            <div class="e-con-inner">
                <div class="elementor-element elementor-element-aebcb55 e-con-full e-flex e-con e-child" data-id="aebcb55" data-element_type="container">
                    <div class="elementor-element elementor-element-16d915a elementor-widget elementor-widget-Liva_Newsletter" data-id="16d915a" data-element_type="widget" data-widget_type="Liva_Newsletter.default">
                        <div class="elementor-widget-container">
                            <div class="single-footer-bottom-item">
                                <span class="title">Subscribe to the newsletter</span>
                                <form class="subscribe-form position-relative mailchimp" method="post">
                                    <input type="text" name="EMAIL" class="memail form-control" placeholder="Enter your email">

                                    <button class="btn btn-warning text-white position-absolute top-50 end-0 translate-middle-y">Submit Now</button>
                                </form>
                                <p class="mchimp-errmessage" style="display: none;"></p>
                                <p class="mchimp-sucmessage" style="display: none;"></p>
                            </div>

                            <script>
                                ;
                                (function($) {
                                    "use strict";
                                    $(document).ready(function() {
                                        // MAILCHIMP
                                        if ($(".mailchimp").length > 0) {
                                            $(".mailchimp").ajaxChimp({
                                                callback: mailchimpCallback,
                                                url: "https://envytheme.us13.list-manage.com/subscribe/post?u=1f4dcefed57b9c394873f34d2&amp;id=b093890ff6"
                                            });
                                        }
                                        $(".memail").on("focus", function() {
                                            $(".Enmchimp-errmessage").fadeOut();
                                            $(".mchimp-sucmessage").fadeOut();
                                        });
                                        $(".memail").on("keydown", function() {
                                            $(".mchimp-errmessage").fadeOut();
                                            $(".mchimp-sucmessage").fadeOut();
                                        });
                                        $(".memail").on("click", function() {
                                            $(".memail").val("");
                                        });

                                        function mailchimpCallback(resp) {
                                            if (resp.result === "success") {
                                                $(".mchimp-sucmessage").html(resp.msg).fadeIn(2000);
                                                $(".mchimp-sucmessage").fadeOut(1000);
                                            } else if (resp.result === "error") {
                                                $(".mchimp-errmessage").html(resp.msg).fadeIn(2000);
                                            }
                                        }
                                    });
                                })(jQuery)
                            </script>
                        </div>
                    </div>
                </div>
                <div class="elementor-element elementor-element-6c6c7cb e-con-full e-flex e-con e-child" data-id="6c6c7cb" data-element_type="container">
                    <div class="elementor-element elementor-element-59c0aaa elementor-widget elementor-widget-SocialLinks" data-id="59c0aaa" data-element_type="widget" data-widget_type="SocialLinks.default">
                        <div class="elementor-widget-container">
                            <div class="single-footer-bottom-item">
                                <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center social-link justify-content-center">
                                    <li>
                                        <span class="titles">Follow Us:</span>
                                    </li>

                                    <li class="d-inline-block"><a class="twitter" target="_blank" href="#"><i class="ri-twitter-x-line"></i></a></li>
                                    <li class="d-inline-block"><a class="facebook" target="_blank" href="#"><i class="ri-facebook-fill"></i></a></li>
                                    <li class="d-inline-block"><a class="instagram" target="_blank" href="#"><i class="ri-instagram-fill"></i></a></li>
                                    <li class="d-inline-block"><a class="linkedin" target="_blank" href="#"><i class="ri-linkedin-fill"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="elementor-element elementor-element-f6dca86 e-con-full e-flex e-con e-child" data-id="f6dca86" data-element_type="container">
                    <div class="elementor-element elementor-element-5feef5b elementor-widget elementor-widget-DownloadApp" data-id="5feef5b" data-element_type="widget" data-widget_type="DownloadApp.default">
                        <div class="elementor-widget-container">
                            <div class="single-footer-bottom-item">
                                <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center justify-content-center justify-content-lg-end app-link">
                                    <li>
                                        <span class="titles">Download App:</span>
                                    </li>

                                    <li>
                                        <a href="#" target="_blank">
                            <img src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/ios.svg" alt="ios">
                        </a>
                                    </li>

                                    <li>
                                        <a href="#" target="_blank">
                            <img src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/gplay.svg" alt="gplay">
                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="elementor-element elementor-element-0452853 copyright-area bg-white e-flex e-con-boxed e-con e-parent" data-id="0452853" data-element_type="container">
            <div class="e-con-inner">
                <div class="elementor-element elementor-element-dac0a2b e-con-full e-flex e-con e-child" data-id="dac0a2b" data-element_type="container">
                    <div class="elementor-element elementor-element-2af30b0 elementor-widget elementor-widget-text-editor" data-id="2af30b0" data-element_type="widget" data-widget_type="text-editor.default">
                        <div class="elementor-widget-container">
                            <p>© Liva. All Rights Reserved by <span style="text-decoration: underline;"><a href="https://envytheme.com/" target="_blank" rel="noopener">EnvyTheme</a></span></p>
                        </div>
                    </div>
                </div>
                <div class="elementor-element elementor-element-184c938 e-con-full e-flex e-con e-child" data-id="184c938" data-element_type="container">
                    <div class="elementor-element elementor-element-a8ce871 elementor-widget elementor-widget-image" data-id="a8ce871" data-element_type="widget" data-widget_type="image.default">
                        <div class="elementor-widget-container">
                            <img width="335" height="24" src="https://themes.envytheme.com/liva/wp-content/uploads/2024/02/payment.svg" class="attachment-full size-full wp-image-97" alt="payment" /> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button type="button" id="backtotop" class="position-fixed text-center border-0 p-0">
				<i class="ri-arrow-up-line"></i>
			</button>
    <script>
        jQuery(document).ready(function($) {
            $(document).on('click', '.plus', function(e) { // replace '.quantity' with document (without single quote)
                $input = $(this).prev('input.qty');
                var val = parseInt($input.val());
                var step = $input.attr('step');
                step = 'undefined' !== typeof(step) ? parseInt(step) : 1;
                $input.val(val + step).change();
            });
            $(document).on('click', '.minus', // replace '.quantity' with document (without single quote)
                function(e) {
                    $input = $(this).next('input.qty');
                    var val = parseInt($input.val());
                    var step = $input.attr('step');
                    step = 'undefined' !== typeof(step) ? parseInt(step) : 1;
                    if (val > 0) {
                        $input.val(val - step).change();
                    }
                });
        });
    </script>
    <!-- Start Location Option -->
    <div class="modal fade location-option location-modal" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModal2Label" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 pb-0">
                    <h3 class="modal-title" id="exampleModal2Label">Where to deliver your products?</h3>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="location-search-form">
                        <form action="#">
                            <div class="form-group mb-4">
                                <label class="label">Search your location</label>
                                <div class="position-relative">
                                    <input type="text" name="s" value="" class="form-control ps-5 location-input" placeholder="Search your location" autocomplete="off">
                                    <i class="ri-map-pin-line position-absolute top-50 start-0 translate-middle-y ps-3"></i>
                                </div>
                            </div>
                        </form>
                    </div>

                    <ul class="ps-0 mb-0 list-unstyled location-list">
                        <li class="location-item">
                            <a href="javascript:void(0)" data-slug="all" class="form-check ps-0 position-relative mb-0">
                                <div class="form-check-label d-block">
                                    <span class="title1">Select a Location </span>
                                    <span class="dec">All products</span>
                                </div>
                                <div class="location-checkbox"></div>
                            </a>
                        </li>
                        <li class="location-item ">
                            <a href="/liva/?location=alberta" data-slug="alberta" class="form-check ps-0 position-relative mb-0">
                                <div class="form-check-label d-block">
                                    <span class="title1">Alberta </span>
                                    <span class="dec">55/2 Alberta

</span>
                                </div>
                                <div class="location-checkbox"></div>
                            </a>
                        </li>
                        <li class="location-item ">
                            <a href="/liva/?location=new-brunswick" data-slug="new-brunswick" class="form-check ps-0 position-relative mb-0">
                                <div class="form-check-label d-block">
                                    <span class="title1">New Brunswick </span>
                                    <span class="dec">New Brunswick 56A

</span>
                                </div>
                                <div class="location-checkbox"></div>
                            </a>
                        </li>
                        <li class="location-item ">
                            <a href="/liva/?location=nova-scotia" data-slug="nova-scotia" class="form-check ps-0 position-relative mb-0">
                                <div class="form-check-label d-block">
                                    <span class="title1">Nova Scotia </span>
                                    <span class="dec">Athabasca T9S

</span>
                                </div>
                                <div class="location-checkbox"></div>
                            </a>
                        </li>
                        <li class="location-item ">
                            <a href="/liva/?location=ontario" data-slug="ontario" class="form-check ps-0 position-relative mb-0">
                                <div class="form-check-label d-block">
                                    <span class="title1">Ontario </span>
                                    <span class="dec">Ontario T9S

</span>
                                </div>
                                <div class="location-checkbox"></div>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- End Location Option -->
    <script type='text/javascript'>
        const lazyloadRunObserver = () => {
            const lazyloadBackgrounds = document.querySelectorAll(`.e-con.e-parent:not(.e-lazyloaded)`);
            const lazyloadBackgroundObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        let lazyloadBackground = entry.target;
                        if (lazyloadBackground) {
                            lazyloadBackground.classList.add('e-lazyloaded');
                        }
                        lazyloadBackgroundObserver.unobserve(entry.target);
                    }
                });
            }, {
                rootMargin: '200px 0px 200px 0px'
            });
            lazyloadBackgrounds.forEach((lazyloadBackground) => {
                lazyloadBackgroundObserver.observe(lazyloadBackground);
            });
        };
        const events = [
            'DOMContentLoaded',
            'elementor/lazyload/observe',
        ];
        events.forEach((event) => {
            document.addEventListener(event, lazyloadRunObserver);
        });
    </script>
    <script>
        (function() {
            var c = document.body.className;
            c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
            document.body.className = c;
        })();
    </script>
    <link rel='stylesheet' id='wc-blocks-style-css' href='https://themes.envytheme.com/liva/wp-content/plugins/woocommerce/assets/client/blocks/wc-blocks.css?ver=wc-9.4.3' media='all' />
    <link rel='stylesheet' id='elementor-post-184-css' href='https://themes.envytheme.com/liva/wp-content/uploads/elementor/css/post-184.css?ver=1733396847' media='all' />
    <link rel='stylesheet' id='widget-icon-list-css' href='https://themes.envytheme.com/liva/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css?ver=3.25.10' media='all' />
    <link rel='stylesheet' id='elementor-post-258-css' href='https://themes.envytheme.com/liva/wp-content/uploads/elementor/css/post-258.css?ver=1733396847' media='all' />
    <link rel='stylesheet' id='widget-image-css' href='https://themes.envytheme.com/liva/wp-content/plugins/elementor/assets/css/widget-image.min.css?ver=3.25.10' media='all' />
    <link rel='stylesheet' id='elementor-post-276-css' href='https://themes.envytheme.com/liva/wp-content/uploads/elementor/css/post-276.css?ver=1733396847' media='all' />
    <link rel='stylesheet' id='widget-heading-css' href='https://themes.envytheme.com/liva/wp-content/plugins/elementor/assets/css/widget-heading.min.css?ver=3.25.10' media='all' />
    <link rel='stylesheet' id='elementor-post-72-css' href='https://themes.envytheme.com/liva/wp-content/uploads/elementor/css/post-72.css?ver=1733396848' media='all' />
    <link rel='stylesheet' id='widget-text-editor-css' href='https://themes.envytheme.com/liva/wp-content/plugins/elementor/assets/css/widget-text-editor.min.css?ver=3.25.10' media='all' />
    <script src="https://themes.envytheme.com/liva/wp-includes/js/dist/hooks.min.js?ver=4d63a3d491d11ffd8ac6" id="wp-hooks-js"></script>
    <script src="https://themes.envytheme.com/liva/wp-includes/js/dist/i18n.min.js?ver=5e580eb46a90c2b997e6" id="wp-i18n-js"></script>
    <script id="wp-i18n-js-after">
        wp.i18n.setLocaleData({
            'text direction\u0004ltr': ['ltr']
        });
    </script>
    <script src="https://themes.envytheme.com/liva/wp-content/plugins/contact-form-7/includes/swv/js/index.js?ver=6.0.1" id="swv-js"></script>
    <script id="contact-form-7-js-before">
        var wpcf7 = {
            "api": {
                "root": "https:\/\/themes.envytheme.com\/liva\/wp-json\/",
                "namespace": "contact-form-7\/v1"
            }
        };
    </script>
    <script src="https://themes.envytheme.com/liva/wp-content/plugins/contact-form-7/includes/js/index.js?ver=6.0.1" id="contact-form-7-js"></script>
    <script src="https://themes.envytheme.com/liva/wp-content/plugins/liva-toolkit/js/tab-ajax.js?ver=1738731048" id="liva-tab-ajax-js"></script>
    <script id="wc-cart-fragments-js-extra">
        var wc_cart_fragments_params = {
            "ajax_url": "\/liva\/wp-admin\/admin-ajax.php",
            "wc_ajax_url": "\/liva\/?wc-ajax=%%endpoint%%",
            "cart_hash_key": "wc_cart_hash_30665d01c3fbc17b4640572d7d65288b",
            "fragment_name": "wc_fragments_30665d01c3fbc17b4640572d7d65288b",
            "request_timeout": "5000"
        };
    </script>
    <script src="https://themes.envytheme.com/liva/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min.js?ver=9.4.3" id="wc-cart-fragments-js" data-wp-strategy="defer"></script>
    <script id="tinvwl-js-extra">
        var tinvwl_add_to_wishlist = {
            "text_create": "Create New",
            "text_already_in": "{product_name} already in {wishlist_title}",
            "simple_flow": "1",
            "hide_zero_counter": "",
            "i18n_make_a_selection_text": "Please select some product options before adding this product to your wishlist.",
            "tinvwl_break_submit": "No items or actions are selected.",
            "tinvwl_clipboard": "Copied!",
            "allow_parent_variable": "",
            "block_ajax_wishlists_data": "",
            "update_wishlists_data": "",
            "hash_key": "ti_wishlist_data_30665d01c3fbc17b4640572d7d65288b",
            "nonce": "62e605628f",
            "rest_root": "https:\/\/themes.envytheme.com\/liva\/wp-json\/",
            "plugin_url": "https:\/\/themes.envytheme.com\/liva\/wp-content\/plugins\/ti-woocommerce-wishlist\/",
            "wc_ajax_url": "\/liva\/?wc-ajax=tinvwl",
            "stats": "",
            "popup_timer": "6000"
        };
    </script>
    <script src="https://themes.envytheme.com/liva/wp-content/plugins/ti-woocommerce-wishlist/assets/js/public.min.js?ver=2.9.2" id="tinvwl-js"></script>
    <script src="https://themes.envytheme.com/liva/wp-content/plugins/woocommerce/assets/js/sourcebuster/sourcebuster.min.js?ver=9.4.3" id="sourcebuster-js-js"></script>
    <script id="wc-order-attribution-js-extra">
        var wc_order_attribution = {
            "params": {
                "lifetime": 1.0e-5,
                "session": 30,
                "base64": false,
                "ajaxurl": "https:\/\/themes.envytheme.com\/liva\/wp-admin\/admin-ajax.php",
                "prefix": "wc_order_attribution_",
                "allowTracking": true
            },
            "fields": {
                "source_type": "current.typ",
                "referrer": "current_add.rf",
                "utm_campaign": "current.cmp",
                "utm_source": "current.src",
                "utm_medium": "current.mdm",
                "utm_content": "current.cnt",
                "utm_id": "current.id",
                "utm_term": "current.trm",
                "utm_source_platform": "current.plt",
                "utm_creative_format": "current.fmt",
                "utm_marketing_tactic": "current.tct",
                "session_entry": "current_add.ep",
                "session_start_time": "current_add.fd",
                "session_pages": "session.pgs",
                "session_count": "udata.vst",
                "user_agent": "udata.uag"
            }
        };
    </script>
    <script src="https://themes.envytheme.com/liva/wp-content/plugins/woocommerce/assets/js/frontend/order-attribution.min.js?ver=9.4.3" id="wc-order-attribution-js"></script>
    <script id="gt_widget_script_81397522-js-before">
        window.gtranslateSettings = /* document.write */ window.gtranslateSettings || {};
        window.gtranslateSettings['81397522'] = {
            "default_language": "en",
            "languages": ["ar", "nl", "en", "fr", "de", "it", "pt", "ru", "es"],
            "url_structure": "none",
            "flag_style": "2d",
            "wrapper_selector": "#gt-wrapper-81397522",
            "alt_flags": {
                "en": "usa"
            },
            "float_switcher_open_direction": "bottom",
            "switcher_horizontal_position": "inline"
        };
    </script>
    <script src="https://cdn.gtranslate.net/widgets/latest/float.js?ver=6.7.1" data-no-optimize="1" data-no-minify="1" data-gt-orig-url="/liva/" data-gt-orig-domain="themes.envytheme.com" data-gt-widget-id="81397522" defer></script>
    <script src="https://themes.envytheme.com/liva/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.25.10" id="elementor-webpack-runtime-js"></script>
    <script src="https://themes.envytheme.com/liva/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.25.10" id="elementor-frontend-modules-js"></script>
    <script src="https://themes.envytheme.com/liva/wp-includes/js/jquery/ui/core.min.js?ver=1.13.3" id="jquery-ui-core-js"></script>
    <script id="elementor-frontend-js-before">
        var elementorFrontendConfig = {
            "environmentMode": {
                "edit": false,
                "wpPreview": false,
                "isScriptDebug": false
            },
            "i18n": {
                "shareOnFacebook": "Share on Facebook",
                "shareOnTwitter": "Share on Twitter",
                "pinIt": "Pin it",
                "download": "Download",
                "downloadImage": "Download image",
                "fullscreen": "Fullscreen",
                "zoom": "Zoom",
                "share": "Share",
                "playVideo": "Play Video",
                "previous": "Previous",
                "next": "Next",
                "close": "Close",
                "a11yCarouselWrapperAriaLabel": "Carousel | Horizontal scrolling: Arrow Left & Right",
                "a11yCarouselPrevSlideMessage": "Previous slide",
                "a11yCarouselNextSlideMessage": "Next slide",
                "a11yCarouselFirstSlideMessage": "This is the first slide",
                "a11yCarouselLastSlideMessage": "This is the last slide",
                "a11yCarouselPaginationBulletMessage": "Go to slide"
            },
            "is_rtl": false,
            "breakpoints": {
                "xs": 0,
                "sm": 480,
                "md": 768,
                "lg": 1025,
                "xl": 1440,
                "xxl": 1600
            },
            "responsive": {
                "breakpoints": {
                    "mobile": {
                        "label": "Mobile Portrait",
                        "value": 767,
                        "default_value": 767,
                        "direction": "max",
                        "is_enabled": true
                    },
                    "mobile_extra": {
                        "label": "Mobile Landscape",
                        "value": 880,
                        "default_value": 880,
                        "direction": "max",
                        "is_enabled": false
                    },
                    "tablet": {
                        "label": "Tablet Portrait",
                        "value": 1024,
                        "default_value": 1024,
                        "direction": "max",
                        "is_enabled": true
                    },
                    "tablet_extra": {
                        "label": "Tablet Landscape",
                        "value": 1200,
                        "default_value": 1200,
                        "direction": "max",
                        "is_enabled": false
                    },
                    "laptop": {
                        "label": "Laptop",
                        "value": 1366,
                        "default_value": 1366,
                        "direction": "max",
                        "is_enabled": false
                    },
                    "widescreen": {
                        "label": "Widescreen",
                        "value": 2400,
                        "default_value": 2400,
                        "direction": "min",
                        "is_enabled": false
                    }
                },
                "hasCustomBreakpoints": false
            },
            "version": "3.25.10",
            "is_static": false,
            "experimentalFeatures": {
                "e_font_icon_svg": true,
                "additional_custom_breakpoints": true,
                "container": true,
                "e_swiper_latest": true,
                "e_nested_atomic_repeaters": true,
                "e_optimized_control_loading": true,
                "e_onboarding": true,
                "e_css_smooth_scroll": true,
                "home_screen": true,
                "landing-pages": true,
                "nested-elements": true,
                "editor_v2": true,
                "link-in-bio": true,
                "floating-buttons": true
            },
            "urls": {
                "assets": "https:\/\/themes.envytheme.com\/liva\/wp-content\/plugins\/elementor\/assets\/",
                "ajaxurl": "https:\/\/themes.envytheme.com\/liva\/wp-admin\/admin-ajax.php",
                "uploadUrl": "https:\/\/themes.envytheme.com\/liva\/wp-content\/uploads"
            },
            "nonces": {
                "floatingButtonsClickTracking": "ffe01d7881"
            },
            "swiperClass": "swiper",
            "settings": {
                "page": [],
                "editorPreferences": []
            },
            "kit": {
                "active_breakpoints": ["viewport_mobile", "viewport_tablet"],
                "global_image_lightbox": "yes",
                "lightbox_enable_counter": "yes",
                "lightbox_enable_fullscreen": "yes",
                "lightbox_enable_zoom": "yes",
                "lightbox_enable_share": "yes",
                "lightbox_title_src": "title",
                "lightbox_description_src": "description"
            },
            "post": {
                "id": 144,
                "title": "Liva%20%E2%80%93%20eCommerce%20WordPress%20Theme",
                "excerpt": "",
                "featuredImage": false
            }
        };
        var elementorFrontendConfig = {
            "environmentMode": {
                "edit": false,
                "wpPreview": false,
                "isScriptDebug": false
            },
            "i18n": {
                "shareOnFacebook": "Share on Facebook",
                "shareOnTwitter": "Share on Twitter",
                "pinIt": "Pin it",
                "download": "Download",
                "downloadImage": "Download image",
                "fullscreen": "Fullscreen",
                "zoom": "Zoom",
                "share": "Share",
                "playVideo": "Play Video",
                "previous": "Previous",
                "next": "Next",
                "close": "Close",
                "a11yCarouselWrapperAriaLabel": "Carousel | Horizontal scrolling: Arrow Left & Right",
                "a11yCarouselPrevSlideMessage": "Previous slide",
                "a11yCarouselNextSlideMessage": "Next slide",
                "a11yCarouselFirstSlideMessage": "This is the first slide",
                "a11yCarouselLastSlideMessage": "This is the last slide",
                "a11yCarouselPaginationBulletMessage": "Go to slide"
            },
            "is_rtl": false,
            "breakpoints": {
                "xs": 0,
                "sm": 480,
                "md": 768,
                "lg": 1025,
                "xl": 1440,
                "xxl": 1600
            },
            "responsive": {
                "breakpoints": {
                    "mobile": {
                        "label": "Mobile Portrait",
                        "value": 767,
                        "default_value": 767,
                        "direction": "max",
                        "is_enabled": true
                    },
                    "mobile_extra": {
                        "label": "Mobile Landscape",
                        "value": 880,
                        "default_value": 880,
                        "direction": "max",
                        "is_enabled": false
                    },
                    "tablet": {
                        "label": "Tablet Portrait",
                        "value": 1024,
                        "default_value": 1024,
                        "direction": "max",
                        "is_enabled": true
                    },
                    "tablet_extra": {
                        "label": "Tablet Landscape",
                        "value": 1200,
                        "default_value": 1200,
                        "direction": "max",
                        "is_enabled": false
                    },
                    "laptop": {
                        "label": "Laptop",
                        "value": 1366,
                        "default_value": 1366,
                        "direction": "max",
                        "is_enabled": false
                    },
                    "widescreen": {
                        "label": "Widescreen",
                        "value": 2400,
                        "default_value": 2400,
                        "direction": "min",
                        "is_enabled": false
                    }
                },
                "hasCustomBreakpoints": false
            },
            "version": "3.25.10",
            "is_static": false,
            "experimentalFeatures": {
                "e_font_icon_svg": true,
                "additional_custom_breakpoints": true,
                "container": true,
                "e_swiper_latest": true,
                "e_nested_atomic_repeaters": true,
                "e_optimized_control_loading": true,
                "e_onboarding": true,
                "e_css_smooth_scroll": true,
                "home_screen": true,
                "landing-pages": true,
                "nested-elements": true,
                "editor_v2": true,
                "link-in-bio": true,
                "floating-buttons": true
            },
            "urls": {
                "assets": "https:\/\/themes.envytheme.com\/liva\/wp-content\/plugins\/elementor\/assets\/",
                "ajaxurl": "https:\/\/themes.envytheme.com\/liva\/wp-admin\/admin-ajax.php",
                "uploadUrl": "https:\/\/themes.envytheme.com\/liva\/wp-content\/uploads"
            },
            "nonces": {
                "floatingButtonsClickTracking": "ffe01d7881"
            },
            "swiperClass": "swiper",
            "settings": {
                "page": [],
                "editorPreferences": []
            },
            "kit": {
                "active_breakpoints": ["viewport_mobile", "viewport_tablet"],
                "global_image_lightbox": "yes",
                "lightbox_enable_counter": "yes",
                "lightbox_enable_fullscreen": "yes",
                "lightbox_enable_zoom": "yes",
                "lightbox_enable_share": "yes",
                "lightbox_title_src": "title",
                "lightbox_description_src": "description"
            },
            "post": {
                "id": 144,
                "title": "Liva%20%E2%80%93%20eCommerce%20WordPress%20Theme",
                "excerpt": "",
                "featuredImage": false
            }
        };
        var elementorFrontendConfig = {
            "environmentMode": {
                "edit": false,
                "wpPreview": false,
                "isScriptDebug": false
            },
            "i18n": {
                "shareOnFacebook": "Share on Facebook",
                "shareOnTwitter": "Share on Twitter",
                "pinIt": "Pin it",
                "download": "Download",
                "downloadImage": "Download image",
                "fullscreen": "Fullscreen",
                "zoom": "Zoom",
                "share": "Share",
                "playVideo": "Play Video",
                "previous": "Previous",
                "next": "Next",
                "close": "Close",
                "a11yCarouselWrapperAriaLabel": "Carousel | Horizontal scrolling: Arrow Left & Right",
                "a11yCarouselPrevSlideMessage": "Previous slide",
                "a11yCarouselNextSlideMessage": "Next slide",
                "a11yCarouselFirstSlideMessage": "This is the first slide",
                "a11yCarouselLastSlideMessage": "This is the last slide",
                "a11yCarouselPaginationBulletMessage": "Go to slide"
            },
            "is_rtl": false,
            "breakpoints": {
                "xs": 0,
                "sm": 480,
                "md": 768,
                "lg": 1025,
                "xl": 1440,
                "xxl": 1600
            },
            "responsive": {
                "breakpoints": {
                    "mobile": {
                        "label": "Mobile Portrait",
                        "value": 767,
                        "default_value": 767,
                        "direction": "max",
                        "is_enabled": true
                    },
                    "mobile_extra": {
                        "label": "Mobile Landscape",
                        "value": 880,
                        "default_value": 880,
                        "direction": "max",
                        "is_enabled": false
                    },
                    "tablet": {
                        "label": "Tablet Portrait",
                        "value": 1024,
                        "default_value": 1024,
                        "direction": "max",
                        "is_enabled": true
                    },
                    "tablet_extra": {
                        "label": "Tablet Landscape",
                        "value": 1200,
                        "default_value": 1200,
                        "direction": "max",
                        "is_enabled": false
                    },
                    "laptop": {
                        "label": "Laptop",
                        "value": 1366,
                        "default_value": 1366,
                        "direction": "max",
                        "is_enabled": false
                    },
                    "widescreen": {
                        "label": "Widescreen",
                        "value": 2400,
                        "default_value": 2400,
                        "direction": "min",
                        "is_enabled": false
                    }
                },
                "hasCustomBreakpoints": false
            },
            "version": "3.25.10",
            "is_static": false,
            "experimentalFeatures": {
                "e_font_icon_svg": true,
                "additional_custom_breakpoints": true,
                "container": true,
                "e_swiper_latest": true,
                "e_nested_atomic_repeaters": true,
                "e_optimized_control_loading": true,
                "e_onboarding": true,
                "e_css_smooth_scroll": true,
                "home_screen": true,
                "landing-pages": true,
                "nested-elements": true,
                "editor_v2": true,
                "link-in-bio": true,
                "floating-buttons": true
            },
            "urls": {
                "assets": "https:\/\/themes.envytheme.com\/liva\/wp-content\/plugins\/elementor\/assets\/",
                "ajaxurl": "https:\/\/themes.envytheme.com\/liva\/wp-admin\/admin-ajax.php",
                "uploadUrl": "https:\/\/themes.envytheme.com\/liva\/wp-content\/uploads"
            },
            "nonces": {
                "floatingButtonsClickTracking": "ffe01d7881"
            },
            "swiperClass": "swiper",
            "settings": {
                "page": [],
                "editorPreferences": []
            },
            "kit": {
                "active_breakpoints": ["viewport_mobile", "viewport_tablet"],
                "global_image_lightbox": "yes",
                "lightbox_enable_counter": "yes",
                "lightbox_enable_fullscreen": "yes",
                "lightbox_enable_zoom": "yes",
                "lightbox_enable_share": "yes",
                "lightbox_title_src": "title",
                "lightbox_description_src": "description"
            },
            "post": {
                "id": 144,
                "title": "Liva%20%E2%80%93%20eCommerce%20WordPress%20Theme",
                "excerpt": "",
                "featuredImage": false
            }
        };
        var elementorFrontendConfig = {
            "environmentMode": {
                "edit": false,
                "wpPreview": false,
                "isScriptDebug": false
            },
            "i18n": {
                "shareOnFacebook": "Share on Facebook",
                "shareOnTwitter": "Share on Twitter",
                "pinIt": "Pin it",
                "download": "Download",
                "downloadImage": "Download image",
                "fullscreen": "Fullscreen",
                "zoom": "Zoom",
                "share": "Share",
                "playVideo": "Play Video",
                "previous": "Previous",
                "next": "Next",
                "close": "Close",
                "a11yCarouselWrapperAriaLabel": "Carousel | Horizontal scrolling: Arrow Left & Right",
                "a11yCarouselPrevSlideMessage": "Previous slide",
                "a11yCarouselNextSlideMessage": "Next slide",
                "a11yCarouselFirstSlideMessage": "This is the first slide",
                "a11yCarouselLastSlideMessage": "This is the last slide",
                "a11yCarouselPaginationBulletMessage": "Go to slide"
            },
            "is_rtl": false,
            "breakpoints": {
                "xs": 0,
                "sm": 480,
                "md": 768,
                "lg": 1025,
                "xl": 1440,
                "xxl": 1600
            },
            "responsive": {
                "breakpoints": {
                    "mobile": {
                        "label": "Mobile Portrait",
                        "value": 767,
                        "default_value": 767,
                        "direction": "max",
                        "is_enabled": true
                    },
                    "mobile_extra": {
                        "label": "Mobile Landscape",
                        "value": 880,
                        "default_value": 880,
                        "direction": "max",
                        "is_enabled": false
                    },
                    "tablet": {
                        "label": "Tablet Portrait",
                        "value": 1024,
                        "default_value": 1024,
                        "direction": "max",
                        "is_enabled": true
                    },
                    "tablet_extra": {
                        "label": "Tablet Landscape",
                        "value": 1200,
                        "default_value": 1200,
                        "direction": "max",
                        "is_enabled": false
                    },
                    "laptop": {
                        "label": "Laptop",
                        "value": 1366,
                        "default_value": 1366,
                        "direction": "max",
                        "is_enabled": false
                    },
                    "widescreen": {
                        "label": "Widescreen",
                        "value": 2400,
                        "default_value": 2400,
                        "direction": "min",
                        "is_enabled": false
                    }
                },
                "hasCustomBreakpoints": false
            },
            "version": "3.25.10",
            "is_static": false,
            "experimentalFeatures": {
                "e_font_icon_svg": true,
                "additional_custom_breakpoints": true,
                "container": true,
                "e_swiper_latest": true,
                "e_nested_atomic_repeaters": true,
                "e_optimized_control_loading": true,
                "e_onboarding": true,
                "e_css_smooth_scroll": true,
                "home_screen": true,
                "landing-pages": true,
                "nested-elements": true,
                "editor_v2": true,
                "link-in-bio": true,
                "floating-buttons": true
            },
            "urls": {
                "assets": "https:\/\/themes.envytheme.com\/liva\/wp-content\/plugins\/elementor\/assets\/",
                "ajaxurl": "https:\/\/themes.envytheme.com\/liva\/wp-admin\/admin-ajax.php",
                "uploadUrl": "https:\/\/themes.envytheme.com\/liva\/wp-content\/uploads"
            },
            "nonces": {
                "floatingButtonsClickTracking": "ffe01d7881"
            },
            "swiperClass": "swiper",
            "settings": {
                "page": [],
                "editorPreferences": []
            },
            "kit": {
                "active_breakpoints": ["viewport_mobile", "viewport_tablet"],
                "global_image_lightbox": "yes",
                "lightbox_enable_counter": "yes",
                "lightbox_enable_fullscreen": "yes",
                "lightbox_enable_zoom": "yes",
                "lightbox_enable_share": "yes",
                "lightbox_title_src": "title",
                "lightbox_description_src": "description"
            },
            "post": {
                "id": 144,
                "title": "Liva%20%E2%80%93%20eCommerce%20WordPress%20Theme",
                "excerpt": "",
                "featuredImage": false
            }
        };
        var elementorFrontendConfig = {
            "environmentMode": {
                "edit": false,
                "wpPreview": false,
                "isScriptDebug": false
            },
            "i18n": {
                "shareOnFacebook": "Share on Facebook",
                "shareOnTwitter": "Share on Twitter",
                "pinIt": "Pin it",
                "download": "Download",
                "downloadImage": "Download image",
                "fullscreen": "Fullscreen",
                "zoom": "Zoom",
                "share": "Share",
                "playVideo": "Play Video",
                "previous": "Previous",
                "next": "Next",
                "close": "Close",
                "a11yCarouselWrapperAriaLabel": "Carousel | Horizontal scrolling: Arrow Left & Right",
                "a11yCarouselPrevSlideMessage": "Previous slide",
                "a11yCarouselNextSlideMessage": "Next slide",
                "a11yCarouselFirstSlideMessage": "This is the first slide",
                "a11yCarouselLastSlideMessage": "This is the last slide",
                "a11yCarouselPaginationBulletMessage": "Go to slide"
            },
            "is_rtl": false,
            "breakpoints": {
                "xs": 0,
                "sm": 480,
                "md": 768,
                "lg": 1025,
                "xl": 1440,
                "xxl": 1600
            },
            "responsive": {
                "breakpoints": {
                    "mobile": {
                        "label": "Mobile Portrait",
                        "value": 767,
                        "default_value": 767,
                        "direction": "max",
                        "is_enabled": true
                    },
                    "mobile_extra": {
                        "label": "Mobile Landscape",
                        "value": 880,
                        "default_value": 880,
                        "direction": "max",
                        "is_enabled": false
                    },
                    "tablet": {
                        "label": "Tablet Portrait",
                        "value": 1024,
                        "default_value": 1024,
                        "direction": "max",
                        "is_enabled": true
                    },
                    "tablet_extra": {
                        "label": "Tablet Landscape",
                        "value": 1200,
                        "default_value": 1200,
                        "direction": "max",
                        "is_enabled": false
                    },
                    "laptop": {
                        "label": "Laptop",
                        "value": 1366,
                        "default_value": 1366,
                        "direction": "max",
                        "is_enabled": false
                    },
                    "widescreen": {
                        "label": "Widescreen",
                        "value": 2400,
                        "default_value": 2400,
                        "direction": "min",
                        "is_enabled": false
                    }
                },
                "hasCustomBreakpoints": false
            },
            "version": "3.25.10",
            "is_static": false,
            "experimentalFeatures": {
                "e_font_icon_svg": true,
                "additional_custom_breakpoints": true,
                "container": true,
                "e_swiper_latest": true,
                "e_nested_atomic_repeaters": true,
                "e_optimized_control_loading": true,
                "e_onboarding": true,
                "e_css_smooth_scroll": true,
                "home_screen": true,
                "landing-pages": true,
                "nested-elements": true,
                "editor_v2": true,
                "link-in-bio": true,
                "floating-buttons": true
            },
            "urls": {
                "assets": "https:\/\/themes.envytheme.com\/liva\/wp-content\/plugins\/elementor\/assets\/",
                "ajaxurl": "https:\/\/themes.envytheme.com\/liva\/wp-admin\/admin-ajax.php",
                "uploadUrl": "https:\/\/themes.envytheme.com\/liva\/wp-content\/uploads"
            },
            "nonces": {
                "floatingButtonsClickTracking": "ffe01d7881"
            },
            "swiperClass": "swiper",
            "settings": {
                "page": [],
                "editorPreferences": []
            },
            "kit": {
                "active_breakpoints": ["viewport_mobile", "viewport_tablet"],
                "global_image_lightbox": "yes",
                "lightbox_enable_counter": "yes",
                "lightbox_enable_fullscreen": "yes",
                "lightbox_enable_zoom": "yes",
                "lightbox_enable_share": "yes",
                "lightbox_title_src": "title",
                "lightbox_description_src": "description"
            },
            "post": {
                "id": 144,
                "title": "Liva%20%E2%80%93%20eCommerce%20WordPress%20Theme",
                "excerpt": "",
                "featuredImage": false
            }
        };
        var elementorFrontendConfig = {
            "environmentMode": {
                "edit": false,
                "wpPreview": false,
                "isScriptDebug": false
            },
            "i18n": {
                "shareOnFacebook": "Share on Facebook",
                "shareOnTwitter": "Share on Twitter",
                "pinIt": "Pin it",
                "download": "Download",
                "downloadImage": "Download image",
                "fullscreen": "Fullscreen",
                "zoom": "Zoom",
                "share": "Share",
                "playVideo": "Play Video",
                "previous": "Previous",
                "next": "Next",
                "close": "Close",
                "a11yCarouselWrapperAriaLabel": "Carousel | Horizontal scrolling: Arrow Left & Right",
                "a11yCarouselPrevSlideMessage": "Previous slide",
                "a11yCarouselNextSlideMessage": "Next slide",
                "a11yCarouselFirstSlideMessage": "This is the first slide",
                "a11yCarouselLastSlideMessage": "This is the last slide",
                "a11yCarouselPaginationBulletMessage": "Go to slide"
            },
            "is_rtl": false,
            "breakpoints": {
                "xs": 0,
                "sm": 480,
                "md": 768,
                "lg": 1025,
                "xl": 1440,
                "xxl": 1600
            },
            "responsive": {
                "breakpoints": {
                    "mobile": {
                        "label": "Mobile Portrait",
                        "value": 767,
                        "default_value": 767,
                        "direction": "max",
                        "is_enabled": true
                    },
                    "mobile_extra": {
                        "label": "Mobile Landscape",
                        "value": 880,
                        "default_value": 880,
                        "direction": "max",
                        "is_enabled": false
                    },
                    "tablet": {
                        "label": "Tablet Portrait",
                        "value": 1024,
                        "default_value": 1024,
                        "direction": "max",
                        "is_enabled": true
                    },
                    "tablet_extra": {
                        "label": "Tablet Landscape",
                        "value": 1200,
                        "default_value": 1200,
                        "direction": "max",
                        "is_enabled": false
                    },
                    "laptop": {
                        "label": "Laptop",
                        "value": 1366,
                        "default_value": 1366,
                        "direction": "max",
                        "is_enabled": false
                    },
                    "widescreen": {
                        "label": "Widescreen",
                        "value": 2400,
                        "default_value": 2400,
                        "direction": "min",
                        "is_enabled": false
                    }
                },
                "hasCustomBreakpoints": false
            },
            "version": "3.25.10",
            "is_static": false,
            "experimentalFeatures": {
                "e_font_icon_svg": true,
                "additional_custom_breakpoints": true,
                "container": true,
                "e_swiper_latest": true,
                "e_nested_atomic_repeaters": true,
                "e_optimized_control_loading": true,
                "e_onboarding": true,
                "e_css_smooth_scroll": true,
                "home_screen": true,
                "landing-pages": true,
                "nested-elements": true,
                "editor_v2": true,
                "link-in-bio": true,
                "floating-buttons": true
            },
            "urls": {
                "assets": "https:\/\/themes.envytheme.com\/liva\/wp-content\/plugins\/elementor\/assets\/",
                "ajaxurl": "https:\/\/themes.envytheme.com\/liva\/wp-admin\/admin-ajax.php",
                "uploadUrl": "https:\/\/themes.envytheme.com\/liva\/wp-content\/uploads"
            },
            "nonces": {
                "floatingButtonsClickTracking": "ffe01d7881"
            },
            "swiperClass": "swiper",
            "settings": {
                "page": [],
                "editorPreferences": []
            },
            "kit": {
                "active_breakpoints": ["viewport_mobile", "viewport_tablet"],
                "global_image_lightbox": "yes",
                "lightbox_enable_counter": "yes",
                "lightbox_enable_fullscreen": "yes",
                "lightbox_enable_zoom": "yes",
                "lightbox_enable_share": "yes",
                "lightbox_title_src": "title",
                "lightbox_description_src": "description"
            },
            "post": {
                "id": 144,
                "title": "Liva%20%E2%80%93%20eCommerce%20WordPress%20Theme",
                "excerpt": "",
                "featuredImage": false
            }
        };
        var elementorFrontendConfig = {
            "environmentMode": {
                "edit": false,
                "wpPreview": false,
                "isScriptDebug": false
            },
            "i18n": {
                "shareOnFacebook": "Share on Facebook",
                "shareOnTwitter": "Share on Twitter",
                "pinIt": "Pin it",
                "download": "Download",
                "downloadImage": "Download image",
                "fullscreen": "Fullscreen",
                "zoom": "Zoom",
                "share": "Share",
                "playVideo": "Play Video",
                "previous": "Previous",
                "next": "Next",
                "close": "Close",
                "a11yCarouselWrapperAriaLabel": "Carousel | Horizontal scrolling: Arrow Left & Right",
                "a11yCarouselPrevSlideMessage": "Previous slide",
                "a11yCarouselNextSlideMessage": "Next slide",
                "a11yCarouselFirstSlideMessage": "This is the first slide",
                "a11yCarouselLastSlideMessage": "This is the last slide",
                "a11yCarouselPaginationBulletMessage": "Go to slide"
            },
            "is_rtl": false,
            "breakpoints": {
                "xs": 0,
                "sm": 480,
                "md": 768,
                "lg": 1025,
                "xl": 1440,
                "xxl": 1600
            },
            "responsive": {
                "breakpoints": {
                    "mobile": {
                        "label": "Mobile Portrait",
                        "value": 767,
                        "default_value": 767,
                        "direction": "max",
                        "is_enabled": true
                    },
                    "mobile_extra": {
                        "label": "Mobile Landscape",
                        "value": 880,
                        "default_value": 880,
                        "direction": "max",
                        "is_enabled": false
                    },
                    "tablet": {
                        "label": "Tablet Portrait",
                        "value": 1024,
                        "default_value": 1024,
                        "direction": "max",
                        "is_enabled": true
                    },
                    "tablet_extra": {
                        "label": "Tablet Landscape",
                        "value": 1200,
                        "default_value": 1200,
                        "direction": "max",
                        "is_enabled": false
                    },
                    "laptop": {
                        "label": "Laptop",
                        "value": 1366,
                        "default_value": 1366,
                        "direction": "max",
                        "is_enabled": false
                    },
                    "widescreen": {
                        "label": "Widescreen",
                        "value": 2400,
                        "default_value": 2400,
                        "direction": "min",
                        "is_enabled": false
                    }
                },
                "hasCustomBreakpoints": false
            },
            "version": "3.25.10",
            "is_static": false,
            "experimentalFeatures": {
                "e_font_icon_svg": true,
                "additional_custom_breakpoints": true,
                "container": true,
                "e_swiper_latest": true,
                "e_nested_atomic_repeaters": true,
                "e_optimized_control_loading": true,
                "e_onboarding": true,
                "e_css_smooth_scroll": true,
                "home_screen": true,
                "landing-pages": true,
                "nested-elements": true,
                "editor_v2": true,
                "link-in-bio": true,
                "floating-buttons": true
            },
            "urls": {
                "assets": "https:\/\/themes.envytheme.com\/liva\/wp-content\/plugins\/elementor\/assets\/",
                "ajaxurl": "https:\/\/themes.envytheme.com\/liva\/wp-admin\/admin-ajax.php",
                "uploadUrl": "https:\/\/themes.envytheme.com\/liva\/wp-content\/uploads"
            },
            "nonces": {
                "floatingButtonsClickTracking": "ffe01d7881"
            },
            "swiperClass": "swiper",
            "settings": {
                "page": [],
                "editorPreferences": []
            },
            "kit": {
                "active_breakpoints": ["viewport_mobile", "viewport_tablet"],
                "global_image_lightbox": "yes",
                "lightbox_enable_counter": "yes",
                "lightbox_enable_fullscreen": "yes",
                "lightbox_enable_zoom": "yes",
                "lightbox_enable_share": "yes",
                "lightbox_title_src": "title",
                "lightbox_description_src": "description"
            },
            "post": {
                "id": 144,
                "title": "Liva%20%E2%80%93%20eCommerce%20WordPress%20Theme",
                "excerpt": "",
                "featuredImage": false
            }
        };
    </script>
    <script src="https://themes.envytheme.com/liva/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.25.10" id="elementor-frontend-js"></script>
    <script src="https://themes.envytheme.com/liva/wp-content/plugins/woocommerce/assets/js/jquery-cookie/jquery.cookie.min.js?ver=1.4.1-wc.9.4.3" id="jquery-cookie-js" defer data-wp-strategy="defer"></script>
    <script id="liva-location-filter-js-extra">
        var locationfilter = {
            "popup": "location"
        };
    </script>
    <script src="https://themes.envytheme.com/liva/wp-content/plugins/liva-toolkit/inc/taxonomy/location-filter.js?ver=6.7.1" id="liva-location-filter-js"></script>
</body>

</html>
