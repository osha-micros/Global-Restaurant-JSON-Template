// Create Account
$.getJSON('___components/_json/create_account.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#create_account_template_holder');

    $.get('___components/_mustache/create_account.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#create_account_template').html(), templateData));
    });
});