import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";

import HomeTopBar from "../components/shared/HomeTopBar";
import BdBar from "../components/shared/BdBar";
import AdminBottomBar from "../components/shared/AdminBottomBar";

function TestLayout() {
  return (
    <>
      <Helmet>
        <title>Admin | Cavelink</title>
      </Helmet>

      <div>
        <HomeTopBar />
        <BdBar text={"Product"} size={"md"} variant={"gray"} />
        <AdminBottomBar />
      </div>
    </>
  );
}

export default TestLayout;
