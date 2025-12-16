import BdBar from "../../components/shared/BdBar";
import { Input } from "../../components/ui/Input";
import { SELLERDATA } from "../../assets/index";
import VariantCard from "../../components/shared/VariantCard";
import { Button } from "../../components/ui/Button";
import Select from "../../components/shared/Select";
import { SubmitFunction } from "../../api/submitFunction";
import { useState } from "react";

const CURRENCY = [
  {
    id: 1,
    name: "Rupiah",
  },
];

function AddProduct() {
  const catalogList = SELLERDATA.catalog;
  const [preview, setPreview] = useState(null);
  const handleImage = (e) => {
    const file = e.target?.files?.[0]; // pakai optional chaining
    if (!file) return; // berhenti kalau tidak ada file
    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  return (
    <div className="">
      <BdBar text={"Add Product"} variant={""} size={"lg"} className={"md:px-8"} />

      <form className="p-4 md:p-8 flex flex-col gap-3 " onSubmit={SubmitFunction("/admin/product")}>
        <div className="grid grid-cols-2 gap-2">
          <h2 className="font-semibold col-span-2">Add Product</h2>

          <div className="col-span-2 flex justify-center my-4">
            <div className="bg-graybar rounded-2xl overflow-hidden border border-neutral-300" style={{ backgroundImage: `url(${preview})`, backgroundPosition: "center", backgroundSize: "cover" }}>
              <input type="file" accept="image/*" className=" w-24 h-24  cursor-pointer opacity-0" required onChange={handleImage} />
            </div>
          </div>
          <Input id={"title_product"} placeholder={"Title Product"} className={"rounded-xl col-span-2"} />
          <textarea id="description_product" placeholder="Description" className="col-span-2 bg-graybar w-full h-48  rounded-xl px-4 py-3  resize-none" required></textarea>
          <Input id={"stock"} type={"number"} placeholder={"Stock"} className={" rounded-xl"} />
          <Input id={"weight"} type="number" placeholder={"Weight (gram)"} className={" rounded-xl"} />
          <Select id={"currency"} name={"currency"} options={CURRENCY} disabled={false} variant="gray" />
          <Input id={"price"} type="number" placeholder={"Price"} className={" rounded-xl"} />
        </div>

        <div className="">
          <h2 className="font-semibold mt-8">Add your product in</h2>
          <div className="grid grid-cols-2 bg-graybar p-4 rounded-xl border mt-4">
            {catalogList.map((data) => (
              <div className="" key={data.id}>
                <input type="checkbox" id={data.id} className="mr-2" />
                <label htmlFor={data.id}>{data.name}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="font-semibold text-lg">Enable Variant</h2>
          <VariantCard />
        </div>

        <Button type="submit" text={"Add Product"} className={"mt-16 mb-8"} />
      </form>
    </div>
  );
}
export default AddProduct;
