const noteForm = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const notesGrid = document.querySelector("#notes-grid");
const emptyMessage = document.querySelector("#empty-message");

let noteCount = 0;

function updateEmptyMessage() {
  emptyMessage.hidden = notesGrid.children.length > 0;
}

function addNote(text) {
  const note = document.createElement("article");
  const deleteButton = document.createElement("button");
  const noteText = document.createElement("p");

  note.classList.add("note", noteCount % 2 === 0 ? "blue" : "white");
  noteCount += 1;

  noteText.className = "note-text";
  noteText.textContent = text;

  deleteButton.className = "delete-button";
  deleteButton.type = "button";
  deleteButton.textContent = "×";
  deleteButton.setAttribute("aria-label", "Delete note");
  deleteButton.title = "Delete note";

  deleteButton.addEventListener("click", function () {
    note.remove();
    updateEmptyMessage();
  });

  note.append(deleteButton, noteText);
  notesGrid.prepend(note);
  updateEmptyMessage();
}

noteForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = noteInput.value.trim();
  if (text === "") {
    noteInput.focus();
    return;
  }

  addNote(text);
  noteInput.value = "";
  noteInput.focus();
});

updateEmptyMessage();
