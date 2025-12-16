function Select({ name, id, options, variant = "outline", setSelected, disabled = true, className }) {
  const variants = {
    outline: "border bg-light rounded-lg",
    gray: "bg-graybar rounded-xl",
  };

  return (
    <select
      name={name}
      id={id}
      className={`w-full py-3 px-2 text-sm    focus:outline-sky-300  border-neutral-400 ${disabled ? "cursor-no-drop" : "cursor-pointer"} ${variants[variant]} ${className}`}
      onChange={(e) => {
        setSelected(e.target.value);
      }}
      disabled={disabled}
      required
    >
      <option value="">-- set {name} --</option>
      {options.map((op) => (
        <option key={op.id} value={op.id} className="">
          {op.name}
        </option>
      ))}
    </select>
  );
}
export default Select;
