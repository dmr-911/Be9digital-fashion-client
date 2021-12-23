import React from 'react';
import { Button, Card, Col, Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './AddProduct.css';

const AddOrder = () => {
    const {isLoading, admin} = useAuth();
    const handleOnBlur = (e) =>{};
    const handleAddItem = e => {

    }
    return (
        <>
      <div className="bg-dark login-page pt-2">
        <Col xs={12} md={5} className="mx-auto pb-2 w-75">
          <Card className="p-3">
            <h3>Add a product</h3>
            <div className="divider bg-info rounded mb-3 mx-auto"></div>
            {
                !isLoading && <Form  onSubmit={handleAddItem}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Name"
                    className="border border-1 border-dark"
                    name="name"
                    onBlur={handleOnBlur}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="number"
                    placeholder="Price"
                    className="border border-1 border-dark"
                    name="price"
                    onBlur={handleOnBlur}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="number"
                    placeholder="Stock available"
                    className="border border-1 border-dark"
                    name="stock"
                    onBlur={handleOnBlur}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="number"
                    placeholder="Give rating"
                    className="border border-1 border-dark"
                    name="star"
                    onBlur={handleOnBlur}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="number"
                    placeholder="Enter shipping cost"
                    className="border border-1 border-dark"
                    name="shipping"
                    onBlur={handleOnBlur}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Re-type Password"
                    className="border border-1 border-dark"
                    name="password2"
                    onBlur={handleOnBlur}
                  />
                </Form.Group>
                <Button variant="success" type="submit">
                  Add Item
                </Button>
              </Form>
            }
          </Card>
        </Col>
      </div>
    </>
    );
};

export default AddOrder;