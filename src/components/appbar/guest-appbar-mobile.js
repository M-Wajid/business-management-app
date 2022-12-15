import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import Appdrawer from "../drawer/guest-drawer";

export default function AppbarMobileGuest({ matches }) {
  return (
    <AppbarContainer>
      <Appdrawer />
      <AppbarHeader textAlign={"center"} variant="h4">
        Jalalzai Designs
      </AppbarHeader>
    </AppbarContainer>
  );
}
