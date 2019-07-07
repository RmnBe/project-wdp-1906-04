// Implementation of tiny-slider

// eslint-disable-next-line no-unused-vars,no-undef
const slider = tns({
  container: '.my-slider',
  mode: 'carousel',
  items: 1,
  autoWidth: true,
  slideBy: 'page',
  speed: 400,
  autoplay: true,
  loop: false,
  mouseDrag: true
});
