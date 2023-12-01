import logoWebp from "../../../shared/assets/images/logo.webp";
import logoPng from "../../../shared/assets/images/logo.png";
import { Link } from "react-router-dom";
import s from "./Header.module.scss";
import { Button } from "@/shared/ui";
import { Typography } from "@/shared/ui/Typography";


export const Header = () => {
  return (
    <header>
      <div className={"container"}>
        <div className={s.headerWrapper}>
          <Link to={"/"} className={s.logoLink}>
            <picture className={s.pictureWrap}>
              <source srcSet={logoWebp} type="image/webp" />
              <source srcSet={logoPng} type="image/png" />
              <img className={s.logo} src={logoPng} alt="logo" />
            </picture>
            <Typography variant={"h1"}>Task manager</Typography>
          </Link>
          <Button variant={"primary"}>Sign In</Button>
        </div>
      </div>
    </header>
  );
};
