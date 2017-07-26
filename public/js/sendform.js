var Global_vars_sendform = {
    ajax_processing: false
};

$(document).ready(function () {
    Global_vars_sendform.ajax_processing = false;

    var form = $("form.contact-form");
    var loading_gif = $(".loading_ajax");

    $(document)
        .ajaxStart(function () {
            loading_gif.removeClass("hidden");
        })
        .ajaxStop(function () {
            loading_gif.addClass("hidden");
        });

    form.submit(function (e) {
        e.preventDefault();

        var current_form = $(this);
        //Check if inputs are valid
        setValidateFields(current_form);
        var response = validateFields();
        if (response[0] === false) {
            var data_ajax = current_form.attr('data-ajax');
            if(data_ajax) {
                if(data_ajax==='true')
                    sendAjax(current_form);
                else if(data_ajax==='notify')
                    sendAjax_notification(current_form);
                else
                    sendPost(current_form);
            }
            else
                sendPost(current_form);
        }
        else {
            if(response[1].length) {
                $(response[1]).each(function (e) {
                    $(this).addClass('wrong-input');
                });

                //sort array by position in DOM
                var test = response[1].sort(function(a,b) {
                    if( a[0] === b[0]) return 0;
                    if( !a[0].compareDocumentPosition) {
                        // support for IE8 and below
                        return a[0].sourceIndex - b.sourceIndex;
                    }
                    if( a[0].compareDocumentPosition(b[0]) & 2) {
                        // b comes before a
                        return 1;
                    }
                    return -1;
                });

                var offsetTop = $(response[1][0]).offset().top - 120;
                if(offsetTop<=0) {
                    var parent = $(this);
                    while(offsetTop <=0) {
                        parent = parent.parent();
                        offsetTop = parent.offset().top - 120;
                    }
                }
                Global_vars_lapp_app.body_html.animate({
                    scrollTop: offsetTop
                }, 600);
            }
        }
    });
});

/*
function showHiddenElement(el) {
    var offsetTop;
    var isInputHidden = el.is('input[type="hidden"]');
    el.show();
    if(isInputHidden) {
        el.attr('type', 'text');
    }
    offsetTop = el.offset().top - 120;
    el.hide();
    if(isInputHidden) {
        el.attr('type', 'hidden');
    }
    return offsetTop;
}
*/

function sendAjax(form) {
    var current_form = form;
    var formdata = current_form.serialize();
    var status_text = current_form.find('div.status');
    var formThankYou = current_form.closest('.container').find('.form-thank-you');

    status_text.html("");
    status_text.hide();
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest'
        }
    });
    if(!Global_vars_sendform.ajax_processing) {
        Global_vars_sendform.ajax_processing = true;
        $.ajax({
            url: current_form.attr("action"),//form.attr('action'),
            type: "POST",
            data: formdata,
            enctype: 'multipart/form-data',
            dataType: 'json',
            processData: false,
            success: function (data) {
                if(data.message.length > 0) {
                    if (data.success) {
                        for (var index in data.message) {
                            status_text.append("<p>" + data.message[index] + "</p>");
                        }
                        current_form.find("input[type='text'], input[type='tel'], input[type='numeric'], textarea").val("");
                        current_form.find("select").val(null);
                        current_form.find("input[type='checkbox']").prop('checked', 'checked');
                        current_form.slideUp();
                        formThankYou.html('<p>Dziękujemy za kontakt.</p>');
                        formThankYou.slideDown();
                    }
                    else {
                        for (var index in data.message) {
                            status_text.append("<p><span class='ajax-error'>" + data.message[index] + "</span></p>");
                        }
                    }
                    status_text.show();
                }

                Global_vars_sendform.ajax_processing = false;
            },
            error: function (data) {
                // Error...
                for (var index in data.message) {
                    status_text.append("<p>" + data.message[index] + '</p>');
                }
                status_text.show();

                Global_vars_sendform.ajax_processing = false;
            }
        });
    }
}

function sendAjax_notification(form) {
    var current_form = form;
    var formdata = current_form.serialize();
    var status_text = '';

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest'
        }
    });
    if(!Global_vars_sendform.ajax_processing) {
        Global_vars_sendform.ajax_processing = true;
        $.ajax({
            url: current_form.attr("action"),//form.attr('action'),
            type: "POST",
            data: formdata,
            enctype: 'multipart/form-data',
            dataType: 'json',
            processData: false,
            success: function (data) {
                if (data.message.length > 0) {
                    if (data.success) {
                        for (var index in data.message) {
                            status_text += data.message[index];
                        }
                        current_form.find("input[type='text'], input[type='tel'], textarea").val("");
                        current_form.find("select").val(null);
                        current_form.find("input[type='checkbox']").prop('checked', 'checked');

                        //EXAMPLE FOR CUSTOM FIELDS
                        if (current_form.attr('data-ajax-id') === 'image') {
                            var container = current_form.parent().parent();
                            container.fadeOut(500, function () {
                                container.remove();
                            });
                        }
                        // -----------------------
                        $.notify(
                            status_text,
                            {position: "bottom", className: "success"}
                        );
                    }
                    else {
                        for (var index in data.message) {
                            status_text += data.message[index];
                        }
                        current_form.notify(
                            status_text,
                            {position: "bottom", className: "error"}
                        );
                    }
                }

                Global_vars_sendform.ajax_processing = false;
            },
            error: function (data) {
                // Error...
                for (var index in data.message) {
                    status_text += "<p>" + data.message[index] + '</p>';
                }
                current_form.notify(
                    status_text,
                    {position: "bottom", className: "error"}
                );

                Global_vars_sendform.ajax_processing = false;
            }
        });
    }
}

function sendPost(form) {
    form[0].submit();
}