import React, { Component } from "react";
import "../css/Components.css";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact">
        <span className="contact-name">{this.props.firstName}</span>
        <span className="contact-name">{this.props.lastName}</span>
        <p className="contact-namber">{this.props.phone}</p>
      </div>
    );
  }
}

export default Contact;
