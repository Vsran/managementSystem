import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../store/login/actions";

export class LogIn extends Component {

  handleLogIn() {
    console.log("logging in");
  }

  render() {
    return (<button onClick={this.handleLogIn.bind(this)}>log in</button>);
  }
}

export default connect(state => ({
  ifLogged: state.userStatus.ifLogged
}), {
  login
})(LogIn);
