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

// Implementation of carousel 60_section-gallery
// eslint-disable-next-line no-unused-vars,no-undef,new-cap
const sliderGalleryFeatured = new tns({
  container: document.querySelector('.slider-gallery-featured'),
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

// eslint-disable-next-line no-unused-vars,no-undef,new-cap
const sliderGallerySeller = new tns({
  container: document.querySelector('.slider-gallery-seller'),
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

// eslint-disable-next-line no-unused-vars,no-undef,new-cap
const sliderGallerySale = new tns({
  container: document.querySelector('.slider-gallery-sale'),
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

// eslint-disable-next-line no-unused-vars,no-undef,new-cap
const sliderGalleryRated = new tns({
  container: document.querySelector('.slider-gallery-rated'),
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

// Add script to gallery
// eslint-disable-next-line no-unused-vars
var galleryTab = document.getElementById('gallery-tab');
var tablinks = document.querySelectorAll('#gallery-tab a');

// eslint-disable-next-line no-unused-vars
galleryTab.addEventListener('click', function (event) {
  event.preventDefault();
  // eslint-disable-next-line no-unused-vars,no-undef
  var elem = event.target.tagName === 'a' ? event.target.parentElement : event.target;
  // eslint-disable-next-line no-redeclare,no-undef
  var id = elem.getAttribute('href');
  document.querySelector('.tabcontent.show').classList.remove('show');
  document.querySelector(id).classList.add('show');
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove('active');
  }
  elem.classList.add('active');
});
