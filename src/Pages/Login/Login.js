import React, { useRef } from 'react';
import { Button, Card, Col, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const emailRef = useRef();
    const passRef = useRef();
    const handleSubmit = () =>{

    }
    const handleGoogleSignIn = () =>{

    }
    return (
        <>
        <div
          className="login-page py-5"
          style={{ backgroundColor: "#394650" }}
        >
          <Col xs={12} md={5} className="mx-auto mt-5 mb-5">
            <Card className="p-3">
              <h3>Log in</h3>
              <div className="divider bg-info rounded mb-3 mx-auto"></div>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="border border-1 border-dark"
                    ref={emailRef}
                  />
                </Form.Group>
  
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="border border-1 border-dark"
                    ref={passRef}
                  />
                </Form.Group>
                {/* {message && <small className="text-danger">{message}</small>} */}
                <p className="fw-bold">
                  New to our site ? Please create an account{" "}
                  <Link to="/register">Register</Link>
                </p>
                <Button variant="success" type="submit">
                  Login
                </Button>
              </Form>
              <b className="my-3">Or</b>
              <div
                className="border border-2 border-dark rounded google-signin w-50 mx-auto py-2"
                onClick={handleGoogleSignIn}
              >
                <img
                  src="https://i.ibb.co/n6DTPm7/login-removebg-preview.png"
                  height="30px"
                  width="30px"
                  alt=""
                />
                <span>
                  <b> Signup With Google</b>
                </span>
              </div>
            </Card>
          </Col>
          <div className="divider bg-info rounded mx-auto"></div>
        </div>
      </>
    );
};

export default Login;