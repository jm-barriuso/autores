
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddAutor from './views/AddAutor';
import EditAutor from './views/EditAutor';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <h1>Autores Favoritos</h1>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/new" element={<AddAutor/>}/>
        <Route path="/edit/:idAutor" element={<EditAutor/>}/>
      </Routes>
    </div>
  );
}

export default App;
