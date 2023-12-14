import { DragEvent, useState } from "react";

import { clsx } from "clsx";

import s from "./Todo.module.scss";

import { useGetTasksQuery, useReorderTodoMutation } from "@/features/todos/api";
import { TaskStatuses } from "@/features/todos/api/todosApi.types.ts";
import { useFilterTasks } from "@/features/todos/hooks/useFilterTasks.ts";
import { useTodos } from "@/features/todos/hooks/useTodos.ts";
import { Tasks } from "@/features/todos/ui/Todo/Tasks/Tasks.tsx";
import Delete from "@/shared/assets/icons/delete.tsx";
import { Button } from "@/shared/ui";
import { Card } from "@/shared/ui/Card";
import { AddForm } from "@/widgets/AddForm";
import { EditableSpan } from "@/widgets/EditableSpan";

type TodoProps = {
  id: string;
  title: string;
  addedDate?: string;
  order?: number;
  draggable?: boolean;
};

export const Todo = ({ id, title, draggable }: TodoProps) => {
  const { data: tasks } = useGetTasksQuery({ id });

  const { createTaskHandler, deleteTodoHandler, updateTodoHandler } =
    useTodos(id);

  const { filteredTasks, onChangeFilterHandler, filter } = useFilterTasks(
    tasks?.items,
  );

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

  return (
    <Card
      className={s.todoWrap}
      draggable={draggable}
      onDragStart={onDragStartHandler}
      onDragOver={(e) => onDragOverHandler(e)}
      onDragEnd={(e) => onDragEndHandler(e)}
      onDragLeave={(e) => onDragEndHandler(e)}
      onDrop={(e) => onDropHandler(e)}
    >
      <button onClick={deleteTodoHandler} className={s.deleteTodo}>
        <Delete />
      </button>
      <div className={s.tasksWrap}>
        <EditableSpan onChange={updateTodoHandler} title={title} />
        <AddForm onSubmit={createTaskHandler} placeholder={"Add New Task"} />
        <Tasks tasks={filteredTasks} />
      </div>
      <div className={s.filterButtons}>
        <Button
          variant={"tertiary"}
          className={clsx(
            s.filterBtn,
            filter === TaskStatuses.All && s.activeFilter,
          )}
          onClick={() => onChangeFilterHandler(TaskStatuses.All)}
        >
          All
        </Button>
        <Button
          variant={"tertiary"}
          onClick={() => onChangeFilterHandler(TaskStatuses.New)}
          className={clsx(
            s.filterBtn,
            filter === TaskStatuses.New && s.activeFilter,
          )}
        >
          Active
        </Button>
        <Button
          variant={"tertiary"}
          className={clsx(
            s.filterBtn,
            filter === TaskStatuses.Completed && s.activeFilter,
          )}
          onClick={() => onChangeFilterHandler(TaskStatuses.Completed)}
        >
          Completed
        </Button>
      </div>
    </Card>
  );
};
