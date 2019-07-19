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
console.log('hello');

// eslint-disable-next-line no-unused-vars,no-undef
tns({
  container: document.querySelector('.my-slider'),
  loop: true,
  autoplay: true,
  autoplayButton: false,
  items: 1,
  slideBy: 'page',
  controlsText: ['<', '>'],
  nav: false,
  mouseDrag: true,
  responsive: {
    370: {
      item: 1
    },
    576: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 5
    },
    1200: {
      items: 6
    }
  }
});

// CHANGE MENU SIZE WHEN CLICK TO HAMBURGER < 576PX
function toggleMenu () {
  document.querySelector('body').classList.toggle('active-menu');
  document.querySelector('#hamburger').classList.toggle('active-menu-btn');
}

document.querySelector('#hamburger').addEventListener('click', function (i) {
  i.preventDefault();
  toggleMenu();
});

// section display
var bookmarks = document.getElementById('bookmarks');
var link = document.querySelectorAll('#bookmarks ul li a');

bookmarks.addEventListener('click', function (event) {
  event.preventDefault();
  var elem = event.target.tagName === 'a' ? event.target.parentElement : event.target;
  var id = elem.getAttribute('href');
  document.querySelector('.sectionDisplay.show').classList.remove('show');
  document.querySelector(id).classList.add('show');
  for (let i = 0; i < link.length; i++) {
    link[i].classList.remove('active');
  }
  elem.classList.add('active');
});
