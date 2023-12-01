import s from "./Button.module.scss";
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { clsx } from "clsx";


export type ButtonProps <T extends ElementType = 'button'> = {
  variant?: "primary" | "secondary" | "tertiary" | "link"
  fullWidth?: boolean
  as?: T
  children?: ReactNode
} & ComponentPropsWithoutRef<T>

export const Button =<T extends ElementType = 'button'> (props:
     ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>,
     keyof ButtonProps<T>>) => {
  const {
    variant = "primary",
    className,
    fullWidth,
    as: Component = 'button',
    ...rest } = props;

  const classNames = {
    button: clsx(s.button, s[variant], fullWidth && s.fullWidth, className)
  };

  return <Component className={classNames.button} {...rest}/>;
};
