import { Row, Col, Form, Button } from "react-bootstrap";
import { loginUser } from "../../utilities/auth";
import { yahoo } from "../../utilities/stockData";
import { useState } from "react";

const Login = () => {
  const [loginCreds, setloginCreds] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setloginCreds({ ...loginCreds, [name]: value });
  };

  const handleClick = () => {
    loginUser(loginCreds)
      .then((res) => {
        console.log("response on front end: ", res);
      })
      .catch((err) => console.error(err));
      yahoo("tsla");
  };

  return (
    <Row>
      <Col lg={4}>
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              name="username"
              value={loginCreds.username}
              onChange={handleChange}
              placeholder="Username"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              name="password"
              value={loginCreds.password}
              onChange={handleChange}
              placeholder="Password"
            ></Form.Control>
          </Form.Group>
          <Button onClick={handleClick}>Submit</Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
