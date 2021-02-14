//slide team//
var $owl = $('.owl-carousel');

$owl.children().each( function( index ) {
  $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});

$owl.owlCarousel({
  center: true,
  loop: true,
  items: 3,
  nav:false,
  autoplay:true,
  dots:true,
  responsive : {
    // breakpoint from 0 up
    0 : {
        items:1
    },
    // breakpoint from 480 up
    480 : {
        items:1
    },
    // breakpoint from 768 up
    768 : {
        items:3
    }
}
});

$(document).on('click', '.owl-item>div', function() {
  // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
  var $speed = 300;  // in ms
  $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
});
//slide end//

$('.img-team').css({
    'max-height':$('.img-team').width()
});