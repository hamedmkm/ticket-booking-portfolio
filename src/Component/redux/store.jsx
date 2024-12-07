import { configureStore } from "@reduxjs/toolkit";
import ticketsSlice from "./ticketsSlice";

const store = configureStore({
  reducer: {
    tickets: ticketsSlice,
  },
});

export default store;
