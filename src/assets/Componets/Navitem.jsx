import { GiHamburgerMenu } from "react-icons/gi";

const Navitem = () => {
  return ( 
    <div className="flex gap-20 h-[10vh] text-[1.2rem]">
      <div className="left flex items-center gap-3">
        <GiHamburgerMenu />
        <h3>Categories</h3>
      </div>
      <div className="right flex items-center gap-5">
        <h3>Courses</h3>
        <h3>About us</h3>
        <h3>Mentors</h3>
        <h3>Blog</h3>
        <h3>Contact</h3>
      </div>
    </div>
  );
};

export default Navitem;
