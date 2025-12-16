import BdBar from "../../components/shared/BdBar";
import SearchBar from "../../components/ui/SearchBar";
import { SELLERDATA } from "../../assets";
import { EDITCATALOG, ADDCATALOG } from "../../assets";
import { useState } from "react";
import { Button } from "../../components/ui/Button";

function EditCatalog() {
  const PRODUCTS = SELLERDATA.products;
  const [mode, setMode] = useState(false);
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
      <BdBar text={"Edit Catalog"} variant={""} size={"lg"} className={"px-8"} />

      <div className="px-4 md:px-8">
        <div className="grid grid-cols-2  md:grid-cols-3 gap-2">
          <button className={` py-3 rounded-xl border font-semibold text-sm cursor-pointer ${mode ? "" : "bg-primary text-light"}`} onClick={() => setMode(() => false)}>
            List Product
          </button>
          <button className={`  py-3 rounded-xl border font-semibold text-sm  cursor-pointer ${mode ? "bg-primary text-light" : ""}`} onClick={() => setMode(() => true)}>
            Add Product
          </button>
          {mode && (
            <button className="hidden md:block py-3 rounded-xl border font-semibold text-sm bg-primary text-light cursor-pointer" onClick={() => setMode(() => false)}>
              Save
            </button>
          )}
        </div>
        <SearchBar variant="outline" rounded="full" className={"mt-4"} />

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          {PRODUCTS.map((item, index) => {
            const productName = item.name < 20 ? item.name : item.name.slice(0, 20) + "...";
            return (
              <div className="bg-[#FAF9F6] border rounded-md overflow-hidden" key={item.id}>
                <img src={item.images[0]} alt="" className="aspect-square object-cover " />
                <div className="p-2 pb-4 flex flex-col items-center">
                  <p className="text-sm w-full">{productName}</p>
                  <p className="font-semibold w-full">Rp{item.price.toLocaleString("id-ID")}</p>

                  {mode && (
                    <button className={`border px-4 py-2 rounded-full mt-6 cursor-pointer ${onAdd[index] ? "bg-dark text-light" : "bg-light text-dark"}`} onClick={() => handleAdd(index)}>
                      Add +
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {mode && (
        <div className="p-4 fixed bottom-0 left-0 w-full md:hidden">
          <Button type="submit" text={"Save"} className={"shadow-lg"} onClick={() => setMode(() => false)} />
        </div>
      )}
    </>
  );
}
export default EditCatalog;
