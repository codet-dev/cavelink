import { Heading } from "../../components/ui/Heading";

import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

import { SubmitFunction } from "../../api/submitFunction";
import { SOSMED } from "../../assets";

function AddConnection() {
  return (
    <section className="">
      <Heading text={"Add Connection"} subtext={"Connect your social media in your own websites for your small business"} />

      <div className="text-left">
        <p className="font-semibold">Your selections</p>
        <form action="" onSubmit={SubmitFunction("/auth/makeprofile")}>
          <ul className="flex flex-col gap-2 mt-4">
            {SOSMED.map((data) => (
              <li className="flex gap-2" key={data.name}>
                <img src={data.icon} alt="" className="aspect-square" />
                <Input
                  name={data.name}
                  type={data.type}
                  variant="outline"
                  className={"text-sm"}
                  placeholder={data.placeholder}
                  pattern="[A-Za-z0-9_]+"
                  minLength={data.minLength}
                  maxLength={data.maxLength}
                  required={false}
                />
              </li>
            ))}
          </ul>

          <Button text={"Continue"} type="submit" className={"mt-24"} />
        </form>
      </div>
    </section>
  );
}

export default AddConnection;
