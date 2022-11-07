import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";
export const getCities = createAsyncThunk("city/getCities", async () => {
  try {
    const response = await axios.get("/cities");
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
});

const citySlice = createSlice({
  name: "city",
  initialState: {
    list: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCities.pending, (state,action) => {
        console.log("pending cities");
      })
      .addCase(getCities.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(getCities.rejected, (state, action) => {
        console.log("reject", action.payload.message);
      });
  },
});

export default citySlice.reducer;
