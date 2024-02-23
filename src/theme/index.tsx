import { ThemeOptions, ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";
import components from "./overrides";

interface IThemeProps {
  children: ReactNode;
}
export const Theme = ({ children }: IThemeProps) => {
  const themeOptions: ThemeOptions = {
    typography: {
      fontFamily: "Inter",
    },
    components,
  };
  const theme = createTheme(themeOptions);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
