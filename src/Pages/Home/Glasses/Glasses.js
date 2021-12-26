import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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
            <h1 className="fw-bold my-5">Look for our <span className="text-danger">Electronic</span> products</h1>
            </div>
                <Row xs={1} md={4} className="g-3">
                    {
                        products.map(product => <Glass
                        key={product.key}
                        product={product}
                        ></Glass>)
                    }
                </Row>
                <button as={HashLink} className="btn-banner d-inline mt-5">See all</button>
        </Container>
    );
};

export default Glasses;