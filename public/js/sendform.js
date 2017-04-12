$(document).ready(function () {
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

        var current_form = this;
        //Check if inputs are valid
        setValidateFields($(current_form));
        var response = validateFields();
        if (response[0] == false) {
            if(form.attr('data-ajax')=='true')
                sendAjax(current_form);
            else
                sendPost(current_form);
        }
        else {
            if(response[1].length) {
                $(response[1]).each(function (e) {
                    $(this).addClass('wrong-input');
                });
                var offsetTop = $(response[1][0]).offset().top - 120;
                if(offsetTop<=0) {
                    var parent = $(this);
                    while(offsetTop <=0) {
                        parent = parent.parent();
                        offsetTop = parent.offset().top - 120;
                    }
                }
                $("body,html").animate({
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
    var formdata = $(current_form).serialize();
    var status_text = $(current_form).find('div.status');
    var formThankYou = $(current_form).closest('.container').find('.form-thank-you');

    status_text.html("");
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest'
        }
    });
    $.ajax({
        url: $(current_form).attr("action"),//form.attr('action'),
        type: "POST",
        data: formdata,
        enctype: 'multipart/form-data',
        dataType: 'json',
        processData: false,
        success: function (data) {
            status_text.html("");
            if(data.message.length > 0) {
                if (data.success) {
                    for (var index in data.message) {
                        status_text.append("<p>" + data.message[index] + "</p>");
                    }
                    $(current_form).find("input[type='text'], textarea").val("");
                    $(current_form).find("select").val(null);
                    $(current_form).find("input[type='checkbox']").prop('checked', 'checked');
                    $(current_form).slideUp();
                    formThankYou.html('<p>Dziękujemy za kontakt.</p>');
                    formThankYou.slideDown();
                }
                else {
                    for (var index in data.message) {
                        status_text.append("<p><span class='ajax-error'>" + data.message[index] + "</span></p>");
                    }
                }
                status_text.css("display", "block");
            }
        },
        error: function (data) {
            // Error...
            for (var index in data.message) {
                status_text.append("<p>" + data.message[index] + '</p>');
            }
            status_text.css("display", "block");
        }
    });
}