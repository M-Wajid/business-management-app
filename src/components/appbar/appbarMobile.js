import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import Appdrawer from "../drawer";
import Searchbox from "../search";

export default function AppbarMobile({ matches }) {
  return (
    <AppbarContainer>
      <Appdrawer />
      <AppbarHeader textAlign={"center"} variant="h4">
        Jalalzai Designs
      </AppbarHeader>
      <Searchbox />
    </AppbarContainer>
  );
}
