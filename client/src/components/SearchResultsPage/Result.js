import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles/About.css";

class Result extends Component {
  render() {
    return (
      <div className="result">
				<h3 className="resultTitle">
					<a href={this.props.url} target="_blank">{this.props.title}</a>
				</h3>
				<div className="resultUrl">
					<cite>{this.props.url}</cite>
				</div>
				<div className="resultDescription">
					<span>{this.props.description}</span>
				</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { results: state.results };
}

export default connect(mapStateToProps)(Result);
