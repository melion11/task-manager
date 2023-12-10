import { baseApi } from "@/app/api";
import {
  ResponseTasks,
  ResponseTodo,
  UpdateTaskModelType,
} from "@/features/todos/api/todosApi.types.ts";
import { AddFormValues } from "@/widgets/AddForm";

export const todosApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<ResponseTodo[], void>({
      query: () => "todo-lists",
      providesTags: ["Todos"],
    }),
    createTodo: builder.mutation<ResponseTodo, AddFormValues>({
      query: (body) => ({
        url: "todo-lists",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Todos"],
    }),
    deleteTodo: builder.mutation<void, { id: string }>({
      query: ({ id }) => ({
        url: `todo-lists/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
    updateTodo: builder.mutation<void, { id: string; title: string }>({
      query: ({ id, title }) => ({
        url: `todo-lists/${id}`,
        method: "PUT",
        body: { title },
      }),
      invalidatesTags: ["Todos"],
    }),
    getTasks: builder.query<ResponseTasks, { id: string }>({
      query: ({ id }) => `todo-lists/${id}/tasks`,
      providesTags: ["Tasks"],
    }),
    createTask: builder.mutation<void, { id: string; data: AddFormValues }>({
      query: ({ id, data }) => ({
        url: `todo-lists/${id}/tasks`,
        method: `POST`,
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),
    deleteTask: builder.mutation<void, { todoListId: string; taskId: string }>({
      query: ({ todoListId, taskId }) => ({
        url: `todo-lists/${todoListId}/tasks/${taskId}`,
        method: `DELETE`,
      }),
      invalidatesTags: ["Tasks"],
    }),
    updateTask: builder.mutation<
      void,
      { todoListId: string; taskId: string; item: UpdateTaskModelType }
    >({
      query: ({ todoListId, taskId, item }) => ({
        url: `todo-lists/${todoListId}/tasks/${taskId}`,
        method: "PUT",
        body: { ...item },
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetTasksQuery,
  useDeleteTodoMutation,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} = todosApi;
