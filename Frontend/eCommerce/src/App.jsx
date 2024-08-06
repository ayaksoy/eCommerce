import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminNavbar from "./components/AdminNavbar";
import Aside from "./components/AdminAside";
import ProductList from "./pages/ProductList";
import CategoryList from "./pages/CategoryList";
import AddProduct from "./pages/AddProduct";
import AddCategory from "./pages/AddCategory";
import ProductEdit from "./pages/ProductEdit";
import CategoryEdit from "./pages/CategoryEdit";
import ProductListByCategory from "./pages/ProductListByCategory";
import OrderList from "./pages/OrderList";
import OrderEdit from "./pages/OrderEdit";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";
import ListProduct from "./pages/ListProduct";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import OrderTracking from "./pages/OrderTracking";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/anasayfa" element={<Main />} />
				<Route path="/products" element={<ListProduct />} />
				<Route path="/products/:id" element={<ProductDetail />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/orderTracking" element={<OrderTracking />} />
				<Route path="/admin/" element={<Dashboard />} />
				<Route path="/admin/products" element={<ProductList />} />
				<Route path="/admin/categories" element={<CategoryList />} />
				<Route path="/admin/add-product" element={<AddProduct />} />
				<Route path="/admin/add-category" element={<AddCategory />} />
				<Route path="/admin/edit-product/:id" element={<ProductEdit />} />
				<Route path="/admin/edit-category/:id" element={<CategoryEdit />} />
				<Route
					path="/admin/products/category/:id"
					element={<ProductListByCategory />}
				/>
				<Route path="/admin/orders" element={<OrderList />} />
				<Route path="/admin/edit-order/:id" element={<OrderEdit />} />
			</Routes>
		</Router>
	);
};

export default App;
