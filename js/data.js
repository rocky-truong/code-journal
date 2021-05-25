/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousDataEntriesJSON = localStorage.getItem('entries-data');
if (previousDataEntriesJSON !== null) {
  data.entries = JSON.parse(previousDataEntriesJSON);
}
window.addEventListener('beforeunload', jsonHandler);

function jsonHandler(event) {
  var dataEntriesJSON = JSON.stringify(data.entries);
  localStorage.setItem('entries-data', dataEntriesJSON);
}
