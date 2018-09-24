import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles/Contact.css";

class EmailResponse extends Component {
  constructor(props) {
    super(props);
    this.renderSpinner = this.renderSpinner.bind(this);
  }
  renderSpinner() {
		if (this.props.contactMeResponse.status === 200) {
			return <div className="thankYou">Thank you, your message was sent.</div>
		}
		if (this.props.contactMeResponse.status === 400) {
			return <div className="thankYou">Something went wrong, please try again.</div>
		}
		if (this.props.showGif) {
			return <img alt="emailing" src="/images/waiting.gif" />;
		}
		return null;
	}

  render() {
    return <div className="contactMeResponse">{this.renderSpinner()}</div>;
  }
}

function mapStateToProps(state) {
	return {
		contactMeResponse: state.contactMe
	}
}

export default connect(mapStateToProps)(EmailResponse);