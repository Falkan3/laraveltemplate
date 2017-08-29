//Author: Adam Kocić [Falkan3]

var G_Index_Controller = (function () {
    var Local_vars = {
        'elements': {
            clickscore_doughnut_piechart: null,
            device_doughnut_chart: null
        }
    };

    return {
        initElements: function () {
            G_Index_Controller.initDoughnutCharts();
            G_Index_Controller.initHorizontalBarCharts();
        },
        
        /* ---- fncs ---- */
        initDoughnutCharts: function() {
            Local_vars.elements.clickscore_doughnut_piechart = $("#clickscore_doughnut_chart");
            Local_vars.elements.device_doughnut_chart = $("#device_doughnut_chart");

            G_Index_Controller.drawDoughnutCharts();
            Global_vars_lapp_app.window.on('resize', function() {
                if(Global_vars_lapp_app.window.width() !== Global_vars_lapp_app.contants.window_initial_width) {
                    G_Index_Controller.resizeDoughnutCharts();
                }
            });
        },
        drawDoughnutCharts: function () {
            Local_vars.elements.clickscore_doughnut_piechart.drawDoughnutChart([
                {title: "OK", value: Number(Local_vars.elements.clickscore_doughnut_piechart.attr('data-ok')), color: "#51c855"},
                {title: "Fraud", value: Number(Local_vars.elements.clickscore_doughnut_piechart.attr('data-fraud')), color: "#FC4349"},
                {title: "Nieokreślony", value: Number(Local_vars.elements.clickscore_doughnut_piechart.attr('data-undefined')), color: "#212121"},
            ]);

            Local_vars.elements.device_doughnut_chart.drawDoughnutChart([
                {title: "PC", value: Number(Local_vars.elements.device_doughnut_chart.attr('data-pc')), color: "#03a5eb"},
                {title: "Mobile", value: Number(Local_vars.elements.device_doughnut_chart.attr('data-mobile')), color: "#324ad6"},
                {title: "Nieokreślony", value: Number(Local_vars.elements.device_doughnut_chart.attr('data-undefined')), color: "#212121"},
            ]);
        },
        resizeDoughnutCharts: function () {
            //cleanup
            var temp = $(".doughnut-chart, .chart-legend .ct");
            temp.empty();
            $('.doughnutTip').remove();

            G_Index_Controller.drawDoughnutCharts();
        },
        initHorizontalBarCharts: function() {
            //Bar charts
            // Produces width of .barChart
            $('.horizontal-bar-wrap').each(function () { //.horizontal-bar-wrap .graph-bar
                var $this = $(this);
                var items = $this.find('.graph-bar');
                var dataFloat = $this.hasClass('multiple');
                items.each(function() {
                    var $this = $(this);
                    var dataWidth = $this.data('value');
                    var dataBackgroundColor = $this.data('background-color');
                    $this.css("width", dataWidth + "%");
                    if(dataBackgroundColor) {
                        $this.css("background-color", dataBackgroundColor);
                        $this.css("color", G_Main_Controller.ShadeColor(dataBackgroundColor, 120));
                    }
                });
                if(dataFloat) {
                    $this.find('.graph-barBack').append('<div class="clearfix"></div>');
                }
            });
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
    $('.custom-scroll-box').mCustomScrollbar();

    G_Index_Controller.initElements();
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