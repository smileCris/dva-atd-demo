import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './index.css'

const FormItem = Form.Item;

class Child1 extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{ padding: '10% 35%' }}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            {/* <a style={{ float: 'right' }} href="">Forgot password</a> */}
            <a className="login-form-forgot" href="">Forgot password</a>
            {/* <Button type="primary" htmlType="submit" style={{ width: '100%' }}> */}
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
          </Button>
            Or <a href="">register now!</a>
          </FormItem>
        </Form>
        <h1 style={{ marginBottom: 16 }}><Link to="/">Return to index</Link></h1>
      </div>
    );
  }
}

export default Form.create()(Child1);
