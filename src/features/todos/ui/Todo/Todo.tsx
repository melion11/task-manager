import { clsx } from "clsx";

import s from "./Todo.module.scss";

import {
  useCreateTaskMutation,
  useDeleteTodoMutation,
  useGetTasksQuery,
  useUpdateTodoMutation,
} from "@/features/todos/api";
import { TaskStatuses } from "@/features/todos/api/todosApi.types.ts";
import { useFilterTasks } from "@/features/todos/hooks/useFilterTasks.ts";
import { Tasks } from "@/features/todos/ui/Todo/Tasks/Tasks.tsx";
import Delete from "@/shared/assets/icons/delete.tsx";
import { Button } from "@/shared/ui";
import { Card } from "@/shared/ui/Card";
import { AddForm, AddFormValues } from "@/widgets/AddForm";
import { EditableSpan } from "@/widgets/EditableSpan";

type TodoProps = {
  id: string;
  title: string;
  addedDate?: string;
  order?: number;
  draggable?: boolean;
};

export const Todo = ({ id, title, draggable }: TodoProps) => {
  const { data } = useGetTasksQuery({ id });
  const { filteredTasks, setFilter, filter } = useFilterTasks(data?.items);
  const [deleteTodo, {}] = useDeleteTodoMutation();
  const [updateTodo, {}] = useUpdateTodoMutation();
  const [createTask, {}] = useCreateTaskMutation();

  const deleteTodoHandler = () => {
    deleteTodo({ id });
  };

  const updateTodoHandler = (title: string) => {
    updateTodo({ id, title });
  };

  const createTaskHandler = (data: AddFormValues) => {
    createTask({ id, data });
  };

  const onChangeFilterHandler = (filter: TaskStatuses) => {
    setFilter(filter);
  };

  return (
    <Card className={s.todoWrap} draggable={draggable}>
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
