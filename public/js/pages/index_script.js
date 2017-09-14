//Author: Adam Kocić [Falkan3]
/*
   dependency_js: mainscript, utility
*/

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
            G_Index_Controller.initStickyTable();
        },

        /* ---- fncs ---- */
        initDoughnutCharts: function () {
            Local_vars.elements.clickscore_doughnut_piechart = $("#clickscore_doughnut_chart");
            Local_vars.elements.device_doughnut_chart = $("#device_doughnut_chart");

            G_Index_Controller.drawDoughnutCharts();
            Global_vars_lapp_app.window.on('resize', function () {
                var wd = Global_vars_lapp_app.window.width();
                if (wd !== Global_vars_lapp_app.constants.window_initial_width) {
                    Global_vars_lapp_app.constants.window_initial_width = wd;
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
        initHorizontalBarCharts: function () {
            //Bar charts
            var hor_bars = $('.horizontal-bar-wrap');
            var temp;

            temp = hor_bars.eq(0).find('.graph-bar');
            hor_bars.eq(0).drawHorizontalBar(
                [{element: temp}],
                {showLegend: true}
            );

            temp = hor_bars.eq(1).find('.graph-bar');
            hor_bars.eq(1).drawHorizontalBar(
                [{element: temp, val_num: 100, percentage: 100}]
            );

            temp = hor_bars.eq(2).find('.graph-bar');
            hor_bars.eq(2).drawHorizontalBar(
                [{element: temp}]
            );

            temp = hor_bars.eq(3).find('.graph-bar');
            hor_bars.eq(3).drawHorizontalBar(
                [
                    {val_num: 40, percentage: 40, background_color: "#5ae", legend_text: "wysoki",
                    value_change: "+5.2", value_change_color: "green", value_change_icon: "up"},
                    {val_num: 30, percentage: 30, background_color: "#fae", legend_text: "średni"},
                    {val_num: 30, percentage: 30, background_color: "#baf", legend_text: "niski"}
                ],
                {showLegend: true}
            );

            setTimeout(function() {
                hor_bars.eq(3).drawHorizontalBar(
                    [
                        {val_num: 40, percentage: 10, background_color: "#ee343f", legend_text: "wysoki",
                            value_change: "+5.2", value_change_color: "green", value_change_icon: "up"},
                        {val_num: 30, percentage: 20, background_color: "#6cff46", legend_text: "średni"},
                        {val_num: 30, percentage: 20, background_color: "#31fff0", legend_text: "niski"},
                        {val_num: 30, percentage: 30, background_color: "#ffd1c3", legend_text: "test", thicc: true, animated: true}
                    ],
                    {showLegend: true}
                );
            }, 3500);

            setTimeout(function() {
                hor_bars.eq(3).drawHorizontalBar(
                    [
                        {val_num: 40, percentage: 10, background_color: "#ee343f", legend_text: "wysoki",
                            value_change: "+5.2", value_change_color: "green", value_change_icon: "up"},
                        {val_num: 30, percentage: 10, background_color: "#6cff46", legend_text: "średni"},
                        {val_num: 30, percentage: 10, background_color: "#31fff0", legend_text: "niski"},
                    ],
                    {showLegend: true}
                );
            }, 7000);
        },
        initHorizontalBarCharts_lite: function () {
            //Bar charts
            // Produces width of .barChart
            $('.horizontal-bar-wrap').each(function () { //.horizontal-bar-wrap .graph-bar
                var $this = $(this);
                var items = $this.find('.graph-bar');
                var dataFloat = $this.hasClass('multiple');
                var showLegend = $this.data('show-legend');
                if (showLegend) {
                    $this.find('.legend').remove();
                    var legend = $('<div class="legend"></div>');
                }
                items.each(function () {
                    var $this = $(this);
                    var dataVal = $this.data('value');
                    var dataPercentage = $this.data('percentage');
                    var dataWidth = dataPercentage;
                    var dataBackgroundColor = $this.data('background-color');
                    $this.find('.graph-legend').html(dataVal);
                    $this.css("width", dataWidth + "%");

                    if (dataBackgroundColor) {
                        $this.css("background-color", dataBackgroundColor);
                        $this.css("color", G_Utility_Controller.ShadeColor(dataBackgroundColor, -40));
                    }

                    if (showLegend) {
                        var legendText = $this.data('legend-text');
                        var little_square = $('<div class="little_square"></div>');
                        var legend_item_label = $('<span></span>');
                        var legend_item_text = '<span>' + (legendText + ": " + dataVal + ' (' + dataPercentage + '%)') + '</span>';

                        /* -- additional params to legend -- */
                        var value_change = $this.data('value-change');
                        if (value_change) {
                            /* color */
                            var value_change_color = $this.data('value-change-color');
                            if (value_change_color) {
                                switch (value_change_color) {
                                    case 'green':
                                        value_change_color = 'rgb(0, 201, 8)';
                                        break;
                                    case 'red':
                                        value_change_color = 'rgb(207, 32, 0)';
                                        break;
                                    case 'grey':
                                        value_change_color = 'rgb(84, 83, 73)';
                                        break;
                                    default:
                                        break;
                                }
                            } else {
                                value_change_color = 'inherit';
                            }
                            var value_change_icon = $this.data('value-change-icon');
                            if (value_change_icon) {
                                switch (value_change_icon) {
                                    case 'up':
                                        value_change_icon = '<span class="mr"><i class="fa fa-arrow-up" aria-hidden="true"></i></span>';
                                        break;
                                    case 'down':
                                        value_change_icon = '<span class="mr"><i class="fa fa-arrow-down" aria-hidden="true"></i></span>';
                                        break;
                                    default:
                                        break;
                                }
                            } else {
                                value_change_icon = '';
                            }

                            legend_item_text
                                += '<span class="ml">'
                                + '<span>(</span>'
                                + '<span style="color: ' + value_change_color + '">'
                                + value_change_icon
                                + '<span class="mr">' + value_change + '</span>'
                                + '</span>'
                                + '<span>p.p.)</span>'
                                + '</span>';
                        }
                        /* -- additional params to legend -- */
                        legend_item_label.html(legend_item_text);

                        if (dataBackgroundColor) {
                            little_square.css("background-color", dataBackgroundColor);
                        }
                        var legend_item = $('<div class="legend-item"></div>');
                        legend_item.append(little_square).append(legend_item_label);
                        legend.append(legend_item);
                    }
                });
                if (showLegend) {
                    $this.find('.barGraph').prepend(legend);
                }
                if (dataFloat) {
                    $this.find('.graph-barBack').first().append('<div class="clearfix"></div>');
                }
            });
        },
        initStickyTable: function () {
            /* custom table nav */

            var custom_table_nav = $('.table-nav');
            var custom_table_nav_a = custom_table_nav.find('a');
            custom_table_nav_a.on('click', function() {
                var $this = $(this);
                var $table = $this.closest('.container, .container-fluid').find('table');
                if($this.hasClass('scroll-to-btm')) {
                    var topOfTable = $table.offset().top + $table.outerHeight() - 70;
                    if(Global_vars_lapp_app.window.scrollTop() < topOfTable) {
                        Global_vars_lapp_app.body_html.animate({
                            scrollTop: topOfTable
                        }, 600);
                    }
                } else if($this.hasClass('scroll-to-top')) {
                    var bottomOfTable = $table.offset().top - 70;
                    if(Global_vars_lapp_app.window.scrollTop() > bottomOfTable) {
                        Global_vars_lapp_app.body_html.animate({
                            scrollTop: bottomOfTable
                        }, 600);
                    }
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
document.addEventListener('mouseleave', function (e) {

    var top = e.pageY;
    var right = document.body.clientWidth - e.pageX;
    var bottom = document.body.clientHeight - e.pageY;
    var left = e.pageX;

    if (top < document.body.scrollTop + 10 || right < 20 || left < 20) {
        console.log("Mouse out of document bounds")
    }

});

/* ----------------------------  Misc functions ----------------------------  */