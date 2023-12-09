import { useForm } from "react-hook-form";

import s from "./AddForm.module.scss";

import { Add } from "@/shared/assets";
import { Button, TextField } from "@/shared/ui";

type AddFormProps = {
  label?: string;
  isLoading?: boolean;
  placeholder?: string;
  onSubmit: (data: AddFormValues) => void;
};

export type AddFormValues = {
  title: string;
};

export const AddForm = ({
  label,
  isLoading,
  placeholder,
  onSubmit,
}: AddFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddFormValues>({
    defaultValues: {
      title: "",
    },
  });

  const onSubmitHandler = (data: AddFormValues) => {
    onSubmit(data);
    reset();
  };

  return (
    <form className={s.addForm} onSubmit={handleSubmit(onSubmitHandler)}>
      <TextField
        {...register("title", {
          maxLength: {
            value: 100,
            message: "Title must be less than 100 characters",
          },
        })}
        errorMessage={errors.title?.message}
        placeholder={placeholder}
        label={label}
        className={s.textField}
      />
      <Button
        variant={"clear"}
        type={"submit"}
        className={s.addBtn}
        disabled={isLoading}
      >
        <Add />
      </Button>
    </form>
  );
};
