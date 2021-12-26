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
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    return (
        <Container className="my-5">
             <h1 className="fw-bold my-5">Our lovely <span className="text-danger">Customers</span> say</h1>
            <Row xs={1} md={2} lg={2} className="g-0 pb-4 rounded">
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