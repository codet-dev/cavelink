import { useNavigate } from "react-router-dom";

import prevBtn from "../../assets/icons/prev-button.svg";

function ButtonBack({ className }) {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="cursor-pointer">
      <img src={prevBtn} alt="" className={`h-full ${className}`} />
    </button>
  );
}
export default ButtonBack;
