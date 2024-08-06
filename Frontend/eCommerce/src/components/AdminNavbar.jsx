import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
	return (
		<Navbar color="dark" dark expand="md" style={{ height: "60px" }}>
			<NavbarBrand tag={Link} to="/admin/">
				Admin Panel
			</NavbarBrand>
			<Nav className="ml-auto" navbar>
				<NavItem>
					<a href="/anasayfa" className="nav-link">
						Anasayfa
					</a>
				</NavItem>
				<NavItem>
					<Link to="/admin/" className="nav-link">
						Overview
					</Link>
				</NavItem>
				<NavItem>
					<Link to="/admin/products" className="nav-link">
						Ürünler
					</Link>
				</NavItem>
				<NavItem>
					<Link to="/admin/categories" className="nav-link">
						Kategoriler
					</Link>
				</NavItem>
				<NavItem>
					<Link to="/admin/orders" className="nav-link">
						Orders
					</Link>
				</NavItem>
			</Nav>
		</Navbar>
	);
};

export default AdminNavbar;
