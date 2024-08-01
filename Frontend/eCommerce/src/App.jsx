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
							<Route path="/products" element={<ProductList />} />
							<Route path="/categories" element={<CategoryList />} />
							<Route path="/add-product" element={<AddProduct />} />
							<Route path="/add-category" element={<AddCategory />} />
							<Route path="/edit-product/:id" element={<ProductEdit />} />
							<Route path="/edit-category/:id" element={<CategoryEdit />} />
							<Route
								path="/products/category/:id"
								element={<ProductListByCategory />}
							/>
							<Route path="/orders" element={<OrderList />} />
							<Route path="/edit-order/:id" element={<OrderEdit />} />
						</Routes>
					</div>
				</div>
			</div>
		</Router>
	);
};

export default App;
