jQuery('document').ready(function($){
    var menuBtn = $('.button-menu'),
        menu = $('.navigation ul');

    menuBtn.click(function() {
        if(menu.hasClass('show')) {
            menu.removeClass('show');
        } else {
            menu.addClass('show');
        }
    });
});