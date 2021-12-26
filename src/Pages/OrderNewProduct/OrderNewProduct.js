import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button, Spinner } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './OrderNewProduct.css';

const OrderNewProduct = () => {
    const {id} = useParams();
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('https://be9digital-market.herokuapp.com/newProducts')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    const item = products.find(product => product.key === id);
    const handleClick = () =>{
        navigate(`/orderProductDetails/${id}`)
    };

    return (
        <Container>
            <h2>Product details</h2>
            {
                !item ?
                <div className="d-flex justify-content-center align-items-center" style={{height: '90vh'}}>
                    <div>
                    <Spinner animation="grow" size="sm" />
                    <Spinner animation="grow" />
                    </div>
                </div>
                :
            <Row xs={1} md={2} className="g-0">
                <Col>
                <Card style={{height: '250px'}} className="d-flex justify-content-center align-items-center">
                    <Card.Img variant="top" src={`data:image/jpeg;base64,${item?.img}`} height="200px" className="w-50 mx-auto"/>
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
                    <Button className='mx-auto my-4 proceed-btn' onClick={handleClick}>Proceed</Button>
            </Row>
            }
        </Container>
    );
};

export default OrderNewProduct;