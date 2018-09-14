import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles/About.css"

class About extends Component {

	render() {
		if (this.props.results === "No matches" || !this.props.results) {
			return null
		}
		return (
			<div className="about">
				About {this.props.results.results.length + " " + this.props.results.about}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { results: state.results };
}

export default connect(mapStateToProps)(About);