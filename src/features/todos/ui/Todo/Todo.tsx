import s from "./Todo.module.scss";

import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "@/features/todos/api";
import { Tasks } from "@/features/todos/ui/Todo/Tasks/Tasks.tsx";
import Delete from "@/shared/assets/icons/delete.tsx";
import { Button } from "@/shared/ui";
import { Card } from "@/shared/ui/Card";
import { AddForm } from "@/widgets/AddForm";
import { EditableSpan } from "@/widgets/EditableSpan";

type TodoProps = {
  id: string;
  title: string;
  addedDate?: string;
  order?: number;
};

export const Todo = ({ id, title }: TodoProps) => {
  const [deleteTodo, {}] = useDeleteTodoMutation();
  const [updateTodo, {}] = useUpdateTodoMutation();
  const deleteTodoHandler = () => {
    deleteTodo({ id });
  };

  const updateTodoHandler = (title: string) => {
    updateTodo({ id, title });
  };

  return (
    <Card className={s.todoWrap}>
      <button onClick={deleteTodoHandler} className={s.deleteTodo}>
        <Delete />
      </button>
      <EditableSpan onChange={updateTodoHandler} title={title} />
      <AddForm onSubmit={() => {}} placeholder={"Add New Task"} />
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
