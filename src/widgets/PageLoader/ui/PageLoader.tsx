import { clsx } from "clsx";

import s from "./PageLoader.module.scss";

import { LinearLoader } from "@/shared/ui/LinearLoader/LinearLoader.tsx";
import { Loader } from "@/shared/ui/Loader/Loader.tsx";

type PageLoaderProps = {
  className?: string;
  linear?: boolean;
  height?: boolean;
};

export const PageLoader = ({ className, linear, height }: PageLoaderProps) => {
  return linear ? (
    <LinearLoader />
  ) : (
    <div className={clsx(s.PageLoader, height && s.height, className)}>
      <Loader />
    </div>
  );
};
