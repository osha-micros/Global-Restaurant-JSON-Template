// My Favorite Orders
$.getJSON('___components/_json/my_favorite_orders.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#my_favorite_orders_template_holder');

    $.get('___components/_mustache/my_favorite_orders.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#my_favorite_orders_template').html(), templateData));
    })
    // added done so after template is fully rendered and elements available we can
    // add the active class to the correct account navigation link based on pageAlias
    .done(function(){

        // Wrap Every 2 Fav Items to be left/right and stackable if more than 2 Items
        $(function() {
            var favItemsDivs = $('.my-favorite-orders__item');
            for(var i = 0; i < favItemsDivs.length; i+=2) {
                favItemsDivs.slice(i, i+2).wrapAll('<div class="my-favorite-orders__item-row"></div>');
            }
        });

    });
});