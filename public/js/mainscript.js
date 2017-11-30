//Author: Adam Kocić [Falkan3]

var Global_vars_lapp_app = {
    'constants': {
        window_initial_width: null,
    },
    window: null,
    body_html: null,
    ResizeGlobalTimer: [],
};

var G_Main_Controller = (function () {
    var Local_vars = {
        'elements': {
            'hideAll': null,
            'backToTop': null,
            'nav': null,
            'sidebar': {
                page_wrapper: null,
                trigger: null,
                overlay: null,
                isClosed: null
            }
        }
    };

    return {
        initElementsPrim: function () {
            //window
            Global_vars_lapp_app.window = $(window);
            Global_vars_lapp_app.constants.window_initial_width = Global_vars_lapp_app.window.width();
        },
        initElements: function () {
            //body, html
            Global_vars_lapp_app.body_html = $("body, html");

            //hideAll
            Local_vars.elements.hideAll = $('#hideAll');

            //backToTop
            Local_vars.elements.backToTop = $('#backtotop');

            //nav
            //top menu
            Local_vars.elements.nav = $('.navbar.navbar-default');
            //sidebar
            G_Main_Controller.init_sidebar_menu();

            G_Main_Controller.Scroll_navbarShrink();
            G_Main_Controller.Scroll_backToTop();
            G_Main_Controller.Delayed_resize_init();

            Global_vars_lapp_app.window.scroll(function () {
                G_Main_Controller.Scroll_backToTop();
                G_Main_Controller.Scroll_navbarShrink();
            });

            G_Main_Controller.initOnEvents();

            G_Main_Controller.Load_hideAll();
        },

        /* ---- Back to top visibility ---- */
        Load_hideAll: function () {
            if (!Local_vars.elements.hideAll) {
                Local_vars.elements.hideAll = $('#hideAll');
            }

            if (Local_vars.elements.hideAll) {
                Local_vars.elements.hideAll.slideUp();
            }
        },
        Scroll_backToTop: function () {
            if (Global_vars_lapp_app.window.scrollTop() > 100) {
                Local_vars.elements.backToTop.addClass('visible');
            }
            else {
                Local_vars.elements.backToTop.removeClass('visible');
            }
        },
        /* ---- /Back to top visibility ---- */

        /* ---- Shrink navbar ---- */
        Scroll_navbarShrink: function () {
            if (Global_vars_lapp_app.window.scrollTop() > 0) {
                Local_vars.elements.nav.addClass('shrinked');
            }
            else {
                Local_vars.elements.nav.removeClass('shrinked');
            }
        },
        /* ---- /Shrink navbar ---- */

        /* ---- Sidebar ---- */
        init_sidebar_menu: function() {
            Local_vars.elements.sidebar.trigger = $('.hamburger');
            Local_vars.elements.sidebar.overlay = $('.overlay');
            Local_vars.elements.sidebar.isClosed = false;
            Local_vars.elements.sidebar.page_wrapper = $('#page-wrapper');

            Local_vars.elements.sidebar.trigger.on('click', function () {
                G_Main_Controller.toggle_sidebar();
            });

            /*
            $('[data-toggle="offcanvas"]').on('click', function () {
                Local_vars.elements.sidebar.page_wrapper.toggleClass('toggled');
            });
            */

            //dropdown submenu click toggle
            var sidebar_nav = $('.sidebar-nav');
            var dropdown_toggle = sidebar_nav.find('.dropdown-submenu > .dropdown-toggle');

            /*
            sidebar_nav.find('.dropdown').on({
                "shown.bs.dropdown": function() { this.closable = false; },
                "click":             function() { this.closable = true; },
                "hide.bs.dropdown":  function() { return this.closable; }
            });
            */
            dropdown_toggle.on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                var $this = $(this);
                $this.next('.dropdown-menu').toggleClass('open');
            });
            sidebar_nav.find('.dropdown > a').on('click.dropdown.data-api', function () {
                $(this).next('.dropdown-menu').find('.dropdown-submenu .dropdown-menu').removeClass('open');
            });

            /* overlay closing sidebar */
            Local_vars.elements.sidebar.overlay.on('click', function() {
                G_Main_Controller.toggle_sidebar();
            });
        },
        toggle_sidebar: function() {
            G_Main_Controller.sidebar_hamburger_cross();
            Local_vars.elements.sidebar.page_wrapper.toggleClass('toggled');
        },
        sidebar_hamburger_cross: function () {
            if (Local_vars.elements.sidebar.isClosed === true) {
                Local_vars.elements.sidebar.overlay.hide();
                Local_vars.elements.sidebar.trigger.removeClass('is-open');
                Local_vars.elements.sidebar.trigger.addClass('is-closed');
                Local_vars.elements.sidebar.isClosed = false;
            } else {
                Local_vars.elements.sidebar.overlay.show();
                Local_vars.elements.sidebar.trigger.removeClass('is-closed');
                Local_vars.elements.sidebar.trigger.addClass('is-open');
                Local_vars.elements.sidebar.isClosed = true;
            }
        },
        /* ---- /Sidebar ---- */

        initOnEvents: function() {
            //touchstart hover for divs
            $('[data="ontouchstart-hover]"]').on('touchstart', function() {
                this.classList.toggle('hover')
            });
        },

        /* --- Helpers --- */
        Viewport: function () {
            var e = window, a = 'inner';
            if (!('innerWidth' in window )) {
                a = 'client';
                e = document.documentElement || document.body;
            }
            return {width: e[a + 'Width'], height: e[a + 'Height']};
        },

        //ANCHORS -------------------------------------------------------

        IgnoreNullLinks: function () {
            $("a").click(function (e) {
                var dest = G_Main_Controller.RemoveBaseUrl($(this).attr('href'), 1);
                if (dest[0] === '\#') {
                    if (dest.length > 1) {
                        if (dest === '\#top') {
                            Global_vars_lapp_app.body_html.animate({
                                scrollTop: 0
                            }, 600);
                            return false;
                        }
                        else {
                            var $dest = $(dest);
                            if ($dest.length) {
                                e.preventDefault();
                                if (Global_vars_lapp_app.window.scrollTop() > 150) {
                                    Global_vars_lapp_app.body_html.animate({
                                        scrollTop: $dest.offset().top - 70
                                    }, 600);
                                }
                                else {
                                    Global_vars_lapp_app.body_html.animate({
                                        scrollTop: $dest.offset().top - 100
                                    }, 600);
                                }
                            }
                        }
                    } else {
                        e.preventDefault();
                    }
                }
            });
        },

        //ANCHORS /--------------------------------------------------------

        Timeout: function (fn, time) {
            var timer = false;
            this.start = function () {
                if (!this.isRunning())
                    timer = setTimeout(fn, time);
            };
            this.stop = function () {
                if (this.isRunning()) {
                    clearTimeout(timer);
                    timer = false;
                }
            };
            this.isRunning = function () {
                return timer !== false;
            };
            this.reset = function () {
                this.stop();
                this.start();
            }
        },
        Interval: function (fn, time) {
            var timer = false;
            this.start = function () {
                if (!this.isRunning())
                    timer = setInterval(fn, time);
            };
            this.stop = function () {
                if (this.isRunning()) {
                    clearInterval(timer);
                    timer = false;
                }
            };
            this.isRunning = function () {
                return timer !== false;
            };
            this.reset = function () {
                this.stop();
                this.start();
            }
        },
        Delayed_resize_init: function () {
            Global_vars_lapp_app.ResizeGlobalTimer = [];

            /*
             Global_vars_lapp_app.window.on('resize', function () {
             if(Global_vars_lapp_app.ResizeGlobalTimer.length) {
             for(var i=0;i<Global_vars_lapp_app.ResizeGlobalTimer.length;i++) {
             Global_vars_lapp_app.ResizeGlobalTimer[i].reset();
             }
             }
             });
             */
        },
        Delayed_resize: function (name, fn, time) {
            if (time === undefined || time === null)
                time = 1000;

            if (!Global_vars_lapp_app.ResizeGlobalTimer)
                Global_vars_lapp_app.ResizeGlobalTimer = [];
            if (name in Global_vars_lapp_app.ResizeGlobalTimer) {
                clearTimeout(Global_vars_lapp_app.ResizeGlobalTimer[name]);
                Global_vars_lapp_app.ResizeGlobalTimer[name] = setTimeout(fn, time);
                //Global_vars_lapp_app.ResizeGlobalTimer[name].reset();
            }
            else {
                Global_vars_lapp_app.ResizeGlobalTimer[name] = setTimeout(fn, time);
                //Global_vars_lapp_app.ResizeGlobalTimer[name] = new G_Main_Controller.Interval(fn,time);
            }
        },
        Delayed_resize_stopAll: function () {
            if (Global_vars_lapp_app.ResizeGlobalTimer.length) {
                for (var i = 0; i < Global_vars_lapp_app.ResizeGlobalTimer.length; i++) {
                    clearTimeout(Global_vars_lapp_app.ResizeGlobalTimer[i]);
                    //Global_vars_lapp_app.ResizeGlobalTimer[i].stop();
                }
            }
            Global_vars_lapp_app.ResizeGlobalTimer = [];
        },
        fix_css_animations: function() {
            if(G_Main_Controller.Viewport().width <= 991) {
                $('.wow').each(function() {
                    var $this = $(this);
                    if($this.hasClass('slideInRightResize')) {
                        $this.css('width', '100%');
                    }
                });
            } else {
                $('.wow').each(function() {
                    var $this = $(this);
                    if($this.hasClass('slideInRightResize')) {
                        $this.css('width', '50%');
                    }
                });
            }
        },
        RemoveBaseUrl: function (url, rm_first_slash) {
            /*
             * Replace base URL in given string, if it exists, and return the result.
             *
             * e.g. "http://localhost:8000/api/v1/blah/" becomes "/api/v1/blah/"
             *      "/api/v1/blah/" stays "/api/v1/blah/"
             */
            var baseUrlPattern = /^https?:\/\/[a-z\:0-9.]+/;
            if (rm_first_slash != undefined && rm_first_slash == 1)
                baseUrlPattern = /^https?:\/\/[a-z\:0-9.\/]+/;
            var result = "";

            var match = baseUrlPattern.exec(url);
            if (match != null) {
                result = match[0];
            }

            if (result.length > 0) {
                url = url.replace(result, "");
            }

            return url;
        },
    };
})();

