import React, { Component } from 'react';
import { connect } from "react-redux";

import NavBar from "../SearchResultsPage/NavBar"
import About from "../SearchResultsPage/About"
import ResultsList from "../SearchResultsPage/ResultsList";
import NoResults from "../SearchResultsPage/NoResults";

class SearchResultsPage extends Component {

	renderResults() {
		let results;
		if (this.props.results === "No matches" || !this.props.results) {
			results = <NoResults />;
		} else {
			results =
				<div>
					<ResultsList />
					{/* <RightRail /> */}
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
	return { results: state.results, category: state.category };
}

export default connect(mapStateToProps)(SearchResultsPage);