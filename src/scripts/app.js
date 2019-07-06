// Implementation of tiny-slider

// eslint-disable-next-line no-unused-vars,no-undef
const slider = tns({
  container: '.my-slider',
  mode: 'carousel',
  items: 2,
  autoWidth: true,
  slideBy: 'page',
  center: true,
  speed: 400,
  autoplay: true,
  mouseDrag: true
});
