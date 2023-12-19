import { clsx } from "clsx";

import s from "./FilteredButtons.module.scss";

import { TaskStatuses } from "@/features/tasks/api/tasksApi.types.ts";
import { Button } from "@/shared/ui";

type FilteredButtonsProps = {
  filter: TaskStatuses;
  onChange: (value: TaskStatuses) => void;
};

export const FilteredButtons = ({ filter, onChange }: FilteredButtonsProps) => {
  return (
    <div className={s.filterButtons}>
      <Button
        variant={"tertiary"}
        className={clsx(
          s.filterBtn,
          filter === TaskStatuses.All && s.activeFilter,
        )}
        onClick={() => onChange(TaskStatuses.All)}
      >
        All
      </Button>
      <Button
        variant={"tertiary"}
        onClick={() => onChange(TaskStatuses.New)}
        className={clsx(
          s.filterBtn,
          filter === TaskStatuses.New && s.activeFilter,
        )}
      >
        Active
      </Button>
      <Button
        variant={"tertiary"}
        className={clsx(
          s.filterBtn,
          filter === TaskStatuses.Completed && s.activeFilter,
        )}
        onClick={() => onChange(TaskStatuses.Completed)}
      >
        Completed
      </Button>
    </div>
  );
};
