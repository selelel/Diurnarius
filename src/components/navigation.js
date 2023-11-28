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
      return "font-semibold drop-shadow-lg duration-100 ease-linear";
    }
    return "";
  };
  return (
    <nav className="flex justify-between items-baseline ">
      <h1 className="font-bold text-5xl font-sans">Diurnarius</h1>
      <div className="flex gap-5 h-fit items-baseline ">
        <Link className={isActive("/diurnarius")} to={"/diurnarius"}>
          Home
        </Link>
        <Link
          className={isActive("/diurnarius/about")}
          to={"/diurnarius/about"}
        >
          About
        </Link>
        <Link
          className={isActive("/diurnarius/contact")}
          to={"/diurnarius/contact"}
        >
          Contact
        </Link>
        {state.isAuth ? (
          <>
            <Link
              className={isActive("/diurnarius/create")}
              to={"/diurnarius/create"}
            >
              CreateBlog
            </Link>
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
