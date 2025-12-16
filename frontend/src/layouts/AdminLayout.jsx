import { Helmet } from "react-helmet-async";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../components/shared/Loader";

import HomeTopBar from "../components/shared/HomeTopBar";
import TitleTopBar from "../components/shared/TitleTopBar";
import BdBar from "../components/shared/BdBar";
import AdminBottomBar from "../components/shared/AdminBottomBar";
import AdminSideBar from "../components/shared/AdminSideBar";

import { ADMINHOME } from "../assets";

function AdminLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state == "loading";
  return (
    <>
      <Helmet>
        <title>Admin | Cavelink</title>
      </Helmet>

      {isLoading && <Loader />}

      <div className="md:flex md:h-screen md:bg-graybar md:p-4 md:gap-4 md:relative ">
        <AdminSideBar data={ADMINHOME} />

        <div className="md:overflow-hidden  md:bg-light md:flex-1 md:rounded-xl ">
          <div className="md:overflow-y-auto h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
