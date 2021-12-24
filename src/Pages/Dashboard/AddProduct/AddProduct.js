import React, {useState} from 'react';
import { Button, Card, Col, Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './AddProduct.css';

const AddOrder = () => {
    const {isLoading, admin} = useAuth();
    const [product, setProduct] = useState({});

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [star, setStar] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [img, setImg] = useState(null);

    const handleOnBlur = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = {...product};
        newProduct[field] = value;
        setProduct(newProduct);
    };

    const handleAddItem = e => {
        e.preventDefault();
        const key = name + Math.round(10000*Math.random());
        if(!img){
            return;
        }
        product.img = img;
        const formData = new FormData();
        formData.append('key', key)
        formData.append('name', name);
        formData.append('price', price);
        formData.append('img', img);
        formData.append('star', star);
        formData.append('stock', stock);
        formData.append('shipping', shipping);

        fetch('http://localhost:5000/addProduct', {
                method: 'POST',
                body: formData
                })
                .then(res => res.json())
                .then(data => {
                if(data.insertedId){
                    console.log('successfully added');
                }
                })
                .catch(error => {
                console.error('Error:', error);
            });
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
                    placeholder="Enter Product Name"
                    className="border border-1 border-dark"
                    name="name"
                    // onBlur={handleOnBlur}
                    onChange={e=> setName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="number"
                    placeholder="Price"
                    className="border border-1 border-dark"
                    name="price"
                    // onBlur={handleOnBlur}
                    onChange={e=> setPrice(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="number"
                    placeholder="Stock available"
                    className="border border-1 border-dark"
                    name="stock"
                    // onBlur={handleOnBlur}
                    onChange={e=> setStock(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="number"
                    placeholder="Give rating"
                    className="border border-1 border-dark"
                    name="star"
                    // onBlur={handleOnBlur}
                    onChange={e=> setStar(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="number"
                    placeholder="Enter shipping cost"
                    className="border border-1 border-dark"
                    name="shipping"
                    // onBlur={handleOnBlur}
                    onChange={e=> setShipping(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control 
                    name="img"
                    accept="image/png, image/jpg" 
                    type="file" 
                    onChange={e=> setImg(e.target.files[0])}
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