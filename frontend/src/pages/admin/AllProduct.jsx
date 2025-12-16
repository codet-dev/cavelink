import { SELLERDATA } from "../../assets";
import iconLineDot from "../../assets/icons/admin/icon_line_dot.svg";
import NoneList from "../../components/shared/NoneList";
import { useState } from "react";

function AllProduct() {
  const PRODUCTS = SELLERDATA.products;
  const [menuOpen, setMenuOpen] = useState(null);
  const handleClickMenu = (index) => {
    setMenuOpen((value) => (value === index ? null : index));
  };

  return (
    <div className="px-4 md:px-8 ">
      {PRODUCTS.length ? (
        <div className="w-full overflow-x-auto rounded-xl">
          <table className=" min-w-[600px] lg:min-w-full text-sm text-center ">
            <thead>
              <tr className="">
                <th className="p-4">Menu</th>
                <th className="p-4 max-w-20">Product</th>
                <th className="p-4">Stock</th>
                <th className="p-4">Price</th>
                <th className="p-4">Variant</th>
              </tr>
            </thead>
            <tbody className="">
              {PRODUCTS.map((data, index) => (
                <tr key={data.id} className="border-t border-neutral-300">
                  <td>
                    <img src={iconLineDot} alt="" className="w-6 mx-auto cursor-pointer" onClick={() => handleClickMenu(index)} />
                  </td>
                  <td className="p-4 text-left flex items-center gap-4">
                    <img src={data.images[0]} alt="" className="w-10 aspect-square object-cover border border-neutral-300 rounded" />
                    <p className="">{data.name}</p>
                  </td>
                  <td>{data.stock}</td>
                  <td>Rp{data.price.toLocaleString("id-ID")}</td>
                  <td>{data.variants.length > 0 ? "On" : "Off"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <NoneList text={"No Product Yet, Add Something to Your Store"} />
      )}
    </div>
  );
}
export default AllProduct;
