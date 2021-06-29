$(document).ready(() => {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1100: {
        items: 5,
      },
    },
  });
});
