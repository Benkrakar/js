//slide team//
let $owl = $('#owl-carousel-1');
$owl.children().each(function(index) {
    $(this).attr('data-position', index);
});
$owl.owlCarousel({
    center: true,
    loop: true,
    items: 3,
    nav: false,
    autoplay: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1
        },
        768: {
            items: 3
        }
    }
});
$(document).on('click', '.owl-item>div', function() {
    var $speed = 300;
    $owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
});
$('.img-team').css({
    'max-height': $('.img-team').width()
});
// Slider clients
//slide team//
$owl = $('#owl-carousel-2');
$owl.children().each(function(index) {
    $(this).attr('data-position', index);
});
$owl.owlCarousel({
    center: true,
    loop: true,
    items: 5,
    nav: false,
    autoplay: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1
        },
        768: {
            items: 5
        }
    }
});
$(document).on('click', '.owl-item>div', function() {
    var $speed = 300;
    $owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
});
$('.img-team').css({
    'max-height': $('.img-team').width()
});