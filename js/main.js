/* global data */
/* exported data */
var $image = document.querySelector('img');
var $photoUrl = document.querySelector('#photo-url');
var $form = document.querySelector('form');

function inputHandler(event) {
  $image.setAttribute('src', event.target.value);
}

function submitHandler(event) {
  event.preventDefault();
  var newEntry = {
    title: $form.elements.title.value,
    image: $form.elements.image.value,
    notes: $form.elements.notes.value,
    entryId: data.nextEntryId
  };
  data.entries.push(newEntry);
  data.nextEntryId++;
  $image.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
}

$photoUrl.addEventListener('input', inputHandler);
$form.addEventListener('submit', submitHandler);
