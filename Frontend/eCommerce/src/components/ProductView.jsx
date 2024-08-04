import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

const ProductView = () => {
	return (
		<div className="product-view">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<div className="row">
							<div className="col-lg-12">
								<div className="row">
									<div className="col-md-8">
										<div className="product-search">
											<input type="email" value="Search" />
											<button>
												<i className="fa fa-search"></i>
											</button>
										</div>
									</div>
								</div>
							</div>
							<ProductList />
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
							<CategoryList />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductView;
