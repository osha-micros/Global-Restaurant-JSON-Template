// Guest Create Account
$.getJSON('___components/_json/guest_create_account.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#guest_create_account_template_holder');

    $.get('___components/_mustache/guest_create_account.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#guest_create_account_template').html(), templateData));
    });
});