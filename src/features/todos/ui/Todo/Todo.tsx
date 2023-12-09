import s from "./Todo.module.scss";

import { Tasks } from "@/features/todos/ui/Todo/Tasks/Tasks.tsx";
import Delete from "@/shared/assets/icons/delete.tsx";
import { Button } from "@/shared/ui";
import { Card } from "@/shared/ui/Card";
import { Typography } from "@/shared/ui/Typography";
import { AddForm } from "@/widgets/AddForm";

type TodoProps = {
  id: string;
  title: string;
  addedDate?: string;
  order?: number;
};

export const Todo = ({ id, title }: TodoProps) => {
  return (
    <Card className={s.todoWrap}>
      <button className={s.deleteTodo}>
        <Delete />
      </button>
      <Typography as={"h3"} variant={"h3"}>
        {title}
      </Typography>
      <AddForm />
      <Tasks todoId={id} />
      <div className={s.filterButtons}>
        <Button variant={"tertiary"} className={s.filterBtn}>
          All
        </Button>
        <Button variant={"tertiary"} className={s.filterBtn}>
          Active
        </Button>
        <Button variant={"tertiary"} className={s.filterBtn}>
          Completed
        </Button>
      </div>
    </Card>
  );
};
