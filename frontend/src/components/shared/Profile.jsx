import waFlat from "../../assets/icons/whatsapp_flat.svg";
import igFlat from "../../assets/icons/instagram_flat.svg";
import ttFlat from "../../assets/icons/tiktok_flat.svg";

function Profile({ DATA, IMAGE }) {
  return (
    <header className="text-center pt-8 pb-4 bg-light rounded-b-2xl">
      <img src={IMAGE ? IMAGE : DATA.profile_image} alt="" className="aspect-square object-cover w-24 border-2 rounded-full mx-auto" />
      <h1 className="text-3xl mt-4 font-semibold">{DATA.name}</h1>
      <p className="text-textneutral mt-2">{DATA.bio}</p>
      <ul className="flex justify-center gap-6 mt-2">
        {DATA.sosmed.instagram && (
          <li>
            <a href={DATA.sosmed.instagram} target="_blank">
              <img src={igFlat} alt="" />
            </a>
          </li>
        )}

        {DATA.sosmed.whatsapp && (
          <li>
            <a href={DATA.sosmed.whatsapp} target="_blank">
              <img src={waFlat} alt="" />
            </a>
          </li>
        )}

        {DATA.sosmed.tiktok && (
          <li>
            <a href={DATA.sosmed.instagram} target="_blank">
              <img src={ttFlat} alt="" />
            </a>
          </li>
        )}

        {DATA.sosmed.discord && (
          <li>
            <a href={DATA.sosmed.discord} target="_blank">
              {/* <img src={dcFlat} alt="" /> */}
            </a>
          </li>
        )}
      </ul>
    </header>
  );
}
export default Profile;
