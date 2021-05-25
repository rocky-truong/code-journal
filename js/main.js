/* global data */
/* exported data */
var $image = document.querySelector('img');
var $photoUrl = document.querySelector('#photo-url');

function inputHandler(event) {
  $image.setAttribute('src', event.target.value);
}

$photoUrl.addEventListener('input', inputHandler);
