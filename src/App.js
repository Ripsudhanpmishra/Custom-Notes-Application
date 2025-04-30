import './App.css';
import AddNote from './components/Addnote';
import NotesList from './components/NotesList';
import Sidebar from './components/Sidebar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AddNote/>,
      errorElement: <h1>Page not found</h1>,
    },
    {
      path: "/addnote",
      element: <AddNote/>,
      errorElement: <h1>Page not found</h1>,
    },
    {
      path: "/viewnotes",
      element: <NotesList/>,
      errorElement: <h1>Page not found</h1>,
    }
  ])
  return (
    <div className="App">
      <Sidebar/>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
