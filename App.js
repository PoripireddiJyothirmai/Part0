import React  from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Idcard from './ components/Idcard';

import Login from './Components/Login';
import Registration from './Components/Registration';

import Mobiles from './components/Mobiles';
import Logout from './Components/Logout';
import Profile from './Components/Profile';

function App() {
  

  return (
    <div>
    < center><h1 style={{color:"red"}}>K L Online Shopping </h1></center>
     
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='Idcard'  element={<Idcard />}/>
        <Route path='Mobiles'  element={<Mobiles />}/>
        <Route path='Login'  element={<Login />}/>
        <Route path='Register'  element={<Registration />}/>
        <Route path='Logout'  element={<Logout/>}/>
        <Route path='Profile'  element={<Profile/>}/>
        </Routes></BrowserRouter>

     
    </div>
  );
}

export default App;