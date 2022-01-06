import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Precaution.css';

const Precaution = ({item}) => {
    const {img, title} = item;
    return (
        <Col>
        <Card className="p-3 digital-cart precaution-card">
            <Card.Body>
            <img src={img} alt="" />
            <div>
                    <p className="fw-bold">{title}</p>

            </div>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default Precaution;