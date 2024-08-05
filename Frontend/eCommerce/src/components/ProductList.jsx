import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productSlice";

export default function ProductList({ products }) {
	const dispatch = useDispatch();
	const status = useSelector((state) => state.product.status);
	const cart = useSelector((state) => state.product.cart); // Sepeti state'ten al

	const handleAddToCart = (product) => {
		// Sepete ürün ekleme işlevi
		dispatch({ type: "product/addToCart", payload: product });
		// Sepetin güncellenmiş halini konsola yazdır
		console.log("Sepet güncellendi:", cart);
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
							<Link to={`/products/${product.id}`}>{product.name}</Link>
						</div>
						<div className="rating">
							{[...Array(5)].map((_, index) => (
								<i className="fa fa-star" key={index}></i>
							))}
						</div>
						<div className="price">${product.price}</div>
					</div>
				</div>
			</div>
		));
	} else if (status === "failed") {
		content = <p>Error: {error}</p>;
	}

	return <>{content}</>;
}
