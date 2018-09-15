import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles/RightRail.css";

class RightRail extends Component {
	render() {
    return (
			<div className="rightRail">
				<div className="rightRailTitle">{this.props.link.text}</div>
				<div className="rightRailImage">
					<img
						alt={this.props.link.text}
						src={this.props.link.image}
					/>
				</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		link: state.link
	}
}

export default connect(mapStateToProps)(RightRail);