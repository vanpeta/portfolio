import React, { Component } from 'react';

import "./styles/Logo.css";

class Logo extends Component {
	render() {
		return (
			<div className={this.props.page + "_LogoBox"}>
				<div className={this.props.page + "_logo"}>
					<div className={this.props.page + "_name"}>
						<span className="c">C</span>
						<span className="a">a</span>
						<span className="r">r</span>
						<span className="l">l</span>
						<span className="o">o</span>
						<span className="s">s</span>
					</div>
					<div className={this.props.page + "_lastName"}>Allende</div>
				</div>
      </div>
		);
	}
}

export default Logo;