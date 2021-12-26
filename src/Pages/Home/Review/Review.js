import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const Review = ({review}) => {
    const {name, rating, comment} = review;
    return (
        <Col>
        <Card className="p-3 digital-cart">
            <Card.Body>
            <Card.Title>{name.slice(0,24)}</Card.Title>
            <Card.Text>

                    <div>
                        <p><small><Rating
                                initialRating={rating}
                                readonly
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                />
                            </small>
                        </p>
                        <p>{comment}</p>
                </div>
            </Card.Text>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default Review;