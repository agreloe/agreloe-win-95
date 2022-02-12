import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemReducer";

const store = configureStore({
    reducer: {
        item: itemReducer,
    },
});

export default store;