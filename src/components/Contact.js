import React, { Component } from "react";
import "../css/Components.css";

class Contact extends Component {
  render() {
    const {firstName, lastName, phone, gender}=this.props; 
    return (
      <div className="contact">
        <span className="contact-name">{firstName}</span>
        <span className="contact-name">{lastName}</span>
        <p className="contact-number">{phone}</p>
        <p className="contact-gender">{gender}</p>
      </div>
    );
  }
}

export default Contact;
