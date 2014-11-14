// Mobile Stack Navigation
$.getJSON('___components/_json/mobile_stack_navigation.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#mobile_stack_navigation_template_holder');

    $.get('___components/_mustache/mobile_stack_navigation.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#mobile_stack_navigation_template').html(), templateData));
    });
});