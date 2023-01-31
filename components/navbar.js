import { AppContext } from "./context";
import { useContext, useState } from "react";
import Image from "next/image";
import PropLogo from "../public/propreturns.jpg";
import UserPic from "../public/mypic.jpg";
import { FaHeart, FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const { active, setActive } = useContext(AppContext);
  const [clicked, setClicked] = useState(false);

  const changeClick = () => {
    setClicked(!clicked);
  };

  return (
    <main>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 left-to-right">
          <div className="w-8 rounded-full overflow-hidden">
            <Image src={PropLogo} alt="logo" className="w-full" />
          </div>
          <h1 className="text-xl font-bold">PropReturns</h1>
        </div>
        <div className="flex justify-left">
          <nav
            className={`${
              !clicked ? "hidden" : "block"
            } text-xl flex-col absolute z-20 bg-white p-3 md:p-6 lg:p-0 right-0 top-10 md:top-12 w-full lg:static lg:flex-row lg:flex lg:gap-20 lg:text-xs lg:font-bold lg:tracking-wide lg:text-gray-500 lg:nav`}
          >
            <a
              href="/#"
              className={`block pb-1  ${
                active === "search" ? "active-nav" : ""
              }`}
              onClick={() => {
                setActive("search");
              }}
            >
              Search
            </a>

            <a
              href="/#"
              className={`block pb-1  ${
                active === "about" ? "active-nav" : ""
              }`}
              onClick={() => {
                setActive("about");
              }}
            >
              About
            </a>

            <a
              href="/#"
              className={`block pb-1  ${active === "help" ? "active-nav" : ""}`}
              onClick={() => {
                setActive("help");
              }}
            >
              Help
            </a>

            <a
              href="/#"
              className={`block pb-1  ${active === "real" ? "active-nav" : ""}`}
              onClick={() => {
                setActive("real");
              }}
            >
              Real Estate Agents
            </a>

            <a
              href="/#"
              className={`block pb-1  ${active === "blog" ? "active-nav" : ""}`}
              onClick={() => {
                setActive("blog");
              }}
            >
              Blog
            </a>
          </nav>
        </div>
        <div className="hidden lg:flex lg:gap-12 user">
          <FaHeart className="mt-2 text-gray-400" />
          <div className="w-8 rounded-full overflow-hidden">
            <Image src={UserPic} alt="logo" className=" w-full" />
          </div>
        </div>
        <div className="lg:hidden">
          {!clicked ? (
            <RxHamburgerMenu onClick={changeClick} />
          ) : (
            <FaTimes onClick={changeClick} />
          )}
        </div>
      </div>
    </main>
  );
};

export default Navbar;
