import React, { Component } from "react";
import { register } from "./userFunctions";

export default class Signup extends Component {
  state = {
    email: "",
    password: "",
    displayName: "",
    invalid: null
  };
  render() {
    const onChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
      
    };
    const onSubmit = e => {
      e.preventDefault();
      const user = {
        email: this.state.email,
        password: this.state.password,
        displayName: this.state.displayName
      };
      
      register(user).then(res => {
        if (res) {
            console.log(res);
            this.setState({ invalid: false });
            localStorage.setItem('usertoken', res);
          this.props.history.push("/dashboard");
          
        } else this.setState({ invalid: true });
      });
    };
    return (
      <div>
        <br />
        <br />
        <div className="container">
          <form noValidate onSubmit={onSubmit}>
            {this.state.invalid ? (
              <p style={{ color: "red" }}>Register failed</p>
            ) : (
              ""
            )}
            <div className="form-group">
              <label htmlFor="exampleInputEmail2">Name</label>
              <input
                type="text"
                name="displayName"
                className="form-control"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={onChange}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
              Resgister
            </button>
          </form>
        </div>
      </div>
    );
  }
}
