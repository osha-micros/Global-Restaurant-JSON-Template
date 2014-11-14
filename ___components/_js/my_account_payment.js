// My Account Payment
$.getJSON('___components/_json/my_account_payment.json', {}, function(templateData, textStatus, jqXHr) {
    var templateHolder = $('#my_account_payment_template_holder');

    $.get('___components/_mustache/my_account_payment.mustache.html', function(template, textStatus, jqXhr) {
        templateHolder.append(Mustache.render($(template).filter('#my_account_payment_template').html(), templateData));
    })
    .done(function(){
    
        // Show add credit card form to add new/edit prepopulated
        $('.my-account-payment-cards__add-credit-card-btn, .my-account-payment-cards__list-item-action-edit').click(function(e){
            e.preventDefault();
            $('.my-account-payment-cards__add-credit-card-btn').hide();
            $('.add-credit-card-form').show();
        });

    });
});