import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart-slices";
import dammyReducer from "./slices/dummy-slices";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    dummy: dammyReducer,
  },
});

export default store;
