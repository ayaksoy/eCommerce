import React from "react";
import CartProductList from "../components/CartProductList";
import { useSelector } from "react-redux";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Cart() {
	const cart = useSelector((state) => state.product.cart); // Sepeti Redux durumundan al

	return (
		<div>
			<TopHeader />
			<Header />
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
			<CartProductList cart={cart} />
			<Footer />
		</div>
	);
}
