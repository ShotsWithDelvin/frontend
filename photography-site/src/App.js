import React from 'react';
import Header from './components/Header';
import Routes from './components/Routes';
import MobileNavBar from './components/MobileNavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Contact from './pages/Contact';
import { UserProvider } from './context/userContext';
import Showcase from './pages/Showcase';
import APIURL from './apiEndpoint'
import { useEffect } from 'react';


const App = () => {


  
  useEffect(() => {
     fetch(`${APIURL}/`)
  });



  return (

    <>
    <div>{}</div>
    <UserProvider>
      <Router>
        <Header />
        <Routes />
        <MobileNavBar />
        <Home />
        <Showcase />
        <About />
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