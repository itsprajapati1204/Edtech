import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-4 h-[10vh] navbar pb-6">
      <div className="logo">
        <h3 className="font-bold text-4xl">Edtech</h3>
      </div>
      <div className="search flex items-center border-2 border-black w-96 p-2 rounded-full gap-3 ">
        <IoSearch className="text-2xl " />
        <input type="text" placeholder="Search any course" />
      </div>
      <div className="login">
        <button className=" bg-slate-900 text-white px-10 py-3 rounded-full">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
