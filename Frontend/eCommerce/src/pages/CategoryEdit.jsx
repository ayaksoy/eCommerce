import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCategories, updateCategory } from "../features/categorySlice";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import AdminNavbar from "../components/AdminNavbar";

const CategoryEdit = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const category = useSelector((state) =>
		state.category.categories.find((category) => category.id === parseInt(id))
	);
	const categories = useSelector((state) => state.category.categories);

	const [formData, setFormData] = useState({
		name: "",
		description: "",
		imageUrl: "",
		categoryId: "", // Yeni eklenen kategori ID'si
	});

	useEffect(() => {
		if (!category) {
			dispatch(fetchCategories());
		} else {
			setFormData({
				...category,
				categoryId: category.id, // Seçilen kategori ID'sini form verisine ekleyin
			});
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
			navigate("/admin/categories");
		});
	};

	return (
		<div>
			<AdminNavbar />
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
				<FormGroup>
					<Label for="categoryId">Kategori</Label>
					<Input
						type="select"
						name="categoryId"
						id="categoryId"
						value={formData.categoryId}
						onChange={handleChange}
					>
						<option value="">Kategori Seçin</option>
						{categories.map((category) => (
							<option key={category.id} value={category.id}>
								{category.name}
							</option>
						))}
					</Input>
				</FormGroup>
				<Button type="submit" color="primary">
					Kaydet
				</Button>
			</Form>
		</div>
	);
};

export default CategoryEdit;
