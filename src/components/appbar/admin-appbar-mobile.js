import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import Appdrawer from "../drawer/admin-drawer";

export default function AppbarMobileAdmin({ matches }) {
  return (
    <AppbarContainer>
      <Appdrawer />
      <AppbarHeader textAlign={"center"} variant="h4">
        Jalalzai Designs
      </AppbarHeader>
    </AppbarContainer>
  );
}
