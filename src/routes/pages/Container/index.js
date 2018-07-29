import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List } from 'antd';

class Container extends Component {

  componentDidMount() {
    console.log('Container')
  }

  render() {
    const data = [
      <Link to="/child1">Child1</Link>,
      <Link to="/child2">Child2</Link>,
      <Link to="/child3">Child3</Link>,
    ];
    return (
      <div style={{ padding: '200px' }}>
        <h3 style={{ marginBottom: 16 }}>导航</h3>
        <List
          bordered
          dataSource={data}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    );
  }
}

export default Container;
