import React, {useState, useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState({});
    useEffect(()=>{
        fetch('https://be9digital-market.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data));
    },[]);
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/dashboard/review')
    }

    return (
        <Container className="my-5">
             <h1 className="fw-bold mt-5">Our lovely <span className="text-danger">Customers</span> say</h1>
             <p className="text-secondary mb-5">See our customers reviews and give your valuable review from dashboard review section.</p>
            <Row xs={1} md={4} className="w-100 g-2 py-2 ">
                {
                    reviews?.length && reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </Row>
            <button as={Link} onClick={handleClick} className="btn-banner d-inline mt-5">Review here</button>

        </Container>
    );
};

export default Reviews;