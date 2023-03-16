import React, {useContext} from "react";
import { Button, Checkbox, Form, Input, Typography, Row, Col } from "antd";
import styled from "styled-components";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import GoogleIcon from "../icons/GoogleIcon";
import background from "../asset/bgSignin.png";
import { auth } from "../Firebase/config";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  getAdditionalUserInfo
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const googleProvider = new GoogleAuthProvider();

const WrapperStyled = styled.div`
  margin: 0;
  padding: 0;
  minwidth: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const InputStyled = styled(Input)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 40px;
`;

const InputPasswordStyled = styled(Input.Password)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 40px;
`;

// const onFinishFailed = (errorInfo) => {
//   console.log("Failed:", errorInfo);
// };
const Signin = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleLogin = async (provider) => {
    const result = await signInWithPopup(auth, provider);
    try {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      const detail = getAdditionalUserInfo(result);
      console.log(token);
      const {email, photoURL, uid} = user;
      console.log({
        email: email,
        photoURL: photoURL,
        uid: uid
      });
      setUser({
        email: email,
        photoURL: photoURL,
        uid: uid
      })
      if(detail.isNewUser){
        navigate('/user-info');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleEmailLogin = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    try {
      const user = userCredential.user;
      const {email, photoURL, uid} = user;
      console.log({
        email: email,
        photoURL: photoURL,
        uid: uid
      });
      setUser({
        email: email,
        photoURL: photoURL,
        uid: uid
      })
    } catch (error) {
      console.log("user not found");
    }
  };

  const onFinish = (values) => {
    const { email, password } = values;
    handleEmailLogin(email, password);
  };

  return (
    <WrapperStyled>
      <Row>
        <Col span={12}></Col>
        <Col span={12}>
          <Form
            name="normal-login"
            style={{
              width: "500px",
              backgroundColor: "white",
              padding: "1rem 2.5rem 5rem 2.5rem",
              borderRadius: "24px",
            }}
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Typography.Title style={{ marginBottom: 0 }}>
              Sign in
            </Typography.Title>
            <Typography.Text>
              New user?{" "}
              <a href="/signup" style={{ textDecoration: "underline" }}>
                Create new account
              </a>
            </Typography.Text>
            <Form.Item
              label={<Typography.Text strong>Email:</Typography.Text>}
              name="email"
              rules={[{ required: true, message: "Please enter your email! " }]}
              style={{
                paddingTop: "1.5rem",
              }}
            >
              <InputStyled
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="abc@gmail.com"
              />
            </Form.Item>
            <Form.Item
              label={<Typography.Text strong>Password:</Typography.Text>}
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <InputPasswordStyled
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a
                className="login-form-forgot"
                href="/"
                style={{
                  float: "right",
                }}
              >
                Forgot your password?
              </a>
            </Form.Item>

            <Form.Item
              style={{
                position: "relative",
              }}
            >
              <div>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    borderRadius: "50px",
                    padding: "24px",
                    display: "flex",
                    alignItems: "center",
                    float: "right",
                    backgroundColor: "#10393B",
                  }}
                  // onClick={handleEmailLogin}
                >
                  <Typography.Text
                    style={{
                      color: "white",
                      fontSize: "20px",
                    }}
                  >
                    Continue
                  </Typography.Text>
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    borderRadius: "50px",
                    padding: "24px",
                    display: "flex",
                    alignItems: "center",
                    float: "right",
                    backgroundColor: "white",
                    borderColor: "#10393B",
                    marginRight: "1rem",
                  }}
                >
                  <Typography.Text
                    style={{
                      color: "#10393B",
                      fontSize: "20px",
                    }}
                  >
                    Return
                  </Typography.Text>
                </Button>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "20px",
                  borderBottom: "1px solid black",
                  textAlign: "center",
                  clear: "right",
                  paddingTop: "1rem",
                  marginBottom: "2rem",
                  padding: 0,
                }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    backgroundColor: "#F3F5F6",
                    padding: "0 10px",
                  }}
                >
                  Or
                </span>
              </div>
              <Button
                type="default"
                style={{
                  width: "100%",
                  borderRadius: "50px",
                  padding: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => {
                  handleGoogleLogin(googleProvider);
                }}
              >
                <GoogleIcon />
                <Typography.Text
                  strong
                  style={{
                    fontSize: "20px",
                    marginLeft: "1rem",
                  }}
                >
                  Continue with Google
                </Typography.Text>
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </WrapperStyled>
  );
};

export default Signin;
