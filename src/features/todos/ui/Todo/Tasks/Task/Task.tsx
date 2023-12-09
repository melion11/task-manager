import s from "./Task.module.scss";

import { Trash } from "@/shared/assets";
import { CustomCheckbox } from "@/shared/ui/Checkbox";
import { EditableSpan } from "@/widgets/EditableSpan";

type TaskProps = {
  description?: string;
  title: string;
  completed?: boolean;
  status: number;
  priority?: number;
  startDate?: string;
  deadline?: string;
  id: string;
  todoListId?: string;
  order?: number;
  addedDate?: string;
};

export const Task = ({ title }: TaskProps) => {
  return (
    <li className={s.task}>
      <div className={s.checkWrap}>
        <CustomCheckbox />
        <EditableSpan onChange={() => {}} title={title} />
      </div>
      <button className={s.deleteTask}>
        <Trash />
      </button>
    </li>
  );
};
