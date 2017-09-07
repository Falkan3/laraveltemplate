/*!
 * horizontal-bar.js
 * Version: 0.0.1(Beta)
 *
 * Copyright 2017 Adam Kocić
 * Released under the MIT license.
 *
 * dependency: utility.js
 */
(function ($, undefined) {
    $.fn.drawHorizontalBar = function (data, options) {
        /*
        data = { 0: { "element": el, "val_num": 20,... } }
         */
        var $this = this,
            barBack = $this.find('.graph-barBack'),

            settings = $.extend({
                items: $this.find('.graph-bar'),
                multiple: $this.hasClass('multiple'),
                showLegend: $this.data('show-legend'),
                clear: false,
                animationSpeed: 1000,

                beforeDraw: function () {

                },
                afterDrawn: function () {
                },
                onPathLeave: function (e, data) {
                }
            }, options);

        settings.beforeDraw.call($this);

        if (data.length) {
            if (data.length < settings.items.length) {
                var x = 0;
                var items_to_remove = [];
                for (x = data.length; x < settings.items.length; x++) {
                    items_to_remove.push(settings.items[x]);
                }
                console.log(items_to_remove);
                $(items_to_remove).each(function() {
                    var $this = $(this);
                    //set timeout to alleviate erroneous css transition behavior
                    $this.css('width', 0);
                    setTimeout(function () {
                        $this.remove();
                    }, settings.animationSpeed);

                    //use this if not using css transitions
                    /*
                    $this.animate(
                        {'width': 0}, settings.animationSpeed, function () {
                            $this.remove();
                        }
                    );
                    */
                });
            }
        } else {
            data = settings.items;
        }
        /* cleanup */
        if (settings.clear) {
            barBack.empty();
        } else {
            $this.find('.clearfix').remove();
        }

        if (settings.showLegend) {
            $this.find('.legend').remove();
            var legend = $('<div class="legend"></div>');
        }
        /* -- */

        for (var i = 0; i < data.length; i++) {
            var $item = data[i].element ? $(data[i].element) : $(settings.items[i]);
            if (settings.clear || !$item.length) {
                $item = $('<div class="graph-bar"></div>');
                barBack.append($item);
            }

            //data
            var dataVal = data[i].val_num ? data[i].val_num : $item.data('value');
            var dataPercentage = data[i].percentage ? data[i].percentage : $item.data('percentage');
            var dataWidth = null;
            var dataBackgroundColor = data[i].background_color ? data[i].background_color : $item.data('background-color');
            var dataThicc = data[i].thicc ? data[i].thicc : $item.data('thicc');
            var dataAnimated = data[i].animated ? data[i].animated : $item.data('animated');
            var legendText = null;
            var valueChange = null;
            var valueChangeColor = null;
            var valueChangeIcon = null;

            dataWidth = dataPercentage;

            /* -- */

            $item.attr({'data-value': dataVal,'data-percentage': dataPercentage});

            var graph_legend = $item.find('.graph-legend');
            if (!graph_legend.length) {
                graph_legend = $('<div class="graph-legend"></div>');
                $item.append(graph_legend);
            }
            graph_legend.html(dataVal);

            if (dataBackgroundColor) {
                $item.css("background-color", dataBackgroundColor);
                $item.css("color", G_Utility_Controller.ShadeColor(dataBackgroundColor, -40));
            }
            if (dataThicc) {
                $item.addClass('thicc');
            }
            if (dataAnimated) {
                $item.css('width', 0);
                $item.animate({'width': dataWidth + "%"}, settings.animationSpeed)
            } else {
                $item.css("width", dataWidth + "%");
            }

            if (settings.showLegend) {
                legendText = data[i].legend_text ? data[i].legend_text : $item.data('legend-text');
                valueChange = data[i].value_change ? data[i].value_change : $item.data('value-change');
                valueChangeColor = data[i].value_change_color ? data[i].value_change_color : $item.data('value-change-color');
                valueChangeIcon = data[i].value_change_icon ? data[i].value_change_icon : $item.data('value-change-icon');
                var little_square = $('<div class="little_square"></div>');
                var legend_item_label = $('<span></span>');
                var legend_item_text = '<span>' + (legendText + ": " + dataVal + ' (' + dataPercentage + '%)') + '</span>';

                /* -- additional params to legend -- */
                if (valueChange) {
                    /* color */
                    if (valueChangeColor) {
                        switch (valueChangeColor) {
                            case 'green':
                                valueChangeColor = 'rgb(0, 201, 8)';
                                break;
                            case 'red':
                                valueChangeColor = 'rgb(207, 32, 0)';
                                break;
                            case 'grey':
                                valueChangeColor = 'rgb(84, 83, 73)';
                                break;
                            default:
                                break;
                        }
                    } else {
                        valueChangeColor = 'inherit';
                    }
                    /* icon */
                    if (valueChangeIcon) {
                        switch (valueChangeIcon) {
                            case 'up':
                                valueChangeIcon = '<span class="mr"><i class="fa fa-arrow-up" aria-hidden="true"></i></span>';
                                break;
                            case 'down':
                                valueChangeIcon = '<span class="mr"><i class="fa fa-arrow-down" aria-hidden="true"></i></span>';
                                break;
                            default:
                                break;
                        }
                    } else {
                        valueChangeIcon = '';
                    }

                    legend_item_text
                        += '<span class="ml">'
                        + '<span>(</span>'
                        + '<span style="color: ' + valueChangeColor + '">'
                        + valueChangeIcon
                        + '<span class="mr">' + valueChange + '</span>'
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
        }

        if (settings.showLegend) {
            $this.find('.barGraph').first().prepend(legend);
        }
        if (settings.multiple) {
            $this.find('.graph-barBack').append('<div class="clearfix"></div>');
        }

        /*
        function pathMouseLeave(e) {
            $tip.hide();
            settings.onPathLeave.apply($(this), [e, data]);
        }
        */

        /**
         * @return {number}
         */
        function Max(arr) {
            return Math.max.apply(null, arr);
        }

        /**
         * @return {number}
         */
        function Min(arr) {
            return Math.min.apply(null, arr);
        }

        function isNumber(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }

        function CapValue(valueToCap, maxValue, minValue) {
            if (isNumber(maxValue) && valueToCap > maxValue) return maxValue;
            if (isNumber(minValue) && valueToCap < minValue) return minValue;
            return valueToCap;
        }

        return $this;
    }
    ;
})(jQuery);