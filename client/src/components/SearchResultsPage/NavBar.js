import React, { Component } from "react";

import NavBarItems from "../NavBarItems";
import Logo from "../Logo";

class NavBar extends Component {
  render() {
    return (
			<div className="SearchResultsPage_NavBarBox">
				<Logo page="SearchResultsPage"/>
				<NavBarItems page="SearchResultsPage"/>
      </div>
    );
  }
}

export default NavBar;