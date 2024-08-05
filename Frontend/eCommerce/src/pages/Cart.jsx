import React from "react";
import CartProductList from "../components/CartProductList";

export default function Cart() {
	return (
		<div>
			<div className="breadcrumb-wrap">
				<div className="container">
					<ul className="breadcrumb">
						<li className="breadcrumb-item">
							<a href="#">Home</a>
						</li>
						<li className="breadcrumb-item">
							<a href="#">Products</a>
						</li>
						<li className="breadcrumb-item active">Cart</li>
					</ul>
				</div>
			</div>
			<CartProductList />
		</div>
	);
}
