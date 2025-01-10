import React from "react";
import { Link } from "react-router-dom";

const NavMenuLink = (props) => {
  return (
    <Link
      to={props.link_url}
      className="text-white capitalize flex items-center text-sm font-medium hover:text-[#994ff5] tracking-wide transition-colors duration-700"
    >
      {props.link_name}
    </Link>
  );
};

export default NavMenuLink;
