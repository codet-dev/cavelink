import { SELLERDATA } from "../../assets";

import cart from "../../assets/icons/cart.svg";
import whatsApp from "../../assets/icons/whatsapp_flat.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { numberFormat } from "../../api/numberFormat";
import CoPopup from "../../components/shared/CoPopup";
import VariantSelect from "../../components/shared/VariantsSelect";
import { useState } from "react";
import ImageSlider from "../../components/ui/ImageSlider";
import ButtonBack from "../../components/ui/ButtonBack";

function UserDescription() {
  // const navigate = useNavigate();
  const { sellerId, productId } = useParams();
  const proId = parseInt(productId, 10);
  const seller = SELLERDATA;
  const product = SELLERDATA.products.find((item) => item.id == proId);
  const [popup, setPopup] = useState(null);

  return (
    <section className="relative bg-light">
      <div className="z-10 flex justify-between w-full px-4 h-12 absolute top-4 left-0">
        <ButtonBack className={"w-5"} />
        <Link to={`/${sellerId}/cart`}>
          <img src={cart} alt="" className="rounded-full p-2 border" />
        </Link>
      </div>

      <ImageSlider images={product.images} />

      <div className="p-4 mb-32">
        <h2 className="text-3xl font-semibold mt-2">Rp{product.price.toLocaleString("id-ID")}</h2>
        <h1 className="font-semibold text-lg mt-1">{product.name}</h1>
        <hr className="mt-2 mb-4 border-neutral-400" />

        <div className="flex items-center gap-4">
          <div className="border border-neutral-500 rounded w-fit py-1 px-2 text-xs">
            ★ {product.rating} <span className="text-textneutral">({numberFormat(product.ratingSum)})</span>
          </div>
          <span className="font-bold">ᐧ</span>
          <div className="text-sm text-textneutral">{numberFormat(product.sold)} sold</div>
        </div>

        <h3 className="font-semibold mt-8 mb-4">Description</h3>
        <p>{product.description}</p>

        {product.variants.length > 0 && <VariantSelect product={product} classname={"mt-8"} />}
      </div>

      <div className="fixed bottom-4  w-full max-w-xl h-16 ">
        <div className="h-full mx-4 border-l border-y rounded-xl flex bg-light shadow-xl ">
          <div className="flex w-2/3 h-full py-2">
            <a className="w-1/2 border-r flex justify-center items-center cursor-pointer" href={seller.sosmed.whatsapp + ""} target="_blank">
              <img src={whatsApp} alt="" className="h-2/3" />
            </a>
            <button className="w-1/2 flex justify-center items-center cursor-pointer" onClick={() => setPopup("cart")}>
              <img src={cart} alt="" className="h-2/3" />
            </button>
          </div>
          <button className="font-bold w-1/3 border-l bg-primary text-light rounded-xl  cursor-pointer" onClick={() => setPopup("buy")}>
            Buy
          </button>
        </div>
      </div>

      <CoPopup seller={seller} product={product} mode={popup} isOpen={popup !== null} onClose={() => setPopup(null)} />
    </section>
  );
}

export default UserDescription;
