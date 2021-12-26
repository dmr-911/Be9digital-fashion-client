import React, {useState, useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';
import './Reviews.css';
import Slider from "react-slick";
import banner from "../../../images/banner/banner.jpg";

const Reviews = () => {
    const [reviews, setReviews] = useState({});
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data));
    },[]);
    console.log(reviews);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <Container className="my-5">
             <h1 className="fw-bold my-5">Our lovely <span className="text-danger">Customers</span> say</h1>
            <Row xs={1} md={2} lg={2} className="g-0 pb-4 rounded">
            <Col xs={12} md={5} className={{minHeight: "419px"}}><img src={banner} alt="" className="img-fluid" /></Col>
            <Slider {...settings} className="d-flex justify-content-center align-items-center px-5" style={{backgroundColor : "#5f9ea0", maxHeight : "419px"}}>
                {
                    reviews.length && reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </Slider>
            </Row>
        </Container>
    );
};

export default Reviews;