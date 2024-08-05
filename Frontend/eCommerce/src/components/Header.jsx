import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div className="header">
			<div className="container">
				<nav className="navbar navbar-expand-md bg-dark navbar-dark">
					<Link to="/" className="navbar-brand">
						MENU
					</Link>
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
							<Link to="/" className="nav-item nav-link">
								Home
							</Link>
							<Link to="/products" className="nav-item nav-link">
								Products
							</Link>
							<div className="nav-item dropdown">
								<a
									href="#"
									className="nav-link dropdown-toggle"
									data-toggle="dropdown"
								>
									Pages
								</a>
								<div className="dropdown-menu">
									<Link to="/product-list" className="dropdown-item">
										Product
									</Link>
									<Link to="/product-detail" className="dropdown-item">
										Product Detail
									</Link>
									<Link to="/cart" className="dropdown-item">
										Cart
									</Link>
									<Link to="/wishlist" className="dropdown-item">
										Wishlist
									</Link>
									<Link to="/checkout" className="dropdown-item">
										Checkout
									</Link>
									<Link to="/login" className="dropdown-item">
										Login & Register
									</Link>
									<Link to="/my-account" className="dropdown-item">
										My Account
									</Link>
								</div>
							</div>
							<Link to="/contact" className="nav-item nav-link">
								Contact Us
							</Link>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
}
