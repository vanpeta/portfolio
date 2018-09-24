import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";

import EmailResponse from "./EmailResponse";
import ContactButtons from "./ContactButtons";
import "./styles/Contact.css";

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state={ gig: false }
		this.handleClose = this.handleClose.bind(this);
	}

	handleClose() {
		this.props.contacting(false);
	}

	renderField({ className, input, placeholder, type, meta: { touched, error } }) {
		return (
			<div className={className + "_container"}>
				<input className={className} {...input} placeholder={placeholder} type={type} />
				{ touched && (error && <span className="error">{error}</span>) }
			</div>
		)
	}
	
	componentWillReceiveProps(nextProps) {
		if (nextProps.response.status) {
			this.setState({ gif: false })
		}
	}

	render() {
		return <div className="ContactForm">
        <form onSubmit={this.props.handleSubmit(values => {
						this.setState({ gif: true });
						this.props.contact(values);
						}
          )}>
          <Field className="ContactFormTextArea" component={this.renderField} type="textarea" name="message" placeholder="What do you want to say?" />
          <Field className="ContactFormName" component={this.renderField} type="text" name="name" placeholder="Your Name" />
          <Field className="ContactFormEmail" component={this.renderField} type="text" name="email" placeholder="Your Email" />
          <EmailResponse showGif={this.state.gif}/>
					<ContactButtons />
        </form>
      </div>;
	}
}

function validate(values) {
	const errors = {}
	if (!values.message) {
		errors.message = "This field is required";
	}
	if (!values.name) {
		errors.name = "This field is required";
	}
	if (!values.email) {
		errors.email = "This field is required";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = "Invalid email address";
	}
	return errors;
}

export default reduxForm({ form: "contact", validate })(ContactForm);