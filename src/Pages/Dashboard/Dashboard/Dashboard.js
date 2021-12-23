import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <Container fluid>
            <Row xs={1} md={2} className="my-3">
                <Col xs={12} md={3} className="dashboard-heading">
                    <p><Link to="payment" className="dash-link">Payments</Link></p><br/>
                    <p><Link to="review" className="dash-link">Review</Link></p><br/>
                    <p><Link to="addProduct" className="dash-link">Add Product</Link></p><br/>
                    <p><Link to="makeAdmin" className="dash-link">Make Admin</Link></p><br/>
                    <p><Link to="myOrders" className="dash-link">My Orders</Link></p><br/>
                    <p><Link to="allOrders" className="dash-link">All Orders</Link></p><br/>
                    <p><Link to="allOrders" className="dash-link">Manage All Products</Link></p><br/>
                </Col>
                <Col xs={12} md={8}>
                <Outlet/>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;