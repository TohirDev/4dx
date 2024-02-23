import { ReactNode } from "react";
import SideNav from "./sidebar";
import { Box } from "@mui/material";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box display="flex">
      <SideNav />
      <Box flex={1}>
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};
