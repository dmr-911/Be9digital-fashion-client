import React from 'react';
import './CustomNav.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
// import {useSelector} from 'react-redux';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo/new-logo-2.png';

const CustomNav = () => {
    // const state = useSelector(state => state.addedCart);
    const {user, logOut} = useAuth();

    return (
        <Navbar variant="dark" bg="dark" expand="lg">
        <Container>
            <Navbar.Brand as={HashLink} to="/home" className="fw-bolder">
            <img
                src={logo}
                width="120"
                height="40"
                className="d-inline-block align-top"
                alt="logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/explore">Explore</Nav.Link>
                <Nav.Link as={HashLink} to="/dashboard">
                Dashboard
                </Nav.Link>
                <Nav.Link as={HashLink} to="/about">
                About Us
                </Nav.Link>
                {
                    user.email ?
                    <img height="40" width="40" className='rounded-circle mx-auto' src={user.photoURL && user.photoURL} title={user.displayName} alt={user.displayName} />
                    :
                    <Nav.Link as={HashLink} to="/login">
                    Login
                    </Nav.Link>
                }
            </Nav>
            {
                user.email && <Button className="mx-2" variant="danger" onClick={logOut}>Logout</Button>
            }
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default CustomNav;