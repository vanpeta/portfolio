import React, { Component } from 'react';

import NavBarItems from "../NavBarItems";

import "./styles/NavBar.css";

class NavBar extends Component {
	render() {
		return (
			<div className="HomePage_NavBarBox">
				<NavBarItems page="HomePage"/>
			</div>
		);
	}
}

export default NavBar;