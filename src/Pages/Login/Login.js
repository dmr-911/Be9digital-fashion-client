import React, { useRef, useState } from 'react';
import { Button, Card, Col, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';
import {useDispatch, useSelector} from 'react-redux';

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: ""
  });
    const emailRef = useRef();
    const passRef = useRef();
    const handleSubmit = (e) =>{
      e.preventDefault();
      const newState = {
        email: emailRef.current.value,
        password: passRef.current.value
      };
      setState(newState);
    }
    const handleGoogleSignIn = () =>{

    }
    console.log(state);
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
                  <Link to="/register"><i className="fas fa-sign-in">Register</i></Link>
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
                <i className="fab fa-google-plus-g"> Sign in with google</i>
              </div>
              <div
                className="border border-2 border-dark rounded fb-signin w-50 mx-auto py-2 mt-2"
                onClick={handleGoogleSignIn}
              >
                <i className="fab fa-facebook-f"> Sign in with google</i>
              </div>
            </Card>
          </Col>
          <div className="divider bg-info rounded mx-auto"></div>
        </div>
      </>
    );
};

export default Login;