// eslint-disable-next-line no-unused-vars,no-undef
const slider = tns({
  container: document.querySelector('.my-slider'),
  loop: true,
  autoplay: true,
  autoplayButton: false,
  items: 1,
  gutter: 20,
  controlsText: ['<', '>'],
  nav: false,
  mouseDrag: true,
  responsive: {
    410: {
      item: 2
    },
    760: {
      item: 3
    },
    940: {
      items: 4
    },

    1040: {
      items: 6
    }
  }
});
