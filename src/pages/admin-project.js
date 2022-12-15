import Appbar from "../components/appbar";
import DeleteProject from "../components/crud/crud-projects/delete-project";
import UpdateProject from "../components/crud/crud-projects/update-project";
import CreateProject from "../components/crud/crud-projects/create-project";

export default function AdminProject() {
  return (
    <>
      <Appbar />
      <DeleteProject />
      <UpdateProject />
      <CreateProject />
    </>
  );
}