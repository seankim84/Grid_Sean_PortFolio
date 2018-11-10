import React, { Component } from 'react';
import './App.css';
import { Header, Service, Projects, AboutMe, Footer } from './components';
import CardImage from './components/CardImage';


class App extends Component {
  render() {
    return (
      <body>
        <Header element="header" />
        <Service element="services" />
        <Projects />
        <CardImage />
        <AboutMe />
        <Footer />
        
      </body>
    );
  }
}

export default App;
