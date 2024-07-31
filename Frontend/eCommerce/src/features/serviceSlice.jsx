// src/features/service/serviceSlice.js
import { createSlice } from '@reduxjs/toolkit';

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    // Example reducer for adding a new service
    addService: (state, action) => {
      state.services.push(action.payload);
    },
    // Example reducer for removing a service by id
    removeService: (state, action) => {
      state.services = state.services.filter(service => service.id !== action.payload);
    },
  },
});

export const { addService, removeService } = serviceSlice.actions;

export default serviceSlice.reducer;