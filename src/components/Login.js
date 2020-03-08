import React, { Component } from "react";
import { login } from './userFunctions';


export default class Login extends Component {
  state = {
    email: "",
    password: "",
    invalid : null
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
        password: this.state.password
      };
      login(user).then(res => {
        if (res) {
            this.setState({invalid: false})
            localStorage.setItem("usertoken", res);
            this.props.history.push("/dashboard");
        }
        else{
            this.setState({
                invalid : true
            })
        }
      });
    };
    return (
      <div>
        <br />
        <br />
        <div className="container">
          <form noValidate onSubmit={onSubmit}>
              {this.state.invalid ? <p style={{"color" : "red"}}>Invalid Credentials</p> : ""}
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
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}
