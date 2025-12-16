import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../components/shared/Loader";
import { Helmet } from "react-helmet-async";

function UserLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state == "loading";
  return (
    <>
      <Helmet>
        <title>Cavelink</title>
      </Helmet>

      <div className="bg-sky-600  xs:py-10">
        <div className="min-h-dvh bg-light xs:mx-auto xs:rounded-2xl xs:shadow-2xl overflow-hidden xs:w-xl ">
          {isLoading && <Loader />}
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default UserLayout;
