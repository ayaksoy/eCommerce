import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminNavbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import CategoryList from "./pages/CategoryList";
import AddProduct from "./pages/AddProduct";
import AddCategory from "./pages/AddCategory";
import ProductEdit from "./pages/ProductEdit";
import CategoryEdit from "./pages/CategoryEdit";
import ProductListByCategory from "./pages/ProductListByCategory";
import OrderList from "./pages/OrderList";
import OrderEdit from "./pages/OrderEdit"; // Import OrderEdit
import Dashboard from "./pages/Dashboard";
import Aside from "./components/Aside";

const App = () => {
	return (
		<Router>
			<div>
				<AdminNavbar />
				<div className="d-flex">
					<Aside />
					<div className="main-content">
						<Routes>
							<Route path="/admin/" element={<Dashboard />} />
							<Route path="/admin/products" element={<ProductList />} />
							<Route path="/admin/categories" element={<CategoryList />} />
							<Route path="/admin/add-product" element={<AddProduct />} />
							<Route path="/admin/add-category" element={<AddCategory />} />
							<Route path="/admin/edit-product/:id" element={<ProductEdit />} />
							<Route
								path="/admin/edit-category/:id"
								element={<CategoryEdit />}
							/>
							<Route
								path="/admin/products/category/:id"
								element={<ProductListByCategory />}
							/>
							<Route path="/admin/orders" element={<OrderList />} />
							<Route path="/admin/edit-order/:id" element={<OrderEdit />} />
						</Routes>
					</div>
				</div>
			</div>
		</Router>
	);
};

export default App;
