import React, { Component } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import EmployeesTable from "./components/EmployeesTable";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  create = (newData) => {
    console.log(newData);
    axios
      .post("http://localhost:5000/employeesdata", newData)
      .then((res) => console.log(res));
  };

  getAll = () => {
    axios.get("http://localhost:5000/employeesdata").then((res) => {
      console.log(res.data);
      this.setState({ data: res.data });
    });
  };

  componentDidMount() {
    this.getAll();
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <InputForm myData={this.create} />
          </div>
          <div className="col-6">
            <EmployeesTable getData={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
