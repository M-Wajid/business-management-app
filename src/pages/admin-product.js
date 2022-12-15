import Appbar from "../components/appbar";
import DeleteProduct from "../components/crud/crud-products/delete-product";
import UpdateProduct from "../components/crud/crud-products/update-product";
import CreateProduct from "../components/crud/crud-products/create-product";


export default function AdminProduct() {
  return (
    <>
      <Appbar />
      <DeleteProduct />
      <UpdateProduct />
      <CreateProduct />
    </>
  );
}