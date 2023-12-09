import { baseApi } from "@/app/api";
import {
  ResponseTasks,
  ResponseTodo,
} from "@/features/todos/api/todosApi.types.ts";

export const todosApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<ResponseTodo[], void>({
      query: () => "todo-lists",
      providesTags: ["Todos"],
    }),
    getTasks: builder.query<ResponseTasks, { id: string }>({
      query: ({ id }) => `todo-lists/${id}/tasks`,
      providesTags: ["Tasks"],
    }),
  }),
});

export const { useGetTodosQuery, useGetTasksQuery } = todosApi;
