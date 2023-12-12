import {
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "@/features/todos/api";
import { TaskStatuses } from "@/features/todos/api/todosApi.types.ts";
import { TaskProps } from "@/features/todos/ui/Todo/Tasks/Task";

type UseTasksProps = Omit<TaskProps, "addedDate" | "completed" | "order">;

export const useTasks = (props: UseTasksProps) => {
  const {
    description,
    priority,
    startDate,
    title,
    status,
    todoListId,
    deadline,
    id,
  } = props;
  const [deleteTask, {}] = useDeleteTaskMutation();
  const [updateTask, {}] = useUpdateTaskMutation();
  const deleteTaskHandler = () => {
    deleteTask({ todoListId, taskId: id });
  };

  const taskForUpdate = {
    status,
    todoListId,
    deadline,
    description,
    priority,
    startDate,
    title,
  };

  const updateTaskTitleHandler = (title: string) => {
    updateTask({ todoListId, taskId: id, item: { ...taskForUpdate, title } });
  };

  const updateTaskStatus = (status: boolean) => {
    updateTask({
      todoListId,
      taskId: id,
      item: {
        ...taskForUpdate,
        status: status ? TaskStatuses.Completed : TaskStatuses.New,
      },
    });
  };

  return { updateTaskStatus, updateTaskTitleHandler, deleteTaskHandler };
};
