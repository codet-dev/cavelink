import BdBar from "../../components/shared/BdBar";
import icon_doneringgreen from "../../assets/icons/admin/icon_doneringgreen.svg";

const HISTORY = [
  {
    status: true,
    date: "2025-09-10T09:30:00Z",
    amount: 1000000,
    account: "BCA7450213091",
    reference: "20250930BMRIIDJA010O0223277237",
  },
  {
    status: true,
    date: "2025-09-13T09:30:00Z",
    amount: 2000000,
    account: "BCA7450213091",
    reference: "20250930BMRIIDJA010O0223277237",
  },
];

function Revenue() {
  return (
    <>
      <BdBar text={"Revenue"} size={"lg"} className={"md:hidden"} />
      <h1 className="hidden md:block px-8 font-bold text-2xl md:pt-8">Revenue</h1>

      <div className="p-4 md:px-8">
        <h2 className="font-semibold text-xl my-4">Funds</h2>
        <div className="lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="bg-primary text-light rounded-xl p-4 shadow-md">
            <p className="text-xl">Amount</p>
            <p className="text-2xl mt-2 font-semibold">Rp1.500.000.000</p>
            <p className="text-xs mt-10 text-neutral-200">Last synced: Sep 12, 2025, 06:00 AM (GMT+7)</p>
          </div>
          <div className="bg-primary text-light rounded-xl p-4 pb-16 mt-4 lg:mt-0 shadow-md">
            <p className="text-xl">Bank Account</p>
            <p className="text-2xl mt-2 font-semibold">BCA 7450213091</p>
          </div>
        </div>
      </div>

      <div className="p-4 md:px-8">
        <h2 className="font-semibold text-xl my-4">Funds</h2>

        <div className="overflow-hidden  w-full rounded-xl border shadow-md">
          <div className="overflow-x-auto">
            <table className="table-auto min-w-[800px] lg:min-w-[1000px] xl:w-full">
              <thead className="">
                <tr className=" text-light font-semibold rounded-xl">
                  <th className="p-4 bg-[#0D47A1]">Status</th>
                  <th className="p-4 bg-[#1565C0]">Date & Time</th>
                  <th className="p-4 bg-[#1976D2]">Amount</th>
                  <th className="p-4 bg-[#1E81E3]">Account</th>
                  <th className="p-4 bg-[#3c94eb]">Reference no.</th>
                </tr>
              </thead>
              <tbody>
                {HISTORY.map((data, index) => (
                  <tr className="border-t border-textneutral text-center text-sm" key={index}>
                    <td className="p-4">{data.status ? <img src={icon_doneringgreen} alt="" className="mx-auto w-6 h-6" /> : ""}</td>
                    <td className="px-4">{data.date}</td>
                    <td className="px-4">Rp{data.amount.toLocaleString("id-ID")}</td>
                    <td className="px-4">{data.account}</td>
                    <td className="px-4">{data.reference}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default Revenue;
