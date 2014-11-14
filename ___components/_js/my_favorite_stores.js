// My Favorite Stores
$.getJSON('___components/_json/my_favorite_stores.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#my_favorite_stores_template_holder');

    $.get('___components/_mustache/my_favorite_stores.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#my_favorite_stores_template').html(), templateData));
    });
});