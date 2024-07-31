import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createProduct, fetchProducts } from "../features/productSlice";

const AddProduct = () => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [stock, setStock] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [categoryId, setCategoryId] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newProduct = {
			name,
			description,
			price: parseFloat(price),
			stock: parseInt(stock),
			imageUrl,
			categoryId: parseInt(categoryId),
		};

		try {
			await dispatch(createProduct(newProduct)).unwrap();
			// Ürünler güncellenmişse, ürün listesini yeniden çek
			await dispatch(fetchProducts()).unwrap();
			navigate("/products");
		} catch (error) {
			console.error("Ürün eklenirken bir hata oluştu:", error);
		}
	};

	return (
		<Container>
			<h2>Ürün Ekle</h2>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Label for="name">İsim</Label>
					<Input
						type="text"
						name="name"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</FormGroup>
				<FormGroup>
					<Label for="description">Açıklama</Label>
					<Input
						type="text"
						name="description"
						id="description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						required
					/>
				</FormGroup>
				<FormGroup>
					<Label for="price">Fiyat</Label>
					<Input
						type="number"
						name="price"
						id="price"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
						required
					/>
				</FormGroup>
				<FormGroup>
					<Label for="stock">Stok</Label>
					<Input
						type="number"
						name="stock"
						id="stock"
						value={stock}
						onChange={(e) => setStock(e.target.value)}
						required
					/>
				</FormGroup>
				<FormGroup>
					<Label for="imageUrl">Resim URL</Label>
					<Input
						type="text"
						name="imageUrl"
						id="imageUrl"
						value={imageUrl}
						onChange={(e) => setImageUrl(e.target.value)}
						required
					/>
				</FormGroup>
				<FormGroup>
					<Label for="categoryId">Kategori ID</Label>
					<Input
						type="number"
						name="categoryId"
						id="categoryId"
						value={categoryId}
						onChange={(e) => setCategoryId(e.target.value)}
						required
					/>
				</FormGroup>
				<Button type="submit" color="primary">
					Ekle
				</Button>
			</Form>
		</Container>
	);
};

export default AddProduct;
