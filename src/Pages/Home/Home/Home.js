import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Glasses from '../Glasses/Glasses';
import Features from '../Features/Features';
import useProducts from '../../../hooks/useProducts';
import { Spinner } from 'react-bootstrap';

const Home = () => {
    const {products} = useProducts();
    return (
        <>
        {products?.length ?
        <div>
            <Banner></Banner>
            <Features></Features>
            <Products></Products>
            <Glasses></Glasses>
            <Reviews></Reviews>
        </div>
        :
        <div className="d-flex justify-content-center align-items-center w-100" style={{height: '80vh'}}>
            <div>
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />
            </div>
        </div>}
        </>
    );
};

export default Home;