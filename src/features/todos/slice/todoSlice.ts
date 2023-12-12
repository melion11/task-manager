import { createSlice } from "@reduxjs/toolkit";

import { ResponseTodo } from "@/features/todos/api/todosApi.types.ts";

type InitialStateType = {
  todos: ResponseTodo[];
};

const initialState: InitialStateType = {
  todos: [],
};

const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { setTodos } = slice.actions;
export const todoSlice = slice.reducer;
