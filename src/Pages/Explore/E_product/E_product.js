import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './E_product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from '../../../state/index';

const E_product = ({product}) => {
    const heart = <FontAwesomeIcon icon={faHeart} />
    const cart = <FontAwesomeIcon icon={faCartPlus} />
    const {img, name, price, stock, star, key} = product;
    const navigate = useNavigate();
    const handleClick = id =>{
        navigate(`/order/${id}`);
    };
    const dispatch = useDispatch();
    const {cartItem} = bindActionCreators(actionCreators, dispatch);

    return (
        <Col>
        <Card className="p-3">
            <Card.Text>
                <div className="d-flex justify-content-between">
                    <div className="bg-danger text-white px-2">
                        <span>5% off</span>
                    </div>
                    <span className="far fa-heart favorite"></span>
                </div>
            </Card.Text>
            <Card.Img variant="top" src={img} height="140" />
            <Card.Body>
            <Card.Title>{name.slice(0,24)}</Card.Title>
            <Card.Text>
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
            </Card.Text>
            <button className="btn-products my-3" onClick={()=>cartItem(1)}><span className="me-2">{cart}</span>Add to Cart</button>
            <button className="btn-products" onClick={()=>handleClick(key)}><span className="me-2">{cart}</span>Order Now</button>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default E_product;