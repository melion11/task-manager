import { Link } from "react-router-dom";

import logoPng from "../../../shared/assets/images/logo.png";
import logoWebp from "../../../shared/assets/images/logo.webp";

import s from "./Header.module.scss";

import { useGetLogoutMutation, useMeQuery } from "@/features";
import { Logout } from "@/shared/assets";
import { Button } from "@/shared/ui";
import { Typography } from "@/shared/ui/Typography";

export const Header = () => {
  const { data } = useMeQuery();

  const [logout] = useGetLogoutMutation();

  const getLogoutHandler = () => {
    logout();
  };

  return (
    <header className={s.header}>
      <div className={"container"}>
        <div className={s.headerWrapper}>
          <Link to={"/"} className={s.logoLink}>
            <picture className={s.pictureWrap}>
              <source srcSet={logoWebp} type="image/webp" />
              <source srcSet={logoPng} type="image/png" />
              <img className={s.logo} src={logoPng} alt="logo" />
            </picture>
            <Typography variant={"h1"} className={s.title} as={"h1"}>
              Task manager
            </Typography>
          </Link>
          {data?.resultCode === 0 ? (
            <Button onClick={getLogoutHandler} variant={"secondary"}>
              <Logout /> Log Out
            </Button>
          ) : (
            <Button variant={"primary"}>Sign In</Button>
          )}
        </div>
      </div>
    </header>
  );
};
