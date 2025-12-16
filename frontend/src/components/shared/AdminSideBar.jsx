import SellerProfile from "./SellerProfile";
import iconHome from "../../assets/icons/admin/icon_home.svg";
import iconProduct from "../../assets/icons/admin/icon_product.svg";
import iconOrder from "../../assets/icons/admin/icon_order.svg";
import iconTheme from "../../assets/icons/admin/icon_theme.svg";
import iconDown from "../../assets/icons/admin/icon_down.svg";
import iconAccount from "../../assets/icons/admin/icon_account.svg";
import iconAddress from "../../assets/icons/admin/icon_address.svg";
import iconRevenue from "../../assets/icons/admin/icon_revenue.svg";
import iconLogout from "../../assets/icons/admin/icon_logout.svg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const BARDATA = [
  {
    title: "Home",
    icon: iconHome,
    link: "/admin",
    end: true,
  },
  {
    title: "Product",
    icon: iconProduct,
    link: "/admin/product",
    end: false,
  },
  {
    title: "Order",
    icon: iconOrder,
    link: "/admin/order",
    end: false,
  },
  {
    title: "Theme",
    icon: iconTheme,
    link: "/admin/theme",
    end: false,
  },
];

function AdminSideBar({ data }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <aside className="hidden md:block bg-light w-54 rounded-xl p-2">
      <div className="relative" onMouseEnter={() => setMenuOpen(true)} onMouseLeave={() => setMenuOpen(false)} onClick={() => setMenuOpen((open) => !open)}>
        <div className="p-2 flex justify-between hover:bg-neutral-300 rounded-lg transition duration-300 cursor-pointer">
          <div className="flex it1ems-center gap-3 ">
            <img src={data.profile_image} alt="" className="w-8 h-8 aspect-square rounded-full object-cover border" />
            <div className="">
              <p className="font-semibold text-xs">{data.name}</p>
              <p className="text-[10px] text-textneutral">{data.id}</p>
            </div>
          </div>
          <img src={iconDown} alt="" className="" />
        </div>
        <div
          className={`absolute top-12 left-0 bg-white rounded-lg w-full text-xs font-semibold border border-neutral-200 shadow-lg transform origin-top transition-all duration-300 ${
            menuOpen ? "" : "max-w-0 scale-y-0 opacity-0"
          }`}
        >
          <div className="p-2">
            <Link to={"/admin/account"} className="flex gap-4 hover:bg-neutral-200 p-2 rounded-lg transition-colors">
              <img src={iconAccount} alt="" className="w-4" />
              Account
            </Link>
            <Link to={"/admin/address"} className="flex gap-4 hover:bg-neutral-200 p-2 rounded-lg transition-colors mt-1">
              <img src={iconAddress} alt="" className="w-4" />
              Address
            </Link>
          </div>
          <div className="p-2 border-t border-neutral-300">
            <Link to={"/admin/revenue"} className="flex gap-4 hover:bg-neutral-200 p-2 rounded-lg transition-colors">
              <img src={iconRevenue} alt="" className="w-4" />
              Revenue
            </Link>
          </div>
          <div className="p-2 border-t border-neutral-300">
            <Link to={"/"} className="flex gap-4 hover:bg-neutral-200 p-2 rounded-lg transition-colors">
              <img src={iconLogout} alt="" className="w-4" />
              Logout
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16 text-sm">
        {BARDATA.map((bar) => (
          <NavLink to={bar.link} className={({ isActive }) => `flex gap-4 items-center p-3 rounded-lg ${isActive ? "bg-neutral-300" : ""}`} key={bar.title} end={bar.end}>
            <img src={bar.icon} alt="" className="w-6 h-6" />
            <p className="">{bar.title}</p>
          </NavLink>
        ))}
      </div>
    </aside>
  );
}
export default AdminSideBar;
