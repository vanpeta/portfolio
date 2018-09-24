import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { contacting, clearResponse } from "../actions/index";

class ContactButtons extends Component {
	constructor(props) {
		super(props);
		this.handleClose = this.handleClose.bind(this);
	}

	handleClose() {
		this.props.contacting(false);
		this.props.clearResponse();
	}

	renderButtons() {
		if (this.props.contactMeResponse.status) {
			return (
				<div className="contactForButtonBox">
        	<button className="contactFormButton" id="cancel" onClick={this.handleClose}>
          	CLOSE
        	</button>
				</div>
			);
		}
	}
	render() {
		const buttons = this.props.contactMeResponse.status ? this.renderButtons() : <div className="contactForButtonBox">
        <button className="contactFormButton" id="cancel" onClick={this.handleClose}>
          CANCEL
        </button>
        <button className="contactFormButton" type="submit">
          SEND
        </button>
      </div>;
		return buttons;
			
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			contacting, clearResponse
		},
		dispatch
	);
}

function mapStateToProps(state) {
  return {
    contactMeResponse: state.contactMe
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactButtons);