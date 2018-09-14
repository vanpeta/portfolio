import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles/About.css";

class Result extends Component {
  render() {
    return (
      <div className="result">
				<div className="resultTitle">{this.props.title}</div>
				<div className="resultUrl">{this.props.url}</div>
				<div className="resultDescription">{this.props.description}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { results: state.results };
}

export default connect(mapStateToProps)(Result);
