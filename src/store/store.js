import { configureStore } from "@reduxjs/toolkit";
import { photosSlice } from "./slices/photos/photosSlice";

export const store = configureStore({
    reducer: {
        photos: photosSlice.reducer,
    }
})