import { Outlet, useLocation } from "react-router-dom";

import logo from "@/assets/icons/Logo.svg";

function AuthLayout() {
  const location = useLocation();
  const basePath = location.pathname;
  console.log(basePath);
  let progres = "";

  if (basePath == "/auth") {
    progres = "w-1/5";
  }
  if (basePath == "/auth/signup") {
    progres = "w-2/5";
  }
  if (basePath == "/auth/addconnection") {
    progres = "w-3/5";
  }
  if (basePath == "/auth/makeprofile") {
    progres = "w-4/5";
  }

  return (
    <div className="px-8 py-16 xs:py-8 min-h-dvh flex flex-col justify-between items-center text-center">
      <div className="w-full">
        {/* <img src={logo} alt="" /> */}
        <h1 className="font-semibold text-xl text-left">Cavelink</h1>
      </div>

      <div className="xs:w-md">
        <Outlet />
      </div>

      <div className="w-1/2 h-1 xs:w-1/4  mb-8 mx-auto bg-neutral-300 rounded-full overflow-x-hidden">
        <div className={`${progres} h-full bg-primary`}></div>
      </div>
    </div>
  );
}

export default AuthLayout;
