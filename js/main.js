$(document).ready(function () {
    // Navigation menu - drop down menu
    $('#main-menu li ul').hide().removeClass('fallback');
    $('#main-menu li').hover(
        function () {
            $('ul', this).stop().slideDown(100);
        },
        function () {
            $('ul', this).stop().slideUp(100);
        }
    );

    // Carousel
    $('.carousel-slider').slick({
        autoplay: true,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true

    });
});