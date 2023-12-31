import s from "./Todo.module.scss";

import { useGetTasksQuery } from "@/features/tasks/api";
import { useFilterTasks } from "@/features/tasks/hooks/useFilterTasks.ts";
import { FilteredButtons } from "@/features/tasks/ui/FilteredButtons/FilteredButtons.tsx";
import { Tasks } from "@/features/tasks/ui/Tasks.tsx";
import { useTodos } from "@/features/todos/hooks/useTodos.ts";
import Delete from "@/shared/assets/icons/delete.tsx";
import { Card } from "@/shared/ui/Card";
import { Typography } from "@/shared/ui/Typography";
import { PageLoader } from "@/widgets";
import { AddForm } from "@/widgets/AddForm";
import { EditableSpan } from "@/widgets/EditableSpan";

type TodoProps = {
  id: string;
  title: string;
  addedDate?: string;
  order?: number;
  draggable?: boolean;
};

export const Todo = ({ id, title, draggable }: TodoProps) => {
  const { currentData: tasks, isLoading } = useGetTasksQuery({ id });

  const {
    createTaskHandler,
    deleteTodoHandler,
    updateTodoHandler,
    onDragStartHandler,
    onDragOverHandler,
    onDragEndHandler,
    onDropHandler,
  } = useTodos(id);

  const { filteredTasks, onChangeFilterHandler, filter } = useFilterTasks(
    tasks?.items,
  );

  let contentComponent;

  if (isLoading) {
    contentComponent = <PageLoader />;
  } else if (tasks?.totalCount) {
    contentComponent = <Tasks tasks={filteredTasks} />;
  } else {
    contentComponent = (
      <Typography variant="body1" className={s.tasksText}>
        You haven`t added any tasks :(
      </Typography>
    );
  }

  return (
    <Card
      className={s.todoWrap}
      draggable={draggable}
      onDragStart={onDragStartHandler}
      onDragOver={(e) => onDragOverHandler(e)}
      onDragEnd={(e) => onDragEndHandler(e)}
      onDragLeave={(e) => onDragEndHandler(e)}
      onDrop={(e) => onDropHandler(e)}
    >
      <button onClick={deleteTodoHandler} className={s.deleteTodo}>
        <Delete />
      </button>
      <div className={s.tasksWrap}>
        <EditableSpan onChange={updateTodoHandler} title={title} />
        <AddForm onSubmit={createTaskHandler} placeholder={"Add New Task"} />
        {contentComponent}
      </div>
      <FilteredButtons filter={filter} onChange={onChangeFilterHandler} />
    </Card>
  );
};
