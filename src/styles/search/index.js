import { Box, styled } from "@mui/system";
import { Colors } from "../theme";
import TextField from "@mui/material/TextField";

export const SearchBoxContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: Colors.primary,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 99999,
  opacity: 0.9,
}));

export const SearchField = styled(TextField)(({ theme }) => ({
  ".MuiInputLabel-root": {
    color: Colors.black,
  },
  ".MuiInput-root": {
    fontSize: "1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
    color: Colors.black,
  },
  ".MuiInput-root::before": {
    borderBottom: `1px solid ${Colors.black}`,
  },
  padding: "0 0 0 40px",
}));
