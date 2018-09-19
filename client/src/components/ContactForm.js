import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updatingFormData } from "../actions/index";
import "./styles/Contact.css";

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {textarea: "", email: "", name: ""}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		this.setState({
			textarea: this.refs.textArea.value,
			email: this.refs.email.value,
			name: this.refs.name.value
		 }, () => {
				this.props.updatingFormData(this.state);
			})
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
						className="ContactFormName"
						type="text"
						ref="name"
						onChange={this.handleChange}
						value={this.state.name}
						placeholder="Your Name"
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