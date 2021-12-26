import React, {useState, useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';
import './Reviews.css';
import banner from "../../../images/banner/banner.jpg";

const Reviews = () => {
    const [reviews, setReviews] = useState({});
    useEffect(()=>{
        fetch('https://be9digital-market.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data));
    },[]);

    return (
        <Container className="my-5">
             <h1 className="fw-bold my-5">Our lovely <span className="text-danger">Customers</span> say</h1>
            <Row xs={1} md={2} lg={2} className="g-0 pb-4">
            <Col style={{minHeight: "419px"}}><img src={banner} alt="" className="img-fluid" /></Col>
            <Col className="m-0" style={{overflow: "hidden"}}>
            <Row xs={1} md={2} className="w-100 g-2 py-2" style={{backgroundColor : "#5f9ea0", minHeight : "425px"}}>
                {
                    reviews.length && reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </Row>
            </Col>
            </Row>
        </Container>
    );
};

export default Reviews;