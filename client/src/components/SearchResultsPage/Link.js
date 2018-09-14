import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { linkSelected } from "../../actions/index";

class Link extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		let link = {
			text: this.props.text,
			image: this.props.image,
			mapLocation: this.props.mapLocation,
			description: this.props.description
		}
		this.props.linkSelected(link);
	}
  render() {
    return (
			<div className="link" onClick={this.handleClick}>
        {this.props.text}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ linkSelected }, dispatch);
}

export default connect(null, mapDispatchToProps)(Link);
