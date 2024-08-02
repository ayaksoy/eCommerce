import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const AdminNavbar = () => {
	return (
		<Navbar color="dark" dark expand="md" style={{ height: "60px" }}>
			<NavbarBrand href="/admin/">Admin Panel</NavbarBrand>
			<Nav className="ml-auto" navbar>
				<NavItem>
					<NavLink href="/admin/products">Ürünler</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/admin/categories">Kategoriler</NavLink>
				</NavItem>
			</Nav>
		</Navbar>
	);
};

export default AdminNavbar;
