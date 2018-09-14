import React, { Component } from "react";
import { connect } from "react-redux";

import Result from "./Result";

import "./styles/Results.css";

class ResultsList extends Component {

	renderResults() {
    let arr = []
    if (this.props.category !== "All") {
      arr = this.props.results.results.filter(r => r.category === this.props.category);
    } else {
      arr = this.props.results.results;
    }
		return arr.map((r, i) => {
			return (
        <Result
          key={i}
          title={r.title}
          url={r.url}
          description={r.description}
          category={r.category}
          links={r.links}
        />
      )
		})
  }
  
  render() {
    return (
      <div className="ResultsBox">
				{this.renderResults()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { results: state.results, category: state.category };
}

export default connect(mapStateToProps)(ResultsList);
