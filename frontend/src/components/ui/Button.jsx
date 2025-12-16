import { NavLink, UNSAFE_WithComponentProps } from "react-router-dom";

export const Button = ({ text, className, rounded = "full", type = "button", icon = false, variant = "fillPrimary", size = "xl", ...props }) => {
  const variants = {
    fillPrimary: "bg-primary text-light",
    fillLight: "bg-light text-dark",
    outline: "border-1 border-textneutral text-dark",
  };
  const roundeds = {
    full: "rounded-full",
    xl: "rounded-xl",
    lg: "rounded-lg",
  };
  const sizes = {
    xl: "py-3",
    lg: "py-2",
    sm: "py-1",
  };

  return (
    <button type={type} className={`w-full font-semibold flex justify-center gap-4 cursor-pointer ${variants[variant]} ${roundeds[rounded]} ${sizes[size]} ${className}`} {...props}>
      {icon && <img src={icon} alt="" />}
      {text}
    </button>
  );
};
