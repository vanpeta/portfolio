import React, { Component } from "react";
import { connect } from "react-redux";
import { Map, Marker } from "google-maps-react";

class ConnectedMap extends Component {
	render() {
		const style = {
			width: '366px',
			height: '366px'
		}
		return (
			<div>
				<Map
					google={this.props.google}
					zoom={5}
					initialCenter={ this.props.link.mapLocation }
					center={this.props.link.mapLocation}
					style={style}
				>
					<Marker
						title={this.props.link.name}
						position={ this.props.link.mapLocation }
					/>
				</Map>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    link: state.link
  };
}

export default connect(mapStateToProps)(ConnectedMap);