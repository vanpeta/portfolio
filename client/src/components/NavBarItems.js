import React, { Component } from "react";

import "./styles/NavBarItems.css";

class NavBarItems extends Component {
  render() {
    return (
			<div className={this.props.page + "_NavBarItems"}>
				<div className={this.props.page + "_shareBox"} />
				<div className={this.props.page + "_contactButtonBox"}>Contact</div>
			</div>
    );
  }
}

export default NavBarItems;
