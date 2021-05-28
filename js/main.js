/* global data */
/* exported data */
var $image = document.querySelector('img');
var $photoUrl = document.querySelector('#photo-url');
var $form = document.querySelector('form');
var $ul = document.querySelector('ul');
var $viewForm = document.querySelector('#view-form');
var $viewEntries = document.querySelector('#view-entries');
var $entriesLink = document.querySelector('.entries-link');
var $newButton = document.querySelector('.new-button');
var $noEntryP = document.querySelector('.no-entry-p');
var $allView = document.querySelectorAll('.view');

function inputHandler(event) {
  $image.setAttribute('src', event.target.value);
}

function submitHandler(event) {
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
  $ul.prepend(renderEntry(newEntry));
}

$photoUrl.addEventListener('input', inputHandler);
$form.addEventListener('submit', saveHandler);

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

function loadHandler(event) {
  for (var i = 0; i < data.entries.length; i++) {
    var newTree = renderEntry(data.entries[i]);
    $ul.appendChild(newTree);
  }
  for (var x = 0; x < $allView.length; x++) {
    if ($allView[x].getAttribute('data-view') !== data.view) {
      $allView[x].className = 'view hidden';
    } else {
      $allView[x].className = 'view';
    }
  }
}

window.addEventListener('DOMContentLoaded', loadHandler);

$entriesLink.addEventListener('click', viewHandler);

$newButton.addEventListener('click', viewHandler);

function saveHandler(event) {
  submitHandler();
  $viewEntries.setAttribute('class', 'view');
  $viewForm.setAttribute('class', 'view hidden');
  $noEntryP.className = 'no-entry-p hidden';
}

function viewHandler(event) {
  var dataView = event.target.getAttribute('data-view');
  for (var i = 0; i < $allView.length; i++) {
    if ($allView[i].getAttribute('data-view') !== dataView) {
      $allView[i].className = 'view hidden';
    } else {
      $allView[i].className = 'view';
    }
  }
  if (data.entries.length !== 0) {
    $noEntryP.className = 'no-entry-p hidden';
  }
}
