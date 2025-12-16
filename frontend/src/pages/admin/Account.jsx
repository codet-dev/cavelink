import BdBar from "../../components/shared/BdBar";
import { ACCOUNT } from "../../assets";
import { Button } from "../../components/ui/Button";

function Account() {
  return (
    <>
      <BdBar text={"Your Account"} size={"lg"} className={"md:hidden "} />
      <h1 className="hidden md:block px-8 font-bold text-2xl md:pt-8">Your Account</h1>

      <form className="p-4 md:px-8 max-w-[30rem]">
        <p className="font-semibold text-textneutral md:hidden">My Information</p>

        <div className="relative border rounded-xl text-sm p-4  mt-4">
          <label htmlFor="username" className="text-textneutral text-[12px]">
            username
          </label>
          <input id="username" type="text" className="py-3 border-b w-full focus:outline-none -mt-2 mb-3" required placeholder={ACCOUNT.username} />
          <label htmlFor="email" className="text-textneutral text-[12px] ">
            Email
          </label>
          <input id="email" type="email" className="py-3 border-b w-full focus:outline-none -mt-2 mb-3" required placeholder={ACCOUNT.email} />
          <label htmlFor="phonenumber" className="text-textneutral text-[12px] ">
            Phone number
          </label>
          <input id="phonenumber" type="number" className="py-3 border-b w-full focus:outline-none -mt-2 mb-3" required placeholder={ACCOUNT.phonenumber} />

          <p className="text-textneutral text-[12px]">you can’t change your email but you can change your username every 1 month</p>
        </div>
        <Button text={"Save Changes"} rounded="lg" size="lg" className={"mt-8 md:w-2/3"} />
      </form>
    </>
  );
}
export default Account;
