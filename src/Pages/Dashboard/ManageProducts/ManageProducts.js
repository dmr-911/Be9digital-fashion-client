import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import ElectricProducts from './ElectricProduct';
import GlassProduct from './GlassProduct';
import './ManageProducts.css';

const ManageProducts = () => {
    const [eProducts, setEProducts] = useState([]);
    const [glasses, setGlasses] = useState([]);

    useEffect(()=>{
        fetch('https://be9digital-market.herokuapp.com/e_products')
        .then(res => res.json())
        .then(data => setEProducts(data))
    },[]);

    useEffect(()=>{
        fetch('https://be9digital-market.herokuapp.com/glasses')
        .then(res => res.json())
        .then(data => setGlasses(data))
    },[])

    return (
       <div>
            <h2 className="fw-bold">Manage <span className="text-danger">products</span> page</h2>
           <Row sm={1} md={3} lg={4} className="g-3">
           {
               eProducts ? eProducts.map(eProduct => <ElectricProducts
               key={eProduct._id}
               eProduct = {eProduct}
               ></ElectricProducts>)
               :
               <div className="d-flex justify-content-center align-items-center w-100" style={{height: '80vh'}}>
               <div>
               <Spinner animation="grow" size="sm" />
               <Spinner animation="grow" />
               </div>
                </div>
           }
           {
               glasses.map(glass => <GlassProduct
                key={glass._id}
                glass ={glass}
                
               ></GlassProduct>)
           }
           </Row>
       </div>
    );
};

export default ManageProducts;