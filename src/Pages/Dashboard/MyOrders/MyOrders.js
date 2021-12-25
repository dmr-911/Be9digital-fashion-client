import React, { useEffect, useState } from 'react';
import { Button, Spinner, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user.email]);

    const handleCancel = (id) => {
        const update = { status: "cancelled" }
        const uri = `http://localhost:5000/myOrders/cancel/${id}`;
        fetch(uri, {
            method: "PUT",
            headers:{
                "content-type" : "application/json"
            },
            body: JSON.stringify(update)
        })
        .then( res => res.json() )
        .then(data => {
            fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
        })
    };

    const handleDelete = (id) => {
        const proceed = window.confirm('Confirm delete your order?')
        if (proceed) {
            const uri = `http://localhost:5000/myOrders/${id}`;
            fetch(uri, {
                method: "DELETE",
            })
                .then((res) => res.json)
                .then((data) => {
                    const restOrders = myOrders.filter(order => order._id !== id)
                    setMyOrders(restOrders);
                });
        }

    };

    return (
        <div>
            <h5>My Orders</h5>
            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Ordered Time</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.length ? myOrders.map(order => <tr key={order._id}>
                            <td>{order.buyerName}</td>
                            <td>{order.email}</td>
                            <td>{order.product}</td>
                            <td>{order.price}</td>
                            <td>{order.date}</td>
                            <td>{order.payment?.created ? 'Paid' : 'Not paid'}</td>
                            <td>{order.status}</td>
                            <td><Button variant="primary" disabled={order.payment?.created}>Pay</Button></td>
                            <td><Button onClick={() => handleCancel(order._id)} variant="warning" disabled={order.status === 'shipped' || order.status === 'cancelled'}>Cancel</Button></td>
                            <td><Button variant="danger" onClick={() => handleDelete(order._id)}>Delete</Button></td>
                        </tr>)
                            :
                            <>
                                <Spinner animation="grow" size="sm" />
                                <Spinner animation="grow" /></>
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyOrders;