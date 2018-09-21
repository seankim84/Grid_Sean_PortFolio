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
              <img src="https://cdn-images-1.medium.com/max/1600/1*safAvjgR68qpQCreDTOcYA.png" alt="" />
            </article>
          </div>
          <div className="title">
            <h2>Projects</h2>
            <div className="title-underline"></div>
          </div>
          <div className="projects-center">
            <article className="project">
              <img src="https://discoversdkcdn.azureedge.net/postscontent/Django.jpg" alt="" />
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
              <img src="https://t4.ftcdn.net/jpg/02/04/17/49/240_F_204174960_1udPCiS0nBe4NpH5niBN8x54jLhe6Nzy.jpg" alt="" />
            </article>
          </div>
          <div className="title">
            <h2>Projects</h2>
            <div className="title-underline"></div>
          </div>
          <div className="projects-center">
            <article className="project">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVbPnYv4hogHgkGsDOaFYX5weDqM3FOecsfAtGzVCIt9r1wsGN" alt="" />
            </article>
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

      </body>
    );
  }
}

export default App;
