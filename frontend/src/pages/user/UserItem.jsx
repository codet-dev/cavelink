import { SELLERDATA } from "../../assets";
import { numberFormat } from "../../api/numberFormat";
import { Link, useParams } from "react-router-dom";

import { useState } from "react";
import SearchBar from "../../components/ui/SearchBar";
import { NavLink } from "react-router-dom";

function UserItem() {
  const { sellerId, catalogId } = useParams();
  const [listProduct, setListProduct] = useState(SELLERDATA.products);
  const [sortType, setSortType] = useState("latest");

  const onSearchChange = (value) => {
    const searchPost = SELLERDATA.products.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
    setListProduct(searchPost);
  };

  const filteredProduct = catalogId ? listProduct.filter((p) => p.catalogId === parseInt(catalogId, 10)) : listProduct;

  const PRODUCTS = [...filteredProduct].sort((a, b) => {
    if (sortType === "latest") {
      return new Date(b.addDate) - new Date(a.addDate);
    }
    if (sortType === "price") {
      return a.price - b.price;
    }
    if (sortType === "bestseller") {
      return b.sold - a.sold;
    }
  });

  return (
    <>
      <SearchBar sortType={sortType} className={"mt-2"} onSearchChange={onSearchChange} onFilterChange={(e) => setSortType(e.target.value)} />

      <div className="grid grid-cols-2 gap-4 mt-4">
        {PRODUCTS.map((data) => {
          const name = data.name.length <= 22 ? data.name : data.name.slice(0, 22) + "...";
          const harga = data.price.toLocaleString("id-ID");

          return (
            <div key={data.id} className="rounded-lg overflow-hidden bg-light flex flex-col justify-between shadow-xl">
              <Link to={`/${sellerId}/${data.id}`}>
                <img src={data.images[0]} alt="" className="aspect-square object-cover" />
                <div className="m-2">
                  <p className="text-sm">{name}</p>
                  <p className="font-semibold mt-1">Rp{harga}</p>
                </div>
                <div className="mx-2 flex justify-between  text-xs">
                  <p>★★★★★ {data.rating}</p>
                  <p>{numberFormat(data.sold)} sold</p>
                </div>
              </Link>

              <button className="m-2 border border-neutral-400 rounded py-1 z-10 text-xs font-semibold cursor-pointer">Add to cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default UserItem;
