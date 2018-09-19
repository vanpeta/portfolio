import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { contacting, sharing } from "../actions/index";

import ContactContainer from "./ContactContainer";
import SharingContainer from "./SharingContainer";

import "./styles/NavBarItems.css";

class NavBarItems extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.showSharing = this.showSharing.bind(this);
  }

  showSharing() {
    this.props.sharing(true);
  }

	handleClick() {
    this.props.contacting(true);
  }

  render() {
    const contacting = this.props.isContacting ? <ContactContainer /> : null;
    const sharing = this.props.isSharing ? <SharingContainer /> : null;
    return (
      <div className={this.props.page + "_NavBarItems"}>
				{ contacting }
				<div className={this.props.page + "_shareBox"} onClick={this.showSharing}>
          { sharing }
        </div>
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
    isContacting: state.contacting, isSharing: state.sharing
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
      contacting, sharing
		},
		dispatch
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarItems);