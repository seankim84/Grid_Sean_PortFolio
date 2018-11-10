import React from 'react';
import Scroll from 'react-scroll-to-element';

const Header = (props) => (
    <header className={props.element}>
      <nav>
        <div className="nav-container">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png" alt="React_Logo"/>
          <div className="btn">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <ul>
          <Scroll type="class" element={props.element}><li>HOME</li></Scroll>
          <Scroll type="class" element="services"><li>SERVICE</li></Scroll>
          <Scroll type="class" element="projects" offset={-25}><li>PROJECTS</li></Scroll>
          <Scroll type="class" element="about"><li>ABOUTME</li></Scroll>
        </ul>
      </nav>
      <div className="banner">
        <div className="banner-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png" alt="React_Logo"/>
          <h1>Welcome to Sean's Space<span clanssName="and"> 
          </span></h1>
          <h3>Where there's a will, there's a way</h3>
          <div className="banner-icons">
            <a href="https://github.com/seankim84" target="blank"><i class="fab fa-github"></i></a>
            <a href="https://www.facebook.com/sean.kim.31586" target="blank"><i class="fab fa-facebook-square"></i></a>
            <a href="https://www.instagram.com/sean.kim84/" target="blank"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </header>
    )

export default Header;