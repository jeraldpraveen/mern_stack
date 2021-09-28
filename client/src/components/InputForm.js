import React, { Component } from "react";

export class InputForm extends Component {
  constructor() {
    super();

    this.state = {
      Name: "",
      Age: "",
      City: "",
    };
  }

  inputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  formSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.formSubmit} autoComplete="off">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              onChange={this.inputChange}
              name="Name"
              value={this.state.Name}
            />
          </div>
          <br />
          <div className="form-group">
            <label>Age:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Age"
              onChange={this.inputChange}
              name="Age"
              value={this.state.Age}
            />
          </div>
          <br />
          <div className="form-group">
            <label>City:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter City"
              onChange={this.inputChange}
              name="City"
              value={this.state.City}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default InputForm;
