import React, { Component } from "react";
import HeadLine from "./components/HeadLine";
import Search from "./components/Search";

class phoneContacts extends Component {
  render() {
    return (
      <div>
        <HeadLine />
        <Search />
      </div>
    );
  }
}

export default phoneContacts;
