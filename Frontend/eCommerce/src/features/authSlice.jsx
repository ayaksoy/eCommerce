import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fakeLoginApi = async ({ username, password }) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (username === "admin" && password === "password") {
				resolve({ username, token: "fakeToken" });
			} else {
				reject(new Error("Kullanıcı adı veya şifre hatalı"));
			}
		}, 1000);
	});
};

// Async thunk for logging in
export const login = createAsyncThunk(
	"auth/login",
	async (credentials, { rejectWithValue }) => {
		try {
			const response = await fakeLoginApi(credentials);
			return response;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

// Auth slice
const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: null,
		token: null,
		loading: false,
		error: null,
	},
	reducers: {
		logout: (state) => {
			state.user = null;
			state.token = null;
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload.username;
				state.token = action.payload.token;
			})
			.addCase(login.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
