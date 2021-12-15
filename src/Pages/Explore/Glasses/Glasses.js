import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import E_product from '../E_product/E_product';
import './Glasses.css';

const Glasses = () => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('./glasses.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[]);

    return (
        <Container>
            <h3>Glasses</h3>
            <Row xs={1} md={4}>
                {
                    items && items.map(item => <E_product
                    key={item.key}
                    product={item}
                    ></E_product>)
                }
            </Row>
        </Container>
    );
};

export default Glasses;