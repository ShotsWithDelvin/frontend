import React from 'react';
import Header from './components/Header';
import Routes from './components/Routes';
import MobileNavBar from './components/MobileNavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion'
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Showcase from './pages/Showcase';
import About from './pages/About';
import Contact from './pages/Contact';
import { UserProvider } from './context/userContext';

const App = () => {
  return (
    <>
    <UserProvider>
      <Router>
        <Header />
        <Routes />
        <MobileNavBar />
        <Home />
        <About />
        <Showcase />
        <Login />
        <SignUp />
        <Contact />
        <Routes />
      </Router>
   </UserProvider>
    </>
  );
};

export default App;