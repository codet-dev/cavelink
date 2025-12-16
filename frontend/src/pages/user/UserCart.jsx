import { SELLERDATA, CARTPRODUCT } from "../../assets";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import BdBar from "../../components/shared/BdBar";
import Card2 from "../../components/ui/Card2";
import iconCart from "../../assets/icons/cart.svg";
import iconNext from "../../assets/icons/next-button.svg";

function UserCart() {
  const [cart, setCart] = useState(CARTPRODUCT);
  const navigate = useNavigate();
  const { sellerId } = useParams();

  const cartListProduct = cart.map((item) => {
    const product = SELLERDATA.products.find((p) => p.id === item.productId);
    return { ...item, product };
  });

  return (
    <main className="">
      <BdBar icon={iconCart} text={"Your Cart"} size={"lg"} />

      <div className="flex items-center gap-2 mx-4 border rounded-xl p-4">
        <img src={SELLERDATA.profile_image} alt="" className="w-8 h-8 aspect-square object-cover rounded-full border border-neutral-500" />
        <div className="">
          <p className="text-sm font-semibold">{SELLERDATA.name}</p>
          <p className="text-xs">{SELLERDATA.id}</p>
        </div>
        <img src={iconNext} alt="" className="w-2 ml-2" />
      </div>

      <section className="mx-4 flex flex-col gap-2 mt-2">
        {cartListProduct.map((data) => (
          <div key={data.product.id}>
            <Card2 data={data.product} itemCart={data} />
          </div>
        ))}
      </section>

      <div className="fixed bottom-0 w-full max-w-xl rounded-t-2xl px-4 py-8 bg-primary flex justify-between items-center">
        <p className="text-light font-semibold text-2xl">Rp375.000</p>
        <button className="bg-light px-8 py-3 rounded-lg text-xs font-semibold cursor-pointer" onClick={() => navigate(`/${sellerId}/checkout`)}>
          Checkout ({cartListProduct.length})
        </button>
      </div>
    </main>
  );
}

export default UserCart;
