import React, { useEffect, useState } from 'react';
import {Container, Row} from 'react-bootstrap';
import Precaution from '../Precaution/Precaution';
import './Precautions.css';

const Precautions = () => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('./precautions.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[]);
    return (
        <Container>
            <h1 className="fw-bold mt-5">Important <span className="text-danger">Precautions </span> in pandemic</h1>
            <Row xs={1} md={3} lg={4} className="g-3 my-4">
                {
                    items.map(item =><Precaution
                    key={item.key}
                    item={item}
                    ></Precaution>)
                }
            </Row>
        </Container>
    );
};

export default Precautions;