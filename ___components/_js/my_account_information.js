// My Account Information
$.getJSON('___components/_json/my_account_information.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#my_account_information_template_holder');

    $.get('___components/_mustache/my_account_information.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#my_account_information_template').html(), templateData));
    });
});