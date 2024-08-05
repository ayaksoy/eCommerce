import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../features/productSlice"; // Eylemi import edin
import Swal from "sweetalert2"; // SweetAlert2'yi import edin

export default function ProductList({ products }) {
	const dispatch = useDispatch();
	const status = useSelector((state) => state.product.status);
	const cart = useSelector((state) => state.product.cart);

	const handleAddToCart = (product) => {
		const existingItem = cart.find((item) => item.id === product.id);

		// Eğer ürün sepette mevcutsa ve stok miktarını geçmeyecekse ekleyin
		if (existingItem) {
			if (existingItem.quantity < product.stock) {
				dispatch(
					addToCart({ ...product, quantity: existingItem.quantity + 1 })
				);
				Swal.fire({
					icon: "success",
					title: "Başarıyla eklendi!",
					text: `${product.name} sepete eklendi.`,
				});
			} else {
				Swal.fire({
					icon: "error",
					title: "Stok Sorunu",
					text: "Stok miktarından fazla ürün ekleyemezsiniz.",
				});
			}
		} else {
			if (product.stock > 0) {
				dispatch(addToCart({ ...product, quantity: 1 }));
				Swal.fire({
					icon: "success",
					title: "Başarıyla eklendi!",
					text: `${product.name} sepete eklendi.`,
				});
			} else {
				Swal.fire({
					icon: "error",
					title: "Stok Sorunu",
					text: "Bu ürün stokta mevcut değil.",
				});
			}
		}
	};

	let content;

	if (status === "loading") {
		content = <p>Loading...</p>;
	} else if (status === "succeeded") {
		content = products.map((product) => (
			<div className="col-lg-4" key={product.id}>
				<div className="product-item">
					<div className="product-image">
						<Link to={`/products/${product.id}`}>
							<img src={product.imageUrl} alt={product.name} height="300px" />
						</Link>
						<div className="product-action">
							<button onClick={() => handleAddToCart(product)}>
								<i className="fa fa-cart-plus"></i>
							</button>
						</div>
					</div>
					<div className="product-content">
						<div className="title">
							<Link to={`/product/${product.id}`}>{product.name}</Link>
						</div>
						<div className="rating">
							{[...Array(5)].map((_, index) => (
								<i className="fa fa-star" key={index}></i>
							))}
						</div>
						<div className="price">${product.price}</div>
						<div className="stock">Stock: {product.stock}</div>
					</div>
				</div>
			</div>
		));
	} else if (status === "failed") {
		content = <p>Error: {error}</p>;
	}

	return <>{content}</>;
}
