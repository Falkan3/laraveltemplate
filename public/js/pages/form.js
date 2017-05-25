//Author: Adam Kocić [Falkan3]

var Global_Form_Page_vars = {
    elements: {
        roundsliders : []
    }
};

var G_Form_Page_Controller = (function () {
    var Local_pageform_vars = {
        'elements': {

        }
    };

    return {
        initElements: function () {
            G_Form_Page_Controller.initRoundSliders();
        },
        
        /* ---- fncs ---- */
        initRoundSliders: function () {
            //Amount
            var input_el = $("#f_n_amount");
            var slider = input_el.roundSlider({
                radius: 120,
                width: 3,
                handleSize: "+32",
                handleShape: "dot",
                sliderType: "range", //min-range
                startAngle: 90,
                step: 1000,
                max: 100000,
                min: 1000,
                value: 3000,
                drag: function(args) {
                    G_Form_Page_Controller.setBackgroundColorRoundSliders(args, 100000);
                    //console.log(args.id, args.value);
                },
                change: function(args) {
                    G_Form_Page_Controller.setBackgroundColorRoundSliders(args, 100000);
                },
                tooltipFormat: function(args) {
                    return numberFormat(args.value, 0, ',', ' ') + ' zł';
                }
            });
            Global_Form_Page_vars.elements.roundsliders.push({id: slider[0].id, slider: slider, input_el: input_el, range_color_el: input_el.parent().find('.rs-range-color')});

            $(window).on('resize', function () {
                G_Main_Controller.Delayed_resize('range_sliders_resize_refresh', G_Form_Page_Controller.refreshRoundSliders, 250);
            });

            //slider.roundSlider("setValue", 4000);
        },
        refreshRoundSliders: function() {
            for(var i=0;i<Global_Form_Page_vars.elements.roundsliders.length;i++) {
                Global_Form_Page_vars.elements.roundsliders[i].slider.roundSlider("refresh");
            }
        },
        setBackgroundColorRoundSliders: function(args, maxVal) {
            var el_to_change = Global_Form_Page_vars.elements.roundsliders.filter(function (el) {
                return el.id === args.id;
            });
            //el_to_change[0].input_el.val(args.value);
            //console.log(el_to_change[0].range_color_el)
            el_to_change[0].range_color_el.css('background-color', 'rgb('
                + Math.round(121 + 77 * (args.value / maxVal)) + ',' +
                + Math.round(53 - 13 * (args.value / maxVal)) + ',' +
                + Math.round(152 - 173 * (args.value / maxVal)) +
                ')'
            );
        },
    };
})();

$(document).ready(function (e) {
    G_Form_Page_Controller.initElements();
});

$(window).scroll(function () {

});

$(window).on('resize', function () {

});

$(window).on("load", function () {

});

/* ----------------------------  Misc functions ----------------------------  */

/* Round slider workarounds */

//Roundslider programatically set value
var _fn1 = $.fn.roundSlider.prototype._setValue;
$.fn.roundSlider.prototype._setValue = function (e) {
    _fn1.apply(this, arguments);
    this._raiseEvent("change");
};

//Freely move the handle
var srcFn1 = $.fn.roundSlider.prototype._processStepByValue;
$.fn.roundSlider.prototype._processStepByValue = function (value) {
    var d = srcFn1.call(this, value);
    if (!this._isHandleDrag) return d;
    this._lastValue = d.value;
    this._lastAngle = d.angle;
    return { value: this._lastValue, angle: this._valueToAngle(value) };
};

var srcFn2 = $.fn.roundSlider.prototype._handleDown;
$.fn.roundSlider.prototype._handleDown = function (e) {
    this._isHandleDrag = true;
    srcFn2.call(this, e);
};

var srcFn3 = $.fn.roundSlider.prototype._handleUp;
$.fn.roundSlider.prototype._handleUp = function (e) {
    srcFn3.call(this, e);
    this._changeSliderValue(this._lastValue, this._lastAngle);
    this._isHandleDrag = false;
};