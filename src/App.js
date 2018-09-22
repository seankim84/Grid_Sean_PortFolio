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
              <h1>Welcome to Sean's Space<span clanssName="and"> 
              </span></h1>
              <h3>Where there's a will, there's a way</h3>
              <div className="banner-icons">
                <a href=""><i class="fab fa-pinterest-square"></i></a>
                <a href=""><i class="fab fa-facebook-square"></i></a>
                <a href=""><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </header>

        <section className="services">
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

        <section className="projects">
          <div className="card">
            <div className="card-title" style={{ background:"url(https://cdn-images-1.medium.com/max/679/1*qUlxDdY3T-rDtJ4LhLGkEg.png) center/cover "}}>React</div>
            <div className="card-bottom">
              <div className="card-text"> Movie_Web</div>
              <div className="btn">Get Started</div>
            </div>
            
          </div>
          <div className="card">
            <div className="card-title" style={{background:"url(https://cdn-images-1.medium.com/max/1600/1*DVkLFr953djSo0q6cA0-kg.png) center/cover "}}>React_Native</div>
            <div className="card-text">Weather_App</div>
            <div className="card-action">
              <button>Get Start</button>
            </div>
          </div>
          <div className="card">
            <div className="card-title" style={{ background:"url(https://s3.amazonaws.com/clarityfm-production/attachments/6605/default/django.png?1442839704) center/cover "}}>Django</div>
            <div className="card-text">sadfljsldkfjlsakjdflkjsadflksldfjkslfdjlsakdfjlskj</div>
            <div className="card-action">
              <button>Get Start</button>
            </div>
          </div>
          <div className="card">
            <div className="card-title" style={{ background:"url(https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_1489714904/typescript.png) center/cover "}}>TypeScript</div>
            <div className="card-text">sadfljslddjlsakdfjlskj</div>
            <div className="card-action">
              <button>Get Start</button>
            </div>
          </div>
          <div className="card">
            <div className="card-title" style={{ background:"url(https://camo.githubusercontent.com/011f821efc77f28ac981c7804b92ad2ffa93cfc1/68747470733a2f2f7777772e7265696e6465782e696f2f626c6f672f6275696c64696e672d612d6772617068716c2d7365727665722d776974682d6e6f64652d6a732d616e642d73716c2f4772617068514c5f4e6f64654a532e706e67) center/cover "}}>Apollo/GraphQL</div>
            <div className="card-text">sadfljsldkfjlsakjdflkjsadflksldfjkslfdjlsakdfjlskj</div>
            <div className="card-action">
              <button>Get Start</button>
            </div>
          </div>
          <div className="card">
            <div className="card-title" style={{background:"url(http://professional-guru.com/wp-content/uploads/2017/12/Blockchain-Logo-White-1.png) center/cover "}}>BlockChain</div>
            <div className="card-text">sadfljsldkfjlsakjdflkjsadflksldfjkslfdjlsakdfjlskj</div>
            <div className="card-action">
              <button>Get Start</button>
            </div>
          </div>
          <div className="card">
            <div className="card-title" style={{ background:"url(https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png) center/cover "}}>Redux</div>
            <div className="card-text">sadfljsldkfjlsakjdflkjsadflksldfjkslfdjlsakdfjlskj</div>
            <div className="card-action">
              <button>Get Start</button>
            </div>
          </div>
          <div className="card">
            <div className="card-title" style={{ background:"url(https://www.datocms-assets.com/205/1516875064-next.svg) center/cover "}}>NEXT.JS</div>
            <div className="card-text">sadfljsldkfjlsakjdflkjsadflksldfjkslfdjlsakdfjlskj</div>
            <div className="card-action">
              <button>Get Start</button>
            </div>
          </div>
               
        </section>

        <section className="about">
          <article className="about-card">
            <h3>about Me</h3>
            <i class="far fa-bell"></i>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </article>
        </section>

        <section className="filter"></section>
        
        <footer>
          <div className="footer-icons">
            <a href=""><i class="fab fa-pinterest-square"></i></a>
            <a href=""><i class="fab fa-facebook-square"></i></a>
            <a href=""><i class="fab fa-instagram"></i></a>
          </div>
          <p>Copyright&copy;FastAndPrecise All rights reserved</p>
        </footer>
      </body>
    );
  }
}

export default App;
