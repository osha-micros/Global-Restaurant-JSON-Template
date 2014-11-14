// My Saved Addresses
$.getJSON('___components/_json/my_saved_addresses.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#my_saved_addresses_template_holder');

    $.get('___components/_mustache/my_saved_addresses.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#my_saved_addresses_template').html(), templateData));
    });
});