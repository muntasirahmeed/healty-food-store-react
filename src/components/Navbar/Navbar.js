import React, { useState } from "react";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import logo from "../../Assests/Images/logo.jpg";

const Navbar = () => {
  let links = [
    { name: "HOME", links: "/" },
    { name: "FOODS", links: "/foods" },
    { name: "ORDERS", links: "/orders" },
    { name: "ABOUT", links: "/about" },
    { name: "LOGIN", links: "/login" },
  ];
  const [open, setOpen] = useState("");
  return (
    <nav className="  sticky bg-[#FAFAFC] w-full top-0 left-0 ">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="cursor-pointer flex items-center text-gray-800 ">
          <span>
            <img className="w-16  m-0" src={logo} alt="" />
          </span>
          <span className="font-bold text-2xl text-[#799F23] ">FOODS STORE</span>
        </div>
        <div onClick={() => setOpen(!open)}>
          {open ? (
            <XIcon className="w-10 h-10 absolute right-8 top-6 cursor-pointer md:hidden"></XIcon>
          ) : (
            <MenuAlt1Icon className="w-10 h-10 absolute right-8 top-6 cursor-pointer md:hidden"></MenuAlt1Icon>
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static  bg-[#FAFAFC] md:z-auto z-[-1] left-0  w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${
            open
              ? "top-20 opacity-100"
              : "top-[-490px] md:opacity-100 opacity-0"
          }`}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-md font-semibold md:my-0 my-7">
              <Link
                className="text-lime-700 hover:text-lime-600 duration-300 ease-in-out"
                to={link.links}
              >
                {link.name}
              </Link>
            </li>
          ))}
          {/* <button className="bg-green-600 text-white py-1 text-lg px-6 rounded md:ml-8 hover:bg-green-400 duration-300 ease-in-out">
            Login
          </button> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
