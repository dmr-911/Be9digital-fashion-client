import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './E_product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const E_product = () => {
    const element = <FontAwesomeIcon icon={faCoffee} />
    return (
        <Col>
        <Card className="p-3">
            <Card.Text>
                <div className="d-flex justify-content-between">
                    <div className="bg-dark text-white px-2">
                        <span>5% off</span>
                    </div>
                    <span className="px-2">{element}</span>
                </div>
            </Card.Text>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                <div className="d-flex justify-content-between">
                    <div className="text-start">
                        <p><small>Price: $24</small></p>
                        <p><small>Stock : 35 items</small></p>
                    </div>
                    <div>
                        <p><small>{element}</small></p>
                        <p><small>{element}</small></p>
                    </div>
                </div>
            </Card.Text>
            <button className="btn-products">Order Now</button>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default E_product;