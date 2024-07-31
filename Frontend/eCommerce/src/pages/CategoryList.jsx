// src/components/CategoryList.jsx
import React from "react";
import { Table, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCategories, deleteCategory } from "../features/categorySlice";
import { useNavigate } from "react-router-dom";

const CategoryList = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const categories = useSelector((state) => state.category.categories);
	const categoriesStatus = useSelector((state) => state.category.status);
	const error = useSelector((state) => state.category.error);

	useEffect(() => {
		if (categoriesStatus === "idle") {
			dispatch(fetchCategories());
		}
	}, [categoriesStatus, dispatch]);

	const handleDelete = (id) => {
		if (window.confirm("Bu kategoriyi silmek istediğinizden emin misiniz?")) {
			dispatch(deleteCategory(id));
		}
	};

	if (categoriesStatus === "loading") {
		return <div>Yükleniyor...</div>;
	}

	if (categoriesStatus === "failed") {
		return <div>Hata: {error}</div>;
	}

	return (
		<div>
			<h2>Kategori Listesi</h2>
			<Button onClick={() => navigate("/add-category")}>Kategori Ekle</Button>
			<Table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Resim</th>
						<th>İsim</th>
						<th>Açıklama</th>
						<th>İşlemler</th>
					</tr>
				</thead>
				<tbody>
					{categories && categories.length > 0 ? (
						categories.map((category) => (
							<tr key={category.id}>
								<td>{category.id}</td>
								<td>
									<img
										src={category.imageUrl}
										alt={category.name}
										width="25px"
									/>
								</td>
								<td>{category.name}</td>
								<td>{category.description}</td>
								<td>
									<Button
										color="success"
										style={{ marginRight: "10px" }}
										onClick={() => navigate(`/edit-category/${category.id}`)}
									>
										Düzenle
									</Button>
									<Button
										color="danger"
										onClick={() => handleDelete(category.id)}
									>
										Sil
									</Button>
								</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan="5">Kategoriler bulunamadı</td>
						</tr>
					)}
				</tbody>
			</Table>
		</div>
	);
};

export default CategoryList;
