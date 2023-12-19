import s from "./Task.module.scss";

import { TaskStatuses } from "@/features/tasks/api/tasksApi.types.ts";
import { useTasks } from "@/features/tasks/hooks/useTasks.ts";
import { Trash } from "@/shared/assets";
import { CustomCheckbox } from "@/shared/ui/Checkbox";
import { EditableSpan } from "@/widgets/EditableSpan";

export type TaskProps = {
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
  const { updateTaskTitleHandler, deleteTaskHandler, updateTaskStatus } =
    useTasks({
      todoListId,
      id,
      status,
      deadline,
      description,
      priority,
      startDate,
      title,
    });

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
