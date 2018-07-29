import React, { Component } from "react";
import { Link } from "react-router-dom";

class Child3 extends Component {

  componentDidMount() {
    console.log('Child3')
  }

  render() {
    return (
      <div style={{ padding: '20% 40%' }}>
        <h1 style={{ marginBottom: 16 }}><Link to="/">Return to index</Link></h1>
      </div>  
    );
  }
}

export default Child3;
