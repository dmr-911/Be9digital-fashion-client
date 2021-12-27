import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './NewProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
import { useNavigate } from 'react-router-dom';

const NewProduct = ({product}) => {
    const cart = <FontAwesomeIcon icon={faCartPlus} />
    const {img, name, price, stock, star, key} = product;
    const navigate = useNavigate();
    const handleClick = id =>{
        navigate(`/orderNewProduct/${id}`);
    };

    return (
        <Col>
        <Card className="p-3 digital-cart">
            <div>
                <div className="d-flex justify-content-between">
                    <div className="bg-danger text-white px-2">
                        <span>5% off</span>
                    </div>
                    <span className="far fa-heart favorite"></span>
                </div>
            </div>
            <Card.Img variant="top" src={img.startsWith('http') ? img : `data:image/png;base64,${img}`} height="140" />
            <Card.Body>
            <Card.Title>{name.slice(0,24)}</Card.Title>
            <div>
                <div className="d-flex justify-content-between">
                    <div className="text-start">
                        <p><small>Price: ${price}</small></p>
                        <p><small>Stock : {stock} items</small></p>
                    </div>
                    <div>
                        <p><small><Rating
                                initialRating={star}
                                readonly
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                />
                            </small>
                        </p>
                    </div>
                </div>
            </div>
            <button className="btn-products" onClick={()=>handleClick(key)}><span className="me-2">{cart}</span>Order Now</button>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default NewProduct;