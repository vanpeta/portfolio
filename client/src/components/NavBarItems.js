import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { contacting } from "../actions/index";

import ContactContainer from "./ContactContainer";

import "./styles/NavBarItems.css";

class NavBarItems extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

	handleClick() {
    this.props.contacting(true);
  }

  render() {
		const contacting = this.props.isContacting === true ? <ContactContainer /> : null;
    return (
      <div className={this.props.page + "_NavBarItems"}>
				{ contacting }
				<div className={this.props.page + "_shareBox"} />
        <div
          className={this.props.page + "_contactButtonBox"}
          onClick={this.handleClick}
        >
          Contact
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
	return {
		isContacting: state.contacting
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			contacting
		},
		dispatch
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarItems);