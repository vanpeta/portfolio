import { Map, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
	render() {
		return (
			<Map
				google={this.props.google}
				zoom={15}
				initialCenter={{ lat: 40.854885, lng: -88.081807}}
			/>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: "mykey"
})(MapContainer);