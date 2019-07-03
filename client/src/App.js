import React, { Component } from "react";
import "./App.css";
import ListOfUsers from "./containers/ListOfUsersContainer";
import SignUpContainer from "./containers/SignUpContainer";
// import SignUp from "./components/SignUp";
// <SignUp /> goes into columnRight

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <h1>Client</h1>
        <div className="body">
          <div className="columnLeft">
            <ListOfUsers />
          </div>
          <div className="columnRight">
            <h2>Sign up goes here:</h2>
          </div>          
        </div>

      </div>
    );
  }
}
export default (App);


