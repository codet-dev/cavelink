function Loader() {
  return (
    <div className="fixed top-0 left-0 w-dvw h-dvh bg-light/40 z-[100] flex justify-center items-center">
      <div className="grid grid-cols-2  spin-loader">
        <div className="bg-[#204EA3] rounded-tl-full rounded-tr-full rounded-bl-full"></div>
        <div className="bg-[#204EA3] rounded-tl-full rounded-tr-full rounded-br-full"></div>
        <div className="bg-[#204EA3] rounded-tl-full rounded-br-full rounded-bl-full"></div>
        <div className="bg-[#204EA3] rounded-br-full rounded-tr-full rounded-bl-full"></div>
      </div>
    </div>
  );
}
export default Loader;
