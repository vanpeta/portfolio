import React, { Component } from 'react';
import "./styles/NavBar.css";

class NavBar extends Component {
	render() {
		return (
			<div className="NavBarBox">
				<div className="NavBarItems">
					<div className="shareBox"></div>
					<div className="contactButtonBox">Contact</div>
				</div>
			</div>
		);
	}
}

export default NavBar;