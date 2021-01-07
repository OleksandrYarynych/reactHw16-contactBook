import React, { Component } from "react";
import "../css/Components.css";
import contacts from "../js/contactArr";
import Contact from "./Contact.js";

class SearchLine extends Component {
  state = {
    searchText: "",
    contactArr: [...contacts],
  };

  changeSearchText = (e) => {
    this.setState({ searchText: e.target.value });
  };

  filterContacts = () =>
    this.state.contactArr.filter((contact) =>
      `${contact.firstName.toLowerCase()} ${contact.lastName.toLowerCase()}`.includes(
        this.state.searchText.toLowerCase()
      )
    );

  render() {
    return (
      <div>
        <div className="searchFeld">
          <input
            type="text"
            className="text-feld"
            value={this.state.searchText}
            onChange={this.changeSearchText}
          />
        </div>
        <div>
          {[...this.filterContacts()].map((contaxt, i) => (
            <Contact
              firstName={contaxt.firstName}
              lastName={contaxt.lastName}
              phone={contaxt.phone}
              key={i}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SearchLine;
