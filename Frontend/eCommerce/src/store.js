import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import categoryReducer from "./features/categorySlice";

const store = configureStore({
	reducer: {
		product: productReducer,
    category: categoryReducer,
	},
});

export default store;
