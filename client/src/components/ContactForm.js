import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updatingFormData } from "../actions/index";
import "./styles/Contact.css";

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {textarea: "", email: ""}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		this.setState({
			textarea: this.refs.textArea.value,
			email: this.refs.email.value })
		console.log("state",this.state)
		this.props.updatingFormData(this.state);
	}

	render() {
		return (
			<div className="ContactForm">
				<form>
					<textarea
						className="ContactFormTextArea"
						ref="textArea"
						value={this.state.textarea}
						onChange={this.handleChange}
						placeholder="What do you want to say?"
					/>
					<input
						className="ContactFormEmail"
						type="text"
						ref="email"
						onChange={this.handleChange}
						value={this.state.email}
						placeholder="Your Email"
					/>
				</form>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			updatingFormData
		},
		dispatch
	);
}

function mapStateToProps(state) {
	return {
		formData: state.formData
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);