function SellerProfile({ data, className }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <img src={data.profile_image} alt="" className="w-10 h-10 aspect-square rounded-full object-cover border" />
      <div className="">
        <p className="font-semibold">{data.name}</p>
        <p className="text-xs text-textneutral">{data.id}</p>
      </div>
    </div>
  );
}
export default SellerProfile;
