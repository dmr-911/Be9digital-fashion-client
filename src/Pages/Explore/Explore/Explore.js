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
             <h2 className="fw-bold mb-4">All <span className="text-danger">products</span> page</h2>
            {
                products ?
                <>
                <ElectricProducts></ElectricProducts>
                <Glasses></Glasses>
                <NewProducts></NewProducts>
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