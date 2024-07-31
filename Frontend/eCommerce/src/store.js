import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";

const store = configureStore({
	reducer: {
		product: productReducer,
	},
});

export default store;
