import { Button } from "../../components/ui/Button";
import { Heading } from "../../components/ui/Heading";
import { Input } from "../../components/ui/Input";

import googleIcon from "../../assets/icons/google-colorful.svg";
import { NavLink } from "react-router-dom";
import { SubmitFunction } from "../../api/submitFunction";

function SignIn() {
  return (
    <section className="">
      <Heading text={"Welcome Back"} subtext={"Sign in to your Website"} />

      <div className="">
        <form action="" className="" onSubmit={SubmitFunction("/admin")}>
          <Input name={"email"} type={"email"} placeholder={"Email"} />
          <Input name={"password"} type={"password"} placeholder={"Password"} minLength={8} className={"mt-2"} />
          <Button type="submit" text={"Continue"} className={"mt-8"} />
        </form>
        <p className="my-8 font-semibold">Or</p>
        <Button text={"Sign in with Google"} variant="outline" icon={googleIcon} />
      </div>

      <div className="mt-8 flex flex-col gap-2">
        <NavLink to={"/auth/forgotpassword"} className={"text-primary font-semibold"}>
          Forgot Password?
        </NavLink>
        <p>
          Don't have an account?{" "}
          <NavLink to={"/auth"} className={"text-primary font-semibold"}>
            Create account
          </NavLink>
        </p>
      </div>
    </section>
  );
}

export default SignIn;
