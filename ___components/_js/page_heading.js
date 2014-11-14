// Page Heading
$.getJSON('___components/_json/page_heading.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#page_heading_template_holder');
    
    // We can't loop over the pageAlias value in mustache so we define the
    // templateData to be the pageHeading[Alias] before it hits mustache
    // note: this only allows us to grab data in the pageHeading that
    // matches the Alias. Anything outside of the pageHeading scope
    // like name, about, typeof, will not be passed to mustache as the
    // templateData. We will hardcode the about/typeof only for page_heading
    // mustache, remind Constantin about this so he is aware of this anomaly
    // Update: we used $.extend to merge them, so we don't need to hardcode
    // name, about, typeof by merging templateDataOrig/templateDataPageAlias
    // Make sure nothing inside pageHeading has the same key as anything outside
    // because the merge will have overwrite issues when it happens
    var templateDataOrig = templateData;
    var templateDataPageAlias = templateData.pageHeading[pageAlias];
    
    var templateData = $.extend(templateDataOrig, templateDataPageAlias);
    
    $.get('___components/_mustache/page_heading.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#page_heading_template').html(), templateData));
    });
});