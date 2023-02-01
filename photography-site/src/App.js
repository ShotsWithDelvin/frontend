import React from 'react';
import Header from './components/Header';
import Routes from './components/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion'
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Router>
        <Header />
       
        <Routes />
      </Router>
   
    </>
  );
};

export default App;