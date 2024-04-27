const addBtn = document.querySelector('.create');
const notesContainer = document.querySelector('.notes-container');


getNotes().forEach((note) => {
    const noteEl = createNote(note.content);
    
});

function createNote(note){
    const noteEl = document.createElement('textarea');
    noteEl.classList.add('note');
    noteEl.placeholder = 'Empty Note';
    noteEl.content = note;

    noteEl.addEventListener('dblclick', () => {
        if(confirm('Are you sure you want to delete this note?')){
            deleteNote(noteEl);
        }
    })
    noteEl.addEventListener('input', (el) =>{
        updateNote(el);
    })
    
    notesContainer.insertBefore(noteEl, addBtn);
    
}
function deleteNote(noteEl){
    saveNotes(getNotes().filter((element) => element != noteEl))
    notesContainer.removeChild(noteEl);
    
}
function updateNote(newNote){
    const notes = getNotes();
    const note = notes.filter((el) => el == newNote);
    note.content = newNote.value;

    saveNotes(notes);
}
function createEmptyNote() {
    const notes = getNotes();
    const noteEl = document.createElement('textarea');
    noteEl.classList.add('note');
    noteEl.placeholder = 'Empty Note';
    noteEl.addEventListener('dblclick', () => {
        if(confirm('Are you sure you want to delete this note?')){
            deleteNote(noteEl);
        }
    });
    noteEl.addEventListener('input', (el) =>{
        updateNote(el);
    });
    notesContainer.insertBefore(noteEl, addBtn);
    notes.push(noteEl);
    saveNotes(notes);
    
  }



function saveNotes(notes){
    localStorage.setItem('notes-app', JSON.stringify(notes));
}
function getNotes(){
    return JSON.parse(localStorage.getItem('notes-app') || '[]');
}
addBtn.addEventListener('click', () => {
    createEmptyNote();
});
