import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import Appdrawer from "../drawer";

export default function AppbarMobile({ matches }) {
  return (
    <AppbarContainer>
      <Appdrawer />
      <AppbarHeader textAlign={"center"} variant="h4">
        Jalalzai Designs
      </AppbarHeader>
    </AppbarContainer>
  );
}
