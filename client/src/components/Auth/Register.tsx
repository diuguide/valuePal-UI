import { Row, Col, Form, Button } from "react-bootstrap";
import { registerUser } from "../../utilities/auth";
import { useState } from "react";

const Register = () => {
  const [registerCreds, setRegisterCreds] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setRegisterCreds({ ...registerCreds, [name]: value });
  };

  const handleClick = () => {
    registerUser(registerCreds)
      .then((res) => {
        console.log("response on front end: ", res);
      })
      .catch((err) => console.error(err));
  };

  return (
    <Row>
      <Col>
        <Form>
          <Form.Group className="m-2">
            <Form.Control
              type="text"
              name="firstName"
              value={registerCreds.firstName}
              onChange={handleChange}
              placeholder="First Name"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Control
              type="text"
              name="lastName"
              value={registerCreds.lastName}
              onChange={handleChange}
              placeholder="Last Name"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Control
              type="text"
              name="email"
              value={registerCreds.email}
              onChange={handleChange}
              placeholder="Email"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Control
              type="text"
              name="username"
              value={registerCreds.username}
              onChange={handleChange}
              placeholder="Username"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Control
              type="password"
              name="password"
              value={registerCreds.password}
              onChange={handleChange}
              placeholder="Password"
            ></Form.Control>
          </Form.Group>

          <Button className="m-2" onClick={handleClick}>
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Register;
