$(document).ready(function(){
    $(`#carrosel-imagens`).slick({
        autoplay:true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

})