import Logo from "../../assets/icons/Logo.svg";

function Footer() {
  return (
    <footer className="flex justify-center gap-4 py-12 bg-light rounded-t-2xl mt-24 items-center">
      <img src={Logo} alt="" className="w-12 aspect-square rounded-full border border-textneutral p-1 bg-neutral-300" />
      <h6 className="font-semibold text-xl">Join to cavelink</h6>
    </footer>
  );
}

export default Footer;
