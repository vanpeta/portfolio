import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


import "./styles/InputField.css";

import { searchTermEntered } from "../../actions/index";

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.searchTerm) {
      this.props.searchTermEntered(this.state.searchTerm);
    }
  }

  render() {
    return (
      <div className={this.props.page + "_InputFieldBox"}>
      <form onSubmit={this.handleSubmit}>
        <input
          className={this.props.page + "_input"}
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
      </form>
        <div className="microphone"></div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      searchTermEntered
    },
    dispatch
  )
}

export default connect(null, mapDispatchToProps)(InputField);
