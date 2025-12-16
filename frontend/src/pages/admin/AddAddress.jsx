import BdBar from "../../components/shared/BdBar";
import BottomButton from "../../components/shared/BottomButton";
import { useEffect, useState } from "react";
import { Input } from "../../components/ui/Input";
import Select from "../../components/shared/Select";
import { Button } from "../../components/ui/Button";

function AddAddress() {
  const variant = "f";
  const inputClassname = "mt-1 text-sm  focus:outline-none";
  const labelClassname = "text-xs text-neutral-400";

  const [provinces, setProvinces] = useState([]);
  const [regencies, setRegencies] = useState([]);
  const [districts, setDistrics] = useState([]);
  const [villages, setVillages] = useState([]);

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedRegency, setSelectedRegency] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");

  useEffect(() => {
    fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`)
      .then((response) => response.json())
      .then((provinces) => setProvinces(provinces));
  }, []);
  useEffect(() => {
    if (selectedProvince) {
      fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvince}.json`)
        .then((response) => response.json())
        .then((regencies) => setRegencies(regencies));
    }
  }, [selectedProvince]);
  useEffect(() => {
    if (selectedRegency) {
      fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedRegency}.json`)
        .then((response) => response.json())
        .then((districts) => setDistrics(districts));
    }
  }, [selectedRegency]);
  useEffect(() => {
    if (selectedDistrict) {
      fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${selectedDistrict}.json`)
        .then((response) => response.json())
        .then((villages) => setVillages(villages));
    }
  }, [selectedDistrict]);

  return (
    <>
      <BdBar text={"New Address"} size={"lg"} className={"md:hidden"} />
      <h1 className="hidden md:block px-8 font-bold text-2xl md:pt-8">New Address</h1>

      <form className=" m-4 md:m-8 mt-4 md:max-w-[30rem]">
        <div className="border rounded-xl border-textneutral  p-2 ">
          <h2 className="font-semibold text-textneutral">Address</h2>
          <div className="flex flex-col gap-2 mt-8">
            <div className="">
              <label htmlFor="name" className={labelClassname}>
                Full Name
              </label>
              <Input id="name" type={"text"} placeholder={"Full name"} variant={variant} className={inputClassname} />
            </div>

            <div className="">
              <label htmlFor="phonenumber" className={labelClassname}>
                Phone Number
              </label>
              <Input id="phonenumber" type={"number"} placeholder={"+62"} variant={variant} className={inputClassname} />
            </div>

            <div className="">
              <label htmlFor="province" className={labelClassname}>
                Province/Regency/District/Village
              </label>
              <Select name="province" id="province" options={provinces} setSelected={setSelectedProvince} disabled={false} variant="" className={"focus:outline-none"} />
            </div>

            <div className="">
              <Select name="regency" id="regency" options={regencies} setSelected={setSelectedRegency} disabled={!selectedProvince} variant="" className={"focus:outline-none"} />
            </div>

            <div className="">
              <Select name="district" id="district" options={districts} setSelected={setSelectedDistrict} disabled={!selectedRegency} variant="" className={"focus:outline-none"} />
            </div>

            <div className="">
              <Select name="village" id="village" options={villages} setSelected={setSelectedVillage} disabled={!selectedDistrict} variant="" className={"focus:outline-none"} />
            </div>

            <div className="">
              <label htmlFor="postalcode" className={labelClassname}>
                Enter a valid postalcode
              </label>
              <Input id="postalcode" type={"number"} placeholder={"Postal Code"} variant={variant} className={inputClassname} disabled={!selectedVillage} />
            </div>

            <div className="">
              <label htmlFor="landmark" className={labelClassname}>
                Enter your address landmark
              </label>
              <Input id="landmark" type={"text"} placeholder={"street number, house number, etc"} variant={variant} className={inputClassname} />
            </div>
          </div>
        </div>
        <Button type="submit" text={"Save address"} size="lg" rounded="xl" className={"hidden md:block mt-4"} />
      </form>

      <BottomButton text={"Save address"} className={"md:hidden"} />
    </>
  );
}
export default AddAddress;
