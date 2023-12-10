import { ChangeEvent, KeyboardEvent, useState } from "react";

import { clsx } from "clsx";

import s from "./EditableSpan.module.scss";

import { TextField } from "@/shared/ui";
import { Typography } from "@/shared/ui/Typography";

type EditableSpanProps = {
  title?: string;
  onChange: (newTitle: string) => void;
  status?: boolean;
};

export const EditableSpan = ({
  title,
  onChange,
  status,
}: EditableSpanProps) => {
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.currentTarget.value);
  };

  const onEditModeHandler = () => {
    setEditMode(true);
  };

  const onBlurHandler = () => {
    if (newTitle) {
      onChange(newTitle.trim());
      setEditMode(false);
    }
  };

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onBlurHandler();
    }
  };

  return (
    <div className={s.editableSpanWrapper}>
      {editMode ? (
        <TextField
          value={newTitle}
          onBlur={onBlurHandler}
          onChange={onChangeValueHandler}
          onKeyDown={onKeyDownHandler}
        />
      ) : (
        <Typography
          className={clsx(status && s.taskStatus)}
          onDoubleClick={onEditModeHandler}
          as={"h3"}
          variant={"h3"}
        >
          {title}
        </Typography>
      )}
    </div>
  );
};
