import { useState } from "react";
import iconSorting from "../../assets/icons/sorting.svg";

function SearchBar({ variant = "fillDark", rounded = "lg", className, sortType, onFilterChange, onSearchChange }) {
  const [search, setSearch] = useState("");
  const handleSearchChange = (e) => {
    e.preventDefault();
    onSearchChange(search);
  };

  const variants = {
    fillDark: "bg-dark rounded-lg text-light",
    outline: "bg-light border rounded-full text-dark",
  };
  const roundeds = {
    lg: "rounded-lg",
    full: "rounded-full",
  };

  return (
    <form action="" className={`flex w-full mx-auto sticky top-0 overflow-hidden ${variants[variant]} ${roundeds[rounded]} ${className}`}>
      <input
        type="text"
        className={`w-full   p-2 ${roundeds[rounded]} focus:outline-none`}
        placeholder="🔍 Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button onClick={handleSearchChange} className={`px-2 m-1 aspect-square  border bg-light ${roundeds[rounded]}`}>
        🔍
      </button>
      <div className={`relative flex justify-center items-center bg-light  aspect-square w-10 border m-1 ${roundeds[rounded]}`}>
        <img src={iconSorting} alt="" />
        <select value={sortType} onChange={onFilterChange} className="w-full h-full absolute top-0 left-0 opacity-0">
          <option value="latest">latest</option>
          <option value="bestseller">best seller</option>
          <option value="price">price</option>
        </select>
      </div>
    </form>
  );
}

export default SearchBar;
