import { useState } from "react";
import iconPlus from "../../assets/icons/admin/icon_plus.svg";
import iconCross from "../../assets/icons/admin/icon_cross.svg";
import iconAddproduct from "../../assets/icons/admin/icon_addproduct.svg";
import iconAddcatalog from "../../assets/icons/admin/icon_addcatalog.svg";
import { Link } from "react-router-dom";

function AddProductButton() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((open) => !open);
  }
  const classOpen = isOpen ? "" : "translate-y-full";

  return (
    <>
      <button className="fixed md:hidden bottom-28 right-4 px-4 py-2 rounded-xl bg-primary text-light shadow-lg" onClick={handleOpen}>
        <img src={iconPlus} alt="" />
        <p className="text-xs ">Add</p>
      </button>
      <div className={`fixed md:hidden bottom-0 z-50 w-full px-4 pt-8 pb-12 bg-light border-t border-neutral-300 rounded-4xl shadow-top transition-all duration-300 ${classOpen}`}>
        <h2 className="text-center font-semibold ">Add to your store</h2>
        <img src={iconCross} alt="" className="absolute top-8 right-8" onClick={handleOpen} />

        <Link to={"/admin/add-product"} className="flex justify-between items-center w-full bg-graybar rounded-xl p-4 mt-8">
          <div className="">
            <p className="font-semibold">Product</p>
            <p className="text-sm text-textneutral">Add a product to your store</p>
          </div>
          <img src={iconAddproduct} alt="" />
        </Link>
        <Link to={"/admin/add-catalog"} className="flex justify-between items-center w-full bg-graybar rounded-xl p-4 mt-4">
          <div className="">
            <p className="font-semibold">Catalog</p>
            <p className="text-sm text-textneutral">Organize product into a folder</p>
          </div>
          <img src={iconAddcatalog} alt="" />
        </Link>
      </div>
    </>
  );
}
export default AddProductButton;
