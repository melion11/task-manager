import s from "./AddForm.module.scss";

import { Add } from "@/shared/assets";
import { Button, TextField } from "@/shared/ui";

type AddFormProps = {
  label?: string;
};

export const AddForm = ({ label }: AddFormProps) => {
  return (
    <div className={s.addForm}>
      <TextField label={label} className={s.textField} />
      <Button variant={"clear"} className={s.addBtn}>
        <Add />
      </Button>
    </div>
  );
};
