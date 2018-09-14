import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { categorySelected } from "../../actions/index";

class Category extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
		this.props.categorySelected(e.target.innerText);
	}

  render() {
		let className = this.props.value === this.props.category ? "category active" : "category";
    return (
      <li key={this.props.index} className={className} onClick={this.handleClick}>
        {this.props.value}
      </li>
    );
  }
}

function mapStateToProps(state) {
	return {
		category: state.category
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ categorySelected }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);