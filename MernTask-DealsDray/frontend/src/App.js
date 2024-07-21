import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Login from './components/Login';
// import SignUp from './components/SignUp';
import Home from './components/Home';
import Form from './components/Form';
import List from './components/List';
import Update from './components/Update';

function App() {
  return (
       <div className='App'>
       <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Login/>}/>
          {/* <Route path='/signup' element={<SignUp/>}/> */}
          <Route path='/home' element={<Home/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/:id' element={<Update/>}/>
        </Routes>
        </BrowserRouter>
       </div>
  );
}

export default App;
