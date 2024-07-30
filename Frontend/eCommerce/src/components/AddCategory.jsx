import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const AddCategory = () => {
  const [category, setCategory] = useState({ name: '' });

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Kategori Eklendi:', category);
  };

  return (
    <div>
      <h2>Kategori Ekle</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">İsim</Label>
          <Input type="text" name="name" id="name" value={category.name} onChange={handleChange} />
        </FormGroup>
        <Button type="submit" color="primary">Ekle</Button>
      </Form>
    </div>
  );
};

export default AddCategory;
