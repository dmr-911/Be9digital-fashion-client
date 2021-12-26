import React from 'react';
import Glasses from '../Glasses/Glasses';
import useProducts from '../../../hooks/useProducts';
import { Spinner } from 'react-bootstrap';
import NewProducts from '../NewProducts/NewProducts';
import ElectricProducts from '../E_products/E_products';

const Explore = () => {
    const {products} = useProducts();
    return (
        <div>
            <h2>All products</h2>
            {
                products ?
                <>
                <NewProducts></NewProducts>
                <ElectricProducts></ElectricProducts>
                <Glasses></Glasses>
                </>
                :
                <div className="d-flex justify-content-center align-items-center w-100" style={{height: '80vh'}}>
                <div>
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" />
                </div>
              </div>
            }
        </div>
    );
};

export default Explore;