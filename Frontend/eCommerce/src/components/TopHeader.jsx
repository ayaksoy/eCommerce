import React from "react";
import { Link } from "react-router-dom"; // Link bileşenini içe aktarın

export default function TopHeader() {
	return (
		<div className="top-header">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-3">
						<div className="logo">
							<Link to="/">
								<img src="img/logo.png" alt="Logo" className="aaa" />
							</Link>
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
								<Link to="#" className="dropdown-toggle" data-toggle="dropdown">
									My Account
								</Link>
								<div className="dropdown-menu">
									<Link to="#" className="dropdown-item">
										Login
									</Link>
									<Link to="#" className="dropdown-item">
										Register
									</Link>
								</div>
							</div>
							<div className="cart">
								<Link to="/cart">
									<i className="fa fa-cart-plus"></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
