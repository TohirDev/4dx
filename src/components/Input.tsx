import { TextField, TextFieldProps } from "@mui/material";
import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    return (
      <TextField
        size="small"
        fullWidth
        {...props}
        inputRef={ref}
        sx={{
          "& .MuiInputBase-root": {
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
          },
        }}
      />
    );
  }
);
