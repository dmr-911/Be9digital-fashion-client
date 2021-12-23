import React, { useRef, useState } from 'react';
import { Button, Card, Col, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import useAuth from '../../hooks/useAuth';

const Register = () => {
  const {isLoading, error, registerUser} = useAuth();
  const [registerData, setRegisterData] = useState({});
  const [isMatched, setIsMatched] = useState(true)
  const navigation = useNavigate();
    
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = {...registerData};
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
    };

    const handleRegisterSubmit=(e)=>{
      e.preventDefault();
      console.log(registerData);
      if(registerData.password !== registerData.password2){
        setIsMatched(false);
        return
      }
      registerUser(registerData.email, registerData.password, registerData.name, navigation)
    }
    return (
      <>
      <div className="bg-dark login-page pt-5">
        <Col xs={12} md={5} className="mx-auto pb-5">
          <Card className="p-3">
            <h3>Sign Up</h3>
            <div className="divider bg-info rounded mb-3 mx-auto"></div>
            {
                !isLoading && <Form  onSubmit={handleRegisterSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Name"
                    className="border border-1 border-dark"
                    name="name"
                    onBlur={handleOnBlur}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="border border-1 border-dark"
                    name="email"
                    onBlur={handleOnBlur}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="border border-1 border-dark"
                    name="password"
                    onBlur={handleOnBlur}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Re-type Password"
                    className="border border-1 border-dark"
                    name="password2"
                    onBlur={handleOnBlur}
                  />
                </Form.Group>
                <p className="fw-bold">
                  {error ? error : 'Already an user?'} Please{" "}
                  <Link to="/login">Login</Link>
                </p>
                <Button variant="success" type="submit">
                  Sign Up
                </Button>
              </Form>
            }
          </Card>
        </Col>
        <div className="divider bg-info rounded mx-auto"></div>
      </div>
    </>
    );
};

export default Register;