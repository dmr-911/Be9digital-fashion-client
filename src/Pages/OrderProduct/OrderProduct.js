import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './OrderProduct.css';

const OrderProduct = () => {
    const {id} = useParams();
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/e_products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    const item = products.find(product => product.key === id);
    console.log(item);

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
                    <Card.Body>
                    <Card.Title>{item?.name}</Card.Title>
                    <Card.Text>
                        Price : ${item?.price}
                        <br />
                        Stock available : {item?.stock}
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default OrderProduct;