G_Main_Controller.initElementsPrim();

$(document).ready(function (e) {
    G_Main_Controller.initElements();
    G_Main_Controller.IgnoreNullLinks();
});

/* Lazy loading */

var lazyBgs = $("div.lazy, section.lazy, article.lazy");
lazyBgs.css('background-image', "none");
lazyBgs.lazyload({
    effect: "fadeIn",
    effectTime: 2000,
    threshold: 0
});
var lazyImgs = $("img.lazy");
lazyImgs.attr('src', '');
lazyImgs.lazyload({
    event: "lazyload",
    effect: "fadeIn",
    effectTime: 2000,
    threshold: 0
}).trigger("lazyload");

/* /Lazy loading */

Global_vars_lapp_app.window.scroll(function () {

});

Global_vars_lapp_app.window.on('resize', function () {
    //G_Main_Controller.Delayed_resize('fn_name', G_Main_Controller.fn, 500);
    G_Main_Controller.Delayed_resize('fix_css_animations', G_Main_Controller.fix_css_animations, 500);
});

Global_vars_lapp_app.window.on("load", function () {
    G_Main_Controller.Load_hideAll();
});

/* ----------------------------  Misc functions ----------------------------  */

function numberFormat(number, decimals, dec_point, thousands_sep) {
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        toFixedFix = function (n, prec) {
            // Fix for IE parseFloat(0.55).toFixed(0) = 0;
            var k = Math.pow(10, prec);
            return Math.round(n * k) / k;
        },
        s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}