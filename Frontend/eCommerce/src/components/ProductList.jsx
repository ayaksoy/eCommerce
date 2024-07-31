import React from "react";
import { Table, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../features/productSlice";
const ProductList = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.product.products);
	const productStatus = useSelector((state) => state.product.status);

	useEffect(() => {
		if (productStatus === "idle") {
			dispatch(fetchProducts());
		}
	}, [productStatus, dispatch]);

	return (
		<div>
			<h2>Ürün Listesi</h2>
			<Table>
				<thead>
					<tr>
						<th>ID</th>
						<th>İsim</th>
						<th>Kategori</th>
						<th>Fiyat</th>
						<th>İşlemler</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product) => (
						<tr key={product.id}>
							<td>{product.id}</td>
							<td>{product.name}</td>
							<td>{product.category}</td>
							<td>{product.price}</td>
							<td>
								<Button color="success">Düzenle</Button>
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
