var G_Main_Controller = (function () {
    var Global_vars_lapp_app = {
        'elements': {
            'hideAll': null,
            'backToTop': null,
        },
    };

    return {
        initElements: function () {
            //hideAll
            Global_vars_lapp_app.elements.hideAll = $('#hideAll');
            //backToTop
            Global_vars_lapp_app.elements.backToTop = $('#backtotop');
            //nav
            Global_vars_lapp_app.elements.nav = $('.navbar.navbar-default');
        },

        /* ---- Back to top visibility ---- */
        Load_hideAll: function () {
            Global_vars_lapp_app.elements.hideAll.css('display', 'none');
        },
        Scroll_backToTop: function () {
            if ($(window).scrollTop() > 100) {
                Global_vars_lapp_app.elements.backToTop.addClass('visible');
            }
            else {
                Global_vars_lapp_app.elements.backToTop.removeClass('visible');
            }
        },
        /* ---- /Back to top visibility ---- */
        /* ---- Shrink navbar ---- */
        Scroll_navbarShrink: function () {
            if ($(window).scrollTop() > 0) {
                Global_vars_lapp_app.elements.nav.addClass('shrinked');
            }
            else {
                Global_vars_lapp_app.elements.nav.removeClass('shrinked');
            }
        },
        /* ---- /Shrink navbar ---- */

        /* --- Helpers --- */
        Viewport: function () {
            var e = window, a = 'inner';
            if (!('innerWidth' in window )) {
                a = 'client';
                e = document.documentElement || document.body;
            }
            return {width: e[a + 'Width'], height: e[a + 'Height']};
        },
        Interval: function(fn, time) {
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

    };
})();

G_Main_Controller.initElements();

$(document).ready(function (e) {

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

//ANCHORS -------------------------------------------------------

/*
 $("#backtotop").click(function (e) {
 e.preventDefault();
 $("body,html").animate({
 scrollTop: 0
 }, 600);
 return false;
 });
 */

$("a").click(function (e) {
    var dest = $(this).attr('href');
    if (dest[0] === '\#') {
        e.preventDefault();
        if (dest.length > 1) {
            if (dest === '\#top') {
                $("body,html").animate({
                    scrollTop: 0
                }, 600);
                return false;
            }
            else {
                if ($(window).scrollTop() > 150) {
                    $("body,html").animate({
                        scrollTop: $(dest).offset().top - 70
                    }, 600);
                }
                else {
                    $("body,html").animate({
                        scrollTop: $(dest).offset().top - 100
                    }, 600);
                }
            }
        }
        return false;
    }
});

//ANCHORS /--------------------------------------------------------

$(window).scroll(function () {
    G_Main_Controller.Scroll_backToTop();
    G_Main_Controller.Scroll_navbarShrink();
});

$(window).on('resize', function () {

});

$(window).on("load", function () {
    G_Main_Controller.Load_hideAll();
});

/* ----------------------------  Misc functions ----------------------------  */