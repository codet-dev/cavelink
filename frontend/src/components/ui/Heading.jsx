export const Heading = ({ text, subtext, className }) => {
  return (
    <div className="">
      <h1 className={`text-4xl font-bold  leading-relaxed ${className}`}>{text}</h1>
      <p className="mt-4 mb-8 text-textneutral">{subtext}</p>
    </div>
  );
};
