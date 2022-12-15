import Appbar from "../components/appbar";
import DeleteDesign from "../components/crud/delete-design";
import UpdateDesign from "../components/crud/update-design";
import CreateDesign from "../components/crud/create-design";

export default function Home() {
  return (
    <>
      <Appbar />
      <DeleteDesign />
      <UpdateDesign />
      <CreateDesign />
    </>
  );
}
