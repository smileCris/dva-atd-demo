import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../../components/LoginForm";
class Child1 extends Component {
  render() {
    return (
      <div style={{ padding: "10% 35%" }}>
        <LoginForm />
        <h1 style={{ marginBottom: 16 }}>
          <Link to="/">Return to index</Link>
        </h1>
      </div>
    );
  }
}

export default Child1;
