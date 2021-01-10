import React, { Component } from "react";
import "../css/Components.css";
import contacts from "../js/contactArr";
import Contact from "./Contact.js";

class SearchLine extends Component {
  state = {
    searchText: "",
    contactArr: [...contacts],
    maleCheckboxChecked: true,
    femaleCheckbovChecked: true,
    notSaidCheckboxChecked: true,
  };

  changeSearchText = (e) => {
    this.setState({ searchText: e.target.value });
  };

  filterContactsByGender=()=>this.state.contactArr.filter((contact)=>{
    if(this.state.maleCheckboxChecked && contact?.gender==="male") return true
    if(this.state.femaleCheckbovChecked && contact?.gender==="female") return true
    if(this.state.notSaidCheckboxChecked && contact?.gender===undefined)return true
  })

  filterContacts = () =>
    [...this.filterContactsByGender()].filter((contact) =>
      `${contact.firstName.toLowerCase()} ${contact.lastName.toLowerCase()} ${
        contact.phone
      }`.includes(this.state.searchText.toLowerCase())
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
          <input
            type="checkbox"
            valuue="male"
            name="male"
            checked={this.state.maleCheckboxChecked}
            onChange={()=>this.setState({maleCheckboxChecked:!this.state.maleCheckboxChecked})}
          />
          <label>male</label>
          <input
            type="checkbox"
            valuue="female"
            name="female"
            checked={this.state.femaleCheckbovChecked}
            onChange={()=>this.setState({femaleCheckbovChecked:!this.state.femaleCheckbovChecked})}
          />
          <label>female</label>
          <input
            type="checkbox"
            valuue="not said"
            name="not said"
            checked={this.state.notSaidCheckboxChecked}
            onChange={()=>this.setState({notSaidCheckboxChecked:!this.state.notSaidCheckboxChecked})}
          />
          <label>not said</label>
        </div>
        <div>
          {[...this.filterContacts()].map((contact, i) => (
            <Contact
              firstName={contact.firstName}
              lastName={contact.lastName}
              phone={contact.phone}
              gender={contact.gender}
              key={i}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SearchLine;
