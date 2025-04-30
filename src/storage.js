const NOTES_KEY = 'notes';

// function to get notes from localStorage
export const getNotes = () => {
  try {
    const notes = localStorage.getItem(NOTES_KEY);
    return notes ? JSON.parse(notes) : [];
  } catch (error) {
    console.error('Error reading from localStorage', error);   //error handling if localStorage file is not available
    return [];
  }
};

// function to save notes to localStorage
export const saveNotes = (notes) => {
  try {
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  } catch (error) {
    console.error('Error saving to localStorage', error);     //error handleing if localStorage is full or not available
  }
};

// function to add a new note
export const addNote = (newNote) => {
  try {
    const notes = getNotes();
    notes.push(newNote);
    saveNotes(notes);
  } catch (error) {
    console.error('Error adding note to localStorage', error);    //error handling if saving note fails
  }
};

// function to remove a note by title
export const removeNote = (title) => {
  try {
    let notes = getNotes();
    notes = notes.filter(note => note.title !== title); 
    saveNotes(notes);
  } catch (error) {
    console.error('Error removing note from localStorage', error);   //error handling if removing note fails 
  }
};
