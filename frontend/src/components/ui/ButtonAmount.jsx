import { useState, useEffect } from "react";

function ButtonAmount({ classname, quantity = 1, onQuantityChange }) {
  const [amount, setAmount] = useState(quantity);

  const handleAdd = () => {
    setAmount((amount) => amount + 1);
  };
  const handleLess = () => {
    amount > 1 && setAmount((amount) => amount - 1);
  };

  useEffect(() => {
    onQuantityChange(amount);
  }, [amount, onQuantityChange]);

  return (
    <div className={`bg-light flex text-center py-1 px-2 rounded text-sm items-center ${classname}`}>
      <button className="px-2 bg-black text-light rounded font-bold cursor-pointer" onClick={handleLess}>
        -
      </button>
      <p type="text" className="font-semibold w-8" onChange={(e) => console.log(e.target.value)} value={amount}>
        {amount}
      </p>

      <button className="px-2 bg-black text-light rounded font-bold cursor-pointer" onClick={handleAdd}>
        +
      </button>
    </div>
  );
}
export default ButtonAmount;
