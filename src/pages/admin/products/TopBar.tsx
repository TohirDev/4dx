import { Box, Button } from "@mui/material";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { GrMenu } from "react-icons/gr";
import { PiSquaresFour } from "react-icons/pi";
import ProductModal from "./ProductCreateModal";

function TopBar() {
  const [open, setOpen] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        my: 4,
      }}
    >
      <ProductModal open={open} onClose={() => setOpen(false)} />
      <Button
        startIcon={<FaPlus size={15} />}
        variant="contained"
        sx={{
          background: "#2563EB",
          fontFamily: "Inter",
          textTransform: "capitalize",
          borderRadius: "12px",
          px: 2,
          py: 1,
          mr: 4,
        }}
        onClick={() => setOpen(true)}
      >
        New Product
      </Button>
      <Box
        sx={{
          mr: 4,
          transition: ".3s ease",
          display: "grid",
          placeItems: "center",
          padding: "10px",
          borderRadius: "12px",
          cursor: "pointer",
          "&:hover": {
            background: "#F8FAFC",
          },
          "&:active": {
            background: "#e2e2e2",
          },
        }}
      >
        <GrMenu size={25} />
      </Box>
      <Box
        sx={{
          mr: 4,
          transition: ".3s ease",
          display: "grid",
          placeItems: "center",
          padding: "10px",
          borderRadius: "12px",
          cursor: "pointer",
          "&:hover": {
            background: "#F8FAFC",
          },
          "&:active": {
            background: "#e2e2e2",
          },
        }}
      >
        <PiSquaresFour size={25} />
      </Box>
    </Box>
  );
}

export default TopBar;
