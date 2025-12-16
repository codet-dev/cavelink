import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routers/appRouter";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      {/* <div className="App"> */}
      <CartProvider>
        <RouterProvider router={appRouter}></RouterProvider>
      </CartProvider>
      {/* </div> */}
    </>
  );
}

export default App;
