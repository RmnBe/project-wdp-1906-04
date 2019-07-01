console.log('hello');

// section display

var bookmarks = document.getElementById('bookmarks');

bookmarks.addEventListener('click', function (event) {
  event.preventDefault();
  var elem = event.target.tagName === 'a' ? event.target.parentElement : event.target;
  var id = elem.getAttribute('href');
  document.querySelector('.sectionDisplay.show').classList.remove('show');
  document.querySelector(id).classList.add('show');
  document.querySelector('.sectionActive.active').classList.remove('active');
  // tu coś nie tak nie wiem jak się dobrać do tego elementu
  document.querySelector(id).classList.add('active');
});
