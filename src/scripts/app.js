// eslint-disable-next-line no-unused-vars,no-undef
const slider = tns({
  container: '.my-slider',
  mode: 'carousel',
  loop: false,
  items: 1,
  slideBy: 'page',
  autoWidth: true,
  speed: 400,
  mouseDrag: true,
  controlsText: ['<', '>'],
  nav: false,
  responsive: {
    410: {
      item: 2
    },
    640: {
      items: 4
    },

    768: {
      items: 6
    }
  }
});
