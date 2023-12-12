import { useEffect } from "react";

import { useDispatch } from "react-redux";

import {
  useCreateTaskMutation,
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useGetTasksQuery,
  useGetTodosQuery,
  useUpdateTodoMutation,
} from "@/features/todos/api";
import { setTodos } from "@/features/todos/slice/todoSlice.ts";
import { AddFormValues } from "@/widgets/AddForm";

export const useTodos = (id: string = "") => {
  const { data: tasks } = useGetTasksQuery({ id });
  const [deleteTodo, {}] = useDeleteTodoMutation();
  const [updateTodo, {}] = useUpdateTodoMutation();
  const [createTask, {}] = useCreateTaskMutation();

  const { data: todos, isLoading } = useGetTodosQuery();
  const [createTodo, {}] = useCreateTodoMutation();

  const onCreateTodoHandler = (data: AddFormValues) => {
    createTodo(data);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTodos(todos));
  }, [todos]);

  const deleteTodoHandler = () => {
    deleteTodo({ id });
  };

  const updateTodoHandler = (title: string) => {
    updateTodo({ id, title });
  };

  const createTaskHandler = (data: AddFormValues) => {
    createTask({ id, data });
  };

  return {
    deleteTodoHandler,
    updateTodoHandler,
    createTaskHandler,
    data: tasks?.items,
    todos,
    isLoading,
    onCreateTodoHandler,
  };
};
