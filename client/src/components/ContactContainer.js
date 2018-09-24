import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { contacting, contactMeRequest } from "../actions/index";

import "./styles/Contact.css";
import ContactForm from "./ContactForm";

class ContactContainer extends Component {
	render() {
		return (
			<div className="ContactContainer">
				<div className="contactFormPannel">
					<div className="contactFormBox">
						<div className="contactFormHeader">
							<h3>Contact Carlos</h3>
						</div>
						<div>
							<ContactForm contact={this.props.contactMeRequest} response={this.props.contactMe}/>
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
			contacting, contactMeRequest
    },
    dispatch
  );
}

function mapStateToProps(state) {
	return {
		contactMe: state.contactMe 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer);