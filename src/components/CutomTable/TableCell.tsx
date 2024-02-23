import { SxProps, TableCell, Typography } from "@mui/material";
import { ReactNode } from "react";

const CustomTableCell = ({
  text,
  children,
  sx,
}: {
  text?: string;
  children?: ReactNode;
  sx?: SxProps;
}) => {
  return (
    <TableCell
      sx={{
        borderBottom: 0,
        ...sx,
      }}
    >
      {children}
      <Typography
        sx={{
          color: "rgb(15, 23, 42)",
          fontFamily: "Inter, sans-serif",
          fontSize: "16px",
          fontWeight: 700,
        }}
      >
        {text}
      </Typography>
    </TableCell>
  );
};

export default CustomTableCell;
