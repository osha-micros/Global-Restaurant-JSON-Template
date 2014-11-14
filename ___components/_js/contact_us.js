// Contact Us
$.getJSON('___components/_json/contact_us.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#contact_us_template_holder');

    $.get('___components/_mustache/contact_us.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#contact_us_template').html(), templateData));
    });
});