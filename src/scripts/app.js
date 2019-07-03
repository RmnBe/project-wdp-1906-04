console.log('hello');

// CHANGE MENU SIZE WHEN CLICK TO HAMBURGER < 576PX
function toggleMenu (visible) {
  document.querySelector('body').classList.toggle('active-menu', visible);
  document.querySelector('#hamburger').classList.toggle('active-menu-btn');
}

document.querySelector('#hamburger').addEventListener('click', function (i) {
  i.preventDefault();
  toggleMenu();
});
