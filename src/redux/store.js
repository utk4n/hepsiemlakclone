import { configureStore } from "@reduxjs/toolkit";
import propertySlice from "./propertySlice";
import citySlice from "./citySlice";
export const store = configureStore({
  reducer: {
    property: propertySlice,
    city: citySlice,
  },
});
