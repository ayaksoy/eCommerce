import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const Aside = () => {
	return (
		<div
			style={{
				width: "200px", // Genişlik
				backgroundColor: "#343a40", // Arka plan rengi
				color: "white", // Yazı rengi
				padding: "20px", // İç boşluk
				display: "flex", // Flexbox kullanımı
				flexDirection: "column", // Dikey hizalama
				height: "100vh", // Tam yükseklik
				position: "fixed", // Sabit konumlandırma
				top: 0, // Üstten sıfır mesafe
				left: 0, // Soldan sıfır mesafe
				zIndex: 1000, // Üstte olması için z-index
				overflowY: "auto", // Dikey kaydırma
			}}
		>
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
