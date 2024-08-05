import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { fetchProducts } from "../features/productSlice";

const ProductView = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.product.products);
	const status = useSelector((state) => state.product.status);
	const [selectedCategoryProducts, setSelectedCategoryProducts] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchProducts());
		}
	}, [status, dispatch]);

	useEffect(() => {
		// Eğer bir kategori seçilmemişse tüm ürünleri göster
		if (selectedCategoryProducts.length === 0) {
			setSelectedCategoryProducts(products);
		}
	}, [products, selectedCategoryProducts]);

	const handleCategorySelect = (products) => {
		setSelectedCategoryProducts(products);
	};

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleSearchSubmit = (event) => {
		event.preventDefault();
		// Arama terimine göre ürünleri filtrele
		const filteredProducts = products.filter((product) =>
			product.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setSelectedCategoryProducts(filteredProducts);
	};

	return (
		<div className="product-view">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<div className="row">
							<div className="col-lg-12">
								<div className="row">
									<div className="col-md-8">
										<form onSubmit={handleSearchSubmit}>
											<div className="product-search input-group mb-3">
												<input
													type="text"
													className="form-control"
													placeholder="Search"
													value={searchTerm}
													onChange={handleSearchChange}
												/>
												<div className="input-group-append">
													<button
														className="btn btn-outline-secondary"
														type="submit"
													>
														<i className="fa fa-search"></i>
													</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
							<ProductList products={selectedCategoryProducts} />
						</div>

						<div className="col-lg-12">
							<nav aria-label="Page navigation example">
								<ul className="pagination justify-content-center">
									<li className="page-item disabled">
										<a className="page-link" href="#" tabIndex="-1">
											Previous
										</a>
									</li>
									<li className="page-item active">
										<a className="page-link" href="#">
											1
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#">
											2
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#">
											3
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#">
											Next
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>

					<div className="col-md-3">
						<div className="sidebar-widget category">
							<h2 className="title">Category</h2>
							<CategoryList onCategorySelect={handleCategorySelect} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductView;
