import { CheckboxProps, CustomCheckbox } from "@/shared/ui/Checkbox";
import { FieldValues, useController, UseControllerProps } from "react-hook-form";

type Props<T extends FieldValues> =
  Omit<UseControllerProps<T>, "rules" | "defaultValue" | "disabled">
  & Omit<CheckboxProps, "checked" | "onCheckedChange">

export const ControlledCheckbox = <T extends FieldValues>({
                                                            name,
                                                            control,
                                                            disabled,
                                                            shouldUnregister,
                                                            ...rest
                                                          }: Props<T>) => {

  const { field: { value, onChange } } = useController({
    control,
    name,
    disabled, shouldUnregister
  });

  return <CustomCheckbox checked={value} disabled={disabled} onCheckedChange={onChange}
                         label={"Remember Me"} {...rest} />;
};

// type Props = {
//   name: string
//   control: any
// } & CheckboxProps
//
// export const ControlledCheckbox = ({
//        name,
//        control,
//        ...rest
//        }: Props) => {
//
//   const { field: { value, onChange } } = useController({
//     control,
//     name,
//   });
//
//   return <CustomCheckbox checked={value}  onCheckedChange={onChange}
//                          label={"Remember Me"} {...rest} />;
// };

