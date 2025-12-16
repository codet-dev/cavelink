import UserLayout from "../layouts/UserLayout";
import UserHome from "../pages/user/UserHome";
import UserItem from "../pages/user/UserItem";
import UserCatalog from "../pages/user/UserCatalog";
import UserDescription from "../pages/user/UserDescription";
import UserCart from "../pages/user/UserCart";
import UserCheckout from "../pages/user/UserCheckout";
import UserPayment from "../pages/user/UserPayment";
import UserPaymentSucces from "../pages/user/UserPaymentSucces";

const userRouter = {
  path: "/",
  element: <UserLayout />,
  children: [
    {
      path: "/:sellerId",
      element: <UserHome />,
      children: [
        { index: true, element: <UserItem /> },
        { path: "/:sellerId/catalog", element: <UserCatalog /> },
        { path: "/:sellerId/catalog/:catalogId", element: <UserItem /> },
      ],
    },
    { path: "/:sellerId/cart", element: <UserCart /> },
    { path: "/:sellerId/checkout", element: <UserCheckout /> },
    { path: "/:sellerId/payment", element: <UserPayment /> },
    { path: "/:sellerId/success", element: <UserPaymentSucces /> },
    { path: "/:sellerId/:productId", element: <UserDescription /> },
  ],
};

export default userRouter;
