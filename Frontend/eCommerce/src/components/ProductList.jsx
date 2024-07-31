import React from "react";
import { Table, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../features/productSlice";
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

	if (productStatus === "loading") {
		return <div>Yükleniyor...</div>;
	}

	if (productStatus === "failed") {
		return <div>Hata: {error}</div>;
	}

	return (
		<div>
			<h2>Ürün Listesi</h2>
			<Table>
				<thead>
					<tr>
						<th>ID</th>
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
								<Button color="danger">Sil</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default ProductList;
