import { useState } from "react";

import { TaskStatuses, TaskType } from "@/features/todos/api/todosApi.types.ts";

export const useFilterTasks = (data: TaskType[] | undefined) => {
  const [filter, setFilter] = useState<TaskStatuses>(TaskStatuses.All);
  const priorityFilter = (
    filter: TaskStatuses,
    tasks: TaskType[] | undefined,
  ) => {
    switch (filter) {
      case TaskStatuses.New: {
        return tasks?.filter((task) => task.status === TaskStatuses.New);
      }
      case TaskStatuses.Completed: {
        return tasks?.filter((task) => task.status === TaskStatuses.Completed);
      }
      default:
        return tasks;
    }
  };

  const filteredTasks = priorityFilter(filter, data);

  return { setFilter, filteredTasks, filter };
};
