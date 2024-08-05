import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProducts, updateProduct } from "../features/productSlice";
import { fetchCategories } from "../features/categorySlice";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import AdminNavbar from "../components/AdminNavbar";


const ProductEdit = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const product = useSelector((state) =>
		state.product.products.find((product) => product.id === parseInt(id))
	);
	const categories = useSelector((state) => state.category.categories);
	const categoriesStatus = useSelector((state) => state.category.status);

	const [formData, setFormData] = useState({
		name: "",
		description: "",
		price: 0,
		stock: 0,
		imageUrl: "",
		categoryId: 0,
	});

	useEffect(() => {
		if (!product) {
			dispatch(fetchProducts());
		} else {
			setFormData(product);
		}
	}, [product, dispatch]);

	useEffect(() => {
		if (categoriesStatus === "idle") {
			dispatch(fetchCategories());
		}
	}, [categoriesStatus, dispatch]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(updateProduct({ id, ...formData })).then(() => {
			dispatch(fetchProducts());
			navigate("/admin/products");
		});
	};

	return (
		<div>
			<AdminNavbar />
			<h2>Ürünü Düzenle</h2>
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
					<Label for="price">Fiyat</Label>
					<Input
						type="number"
						name="price"
						id="price"
						value={formData.price}
						onChange={handleChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="stock">Stok</Label>
					<Input
						type="number"
						name="stock"
						id="stock"
						value={formData.stock}
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
						<option value="">Kategori Seçiniz</option>
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

export default ProductEdit;
