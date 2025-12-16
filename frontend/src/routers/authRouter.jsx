import AuthLayout from "../layouts/AuthLayout";
import SignUp from "../pages/auth/SignUp";
import SignIn from "../pages/auth/SignIn";
import InputUsername from "../pages/auth/InputUsername";
import VerificationCode from "../pages/auth/VerificationCode";
import AddConnection from "../pages/auth/AddConnection";
import MakeProfile from "../pages/auth/MakeProfile";
import ForgotPassword from "../pages/auth/ForgotPassword";

const authRouter = {
  path: "/auth",
  element: <AuthLayout />,
  children: [
    { index: true, element: <InputUsername /> },
    { path: "/auth/signup", element: <SignUp /> },
    { path: "/auth/signin", element: <SignIn /> },
    { path: "/auth/forgotpassword", element: <ForgotPassword /> },
    { path: "/auth/addconnection", element: <AddConnection /> },
    { path: "/auth/makeprofile", element: <MakeProfile /> },
  ],
};

export default authRouter;
