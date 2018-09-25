import React, { Component } from "react";

import Suggestion from "./Suggestion";
import "./styles/Suggestion.css";

class SuggestionsList extends Component {
	renderSugesstions() {
		const suggestions = ["About", "Education", "Experience", "Skills", "Projects"];
		return suggestions.map((suggestion, index) => {
      return <Suggestion key={index} text={suggestion} page={this.props.page} />
		})
	}
  render() {
    return (
      <div className={this.props.page + "_SuggestionsList"}>
        {this.renderSugesstions()}
      </div>
    );
  }
}

export default SuggestionsList;
