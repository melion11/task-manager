import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import s from "./LoginForm.module.scss";

import { ControlledCheckbox } from "@/shared/controlled/ControlledCheckbox/ControlledCheckbox.tsx";
import { Button, TextField } from "@/shared/ui";
import { Card } from "@/shared/ui/Card";
import { Typography } from "@/shared/ui/Typography";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean(),
});

export type FormValues = z.infer<typeof loginSchema>;

type LoginFormProps = {
  onSubmit: (data: FormValues) => void;
  isLoading?: boolean;
};

export const LoginForm = ({ onSubmit, isLoading }: LoginFormProps) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmitHandler = (data: FormValues) => {
    onSubmit(data);
  };

  return (
    <>
      <DevTool control={control} />

      <div className={s.LoginForm}>
        <Card className={s.loginWrapper}>
          <form
            className={s.LoginForm}
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <Typography variant={"h1"} as={"h1"} className={s.loginTitle}>
              Sign in
            </Typography>
            <TextField
              {...register("email")}
              errorMessage={errors.email?.message}
              label={"Email"}
            />
            <TextField
              {...register("password")}
              errorMessage={errors.password?.message}
              label={"Password"}
              type={"password"}
            />
            <ControlledCheckbox control={control} name={"rememberMe"} />
            <Button disabled={isLoading}>Sign In</Button>
          </form>
        </Card>
      </div>
    </>
  );
};
