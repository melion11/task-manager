import s from "./LoginPage.module.scss";
import { LoginForm } from "@/components/ui/LoginForm/LoginForm.tsx";

export const LoginPage = () => {
  return <section className={s.LoginPage}>
    <div className={"container"}>
      <LoginForm />
    </div>
  </section>;
};
