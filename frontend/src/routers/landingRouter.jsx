import LandingLayout from "../layouts/LandingLayout";
import Home from "../pages/landing/Home";
import Terms from "../pages/landing/Terms";

const landingRouter = {
  path: "/",
  element: <LandingLayout />,
  children: [
    { index: true, element: <Home /> },
    { path: "/terms", element: <Terms /> },
  ],
};

export default landingRouter;
