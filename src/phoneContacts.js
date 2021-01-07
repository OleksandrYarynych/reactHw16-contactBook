import React, { Component } from "react";
import HeadLine from "./components/HeadLine";
import SearchLine from "./components/SearchFeld";

class phoneContacts extends Component {
  render() {
    return (
      <div>
        <HeadLine />
        <SearchLine />
      </div>
    );
  }
}

export default phoneContacts;
