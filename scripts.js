// CAROUSEL SLIDER
// $(document).ready(function(){
//   $('.slider-container').slick({
//     autoplay: true,
//     autoplaySpeed: 3000,
//     speed: 200,
//     arrows: true,
//     accessibility: true,
//     dots: true, 
//     fade: true,
//     infinite: true,
//     pauseOnHover: true,
//     pauseOnDotHover: true
//   });
// });

$(document).ready(function(){
  $('.slider-container').slick({
    autoplay: true,
    sutoplaySpeed: 3000,
    speed: 500,
    arrows: true,
    accessibility: true,
    dots: true, 
    fade: true,
    infinite: true,
    pauseOnHover: true,
    pauseOnDotHover: true
  });
});


// ------------HAMBURGER MENU TOGGLE
$('.hamburger-button').click(function(){
    $('.mobile-menu').slideToggle();
    $(this).toggleClass('active');
});