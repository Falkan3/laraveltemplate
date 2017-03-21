$(document).ready(function (e) {

});

$(window).on('scroll', function () {

});

$(window).on('resize', function () {

});

$(window).on("load", function () {

});

var read_more_click = $('a.read-more-click');
var read_more = $('div.read-more');

read_more_click.on('click', function(e) {
    read_more.hide();
    $(this).next('div.read-more').toggle();
});
read_more.on('click', function(e) {
    $(this).hide();
});

var validationForms = $('form');
var validateForm;
var name_fields;
var email_fields;
var telephone_fields;
var agreement_fields;

var all_telephone_fields = $('input[type="text"].telephone, input[type="tel"].telephone');
var phones = [{"mask": "###-###-###"}, {"mask": "## ###-##-##"}];
all_telephone_fields.inputmask({
    mask: phones,
    greedy: false,
    definitions: {'#': {validator: "[0-9]", cardinality: 1}}
});

function setValidateFields(input) {
    validateForm = input;
}

function validateFields() {
    if(validateForm.length == 0)
        return false;

    //remove error messages
    validateForm.find('span.errormsg').remove();

    name_fields = validateForm.find('input[type="text"].name');
    email_fields = validateForm.find('input[type="text"].email');
    telephone_fields = validateForm.find('input[type="text"].telephone, input[type="tel"].telephone');
    pesel_fields = validateForm.find('input[type="text"].pesel');
    city_fields = validateForm.find('input[type="text"].city');
    postcode_fields = validateForm.find('input[type="text"].postcode');
    street_fields = validateForm.find('input[type="text"].street');
    streetno_fields = validateForm.find('input[type="text"].streetno');
    agreement_fields = validateForm.find('.agreements input[type="checkbox"]');
    var error = false;
    var wrong_inputs = [];

    name_fields.each(function(e) {
        if(validate_name($(this).val()) == false) {
            error = true;
            wrong_inputs.push($(this));
            $(this).before('<span class="errormsg">Nieprawidłowa wartość pola</span>');
        }
    });
    email_fields.each(function(e) {
        if(validate_email($(this).val()) == false) {
            error = true;
            wrong_inputs.push($(this));
            $(this).before('<span class="errormsg">Niewłaściwa postać adresu e-mail</span>');
        }
    });
    telephone_fields.each(function(e) {
        if(validate_phone_number($(this).val()) == false) {
            error = true;
            wrong_inputs.push($(this));
            $(this).before('<span class="errormsg">Numer telefonu jest błędny</span>');
        }
    });
    agreement_fields.each(function(e) {
        if(validate_agreements($(this)) == false) {
            error = true;
            wrong_inputs.push($(this));
            $(this).before('<span class="errormsg">Proszę zaznaczyć zgodę</span>');
        }
    });

    //optional
    pesel_fields.each(function (e) {
        if (validate_pesel($(this).val()) == false) {
            error = true;
            wrong_inputs.push($(this));
            $(this).before('<span class="errormsg">PESEL jest błędny</span>');
        }
    });
    city_fields.each(function (e) {
        if (validate_city($(this).val()) == false) {
            error = true;
            wrong_inputs.push($(this));
            $(this).before('<span class="errormsg">Miasto jest błędne</span>');
        }
    });
    postcode_fields.each(function (e) {
        if (validate_postcode($(this).val()) == false) {
            error = true;
            wrong_inputs.push($(this));
            $(this).before('<span class="errormsg">Kod pocztowy jest błędny</span>');
        }
    });
    street_fields.each(function (e) {
        if (validate_street($(this).val()) == false) {
            error = true;
            wrong_inputs.push($(this));
            $(this).before('<span class="errormsg">Ulica jest błędna</span>');
        }
    });
    streetno_fields.each(function (e) {
        if (validate_streetno($(this).val()) == false) {
            error = true;
            wrong_inputs.push($(this));
            $(this).before('<span class="errormsg">Numer domu/mieszkania jest błędny</span>');
        }
    });

    return [error, wrong_inputs];
}

