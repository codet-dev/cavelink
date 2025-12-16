function Card3({ data, itemCart }) {
  const productName = data.name.length < 25 ? data.name : data.name.slice(0, 25) + "...";

  return (
    <div className="relative px-4 border-neutral-500 w-full overflow-hidden flex  py-4 gap-4">
      <div className="w-26 h-26 aspect-square">
        <img src={data.images[0]} alt="" className="w-26 h-26 aspect-square object-cover border border-neutral-300 rounded-lg" />
      </div>
      <div className="w-full">
        <p className="text-sm font-semibold">{productName}</p>
        {itemCart.selectedVariant.length > 0 && (
          <div className="">
            <p className="text-xs text-textneutral">Variant</p>
            <p className="bg-neutral-200 rounded px-2 w-2/3 py-1 mt-1 flex items-center text-xs">{itemCart.selectedVariant.join(" - ")}</p>
          </div>
        )}

        <p className="font-semibold text-lg mt-1">Rp{data.price.toLocaleString("id-ID")}</p>
      </div>
      <div className="absolute bottom-4 right-0">
        <p className="bg-neutral-300 px-3 py-2 text-xs rounded-l">x1</p>
      </div>
    </div>
  );
}
export default Card3;
