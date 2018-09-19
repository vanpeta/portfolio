import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { contacting, contactMe } from "../actions/index";
import "./styles/Contact.css";
import ContactForm from "./ContactForm";

class ContactContainer extends Component {
	constructor(props) {
		super(props);
		this.handleClose = this.handleClose.bind(this);
		this.handleSend = this.handleSend.bind(this);
	}

	handleClose() {
		this.props.contacting(false);
	}

	handleSend() {
		console.log("data", this.props.formData);
		this.props.contactMe(this.props.formData);

	}

	render() {
		return (
			<div className="ContactContainer">
				<div className="contactFormPannel">
					<div className="contactFormBox">
						<div className="contactFormHeader">
							<h3>Contact Carlos</h3>
						</div>
						<div>
							<ContactForm />
						</div>
						<div className="contactForButtonBox">
							<div className="contactFormButton" id="cancel" onClick={this.handleClose}>CANCEL</div>
							<div className="contactFormButton" onClick={this.handleSend}>SEND</div>
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
			contacting, contactMe
    },
    dispatch
  );
}

function mapStateToProps(state) {
	return {
		formData: state.formData
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer);