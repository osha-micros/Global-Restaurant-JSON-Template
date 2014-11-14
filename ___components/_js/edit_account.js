// Edit Account
$.getJSON('___components/_json/edit_account.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#edit_account_template_holder');

    $.get('___components/_mustache/edit_account.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#edit_account_template').html(), templateData));
    });
});