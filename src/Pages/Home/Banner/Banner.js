import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import Typewriter from 'typewriter-effect';
import './Banner.css';

const Banner = () => {
    const handleClick =() =>{};
    return (
        <Container fluid id="banner">
            <Row md={2} xs={1} className="h-100">
                <Col></Col>
                <Col className="h-100 d-flex justify-content-center align-items-center">
                <div>
                <h3 className="fs-1 text-white" style={{height: '100px'}}>
                    <Typewriter
                    
                    options={{
                        autoStart: true,
                        loop: true
                    }}
                    onInit={(typeWriter)=>{
                        typeWriter.typeString("Largest selling market in Bangladesh. Discover the world with Us.")
                        .pauseFor(2000)
                        .start()
                    }}
                    />
                </h3>
                <button as={HashLink} onClick={handleClick} className="btn-banner d-inline mt-5">EXPLORE</button>
            </div>
                </Col>
            </Row>

        </Container>
    );
};

export default Banner;