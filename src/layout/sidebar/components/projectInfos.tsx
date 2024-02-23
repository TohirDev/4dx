import { Box, Typography } from "@mui/material";
import { TProjectInfos } from "@/types";

export const ProjectInfos = ({ color, name }: TProjectInfos) => {
  return (
    <Box sx={{ display: "flex", mt: 2, alignItems: "center", ml: "16px" }}>
      <Box
        sx={{
          width: "12px",
          height: "12px",
          background: color,
          borderRadius: "50%",
        }}
      />
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "14px",
          ml: 2,
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};
