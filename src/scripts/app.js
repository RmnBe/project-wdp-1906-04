// Implementation of tiny-slider

// eslint-disable-next-line no-unused-vars,no-undef
const slider = tns({
  container: document.querySelector('.my-slider'),
  loop: true,
  autoplay: true,
  autoplayButton: false,
  items: 1,
  gutter: 20,
  controls: false,
  mouseDrag: true,
  responsive: {
    370: {
      item: 1,
      nav: false
    },
    576: {
      items: 2,
      nav: false
    },

    768: {
      items: 3,
      nav: true
    },
    1200: {
      items: 4,
      nav: true
    }
  }
});
