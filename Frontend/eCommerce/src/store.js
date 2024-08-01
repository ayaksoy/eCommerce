import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import categoryReducer from "./features/categorySlice";
import orderReducer from "./features/orderSlice";

const store = configureStore({
	reducer: {
		product: productReducer,
    category: categoryReducer,
	order: orderReducer,
	},
});

export default store;
