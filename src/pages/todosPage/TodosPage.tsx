import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import s from "./TodosPage.module.scss";

import { useCreateTodoMutation, useGetTodosQuery } from "@/features/todos/api";
import { Todo } from "@/features/todos/ui";
import { PageLoader } from "@/widgets";
import { AddForm, AddFormValues } from "@/widgets/AddForm";

export const TodosPage = () => {
  const { data, isLoading } = useGetTodosQuery();
  const [createTodo, {}] = useCreateTodoMutation();

  const onCreateTodoHandler = (data: AddFormValues) => {
    createTodo(data);
  };

  const todosElements = data?.map((t) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        layout
        key={t.id}
      >
        <Todo key={t.id} id={t.id} title={t.title} draggable />
      </motion.div>
    );
  });

  if (isLoading) return <PageLoader />;

  return (
    <section className={s.TodosPage}>
      <div className={"container"}>
        <AddForm onSubmit={onCreateTodoHandler} placeholder={"Add New Todo"} />
        <ul className={s.todosList}>
          <AnimatePresence>{todosElements}</AnimatePresence>
        </ul>
        <NavLink to={"/dragndrop"}>dragndrop</NavLink>
      </div>
    </section>
  );
};
