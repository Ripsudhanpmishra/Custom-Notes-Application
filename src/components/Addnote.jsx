import React, { useState } from 'react';
import { addNote } from '../storage'; // Import addNote function
import '../App.css'; // Import CSS styles

const AddNote = () => {
  const [title, setTitle] = useState('');       // State to hold the note title
  const [content, setContent] = useState('');     // State to hold the note content

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert('Please provide a title and content.');
      return;
    }

    // Create a new note object
    const newNote = {
      title,
      content,
    };

    // Save this note
    addNote(newNote);
    alert('Note Saved Successfully!');

    // Reset form
    setTitle('');
    setContent('');
  };

  return (
    <div className="add-note-container">
      <h2>New Note</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Note Content"
        />
        <button type="submit" >Add Note</button>
      </form>
    </div>
  );
};

export default AddNote;
