import React, {useState, useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState({});
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data));
    },[]);
    console.log(reviews);

    return (
        <Container>
            <h2>User's reviews</h2>
            <Row xs={1} md={3} lg={4} className="g-3 pb-4">
                {
                    reviews.length && reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </Row>
        </Container>
    );
};

export default Reviews;