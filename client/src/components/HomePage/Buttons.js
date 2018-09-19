import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";

import { contacting } from "../../actions/index";
import "./styles/Buttons.css";
import { searchTermEntered } from "../../actions/index";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = { submit: false }
    this.openContact = this.openContact.bind(this);
    this.initiateSearch = this.initiateSearch.bind(this);
  }

  openContact() {
    this.props.contacting(true);
  }

  initiateSearch() {
    if (this.props.searchTerm) {
      this.props.searchTermEntered(this.props.searchTerm);
      this.setState({
        submit: true
      });
    }
  }

  render() {
    if (this.state.submit) {
      return <Redirect to="/search_results" />;
    }
    return (
      <div className="ButtonsBox">
        <div className="btn" onClick={this.initiateSearch}>Carlos Search</div>
        <div className="btn" onClick={this.openContact}>
          I'm Feeling Lucky
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      contacting, searchTermEntered
    },
    dispatch
  )
}

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
