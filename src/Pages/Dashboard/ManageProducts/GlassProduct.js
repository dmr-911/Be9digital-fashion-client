import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import useAuth from '../../../hooks/useAuth';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GlassProduct = ({glass}) => {
    const { user } = useAuth();
    const [glasses, setGlasses] = useState([]);
    useEffect(() => {
        fetch(`https://be9digital-market.herokuapp.com/glasses`)
            .then(res => res.json())
            .then(data => setGlasses(data))
    }, [user.email]);
    useEffect(()=>{
        AOS.init({duration: 1000})
    });

    const {img, name, price, stock, star, _id} = glass;
    const handleDelete = id =>{
        const proceed = window.confirm('Delete this product?')
        if (proceed) {
            const uri = `https://be9digital-market.herokuapp.com/glass/${id}`;
            fetch(uri, {
                method: "DELETE",
            })
                .then((res) => res.json)
                .then((data) => {
                    const restOrders = glasses.filter(order => order._id !== id)
                    setGlasses(restOrders);
                });
        }
    };

    return (
        <Col>
        <Card className="p-2" style={{minHeight: '450px'}} data-aos="fade-up">
            <Card.Img variant="top" src={img} height="140" />
            <Card.Body>
            <Card.Title>{name.slice(0,20)}</Card.Title>
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
            <Button variant="danger" onClick={()=>handleDelete(_id)}>Delete</Button>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default GlassProduct;