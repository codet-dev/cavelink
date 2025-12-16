import NoneList from "../../components/shared/NoneList";
import CardCatalog from "../../components/ui/CardCatalog";

const DATACATALOG = [
  {
    id: 1,
    title: "Pakaian Pria",
    amount: 5,
    active: true,
  },
  {
    id: 2,
    title: "Pakaian Wanita",
    amount: 4,
    active: true,
  },
];

function Catalog() {
  return (
    <>
      {DATACATALOG.length > 0 ? (
        <div className="grid xs:grid-cols-2 gap-4 px-4 md:px-8 pb-32">
          {DATACATALOG.map((data) => (
            <CardCatalog data={data} key={data.id} />
          ))}
        </div>
      ) : (
        <div className="px-4">
          <NoneList text={"No Catalog Yet, Add Something to Your Store"} />
        </div>
      )}
    </>
  );
}

export default Catalog;
