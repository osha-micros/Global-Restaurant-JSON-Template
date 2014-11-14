// Quick Links
$.getJSON('___components/_json/quick_links.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#quick_links_template_holder');

    $.get('___components/_mustache/quick_links.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#quick_links_template').html(), templateData));
    });
});


//var quickLinksData, navigationData;
//var templateHolder = $('#quick_links_template_holder');
//$.when(
//    $.getJSON('___components/_json/quick_links.json', function(data) {
//        quickLinksData = data;
//    }),
//    $.getJSON('___components/_json/navigation_primary.json', function(data) {
//        navigationData = data;
//    })
//).then(function() {
//    if (quickLinksData && navigationData) {
//        var templateData = $.extend(quickLinksData, navigationData);
//        $.get('___components/_mustache/quick_links.mustache.html', function(template, textStatus, jqXhr) {
//            templateHolder.append(Mustache.render($(template).filter('#quick_links_template').html(), templateData));
//        });
//    }
//});