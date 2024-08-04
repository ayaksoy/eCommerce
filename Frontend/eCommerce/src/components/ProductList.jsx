import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productSlice";

export default function ProductList() {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.product.products);
	const status = useSelector((state) => state.product.status);
	const error = useSelector((state) => state.product.error);

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchProducts());
		}
	}, [status, dispatch]);

	let content;

	if (status === "loading") {
		content = <p>Loading...</p>;
	} else if (status === "succeeded") {
		content = products.map((product) => (
			<div className="col-lg-4">
				<div className="product-item" key={product.id}>
					<div className="product-image">
						<a href="product-detail.html">
							<img src={product.imageUrl} alt={product.name} height="300px" />
						</a>
						<div className="product-action">
							<a href="#">
								<i className="fa fa-cart-plus"></i>
							</a>
						</div>
					</div>
					<div className="product-content">
						<div className="title">
							<a href="#">{product.name}</a>
						</div>
						<div className="ratting">
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
