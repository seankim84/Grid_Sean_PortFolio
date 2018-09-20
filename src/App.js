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
          <div className="title">
            <h2>Projects</h2>
            <div className="title-underline"></div>
          </div>
          <div className="projects-center">
            <article className="project">
              <img src="https://cdn-images-1.medium.com/max/2000/1*_DOHv30w-0eI-Ysz5U47Yg.png" alt="" />
            </article>
          </div>
          <div className="title">
            <h2>Projects</h2>
            <div className="title-underline"></div>
          </div>
          <div className="projects-center">
            <article className="project">
              <img src="data:image/png;base64,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" alt="" />
            </article>
          </div>
          <div className="title">
            <h2>Projects</h2>
            <div className="title-underline"></div>
          </div>
          <div className="projects-center">
            <article className="project">
              <img src="https://juststickers.in/wp-content/uploads/2013/10/Django.png" alt="" />
            </article>
          </div>
          <div className="title">
            <h2>Projects</h2>
            <div className="title-underline"></div>
          </div>
          <div className="projects-center">
            <article className="project">
              <img src="https://cdn-images-1.medium.com/max/1600/1*Wvsl4OLL8kcZD4Qo6uqDuw.png" alt="" />
            </article>
          </div>
          <div className="title">
            <h2>Projects</h2>
            <div className="title-underline"></div>
          </div>
          <div className="projects-center">
            <article className="project">
              <img src="https://steemitimages.com/DQmd3mp8B3u9uAmLatz1dPDKwspCp6Y42PjXmN1nxapsmF4/get-bitcoins.png" alt="" />
            </article>
          </div>
          <div className="title">
            <h2>Projects</h2>
            <div className="title-underline"></div>
          </div>
          <div className="projects-center">
            <article className="project">
              <img src="https://cdn-images-1.medium.com/max/1200/1*49DDRZhUWvVnH-QNHuSUSw.png" alt="" />
            </article>
          </div>
        </section>

      </body>
    );
  }
}

export default App;
