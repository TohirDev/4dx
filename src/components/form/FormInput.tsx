import { TextFieldProps } from "@mui/material";
import { Controller, FieldValues } from "react-hook-form";
import { Input } from "../Input";
import { IFormItem } from "@/types";

export const FormInput = <T extends FieldValues>({
  control,
  name,
  rules,
  required,
  ...props
}: IFormItem<T> & Omit<TextFieldProps, "name">) => {
  return (
    <Controller
      {...{ control, name, rules: { required, ...rules } }}
      render={({
        field,
        fieldState: { error },
        formState: { errors },
      }) => (
        <Input
          {...props}
          {...field}
          value={field.value ?? props.defaultValue ?? ""}
          error={Boolean(errors[name])}
          label={
            error?.message === ""
              ? `${props.label ?? name} is required field`
              : error?.message ?? props.label
          }
        />
      )}
    />
  );
};
