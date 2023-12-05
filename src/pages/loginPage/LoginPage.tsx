import { Navigate } from "react-router-dom";

import s from "./LoginPage.module.scss";

import { useGetLogInMutation, useMeQuery } from "@/features";
import { FormValues, LoginForm } from "@/features/ui/LoginForm/LoginForm.tsx";
import { PageLoader } from "@/widgets";

export const LoginPage = () => {
  const [getLogin, { isLoading }] = useGetLogInMutation();

  const { isLoading: isLoadingMe, data } = useMeQuery();

  const onSubmitHandler = (data: FormValues) => {
    getLogin(data);
  };

  if (data?.resultCode === 0) {
    return <Navigate to={"/"} />;
  }

  if (isLoadingMe) return <PageLoader />;

  return (
    <section className={s.LoginPage}>
      <div className={"container"}>
        <LoginForm onSubmit={onSubmitHandler} isLoading={isLoading} />
      </div>
    </section>
  );
};
