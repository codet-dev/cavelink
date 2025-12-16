import iconClose from "../../assets/homeImages/icon_close.svg";
import iconArrow from "../../assets/homeImages/icon_arrow.svg";
import iconPlus from "../../assets/homeImages/icon_plus.svg";
import iconDot from "../../assets/homeImages/icon_dot.svg";
import rectanglePink from "../../assets/homeImages/rectangle_pink.png";
import rectangleGreen from "../../assets/homeImages/rectangle_green.png";
import rectangleViolet from "../../assets/homeImages/rectangle_violet.png";
import rectangleViolet2 from "../../assets/homeImages/rectangle_violet2.png";
import rectangleCream from "../../assets/homeImages/rectangle_cream.png";
import phone1 from "../../assets/homeImages/phone1.png";
import phone2 from "../../assets/homeImages/phone2.png";
import accesories from "../../assets/homeImages/accesories.png";
import sweater from "../../assets/homeImages/sweater.png";
import simple from "../../assets/homeImages/simple.png";
import userFriendly from "../../assets/homeImages/user_friendly.png";
import autumn from "../../assets/homeImages/autumn.png";
import winter from "../../assets/homeImages/winter.png";
import castle from "../../assets/homeImages/castle.png";
import profit from "../../assets/homeImages/profit.png";
import visit from "../../assets/homeImages/visit.png";
import grow from "../../assets/homeImages/grow.png";
import scratch from "../../assets/homeImages/scratch.png";
import elipse from "../../assets/homeImages/elipse.png";
import iconQuestion from "../../assets/homeImages/icon_question.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FAQ = [
  {
    id: 1,
    question: "What's Cavelink?",
    answer: "Cavelink is a simple website builder designed to help businesses create professional websites quickly and easily",
  },
  {
    id: 2,
    question: "How does Cavelink help small business build a website?",
    answer: "Cavelink is a simple website builder designed to help businesses create professional websites quickly and easily",
  },
  {
    id: 3,
    question: "Can I create a website without coding using Cavelink?",
    answer: "Cavelink is a simple website builder designed to help businesses create professional websites quickly and easily",
  },
  {
    id: 4,
    question: "Is Cavelink suitable for beginners or only for businesses?",
    answer: "Cavelink is a simple website builder designed to help businesses create professional websites quickly and easily",
  },
  {
    id: 5,
    question: "What kind of websites can I build with Cavelink?",
    answer: "Cavelink is a simple website builder designed to help businesses create professional websites quickly and easily",
  },
];

