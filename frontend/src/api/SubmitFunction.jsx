import { useNavigate } from "react-router-dom";

export function SubmitFunction(link) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(link);
  };
  return handleSubmit;
}
