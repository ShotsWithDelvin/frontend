import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Showcase from '../pages/Showcase';
import Contact from '../pages/Contact';
import { Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const Path = () => {

  return (
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/showcase' element={<Showcase />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
  );
};

export default Path;