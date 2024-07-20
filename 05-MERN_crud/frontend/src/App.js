import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Create/>}/>
      <Route path='/read' element={<Read/>}/>
      <Route path='/:id' element={<Update/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
