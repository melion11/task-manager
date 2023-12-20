import { toast } from "react-toastify";

import { baseApi } from "@/app/api";
import { ResponseTodo } from "@/features/todos/api/todosApi.types.ts";
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
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const result = await queryFulfilled;

          dispatch(
            todosApi.util.updateQueryData("getTodos", undefined, (draft) => {
              draft.unshift(result.data);
            }),
          );
        } catch (e: unknown) {
          const error: Error = e as Error;

          toast.error(error.message);
        }
      },
      invalidatesTags: ["Todos"],
    }),
    deleteTodo: builder.mutation<void, { id: string }>({
      query: ({ id }) => ({
        url: `todo-lists/${id}`,
        method: "DELETE",
      }),
      onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
        const patchResult = dispatch(
          todosApi.util.updateQueryData("getTodos", undefined, (draft) => {
            const findIndex = draft.findIndex((el) => el.id === id.id);

            draft.splice(findIndex, 1);
          }),
        );

        try {
          await queryFulfilled;
        } catch (e: unknown) {
          const error: Error = e as Error;

          patchResult.undo();
          toast.error(error.message);
        }
      },
      invalidatesTags: ["Todos"],
    }),
    updateTodo: builder.mutation<void, { id: string; title: string }>({
      query: ({ id, title }) => ({
        url: `todo-lists/${id}`,
        method: "PUT",
        body: { title },
      }),
      onQueryStarted: async ({ id, title }, { dispatch, queryFulfilled }) => {
        const patchResult = dispatch(
          todosApi.util.updateQueryData("getTodos", undefined, (draft) => {
            const findIndex = draft.findIndex((el) => el.id === id);

            draft[findIndex].title = title;
          }),
        );

        try {
          await queryFulfilled;
        } catch (e: unknown) {
          const error: Error = e as Error;

          patchResult.undo();
          toast.error(error.message);
        }
      },
      invalidatesTags: ["Todos"],
    }),
    reorderTodo: builder.mutation<
      void,
      { todolistId: string; putAfterItemId: string }
    >({
      query: ({ todolistId, putAfterItemId }) => ({
        url: `/todo-lists/${todolistId}/reorder`,
        method: "PUT",
        body: { putAfterItemId },
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useDeleteTodoMutation,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useReorderTodoMutation,
} = todosApi;
