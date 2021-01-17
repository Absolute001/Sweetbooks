import React, { useContext } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { Context } from "../context/Context";
import appFirebase from "../firebase";
import { Link } from "react-router-dom";

export default function RegistrationPage() {
  const { setUserLogged, history } = useContext(Context);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      await appFirebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      setUserLogged(true);
      history.push("/");
      alert("Registration Complete");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="my-auto">
      <Row>
        <Col className="mt-2 px-5 text-center">
          <h2>We want to save all your favourite books, please Sign Up</h2>
        </Col>
      </Row>

      <Row>
        <Col className="mt-4 text-center">
          <h5>
            Already have an account? Then <Button className="custom-button"> <Link to="/login">Sign In</Link></Button>
          </h5>
        </Col>
      </Row>

      <Form onSubmit={handleSignUp}>
        <Form.Row className="mt-5 px-sm-5 ">
          <Col>
            <h5>Email</h5>
            <Form.Control
              className="custom-input "
              type="email"
              placeholder="Please Enter Your Mail..."
              name="email"
            />
          </Col>
        </Form.Row>
        <Form.Row className="mt-2 px-sm-5 ">
          <Col>
            <h5>Password</h5>
            <Form.Control
              name="password"
              className="custom-input "
              type="password"
              placeholder="Password..."
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Col xs={5} className="text-center mt-4 mx-auto px-sm-5">
            <Button type="submit" className="w-100 custom-button ">
              <span className="inner-button"> Sign Up </span>{" "}
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
}
