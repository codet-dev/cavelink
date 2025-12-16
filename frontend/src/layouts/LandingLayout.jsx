import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../components/shared/Loader";

function LandingLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state == "loading";
  return (
    <>
      {isLoading && <Loader />}
      <Outlet />
    </>
  );
}

export default LandingLayout;
