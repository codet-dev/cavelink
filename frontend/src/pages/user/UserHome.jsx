import { SELLERDATA } from "../../assets/";

import { NavLink, Outlet, useParams } from "react-router-dom";
import Footer from "../../components/shared/Footer";
import Profile from "../../components/shared/Profile";

function UserHome() {
  const SELLER = SELLERDATA;
  const { sellerId } = useParams();

  return (
    <section className="bg-bgblue min-h-dvh flex flex-col">
      <Profile DATA={SELLER} />

      <div className="mx-4 flex-grow">
        <div className="bg-light w-full p-1 mt-4 mx-auto flex justify-center rounded-lg font-semibold text-center">
          <NavLink to={`/${sellerId}`} end className={({ isActive }) => `w-1/2 py-2 rounded-md ${isActive ? "bg-dark text-white" : "bg-light text-black"}`}>
            Item
          </NavLink>
          <NavLink to={`/${sellerId}/catalog`} className={({ isActive }) => `w-1/2 py-2 rounded-md ${isActive ? "bg-dark text-white" : "bg-light text-black"}`}>
            Catalog
          </NavLink>
        </div>

        {/* <div className="grid grid-cols-9 w-full rounded-lg border bg-light overflow-hidden text-center my-4">
          <p className="col-span-3 py-3 bg-dark text-light rounded-lg">Item</p>
          <p className="col-span-3 py-3">Catalog</p>
          <p className="py-3 border-l rounded-lg">🔍</p>
          <p className="py-3 border-l rounded-lg">=</p>
          <p className="py-3 border-l rounded-lg">🛒</p>
        </div> */}
        {/* <div className="grid grid-cols-9 w-full rounded-lg border bg-light overflow-hidden text-center my-4">
          <p className="py-3 border-l ">〈</p>
          <input type="text" className="py-3 col-span-7 px-2 border-x rounded-lg " placeholder="Search" />
          <p className="py-3 border-r rounded-lg">🔍</p>
        </div> */}

        <Outlet />
      </div>

      <Footer />
    </section>
  );
}

export default UserHome;
