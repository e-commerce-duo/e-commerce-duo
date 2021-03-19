$(document).ready(function() {

    $('.naturel').click(function() {
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    });

    $('nav ul li a').click(function() {
        $('.naturel').removeClass('fa-times');
        $('nav').removeClass('nav-toggle');
    });

    $('.dot1').click(function() {
        $('.img1').css('display', 'block');
        $('.img2').css('display', 'none');
        $('.img3').css('display', 'none');
    });

    $('.dot2').click(function() {
        $('.img2').css('display', 'block');
        $('.img1').css('display', 'none');
        $('.img3').css('display', 'none');
    });

    $('.dot3').click(function() {
        $('.img3').css('display', 'block');
        $('.img1').css('display', 'none');
        $('.img2').css('display', 'none');
    });

    $(window).on('scroll load', function() {
        if ($(window).scrollTop() > 10) {
            $('#header').addClass('header-active');
        } else {
            $('#header').removeClass('header-active');
        }
    });

});