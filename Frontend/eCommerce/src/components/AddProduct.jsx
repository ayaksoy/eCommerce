import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const AddProduct = () => {
  const [product, setProduct] = useState({ name: '', category: '', price: '' });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ürün Eklendi:', product);
  };

  return (
    <div>
      <h2>Ürün Ekle</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">İsim</Label>
          <Input type="text" name="name" id="name" value={product.name} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="category">Kategori</Label>
          <Input type="text" name="category" id="category" value={product.category} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="price">Fiyat</Label>
          <Input type="number" name="price" id="price" value={product.price} onChange={handleChange} />
        </FormGroup>
        <Button type="submit" color="primary">Ekle</Button>
      </Form>
    </div>
  );
};

export default AddProduct;
