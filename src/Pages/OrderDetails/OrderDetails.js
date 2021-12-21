import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './OrderDetails.css';

const OrderDetails = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{

    };

    return (
        <div className="bg-dark login-page py-5">
        <Col xs={12} md={5} className="mx-auto">
          <Card className="p-3">
            <h3>Add Your Information</h3>
            <div className="divider bg-info rounded mb-3 mx-auto"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                // defaultValue={user.displayName || ""}
                className="order-details-input"
                {...register("name", { required: true })}
                placeholder='Your name'
              />{" "}
              <br />
              <input
                // defaultValue={user.email || ""}
                className="order-details-input"
                {...register("email", { required: true })}
                placeholder='Your email'
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