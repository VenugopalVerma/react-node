import React, { Component } from "react";
import jwt_decode from "jwt-decode";

export default class Dashboard extends Component {
  state = {
    id: ""
  };

  componentWillMount() {
    const token = localStorage.getItem("usertoken");
    const decoded = jwt_decode(token);
    this.setState({
      id: decoded.id
    });
  }
  render() {
    return (
      <div className="container" style={{marginTop : 50}}>
        <div className="card text-center">
          <div className="card-header">DashBoard</div>
          <div className="card-body">
            <h5 className="card-title">Welcome</h5>
            <p className="card-text">{this.state.id}</p>
          </div>
        </div>
      </div>
    );
  }
}
