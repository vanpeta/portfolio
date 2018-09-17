import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class MapContainer extends Component {
  render() {
		const style = {
			width: '366px',
			height: '366px'
		}
    return (
			<div className="mapContainer">
				<Map
					google={this.props.google}
					zoom={5}
					initialCenter={{ lat: this.props.lat, lng: this.props.lng }}
					style={style}
				>
					<Marker
						title={this.props.name}
						position={{ lat: this.props.lat, lng: this.props.lng }}
						/>
				</Map>
			</div>
    );
  }
}

export default GoogleApiWrapper({
	apiKey: process.env.REACT_APP_MAPS_API_KEY
})(MapContainer);