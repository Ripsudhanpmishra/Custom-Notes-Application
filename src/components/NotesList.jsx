import React, { useEffect, useState } from 'react';
import { getNotes, removeNote } from '../storage'; 
import '../App.css'; // Import CSS styles

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  // Fetch notes from localStorage on component mount
  useEffect(() => {
    const storedNotes = getNotes();
    setNotes(storedNotes);
  }, []);

  const handleDelete = (title) => {
    removeNote(title);
    setNotes(getNotes()); // Refresh the notes list
  };

  return (
    <div className='notes-list-container'>
      <h2>Notes</h2>
      <div className='notes-list-header'>
      <ul>
        {notes.map((note, index) => (
          <div className='note-item' key={index}>
          <li>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={() => handleDelete(note.title)}>Delete</button>
          </li>
          </div>
        ))}  
      </ul>
      </div>
    </div>
  );
};

export default NotesList;
