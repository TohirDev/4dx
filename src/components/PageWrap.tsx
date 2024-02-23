import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface IPageWrap {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export const PageWrap = ({ children, subtitle, title }: IPageWrap) => {
  return (
    <>
      <Box
        sx={{
          px: 3,
          pt: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h3" sx={{ fontSize: "24px", fontWeight: 700 }}>
            {title}
          </Typography>
          <Typography variant="subtitle1" mt={1}>
            {subtitle}
          </Typography>
        </Box>
      </Box>
      {children}
    </>
  );
};
