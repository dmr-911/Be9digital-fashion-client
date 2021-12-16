import React, { useRef } from 'react';
import { Button, Card, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const emailRef = useRef();
    const passRef = useRef();
    const handleSubmit=()=>{}
    return (
        <>
        <div className="bg-dark login-page pt-5">
          <Col xs={12} md={5} className="mx-auto mt-5 pb-5">
            <Card className="p-3">
              <h3>Sign Up</h3>
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
                <p className="fw-bold">
                  {/* {error ? error : 'Already an user?'} Please{" "} */}
                  <Link to="/login">Login</Link>
                </p>
                <Button variant="success" type="submit">
                  Sign Up
                </Button>
              </Form>
            </Card>
          </Col>
          <div className="divider bg-info rounded mx-auto"></div>
        </div>
      </>
    );
};

export default Register;