import React, { Component } from 'react';
import '../../App.css';

import Logo from "../Logo";
import NavBar from "../HomePage/NavBar";
import InputField from "../HomePage/InputField";
import Buttons from "../HomePage/Buttons";

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Logo page="HomePage"/>
        <InputField />
        <Buttons />
      </div>
    );
  }
}

export default HomePage;
