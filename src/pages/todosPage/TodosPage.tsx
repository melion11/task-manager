import s from "./TodosPage.module.scss";

import { useGetTodosQuery } from "@/features/todos/api";
import { Todo } from "@/features/todos/ui";
import { PageLoader } from "@/widgets";
import { AddForm } from "@/widgets/AddForm";

export const TodosPage = () => {
  const { data, isLoading } = useGetTodosQuery();

  const todosElements = data?.map((t) => {
    return <Todo key={t.id} id={t.id} title={t.title} />;
  });

  if (isLoading) return <PageLoader />;

  return (
    <section className={s.TodosPage}>
      <div className={"container"}>
        <AddForm label={"Add Todo Form"} />
        <ul className={s.todosList}>{todosElements}</ul>
      </div>
    </section>
  );
};
