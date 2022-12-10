import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import Appdrawer from "../drawer";
import Searchbox from "../search";
import Actions from "./actions";

export default function AppbarMobile({ matches }) {
  return (
    <AppbarContainer>
      <Appdrawer />
      <AppbarHeader textAlign={"center"} variant="h4">
        Jalalzai Designs
      </AppbarHeader>
      <Searchbox />
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
