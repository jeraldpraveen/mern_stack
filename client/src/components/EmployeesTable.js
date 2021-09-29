import React, { Component } from "react";

export class EmployeesTable extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {this.props.getData.length > 0 ? (
            this.props.getData.map((e) => (
              <tr key={e._id}>
                <td>{e.Name}</td>
                <td>{e.Age}</td>
                <td>{e.City}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No Data</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

export default EmployeesTable;
