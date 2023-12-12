import s from "./Task.module.scss";

import {
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "@/features/todos/api";
import { TaskStatuses } from "@/features/todos/api/todosApi.types.ts";
import { Trash } from "@/shared/assets";
import { CustomCheckbox } from "@/shared/ui/Checkbox";
import { EditableSpan } from "@/widgets/EditableSpan";

type TaskProps = {
  description: string;
  title: string;
  completed?: boolean;
  status: number;
  priority: number;
  startDate: string;
  deadline: string;
  id: string;
  todoListId: string;
  order?: number;
  addedDate?: string;
};

export const Task = ({
  title,
  todoListId,
  id,
  status,
  deadline,
  description,
  priority,
  startDate,
}: TaskProps) => {
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

  return (
    <li className={s.task} draggable>
      <div className={s.checkWrap}>
        <CustomCheckbox
          onCheckedChange={updateTaskStatus}
          checked={status === TaskStatuses.Completed}
        />
        <EditableSpan
          onChange={updateTaskTitleHandler}
          title={title}
          status={status === TaskStatuses.Completed}
        />
      </div>
      <button onClick={deleteTaskHandler} className={s.deleteTask}>
        <Trash />
      </button>
    </li>
  );
};
