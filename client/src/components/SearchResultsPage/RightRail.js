import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles/RightRail.css";

import MapContainer from "./MapContainer";

class RightRail extends Component {
	render() {
    return (
			<div className="rightRail">
				<div className="rightRailImage">
					<img
						alt={this.props.link.text}
						src={this.props.link.image}
					/>
				</div>
				<div className="rightRailTitle">{this.props.link.text}</div>
				<MapContainer
					lat={this.props.link.mapLocation.lat}
					lng={this.props.link.mapLocation.lng}
					name={this.props.link.text}
				/>
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