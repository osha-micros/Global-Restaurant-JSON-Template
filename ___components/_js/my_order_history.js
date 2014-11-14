// My Favorite Orders
$.getJSON('___components/_json/my_order_history.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#my_order_history_template_holder');

    $.get('___components/_mustache/my_order_history.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#my_order_history_template').html(), templateData));
    });
});