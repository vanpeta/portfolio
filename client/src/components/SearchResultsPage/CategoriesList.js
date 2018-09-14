import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { categorySelected } from "../../actions/index"

import Category from "./Category";

import "./styles/Categories.css"

class CategoriesList extends Component {
  constructor(props) {
		super(props);
		this.state = { isActive: false };
    this.handleClick = this.handleClick.bind(this);
  }

  renderCategories() {
		if (!this.props.results || this.props.results === "No matches") {
      return null;
    }
    let cat = [];
    this.props.results.results.map(r => {
      if (!cat.includes(r.category)) {
        cat.push(r.category);
      }
      return cat;
    });
    return cat.map((c, i) => {
      return <Category key={i} index={i} value={c} />;
    });
  }

  handleClick(e) {
		this.props.categorySelected(e.target.innerText);
		this.setState({ isActive: true });
	}

  render() {
		let className = this.props.category === "All" ? "category active" : "category";
    return (
      <div className="CategoriesBox">
        <ul className="categoriesList">
					<li className={className} onClick={this.handleClick}>
            All
          </li>
          {this.renderCategories()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		results: state.results,
		category: state.category
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ categorySelected },
		dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);