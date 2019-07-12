// implementation of the carousel
// eslint-disable-next-line no-unused-vars,no-undef
const slider = tns({
  container: document.querySelector('.my-slider'),
  autoplay: true,
  loop: true,
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
      items: 2,
      nav: true
    },
    992: {
      items: 3,
      nav: true
    }
  }
});
