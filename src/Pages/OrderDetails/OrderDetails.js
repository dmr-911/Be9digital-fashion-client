import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './OrderDetails.css';
import useAuth from '../../hooks/useAuth';
import useProducts from '../../hooks/useProducts';
import { useNavigate, useParams } from 'react-router-dom';

const OrderDetails = () => {
    const {user} = useAuth();
    const {id} = useParams();
    // const [products, setProducts] = useState();
    const {products} = useProducts();
    const matchedItem = products?.find(product => product.key === id);

    const date = new Date();
    const initialInfo = { buyerName: user.displayName, email: user.email, phone: '' };
    const [purchaseInfo, setPurchaseInfo] = useState(initialInfo);
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();

    const handleOnBlur = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = { ...purchaseInfo };
      newInfo[field] = value;
      setPurchaseInfo(newInfo);
  }
    
  const handlePurchase = e => {
    e.preventDefault();
    // collect data
    const order = {
        ...purchaseInfo,
        product: matchedItem?.name,
        price: Math.ceil(parseFloat(matchedItem?.price) - parseFloat(matchedItem?.price) * (5 / 100)),
        date: date.toLocaleDateString(),
        status: 'pending',
        payment: 'not paid'
    };
    // send to the server
    fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(order)
    })
        .then(res => res.json())
        .then(resultData => {
            if (resultData.insertedId) {
                // handleShow();
            }
        });
}

    return (
        <div className="bg-dark login-page py-5">
        <Col xs={12} md={5} className="mx-auto">
          <Card className="p-3">
            <h3>Add Your Information</h3>
            <div className="divider bg-info rounded mb-3 mx-auto"></div>
            <form onSubmit={handlePurchase}>
                <input name="name" defaultValue={user.displayName} type="text" className="purchase-input" onBlur={handleOnBlur} placeholder="Name" />
                <input name="email" defaultValue={user.email} type="email" className="purchase-input" onBlur={handleOnBlur} placeholder="email" />
                <input name="phone" type="number" className="purchase-input" onBlur={handleOnBlur} placeholder="Phone" />
                <input name="city" type="text" className="purchase-input" onBlur={handleOnBlur} placeholder="City" />
                <input name="country" type="text" className="purchase-input" onBlur={handleOnBlur} placeholder="Country" />
                <input type="submit" value="Submit" className="purchase-input btn-danger" />
            </form>
          </Card>
        </Col>
        <div className="divider bg-info rounded mt-4 mx-auto"></div>
      </div>
    );
};

export default OrderDetails;