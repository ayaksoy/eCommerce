import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API URL
const API_URL = "http://localhost:5047/api/Admin";

// Async thunk for fetching all admins
// Async thunk for fetching all admins
export const fetchAdmins = createAsyncThunk("admins/fetchAdmins", async () => {
	try {
		const response = await axios.get(API_URL);
		console.log("API Response:", response.data); // Yanıtı kontrol edin
		return response.data;
	} catch (error) {
		console.error("API Error:", error);
		throw error;
	}
});

// Async thunk for fetching a single admin by ID
export const fetchAdminById = createAsyncThunk(
	"admins/fetchAdminById",
	async (id) => {
		const response = await axios.get(`${API_URL}/${id}`);
		return response.data;
	}
);

// Async thunk for creating a new admin
export const createAdmin = createAsyncThunk(
	"admins/createAdmin",
	async (admin) => {
		const response = await axios.post(API_URL, admin);
		return response.data;
	}
);

// Async thunk for updating an admin
export const updateAdmin = createAsyncThunk(
	"admins/updateAdmin",
	async ({ id, admin }) => {
		const response = await axios.put(`${API_URL}/${id}`, admin);
		return response.data;
	}
);

// Async thunk for deleting an admin
export const deleteAdmin = createAsyncThunk(
	"admins/deleteAdmin",
	async (id) => {
		await axios.delete(`${API_URL}/${id}`);
		return id;
	}
);

// Admin slice
const adminSlice = createSlice({
	name: "admins",
	initialState: {
		admins: [],
		loading: false,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			// Fetch all admins
			.addCase(fetchAdmins.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchAdmins.fulfilled, (state, action) => {
				state.loading = false;
				state.admins = action.payload; // Payload ile admins verilerini güncelleyin
				console.log("Admins:", state.admins); // Admins verilerini kontrol edin
			})
			.addCase(fetchAdmins.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			// Fetch admin by ID
			.addCase(fetchAdminById.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchAdminById.fulfilled, (state, action) => {
				state.loading = false;
				const admin = action.payload;
				const index = state.admins.findIndex((a) => a.id === admin.id);
				if (index === -1) {
					state.admins.push(admin);
				} else {
					state.admins[index] = admin;
				}
			})
			.addCase(fetchAdminById.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			// Create admin
			.addCase(createAdmin.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(createAdmin.fulfilled, (state, action) => {
				state.loading = false;
				state.admins.push(action.payload);
			})
			.addCase(createAdmin.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			// Update admin
			.addCase(updateAdmin.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(updateAdmin.fulfilled, (state, action) => {
				state.loading = false;
				const updatedAdmin = action.payload;
				const index = state.admins.findIndex((a) => a.id === updatedAdmin.id);
				if (index !== -1) {
					state.admins[index] = updatedAdmin;
				}
			})
			.addCase(updateAdmin.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			// Delete admin
			.addCase(deleteAdmin.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(deleteAdmin.fulfilled, (state, action) => {
				state.loading = false;
				const id = action.payload;
				state.admins = state.admins.filter((admin) => admin.id !== id);
			})
			.addCase(deleteAdmin.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export default adminSlice.reducer;
