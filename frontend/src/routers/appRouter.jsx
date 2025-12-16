import { createBrowserRouter } from "react-router-dom";

import landingRouter from "./landingRouter";
import authRouter from "./authRouter";
import adminRouter from "./adminRouter";
import userRouter from "./userRouter";
import TestLayout from "../layouts/TestLayout";
import ErrorPage from "../pages/ErrorElement";

export const appRouter = createBrowserRouter([
  {
    path: "/test",
    element: <TestLayout />,
    errorElement: <ErrorPage />,
  },
  landingRouter,
  authRouter,
  adminRouter,
  userRouter,
]);
