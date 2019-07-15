// implementation of the carousel
// eslint-disable-next-line no-unused-vars,no-undef
const slider = tns({
  container: '.promotion-right-slider',
  mode: 'carousel',
  loop: true,
  items: 1,
  slideBy: 'page',
  speed: 400,
  mouseDrag: false,
  controlsContainer: '.promotion-buttons-controls',
  nav: false
});

// eslint-disable-next-line no-unused-vars,no-undef
tns({
  container: '.hot-deals-slider',
  navContainer: '.hot-deals-dots',
  items: 1,
  controls: false,
  nav: true,
  slideBy: 'page',
  mouseDrag: true,
  loop: true,
  speed: 1000,
  autoplay: true,
  autoplayButton: false,
  autoplayButtonOutput: false,
  autoplayTimeout: 4000
});
