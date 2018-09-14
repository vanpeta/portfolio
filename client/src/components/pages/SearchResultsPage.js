import React, { Component } from 'react';

import NavBar from "../SearchResultsPage/NavBar"
import About from "../SearchResultsPage/About"
import ResultsList from "../SearchResultsPage/ResultsList";

class SearchResultsPage extends Component {
	render() {
		return (
			<div className="">
				<NavBar />
				<About />
				<div>
					<ResultsList />
					{/* <RightRail /> */}
				</div>
			</div>
		);
	}
}

export default SearchResultsPage;