function Home() {
  const navigate = useNavigate();
  const [notifClose, setNotifClose] = useState(true);
  const [faqOpen, setFaqOpen] = useState(null);
  const handleClickFaq = (index) => {
    setFaqOpen((value) => (value === index ? null : index));
  };

  return (
    <div className="w-full overflow-x-d">
      <div className="bg-primary w-full text-center pb-56  " id="hero">
        <div className={`w-full  bg-yellow text-xs font-semibold pt-8 pb-4 rounded-b-xl  `}>
          <div className={`flex justify-center gap-2 text-center transition transform origin-top ${notifClose ? "" : "max-h-0 scale-y-0"}`}>
            <p>Start your business today</p>
            <img src={iconClose} alt="" onClick={() => setNotifClose(() => false)} className="cursor-pointer" />
          </div>
        </div>

        <div className="max-w-[80rem] mx-auto pt-4">
          <div className="bg-light mx-4 rounded-full py-2 px-6 flex justify-between items-center">
            <h1 className="font-bold text-xl">Cavelink</h1>
            <div className="text-sm">
              <Link to={"/auth/signin"} className="inline-block bg-yellow font-semibold rounded-xl p-2 border">
                Log in
              </Link>
              <Link to={"/auth/"} className="inline-block font-semibold border border-dashed rounded-xl p-2 ml-4">
                Sign up for free
              </Link>
            </div>
          </div>
        </div>
        <h2 className="font-extrabold text-yellow text-4xl leading-relaxed mt-16 mx-auto px-2 max-w-[32rem]">Start your own web-in one single link</h2>
        <p className="text-light font-semibold text-sm w-[20rem] mx-auto mt-4">Join us for free and get the benefits for your own business, get your simple web now</p>

        <form
          className="mt-16"
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/auth/signup");
          }}
        >
          <div className="bg-light mx-auto w-[20rem] rounded-full text-sm   flex items-center px-4 border-2 border-dark">
            <span className="font-semibold">Cavelink.com/</span>
            <input type="text" required className="focus:outline-none py-3 w-full" minLength={3} placeholder="username" />
          </div>
          <button type="submit" className="flex mx-auto bg-yellow/60 rounded-xl items-center mt-8 cursor-pointer">
            <img src={iconArrow} alt="" className="bg-yellow py-4 px-6 rounded-xl" />
            <p className="mx-8 text-sm font-semibold text-light">Start Now</p>
          </button>
        </form>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="-mt-1 pb-16">
        <path
          fill="#204EA3"
          d="M0,160L48,176C96,192,192,224,288,240C384,256,480,256,576,240C672,224,768,192,864,165.3C960,139,1056,117,1152,122.7C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <div className="text-center py-16">
        <h2 className="text-2xl mx-auto w-[20rem]  font-semibold">
          Enter the online world with
          <span className="s-4 py-4 pl-2 pr-4 text-light" style={{ backgroundImage: `url(${rectanglePink})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
            your business
          </span>
        </h2>
        <p className="text-sm mt-4">Make your own web for your business</p>

        <div className="px-6 mt-16 grid mx-auto max-w-[40rem] lg:max-w-[60rem] lg:grid-cols-2 gap-8">
          <div className="p-6 pb-0 bg-lightgray text-left rounded-xl ">
            <h3 className="font-semibold text-lg mr-4">Make profit, scale your business, live your dream.</h3>
            <p className="text-sm mt-2 mr-4 text-textneutral">The easiest way to sell and grow online</p>
            <img src={phone1} alt="" className="mt-8 w-72 mx-auto" />
          </div>
          <div className="p-6 pb-0 bg-lightgray text-left rounded-xl">
            <h3 className="font-semibold text-lg mr-4">Sell anywhere, earn everywhere.</h3>
            <p className="text-sm mt-2 mr-4 text-textneutral">Run your business from the beach, the café, or your living room — profit never stops.</p>
            <img src={phone2} alt="" className="mt-8 w-72 mx-auto" />
          </div>
        </div>
      </div>

      <div className="py-32 px-6">
        <h2 className="text-2xl mx-auto w-[25rem] text-center font-semibold">
          One platform, Endless products,
          <span className="s-4 py-4 pl-2 pr-4 text-light" style={{ backgroundImage: `url(${rectangleGreen})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
            Unlimited growth.
          </span>
        </h2>
        <p className="text-sm mt-4 mx-8 text-center">Build your personal store in just seconds—simple, fast, and hassle-free.</p>
        <div className="mt-16 grid mx-auto max-w-[30rem] lg:max-w-[60rem] lg:grid-cols-2 lg:grid-rows-1 gap-16">
          <div className=" ">
            <img src={accesories} alt="" className="" />
            <p className="font-semibold text-lg mt-4">Accesories</p>
            <p className="text-textneutral">Sell the sparkle — timeless rings & necklaces.</p>
          </div>
          <div className="">
            <img src={sweater} alt="" className="" />
            <p className="font-semibold text-lg mt-4">Sweater</p>
            <p className="text-textneutral">SSell the sweater everyone loves — comfy, warm, and timeless.</p>
          </div>
        </div>
      </div>

      <div className="py-32 px-6">
        <h2 className="text-2xl mx-auto w-[25rem] text-center font-semibold">
          Let's get
          <span
            className="s-4 py-4 pl-2 pr-4 text-light"
            style={{ backgroundImage: `url(${rectangleViolet})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
          >
            started
          </span>
        </h2>
        <div className="grid mt-16 gap-8 max-w-[30rem] mx-auto lg:max-w-[60rem] lg:grid-cols-2">
          <div className="w-full bg-lightgray p-6 pt-10 rounded-xl ">
            <div className="grid grid-cols-2  gap-4 w-full">
              <img src={userFriendly} alt="" className="" />
              <img src={simple} alt="" className="" />
            </div>
            <h3 className="text-xl font-semibold mt-8 mr-4">Grow your own business with a single user- friendly website.</h3>
          </div>
          <div className="w-full bg-lightgray pb-6 pt-10 rounded-xl">
            <div className="grid grid-cols-2 w-full">
              <img src={winter} alt="" className="z-[1] mt-6" />
              <img src={autumn} alt="" className="-ml-8 -mt-2" />
            </div>
            <h3 className="text-xl font-semibold mt-4 mx-6 mr-4">Turn every place into your marketplace.</h3>
          </div>
          <div className="w-full bg-lightgray pb-6 pt-10 rounded-xl p-6 lg:col-span-2 grid lg:grid-cols-3 gap-8">
            <div className="grid grid-cols-3 grid-rows-2 lg:col-span-2 gap-2 w-full">
              <img src={visit} alt="" className="rounded-2xl col-span-2" />
              <img src={castle} alt="" className="rounded-2xl h-full" />
              <img src={profit} alt="" className="h-full object-cover rounded-2xl" />
              <img src={grow} alt="" className="rounded-2xl col-span-2" />
            </div>
            <h3 className="text-xl font-semibold mr-4">Grow your business and get your audience in one place.</h3>
          </div>
        </div>
      </div>

      <div className="my-32 px-6 max-w-[50rem] lg:max-w-[60rem] mx-auto">
        <div
          className="text-xl mx-auto w-[22rem] text-center font-semibold text-light py-[10px] flex justify-center gap-2"
          style={{ backgroundImage: `url(${rectangleViolet2})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
        >
          <img src={iconQuestion} alt="" className="" />
          <h2> Question asked frequently</h2>
        </div>
        <div className="mt-16">
          {FAQ.map((data, index) => (
            <div className="border-b py-4" key={index}>
              <div className={`flex items-start justify-between  gap-4 rounded-xl transition-all duration-500 ${faqOpen === index ? "bg-[#7929FF]/40 p-4" : ""}`}>
                <div className="">
                  <p className="font-semibold">Q: {data.question}</p>
                  <p className={`mt-2 transition-all duration-200 transform origin-top ${faqOpen === index ? "max-h-25" : "max-h-0 scale-y-0"}`}>{data.answer}</p>
                </div>
                {faqOpen === index ? (
                  <div alt="" className="w-8 border-2 mt-3" onClick={() => handleClickFaq(index)} />
                ) : (
                  <img src={iconPlus} alt="" className="w-8" onClick={() => handleClickFaq(index)} />
                )}
              </div>
            </div>
          ))}
        </div>
        <img src={scratch} alt="" className="w-[20rem] mx-auto mt-4" />
      </div>

      <div className="py-32 text-center px-6 max-w-[50rem] lg:max-w-[60rem] mx-auto">
        <span className="s-4 py-4 pl-2 pr-4" style={{ backgroundImage: `url(${rectangleCream})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
          a project by CodeT Group
        </span>
        <div className="border-b py-4">
          <h4 className="font-bold">Cavelink</h4>
        </div>
        <div className="border-b py-4">
          <h4 className="font-bold">CodeT Group</h4>
          <p className="text-textneutral text-xs font-semibold mt-2">A third-semester student on the journey to growth.</p>
        </div>
        <div className="border-b py-4">
          <h4 className="font-bold">Purpose</h4>
          <p className="text-textneutral text-xs font-semibold mt-2">Get rich.</p>
        </div>
        <div className="border-b py-4">
          <h4 className="font-bold">Gen z</h4>
          <p className="text-textneutral text-xs font-semibold mt-2">Driven by dreams, powered by ambition.</p>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#204EA3"
          // fill-opacity="1"
          d="M0,160L48,176C96,192,192,224,288,240C384,256,480,256,576,240C672,224,768,192,864,165.3C960,139,1056,117,1152,122.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-primary w-full pt-32 -mt-1 px-6 text-center">
        <div className="bg-[#FDF3E7] rounded-t-full pt-24 max-w-[45rem] lg:max-w-[60rem] mx-auto">
          <img src={elipse} alt="" className="rounded-full mx-auto w-[10rem]" />
          <h2 className="text-2xl font-semibold mt-16">
            a small <span className="text-primary">group</span> on the <span className="text-[#FD6F00]">rise.</span>
          </h2>
          <p className="font-semibold mt-2 text-sm">
            We strive to do <span className="text-[#FFC107]">our best</span> in our own way
          </p>
          <a href="#hero" className="flex mx-auto bg-[#FFE2BF] rounded-xl items-center mt-8 w-fit">
            <img src={iconArrow} alt="" className="bg-[#FFBC6B] py-4 px-6 rounded-xl " />
            <p className="mx-8 text-sm font-semibold text-dark">Let's start</p>
          </a>

          <div className="border rounded-xl mx-6 mt-16 lg:grid lg:grid-cols-2">
            <p className="text-xs p-4 pb-16 text-left font-semibold">
              <span className="text-[#FFBC6B]">Cavelink</span> is a long-held idea, now implemented through the <span className="text-[#715DF2]">Informind</span> UMKM competition. <br />
              We’re always working to <span className="text-[#1E81E3]">improve</span> and truly appreciate any feedback or suggestions about anything that help us{" "}
              <span className="text-[#C60000]">grow</span>.
            </p>
            <div className="border-t lg:border-t-0 lg:border-l p-4">
              <p className="text-xs font-semibold">proudly made by CodeT Group</p>
              <h1 className="text-2xl font-bold mt-2">Cavelink</h1>
              <p className="text-xs font-semibold text-left mt-8">
                We’re open to <span className="text-[#FF8400]">collaboration</span> and always eager to <span className="text-[#A0C8FF]">learn</span> and grow together.
              </p>
              <div className=""></div>
            </div>
          </div>
          <div className="text-[10px] flex justify-between mx-6 text-textneutral py-2">
            <p className="">Copyright CodeT 2025</p>
            <p className="flex gap-4">
              <a href="">Term of use </a>
              <a href=""> Privacy Policy</a>
            </p>
          </div>
        </div>
        <div className="flex py-3 justify-between font-semibold text-sm text-light px-6 max-w-[45rem] lg:max-w-[60rem] mx-auto">
          <p className="">Cavelink</p>
          <img src={iconDot} alt="" />
          <p className="">CodeT Group</p>
          <img src={iconDot} alt="" />
          <p className="">CateTin</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
