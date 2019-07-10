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
    410: {
      item: 1
    },
    640: {
      items: 2
    },

    768: {
      items: 4
    }
  }
});
