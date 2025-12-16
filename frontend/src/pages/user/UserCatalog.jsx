import { SELLERDATA } from "../../assets";
import { Link, NavLink, useParams } from "react-router-dom";

function UserCatalog() {
  const { sellerId } = useParams();
  const product = SELLERDATA.products;
  const catalog = SELLERDATA.catalog;
  return (
    <div className="mt-4">
      {catalog.map((data) => {
        const listProduct = product.filter((p) => p.catalogId === data.id).slice(0, 3);

        return (
          <Link to={`/${sellerId}/catalog/${data.id}`} key={data.id} className="inline-block w-full bg-light rounded-lg p-4  overflow-hidden mb-4 ">
            <p className="font-semibold">{data.name}</p>
            <div className="grid grid-cols-3 gap-2 w-full mt-2">
              {listProduct.map((item, index) => (
                <img key={index} src={item.images[0]} alt="" className="aspect-square object-cover border border-neutral-300" />
              ))}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default UserCatalog;
