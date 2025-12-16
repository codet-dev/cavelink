import { useState } from "react";

function VariantCard() {
  const [variantGroups, setVariantGroups] = useState([{ title: "", values: [{ name: "" }] }]);

  const handleGroupTitleChange = (groupIndex, value) => {
    const updated = [...variantGroups];
    updated[groupIndex].title = value;
    setVariantGroups(updated);
  };

  const handleValueChange = (groupIndex, valueIndex, value) => {
    const updated = [...variantGroups];
    updated[groupIndex].values[valueIndex].name = value;
    setVariantGroups(updated);
  };

  const handleAddValue = (groupIndex) => {
    const updated = [...variantGroups];
    updated[groupIndex].values.push({ name: "" });
    setVariantGroups(updated);
  };

  const handleRemoveValue = (groupIndex, valueIndex) => {
    const updated = [...variantGroups];
    updated[groupIndex].values.splice(valueIndex, 1);
    setVariantGroups(updated);
  };

  const handleAddGroup = () => {
    if (variantGroups.length < 2) {
      setVariantGroups([...variantGroups, { title: "", values: [{ name: "" }] }]);
    }
  };

  const handleRemoveGroup = (groupIndex) => {
    const updated = variantGroups.filter((_, i) => i !== groupIndex);
    setVariantGroups(updated);
  };

  return (
    <>
      <div className=" mt-4 grid lg:grid-cols-2 gap-4">
        {variantGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="p-4 bg-graybar rounded-xl">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Variant {groupIndex + 1}</p>

              <button type="button" onClick={() => handleRemoveGroup(groupIndex)} className="text-red-500 font-bold cursor-pointer">
                x
              </button>
            </div>

            <input
              type="text"
              placeholder="title like color, size"
              value={group.title}
              onChange={(e) => handleGroupTitleChange(groupIndex, e.target.value)}
              className="bg-white p-2 w-full rounded-lg mt-3 text-sm outline-none"
              required
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 mt-3">
              {group.values.map((variant, valueIndex) => (
                <div key={valueIndex} className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
                  <input
                    type="text"
                    placeholder={`Value ${valueIndex + 1}`}
                    value={variant.name}
                    onChange={(e) => handleValueChange(groupIndex, valueIndex, e.target.value)}
                    className="flex-1 min-w-[2rem] outline-none text-xs"
                  />
                  <button type="button" onClick={() => handleRemoveValue(groupIndex, valueIndex)} className="ml-2 text-gray-500 hover:text-red-500">
                    x
                  </button>
                </div>
              ))}
            </div>

            <button type="button" onClick={() => handleAddValue(groupIndex)} className="mt-3 bg-white px-4 py-2 rounded-lg cursor-pointer">
              +
            </button>
          </div>
        ))}
      </div>
      {variantGroups.length < 2 && (
        <button type="button" onClick={handleAddGroup} className="bg-primary text-white px-4 py-2 rounded-lg cursor-pointer text-xs mt-4">
          + Add Variant
        </button>
      )}
    </>
  );
}
export default VariantCard;
