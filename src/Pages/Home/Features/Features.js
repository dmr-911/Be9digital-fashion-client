import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Features.css';

const Features = () => {
    return (
        <Container>
            <h1 className="fw-bold my-5">Core features for <span className="text-danger">Super</span> users</h1>
            <Row xs={1} md={3} lg={4}>
                <Col>
                <Card className="p-3 digital-cart feature-card">
                    <Card.Body>
                    <span className="feature mb-5"><i class="fas fa-headset fs-2"></i></span>
                    <Card.Text>
                        <div>
                            <p className="fw-bold">Live support</p>
                            <p className="text-secondary">Realize importance of social proof in customer’s purchase decision.</p>
                        </div>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className="p-3 digital-cart">
                    <Card.Body>
                    <span className="feature mb-5"><i class="far fa-credit-card fs-2"></i></span>
                    <Card.Text>
                        <div>
                            <p className="fw-bold">Secure transaction</p>
                            <p className="text-secondary">Realize importance of social proof in customer’s purchase decision.</p>
                        </div>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className="p-3 digital-cart">
                    <Card.Body>
                    <span className="feature mb-5"><i class="fas fa-unlock-alt fs-2"></i></span>
                    <Card.Text>
                        <div>
                            <p className="fw-bold">Information security</p>
                            <p className="text-secondary">Realize importance of social proof in customer’s purchase decision.</p>
                        </div>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className="p-3 digital-cart">
                    <Card.Body>
                    <span className="feature mb-5"><i class="fas fa-exclamation-triangle fs-2"></i></span>
                    <Card.Text>
                        <div>
                            <p className="fw-bold">Live support</p>
                            <p className="text-secondary">Realize importance of social proof in customer’s purchase decision.</p>
                        </div>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Features;