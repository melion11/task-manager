import s from "./Tasks.module.scss";

import { useGetTasksQuery } from "@/features/todos/api";
import { Task } from "@/features/todos/ui/Todo/Tasks/Task";

type TasksProps = {
  todoId: string;
};
export const Tasks = ({ todoId }: TasksProps) => {
  const { data } = useGetTasksQuery({ id: todoId });

  const tasksElements = data?.items.map((t) => {
    return <Task key={t.id} title={t.title} id={t.id} status={t.status} />;
  });

  return <ul className={s.tasksList}>{tasksElements}</ul>;
};
