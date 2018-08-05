import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
import "./index.css";
class Child3 extends Component {
  componentDidMount() {
    console.log("Child3");
  }

  render() {
    return (
      <div style={{ padding: "20% 40%" }}>
        <Carousel autoplay>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
        <h1 style={{ marginBottom: 16 }}>
          <Link to="/">Return to index</Link>
        </h1>
      </div>
    );
  }
}

export default Child3;
