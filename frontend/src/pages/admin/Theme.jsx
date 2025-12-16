import AdminBottomBar from "../../components/shared/AdminBottomBar";
import HomeTopBar from "../../components/shared/HomeTopBar";
import { Input } from "../../components/ui/Input";
import { SOSMED } from "../../assets";
import { Button } from "../../components/ui/Button";

import Profile from "../../components/shared/Profile";
import { useState } from "react";

const THEME = {
  name: "Ishitaka Store",
  bio: "Thrift store",
  profile_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8cWJWb3GDFEqIIxb-TE6LW9VQcbkBZa2wlck3kZRU6gYMhHdIucDPnNBrXFulTjqaGXU&usqp=CAU",
  cover_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfVZQ0fIRF0CP1BKza7ZE8bB1DbOVUqQsBQ&s",
  sosmed: {
    instagram: "http://instagram.com/ademuchl17",
    whatsapp: "http://wa.me/+6285179721795",
    tiktok: "http://tiktok.com/@ademuchl17",
  },
};

function Theme() {
  const [preview, setPreview] = useState(null);
  const handleImage = (e) => {
    const file = e.target?.files?.[0]; // pakai optional chaining
    if (!file) return; // berhenti kalau tidak ada file
    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  return (
    <div className="pt-15 md:pt-8">
      <HomeTopBar text={"Theme"} />
      <h1 className="hidden md:block px-8 font-bold text-2xl">Theme</h1>

      <div className="lg:grid lg:grid-cols-2 lg:gap-4 pb-48">
        <div className="px-4 py-4 md:px-8">
          {/* DISPLAY NAME & BIO */}
          <label htmlFor="displayname" className="font-semibold">
            Display Name
          </label>
          <Input variant="outline" placeholder={"Ishitaka Store"} name={"displayname"} id={"displayname"} type={"text"} className={"mt-2 mb-4"} required={false} />

          <label htmlFor="bio" className="font-semibold">
            Bio
          </label>
          <textarea name="bio" id="bio" className="border-1 h-40 px-4 py-3 rounded-lg w-full mt-2 mb-4 resize-none" placeholder="Thhrift Store" maxLength={200}></textarea>

          <hr className="my-8" />

          {/* AVATAR & BANNER */}
          <label htmlFor="profile_image" className="font-semibold">
            Avatar
          </label>
          <div className="flex gap-2 pt-2 pb-4 text-sm">
            <div className="relative bg-primary text-white w-1/2 text-center py-2 rounded-lg font-semibold">
              Change Avatar
              <input type="file" accept="image/*" id="profile_image" className="absolute  w-full h-full left-0 top-0 opacity-0 cursor-pointer" onChange={handleImage} />
            </div>
            <button className="w-1/2 rounded-lg border py-2 font-semibold cursor-pointer">Remove Avatar</button>
          </div>

          <label htmlFor="cover_image" className="font-semibold">
            Banner
          </label>
          <div className="flex gap-2 pt-2 pb-4 text-sm">
            <div className="relative bg-primary text-white w-1/2 text-center py-2 rounded-lg font-semibold">
              Change Banner
              <input type="file" accept="image/*" id="cover_image" className="absolute  w-full h-full left-0 top-0 opacity-0 cursor-no-drop" disabled />
            </div>
            <button className="w-1/2 rounded-lg border py-2 font-semibold" disabled>
              Remove Banner
            </button>
          </div>

          {/* SOSMED */}
          <ul className="flex flex-col gap-2 mt-8">
            {SOSMED.map((data) => (
              <li className="flex gap-2" key={data.name}>
                <img src={data.icon} alt="" className="aspect-square" />
                <Input
                  name={data.name}
                  type={data.type}
                  variant="outline"
                  className={"text-sm"}
                  placeholder={data.value}
                  pattern="[A-Za-z0-9_]+"
                  minLength={data.minLength}
                  maxLength={data.maxLength}
                  required={false}
                />
              </li>
            ))}
          </ul>

          <Button text={"Save changes"} rounded="xl" className={"mt-16"} />
        </div>
        <div className="mx-4 mt-8 lg:mt-4">
          <p className="font-semibold">Store Preview</p>
          <div className="border rounded-2xl overflow-hidden mt-4 lg:mt-2 max-w-[25rem]">
            <Profile DATA={THEME} IMAGE={preview} />
          </div>
        </div>
      </div>

      <AdminBottomBar />
    </div>
  );
}
export default Theme;
