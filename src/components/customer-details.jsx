import React, { Component } from "react";

class CustomerDetails extends Component {
  state = {};
  render() {
    const id = this.props.match.params.id;
    return <h1>Customer Details for Customer {id}</h1>;
  }
}

export default CustomerDetails;
