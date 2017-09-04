//Author: Adam Kocić [Falkan3]
//Toggle height of item on click

var AccordionGlobalVars = {
    'elements' : {
        //'index' : 0,
        'parents' : [],
        'children' : [],
    }
};

var Squares_controller = (function () {
    var config = {
        'elements': {
            'parents' : [],
            'children' : []
        }
    };

    return {
        initElements: function () {
        },

        AccordionClick: function (el) {

        },
    };
})();

(function($) {

    $.fn.accordion = function( options ) {

        // Establish our default settings
        var settings = $.extend({
            caller: this,
            complete: null
        }, options);

        return this.each( function() {
            var temp_parents = settings.caller.find('div.accordion-item');
            //AccordionGlobalVars.elements.parents.push($(settings.caller));
            temp_parents.each(function() {
                var $this = $(this);
                AccordionGlobalVars.elements.parents.push($this);
                AccordionGlobalVars.elements.children.push($this.find('div.accordion-item-content'));
            });

            $(AccordionGlobalVars.elements.parents).each(function(e) {
                var $this = $(this);
                var index = $this.index();

                $this.removeClass('active');
                AccordionGlobalVars.elements.children[index].hide();

                $this.find('a').first().on('click', function(e) {
                    $this.toggleClass('active');
                    AccordionGlobalVars.elements.children[index].slideToggle();
                });
            });

            //AccordionGlobalVars.el.parents.push({'element' : $(settings.caller), 'index' : AccordionGlobalVars.index});

            if ($.isFunction(settings.complete)) {
                settings.complete.call(this);
            }
        });
    }

}(jQuery));

/* -------------------------------------------------------------------------------- */

//

$('div.accordion-container').accordion();