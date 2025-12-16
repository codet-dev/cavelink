import iconHome from "../../assets/icons/admin/icon_home.svg";
import iconProduct from "../../assets/icons/admin/icon_product.svg";
import iconOrder from "../../assets/icons/admin/icon_order.svg";
import iconTheme from "../../assets/icons/admin/icon_theme.svg";
import { NavLink } from "react-router-dom";

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

function AdminBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 bg-graybar border-t border-neutral-300 grid grid-cols-4 gap-4 w-full justify-evenly py-4 px-8 rounded-t-4xl shadow-top ">
      {BARDATA.map((data, index) => (
        <NavLink to={data.link} end={data.end} className={({ isActive }) => `py-2 rounded-lg ${isActive ? "bg-neutral-300" : ""}`} key={index}>
          <img src={data.icon} alt="" className="h-6 mx-auto" />
          <p className="text-sm mt-1 text-center">{data.title}</p>
        </NavLink>
      ))}
    </div>
  );
}
export default AdminBottomBar;
