import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Glasses from '../Glasses/Glasses';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Glasses></Glasses>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;