import { SELLERDATA, CARTPRODUCT, BANK } from "../../assets";

import BdBar from "../../components/shared/BdBar";
import Card3 from "../../components/ui/Card3";
import InputCustomerInfo from "../../components/shared/InputCustomerInfo";
import iconCheckout from "../../assets/icons/checkout_icon.svg";
import iconNext from "../../assets/icons/next-button.svg";
import iconBoxBold from "../../assets/icons/box_bold.svg";
import { useNavigate, useParams } from "react-router-dom";

const SHIPPING = [
  {
    type: "Regular",
    description: "Estimated Arrival 1-3 days after ordering",
    price: 13500,
  },
  {
    type: "Economical",
    description: "Estimated Arrival 1-7 days after ordering",
    price: 6000,
  },
  {
    type: "Cargo",
    description: "Estimated Arrival 1-4 days after ordering",
    price: 8000,
  },
];

function UserCheckout() {
  const cart = CARTPRODUCT;
  const { sellerId } = useParams();
  const navigate = useNavigate();

  const cartListProduct = cart.map((item) => {
    const product = SELLERDATA.products.find((p) => p.id === item.productId);
    return { ...item, product };
  });

  return (
    <main className="">
      <BdBar icon={iconCheckout} text={"Checkout"} size={"lg"} />

      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault(); // biar tidak reload
          navigate(`/${sellerId}/payment`);
        }}
      >
        <section className="mx-4 border border-neutral-400 rounded-lg">
          <div className="flex items-center gap-2 p-4">
            <img src={SELLERDATA.profile_image} alt="" className="w-8 h-8 aspect-square object-cover rounded-full border border-neutral-500" />
            <div className="">
              <p className="text-sm font-semibold">{SELLERDATA.name}</p>
              <p className="text-xs">{SELLERDATA.id}</p>
            </div>
            <img src={iconNext} alt="" className="w-2 ml-2" />
          </div>

          <div className=" flex flex-col gap-2 mt-2">
            {cartListProduct.map((data) => (
              <div key={data.product.id}>
                <Card3 data={data.product} itemCart={data} />
                <hr className="mx-4 border-neutral-400" />
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center bg-primary mx-4 text-light px-3 py-2 rounded-lg my-4 ">
            <p>Total Produk</p>
            <p>x{cartListProduct.length}</p>
          </div>
        </section>

        <section className="mx-4 border  border-neutral-400 rounded-lg mt-4 overflow-hidden">
          <div className="bg-primary text-light flex py-4 px-4 gap-2">
            <img src={iconBoxBold} alt="" />
            <h3 className="font-semibold">Opsi Pengiriman</h3>
          </div>
          <div>
            {SHIPPING.map((data) => (
              <label className="flex items-center justify-between px-4 border-t  border-neutral-400 py-2 cursor-pointer" key={data.type}>
                <input
                  type="radio"
                  name="shipping"
                  value={data.type}
                  className="appearance-none w-4 h-4 border border-neutral-400 rounded-sm checked:bg-primary text-xs text-center font-semibold checked:text-light checked:after:content-['✓']"
                  required
                />
                <div>
                  <p className="font-semibold text-sm">{data.type}</p>
                  <p className="text-xs">{data.description}</p>
                </div>
                <p className="font-semibold">Rp{data.price.toLocaleString("id-ID")}</p>
              </label>
            ))}
          </div>
        </section>

        <section className="border  border-neutral-400 rounded-lg mx-4 mt-4 overflow-hidden">
          <div className="bg-primary text-light flex py-4 px-4 gap-2">
            <img src={iconBoxBold} alt="" />
            <h3 className="font-semibold">Opsi Pengiriman</h3>
          </div>
          <div>
            {BANK.map((data) => (
              <label key={data.name} className="flex justify-between items-center px-4 py-3 border-t  border-neutral-400 cursor-pointer">
                <div className="flex gap-4 items-center">
                  <img src={data.image} alt="" className="w-8 aspect-square" />
                  <p className="font-semibold">{data.name}</p>
                </div>
                <input
                  type="radio"
                  name="bank"
                  value={data.name}
                  className="appearance-none w-4 h-4 border border-neutral-400 rounded-sm checked:bg-primary text-xs text-center font-semibold checked:text-light checked:after:content-['✓']"
                  required
                />
              </label>
            ))}
          </div>
        </section>

        <section className="mx-4 mt-8">
          <h3 className="font-semibold mb-2">Customer Information</h3>
          <InputCustomerInfo />
        </section>

        <section className="mx-4 rounded-lg border border-neutral-400 overflow-hidden mt-12  shadow-md">
          <div className="bg-primary text-light  py-4 px-4 ">
            <h3 className="font-semibold">Payment Details</h3>
          </div>
          <ul className="p-4 text-sm font-semibold">
            <li className="flex justify-between items-center">
              <p className="">Order Subtotal</p>
              <p className="">Rp375.000</p>
            </li>
            <li className="flex justify-between items-center mt-3">
              <p className="">Shipping Subtotal</p>
              <p className="">Rp13.500</p>
            </li>
          </ul>
          <div className="flex justify-between items-center font-semibold p-4 border-t border-neutral-400">
            <p className="">Total Payment</p>
            <p className="">388.500</p>
          </div>
        </section>

        <section className="text-xs border border-neutral-400 mx-4 rounded-lg mt-8 shadow-md py-4">
          <label className="flex items-center gap-4 px-4 py-2">
            <input
              type="checkbox"
              name="agreement"
              value="terms"
              className="appearance-none w-4 h-4 aspect-square border border-neutral-400 rounded-sm checked:bg-primary text-xs text-center font-semibold checked:text-light checked:after:content-['✓']"
              required
            />
            <p>
              I agree to the <b>Term of Use</b>
            </p>
          </label>
          <label className="flex items-center px-4  gap-4 py-2">
            <input
              type="checkbox"
              name="agreement"
              value="subs"
              className="appearance-none w-4 h-4 aspect-square border border-neutral-400 rounded-sm checked:bg-primary text-xs text-center font-semibold checked:text-light checked:after:content-['✓']"
            />
            <p>I agree that my email and phone number may be used to send updates about my account, store link, templates, or service notices. I can unsubscribe from promotions anytime.</p>
          </label>
        </section>

        <section className="bg-primary rounded-t-2xl px-4 py-8 flex justify-between items-center mt-12">
          <div className="">
            <p className="text-light">Total</p>
            <p className="text-light font-semibold text-xl">Rp388.500</p>
          </div>
          <button type="" className=" bg-light rounded-lg py-3  px-6 font-semibold text-sm cursor-pointer">
            Go to Payment
          </button>
        </section>
      </form>
    </main>
  );
}

export default UserCheckout;
