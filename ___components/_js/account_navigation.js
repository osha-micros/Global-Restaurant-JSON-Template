// Account Navigation
$.getJSON('___components/_json/account_navigation.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#account_navigation_template_holder');

    $.get('___components/_mustache/account_navigation.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#account_navigation_template').html(), templateData));
    })
    // added done so after template is fully rendered and elements available we can
    // add the active class to the correct account navigation link based on pageAlias
    .done(function(){
    
        // Map and load pageAlias to account page titles
        var pageAliasAccountArrayMap = {
            'myAccountInformation' : 'account-information',
            'myAddressesAndStores' : 'addresses-stores',
            'myFavoriteOrders' : 'favorite-stores',
            'myOrderHistory' : 'order-history'
        };

        $.each(pageAliasAccountArrayMap, function(key, value) {
            if(pageAlias==key){
                $('.account-navigation').find('.account-navigation__links-link-'+value+'').addClass('account-navigation__links-link__active');
            }
        });
        
    });
});