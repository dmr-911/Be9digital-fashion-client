import React from 'react';
import E_products from '../E_products/E_products';
import Glasses from '../Glasses/Glasses';
import useProducts from '../../../hooks/useProducts';
import { Spinner } from 'react-bootstrap';

const Explore = () => {
    const {products} = useProducts();
    return (
        <div>
            {
                products ?
                <>
                <E_products></E_products>
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