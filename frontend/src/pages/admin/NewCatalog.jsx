import BdBar from "../../components/shared/BdBar";
import SearchBar from "../../components/ui/SearchBar";
import { SELLERDATA } from "../../assets";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function NewCatalog() {
  const PRODUCTS = SELLERDATA.products;
  const navigate = useNavigate();
  const [onAdd, setOnAdd] = useState([]);
  const handleAdd = (id) => {
    setOnAdd((add) => {
      const newAdd = [...add];
      newAdd[id] = !newAdd[id];
      return newAdd;
    });
  };

  return (
    <>
      <BdBar text={"New Catalog"} variant={""} size={"lg"} className={"px-8"} />

      <div className="px-4 md:px-8 pb-32">
        <div className="lg:grid lg:grid-cols-3 lg:gap-4">
          <SearchBar variant="outline" rounded="full" className={"mt-4 lg:mt-0 lg:col-span-2"} />
          <button className="hidden md:block bg-primary text-light font-semibold border rounded-xl cursor-pointer" onClick={() => navigate("/admin/product/catalog")}>
            Save
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          {PRODUCTS.map((item, index) => {
            const productName = item.name < 20 ? item.name : item.name.slice(0, 20) + "...";
            return (
              <div className="bg-[#FAF9F6] border rounded-md overflow-hidden" key={item.id}>
                <img src={item.images[0]} alt="" className="aspect-square object-cover " />
                <div className="p-2 pb-4 flex flex-col items-center">
                  <p className="text-sm w-full">{productName}</p>
                  <p className="font-semibold w-full">Rp{item.price.toLocaleString("id-ID")}</p>

                  <button className={`border px-4 py-2 rounded-full mt-6 cursor-pointer ${onAdd[index] ? "bg-dark text-light" : "bg-light text-dark"}`} onClick={() => handleAdd(index)}>
                    Add +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-4 fixed bottom-0 left-0 w-full md:hidden">
        <Button type="submit" text={"Save"} className={"shadow-lg"} onClick={() => navigate("/admin/product/catalog")} />
      </div>
    </>
  );
}
export default NewCatalog;
