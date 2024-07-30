import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminNavbar from './components/Navbar';
import ProductList from './components/ProductList';
import CategoryList from './components/CategoryList';
import AddProduct from './components/AddProduct';
import AddCategory from './components/AddCategory';
import Aside from './components/Aside';

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
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
