import { configureStore } from "@reduxjs/toolkit";

import { baseApi } from "@/app/api";
import { todoSlice } from "@/features/todos/slice/todoSlice.ts";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    todoSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
