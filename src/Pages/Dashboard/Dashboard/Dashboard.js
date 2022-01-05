import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Dashboard.css';

const Dashboard = () => {
    const {user, admin} = useAuth();
    return (
        <Container fluid>
            <Row xs={1} md={2} className="my-3">
                <Col xs={12} md={3} className="dashboard-heading sticky-top">
                    <div style={{height: '80vh'}} className="d-flex justify-content-center align-items-center">
                        <div>
                    <h3 className="text-danger">Dashboard</h3>
                    <div className="divider bg-info rounded my-3 mx-auto"></div>
                    <p><Link to="review" className="dash-link">Review</Link></p><br/>
                    <p><Link to="myOrders" className="dash-link">My Orders</Link></p><br/>
                    {
                        user.email && admin && <>
                        <p><Link to="addProduct" className="dash-link">Add Product</Link></p><br/>
                        <p><Link to="makeAdmin" className="dash-link">Make Admin</Link></p><br/>
                        <p><Link to="allOrders" className="dash-link">All Orders</Link></p><br/>
                        <p><Link to="manageProducts" className="dash-link">Manage All Products</Link></p><br/>
                        </>
                    }
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={8}>
                <Outlet/>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;