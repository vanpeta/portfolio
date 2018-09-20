import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles/RightRail.css";

import MapContainer from "./MapContainer";

class RightRail extends Component {
	renderMap() {
		if (this.props.mapLocation.lat && this.props.mapLocation.lng) {
			return (
				<MapContainer
					lat={this.props.link.mapLocation.lat}
					lng={this.props.link.mapLocation.lng}
					name={this.props.link.text}
				/>
			)
		}
		return null;
	}
	renderImage() {
		if (this.props.link.image) {
			return <img alt={this.props.link.text} src={this.props.link.image} />
		}
		return null;
	}
	render() {
    return (
			<div className="rightRail">
				<div className="rightRailImage">
					{this.renderImage()}
				</div>
				<div className="rightRailTitle">{this.props.link.text}</div>
					{this.renderMap()}
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