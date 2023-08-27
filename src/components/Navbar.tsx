import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="relative w-full h-[50px] flex justify-between items-center px-10 z-10 shadow-md">
      <div className="flex justify-center items-center text-2xl font-semibold"></div>

      {/* Menu */}
      <ul className="hidden md:flex gap-8">
        <li className="hover:text-green-300">
          <Link to="/portfolio-deploy">Home</Link>
        </li>
        <li className="hover:text-green-300">
          <Link to="/portfolio-deploy/about">About</Link>
        </li>
        <li className="hover:text-green-300">
          <Link to="/portfolio-deploy/blog">Blog</Link>
        </li>
        <li className="hover:text-green-300">
          <Link to="/portfolio-deploy/contact">Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-green-100 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link to="/portfolio-deploy">Home</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="/portfolio-deploy/about">About</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="/portfolio-deploy/blog">Blog</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="/portfolio-deploy/contact">Contact</Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
