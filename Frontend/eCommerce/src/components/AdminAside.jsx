import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const Aside = () => {
	return (
		<div className="aside">
			<Nav vertical>
				<NavItem>
					<NavLink href="/admin/">Dashboard</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/admin/products">Product</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/admin/categories">Category</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/admin/orders">Orders</NavLink>
				</NavItem>
			</Nav>
		</div>
	);
};

export default Aside;
