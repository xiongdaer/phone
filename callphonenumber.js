var callphonenumber = '400-1234-5678';
(function(window, $, undefined) {
    $.fn.callphonenumber = function(option) {
        return;
        var options = $.extend({}, option);
        if (options.phone) {
            callphonenumber = options.phone;
        }
        if (options.text) {
            $(this).html(options.text.replace(/{{callphonenumber}}/ig, callphonenumber));
        }
        $(this).attr('href', ['tel', ':', callphonenumber].join(''));
    };
})(window, jQuery);
