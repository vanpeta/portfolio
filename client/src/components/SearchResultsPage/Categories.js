import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles/Categories.css"

class Categories extends Component {

	renderCategories() {
		console.log("!!!!", this.props.results.results);
		let cat = []
		this.props.results.results.map( r => {
			if (!cat.includes(r.category)) {
				cat.push(r.category)
			}
			return cat;
		});
		console.log("ZZZZ", cat);
		return cat.map((c, i) => {
			return (
				<li key={i} className="categories">
          {c}
				</li>
			);
		})
	}

	render() {
		return (
			<div className="CategoriesBox">
				<ul className="categoriesList">
					<li className="categories">All</li>
					{this.renderCategories()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		results: state.results
	}
}

export default connect(mapStateToProps)(Categories);