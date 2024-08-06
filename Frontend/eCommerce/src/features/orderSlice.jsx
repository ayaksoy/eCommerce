import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	orders: [],
	status: "idle",
	error: null,
	orderDetails: null, // Sipariş detaylarını saklamak için
};

// Siparişleri getirme
export const fetchOrders = createAsyncThunk("order/fetchOrders", async () => {
	try {
		const response = await axios.get("http://localhost:5047/api/Order");
		return response.data.$values || response.data;
	} catch (error) {
		throw new Error(error.message || "Siparişleri getirirken bir hata oluştu.");
	}
});

// Sipariş detaylarını getirme
export const fetchOrderById = createAsyncThunk(
	"order/fetchOrderById",
	async (id) => {
		try {
			const response = await axios.get(`http://localhost:5047/api/Order/${id}`);
			return response.data;
		} catch (error) {
			throw new Error(
				error.message || "Sipariş detaylarını getirirken bir hata oluştu."
			);
		}
	}
);

// Sipariş oluşturma
export const createOrder = createAsyncThunk(
	"order/createOrder",
	async (newOrder) => {
		try {
			const response = await axios.post(
				"http://localhost:5047/api/Order",
				newOrder
			);
			return response.data;
		} catch (error) {
			throw new Error(error.message || "Sipariş oluştururken bir hata oluştu.");
		}
	}
);

// Sipariş güncelleme
export const updateOrder = createAsyncThunk(
	"order/updateOrder",
	async ({ id, ...updatedOrder }) => {
		try {
			const response = await axios.put(
				`http://localhost:5047/api/Order/${id}`,
				updatedOrder
			);
			return response.data;
		} catch (error) {
			throw new Error(
				error.message || "Sipariş güncellenirken bir hata oluştu."
			);
		}
	}
);

// Sipariş silme
export const deleteOrder = createAsyncThunk("order/deleteOrder", async (id) => {
	try {
		await axios.delete(`http://localhost:5047/api/Order/${id}`);
		return id;
	} catch (error) {
		throw new Error(error.message || "Sipariş silinirken bir hata oluştu.");
	}
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
			.addCase(fetchOrderById.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchOrderById.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.orderDetails = action.payload;
			})
			.addCase(fetchOrderById.rejected, (state, action) => {
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
