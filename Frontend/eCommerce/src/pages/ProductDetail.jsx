import React from "react";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductDetailById from "../components/ProductDetailById";

export default function ProductDetail() {
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
						<li className="breadcrumb-item active">product details</li>
					</ul>
				</div>
			</div>
			<ProductDetailById />

			<Footer />
		</div>
	);
}
