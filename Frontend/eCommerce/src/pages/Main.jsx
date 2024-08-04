import React from "react";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Feature from "../components/Feature";
import Category from "../components/Category";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";

export default function Main() {
	return (
		<div>
			<TopHeader />
			<Header />
			<Feature />
			<Category />
			<FeaturedProducts />
			<Footer />
		</div>
	);
}
