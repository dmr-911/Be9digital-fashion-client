import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Glass from '../../Explore/Glass/Glass';

const Glasses = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/glasses?home=home')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    return (
        <Container>
            <div className="d-flex justify-content-between">
                <h3>Smart Glasses</h3>
                <NavLink to="/explore">See all</NavLink>
            </div>
                <Row xs={1} md={4} className="g-3">
                    {
                        products.map(product => <Glass
                        key={product.key}
                        product={product}
                        ></Glass>)
                    }
                </Row>
        </Container>
    );
};

export default Glasses;