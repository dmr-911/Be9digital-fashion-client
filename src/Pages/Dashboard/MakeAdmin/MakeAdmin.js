import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './MakeAdmin.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const {token} = useAuth();

    const toastify = () =>{
        toast.success('Admin made successfully!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    };

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
                    toastify();
                    setEmail('');
                }
            })
    }

    return (
        <div className="bg-dark" style={{height: '80vh'}}>
            <h3>Make <span className="text-orrange">Admin</span></h3>
            <form onSubmit={handleAdminSubmit} className="" style={{height: '90vh'}}>
                <h2 className='text-white'>Make Admin</h2>
                <Form.Control onBlur={handleOnBlur} className="w-50 mx-auto" type="email" placeholder="Enter Email" />
                <Button type="submit" variant="success" className="my-2">Make Admin</Button>
            </form>
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

export default MakeAdmin;