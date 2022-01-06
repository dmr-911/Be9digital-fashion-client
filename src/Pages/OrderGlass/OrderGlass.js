import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import Rating from 'react-rating';
import { useNavigate, useParams } from 'react-router-dom';
import './OrderGlass.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OrderGlass = () => {
    const {id} = useParams();
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('https://be9digital-market.herokuapp.com/glasses')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    const item = products.find(product => parseInt(product.key) === parseInt(id));
    const handleClick = () =>{
        navigate(`/orderGlassDetails/${id}`)
    };

    useEffect(()=>{
        AOS.init({duration: 1000})
    });

    return (
        <Container>
         <h2 className="fw-bold mt-3">Product <span className="text-danger">details</span></h2>
        {
            !item ?
            <div className="d-flex justify-content-center align-items-center" style={{height: '90vh'}}>
                <div>
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" />
                </div>
            </div>
            :
            <Col xs={12} md={5} className="mx-auto">
            <Card className="p-3 digital-cart mb-5" data-aos="flip-down">
                <div>
                    <div className="d-flex justify-content-between">
                        <div className="bg-danger text-white px-2">
                            <span>5% off</span>
                        </div>
                    </div>
                </div>
                <Card.Img variant="top" src={item?.img.startsWith('http') ? item?.img : `data:image/png;base64,${item?.img}`} height="140" />
                <Card.Body>
                <Card.Title>{item?.name.slice(0,24)}</Card.Title>
                <div>
                    <div className="d-flex justify-content-between">
                        <div className="text-start">
                            <p><small>Price: ${item?.price}</small></p>
                        </div>
                        <div>
                            <p><small><Rating
                                    initialRating={item?.star}
                                    readonly
                                    emptySymbol="far fa-star icon-color"
                                    fullSymbol="fas fa-star icon-color"
                                    />
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
                <Button className='mx-auto my-4 proceed-btn' onClick={handleClick}>Proceed</Button>
                </Card.Body>
            </Card>
            </Col>
        }
    </Container>
    );
};

export default OrderGlass;