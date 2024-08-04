import React from "react";

export default function Header() {
	return (
		<div className="header">
			<div className="container">
				<nav className="navbar navbar-expand-md bg-dark navbar-dark">
					<a href="#" className="navbar-brand">
						MENU
					</a>
					<button
						type="button"
						className="navbar-toggler"
						data-toggle="collapse"
						data-target="#navbarCollapse"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className="collapse navbar-collapse justify-content-between"
						id="navbarCollapse"
					>
						<div className="navbar-nav m-auto">
							<a href="index.html" className="nav-item nav-link active">
								Home
							</a>
							<a href="/products" className="nav-item nav-link">
								Products
							</a>
							<div className="nav-item dropdown">
								<a
									href="#"
									className="nav-link dropdown-toggle"
									data-toggle="dropdown"
								>
									Pages
								</a>
								<div className="dropdown-menu">
									<a href="product-list.html" className="dropdown-item">
										Product
									</a>
									<a href="product-detail.html" className="dropdown-item">
										Product Detail
									</a>
									<a href="cart.html" className="dropdown-item">
										Cart
									</a>
									<a href="wishlist.html" className="dropdown-item">
										Wishlist
									</a>
									<a href="checkout.html" className="dropdown-item">
										Checkout
									</a>
									<a href="login.html" className="dropdown-item">
										Login & Register
									</a>
									<a href="my-account.html" className="dropdown-item">
										My Account
									</a>
								</div>
							</div>
							<a href="contact.html" className="nav-item nav-link">
								Contact Us
							</a>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
}
