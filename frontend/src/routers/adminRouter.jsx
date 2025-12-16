import AdminLayout from "../layouts/AdminLayout";
import Home from "../pages/admin/Home";
import Product from "../pages/admin/Product";
import Order from "../pages/admin/Order";
import Theme from "../pages/admin/Theme";
import Catalog from "../pages/admin/Catalog";
import AllProduct from "../pages/admin/AllProduct";
import Revenue from "../pages/admin/Revenue";
import Account from "../pages/admin/Account";
import Address from "../pages/admin/Address";
import AddAddress from "../pages/admin/AddAddress";
import AddProduct from "../pages/admin/AddProduct";
import AddCatalog from "../pages/admin/AddCatalog";
import EditCatalog from "../pages/admin/EditCatalog";
import NewCatalog from "../pages/admin/NewCatalog";

const adminRouter = {
  path: "/",
  element: <AdminLayout />,
  children: [
    { path: "/admin", element: <Home /> },
    {
      path: "/admin/product",
      element: <Product />,
      children: [
        { index: true, element: <AllProduct /> },
        { path: "/admin/product/catalog", element: <Catalog /> },
      ],
    },
    { path: "/admin/order", element: <Order /> },
    { path: "/admin/theme", element: <Theme /> },
    { path: "/admin/revenue", element: <Revenue /> },
    { path: "/admin/account", element: <Account /> },
    { path: "/admin/address", element: <Address /> },
    { path: "/admin/add-address", element: <AddAddress /> },
    { path: "/admin/add-product", element: <AddProduct /> },
    { path: "/admin/add-catalog", element: <AddCatalog /> },
    { path: "/admin/edit-catalog", element: <EditCatalog /> },
    { path: "/admin/new-catalog", element: <NewCatalog /> },
  ],
};
export default adminRouter;
