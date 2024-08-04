import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductView from "../components/ProductView";
import TopHeader from "../components/TopHeader";

export default function ListProduct() {
	return (
		<div>
			<TopHeader />
			<Header />
			<ProductView />
			<Footer />
		</div>
	);
}
