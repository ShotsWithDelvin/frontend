import React from 'react';
import ReactDOM from 'react-dom/client';
import Showcase from './pages/Showcase.js';
import './index.css';
import App from './App';

const images = [
  "./tessa.JPG",
  "./shoniah.JPG",
  "./sirrea.JPG",
  "./sirrea2.JPG",
  "./karen.JPG",
  "./cassidy.JPG",
  "./karina.JPG",
  "./rachely.JPG",
  "./zianna.JPG",
  "./zianna2.JPG",
  "./cesar.JPG",
  "./nacier.JPG",
  "./devonte.JPG",
  "./jorden.JPG",
  "./jordan.JPG"
  
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
  
  </>
);
