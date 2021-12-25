import React, { useEffect, useState } from 'react';
import { Button, Row, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import ElectricProducts from './ElectricProduct';
import './ManageProducts.css';

const ManageProducts = () => {
    const [eProducts, setEProducts] = useState([]);
    const [glasses, setGlasses] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/e_products')
        .then(res => res.json())
        .then(data => setEProducts(data))
    },[]);

    useEffect(()=>{
        fetch('http://localhost:5000/glasses')
        .then(res => res.json())
        .then(data => setGlasses(data))
    },[])

    return (
       <div>
           <Row sm={1} md={3} lg={4} className="g-3">
           {
               eProducts.map(eProduct => <ElectricProducts
               key={eProduct._id}
               eProduct = {eProduct}
               ></ElectricProducts>)
           }
           </Row>
       </div>
    );
};

export default ManageProducts;