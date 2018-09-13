import React, { Component } from "react";

import NavBarItems from "../NavBarItems";
import Logo from "../Logo";
import InputField from "../HomePage/InputField";
import Categories from "./Categories";

class NavBar extends Component {
  render() {
    return (
			<div className="SearchResultsPage_NavBarBox">
				<Logo page="SearchResultsPage"/>
        <InputField page="SearchResultsPage"/>
				<NavBarItems page="SearchResultsPage"/>
        <Categories />
      </div>
    );
  }
}

export default NavBar;