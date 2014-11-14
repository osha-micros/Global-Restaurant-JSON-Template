// Change Password
$.getJSON('___components/_json/change_password.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#change_password_template_holder');

    $.get('___components/_mustache/change_password.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#change_password_template').html(), templateData));
    });
});