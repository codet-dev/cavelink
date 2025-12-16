import { Button } from "../../components/ui/Button";
import { Heading } from "../../components/ui/Heading";
import { Input } from "../../components/ui/Input";

import { useState } from "react";
// import profile from "../../assets/images/onepiece.jpg";
import { SubmitFunction } from "../../api/submitFunction";

function MakeProfile() {
  const [preview, setPreview] = useState(null);
  const handleImage = (e) => {
    const file = e.target?.files?.[0]; // pakai optional chaining
    if (!file) return; // berhenti kalau tidak ada file
    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  return (
    <section className="">
      <Heading text={"Make your business profile"} subtext={"Add your profile image, name, and bio"} />

      <form className="mx-4 xs:w-md" onSubmit={SubmitFunction("/admin")}>
        <div
          className={`relative w-32 aspect-square rounded-full overflow-hidden mx-auto border-1`}
          style={{ backgroundImage: `url(${preview})`, backgroundPosition: "center", backgroundSize: "cover" }}
        >
          <input name="profile_image" type="file" accept="image/*" className="w-full h-full bg-neutral-400 opacity-0 rounded-full" required onChange={handleImage} />
        </div>
        <Input variant="outline" placeholder={"Display name"} name={"display_name"} type={"text"} className={"mt-4"} />

        <textarea name="bio" className="border-1 h-40 px-4 py-3 rounded-lg w-full mt-4 resize-none" placeholder="Bio" maxLength={200}></textarea>

        <Button text={"Continue"} className={"mt-8"} type="submit" />
      </form>
    </section>
  );
}

export default MakeProfile;
