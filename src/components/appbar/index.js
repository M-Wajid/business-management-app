import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppbarDesktopAdmin from "./admin-appbar-desktop";
import AppbarMobileAdmin from "./admin-appbar-mobile";
import AppbarDesktopGuest from "./guest-appbar-desktop";
import AppbarMobileGuest from "./guest-appbar-mobile";
import AuthUser from "../sign-in/auth-user";

export default function Appbar() {
  const { token } = AuthUser();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  if (!token) {
    console.log(token)
    return (
      <>
        {matches ? (
          <AppbarMobileGuest matches={matches} />
        ) : (
          <AppbarDesktopGuest matches={matches} />
        )}
      </>
    );
  } else {
    return (
      <>
        {matches ? (
          <AppbarMobileAdmin matches={matches} />
        ) : (
          <AppbarDesktopAdmin matches={matches} />
        )}
      </>
    );
  }
}
