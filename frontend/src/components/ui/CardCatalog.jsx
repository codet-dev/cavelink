import { useState } from "react";
import iconEdit from "../../assets/icons/admin/icon_edit.svg";
import iconDotGridline from "../../assets/icons/admin/icon_dot_gridline.svg";
import { Link } from "react-router-dom";

function CardCatalog({ data }) {
  const [isActive, setIsActive] = useState(data.active);

  function handleActive() {
    setIsActive((active) => !active);
  }

  return (
    <div className="relative border rounded-2xl overflow-hidden p-4">
      <img src={iconDotGridline} alt="" className="absolute top-3 right-3 z-10 bg-light rounded-lg p-1 w-8 h-8" />
      <div className="relative rounded-lg overflow-hidden">
        <img src="" alt="" className="w-full aspect-[2/1] bg-neutral-300" />
        <p className="absolute w-full text-center top-1/2 -translate-y-1/2 ">Add product to your catalog</p>
      </div>
      <div className="mt-2 flex justify-between items-center">
        <div className="">
          <p className="font-semibold">{data.title}</p>
          <p className="text-xs">{data.amount} product</p>
        </div>
        <div className="flex items-center gap-4">
          <Link to={"/admin/edit-catalog"}>
            <img src={iconEdit} alt="" className="w-6" />
          </Link>
          <button className={`rounded-full p-[1px] w-8 h-4 cursor-pointer ${isActive ? "bg-blue-400" : "bg-neutral-400"}`} onClick={handleActive}>
            <div className={`w-1/2 h-full bg-neutral-300 rounded-full transition-all ${isActive ? "translate-x-full" : ""}`}></div>
          </button>
        </div>
      </div>
    </div>
  );
}
export default CardCatalog;
