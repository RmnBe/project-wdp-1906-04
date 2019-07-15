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
