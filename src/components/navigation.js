import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className=" flex gap-3 text-white bg-black justify-center">
      <Link to={"/"}>Home</Link>
      <Link to={"/create"}>CreateBlog</Link>
      <Link to={"/profile"}>Profile</Link>
      <Link to={"/login"}>LogIn</Link>
    </nav>
  );
}

export default Nav;
