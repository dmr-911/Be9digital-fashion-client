import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import { Container } from 'react-bootstrap';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <Container fluid>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
        </Container>
    );
};

export default Home;