import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Customer from "./components/customers";
import CustomerDetails from "./components/customer-details";
import NavBar from "./components/navbar";

function App() {
  return (
    <div>
      <h1>App component</h1>
      <div className="content">
        <NavBar />
        <Switch>
          <Route
            path="/customers"
            exact
            render={props => <Customer sortBy="newest" {...props} />}
          />
          <Route
            path="/customer-details/:id"
            exact
            component={CustomerDetails}
          />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
