import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../utils/context";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase-utils";
import { useNavigate } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";

function Nav() {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const { state, dispatch, name } = Context();
  const { IS_AUTH } = name;
  const clickHandler = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setOpen(false);
      dispatch({
        type: IS_AUTH,
        payload: false,
      });
      navigate("/diurnarius");
    });
  };

  const isActive = (path) => {
    if (window.location.pathname === path) {
      return "font-semibold drop-shadow-lg duration-100 ease-linear";
    }
    return "";
  };

  const styleHumburger = isOpen
    ? "bg-white p-1 h-screen z-20 absolute top-0 right-0 left-0 flex flex-col justify-center items-center text-3xl gap-4"
    : "hidden";

  const toClose = () => {
    setOpen(false);
  };
  return (
    <nav className="flex justify-between items-baseline fixed top-0 bg-white right-0 left-0 px-10 pt-3 pb-2">
      <h1 className="font-bold text-4xl sm:text-5xl font-sans">Diurnarius</h1>
      <div className="gap-5 h-fit items-baseline hidden md:flex ">
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

      <div className="flex gap-5 h-fit items-baseline visible md:hidden ">
        <div className="relative top-2 z-40">
          <Hamburger
            className="z-50 "
            color="#000000"
            duration={0.8}
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
        <div className={styleHumburger}>
          <Link
            onClick={toClose}
            className={isActive("/diurnarius")}
            to={"/diurnarius"}
          >
            Home
          </Link>
          <Link
            onClick={toClose}
            className={isActive("/diurnarius/about")}
            to={"/diurnarius/about"}
          >
            About
          </Link>
          <Link
            onClick={toClose}
            className={isActive("/diurnarius/contact")}
            to={"/diurnarius/contact"}
          >
            Contact
          </Link>
          {state.isAuth ? (
            <>
              <Link
                onClick={toClose}
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
      </div>
    </nav>
  );
}

export default Nav;
