import React, { Component } from 'react';
import './App.css';

import Logo from "./components/homepage/Logo";
import NavBar from "./components/homepage/NavBar";
import InputField from "./components/homepage/InputField";
import Buttons from "./components/homepage/Buttons";
import Footer from "./components/homepage/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Logo />
        <InputField />
        <Buttons />
        <Footer />
      </div>
    );
  }
}

export default App;
