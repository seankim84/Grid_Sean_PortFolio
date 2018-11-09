import React, { Component } from 'react';
import './App.css';
import { Header, Service, Projects, AboutMe, Footer } from './components';

class App extends Component {
  render() {
    return (
      <body>
        <Header element="header" />
        <Service element="services" />
        <Projects />
        <AboutMe />
        <Footer />
      </body>
    );
  }
}

export default App;
