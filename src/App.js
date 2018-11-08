import React, { Component } from 'react';
import './App.css';
import { BackTop } from 'antd';
import scrollToComponent from 'react-scroll-to-component';

class App extends Component {
  componentDidMount() {
    scrollToComponent(this.Blue, {
      offset: 0,
      align: 'middle',
      duration: 500,
      ease: 'inCirc'
    });
  }

  render() {
    return (
      <body>
        <header ref={(section) => {this.header = section}}>
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
              <li onClick={() => scrollToComponent(this.header, { offset: 0, align: 'top', duration: 700, ease:'inExpo'})}>HOME</li>
              <li onClick={() => scrollToComponent(this.services, { offset: 0, align: 'top', duration: 700, ease:'inExpo'})}>ABOUTME</li>
              <li onClick={() => scrollToComponent(this.projects, { offset: -50, align: 'top', duration: 700, ease:'inExpo'})}>PROJECTS</li>
              <li onClick={() => scrollToComponent(this.about, { offset: -50, align: 'top', duration: 700, ease:'inExpo'})}>CONTACT</li>
            </ul>
          </nav>

          <div className="banner">
          <BackTop className="ant-back-top">
            <div className="ant-back-top-inner">Top</div>
          </BackTop>
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

        <section ref={(section) => {this.services = section;}} className="services">
          <div className="services-center">
            <article className="service">
              <div className="service-icon">
                <i class="fab fa-react"></i>
              </div>
              <div className="service-text">
                <h3>Excellent React</h3>
                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              </div>
            </article>
            <article className="service">
              <div className="service-icon">
                <i class="fab fa-node"></i>
              </div>
              <div className="service-text">
                <h3>Excellent React</h3>
                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              </div>
            </article>
            <article className="service">
              <div className="service-icon">
                <i class="fab fa-js"></i>
              </div>
              <div className="service-text">
                <h3>Excellent React</h3>
                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              </div>
            </article>
          </div>
        </section>

        <section ref={(section) => {this.projects = section}} className="projects">
          <div className="card">
            <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" alt="react"/>
            <div className="card-bar"></div>
            <div className="container">
              <h3><b>Movie_Web</b></h3>
              <div className="card-btn">Get Started</div>
              </div>
          </div>
          <div className="card">
            <img src= "https://s3.amazonaws.com/clarityfm-production/attachments/6605/default/django.png?1442839704" alt="react"/>
            <div className="container">
              <h4><b>Movie_Web</b></h4>
              <p>React</p>
              </div>
          </div>
          <div className="card">
            <img src= "https://camo.githubusercontent.com/011f821efc77f28ac981c7804b92ad2ffa93cfc1/68747470733a2f2f7777772e7265696e6465782e696f2f626c6f672f6275696c64696e672d612d6772617068716c2d7365727665722d776974682d6e6f64652d6a732d616e642d73716c2f4772617068514c5f4e6f64654a532e706e67" alt="react"/>
            <div className="container">
              <h4><b>Movie_Web</b></h4>
              <p>React</p>
              </div>
          </div>
          <div className="card">
            <img src= "http://professional-guru.com/wp-content/uploads/2017/12/Blockchain-Logo-White-1.png" alt="react"/>
            <div className="container">
              <h4><b>Movie_Web</b></h4>
              <p>React</p>
              </div>
          </div>
          <div className="card">
            <img src= "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" alt="react"/>
            <div className="container">
              <h4><b>Movie_Web</b></h4>
              <p>React</p>
              </div>
          </div>
          <div className="card">
            <img src= "https://www.datocms-assets.com/205/1516875064-next.svg" alt="react"/>
            <div className="container">
              <h4><b>Movie_Web</b></h4>
              <p>React</p>
              </div>
          </div>
          <div className="card">
            <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" alt="react"/>
            <div className="container">
              <h4><b>Movie_Web</b></h4>
              <p>React</p>
              </div>
          </div>
          <div className="card">
            <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" alt="react"/>
            <div className="container">
              <h4><b>Movie_Web</b></h4>
              <p>React</p>
              </div>
          </div>
        </section>

        <section ref={(section) => {this.about = section}} className="about">
          <article className="about-card">
            <h3>about Me</h3>
            <i class="far fa-bell"></i>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </article>
        </section>

        <section className="filter"></section>
        
        <footer>
          <div className="footer-icons">
            <a href="https://github.com/seankim84" target="blank"><i class="fab fa-github"></i></a>
            <a href="https://www.facebook.com/sean.kim.31586" target="blank"><i class="fab fa-facebook-square"></i></a>
            <a href="https://www.instagram.com/sean.kim84/" target="blank"><i class="fab fa-instagram"></i></a>
          </div>
          <p>Copyright&copy;Sean's All rights reserved</p>
        </footer>
      </body>
    );
  }
}

export default App;
