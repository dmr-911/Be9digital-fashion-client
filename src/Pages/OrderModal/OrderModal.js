import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './OrderModal.css';

const OrderModal = (props) => {
    const {order} = props;
    const {product, price, date, email , buyerName, phone} = props?.order;
    console.log(props.order);
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
        </Modal.Body>
        <Modal.Footer>
          <Button className="mx-auto">Place Order</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default OrderModal;