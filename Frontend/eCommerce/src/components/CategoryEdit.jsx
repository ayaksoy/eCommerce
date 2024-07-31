import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCategories, updateCategory } from "../features/categorySlice";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const CategoryEdit = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const category = useSelector((state) =>
		state.category.categories.find((category) => category.id === parseInt(id))
	);

	const [formData, setFormData] = useState({
		name: "",
		description: "",
		imageUrl: "",
	});

	useEffect(() => {
		if (!category) {
			dispatch(fetchCategories());
		} else {
			setFormData(category);
		}
	}, [category, dispatch]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(updateCategory({ id, ...formData })).then(() => {
			dispatch(fetchCategories());
			navigate("/categories");
		});
	};

	return (
		<div>
			<h2>Kategoriyi Düzenle</h2>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Label for="name">İsim</Label>
					<Input
						type="text"
						name="name"
						id="name"
						value={formData.name}
						onChange={handleChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="description">Açıklama</Label>
					<Input
						type="text"
						name="description"
						id="description"
						value={formData.description}
						onChange={handleChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="imageUrl">Resim URL</Label>
					<Input
						type="text"
						name="imageUrl"
						id="imageUrl"
						value={formData.imageUrl}
						onChange={handleChange}
					/>
				</FormGroup>
				<Button type="submit" color="primary">
					Kaydet
				</Button>
			</Form>
		</div>
	);
};

export default CategoryEdit;
