import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <body>
        <header>
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
              <li><a href="a">HOME</a></li>
              <li><a href="b">ABOUTME</a></li>
              <li><a href="c">EDUCATION</a></li>
              <li><a href="d">RESUME</a></li>
              <li><a href="e">GALLERY</a></li>
              <li><a href="f">CONTACT</a></li>
            </ul>
          </nav>

          <div className="banner">
            <div className="banner-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png" alt="React_Logo"/>
              <h1>About Sean<span clanssName="and"> &amp;
              </span>co</h1>
              <h3>Intro of MySelf to Friends</h3>
              <div className="banner-icons">
                <a href=""><i class="fab fa-pinterest-square"></i></a>
                <a href=""><i class="fab fa-facebook-square"></i></a>
                <a href=""><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </header>
      </body>
    );
  }
}

export default App;
