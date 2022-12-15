import Appbar from "../components/appbar";
import DeleteService from "../components/crud/crud-services/delete-service";
import UpdateService from "../components/crud/crud-services/update-service";
import CreateService from "../components/crud/crud-services/create-service";

export default function AdminService() {
  return (
    <>
      <Appbar />
      <DeleteService />
      <UpdateService />
      <CreateService />
    </>
  );
}