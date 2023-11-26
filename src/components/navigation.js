import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../utils/context";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase-utils";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const { state, dispatch, name } = Context();
  const { IS_AUTH } = name;
  const clickHandler = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      dispatch({
        type: IS_AUTH,
        payload: false,
      });
      navigate("/");
    });
  };

  const isActive = (path) => {
    if (window.location.pathname === path) {
      return "font-semibold";
    }
  };
  return (
    <nav className="flex justify-between items-baseline ">
      <h1 className="font-bold text-5xl font-sans">Diurnarius</h1>
      <div className="flex gap-5 h-fit">
        <Link className={isActive("/")} to={"/"}>
          Home
        </Link>
        <Link className={isActive("/about")} to={"/about"}>
          About
        </Link>
        <Link className={isActive("/contact")} to={"/contact"}>
          Contact
        </Link>
        {state.isAuth ? (
          <>
            <Link to={"/create"}>CreateBlog</Link>
            <div className="cursor-pointer" onClick={clickHandler}>
              Log Out
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}

export default Nav;
