//Author: Adam Kocić [Falkan3]

var G_Index_Controller = (function () {
    var Local_index_vars = {
        'elements': {

        }
    };

    return {
        initElements: function () {

        },
        
        /* ---- fncs ---- */
        xxx: function () {

        }
    };
})();

$(document).ready(function (e) {
    $('.carousel').slick({
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear'
    });
    $('.flipper-main-container').flipper({'container': true});
    $('.iterator-container-1').iterator({});
    $('.iterator-container-2').iterator({});
    $('select').fancySelect().niceScroll({cursorborder:"",cursorcolor:"#ffaa00",cursorwidth:"8px",autohidemode:false});
});

$(window).scroll(function () {

});

$(window).on('resize', function () {

});

$(window).on("load", function () {

});

//Check if mouse leaves the document
document.addEventListener('mouseleave', function(e){

    var top = e.pageY;
    var right = document.body.clientWidth - e.pageX;
    var bottom = document.body.clientHeight - e.pageY;
    var left = e.pageX;

    if(top < document.body.scrollTop + 10 || right < 20 || left < 20){
        console.log("Mouse out of document bounds")
    }

});

/* ----------------------------  Misc functions ----------------------------  */