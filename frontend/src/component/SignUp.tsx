import styled from "@emotion/styled";
import { Button, Form, Input, Tooltip, Icon, } from "antd";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 30px 50px;

  .ant-btn-primary {
    background-color: #ff8e0a;
    border-color: #ff8e0a;
    &:hover {
      background-color: #ffa53b;
      border-color: #ffa53b;
    }
  }
`;

function SignUp(props) {
  const { getFieldDecorator } = props.form;

  const [confirmDirty, setConfirmDirty] = useState(false);
  
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 6,
      },
    },
  };

  const handleConfirmBlur = e => {
    const { value } = e.target;
    {setConfirmDirty(confirmDirty || !!value)};
  };

  const validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && confirmDirty) {
      form.validateFields([''], { force: true });
    }
    callback();
  };

  const compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('กรุณากรอกรหัสผ่านให้ตรงกัน');
    } else {
      callback();
    }
  };

  return (
    <Container>
      <h1>ลงทะเบียน</h1>
      <Form>
        <Form.Item
          label={
            <span>
              ชื่อ&nbsp;
              <Tooltip title="อยากให้เราเรียกคุณว่าอะไร?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'กรุณาใส่ชื่อที่แสดง', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="อีเมล">
          {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'อีเมลไม่ถูกต้อง',
                },
                {
                  required: true,
                  message: 'กรุณาระบุอีเมล',
                },
              ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="รหัสผ่าน">
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'กรุณาระบุรหัสผ่าน',
              },
              {
                validator: validateToNextPassword,
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="ยืนยันรหัสผ่าน" hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'กรุณาระบุยืนยันรหัสผ่าน',
              },
              {
                validator: compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item label="เบอร์โทรศัพท์">
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'กรุณาใส่เบอร์ติดต่อ' }],
          })(<Input style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            ลงทะเบียน
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
}

export default Form.create()(SignUp);