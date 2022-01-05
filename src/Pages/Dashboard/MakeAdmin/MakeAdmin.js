import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [show, setShow] = useState(false);
    const {token} = useAuth();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    };

    const handleAdminSubmit = e => {
        e.preventDefault()
        const user = { email };
        fetch('https://be9digital-market.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    // setSuccess(true);
                    handleShow();
                    setEmail('');
                }
            })
    }

    return (
        <div className="bg-dark" style={{height: '100vh'}}>
            <form onSubmit={handleAdminSubmit} className="d-flex flex-column justify-content-center align-items-center" style={{height: '90vh'}}>
                <Form.Control onBlur={handleOnBlur} className="w-50 mx-auto" type="email" placeholder="Enter Email" />
                <Button type="submit" variant="success" className="my-2">Make Admin</Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Body>Woohoo, Made Admin Successfully</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </form>
        </div>
    );
};

export default MakeAdmin;