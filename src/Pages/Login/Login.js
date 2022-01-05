import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Login.css';
// import {useDispatch, useSelector} from 'react-redux';
import useAuth from '../../hooks/useAuth';
import GoogleButton from 'react-google-button';

const Login = () => {
  const { googleSignIn, emailSignIn, error, setError} = useAuth();

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
      .catch((error) => {
        setError(error.message)
      });
    }



    return (
      <Container className="my-5">
      <div className="login-form-container border border-1">
          <div className="page-title text-center">
              Login page
          </div>
          <p>Login using social network</p>
          <GoogleButton className="mx-auto mb-4" onClick={handleGoogleSignIn}/>
          <p>Or insert your account information : </p>
          <form  onSubmit={handleSubmit} className="mb-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
              name="email"
               className="green-form-email green-form-control" 
               type="email" 
               placeholder="Enter email" 
               onBlur={handleOnBlur}
               />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control 
              name="password"
              className="green-form-password green-form-control" 
              type="password" 
              placeholder="Password" 
              onBlur={handleOnBlur}
              />
          </Form.Group>
          {/* <p><img src={message} alt="" />Forgot your <span style={{color : "#084c33"}}>Password ?</span></p> */}
          <Button className="login-register-btn" variant="primary" type="submit">
              Login
          </Button>
          </form>
                {error && <small className="text-danger">{error}</small>}
              <p className="fw-bold">
               New to our site ? Please create an account{" "}
               <Link to="/register"><i className="fas fa-sign-in">Register</i></Link>
             </p>
      </div>
  </Container>
    );
};

export default Login;