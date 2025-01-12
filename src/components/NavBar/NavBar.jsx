import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; // React Icons
import NavMenuLink from "../NavLink/NavLink";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-mainColor flex items-center justify-between px-5 py-4 md:px-10">
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to={"/"}>
          <img src="/logo.svg" alt="logo" className="h-8 cursor-pointer" />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-white focus:outline-none"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Desktop Links */}
      <div className="hidden sm:flex sm:items-center sm:space-x-6">
        <NavMenuLink link_name="home" link_url="/" />
        <NavMenuLink link_name="about me" link_url="/about" />
        <NavMenuLink link_name="services" link_url="/services" />
        <NavMenuLink link_name="projects" link_url="/projects" />
        <NavMenuLink link_name="client" link_url="/client" />
        <NavMenuLink link_name="blog" link_url="/blog" />
        <button className="bg-white px-6 py-3 text-sm font-semibold capitalize hover:bg-gray-200">
          Let's chat
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="fixed top-0 right-0 w-3/4 h-full bg-[#081021] shadow-lg flex flex-col space-y-6 px-6 py-8 z-50"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="self-end text-white focus:outline-none"
          >
            <FiX size={28} />
          </button>
          <NavMenuLink link_name="home" link_url="/" />
          <NavMenuLink link_name="about me" link_url="/about" />
          <NavMenuLink link_name="services" link_url="/services" />
          <NavMenuLink link_name="projects" link_url="/projects" />
          <NavMenuLink link_name="client" link_url="/client" />
          <NavMenuLink link_name="blog" link_url="/blog" />
          <button className="bg-white px-6 py-3 text-sm font-semibold capitalize hover:bg-gray-200">
            Let's chat
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;
