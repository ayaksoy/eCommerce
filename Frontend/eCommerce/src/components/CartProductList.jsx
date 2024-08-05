import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/productSlice";

export default function CartProductList() {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.product.cart) || []; // Redux store'dan sepeti al
	const products = useSelector((state) => state.product.products) || []; // Stok bilgilerini almak için tüm ürünleri al

	const handleRemove = (id) => {
		dispatch(removeFromCart(id));
	};

	const handleQuantityChange = (id, newQuantity) => {
		// Sepetteki ürünü bul
		const item = cart.find((item) => item.id === id);
		// Ürünün stok miktarını bul
		const stock = products.find((product) => product.id === id)?.stock || 0;

		// Stok miktarını geçmeyecek şekilde güncelle
		if (newQuantity > 0 && newQuantity <= stock) {
			dispatch(updateQuantity({ id, quantity: newQuantity }));
		} else {
			alert("Stok miktarından fazla ürün ekleyemezsiniz.");
		}
	};

	if (cart.length === 0) {
		return <h4 className="text-center">No products in cart</h4>;
	}

	return (
		<div className="cart-page">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="table-responsive">
							<table className="table table-bordered">
								<thead className="thead-dark">
									<tr>
										<th>Image</th>
										<th>Name</th>
										<th>Price</th>
										<th>Quantity</th>
										<th>Total</th>
										<th>Remove</th>
									</tr>
								</thead>
								<tbody className="align-middle">
									{cart.map((item) => (
										<tr key={item.id}>
											<td>
												<a href="#">
													<img
														src={item.imageUrl}
														alt={item.name}
														style={{ width: "50px" }}
													/>
												</a>
											</td>
											<td>
												<a href="#">{item.name}</a>
											</td>
											<td>${item.price}</td>
											<td>
												<div className="qty">
													<button
														className="btn-minus"
														onClick={() =>
															handleQuantityChange(item.id, item.quantity - 1)
														}
													>
														<i className="fa fa-minus"></i>
													</button>
													<input
														type="text"
														value={item.quantity || 1} // miktar verisi varsa kullan
														readOnly
														style={{ width: "40px", textAlign: "center" }}
													/>
													<button
														className="btn-plus"
														onClick={() =>
															handleQuantityChange(item.id, item.quantity + 1)
														}
													>
														<i className="fa fa-plus"></i>
													</button>
												</div>
											</td>
											<td>${(item.price * (item.quantity || 1)).toFixed(2)}</td>
											<td>
												<button
													className="btn-remove"
													onClick={() => handleRemove(item.id)}
												>
													<i className="fa fa-trash"></i>
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
