import React from 'react';
import { motion } from 'framer-motion';
// import TestImg from '../images/home/test.JPG'
import { Link } from 'react-router-dom'
import './Home.css'
const Home = () => {
  return (
    <div>
      <div class="hero">
        <div class="hero-text">
          <h1>Photographer</h1>
          <p>Brooklyn, New York</p>
          <button> View Showcase</button>
        </div>
        <div class="hero-image">
          <img src='https://d2j6dbq0eux0bg.cloudfront.net/images/12162034/837837040.jpg' alt='gentlman cat' />
        </div>
      </div>
    </div>
  )
};

export default Home;