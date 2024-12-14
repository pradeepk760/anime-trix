(function ($) {


    // Jquery Mobile Validation
    jQuery.validator.addMethod("country", function (value, element) {
        return this.optional(element) || /^[^+]/.test(value);
    }, "Enter Number Without Country Code");
    jQuery.validator.addMethod("number", function (value, element) {
        return this.optional(element) || value.match(/^[1-9][0-9]*$/);
    }, "Please enter the number without beginning with '0'");
    jQuery.validator.addMethod("intlinput", function (value, element) {
        return this.optional(element) || jQuery(element).intlTelInput("isValidNumber");
    }, "Please enter a valid mobile number");
    jQuery.validator.addMethod("alphabets", function (value, element) {
        return this.optional(element) || /^[a-zA-Z ]*$/.test(value);
    }, "Please enter Alphabets only");
    jQuery.validator.addMethod("email", function (value, element) {
        return this.optional(element) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
    }, "Please enter a valid email address.");
    jQuery.validator.addMethod("valueNotEquals", function (value, element, arg) {
        return arg !== value;
    }, "Value must not equal arg.");

    
    if ($('#career-form').length > 0) {
        $('#career-form').validate({
            rules: {
                name: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    number: true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true
                },
                applyfor: {
                    required: true,
                    valueNotEquals : ""
                },
                resume: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: "Enter Your Name"
                },
                mobile: {
                    required: "Enter Your Number"
                },
                email: {
                    required: "Enter Your Email"
                },
                applyfor: {
                    required: "Please Select Apply For"
                },
                resume: {
                    required: "Upload Your Resume"
                }
            }
        });
    }


})(jQuery);