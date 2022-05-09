import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Menu from './Menu';
import Home from "./compo/Home";
import About from './compo/About';
import Service from './compo/Service';
import Blog from "./compo/Blog"
import Contact from './compo/Contact';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

function App() {
  return (
   <>
   <Menu/>
  <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/About' element={<About/>} />
    <Route exact path='/Service' element={<Service/>} />
    <Route exact path='/Blog' element={<Blog/>} />
    <Route exact path='/Contact' element={<Contact/>} />
  </Routes>
   </>
  );
}

export default App;
