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
  data.entries.unshift(newEntry);
  data.nextEntryId++;
  $image.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
}

$photoUrl.addEventListener('input', inputHandler);
$form.addEventListener('submit', submitHandler);

function renderEntry(entry) {
  var $li = document.createElement('li');
  var $divRow = document.createElement('div');
  $divRow.setAttribute('class', 'row');
  var $divColumnHalfImg = document.createElement('div');
  $divColumnHalfImg.setAttribute('class', 'column-half');
  var $img = document.createElement('img');
  $img.setAttribute('src', entry.image);
  $img.setAttribute('alt', entry.title);
  var $divColumnHalfText = document.createElement('div');
  $divColumnHalfText.setAttribute('class', 'column-half');
  var $h2 = document.createElement('h2');
  $h2.textContent = entry.title;
  var $p = document.createElement('p');
  $p.textContent = entry.notes;
  $li.appendChild($divRow);
  $divRow.appendChild($divColumnHalfImg);
  $divColumnHalfImg.appendChild($img);
  $divRow.appendChild($divColumnHalfText);
  $divColumnHalfText.appendChild($h2);
  $divColumnHalfText.appendChild($p);
  return $li;
}
