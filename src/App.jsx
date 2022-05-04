import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Contact from './pages/Contact'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
      </Routes>
</BrowserRouter>
  );
}

export default App;
