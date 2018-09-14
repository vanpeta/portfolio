import React, { Component } from "react";

import Link from "./Link"

import "./styles/About.css";

class Result extends Component {

	renderLinks() {
		if (this.props.links.length > 0) {
			return this.props.links.map((l, i) => {
				return (
					<Link
						key={i}
						text={l.text}
						image={l.image}
						mapLocation={l.mapLocation}
						description={l.description}
					/>
				);
			})
		} else {
			return null
		}
	}
  render() {
    return (
      <div className="result">
				<h3 className="resultTitle">
					<a href={this.props.url} target="_blank">{this.props.title}</a>
				</h3>
				<div className="resultUrl">
					<cite>{this.props.url}</cite>
				</div>
				<div className="resultDescription">
					<span>{this.props.description}</span>
				</div>
				<div className="resultLinksList">
					{this.renderLinks()}
				</div>
      </div>
    );
  }
}

export default Result;
