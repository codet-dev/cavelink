import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

function BottomButton({ text, link, onClick, className }) {
  return (
    <div className={`fixed bottom-0 bg-primary w-full max-w-xl px-6 pb-6 pt-12 rounded-t-4xl ${className}`}>
      <Link to={link} onClick={onClick}>
        <Button text={text} variant="fillLight" rounded="xl" size="lg" />
      </Link>
    </div>
  );
}
export default BottomButton;
