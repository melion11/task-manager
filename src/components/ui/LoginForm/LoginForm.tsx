import s from "./LoginForm.module.scss";
import { Card } from "@/shared/ui/Card";
import { Typography } from "@/shared/ui/Typography";
import { Button, TextField } from "@/shared/ui";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { z } from "zod";
import { ControlledCheckbox } from "@/shared/controlled/ControlledCheckbox/ControlledCheckbox.tsx";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean()
});

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {

  const {
    control,
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false
    },
    resolver: zodResolver(loginSchema)
  });

  const onSubmitHandler = (data: FormValues) => {
    console.log(data);
  };

  return (
    <>
      <DevTool control={control} />

      <div className={s.LoginForm}>
        <Card className={s.loginWrapper}>
          <form className={s.LoginForm} onSubmit={handleSubmit(onSubmitHandler)}>
            <Typography variant={"h1"} as={"h1"} className={s.loginTitle}>Sign in</Typography>
            <TextField {...register("email")}
                       errorMessage={errors.email?.message}
                       label={"Email"} />
            <TextField {...register("password")}
                       errorMessage={errors.password?.message}
                       label={"Password"}
                       type={"password"} />
            <ControlledCheckbox control={control} name={"rememberMe"} />
            <Button>Sign In</Button>
          </form>
        </Card>
      </div>
    </>
  );
};

