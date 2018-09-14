import React, { Component } from "react";
import { connect } from "react-redux";

import Result from "./Result";

import "./styles/Results.css";

class ResultsList extends Component {

	renderResults() {
		return this.props.results.results.map((r, i) => {
			return (
        <Result
          key={i}
          title={r.title}
          url={r.url}
          description={r.description}
          category={r.category}
        />
      )
		})
  }
  
  render() {
    if (this.props.results === "No matches" || !this.props.results) {
      return null;
    }
    return (
      <div className="ResultsBox">
				{this.renderResults()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { results: state.results };
}

export default connect(mapStateToProps)(ResultsList);
