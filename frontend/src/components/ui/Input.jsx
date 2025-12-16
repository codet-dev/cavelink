export const Input = ({ variant = "fill", className, required = true, ...props }) => {
  const variants = {
    fill: "bg-[#D9D9D980]",
    outline: "border-1",
  };

  const classname = `w-full rounded-lg py-3 px-4 focus:outline-sky-300 ${variants[variant]} ${className}`;

  return <input className={classname} required={required} {...props} />;
};
