import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Redirect } from "react-router-dom";

import "./styles/InputField.css";

import { searchTermEntered, searchTerm, linkSelected } from "../../actions/index";

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      submit: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({searchTerm: e.target.value}, () => {
      this.props.searchTerm(this.state.searchTerm);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.searchTerm) {
      this.props.searchTermEntered(this.state.searchTerm);
      this.props.linkSelected(null);
      this.setState({
        submit: true
      });
    }
  }

  componentDidMount() {
    if (this.props.results && this.props.page === "SearchResultsPage") {
      this.setState({
        searchTerm: this.props.currentSearch
      })
    }
  }

  componentDidUpdate() {
      if (this.state.submit) {
      this.setState({
        submit: false
      });
    }
  }

  render() {
    if (this.state.submit) {
      return <Redirect to="/search_results" />;
    }
    return (
      <div className={this.props.page + "_InputFieldBox"}>
        <form onSubmit={this.handleSubmit}>
          <input
            className={this.props.page + "_input"}
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
        </form>
        <div className="microphone" />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      searchTermEntered, searchTerm, linkSelected
    },
    dispatch
  )
}

function mapStateToProps(state) {
  return {
    currentSearch: state.searchTerm,
    results: state.results
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
