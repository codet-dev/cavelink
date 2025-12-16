import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function AdminSecondBar({ data, className }) {
  const [click, setClick] = useState(0);

  return (
    <div className={`w-full grid grid-cols-3 gap-4 lg:gap-2 lg:font-semibold text-center ${className}`}>
      {data.map((data, index) => (
        <NavLink
          to={data.link}
          className={({ isActive }) => `border rounded-full lg:rounded-2xl px-4 py-1 text-sm lg:text-xs lg:leading-8  ${isActive ? "bg-primary text-light" : ""}`}
          key={index}
          end={data.end}
          onClick={() => setClick(() => index)}
        >
          {data.title}
        </NavLink>
      ))}
      <Link
        to={click === 0 ? "/admin/add-product" : "/admin/add-catalog"}
        className="hidden md:inline border rounded-full lg:rounded-2xl px-4 py-1 text-sm lg:text-xs bg-primary text-light lg:leading-8"
      >
        {click === 0 ? "Add Product" : "Add Catalog"}
      </Link>
    </div>
  );
}

export default AdminSecondBar;
