import React, { Component } from "react";
import "./styles/InputField.css";

class InputField extends Component {
  render() {
    return (
      <div className={this.props.page + "_InputFieldBox"}>
        <input className={this.props.page + "_input"} type="text" /><div className="microphone"></div>
      </div>
    );
  }
}

export default InputField;
