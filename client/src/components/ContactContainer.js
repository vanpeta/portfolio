import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { contacting, contactMe, clearResponse } from "../actions/index";
import "./styles/Contact.css";
import ContactForm from "./ContactForm";

class ContactContainer extends Component {
	constructor(props) {
		super(props);
		this.state = { showGif: false }
		this.handleClose = this.handleClose.bind(this);
		this.handleSend = this.handleSend.bind(this);
	}

	handleClose() {
		this.props.contacting(false);
	}

	handleSend() {
		this.props.contactMe(this.props.formData);
		this.setState({ showGif: true })
		// this.props.contacting(false);
	}

	shouldComponentUpdate(nextProps) {
		return this.props.formData === nextProps.formData
	}

	componentWillUnmount() {
		this.props.clearResponse();
	}
	renderSpinner() {
		if (this.state.showGif && this.props.contactMeResponse.status === 200) {
			return <div className="thankYou">Thank you, Your message was sent.</div>
		}
		if (this.state.showGif && this.props.contactMeResponse.status === 400) {
			return <div className="thankYou">Something went wrong, please try again.</div>
		}
		if (this.state.showGif) {
      return <img alt="emailing" src="/images/waiting.gif" />;
    }
		return null
	}

	renderButtons() {
		if (this.props.contactMeResponse.status) {
			return (
				<div className="contactForButtonBox">
					<div className="contactFormButton" id="cancel" onClick={this.handleClose}>CLOSE</div>
				</div>
			)
		} else {
			return (
				<div className="contactForButtonBox">
					<div className="contactFormButton" id="cancel" onClick={this.handleClose}>CANCEL</div>
					<div className="contactFormButton" onClick={this.handleSend}>SEND</div>
				</div>
			)
		}
	}

	render() {
		console.log("ZZZZZZZZZZZ", this.props);
		return (
			<div className="ContactContainer">
				<div className="contactFormPannel">
					<div className="contactFormBox">
						<div className="contactFormHeader">
							<h3>Contact Carlos</h3>
						</div>
						<div>
							<ContactForm />
							<div className="contactMeResponse">{this.renderSpinner()}</div>
						</div>
						{this.renderButtons()}
					</div>
				</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ contacting, contactMe, clearResponse }, dispatch);
}

function mapStateToProps(state) {
	return { formData: state.formData, contactMeResponse: state.contactMe };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer);