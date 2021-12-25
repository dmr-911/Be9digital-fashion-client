import React from 'react';
import { Button, Card, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';

const ElectricProducts = ({eProduct}) => {

    const cart = <FontAwesomeIcon icon={faCartPlus} />
    const {img, name, price, stock, star, key} = eProduct;
    const handleClick = id =>{
        // navigate(`/order/${id}`);
    };

    return (
        <Col>
        <Card className="p-2" style={{minHeight: '450px'}}>
            <Card.Img variant="top" src={img} height="140" />
            <Card.Body>
            <Card.Title>{name.slice(0,20)}</Card.Title>
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
            <Button variant="danger" onClick={()=>handleClick(key)}>Delete</Button>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default ElectricProducts;