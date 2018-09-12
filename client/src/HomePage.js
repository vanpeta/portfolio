import React, { Component } from 'react';
import './App.css';

import Logo from "./components/homepage/Logo";
import NavBar from "./components/homepage/NavBar";
import InputField from "./components/homepage/InputField";
import Buttons from "./components/homepage/Buttons";

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Logo />
        <InputField />
        <Buttons />
      </div>
    );
  }
}

export default HomePage;
