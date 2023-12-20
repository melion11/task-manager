import { toast } from "react-toastify";

import { baseApi } from "@/app/api";
import {
  ResponseCreateTask,
  ResponseTasks,
  TaskType,
  UpdateTaskModelType,
} from "@/features/tasks/api/tasksApi.types.ts";
import { AddFormValues } from "@/widgets/AddForm";

export const tasksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query<ResponseTasks, { id: string }>({
      query: ({ id }) => `todo-lists/${id}/tasks`,
      providesTags: ["Tasks"],
    }),
    createTask: builder.mutation<
      ResponseCreateTask<TaskType>,
      { id: string; data: AddFormValues }
    >({
      query: ({ id, data }) => ({
        url: `todo-lists/${id}/tasks`,
        method: `POST`,
        body: data,
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          const result = await queryFulfilled;

          dispatch(
            tasksApi.util.updateQueryData("getTasks", { id }, (draft) => {
              draft.items.unshift(result.data.data);
            }),
          );
        } catch (e: unknown) {
          const error: Error = e as Error;

          toast.error(error.message);
        }
      },
      invalidatesTags: ["Tasks"],
    }),
    deleteTask: builder.mutation<void, { todoListId: string; taskId: string }>({
      query: ({ todoListId, taskId }) => ({
        url: `todo-lists/${todoListId}/tasks/${taskId}`,
        method: `DELETE`,
      }),
      onQueryStarted: async (
        { taskId, todoListId },
        { dispatch, queryFulfilled },
      ) => {
        const patchResult = dispatch(
          tasksApi.util.updateQueryData(
            "getTasks",
            { id: todoListId },
            (draft) => {
              const findIndex = draft.items.findIndex((el) => el.id === taskId);

              draft.items.splice(findIndex, 1);
            },
          ),
        );

        try {
          await queryFulfilled;
        } catch (e: unknown) {
          const error: Error = e as Error;

          toast.error(error.message);

          patchResult.undo();
        }
      },
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
      onQueryStarted: async (
        { taskId, todoListId, item },
        { dispatch, queryFulfilled },
      ) => {
        const patchResult = dispatch(
          tasksApi.util.updateQueryData(
            "getTasks",
            { id: todoListId },
            (draft) => {
              const findIndex = draft.items.findIndex((el) => el.id === taskId);

              draft.items[findIndex] = { ...draft.items[findIndex], ...item };
            },
          ),
        );

        try {
          await queryFulfilled;
        } catch (e: unknown) {
          const error: Error = e as Error;

          toast.error(error.message);

          patchResult.undo();
        }
      },
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
