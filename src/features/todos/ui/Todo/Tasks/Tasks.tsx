import s from "./Tasks.module.scss";

import { TaskType } from "@/features/todos/api/todosApi.types.ts";
import { Task } from "@/features/todos/ui/Todo/Tasks/Task";

type TasksProps = {
  tasks?: TaskType[];
};
export const Tasks = ({ tasks }: TasksProps) => {
  const tasksElements = tasks?.map((t) => {
    return (
      <Task
        key={t.id}
        title={t.title}
        id={t.id}
        status={t.status}
        todoListId={t.todoListId}
        deadline={t.deadline}
        description={t.description}
        priority={t.priority}
        startDate={t.startDate}
      />
    );
  });

  return <ul className={s.tasksList}>{tasksElements}</ul>;
};
