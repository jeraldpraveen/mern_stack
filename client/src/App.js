import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">InputForm</div>
          <div className="col-6">EmployeesData</div>
        </div>
      </div>
    );
  }
}

export default App;
