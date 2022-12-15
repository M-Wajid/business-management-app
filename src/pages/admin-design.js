import Appbar from "../components/appbar";
import DeleteDesign from "../components/crud/crud-designs/delete-design";
import UpdateDesign from "../components/crud/crud-designs/update-design";
import CreateDesign from "../components/crud/crud-designs/create-design";

export default function AdminDesign() {
  return (
    <>
      <Appbar />
      <DeleteDesign />
      <UpdateDesign />
      <CreateDesign />
    </>
  );
}
