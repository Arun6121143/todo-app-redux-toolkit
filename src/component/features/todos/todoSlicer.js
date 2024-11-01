import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const todoSlicer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },

    editTodo: (state, action) => {
      const { index, editValue } = action.payload;
      return state.map((item, i) => (i === index ? editValue : item));
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlicer.actions;
export default todoSlicer.reducer;
