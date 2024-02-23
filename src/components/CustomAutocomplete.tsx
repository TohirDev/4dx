import { Autocomplete, AutocompleteProps, TextField } from "@mui/material";
import { IOption } from "../types";

export interface ICustomAutocompleteProps
  extends Omit<
    AutocompleteProps<IOption, boolean, boolean, boolean>,
    "renderInput"
  > {
  label: string;
  error?: boolean;
  helper?: string;
}

export const CustomAutocomplete = ({
  label,
  error,
  helper,
  ...props
}: ICustomAutocompleteProps) => {
  return (
    <Autocomplete
      {...props}
      renderInput={(props) => (
        <TextField {...props} error={error} helperText={helper} label={label} />
      )}
    />
  );
};
