import HomeTopBar from "../../components/shared/HomeTopBar";
import AdminBottomBar from "../../components/shared/AdminBottomBar";
import SellerProfile from "../../components/shared/SellerProfile";
import { ADMINHOME } from "../../assets";
import iconFilter from "../../assets/icons/admin/icon_filter.svg";
import Loader from "../../components/shared/Loader";

function Home() {
  return (
    <>
      {/* <Loader /> */}

      <div className="pt-15 md:pt-0">
        <HomeTopBar text={"Cavelink"} />

        <SellerProfile data={ADMINHOME} className="px-4 py-6 md:hidden" />

        <div className="px-4 md:px-8 py-8 border-t md:border-none">
          <h2 className="font-semibold text-lg lg:text-2xl">Store Performance</h2>
          <div className="lg:flex md:gap-4">
            <div className="w-full flex text-light mt-4 bg-[#1976D2] rounded-xl overflow-hidden shadow-bottom">
              <div className="bg-[#1565C0] rounded-xl  flex w-2/3">
                <div className=" bg-[#0D47A1] w-1/2 rounded-r-xl ">
                  <p className="text-sm my-4 mx-4 font-semibold">New Orders</p>
                  <p className="text-2xl font-bold mx-4 mt-8 mb-6">{ADMINHOME.new_order}</p>
                </div>
                <div className="">
                  <p className="text-sm my-4 mx-4 font-semibold">On Proccess</p>
                  <p className="text-2xl font-bold mx-4 mt-8 mb-6">{ADMINHOME.proccess_order}</p>
                </div>
              </div>
              <div className="">
                <p className="text-sm my-4 mx-4 font-semibold">Shipping</p>
                <p className="text-2xl font-bold mx-4 mt-8 mb-6">{ADMINHOME.shipping_order}</p>
              </div>
            </div>

            <div className="w-full flex text-light mt-4 bg-[#1976D2] rounded-xl overflow-hidden shadow-bottom">
              <div className="bg-[#1565C0] rounded-xl  flex w-2/3">
                <div className="bg-[#0D47A1] w-1/2 rounded-r-xl ">
                  <p className="text-sm my-4 mx-4 font-semibold">Complete</p>
                  <p className="text-2xl font-bold mx-4 mt-8 mb-6">{ADMINHOME.complete_order}</p>
                </div>
                <div className="">
                  <p className="text-sm my-4 mx-4 font-semibold">Cancellation</p>
                  <p className="text-2xl font-bold mx-4 mt-8 mb-6">{ADMINHOME.cancel_order}</p>
                </div>
              </div>
              <div className="">
                <p className="text-sm my-4 mx-4 font-semibold">Returns</p>
                <p className="text-2xl font-bold mx-4 mt-8 mb-6">{ADMINHOME.return_order}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 md:px-8">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold lg:text-2xl">Sales Insights</h2>
            <div className="flex border rounded-full px-4 py-1 gap-2">
              <img src={iconFilter} alt="" />
              <span className="font-semibold">Filter</span>
            </div>
          </div>
          <div className="w-full lg:w-[30rem] flex text-light mt-6 bg-[#1565C0] rounded-xl overflow-hidden shadow-bottom">
            <div className="bg-[#0D47A1] w-1/3 rounded-r-xl">
              <p className="text-sm my-4 mx-4 font-semibold">Overall Sales</p>
              <p className="text-2xl font-bold mx-4 mt-8 mb-6">{ADMINHOME.overall_sales}</p>
            </div>

            <div className="w-2/3">
              <p className="text-sm my-4 mx-4 font-semibold">Revenue Estimate</p>
              <p className="text-2xl font-bold mx-4 mt-8 mb-6">Rp{ADMINHOME.revenue_estimate.toLocaleString("id-ID")}</p>
            </div>
          </div>
        </div>

        <div className="p-4 mt-4 mb-32 md:px-8">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold lg:text-2xl">Click Statistics</h2>
            <div className="flex border rounded-full px-4 py-1 gap-2">
              <img src={iconFilter} alt="" />
              <span className="font-semibold">Filter</span>
            </div>
          </div>
          <div className="w-full lg:w-[30rem] flex text-light mt-6 bg-[#79d7be] rounded-xl overflow-hidden shadow-bottom">
            <div className="bg-[#009990] w-1/3 rounded-r-xl">
              <p className="text-sm my-4 mx-4 font-semibold">Total Click</p>
              <p className="text-2xl font-bold mx-4 mt-8 mb-6">{ADMINHOME.click}</p>
            </div>

            <div className="w-2/3">
              <p className="text-sm my-4 mx-4 font-semibold">View Product</p>
              <p className="text-2xl font-bold mx-4 mt-8 mb-6">{ADMINHOME.view}</p>
            </div>
          </div>
        </div>

        <AdminBottomBar />
      </div>
    </>
  );
}
export default Home;
