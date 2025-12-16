import { Button } from "../../components/ui/Button";
import { Heading } from "../../components/ui/Heading";
import { Input } from "../../components/ui/Input";
import { NavLink } from "react-router-dom";
import { SubmitFunction } from "../../api/submitFunction";
import googleIcon from "../../assets/icons/google-colorful.svg";

function SignUp() {
  return (
    <section className="text-center">
      <Heading text={"Join to Cavelink"} subtext={"Sign up for free"} />

      <form action="" className="flex flex-col gap-2" onSubmit={SubmitFunction("/auth/addconnection")}>
        <Input name={"email"} type={"email"} placeholder={"Email"} />
        <Input name={"password"} type={"password"} placeholder={"Password"} minLength={8} />
        <Button text={"Continue"} type="submit" link={"/auth/"} className={"mt-6"} />
      </form>

      <p className="text-sm text-textneutral mt-4">By clicking Create Account, you ready to receive offers, updates from cavelink</p>
      <p className="my-8">Or</p>
      <Button text="Sign up with Google" variant="outline" icon={googleIcon} />

      <p className="text-sm mt-6 mb-8">
        Already have an account?
        <NavLink to={"/auth/signin"} className={"text-primary font-semibold"}>
          Go back to sign in
        </NavLink>
      </p>
    </section>
  );
}

export default SignUp;
