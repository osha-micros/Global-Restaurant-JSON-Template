// Sign In
$.getJSON('___components/_json/sign_in.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#sign_in_template_holder');

    $.get('___components/_mustache/sign_in.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#sign_in_template').html(), templateData));
    });
});