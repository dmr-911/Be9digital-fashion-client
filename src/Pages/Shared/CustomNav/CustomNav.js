import React from 'react';
import './CustomNav.css';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
// import {useSelector} from 'react-redux';
import useAuth from '../../../hooks/useAuth';

const CustomNav = () => {
    // const state = useSelector(state => state.addedCart);
    const {user, logOut} = useAuth();

    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand as={HashLink} to="/home" className="fw-bolder">Be9digital Market</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/explore">Explore</Nav.Link>
                <NavDropdown title="More" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                    Something else here
                </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={HashLink} to="/dashboard">
                Dashboard
                </Nav.Link>
                <Nav.Link as={HashLink} to="/about">
                About Us
                </Nav.Link>
                {
                    user.email ?
                    <img height="40" width="40" className='rounded-circle' src={user.photoURL && user.photoURL} title={user.displayName} alt={user.displayName} />
                    :
                    <Nav.Link as={HashLink} to="/login">
                    Login
                    </Nav.Link>
                }
            </Nav>
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
            </Form>
            {
                user.email && <Button variant="danger" onClick={logOut}>Logout</Button>
            }
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default CustomNav;