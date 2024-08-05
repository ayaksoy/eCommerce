import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import categoryReducer from "./features/categorySlice";
import orderReducer from "./features/orderSlice";
import orderItemReducer from "./features/orderItemSlice";

const store = configureStore({
	reducer: {
		product: productReducer,
    category: categoryReducer,
	order: orderReducer,
	orderItem: orderItemReducer,
	},
});

export default store;
