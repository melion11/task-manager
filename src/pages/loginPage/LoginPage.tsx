import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import s from "./LoginPage.module.scss";

import { useGetLogInMutation, useMeQuery } from "@/features/auth/api";
import { FormValues, LoginForm } from "@/features/auth/ui";
import { PageLoader } from "@/widgets";

export const LoginPage = () => {
  const [getLogin, { isLoading }] = useGetLogInMutation();

  const { isLoading: isLoadingMe, data } = useMeQuery();

  const onSubmitHandler = async (data: FormValues) => {
    await getLogin(data)
      .unwrap()
      .then((data) => toast.error(data.messages[0]));
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
