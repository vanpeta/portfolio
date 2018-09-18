import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";

import ConnectedMap from "./ConnectedMap";

class MapContainer extends Component {
  render() {

    return (
			<div className="mapContainer">
				<ConnectedMap google={this.props.google} />
			</div>
    );
  }
}

export default GoogleApiWrapper({
	apiKey: process.env.REACT_APP_MAPS_API_KEY
})(MapContainer);