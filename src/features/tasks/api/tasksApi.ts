import { baseApi } from "@/app/api";
import {
  ResponseTasks,
  UpdateTaskModelType,
} from "@/features/tasks/api/tasksApi.types.ts";
import { AddFormValues } from "@/widgets/AddForm";

export const tasksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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
  useGetTasksQuery,
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} = tasksApi;
