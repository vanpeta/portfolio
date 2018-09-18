import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { contacting } from "../actions/index";
import "./styles/Contact.css";

class ContactContainer extends Component {
	constructor(props) {
		super(props);
		this.handleClose = this.handleClose.bind(this);
	}

	handleClose() {
		this.props.contacting(false);
	}
	
	render() {
		return (
			<div className="ContactContainer">
				<div className="contactFormPannel">
					<div className="contactFormBox">
						<div className="contactFormHeader">
							<h3>Contact Carlos</h3>
						</div>
						<div className="contactForButtonBox">
							<div className="contactFormButton" id="cancel" onClick={this.handleClose}>CANCEL</div>
							<div className="contactFormButton">SEND</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      contacting
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(ContactContainer);