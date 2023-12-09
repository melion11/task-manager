import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  forwardRef,
  useState,
} from "react";

import { clsx } from "clsx";

import s from "./textfield.module.scss";

import { EyeOff, EyeOn, Search } from "@/shared/assets";
import { Label } from "@/shared/ui/Label";
import { Typography } from "@/shared/ui/Typography";

type TextFieldProps = {
  label?: string;
  value?: string;
  onChangeValue?: (value: string) => void;
  errorMessage?: string;
  search?: boolean;
} & ComponentPropsWithoutRef<"input">;
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const {
      onChange,
      disabled,
      errorMessage,
      placeholder,
      value,
      search,
      onChangeValue,
      className,
      label,
      type,
      ...restProps
    } = props;

    const [showPassword, setShowPassword] = useState(false);

    const classNames = {
      rootBlock: clsx(s.rootBlock),
      field: clsx(
        s.field,
        !!errorMessage && s.error,
        search && s.hasSearchIcon,
      ),
      label: clsx(s.label, disabled && s.disabled, className),
      password: clsx(s.password, disabled && s.disabled),
      searchIcon: clsx(s.searchIcon, disabled && s.disabled),
    };

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event);
      onChangeValue?.(event.currentTarget.value);
    };

    const labelJSX = label && (
      <Typography className={classNames.label} variant={"body2"} as={"label"}>
        {label}
      </Typography>
    );

    const finalType = getFinalType(type, showPassword);

    const isShowButtonPassword = type === "password";

    return (
      <Label label={labelJSX} className={className}>
        <div className={classNames.rootBlock}>
          {search && <Search className={classNames.searchIcon} />}
          <input
            autoFocus
            type={finalType}
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            className={classNames.field}
            onChange={(event) => onChangeHandler(event)}
            ref={ref}
            {...restProps}
          />
          {isShowButtonPassword && (
            <button
              type={"button"}
              className={classNames.password}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeOn /> : <EyeOff />}
            </button>
          )}
          {errorMessage && (
            <Typography variant={"error"}>{errorMessage}</Typography>
          )}
        </div>
      </Label>
    );
  },
);

const getFinalType = (
  type: ComponentPropsWithoutRef<"input">["type"],
  showPassword: boolean,
) => {
  if (type === "password" && showPassword) {
    return "text";
  }

  return type;
};
