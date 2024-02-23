import { Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { TListItemLink } from "@/types";

export const ListItemLink = ({ path, text, icon }: TListItemLink) => {
  const { pathname } = useLocation();
  const isActive = pathname.includes(path);
  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          transition: ".15s",
          mr: "16px",
          borderRadius: "12px",
          padding: "10px 0",
          "&:hover": {
            background: "rgb(248, 250, 252)",
          },
          "&:active": {
            background: "#c7d1dd",
          },
          display: "flex",
          alignItems: "center",
          mb: 1.5,
        }}
      >
        <Box
          sx={{
            ml: 2,
            color: isActive ? "rgb(37, 99, 235)" : "rgb(100, 116, 139)",
            display: "flex",
            alignItems: "center",
          }}
        >
          {icon}
        </Box>
        <Typography
          variant="body1"
          ml={2}
          sx={{
            fontWeight: isActive ? 700 : 500,
            color: isActive ? "rgb(37, 99, 235)" : "rgb(100, 116, 139)",
            mb: 0,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Link>
  );
};
