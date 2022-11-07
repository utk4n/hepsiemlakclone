import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

export const getPropertyDatas = createAsyncThunk(
  "property/getPropertyDatas",
  async () => {
    try {
      const response = await axios.get("/properties");
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const propertySlice = createSlice({
  name: "property",
  initialState: {
    list: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPropertyDatas.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(getPropertyDatas.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(getPropertyDatas.rejected, (state, action) => {
        console.log(action.payload.message);
      });
  },
});

export default propertySlice.reducer;
