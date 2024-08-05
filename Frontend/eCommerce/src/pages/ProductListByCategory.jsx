// src/components/ProductListByCategory.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductsByCategoryId } from "../features/productSlice";
import { Table, Button } from "reactstrap";
import AdminNavbar from "../components/AdminNavbar";

const ProductListByCategory = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const products = useSelector((state) => state.product.products);
	const productsStatus = useSelector((state) => state.product.status);
	const error = useSelector((state) => state.product.error);

	useEffect(() => {
		dispatch(fetchProductsByCategoryId(id));
	}, [id, dispatch]);

	if (productsStatus === "loading") {
		return <div>Yükleniyor...</div>;
	}

	if (productsStatus === "failed") {
		return <div>Hata: {error}</div>;
	}

	return (
		<div>
			<AdminNavbar />
			<h2>Ürünler</h2>
			<Table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Resim</th>
						<th>İsim</th>
						<th>Açıklama</th>
						<th>Fiyat</th>
						<th>Stok</th>
					</tr>
				</thead>
				<tbody>
					{products && products.length > 0 ? (
						products.map((product) => (
							<tr key={product.id}>
								<td>{product.id}</td>
								<td>
									<img src={product.imageUrl} alt={product.name} width="50px" />
								</td>
								<td>{product.name}</td>
								<td>{product.description}</td>
								<td>{product.price}</td>
								<td>{product.stock}</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan="6">Ürün bulunamadı</td>
						</tr>
					)}
				</tbody>
			</Table>
		</div>
	);
};

export default ProductListByCategory;
