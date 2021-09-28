import React, { Component } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import EmployeesTable from "./components/EmployeesTable";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <InputForm />
          </div>
          <div className="col-6">
            <EmployeesTable />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
