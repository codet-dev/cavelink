import { Link, useParams } from "react-router-dom";
import ButtonAmount from "./ButtonAmount";

function Card2({ data, itemCart }) {
  const { sellerId } = useParams();
  const productName = data.name.length < 25 ? data.name : data.name.slice(0, 25) + "...";

  return (
    <div className="border-b border-neutral-500 w-full overflow-hidden flex items-center py-4 gap-4">
      <input
        type="checkbox"
        className="appearance-none bg-light w-4 h-4 aspect-square border rounded checked:bg-primary text-xs text-center checked:text-light checked:after:content-['✓'] cursor-pointer"
      />
      <Link to={`/${sellerId}/product/${data.id}`} className="w-26 h-26 aspect-square">
        <img src={data.images[0]} alt="" className="w-26 h-26 aspect-square object-cover border border-neutral-300 rounded-lg" />
      </Link>
      <div className="w-full">
        <p className="text-sm font-semibold">{productName}</p>
        <p className="text-xs text-textneutral">Variant</p>
        <div className="flex justify-between">
          <div className="bg-neutral-200 rounded px-1 w-1/2">
            <button className="text-[10px] bg-light py-[2px] px-3 rounded-full">{itemCart.selectedVariant}</button>
          </div>
          <ButtonAmount start={itemCart.quantity} onQuantityChange={() => false} />
        </div>
        <p className="font-semibold text-lg mt-1">Rp{data.price.toLocaleString("id-ID")}</p>
      </div>
    </div>
  );
}
export default Card2;
