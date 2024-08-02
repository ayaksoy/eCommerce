import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createCategory, fetchCategories } from "../features/categorySlice";

const AddCategory = () => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newCategory = {
			name,
			description,
			imageUrl,
		};

		try {
			await dispatch(createCategory(newCategory)).unwrap();
			// Kategoriler güncellenmişse, kategori listesini yeniden çek
			await dispatch(fetchCategories()).unwrap();
			navigate("/admin/categories");
		} catch (error) {
			console.error("Kategori eklenirken bir hata oluştu:", error);
		}
	};

	return (
		<Container>
			<h2>Kategori Ekle</h2>
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
				<Button type="submit" color="primary">
					Ekle
				</Button>
			</Form>
		</Container>
	);
};

export default AddCategory;
