import React, { Component } from 'react';
import { connect } from "react-redux";

import NavBar from "../SearchResultsPage/NavBar"
import About from "../SearchResultsPage/About"
import ResultsList from "../SearchResultsPage/ResultsList";
import NoResults from "../SearchResultsPage/NoResults";
import RightRail from "../SearchResultsPage/RightRail";

class SearchResultsPage extends Component {

	renderResults() {
		let results;
		if (this.props.results === "No matches" || !this.props.results) {
			results = <NoResults />;
		} else {
			let rightRail;
			if (this.props.link) {
				rightRail = <RightRail />
			} else {
				rightRail = null;
			}
			results =
				<div>
					<ResultsList />
					{rightRail}
				</div>
		}
		return results;
	}

	render() {
		return (
			<div className="">
				<NavBar />
				<About />
				{this.renderResults()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { results: state.results, category: state.category, link: state.link };
}

export default connect(mapStateToProps)(SearchResultsPage);