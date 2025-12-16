import iconNone from "../../assets/icons/admin/none.png";

function NoneList({ text }) {
  return (
    <div className="py-16">
      <h1 className="font-semibold text-sm text-center border border-textneutral rounded-xl py-4">{text}</h1>
      <img src={iconNone} alt="" className="w-80 mx-auto mt-16" />
    </div>
  );
}
export default NoneList;
