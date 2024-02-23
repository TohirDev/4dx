import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import Logo from "@/assets/logo";
import { Switch, Typography } from "@mui/material";
import { routes } from "../../routes";
import { FaPlus } from "react-icons/fa";
import { ListItemLink } from "./components/listLinkItem";
import { ProjectInfos } from "./components/projectInfos";
import { IoSettingsOutline } from "react-icons/io5";
import { LuMoonStar } from "react-icons/lu";

const drawerWidth = 250;
const label = { inputProps: { "aria-label": "Switch demo" } };
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideNav() {
  return (
    <>
      <Box sx={{ display: "flex", width: "250px" }}>
        <Drawer variant="permanent" open={true} sx={{ background: "red" }}>
          <DrawerHeader
            sx={{
              display: "flex",
              justifyContent: "start",
              py: 5,
            }}
          >
            <Logo />
          </DrawerHeader>
          <Divider sx={{ mx: "16px" }} />
          <Box sx={{ ml: "16px", mt: "32px" }}>
            <Typography variant="caption" sx={{ mb: 2 }}>
              MENU
            </Typography>
            {routes?.map((item) => (
              <ListItemLink
                key={item.key}
                text={item.text}
                path={item.path}
                icon={item.icon}
              />
            ))}
          </Box>
          <Divider sx={{ width: "90%", mx: "16px", my: 4 }} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mx: "16px",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontFamily: "Inter",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "1px",
                ml: "16px",
                color: "rgb(148, 163, 184)",
              }}
            >
              PROJECTS
            </Typography>
            <FaPlus size={15} color="#64748B" style={{ cursor: "pointer" }} />
          </Box>
          <Box
            sx={{
              mx: "16px",
              display: "flex",
              flexDirection: "column",
              mt: 3,
            }}
          >
            <ProjectInfos color="#6366F1" name="Website Design" key={1} />
            <ProjectInfos color="#F6A723" name="SEO Analythics" key={2} />
            <ProjectInfos color="#34D399" name="Hiphonic App" key={3} />
          </Box>
          <Box sx={{ mt: "auto", mx: "16px", mb: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IoSettingsOutline size={20} color="#64748B" />
              <Typography
                sx={{
                  ml: 2,
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "#64748B",
                }}
              >
                Settings
              </Typography>
            </Box>
            <Divider sx={{ width: "90%", mx: "16px", my: 2 }} />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LuMoonStar size={20} color="#64748B" />
              <Typography
                sx={{
                  ml: 2,
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "#64748B",
                }}
              >
                Dark Mode
              </Typography>
              <Switch {...label} sx={{ ml: "auto" }} />
            </Box>
          </Box>
        </Drawer>
      </Box>
    </>
  );
}
