import { styled } from "@mui/material/styles";
import { List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import "@fontsource/montez";

//container
export const AppbarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  background: Colors.dim_grey,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
}));

export const Logo = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "200px",
  [theme.breakpoints.down("md")]: {
    width: "100px",
  },
}));

//header
export const AppbarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "4em",
  fontFamily: '"Montez", "cursive',
}));

export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: "flex",
  background: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  zIndex: 99,
  borderTop: `1px solid ${Colors.border}`,
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));
