import React, { useState } from "react";

import { Form, Input, Button, Card } from "antd";

function Comments(props) {
  const { getFieldDecorator } = props.form;
  const [state, setState] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      //   if (!err) {
      //     console.log("Received values of form: ", values);
      //   }

      setState(state => {
        const list = [values.comment, ...state];
        return list;
      });
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

  return (
    <div>
      <div>
        <>
          <Card style={{ width: 600, margin: 20 }}>
            <>
              Comments:{" "}
              {state.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </>
          </Card>
        </>
      </div>
      <Form {...formItemLayout} onSubmit={handleSubmit}>
        <Form.Item label="Add Comment">
          {getFieldDecorator("comment", {
            rules: [{ required: true, message: "Please input your comment!" }]
          })(<Input />)}
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

export default Form.create()(Comments);
