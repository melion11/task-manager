import { DragEvent, useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { useCreateTaskMutation } from "@/features/tasks/api";
import {
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useGetTodosQuery,
  useReorderTodoMutation,
  useUpdateTodoMutation,
} from "@/features/todos/api";
import { setTodos } from "@/features/todos/slice/todoSlice.ts";
import { AddFormValues } from "@/widgets/AddForm";

export const useTodos = (id: string = "") => {
  const [deleteTodo, {}] = useDeleteTodoMutation();
  const [updateTodo, {}] = useUpdateTodoMutation();
  const [createTask, {}] = useCreateTaskMutation();

  const { currentData: todos, isLoading: isLoadingTodos } = useGetTodosQuery();
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

  // drag and drop todos
  const [reorderTodo, {}] = useReorderTodoMutation();
  const [currentTodo, setCurrentTodo] = useState<string>("");

  const onDragStartHandler = () => {
    setCurrentTodo(id);
  };
  const onDragEndHandler = (e: DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    target.style.opacity = "1";
  };

  const onDragOverHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const target = e.target as HTMLDivElement;

    target.style.opacity = "0.8";
  };

  const onDropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const target = e.target as HTMLDivElement;

    target.style.opacity = "1";

    reorderTodo({ todolistId: id, putAfterItemId: currentTodo });
  };

  return {
    deleteTodoHandler,
    updateTodoHandler,
    createTaskHandler,
    todos,
    isLoadingTodos,
    onCreateTodoHandler,
    onDragStartHandler,
    onDragEndHandler,
    onDragOverHandler,
    onDropHandler,
  };
};
