import React, { Component } from "react";
import "./styles/InputField.css";

class InputField extends Component {
  render() {
    return (
      <div className="InputFieldBox">
        <input className="input" type="text" /><div className="microphone"></div>
      </div>
    );
  }
}

export default InputField;
