import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import categoryReducer from "./features/categorySlice";
import orderReducer from "./features/orderSlice";
import orderItemReducer from "./features/orderItemSlice";
import adminReducer from "./features/adminSlice";
import authReducer from "./features/authSlice";

const store = configureStore({
	reducer: {
		product: productReducer,
    category: categoryReducer,
	order: orderReducer,
	orderItem: orderItemReducer,
	admin: adminReducer,
	auth: authReducer,
	},
});

export default store;
