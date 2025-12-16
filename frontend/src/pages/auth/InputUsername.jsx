import { NavLink } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Heading } from "../../components/ui/Heading";

import { SubmitFunction } from "../../api/submitFunction";

function InputUsername() {
  return (
    <form className="text-center" onSubmit={SubmitFunction("/auth/signup")}>
      <Heading text={"Welcome to Cavelink!"} />

      <p className="mt-4 text-neutral-500">Choose your username</p>
      <div className="text-left mt-8 relative">
        <div className="bg-neutral-200 px-4 py-3 rounded-lg">
          <span>cavelink.com/</span>
          <input name="username" type="text" placeholder="username" pattern="[A-Za-z0-9_]+" minLength={3} className="focus:outline-none w-fit" title="only letters, numbers, or underscore" required />
        </div>
        <span className="text-left mx-4 font-semibold text-red-400 text-sm absolute -bottom-6 hidden">username already taken</span>
      </div>
      <p className="text-neutral-500 mt-8 text-sm">By continuing, you agree to receive offers, updates from cavelink</p>

      <Button text={"Continue"} className={"mt-16"} link={"/auth/signup"} type="submit" />
      <p className="text-sm mt-6 mb-8">
        Already have an account?
        <NavLink to={"/auth/signin"} className={"text-primary font-semibold"}>
          Go back to sign in
        </NavLink>
      </p>
    </form>
  );
}

export default InputUsername;
