import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import './OrderDetails.css';
import useAuth from '../../hooks/useAuth';
import useProducts from '../../hooks/useProducts';
import { useParams } from 'react-router-dom';
import OrderModal from '../OrderModal/OrderModal';

const OrderDetails = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const {products} = useProducts();
    const matchedItem = products?.find(product => product.key === id);

    const date = new Date();
    const initialInfo = { buyerName: user.displayName, email: user.email, phone: '' };
    const [purchaseInfo, setPurchaseInfo] = useState(initialInfo);

    const [modalShow, setModalShow] = useState(false);
    const [newOrder, setNewOrder] = useState({});

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
        id: id,
        price: Math.ceil(parseFloat(matchedItem?.price) - parseFloat(matchedItem?.price) * (5 / 100)),
        date: date.toLocaleDateString(),
        status: 'pending',
        payment: ''
    };
    setNewOrder(order);
    // send to the server
    fetch('https://be9digital-market.herokuapp.com/orders', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(order)
    })
        .then(res => res.json())
        .then(resultData => {
            if (resultData.insertedId) {
                setModalShow(true);
                // navigate('/dashboard/myOrders')
            }
        });
};


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
                <input type="submit" value="Purchase" className="purchase-input btn-danger" />
            </form>
          </Card>
        <OrderModal
          order = {newOrder}
          show={modalShow} 
          onHide={() => setModalShow(false)}
        ></OrderModal>
        </Col>
        <div className="divider bg-info rounded mt-4 mx-auto"></div>
      </div>
    );
};

export default OrderDetails;