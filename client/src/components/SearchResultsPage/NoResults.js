import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles/NoResults.css";

class NoResults extends Component {
  render() {
    return (
      <div className="noResults">
				<div>
					Carlos doesn't have any documents that matches the term - <span className="searchTerm">{this.props.searchTerm}</span>.
				</div>
				<div className="suggestions">
					Suggestions:
					<ul>
						<li>About</li>
						<li>Experience</li>
						<li>Skills</li>
						<li>Projects</li>
						<li>Education</li>
						<li>Interests</li>
						<li>Awards</li>
						<li>References</li>
						<li>Social Media</li>
					</ul>
				</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { searchTerm: state.searchTerm };
}

export default connect(mapStateToProps)(NoResults);