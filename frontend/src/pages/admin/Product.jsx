import { Outlet } from "react-router-dom";
import AdminSecondBar from "../../components/shared/AdminSecondBar";
import SearchBar from "../../components/ui/SearchBar";
import HomeTopBar from "../../components/shared/HomeTopBar";
import AddProductButton from "../../components/shared/AddProductButton";
import AdminBottomBar from "../../components/shared/AdminBottomBar";

const secondBar = [
  { title: "All Products", link: "/admin/product", end: true },
  { title: "Catalog", link: "/admin/product/catalog", end: false },
];

function Product() {
  return (
    <div className="pt-15 lg:pt-8">
      <HomeTopBar text={"Product"} />
      <h1 className="hidden md:block px-8 font-bold text-2xl">Product</h1>

      <div className="px-4 md:px-8 lg:flex lg:justify-between gap-4 mt-4">
        <SearchBar variant="outline" rounded="full" className={""} />
        <AdminSecondBar data={secondBar} className={"mt-4 lg:mt-0"} />
      </div>

      <div className="mt-4 md:mt-8">
        <Outlet />
      </div>

      <AddProductButton />
      <AdminBottomBar />
    </div>
  );
}
export default Product;
