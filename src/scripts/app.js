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

// Implementation of carousel
// eslint-disable-next-line no-unused-vars,no-undef
const slider = tns({
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

// Add script to gallery
// eslint-disable-next-line no-unused-vars
function openGallery (evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  // Show the current tab
  document.getElementById(cityName).style.display = 'block';
  evt.currentTarget.className += ' active';
}
