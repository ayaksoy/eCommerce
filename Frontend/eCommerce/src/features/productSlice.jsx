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
			});
	},
});

export default productSlice.reducer;
