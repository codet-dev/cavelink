import ButtonBack from "../ui/ButtonBack";

function BdBar({ text, icon, size, variant, className }) {
  const sizes = {
    md: "py-4",
    lg: "py-8",
  };
  const variants = {
    light: "bg-light",
    gray: "bg-graybar",
  };
  return (
    <div className={`flex gap-4 items-center px-4  ${variants[variant]} ${sizes[size]} ${className}`}>
      <ButtonBack className={""} />
      {icon && <img src={icon} alt="" className="w-7 h-7" />}
      <p className="font-semibold text-xl">{text}</p>
    </div>
  );
}
export default BdBar;
