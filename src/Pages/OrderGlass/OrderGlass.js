import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './OrderGlass.css';

const OrderGlass = () => {
    const {id} = useParams();
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/glasses')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    const item = products.find(product => parseInt(product.key) === parseInt(id));

    return (
        <Container>
            <h2>This is order number : {id}</h2>
            <Row xs={1} md={2} className="g-0">
                <Col>
                <Card style={{height: '250px'}} className="d-flex justify-content-center align-items-center">
                    <Card.Img variant="top" src={item?.img} height="200px" className="w-50 mx-auto"/>
                </Card>
                </Col>
                <Col>
                <Card style={{height: '250px'}} className="d-flex justify-content-center align-items-center">
                    <Card.Text>
                        <b>{item?.name}</b><br />
                        Price : ${item?.price}
                        <br />
                        Stock available : {item?.stock}
                    </Card.Text>
                </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default OrderGlass;