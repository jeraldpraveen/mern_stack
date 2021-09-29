import React, { Component } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import EmployeesTable from "./components/EmployeesTable";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
  }

  create = (data) => {
    console.log(data);
    axios
      .get("http://localhost:5000/employeesdata", data)
      .then((res) => console.log(res));
  };

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <InputForm myData={this.create} />
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
