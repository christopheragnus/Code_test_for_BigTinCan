import React from "react";
import { connect } from "react-redux";

import { Form, Input, Alert, Button, Card } from "antd";

function Create(props) {
  const { getFieldDecorator } = props.form;

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      //   if (!err) {
      //     console.log("Received values of form: ", values);
      //   }
      props.createPost(values);
    });
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 }
    }
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0
      },
      sm: {
        span: 16,
        offset: 8
      }
    }
  };

  const { newPost } = props;

  return (
    <div>
      <div>
        {newPost ? (
          <>
            <Alert message="Post successfully created!" type="success" />
            <Card style={{ width: 300, margin: 20 }}>
              <li>ID: {newPost.id}</li>
              <li>Title: {newPost.title}</li>
              <li>Body: {newPost.body}</li>
              <li>UserID: {newPost.userId}</li>
            </Card>
          </>
        ) : null}
      </div>
      <Form {...formItemLayout} onSubmit={handleSubmit}>
        <Form.Item label="ID">
          {getFieldDecorator("id", {
            rules: [{ required: true, message: "Please input your ID!" }]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Title">
          {getFieldDecorator("title")(<Input />)}
        </Form.Item>
        <Form.Item label="Body">
          {getFieldDecorator("body")(<Input />)}
        </Form.Item>
        <Form.Item label="UserID">
          {getFieldDecorator("userId")(<Input />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

const mapStateToProps = state => {
  const { posts } = state;
  return { newPost: posts.output };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: object => dispatch({ type: "CREATE_POST", payload: object })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(Create));
