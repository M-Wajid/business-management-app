import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import Appdrawer from "../drawer";
import LoginAdmin from "../login";

export default function AppbarMobile({ matches }) {
  return (
    <AppbarContainer>
      <Appdrawer />
      <AppbarHeader textAlign={"center"} variant="h4">
        Jalalzai Designs
      </AppbarHeader>
      <LoginAdmin />
    </AppbarContainer>
  );
}
