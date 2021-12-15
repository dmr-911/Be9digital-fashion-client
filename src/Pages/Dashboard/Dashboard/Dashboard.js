import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <Container fluid>
            <Row xs={1} md={2} className="my-3">
                <Col xs={12} md={3} className="dashboard-heading">
                <p><NavLink to="" className="dash-link">Payments</NavLink></p><br/>
                    <p><NavLink to="" className="dash-link">Review</NavLink></p><br/>
                    <p><NavLink to="" className="dash-link">Add Product</NavLink></p><br/>
                    <p><NavLink to="" className="dash-link">My Orders</NavLink></p><br/>
                    <p><NavLink to="" className="dash-link">All Orders</NavLink></p><br/>
                    <p><NavLink to="" className="dash-link">Manage All Products</NavLink></p><br/>
                </Col>
                <Col xs={12} md={8}></Col>
            </Row>
        </Container>
    );
};

export default Dashboard;