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
							<Link to="/contact" className="nav-item nav-link">
								Contact Us
							</Link>
							<Link to="/cart" className="nav-item nav-link">
								Sepet
							</Link>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
}
