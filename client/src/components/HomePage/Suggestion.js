import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";

import { searchTerm, searchTermEntered } from "../../actions/index";

class Suggestion extends Component {
	constructor(props) {
		super(props);
		this.state = { redirect: false };
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.props.searchTerm(this.props.text);
		this.props.searchTermEntered(this.props.text);
	}

	componentWillReceiveProps() {
		if (this.props.page === "HomePage") {
			this.setState({ redirect: true });
		}
	}
	render() {
		if (this.state.redirect) {
			return <Redirect to="/search_results" />;
		}
		return (
			<div className="Suggestion" onMouseDown={this.handleClick}>
				{this.props.text}
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ searchTerm, searchTermEntered }, dispatch);
}

function mapStateToProps(state) {
	return {
		currentSearch: state.searchTerm
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Suggestion);