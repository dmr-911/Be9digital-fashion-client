import React, { useState } from 'react';
import { Button, Card, Col, Container, Form } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Login.css';
import {useDispatch, useSelector} from 'react-redux';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const {user, googleSignIn, setIsLoading, emailSignIn} = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const destination = location?.state?.from || '/';

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  });
    const handleOnBlur = (e) =>{
      const field = e.target.name;
      const value = e.target.value;
      const newState = {...loginDetails};
      newState[field] = value;
      setLoginDetails(newState);
    }
    const handleGoogleSignIn = () =>{
      googleSignIn(location, navigate);
    };

    const handleSubmit = (e) =>{
      e.preventDefault();
      emailSignIn(loginDetails.email, loginDetails.password)
      .then(user =>{
        navigate(destination);
      })
    }



    return (
        <>
        <div
          className="login-page bg-dark py-5"
          style={{ backgroundColor: "#394650" }}
        >
          <Col xs={12} md={5} className="mx-auto mt-5 mb-5">
            <Card className="p-3">
              <h3>Log in</h3>
              <div className="divider bg-info rounded mb-3 mx-auto"></div>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    className="border border-1 border-dark"
                    onBlur={handleOnBlur}
                  />
                </Form.Group>
  
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="border border-1 border-dark"
                    onBlur={handleOnBlur}
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
                <i className="fab fa-facebook-f"> Sign in with Facebook</i>
              </div>
            </Card>
          </Col>
          <div className="divider bg-info rounded mx-auto"></div>
        </div>
      </>
    );
};

export default Login;