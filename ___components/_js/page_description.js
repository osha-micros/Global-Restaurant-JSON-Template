// Page Description
$.getJSON('___components/_json/page_description.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#page_description_template_holder');
    
    // We can't loop over the pageAlias value in mustache so we define the
    // templateData to be the pageDescription[Alias] before it hits mustache
    // note: this only allows us to grab data in the pageDescription that
    // matches the Alias. Anything outside of the pageDescription scope
    // like name, about, typeof, will not be passed to mustache as the
    // templateData. We will hardcode the about/typeof only for page_heading
    // mustache, remind Constantin about this so he is aware of this anomaly
    // Update: we used $.extend to merge them, so we don't need to hardcode
    // name, about, typeof by merging templateDataOrig/templateDataPageAlias
    // Make sure nothing inside pageDescription has the same key as anything outside
    // because the merge will have overwrite issues when it happens
    var templateDataOrig = templateData;
    var templateDataPageAlias = templateData.pageDescription[pageAlias];

    var templateData = $.extend(templateDataOrig, templateDataPageAlias);

    $.get('___components/_mustache/page_description.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#page_description_template').html(), templateData));
    });
});