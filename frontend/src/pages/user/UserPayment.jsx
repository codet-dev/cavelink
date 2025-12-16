import paymentImage from "../../assets/images/payment_image.png";
import iconCopy from "../../assets/icons/payment/icon_copy.svg";
import iconUsertime from "../../assets/icons/payment/icon_usertime.svg";
import iconGrid from "../../assets/icons/payment/icon_grid.png";
import iconCat from "../../assets/icons/payment/icon_cat.svg";
import BottomButton from "../../components/shared/BottomButton";
import { useParams } from "react-router-dom";

function UserPayment() {
  const { sellerId } = useParams();
  const parentClass = "flex justify-between text-sm mb-2";
  const leftClass = "";
  const rightClass = "font-semibold";

  return (
    <main className="relative min-h-dvh pb-86">
      <div className=" w-full bg-primary rounded-b-[25%] flex justify-center items-center pt-16 pb-56">
        <img src={paymentImage} alt="" className="w-80" />
      </div>

      <div className="absolute top-72 w-full p-6">
        <div className="flex gap-4 items-center bg-dark p-4 rounded-xl shadow">
          <img src={iconUsertime} alt="" />
          <div className="text-light ">
            <p className="text-sm">Finish the payment before</p>
            <p className="font-semibold">22 October 2025, 12:30 Am</p>
          </div>
        </div>
        <div className="bg-light rounded-xl mt-6 p-4 border border-neutral-300 shadow-lg">
          <ul className="">
            <li className={parentClass}>
              <p className={leftClass}>Order ID</p>
              <p className={rightClass}>CA901945</p>
            </li>
            <li className={parentClass}>
              <p className={leftClass}>Orderer's Name</p>
              <p className={rightClass}>Codet Child</p>
            </li>
            <li className={parentClass}>
              <p className={leftClass}>Order Email</p>
              <p className={rightClass}>codet@gmail.com</p>
            </li>
            <li className={parentClass}>
              <p className={leftClass}>Phone Number</p>
              <p className={rightClass}>+8285123456789</p>
            </li>
          </ul>
          <div
            className="relative border rounded-lg mt-4 px-4 py-2 overflow-hidden"
            style={{ backgroundImage: `url(${iconGrid})`, backgroundSize: "auto 100%", backgroundRepeat: "no-repeat", backgroundPosition: "right center" }}
          >
            <ul className="text-sm flex flex-col gap-2 bg-right ">
              <li className="">Virtual Account Number</li>
              <li className="flex gap-4 font-semibold">
                <span>987123450001</span>
                <img src={iconCopy} alt="" />
              </li>
              <li className="">Total Bill</li>
              <li className="font-semibold">Rp388.500</li>
            </ul>
            <img src={iconCat} alt="" className="absolute bottom-0 right-0" />
          </div>
          <div className="flex justify-between bg-primary text-light rounded-lg p-4 mt-4">
            <span className="font-semibold">Total Payment</span>
            <span className="font-bold">Rp388.500</span>
          </div>
        </div>
      </div>

      <BottomButton text={"Done"} link={`/${sellerId}/success`} />
    </main>
  );
}
export default UserPayment;
