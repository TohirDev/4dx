import { Controller, FieldValues } from "react-hook-form";
import { IFormItem } from "@/types";
import {
  CustomAutocomplete,
  ICustomAutocompleteProps,
} from "../CustomAutocomplete";

export const FormSelect = <T extends FieldValues>({
  control,
  name,
  rules,
  required,
  ...props
}: IFormItem<T> & ICustomAutocompleteProps) => {
  return (
    <Controller
      {...{ control, name, rules: { required, ...rules } }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <CustomAutocomplete
          error={error != null}
          {...props}
          onChange={(_, value) => onChange(value)}
          value={value ?? null}
        />
      )}
    />
  );
};
