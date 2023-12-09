import { clsx } from "clsx";

import s from "./PageLoader.module.scss";

import { Loader } from "@/shared/ui/Loader/Loader.tsx";

type PageLoaderProps = {
  className?: string;
};

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={clsx(s.PageLoader, className)}>
      <Loader />
    </div>
  );
};
