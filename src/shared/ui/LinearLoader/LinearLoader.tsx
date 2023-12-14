import { clsx } from "clsx";

import s from "./LinearLoader.module.scss";

type LoaderProps = {
  className?: string;
};

export const LinearLoader = ({ className }: LoaderProps) => {
  return (
    <div className={clsx(s.barContainer, className)}>
      <div className={s.bar}></div>
      <div className={s.bar}></div>
      <div className={s.bar}></div>
      <div className={s.bar}></div>
    </div>
  );
};
