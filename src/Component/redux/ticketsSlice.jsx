import { createSlice } from "@reduxjs/toolkit";

// داده اولیه بلیط‌ها
const initialState = {
  tickets: [],
  loading: false,
  error: null,
};

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    // افزودن بلیط جدید
    addTicket(state, action) {
      state.tickets.push(action.payload);
    },
    // حذف بلیط
    removeTicket(state, action) {
      state.tickets = state.tickets.filter(ticket => ticket.id !== action.payload);
    },
    // به‌روزرسانی بلیط
    updateTicket(state, action) {
      const index = state.tickets.findIndex(ticket => ticket.id === action.payload.id);
      if (index !== -1) {
        state.tickets[index] = action.payload;
      }
    },
    // شروع لودینگ
    setLoading(state) {
      state.loading = true;
    },
    // تنظیم خطا
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    // دریافت بلیط‌ها از API
    setTickets(state, action) {
      state.tickets = action.payload;
      state.loading = false;
    },
  },
});

export const { addTicket, removeTicket, updateTicket, setLoading, setError, setTickets } = ticketsSlice.actions;
export default ticketsSlice.reducer;
