# Custom-Notes-Application

A lightweight React app for adding and viewing notes, using **localStorage** for client-side persistence.  
This project was built as part of a frontend mini-project challenge.

---

## 🚀 Live Demo

- **GitHub Repo:** [GitHub Link](https://github.com/Ripsudhanpmishra/Custom-Notes-Application)
- **Live Site:** [Vercel/Netlify Link](<your-live-link-here>)

---

## 📦 Project Setup

1. Clone the repository:
```bash
    git clone https://github.com/Ripsudhanpmishra/Custom-Notes-Application.git
```

2. Navigate to the project folder:
```bash
  cd custom-note-service
```

3. Install dependencies:
```bash
  npm install
```

4. Start the development server:
```bash
  npm run dev
```

## 🎯 Features

- Add new short notes with a title and content.
- View all saved notes in a clean list.
- Persist notes between sessions using localStorage.
- Simple navigation between "Add Note" and "View Notes".
- Error handling and loading indicators during storage operations.

---

## 🛠️ Tech Stack

- **React.js** (bootstrapped with Vite)
- **Plain CSS** for styling
- **localStorage** for persistence

---

## 📖 Why? Design Decisions

### Storage Strategy

- **localStorage** is used for persistence because it’s synchronous, easy to use, and appropriate for a small frontend-only app.
  > _"localStorage provides a simple way to persist data without backend complexity, perfect for this scale."_

### Component Structure

- **AddNote.jsx:** Handles the creation of new notes with controlled form inputs.
- **NotesList.jsx:** Loads and displays existing notes from localStorage.
- **Navigation.jsx:** Contains sidebar that provides simple navigation between "Add" and "View" pages.
- **storage.js:** Abstracts localStorage operations for clean code separation.

### State Management

- `useState` is used to handle form inputs in AddNote component.  
  > `// Why I chose useState + this submit handler: Simplicity for controlled form fields.`

- `useEffect` is used to sync notes from localStorage to state in NotesList component.  
  > `// Why useEffect to sync storage → state: Ensures notes are fetched once when the component loads.`

### Styling Approach

- **Plain CSS** was chosen for full control over the UI.
  > _"Plain CSS keeps things lightweight, flexible, and easy to manage for a small project."_

### Navigation

- Simple sidebar approach for navigation between "Add Note" and "View Notes".
  > `// Why this nav approach for simplicity: Minimalism keeps the UI intuitive and lightweight.`

### Loading & Error Handling

- Shows a **"Note Saved to localStorage."** indicator when writing to localStorage.  
  > `// Why show spinner here: Provides immediate feedback that the action is being processed.`

- Displays an **error banner** if localStorage write fails (e.g., quota exceeded).  
  > `// Why display error banner: To clearly communicate failures that would affect the user's experience.`

---

## 📂 Folder Structure

```
src/
  ├── components/
  │   ├── AddNote.jsx
  │   ├── NotesList.jsx
  │   └── Navigation.jsx
  ├── storage.js
  │── App.css
  ├── App.jsx
  ├── main.jsx
  └── index.css
```

---

## 📃 .gitignore

```
node_modules/
dist/
.env
```

---

## ✍️ Author

- RIPSUDHAN MISHRA(https://github.com/Ripsudhanpmishra)

---

# ✅ Summary

This project focuses on building a clear, intuitive UI with correct client-side data management. The app structure ensures easy scalability, and the documentation highlights the reasons behind key technical decisions.
