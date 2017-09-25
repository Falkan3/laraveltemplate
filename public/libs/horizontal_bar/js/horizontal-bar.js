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
                showTotal: true,//$this.data('show-total'),
                totalValueChange: $this.data('total-value-change'),
                totalValueChangeColor: $this.data('total-value-change-color'),
                totalValueChangeIcon: $this.data('total-value-change-icon'),
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

        //legend init
        $this.find('.legend').remove();
        if (settings.showLegend) {
            var legend = $('<div class="legend"></div>');
            $this.find('.barGraph').first().prepend(legend);

            //total
            var totalValue = 0;
        }

        /* -- */

        for (var i = 0; i < data.length; i++) {
            var $item = data[i].element ? $(data[i].element) : $(settings.items[i]);
            if (settings.clear || !$item.length) {
                $item = $('<div class="graph-bar"></div>');
                barBack.append($item);
            }

            //data
            //params
            var dataVal = data[i].val_num ? data[i].val_num : $item.data('value');
            var dataPercentage = data[i].percentage ? data[i].percentage : $item.data('percentage');
            var dataWidth = null;
            var dataBackgroundColor = data[i].background_color ? data[i].background_color : $item.data('background-color');
            var dataThicc = data[i].thicc ? data[i].thicc : $item.data('thicc');
            var dataAnimated = data[i].animated ? data[i].animated : $item.data('animated');
            //legend
            var legendText = null;
            var valueChange = null;
            var valueChangeColor = null;
            var valueChangeIcon = null;
            var valueChangeAppendix = null;

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
                valueChangeAppendix = data[i].value_change_appendix ? //if
                    data[i].value_change_appendix : //true
                    $item.data('value-change-appendix') ? //false: if
                        $item.data('value-change-appendix') : //true
                        'p.p.'; //false

                var little_square = $('<div class="little_square"></div>');
                var legend_item_label = $('<span></span>');
                var legend_item_text = '<span>' + (legendText + ": " + dataVal + ' (' + dataPercentage + '%)') + '</span>';
                totalValue += dataVal;

                /* -- additional params to legend -- */
                if (valueChange) {
                    /* color */
                    valueChangeColor = setValueChangeColor(valueChangeColor);
                    /* icon */
                    valueChangeIcon = setValueChangeIcon(valueChangeIcon);

                    legend_item_text
                        += '<span class="ml">'
                        + '<span>(</span>'
                        + '<span style="color: ' + valueChangeColor + '">'
                        + valueChangeIcon
                        + '<span class="mr">' + valueChange + '</span>'
                        + '</span>'
                        + '<span>' + valueChangeAppendix + ')</span>'
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
            if (settings.showTotal) {
                //total
                var legend_item_total = $('<div class="legend-item"></div>');
                var legend_item_total_label = $('<span></span>');

                var legend_item_total_text = '<span>' + ('total: ' + totalValue) + '</span>';

                //add colored arrow if value change is set visible
                if (settings.totalValueChange) {
                    var legend_item_total_increase_percentage = settings.totalValueChange; //"(new_value / totalValue) * 100";
                    var totalValueChangeColor = settings.totalValueChangeColor ? settings.totalValueChangeColor : '';
                    var totalValueChangeIcon = settings.totalValueChangeIcon ? settings.totalValueChangeIcon : '';

                    /* color */
                    totalValueChangeColor = setValueChangeColor(totalValueChangeColor);
                    /* icon */
                    totalValueChangeIcon = setValueChangeIcon(totalValueChangeIcon);

                    legend_item_total_text
                        += '<span class="ml">'
                        + '<span>(</span>'
                        + '<span style="color: ' + totalValueChangeColor + '">'
                        + totalValueChangeIcon
                        + '<span>' + legend_item_total_increase_percentage + '%' + '</span>'
                        + '</span>'
                        + '<span>' + ')</span>'
                        + '</span>';
                    //' (' + legend_item_total_increase_percentage + '%)';
                }

                legend_item_total_label.html(legend_item_total_text);
                legend_item_total.append(legend_item_total_label);

                //add total to legend in front of other labels
                legend.prepend(legend_item_total);
            }
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

        function setValueChangeColor(input) {
            var valueChangeColor = input;
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
                    valueChangeColor = 'inherit';
                    break;
            }

            return valueChangeColor;
        }

        function setValueChangeIcon(input) {
            var valueChangeIcon = input;
            switch (valueChangeIcon) {
                case 'up':
                    valueChangeIcon = '<span class="mr"><i class="fa fa-arrow-up" aria-hidden="true"></i></span>';
                    break;
                case 'down':
                    valueChangeIcon = '<span class="mr"><i class="fa fa-arrow-down" aria-hidden="true"></i></span>';
                    break;
                default:
                    valueChangeIcon = '';
                    break;
            }

            return valueChangeIcon;
        }

        return $this;
    };
})(jQuery);