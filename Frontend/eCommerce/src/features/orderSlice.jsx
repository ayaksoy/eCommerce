import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	orders: [],
	status: "idle",
	error: null,
};

// Siparişleri getirme
export const fetchOrders = createAsyncThunk("order/fetchOrders", async () => {
	const response = await axios.get("http://localhost:5047/api/Order");
	console.log("Slice: Gelen veriler:", response.data); // Verinin doğru geldiğini kontrol edin
	return response.data.$values || response.data; // Yanıt yapısını kontrol edin
});

// Sipariş oluşturma
export const createOrder = createAsyncThunk(
	"order/createOrder",
	async (newOrder) => {
		const response = await axios.post(
			"http://localhost:5047/api/Order",
			newOrder
		);
		return response.data;
	}
);

// Sipariş güncelleme
export const updateOrder = createAsyncThunk(
	"order/updateOrder",
	async ({ id, ...updatedOrder }) => {
		const response = await axios.put(
			`http://localhost:5047/api/Order/${id}`,
			updatedOrder
		);
		return response.data;
	}
);

// Sipariş silme
export const deleteOrder = createAsyncThunk("order/deleteOrder", async (id) => {
	await axios.delete(`http://localhost:5047/api/Order/${id}`);
	return id;
});

const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchOrders.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchOrders.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.orders = action.payload;
			})
			.addCase(fetchOrders.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(createOrder.pending, (state) => {
				state.status = "loading";
			})
			.addCase(createOrder.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.orders.push(action.payload);
			})
			.addCase(createOrder.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(updateOrder.pending, (state) => {
				state.status = "loading";
			})
			.addCase(updateOrder.fulfilled, (state, action) => {
				state.status = "succeeded";
				const index = state.orders.findIndex(
					(order) => order.id === action.payload.id
				);
				if (index !== -1) {
					state.orders[index] = action.payload;
				}
			})
			.addCase(updateOrder.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(deleteOrder.pending, (state) => {
				state.status = "loading";
			})
			.addCase(deleteOrder.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.orders = state.orders.filter(
					(order) => order.id !== action.payload
				);
			})
			.addCase(deleteOrder.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export default orderSlice.reducer;
