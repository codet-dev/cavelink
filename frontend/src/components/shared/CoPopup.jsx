import { useState } from "react";
import iconClose from "../../assets/icons/close.svg";
import { Button } from "../ui/Button";
import ButtonAmount from "../ui/ButtonAmount";
import VariantSelect from "./VariantsSelect";
import { useCart } from "../../context/CartContext";
import { useNavigate, useParams } from "react-router-dom";

function CoPopup({ seller, product, onClose, isOpen, mode }) {
  // if (!isOpen) return null;
  const navigate = useNavigate();
  const { sellerId } = useParams();
  const { addCart } = useCart();
  const [variant, setVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const onVariantChange = (value) => {
    setVariant(() => value);
  };
  const onQuantityChange = (value) => {
    setQuantity(() => value);
  };
  const handleClick = () => {
    if (mode == "cart") {
      addCart(product, variant, quantity);
      onClose();
    } else {
      navigate(`/${sellerId}/checkout`);
    }
  };

  // console.log(product, variant);

  return (
    <div className={`fixed bottom-0 w-full xs:w-xl h-full transition-all   ${isOpen ? "" : "translate-y-full opacity-0"}`}>
      <div className={`absolute bottom-0 left-0 w-full h-full bg-dark/40 `}></div>

      <div className={`absolute bottom-0 left-0 bg-light w-full rounded-t-2xl transition-all duration-300 `}>
        <div className="h-1 w-16 bg-neutral-300 mx-auto my-2"></div>

        <div className="flex justify-between mx-4 py-4">
          <div className="flex items-center gap-4">
            <img src={seller.profile_image} alt="" className="aspect-square object-cover rounded-full border-2 w-10" />
            <div>
              <p className="font-semibold text-lg">{seller.name}</p>
              <p className="text-xs text-textneutral">{seller.id}</p>
            </div>
          </div>
          <button onClick={onClose} className="cursor-pointer">
            <img src={iconClose} alt="" className="w-8" />
          </button>
        </div>

        <div className="m-4 flex items-end gap-2">
          <img src={product.images[0]} alt="" className="aspect-square object-cover w-24 border border-textneutral rounded-lg" />
          <div className="">
            <p className=" font-semibold">{product.name}</p>
            <p className="text-xl font-semibold mb-1">Rp{product.price.toLocaleString("id-ID")}</p>
            <p className="text-xs ">Stock: {product.stock}</p>
          </div>
        </div>

        <hr className="my-8 mx-4 border-textneutral" />

        {product.variants.length > 0 && (
          <div className="mx-4 mb-12">
            <VariantSelect product={product} onVariantChange={onVariantChange} />
          </div>
        )}

        <div className="bg-primary rounded-t-xl p-4 ">
          <div className="flex justify-between items-center">
            <p className="text-light font-semibold">Jumlah</p>
            <ButtonAmount onQuantityChange={onQuantityChange} />
          </div>

          <button type="button" className="w-full bg-light rounded-lg py-2 font-semibold text-sm mt-10 cursor-pointer" onClick={handleClick}>
            {mode == "cart" ? "Add to Cart" : "Checkout"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default CoPopup;
