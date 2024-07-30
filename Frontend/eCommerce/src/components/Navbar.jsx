import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const AdminNavbar = () => {
	return (
		<Navbar color="dark" dark expand="md">
			<NavbarBrand href="/">Admin Panel</NavbarBrand>
			<Nav className="ml-auto" navbar>
				<NavItem>
					<NavLink href="/products">Ürünler</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/categories">Kategoriler</NavLink>
				</NavItem>
			</Nav>
		</Navbar>
	);
};

export default AdminNavbar;
