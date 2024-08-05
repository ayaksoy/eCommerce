import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	orderItems: [],
	status: "idle",
	error: null,
};

// OrderItem'ları getirme
export const fetchOrderItems = createAsyncThunk(
	"orderItem/fetchOrderItems",
	async () => {
		const response = await axios.get("http://localhost:5047/api/OrderItem");
		return response.data.$values || response.data;
	}
);

// OrderItem oluşturma
export const createOrderItem = createAsyncThunk(
	"orderItem/createOrderItem",
	async (newOrderItem) => {
		const response = await axios.post(
			"http://localhost:5047/api/OrderItem",
			newOrderItem
		);
		return response.data;
	}
);

// OrderItem güncelleme
export const updateOrderItem = createAsyncThunk(
	"orderItem/updateOrderItem",
	async ({ id, ...updatedOrderItem }) => {
		const response = await axios.put(
			`http://localhost:5047/api/OrderItem/${id}`,
			updatedOrderItem
		);
		return response.data;
	}
);

// OrderItem silme
export const deleteOrderItem = createAsyncThunk(
	"orderItem/deleteOrderItem",
	async (id) => {
		await axios.delete(`http://localhost:5047/api/OrderItem/${id}`);
		return id;
	}
);

const orderItemSlice = createSlice({
	name: "orderItem",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchOrderItems.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchOrderItems.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.orderItems = action.payload;
			})
			.addCase(fetchOrderItems.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(createOrderItem.pending, (state) => {
				state.status = "loading";
			})
			.addCase(createOrderItem.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.orderItems.push(action.payload);
			})
			.addCase(createOrderItem.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(updateOrderItem.pending, (state) => {
				state.status = "loading";
			})
			.addCase(updateOrderItem.fulfilled, (state, action) => {
				state.status = "succeeded";
				const index = state.orderItems.findIndex(
					(orderItem) => orderItem.id === action.payload.id
				);
				if (index !== -1) {
					state.orderItems[index] = action.payload;
				}
			})
			.addCase(updateOrderItem.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(deleteOrderItem.pending, (state) => {
				state.status = "loading";
			})
			.addCase(deleteOrderItem.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.orderItems = state.orderItems.filter(
					(orderItem) => orderItem.id !== action.payload
				);
			})
			.addCase(deleteOrderItem.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export default orderItemSlice.reducer;
