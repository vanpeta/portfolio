import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { contacting } from "../../actions/index";
import "./styles/Buttons.css";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.openContact = this.openContact.bind(this);
  }

  openContact() {
    this.props.contacting(true);
  }

  render() {
    return (
      <div className="ButtonsBox">
        <div className="btn">Carlos Search</div>
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
      contacting
    },
    dispatch
  )
}

export default connect(null, mapDispatchToProps)(Buttons);
