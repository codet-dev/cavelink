import { NavLink } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Heading } from "../../components/ui/Heading";
import { Input } from "../../components/ui/Input";

import { SubmitFunction } from "../../api/submitFunction";

function ForgotPassword() {
  return (
    <section className="">
      <Heading text={"Forgot Password?"} subtext={"Enter your email or username and we’ll send you an email to reset your password"} />

      <form action="" method="post" className="mt-16 xs:w-md" onSubmit={SubmitFunction("/auth/signin")}>
        <Input name={"email"} type={"email"} placeholder={"Email or Username"} />
        <Button text={"Send Email"} type="submit" className={"mt-8"} />
      </form>

      <NavLink to={"/auth/signin"} className={"w-fit mx-auto inline-block text-primary font-semibold my-8"}>
        Back to Sign in
      </NavLink>
    </section>
  );
}

export default ForgotPassword;
