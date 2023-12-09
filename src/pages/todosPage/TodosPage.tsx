import Delete from "../../shared/assets/icons/delete.tsx";

import s from "./TodosPage.module.scss";

import { Trash } from "@/shared/assets";
import { Button } from "@/shared/ui";
import { Card } from "@/shared/ui/Card";
import { CustomCheckbox } from "@/shared/ui/Checkbox";
import { Typography } from "@/shared/ui/Typography";
import { AddForm } from "@/widgets/AddForm";

export const TodosPage = () => {
  return (
    <section className={s.TodosPage}>
      <div className={"container"}>
        <div className={s.flexWrapper}>
          <AddForm label={"Add Todo Form"} />
          <div className={s.todosContainer}>
            <Card className={s.todoWrap}>
              <button className={s.deleteTodo}>
                <Delete />
              </button>
              <Typography as={"h3"} variant={"h3"}>
                Todos Title
              </Typography>
              <AddForm />
              <ul className={s.tasksList}>
                <li className={s.task}>
                  <div className={s.checkWrap}>
                    <CustomCheckbox />
                    <Typography variant={"subtitle1"}>Task 1</Typography>
                  </div>
                  <button className={s.deleteTask}>
                    <Trash />
                  </button>
                </li>
                <li className={s.task}>
                  <div className={s.checkWrap}>
                    <CustomCheckbox />
                    <Typography variant={"subtitle1"}>Task 2</Typography>
                  </div>
                  <button className={s.deleteTask}>
                    <Trash />
                  </button>
                </li>
                <li className={s.task}>
                  <div className={s.checkWrap}>
                    <CustomCheckbox />
                    <Typography variant={"subtitle1"}>Task 3</Typography>
                  </div>
                  <button className={s.deleteTask}>
                    <Trash />
                  </button>
                </li>
              </ul>
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
          </div>
        </div>
      </div>
    </section>
  );
};
