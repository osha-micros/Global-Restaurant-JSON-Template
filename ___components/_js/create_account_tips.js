// Create Account Tips
$.getJSON('___components/_json/create_account_tips.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#create_account_tips_template_holder');

    $.get('___components/_mustache/create_account_tips.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#create_account_tips_template').html(), templateData));
    });
});