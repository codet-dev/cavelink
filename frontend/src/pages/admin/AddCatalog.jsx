import { useNavigate } from "react-router-dom";
import BdBar from "../../components/shared/BdBar";
import { Button } from "../../components/ui/Button";
import { useState } from "react";

function AddCatalog() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/admin/new-catalog");
  };
  const [preview, setPreview] = useState(null);
  const handleImage = (e) => {
    const file = e.target?.files?.[0]; // pakai optional chaining
    if (!file) return; // berhenti kalau tidak ada file
    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  return (
    <>
      <BdBar text={"Create new catalog"} variant={""} size={"lg"} className={"md:px-8"} />

      <form className="p-4 md:px-8" onSubmit={handleSubmit}>
        <h2 className="font-semibold text-lg">Add Information</h2>
        <p className="text-sm text-textneutral">Describe what is your catalog is</p>
        <div className="flex flex-col items-center my-8">
          <div className=" rounded-2xl border border-neutral-400 bg-graybar overflow-hidden" style={{ backgroundImage: `url(${preview})`, backgroundPosition: "center", backgroundSize: "cover" }}>
            <input type="file" accept="image/*" className=" w-36 h-36 opacity-0" onChange={handleImage} />
          </div>
          <input type="text" id="catalog_name" placeholder="Catalog Name" className="rounded-xl px-4 py-3 w-full text-sm md:w-[30rem] mx-auto border mt-8 bg-graybar border-neutral-400" required />
          <Button text={"Continue"} size="lg" className={"mt-64 md:mt-8 md:max-w-[30rem]"} type="submit" />
        </div>
      </form>
    </>
  );
}
export default AddCatalog;
