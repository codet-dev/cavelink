import iconDonering from "../../assets/icons/payment/icon_donering.svg";
import iconDoneringgreen from "../../assets/icons/payment/icon_doneringgreen.svg";
import iconGrid from "../../assets/icons/payment/icon_grid.png";
import iconCat from "../../assets/icons/payment/icon_cat.svg";
import { Button } from "../../components/ui/Button";
import BottomButton from "../../components/shared/BottomButton";
import { useParams } from "react-router-dom";

function UserPaymentSucces() {
  const { sellerId } = useParams();
  const parentClass = "flex justify-between text-sm mb-2";
  const leftClass = "";
  const rightClass = "font-semibold";

  return (
    <main className="relative pb-80">
      <div className="relative bg-primary rounded-b-[25%] flex justify-center items-center h-[32rem] overflow-x-hidden">
        <div className="absolute w-[28rem] aspect-square bg-[#9cceff] rounded-full -top-16 left-0 flex justify-center items-center">
          <div className="w-3/4 aspect-square bg-[#1976d2] rounded-full flex justify-center items-center">
            <div className="w-2/3 aspect-square bg-[#1565c0] rounded-full flex justify-center items-center">
              <img src={iconDonering} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-72 w-full p-6 ">
        <h1 className="text-center text-xl text-light font-bold  text-shadow">Your Payment Successfull!</h1>
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
              <li className="font-semibold">
                <span>987123450001</span>
              </li>
              <li className="">Total Bill</li>
              <li className="font-semibold flex gap-2">
                <span>Rp388.500</span>
                <img src={iconDoneringgreen} alt="" />
              </li>
            </ul>
            <img src={iconCat} alt="" className="absolute bottom-0 right-0" />
          </div>
          <div className="flex justify-between bg-primary text-light rounded-lg p-4 mt-4">
            <span className="font-semibold">Payment Succesfull</span>
            <span className="font-bold">Rp388.500</span>
          </div>
        </div>
      </div>

      <BottomButton text={"Back to Home"} link={`/${sellerId}`} />
    </main>
  );
}
export default UserPaymentSucces;
