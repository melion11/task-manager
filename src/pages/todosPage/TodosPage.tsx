import { AnimatePresence, motion } from "framer-motion";

import s from "./TodosPage.module.scss";

import { useTodos } from "@/features/todos/hooks";
import { Todo } from "@/features/todos/ui";
import { PageLoader } from "@/widgets";
import { AddForm } from "@/widgets/AddForm";

export const TodosPage = () => {
  const { todos, isLoadingTodos, onCreateTodoHandler, isCreatedTodo } =
    useTodos();

  const todosElements = todos?.map((t) => {
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

  if (isLoadingTodos) return <PageLoader height />;

  return (
    <>
      <section className={s.TodosPage}>
        {isCreatedTodo && <PageLoader linear />}
        <div className={"container"}>
          <AddForm
            onSubmit={onCreateTodoHandler}
            placeholder={"Add New Todo"}
          />
          <ul className={s.todosList}>
            <AnimatePresence>{todosElements}</AnimatePresence>
          </ul>
        </div>
      </section>
    </>
  );
};
