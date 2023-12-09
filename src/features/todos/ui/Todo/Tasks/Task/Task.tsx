import s from "./Task.module.scss";

import { Trash } from "@/shared/assets";
import { CustomCheckbox } from "@/shared/ui/Checkbox";
import { Typography } from "@/shared/ui/Typography";

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
        <Typography variant={"subtitle1"}>{title}</Typography>
      </div>
      <button className={s.deleteTask}>
        <Trash />
      </button>
    </li>
  );
};
