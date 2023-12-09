import { clsx } from "clsx";

import s from "./Loader.module.scss";

type LoaderProps = {
  className?: string;
};

export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={clsx(s["lds-facebook"], className)}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
