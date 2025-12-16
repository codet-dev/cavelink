import { useEffect, useState } from "react";
import { Input } from "../ui/Input";
import Select from "./Select";

function InputCustomerInfo() {
  const variant = "outline";
  const inputClassname = "mt-1 text-sm  border-neutral-400";
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
    <div className="flex flex-col gap-2">
      <div className="">
        <label htmlFor="name" className={labelClassname}>
          Enter customer name
        </label>
        <Input id="name" type={"text"} placeholder={"Full name"} variant={variant} className={inputClassname} />
      </div>

      <div className="">
        <label htmlFor="email" className={labelClassname}>
          Enter a valid email
        </label>
        <Input id="email" type={"email"} placeholder={"cavelink@gmail.com"} variant={variant} className={inputClassname} />
      </div>

      <div className="">
        <label htmlFor="phonenumber" className={labelClassname}>
          Enter a valid phone number
        </label>
        <Input id="phonenumber" type={"number"} placeholder={"+62"} variant={variant} className={inputClassname} />
      </div>

      <div className="">
        <label htmlFor="province" className={labelClassname}>
          Enter a valid province
        </label>
        <Select name="province" id="province" options={provinces} setSelected={setSelectedProvince} disabled={false} />
      </div>

      <div className="">
        <label htmlFor="regency" className={labelClassname}>
          Enter a valid regency
        </label>
        <Select name="regency" id="regency" options={regencies} setSelected={setSelectedRegency} disabled={!selectedProvince} />
      </div>

      <div className="">
        <label htmlFor="district" className={labelClassname}>
          Enter a valid district
        </label>
        <Select name="district" id="district" options={districts} setSelected={setSelectedDistrict} disabled={!selectedRegency} />
      </div>

      <div className="">
        <label htmlFor="village" className={labelClassname}>
          Enter a valid village
        </label>
        <Select name="village" id="village" options={villages} setSelected={setSelectedVillage} disabled={!selectedDistrict} />
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
  );
}
export default InputCustomerInfo;
