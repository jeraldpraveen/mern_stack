import React, { Component } from "react";

export class InputForm extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
          />
        </div>
        <br />
        <div class="form-group">
          <label>Age:</label>
          <input type="text" className="form-control" placeholder="Enter Age" />
        </div>
        <br />
        <div class="form-group">
          <label>City:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter City"
          />
        </div>
        <br />
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default InputForm;
