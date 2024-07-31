// src/features/categorySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	categories: [],
	currentCategory: null,
	status: "idle",
	error: null,
};

export const fetchCategories = createAsyncThunk(
	"category/fetchCategories",
	async () => {
		const response = await axios.get("http://localhost:5047/api/Category");
		return response.data.$values;
	}
);

export const fetchCategoryById = createAsyncThunk(
	"category/fetchCategoryById",
	async (id) => {
		const response = await axios.get(
			`http://localhost:5047/api/Category/${id}`
		);
		return response.data;
	}
);

export const createCategory = createAsyncThunk(
	"category/createCategory",
	async (newCategory) => {
		const response = await axios.post(
			"http://localhost:5047/api/Category",
			newCategory
		);
		return response.data;
	}
);

export const updateCategory = createAsyncThunk(
	"category/updateCategory",
	async ({ id, ...updatedCategory }) => {
		const response = await axios.put(
			`http://localhost:5047/api/Category/${id}`,
			updatedCategory
		);
		return response.data;
	}
);

export const deleteCategory = createAsyncThunk(
	"category/deleteCategory",
	async (id) => {
		await axios.delete(`http://localhost:5047/api/Category/${id}`);
		return id;
	}
);

const categorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCategories.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchCategories.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.categories = action.payload;
			})
			.addCase(fetchCategories.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(fetchCategoryById.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchCategoryById.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.currentCategory = action.payload;
			})
			.addCase(fetchCategoryById.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(createCategory.pending, (state) => {
				state.status = "loading";
			})
			.addCase(createCategory.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.categories.push(action.payload);
			})
			.addCase(createCategory.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(updateCategory.pending, (state) => {
				state.status = "loading";
			})
			.addCase(updateCategory.fulfilled, (state, action) => {
				state.status = "succeeded";
				const index = state.categories.findIndex(
					(category) => category.id === action.payload.id
				);
				state.categories[index] = action.payload;
				state.currentCategory = null; // After update, clear the current category
			})
			.addCase(updateCategory.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(deleteCategory.pending, (state) => {
				state.status = "loading";
			})
			.addCase(deleteCategory.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.categories = state.categories.filter(
					(category) => category.id !== action.payload
				);
			})
			.addCase(deleteCategory.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export default categorySlice.reducer;
