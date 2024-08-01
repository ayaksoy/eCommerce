// src/features/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	products: [],
	status: "idle",
	error: null,
};

export const fetchProducts = createAsyncThunk(
	"product/fetchProducts",
	async () => {
		const response = await axios.get("http://localhost:5047/api/Product");
		return response.data.$values;
	}
);

export const fetchProductsByCategoryId = createAsyncThunk(
	"product/fetchProductsByCategoryId",
	async (categoryId) => {
		const response = await axios.get(
			`http://localhost:5047/api/Product/category/${categoryId}/products`
		);
		return response.data.$values;
	}
);

export const createProduct = createAsyncThunk(
	"product/createProduct",
	async (newProduct) => {
		const response = await axios.post(
			"http://localhost:5047/api/Product",
			newProduct
		);
		return response.data;
	}
);

export const updateProduct = createAsyncThunk(
	"product/updateProduct",
	async ({ id, ...updatedProduct }) => {
		const response = await axios.put(
			`http://localhost:5047/api/Product/${id}`,
			updatedProduct
		);
		return response.data;
	}
);

export const deleteProduct = createAsyncThunk(
	"product/deleteProduct",
	async (id) => {
		await axios.delete(`http://localhost:5047/api/Product/${id}`);
		return id;
	}
);

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.products = action.payload;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(fetchProductsByCategoryId.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchProductsByCategoryId.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.products = action.payload;
			})
			.addCase(fetchProductsByCategoryId.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(createProduct.pending, (state) => {
				state.status = "loading";
			})
			.addCase(createProduct.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.products.push(action.payload);
			})
			.addCase(createProduct.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(updateProduct.pending, (state) => {
				state.status = "loading";
			})
			.addCase(updateProduct.fulfilled, (state, action) => {
				state.status = "succeeded";
				const index = state.products.findIndex(
					(product) => product.id === action.payload.id
				);
				state.products[index] = action.payload;
			})
			.addCase(updateProduct.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(deleteProduct.pending, (state) => {
				state.status = "loading";
			})
			.addCase(deleteProduct.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.products = state.products.filter(
					(product) => product.id !== action.payload
				);
			})
			.addCase(deleteProduct.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export default productSlice.reducer;