var inputs = $('input');
inputs.blur(function(e) {
    $(this).removeClass('wrong-input');
    $(this).prev('span.errormsg').remove();
});

name_fields = $('input[type="text"].name');
email_fields = $('input[type="text"].email');
//telephone_fields = $('input[type="text"].telephone, input[type="tel"].telephone');
pesel_fields = $('input[type="text"].pesel');
city_fields = $('input[type="text"].city');
postcode_fields = $('input[type="text"].postcode');
street_fields = $('input[type="text"].street');
streetno_fields = $('input[type="text"].streetno');

name_fields.blur(function(e) {
    if(validate_name($(this).val())==true)
        $(this).addClass('right-input');
    else
        $(this).removeClass('right-input');
});
email_fields.blur(function(e) {
    if(validate_email($(this).val())==true)
        $(this).addClass('right-input');
    else
        $(this).removeClass('right-input');
});
all_telephone_fields.blur(function(e) {
    if(validate_phone_number($(this).val())==true)
        $(this).addClass('right-input');
    else
        $(this).removeClass('right-input');
});
pesel_fields.blur(function (e) {
    if (validate_pesel($(this).val()) == true)
        $(this).addClass('right-input');
    else
        $(this).removeClass('right-input');
});
city_fields.blur(function (e) {
    if (validate_city($(this).val()) == true)
        $(this).addClass('right-input');
    else
        $(this).removeClass('right-input');
});
postcode_fields.blur(function (e) {
    if (validate_postcode($(this).val()) == true)
        $(this).addClass('right-input');
    else
        $(this).removeClass('right-input');
});
street_fields.blur(function (e) {
    if (validate_street($(this).val()) == true)
        $(this).addClass('right-input');
    else
        $(this).removeClass('right-input');
});
streetno_fields.blur(function (e) {
    if (validate_streetno($(this).val()) == true)
        $(this).addClass('right-input');
    else
        $(this).removeClass('right-input');
});

function validate_name(input) {
    if(input.length == 0)
        return false;

    var regex = /^[ĄĆĘŁŃÓŚŹŻąćęłńóśźż\sA-Za-z\'\"&\(\),\.]*$/;
    return regex.test(input);
}

function validate_email(input) {
    if(input.length == 0)
        return false;

    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(input);
}

function validate_phone_number(input) {
    if(input.length == 0)
        return false;

    var regex = /^[0-9]{3}(-|\s)?[0-9]{3}(-|\s)?[0-9]{3}$/;
    var regex2 = /^[0]?([0-9]{2})(-|\s)?[0-9]{3}(-|\s)?[0-9]{2}(-|\s)?[0-9]{2}$/;
    var regex3 = /^[0]{3}(-|\s)?[0]{3}(-|\s)?[0]{3}$/;

    var result = !regex3.test(input) && (regex.test(input) || regex2.test(input));
    return result;
}

function validate_agreements(input) {
    return !!input.prop("checked");
}

//optional

function validate_pesel(input) {
    if (input.length == 0)
        return false;

    var regex = /^\d{11}$/;
    return regex.test(input);
}

function validate_city(input) {
    if (input.length == 0)
        return false;

    var regex = /^[ĄĆĘŁŃÓŚŹŻąćęłńóśźż\sA-Za-z\'\"&\(\),\.]*$/;
    return regex.test(input);
}

function validate_postcode(input) {
    if (input.length == 0)
        return false;

    var regex = /^\d{2}-\d{3}$/;
    return regex.test(input);
}

function validate_street(input) {
    if (input.length == 0)
        return false;

    var regex = /^[ĄĆĘŁŃÓŚŹŻąćęłńóśźż\s\-0-9A-Za-z_\'\"&\(\),\.]*$/;
    return regex.test(input);
}

function validate_streetno(input) {
    if (input.length == 0)
        return false;

    var regex = /^[\s\\\/\-0-9A-Za-z_&\(\),\.]*$/;
    return regex.test(input);
}

// -----------------------------