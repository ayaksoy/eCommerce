import React from "react";

export default function ProductList({ products }) {
	let content;

	if (!products || products.length === 0) {
		content = <p>No products available</p>;
	} else {
		content = products.map((product) => (
			<div className="col-lg-4" key={product.id}>
				<div className="product-item">
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
	}

	return <>{content}</>;
}
