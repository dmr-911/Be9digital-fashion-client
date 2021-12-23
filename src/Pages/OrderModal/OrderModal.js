import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import './OrderModal.css';
import {loadStripe} from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51K9d3AE0hh98LK9HQpsFdTzGrB2w5c6y2hjltWYgOpkubFob7I1oNXSxOz2cOGlNmmgeMB5GdpjMzPKncUpY5VTS00dfLhghF1');

const OrderModal = (props) => {
    const {order} = props;
    return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Order Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{order?.product}</h5>
          <p>
          <b>Price :</b> ${order?.price}
          </p>
          <p>
          <b>Order date :</b> {order?.date}
          </p>
          <p>
          <b>Ordered By :</b> {order?.buyerName}
          </p>
          <p><b>Phone :</b> {order?.phone}</p>
          <p><b>Email :</b> {order?.email}</p>
          <p><b>Give your card details below :</b></p>
        <Elements stripe={stripePromise}>
        <CheckOutForm 
        id = {order?.id}
         price = {order?.price}
         name = {order?.buyerName}
         email = {order?.email}
        />
        </Elements>
        </Modal.Body>
      </Modal>
    );
};

export default OrderModal;