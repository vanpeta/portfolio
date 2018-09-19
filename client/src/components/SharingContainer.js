import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { sharing } from "../actions/index";

import "./styles/SharingContainer.css";

class SharingContainer extends Component {
	constructor(props) {
		super(props);
		this.handleClose = this.handleClose.bind(this);
	}

	handleClose(e) {
		e.stopPropagation();
		this.props.sharing(false);
	}

	render() {
		return (
			<div className="SharingContainer" onClick={this.handleClose}>
				<div className="sharingBox">
				<div className="shraringRow Share">Share</div>
					<div className="Icons">
						<div className="shraringRow first">
							<div className="shraringIcon fb"></div>
							<div className="shraringIcon tw"></div>
							<div className="shraringIcon li"></div>
						</div>
						<div className="shraringRow">
							<div className="shraringIcon gplus"></div>
							<div className="shraringIcon pt"></div>
							<div className="shraringIcon wb"></div>
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
			sharing
		},
		dispatch
	);
}

export default connect(null, mapDispatchToProps)(SharingContainer);