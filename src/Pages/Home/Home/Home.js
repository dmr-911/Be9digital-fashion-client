import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Glasses from '../Glasses/Glasses';
import Features from '../Features/Features';
import Precautions from '../Precautions/Precautions';

const Home = () => {
    return (
        <>
        <div>
            <Banner></Banner>
            <Features></Features>
            <Products></Products>
            <Glasses></Glasses>
            <Reviews></Reviews>
            <Precautions></Precautions>
        </div>
        </>
    );
};

export default Home;