import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const Aside = () => {
	return (
		<div className="aside">
			<Nav vertical>
				<NavItem>
					<NavLink href="/">Overview</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/products">Product</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/categories">Category</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/orders">Orders</NavLink>
				</NavItem>
			</Nav>
		</div>
	);
};

export default Aside;
