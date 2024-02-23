import { Components, Theme } from "@mui/material";

const components: Components<Omit<Theme, "components">> = {
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: "16px",
      },
      root: {
        ".MuiDialogContent-root": {
          padding: "24px ",
          paddingTop: 0,
        },
        ".MuiDialogActions-root": {
          padding: 24,
          justifyContent: "space-between",
          "& .MuiStack-root": {
            width: "100%",
          },
        },
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        borderRadius: "8px",
        backgroundColor: "#F8FAFC",
        ":hover": {
          backgroundColor: "#F8FAFC99",
        },
      },
    },
  },
  MuiAutocomplete: {
    styleOverrides: {
      popupIndicator: {
        background: "none",
      },
      root: {
        "& .MuiOutlinedInput-root": {
          borderRadius: "12px !important",
          fontSize: "16px",
          fontWeight: 600,
          color: "rgb(15, 23, 42)",
        },
        "& .MuiInputLabel-root": {
          fontSize: "16px",
          fontWeight: 600,
        },
      },
    },
  },
  MuiDivider: {
    defaultProps: {
      sx: {
        width: "100%",
        height: "1px",
        my: 3,
      },
    },
  },
  MuiButton: {
    defaultProps: {
      variant: "contained",
      color: "primary",
    },
    styleOverrides: {
      root: {
        boxShadow: "none",
        height: "56px",
        borderRadius: "12px",
        fontWeight: 700,
        fontSize: "16px",
        "&:hover": {
          boxShadow: "none",
        },
      },
      outlined: {
        border: "1px solid #E2E8F0",
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      body1: {
        fontSize: "14px",
        fontWeight: 900,
        marginBottom: "10px",
      },
      body2: {
        fontSize: "18px",
        fontWeight: 700,
      },
      subtitle1: {
        fontSize: "12px",
        color: "#64748B",
      },
      caption: {
        fontSize: "12px",
        fontWeight: 700,
        letterSpacing: "1px",
        marginLeft: "16px !important",
        color: "rgb(148, 163, 184)",
        display: "block",
      },
    },
  },
};

export default components;
