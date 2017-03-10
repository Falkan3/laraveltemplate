var G_Main_Controller = (function () {
    var Global_vars_lapp_app = {
        'elements': {
            'backToTop': null,
        }
    };

    return {
        initElements: function () {
            Global_vars_lapp_app.elements.backToTop = $('#backtotop');
        },

        /* ---- Back to top visibility ---- */
        Scroll_backToTop: function () {
            if ($(window).scrollTop() > 100) {
                Global_vars_lapp_app.elements.backToTop.addClass('visible');
            }
            else {
                Global_vars_lapp_app.elements.backToTop.removeClass('visible');
            }
        },
        /* ---- /Back to top visibility ---- */

    };
})();

$(document).ready(function (e) {
    G_Main_Controller.initElements();
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
});

$(window).on('resize', function () {

});

$(window).on("load", function () {

});

/* ----------------------------  Misc functions ----------------------------  */