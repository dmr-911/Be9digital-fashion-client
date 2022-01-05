import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import useAuth from '../../hooks/useAuth';
import GoogleButton from 'react-google-button';

const Register = () => {
  const {isLoading, error, registerUser} = useAuth();
  const [registerData, setRegisterData] = useState({});
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
      if(registerData.password !== registerData.password2){
        return
      }
      registerUser(registerData.email, registerData.password, registerData.name, navigation)
    };

    return (
    //   <>
    //   <div className="bg-dark login-page pt-5">
    //     <Col xs={12} md={5} className="mx-auto pb-5">
    //       <Card className="p-3">
    //         <h3>Sign Up</h3>
    //         <div className="divider bg-info rounded mb-3 mx-auto"></div>
    //         {
    //             !isLoading && <Form  onSubmit={handleRegisterSubmit}>
    //             <Form.Group className="mb-3" controlId="formBasicEmail">
    //               <Form.Control
    //                 type="text"
    //                 placeholder="Enter Your Name"
    //                 className="border border-1 border-dark"
    //                 name="name"
    //                 onBlur={handleOnBlur}
    //               />
    //             </Form.Group>
    //             <Form.Group className="mb-3" controlId="formBasicEmail">
    //               <Form.Control
    //                 type="email"
    //                 placeholder="Enter email"
    //                 className="border border-1 border-dark"
    //                 name="email"
    //                 onBlur={handleOnBlur}
    //               />
    //             </Form.Group>

    //             <Form.Group className="mb-3" controlId="formBasicPassword">
    //               <Form.Control
    //                 type="password"
    //                 placeholder="Password"
    //                 className="border border-1 border-dark"
    //                 name="password"
    //                 onBlur={handleOnBlur}
    //               />
    //             </Form.Group>
    //             <Form.Group className="mb-3" controlId="formBasicPassword">
    //               <Form.Control
    //                 type="password"
    //                 placeholder="Re-type Password"
    //                 className="border border-1 border-dark"
    //                 name="password2"
    //                 onBlur={handleOnBlur}
    //               />
    //             </Form.Group>
    //             <p className="fw-bold">
    //               {error ? error : 'Already an user?'} Please{" "}
    //               <Link to="/login">Login</Link>
    //             </p>
    //             <Button variant="success" type="submit">
    //               Sign Up
    //             </Button>
    //           </Form>
    //         }
    //       </Card>
    //     </Col>
    //     <div className="divider bg-info rounded mx-auto"></div>
    //   </div>
    // </>
    <Container className="my-5">
    <div className="login-form-container border border-1">
    <div className="page-title text-center">
        Create an account
    </div>
    <p>Give the information's</p>
      {
        !isLoading &&     <form onSubmit={handleRegisterSubmit}>
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
        <Button className="login-register-btn" variant="primary" type="submit">
            Register
        </Button>
        </form>
      }
    {error && <small className="text-danger">{error}</small>}
              <p className="fw-bold">
               Already have an account ? Please{" "}
               <Link to="/login"><i className="fas fa-sign-in">Login</i></Link>
             </p>
    <p className="mt-3"><b>Join us using social network</b></p>
    <GoogleButton className="mx-auto mb-4" />
    </div>
    </Container>
    );
};

export default Register;