import { AnimatePresence, motion } from "framer-motion";

import s from "./Tasks.module.scss";

import { TaskType } from "@/features/tasks/api/tasksApi.types.ts";
import { Task } from "@/features/tasks/ui/Task";

type TasksProps = {
  tasks?: TaskType[];
};
export const Tasks = ({ tasks }: TasksProps) => {
  const tasksElements = tasks?.map((t) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        layout
        key={t.id}
      >
        <Task
          key={t.id}
          title={t.title}
          id={t.id}
          status={t.status}
          todoListId={t.todoListId}
          deadline={t.deadline}
          description={t.description}
          priority={t.priority}
          startDate={t.startDate}
        />
      </motion.div>
    );
  });

  return (
    <ul className={s.tasksList}>
      <AnimatePresence>{tasksElements}</AnimatePresence>
    </ul>
  );
};
