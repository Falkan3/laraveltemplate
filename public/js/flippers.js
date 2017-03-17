//Flippers are cards that turn on mouseover
var FlipperGlobalVars = {
    'elements' : {
        'flippers' : []
    }
};

var Flippers_controller = (function () {
    var config = {
        'elements': {
        }
    };

    return {
        initElements: function () {
        },
        getElement: function (input) {
            return config.elements[input];
        },
        resize_flippers: function () {
            if (FlipperGlobalVars.elements.flippers) {
                var mod = 1;
                /*
                 if (G_Main_Controller.Viewport().width < 992) {
                 modifier = 1;
                 }
                 */
                $(FlipperGlobalVars.elements.flippers).each(function (e) {
                    $(this).height($(this).width() * mod);
                });
            }
        },
    };
})();

(function($) {

    $.fn.flipper = function( options ) {

        // Establish our default settings
        var settings = $.extend({
            caller: this,
            container: false,
            flippers: null,
            mod: 1,
            complete: null
        }, options);

        return this.each( function() {
            if (settings.container === true) {
                settings.flippers = settings.caller.find('.flip-container');
            }
            else {
                settings.flippers = settings.caller;
            }

            if (settings.flippers) {
                settings.flippers.hover(function (e) {
                    $(this).addClass('hover');
                });
                settings.flippers.mouseleave(function (e) {
                    $(this).delay(400).queue(function() {
                        $(this).removeClass('hover').dequeue();
                    });
                });

                FlipperGlobalVars.elements.flippers.push(settings.flippers);
                settings.flippers.height($(this).width() * settings.mod);
            }

            if ($.isFunction(settings.complete)) {
                settings.complete.call(this);
            }
        });
    }

}(jQuery));

/* -------------------------------------------------------------------------------- */

Flippers_controller.initElements();

$('.flipper-main-container').flipper({'container': true});

$(window).on('resize', function (e) {
    Flippers_controller.resize_flippers();
});

//