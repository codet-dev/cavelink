import BdBar from "../../components/shared/BdBar";
import { Button } from "../../components/ui/Button";
import iconAddSolid from "../../assets/icons/admin/icon_add_solid.svg";
import { Link } from "react-router-dom";
import { ADDRESS } from "../../assets";

function Address() {
  return (
    <>
      <BdBar text={"Your Address"} size={"lg"} className={"md:hidden "} />
      <h1 className="hidden md:block px-8 font-bold text-2xl md:pt-8">Your Address</h1>

      <div className="p-4 md:px-8">
        <p className="font-semibold text-textneutral md:hidden">Address</p>

        {ADDRESS.map((data, index) => (
          <div className="relative border rounded-xl text-sm p-2 h-32 mt-4" key={index}>
            <div className="flex">
              <p className="font-semibold border-r border-textneutral pr-4">{data.name}</p>
              <p className="pl-4">{data.phonenumber}</p>
            </div>
            <p className="border-t border-textneutral mt-1 pt-1">
              {data.landmark}, {data.village}, {data.district}, {data.regency}, {data.province}, {data.postalcode}
            </p>
            {data.main && <p className="absolute text-blue-800 border border-blue-800 rounded text-xs bottom-2 right-2 px-2 py-[2px]">Main</p>}
          </div>
        ))}
      </div>

      <Link to={"/admin/add-address"} className="flex mx-4 mt-4 lg:w-1/3 md:mx-8">
        <Button icon={iconAddSolid} text="Add new address" variant="fillPrimary" size="lg" rounded="lg" />
      </Link>
    </>
  );
}
export default Address;
