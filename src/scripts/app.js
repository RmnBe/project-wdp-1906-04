// implementation of the carousel
// eslint-disable-next-line no-unused-vars,no-undef
const slider = tns({
  container: '.my-slider',
  mode: 'carousel',
  loop: false,
  items: 1,
  slideBy: 'page',
  // autoWidth: true,
  speed: 400,
  mouseDrag: true,
  controlsContainer: '.my-controls',
  // controlText: ['<', '>'],
  nav: false
});
