import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDonations = createAsyncThunk(
  'donations/fetchDonations',
  async () => {
    const response = await fetch('/api/auth/getdonations');
    if (!response.ok) {
      throw new Error('Failed to fetch donations');
    }
    const data = await response.json();
    return data;
  }
);

const initialState = {
  donations: [],
  loading: false,
  error: null,
};

const donationSlice = createSlice({
  name: 'donations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDonations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDonations.fulfilled, (state, action) => {
        state.loading = false;
        state.donations = action.payload;
      })
      .addCase(fetchDonations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default donationSlice.reducer;
