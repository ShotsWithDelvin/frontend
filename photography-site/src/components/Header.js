import React from 'react';
// import Logo from '../images/header/logov3.png';
import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {

  return (
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/> */}
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <Link to={'/'} class="navbar-item">
        Home
      </Link>

      <Link to={'/showcase'}class="navbar-item">
        Showcase
      </Link>

      <Link to={'/about'} class="navbar-item">
        About
      </Link>

      <Link to={'/contact'} class="navbar-item">
        Contact
      </Link>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <Link to={'/signup'} class="button is-black">
            <strong>Sign up</strong>
          </Link>
          <Link to ={'/login'} class="button is-black">
            Log in
          </Link>
        </div>
      </div>
    </div>
  </div>
</nav>
  ) 
};

export default Header;