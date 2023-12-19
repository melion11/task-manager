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
        const result = await queryFulfilled;

        dispatch(
          todosApi.util.updateQueryData("getTodos", undefined, (draft) => {
            draft.unshift(result.data);
          }),
        );
      },
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
