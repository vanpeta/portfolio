import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { searchTerm } from "../../actions/index";

class Suggestion extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.props.searchTerm(this.props.text)
	}
	render() {
		return (
			<div className="Suggestion" onClick={this.handleClick}>
				{this.props.text}
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

export default connect(null, mapDispatchToProps)(Suggestion);