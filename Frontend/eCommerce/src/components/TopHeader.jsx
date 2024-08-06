import React from "react";
import { Link, NavLink } from "react-router-dom"; // İki bileşeni içe aktarın

export default function TopHeader() {
	return (
		<div className="top-header">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-3">
						<div className="logo">
							<Link to="/anasayfa">
								<img src="img/logo.png" alt="Logo" className="aaa" />
							</Link>
						</div>
					</div>
					<div className="col-md-6"></div>
					<div className="col-md-3">
						<div className="user">
							{/* NavLink yerine sadece Link kullanıyoruz */}
							<Link to="/" className="dropdown-toggle">
								Admin Login
							</Link>
							{/* NavLink yerine sadece Link kullanıyoruz */}
							<Link to="/cart" className="ml-5">
								<i className="fa fa-cart-plus"></i>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
