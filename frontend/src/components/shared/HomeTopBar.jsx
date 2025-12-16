import { useState } from "react";
import iconMenu from "../../assets/icons/admin/icon_menu.svg";
import prevBtn from "../../assets/icons/prev-button.svg";
import iconNext from "../../assets/icons/admin/icon_next.svg";
import SellerProfile from "./SellerProfile";
import { SELLERDATA } from "../../assets/index";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";

function SettingList({ text, link }) {
  return (
    <Link to={link} className="flex justify-between items-center border rounded-lg p-4 font-semibold my-2">
      <p className="">{text}</p>
      <img src={iconNext} alt="" />
    </Link>
  );
}

function HomeTopBar({ text }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen((open) => !open);
  }
  const sidebar = isOpen ? "" : "translate-x-full";

  return (
    <>
      <div className="fixed md:hidden top-0 w-full bg-graybar z-50">
        <div className="flex justify-between items-center px-4 py-4  ">
          <h1 className="font-semibold">{text}</h1>
          <img src={iconMenu} alt="" className="w-7" onClick={handleClick} />
        </div>
        {/* <div className="bg-light h-4 rounded-t-2xl "></div> */}
      </div>
      <div className={`fixed xs:hidden top-0 w-full h-dvh bg-light z-50 transition-all duration-300 shadow-left ${sidebar}`}>
        <div className="flex px-4 gap-4 mt-8">
          <img src={prevBtn} alt="" className="p-2" onClick={handleClick} />
          <SellerProfile data={SELLERDATA} />
        </div>

        <div className="mt-8 p-4">
          <h2 className="font-semibold">Account Center</h2>
          <SettingList text={"Account Settings"} link={"/admin/account"} />
          <SettingList text={"Address"} link={"/admin/address"} />
        </div>
        <div className="p-4">
          <h2 className="font-semibold">Personal Customer</h2>
          <SettingList text={"Revenue"} link={"/admin/revenue"} />
        </div>

        <div className="px-4 absolute w-full bottom-12">
          <Button
            text={"Log out"}
            variant="fillPrimary"
            rounded="lg"
            size="xl"
            className={""}
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
      </div>
    </>
  );
}
export default HomeTopBar;
