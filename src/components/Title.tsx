import { Typography } from "@mui/material";
import { ReactNode } from "react";
interface ITitleNameProps {
  title: string;
  subtitle: string;
  required?: boolean;
  children: ReactNode;
}
export function Title({
  children,
  required,
  title,
  subtitle,
}: ITitleNameProps) {
  return (
    <>
      <Typography variant="body1" mt={2}>
        {title}
        {required ?? <strong style={{ color: "red" }}>*</strong>}
      </Typography>
      <Typography mb={3} variant="subtitle1">
        {subtitle}
      </Typography>
      {children}
    </>
  );
}
