import React, { Component } from "react";

import ContactContainer from "./ContactContainer";

import "./styles/NavBarItems.css";

class NavBarItems extends Component {
  constructor(props) {
    super(props);
    this.state = { contacting: false };
    this.handleClick = this.handleClick.bind(this);
  }

	handleClick() {
		console.log("clicking")
    this.setState({ contacting: true });
  }

  render() {
		const contacting = this.state.contacting ? <ContactContainer /> : null;
    return (
      <div className={this.props.page + "_NavBarItems"}>
				{ contacting }
				<div className={this.props.page + "_shareBox"} />
        <div
          className={this.props.page + "_contactButtonBox"}
          onClick={this.handleClick}
        >
          Contact
        </div>
      </div>
    );
  }
}

export default NavBarItems;
