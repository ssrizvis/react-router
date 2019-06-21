import React, { Component } from "react";
import { Link } from "react-router-dom";

class Customer extends Component {
  state = {
    customers: [
      {
        id: 101,
        name: "xyz",
        address: "xyz, abc, hhh, 110000"
      },
      {
        id: 102,
        name: "abc",
        address: "abc, xyz, hhh, 110000"
      }
    ]
  };
  render() {
    return (
      <div className="content">
        <h1>Customers</h1>
        {this.state.customers.map(customer => (
          <ul key={customer.id}>
            <li>
              <Link to={`/customer-details/${customer.id}`}>
                {customer.name}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Customer;
