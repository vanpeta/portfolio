import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";

import SuggestionsList from "./SuggestionsList";

import "./styles/InputField.css";

import { searchTermEntered, searchTerm, linkSelected } from "../../actions/index";

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      submit: false,
      suggestions: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showSuggestions = this.showSuggestions.bind(this);
    this.hideSuggestions = this.hideSuggestions.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({searchTerm: e.target.value}, () => {
      this.props.searchTerm(this.state.searchTerm);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.currentSearch) {
      this.props.searchTermEntered(this.props.currentSearch);
      this.props.linkSelected(null);
      this.setState({
        submit: true
      });
    }
  }

  showSuggestions() {
    console.log("focus")
    this.setState({ suggestions: true });
  }

  hideSuggestions() {
    setTimeout(() => {
      console.log("blur")
      this.setState({ suggestions: false });
    }, 200);
  }

  componentDidUpdate() {
      if (this.state.submit) {
      this.setState({
        submit: false
      });
    }
  }

  render() {
    const suggestions = this.state.suggestions && !this.state.searchTerm ? <SuggestionsList /> : null; 
    if (this.state.submit) {
      return <Redirect to="/search_results" />;
    }
    return (
      <div className={"biggerBox " + this.props.page + "_biggerBox"}>
        <div className={this.props.page + "_InputFieldBox"}>
          <form className={this.props.page + "_InputFieldForm"} onSubmit={this.handleSubmit}>
            <input
              className={this.props.page + "_input"}
              type="text"
              value={this.props.currentSearch}
              onChange={this.handleChange}
              onFocus={this.showSuggestions}
              onBlur={this.hideSuggestions}
            />
            <div className="magnifyingGlassContainer" onClick={this.handleSubmit}>
              <div className="magnifyingGlass" />
            </div>
            <div className="microphone" />
          </form>
        </div>
        { suggestions }
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
