import React, { Component } from 'react';

import "./styles/Contact.css";

class ContactContainer extends Component {
	render() {
		return (
			<div className="ContactContainer">
				<div className="contactFormPannel">
					<div className="contactFormBox">
						<div className="contactFormHeader">
							<h3>Contact Carlos</h3>
						</div>
						<div className="contactForButtonBox">
							<div className="contactFormButton" id="cancel">CANCEL</div>
							<div className="contactFormButton">SEND</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactContainer;