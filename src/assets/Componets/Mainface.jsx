import { BsStars } from "react-icons/bs";
import { LuDot } from "react-icons/lu";

const Mainface = () => {
  return (
    <div className="flex h-[80vh] gap-[15vw] ">
      <div className="left w-[50%] mt-[20vh] ">
        <h1 className="text-6xl font-bold leading-[4rem]">
          Learning skills <br /> for a better career
        </h1>
        <p className="text-[1.1rem] leading-[1.4rem] mt-5">
          We belive the world is more beautiful as each person gets <br /> more
          skills and knows how to implement.
        </p>
        <input
          type="text"
          placeholder="Enter your email"
          className="border-2 border-black w-96 p-2 rounded-full mt-6"
        />
        <h4 className="pl-2 mt-3 flex items-center">
          <LuDot />
          35K+ Review with 5star rating
        </h4>
      </div>
      <div className="right w-[40%] flex">
        
        <BsStars className="stick absolute " />
        <img
          src="/public/images/13536.jpg"
          alt=""
          className="rounded-full w-[60vh] shadow-2xl"
        />
        <img
          src="/public/images/13536.jpg"
          alt=""
          className="rounded-full w-[60vh] relative imgstick border-4 border-yellow-400"
        />
      </div>
    </div>
  );
};

export default Mainface;
