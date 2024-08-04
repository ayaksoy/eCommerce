import React from "react";

export default function TopHeader() {
	return (
		<div className="top-header">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-3">
						<div className="logo">
							<a href="">
								<img src="img/logo.png" alt="Logo" className="aaa" />
							</a>
						</div>
					</div>
					<div className="col-md-6">
						<div className="search">
							<input type="text" placeholder="Search" />
							<button>
								<i className="fa fa-search"></i>
							</button>
						</div>
					</div>
					<div className="col-md-3">
						<div className="user">
							<div className="dropdown">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown">
									My Account
								</a>
								<div className="dropdown-menu">
									<a href="#" className="dropdown-item">
										Login
									</a>
									<a href="#" className="dropdown-item">
										Register
									</a>
								</div>
							</div>
							<div className="cart">
								<i className="fa fa-cart-plus"></i>
								<span>(0)</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
