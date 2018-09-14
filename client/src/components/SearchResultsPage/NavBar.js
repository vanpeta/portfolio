import React, { Component } from "react";

import NavBarItems from "../NavBarItems";
import Logo from "../Logo";
import InputField from "../HomePage/InputField";
import CategoriesList from "./CategoriesList";

class NavBar extends Component {
  render() {
    return (
			<div className="SearchResultsPage_NavBarBox">
				<Logo page="SearchResultsPage"/>
        <InputField page="SearchResultsPage"/>
				<NavBarItems page="SearchResultsPage"/>
        <CategoriesList />
      </div>
    );
  }
}

export default NavBar;