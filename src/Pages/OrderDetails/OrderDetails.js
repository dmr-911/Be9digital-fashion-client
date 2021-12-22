import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './OrderDetails.css';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const OrderDetails = () => {
    const {user} = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const [details, setDetails] = useState({displayName: user.displayName, email: user.email, city: '', country: ''});
    const onSubmit = data =>{
      data.payment = '';
      setDetails(data);
      fetch('http://localhost:5000/order', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(details)
      })
      .then(
        navigate('/payment')
      )
    };
    console.log(details);

    return (
        <div className="bg-dark login-page py-5">
        <Col xs={12} md={5} className="mx-auto">
          <Card className="p-3">
            <h3>Add Your Information</h3>
            <div className="divider bg-info rounded mb-3 mx-auto"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                defaultValue={user.displayName || ""}
                className="order-details-input"
                {...register("name", { required: true })}
                placeholder='Your name'
              />{" "}
              <br />
              <input
                defaultValue={user.email || ""}
                className="order-details-input"
                {...register("email", { required: true })}
                placeholder='Your email'
              />{" "}
              <br />
              <input
                className="order-details-input"
                {...register("phone", { required: true })}
                placeholder='Your phone number'
              />{" "}
              <br />
              <input
                className="order-details-input"
                {...register("city", { required: true })}
                placeholder="Your city"
              />{" "}
              <br />
              <input
                className="order-details-input"
                {...register("country", { required: true })}
                placeholder="Your county"
              />{" "}
              <br />
              <input type="submit" value="Proceed" />
            </form>
          </Card>
        </Col>
        <div className="divider bg-info rounded mt-4 mx-auto"></div>
      </div>
    );
};

export default OrderDetails;