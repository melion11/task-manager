import s from "./LoginForm.module.scss";
import { Card } from "@/shared/ui/Card";
import { Typography } from "@/shared/ui/Typography";
import { Button, TextField } from "@/shared/ui";
import { CustomCheckbox } from "@/shared/ui/Checkbox";


export const LoginForm = () => {
  return (
    <div className={s.LoginForm}>
      <Card className={s.loginWrapper}>
        <form className={s.LoginForm}>
          <Typography variant={"h1"} as={"h1"} className={s.loginTitle}>Sign in</Typography>
          <TextField label={"Username"} />
          <TextField label={"Password"} type={"password"} />
          <CustomCheckbox label={'Remember Me'}/>
          <Button>Sign In</Button>
        </form>
      </Card>
    </div>
  );
};

