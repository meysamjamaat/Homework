$(document).ready(function() {
    $('.main-navbar li').click(function() {
        $('.main-navbar li').removeClass('active');
        $(this).addClass('active');
    })

    setTimeout(function() {
        $('.loader').hide();
        $('.wrapper').show();
    }, 3000);

    setTimeout(function() {
        $('.loader-text').hide();
        $('.wrapper').show();
    }, 3000);
})