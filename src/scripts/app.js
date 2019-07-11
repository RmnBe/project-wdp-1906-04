// implementation of the carousel
// eslint-disable-next-line no-unused-vars,no-undef
const slider = tns({
  container: '.promotion-right-slider',
  mode: 'carousel',
  loop: true,
  items: 1,
  slideBy: 'page',
  speed: 400,
  mouseDrag: true,
  controlsContainer: '.promotion-buttons-controls',
  nav: false
});
// implementation of the carousel
// eslint-disable-next-line no-unused-vars,no-undef
tns({
  container: '.hot-deals-slider',
  items: 1,
  controls: false,
  nav: false,
  slideBy: 'page',
  mouseDrag: true,
  loop: true,
  autoplayTimeout: 4000,
  speed: 1500
});
