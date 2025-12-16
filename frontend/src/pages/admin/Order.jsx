import HomeTopBar from "../../components/shared/HomeTopBar";
import AdminBottomBar from "../../components/shared/AdminBottomBar";
import AdminSecondBar from "../../components/shared/AdminSecondBar";
import { ORDERLIST } from "../../assets";
import iconDown from "../../assets/icons/admin/icon_down.svg";
import SearchBar from "../../components/ui/SearchBar";
import NoneList from "../../components/shared/NoneList";

const SECONDBAR = [
  { title: "All Products", link: "", end: true },
  { title: "Catalog", link: "", end: false },
];

function Order() {
  return (
    <div className="pt-15 lg:pt-8">
      <HomeTopBar text={"Order"} />
      <h1 className="hidden md:block px-8 font-bold text-2xl">Order</h1>

      <div className="px-4 md:px-8 lg:flex lg:gap-4">
        <SearchBar variant="outline" rounded="full" className={"mt-4"} />
        {/* <AdminSecondBar data={SECONDBAR} className={""} /> */}
      </div>

      <div className="px-4 md:px-8 mt-4 lg:mt-8">
        {SECONDBAR.length ? (
          <div className="w-full overflow-x-auto rounded-xl">
            <table className=" min-w-[700px] md:min-w-full text-sm text-center">
              <thead>
                <tr className=" rounded-lg">
                  <th className="p-4 max-w-20">Number Order</th>
                  <th className="p-4">Buyer</th>
                  <th className="p-4">Product</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Total</th>
                </tr>
              </thead>
              <tbody className="">
                {ORDERLIST.map((data) => (
                  <tr key={data.order_id} className="border-t border-neutral-300 text-center">
                    <td className="py-2 px-4 text-left">
                      <p className="">{data.order_id}</p>
                      <p className="text-xs text-textneutral">{data.date}</p>
                    </td>
                    <td className="py-2 px-4">{data.name.length > 15 ? data.name.slice(0, 15) + "..." : data.name}</td>
                    <td className="py-2 px-4 ">
                      <p className="">{data.products.length} Product</p>
                      <div className="flex justify-center gap-1">
                        {data.products
                          .map((item, index) => <img src={item.images[0]} alt="" className="w-8 h-8 aspect-square border rounded border-neutral-300 object-cover" key={index} />)
                          .slice(0, 2)}
                        <img src={iconDown} alt="" className="w-4" />
                      </div>
                    </td>
                    <td className="py-2 px-4">{data.order_status}</td>
                    <td className="py-2 px-4">Rp{data.total_payment.toLocaleString("id-ID")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <NoneList text={"No Order Yet"} />
        )}
      </div>

      <AdminBottomBar />
    </div>
  );
}
export default Order;
