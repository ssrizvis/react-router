import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/customers">Customers</Link>
      </li>
      <li>
        <Link to="/customer-details">Customer Details</Link>
      </li>
    </ul>
  );
};

export default NavBar;
