var G_Main_Controller = (function () {
    var Global_vars_lapp_app = {
        'elements': {
            'hideAll': null,
            'backToTop': null,
        }
    };

    return {
        initElements: function () {
            //hideAll
            Global_vars_lapp_app.elements.hideAll = $('#hideAll');
            //backToTop
            Global_vars_lapp_app.elements.backToTop = $('#backtotop');
            //nav
            Global_vars_lapp_ak.elements.nav = $('.navbar.navbar-default');
        },

        /* ---- Back to top visibility ---- */
        Load_hideAll: function() {
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
        }
        /* ---- /Shrink navbar ---- */

    };
})();

G_Main_Controller.initElements();

$(document).ready(function (e) {

});

/* Lazy loading */

$("div.lazy, sectgion.lazy, article.lazy").css('background-image', "none");
$("div.lazy, sectgion.lazy, article.lazy").lazyload({
    effect : "fadeIn",
    effectTime: 2000,
    threshold: 0
});
$("img.lazy").attr('src', '');
$("img.lazy").lazyload({
    event: "lazyload",
    effect : "fadeIn",
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
        if(dest.length > 1) {
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
            return false;
        }
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

});

/* ----------------------------  Misc functions ----------------------------  */