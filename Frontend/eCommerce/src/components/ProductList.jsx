import React from "react";
import { Table, Button, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts, deleteProduct } from "../features/productSlice";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const products = useSelector((state) => state.product.products);
	const productStatus = useSelector((state) => state.product.status);
	const error = useSelector((state) => state.product.error);

	useEffect(() => {
		if (productStatus === "idle") {
			dispatch(fetchProducts());
		}
	}, [productStatus, dispatch]);

	const handleDelete = (id) => {
		if (window.confirm("Bu ürünü silmek istediğinizden emin misiniz?")) {
			dispatch(deleteProduct(id));
		}
	};

	if (productStatus === "loading") {
		return <div>Yükleniyor...</div>;
	}

	if (productStatus === "failed") {
		return <div>Hata: {error}</div>;
	}

	return (
		<div>
			<h2>Ürün Listesi</h2>
			<Button onClick={() => navigate("/add-product")}>Ürün Ekle</Button>
			<Table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Resim</th>
						<th>İsim</th>
						<th>Açıklama</th>
						<th>Stok</th>
						<th>Fiyat</th>
						<th>İşlemler</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product) => (
						<tr key={product.id}>
							<td>{product.id}</td>
							<td>
								<img src={product.imageUrl} alt={product.name} width="25px" />
							</td>
							<td>{product.name}</td>
							<td>{product.description}</td>
							<td>{product.stock}</td>
							<td>{product.price}</td>
							<td>
								<Button
									color="success"
									style={{ marginRight: "10px" }}
									onClick={() => navigate(`/edit-product/${product.id}`)}
								>
									Düzenle
								</Button>
								<Button color="danger" onClick={() => handleDelete(product.id)}>
									Sil
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default ProductList;
