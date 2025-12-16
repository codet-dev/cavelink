import { useState } from "react";

function VariantSelect({ product, classname, onVariantChange }) {
  const [selected, setSelected] = useState({});

  const handleSelect = (type, option) => {
    const newSelected = { ...selected, [type]: option };
    setSelected(newSelected);
    onVariantChange(newSelected);
  };

  return (
    <div className={classname}>
      <h3 className="text-lg font-semibold">Variants</h3>
      {product.variants.map((data, index) => (
        <div key={index} className="py-2">
          <h3 className="font-semibold">{data.type}</h3>
          <div className="flex flex-wrap gap-4 mt-2">
            {data.options.map((option, index) => (
              <button
                className={`border rounded-full px-4 py-1 text-sm cursor-pointer ${selected[data.type] === option ? "" : "border-neutral-300"}`}
                key={index}
                onClick={() => {
                  handleSelect(data.type, option);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
export default VariantSelect;
