import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Review.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Review = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const toastify = () =>{
        toast.success('Thanks for giving your valuable review!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    };

    const initialInfo = { name: user.displayName, rating: '', comment: '' };
    const [reviewInfo, setReviewInfo] = useState(initialInfo);

    const handleBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...reviewInfo };
        newInfo[field] = value;
        setReviewInfo(newInfo);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const review = {
            ...reviewInfo
        };
        fetch('https://be9digital-market.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(resultData => {
                if (resultData.insertedId) {
                    toastify();
                }
            });
    }
    return (
        <div className="bg-dark text-white">
            <h4 className="pt-3">Review page</h4>
            <div className="divider bg-info rounded mb-3 mx-auto"></div>
            <Form className="w-50 mx-auto text-start pb-5" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name="name" onBlur={handleBlur} type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control name="rating" onBlur={handleBlur} type="number" placeholder="Give Rating" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Comment here</Form.Label>
                    <Form.Control name="comment" onBlur={handleBlur} as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Review;