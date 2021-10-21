$(document).ready(function(){
    $('.header__inner-menu__btn').on('click', function (){
        $('.burger-menu').removeClass('burger-menu--close')    
    });
    $('.burger-menu__close').on('click', function (){
        $('.burger-menu').addClass('burger-menu--close')    
    });
});


$(document).ready(function(){
    $('.faq__block-list__btn-one').on('click', function (){
        $('.faq__block-sublist__one').removeClass('faq__block-sublist__one--close')
        $('.faq__block-list__btn-one__close').removeClass('faq__block-list__btn-one__close--close')
        $('.faq__block-list__btn-one').removeClass('faq__block-list__btn-one--active')       
    });
    $('.faq__block-list__btn-one__close').on('click', function (){
        $('.faq__block-sublist__one').addClass('faq__block-sublist__one--close')   
        $('.faq__block-list__btn-one').addClass('faq__block-list__btn-one--active')
        $('.faq__block-list__btn-one__close').addClass('faq__block-list__btn-one__close--close')
    });
});

$(document).ready(function(){
    $('.faq__block-list__btn-two').on('click', function (){
        $('.faq__block-sublist__two').removeClass('faq__block-sublist__two--close')
        $('.faq__block-list__btn-two__close').removeClass('faq__block-list__btn-two__close--close')
        $('.faq__block-list__btn-two').removeClass('faq__block-list__btn-two--active')       
    });
    $('.faq__block-list__btn-two__close').on('click', function (){
        $('.faq__block-sublist__two').addClass('faq__block-sublist__two--close')   
        $('.faq__block-list__btn-two').addClass('faq__block-list__btn-two--active')
        $('.faq__block-list__btn-two__close').addClass('faq__block-list__btn-two__close--close')
    });
});


$(document).ready(function(){
    $('.faq__block-list__btn-three').on('click', function (){
        $('.faq__block-sublist__three').removeClass('faq__block-sublist__three--close')
        $('.faq__block-list__btn-three__close').removeClass('faq__block-list__btn-three__close--close')
        $('.faq__block-list__btn-three').removeClass('faq__block-list__btn-three--active')       
    });
    $('.faq__block-list__btn-three__close').on('click', function (){
        $('.faq__block-sublist__three').addClass('faq__block-sublist__three--close')   
        $('.faq__block-list__btn-three').addClass('faq__block-list__btn-three--active')
        $('.faq__block-list__btn-three__close').addClass('faq__block-list__btn-three__close--close')
    });
});


$(document).ready(function(){
    $('.faq__block-list__btn-four').on('click', function (){
        $('.faq__block-sublist__four').removeClass('faq__block-sublist__four--close')
        $('.faq__block-list__btn-four__close').removeClass('faq__block-list__btn-four__close--close')
        $('.faq__block-list__btn-four').removeClass('faq__block-list__btn-four--active')       
    });
    $('.faq__block-list__btn-four__close').on('click', function (){
        $('.faq__block-sublist__four').addClass('faq__block-sublist__four--close')   
        $('.faq__block-list__btn-four').addClass('faq__block-list__btn-four--active')
        $('.faq__block-list__btn-four__close').addClass('faq__block-list__btn-four__close--close')
    });
});


