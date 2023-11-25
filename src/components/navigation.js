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
      navigate("/login");
    });
  };
  return (
    <nav className="flex justify-between text-2xl items-baseline ">
      <h1 className="font-bold text-5xl font-sans">Diurnarius</h1>
      <div className="flex gap-5 text-lg    h-fit">
        <Link to={"/"}>Blogs</Link>
        {state.isAuth ? (
          <>
            <Link to={"/create"}>CreateBlog</Link>
            <div classname="cursor-pointer" onClick={clickHandler}>
              Log Out
            </div>
          </>
        ) : (
          <Link to={"/login"}>LogIn</Link>
        )}
      </div>
    </nav>
  );
}

export default Nav;
