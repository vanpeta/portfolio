import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import '../../App.css';
import { searchTerm } from "../../actions/index";

import Logo from "../Logo";
import NavBar from "../HomePage/NavBar";
import InputField from "../HomePage/InputField";
import Buttons from "../HomePage/Buttons";

class HomePage extends Component {
  componentDidMount() {
    this.props.searchTerm("");
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <Logo page="HomePage"/>
        <InputField page="HomePage"/>
        <Buttons />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { searchTerm },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(HomePage);
