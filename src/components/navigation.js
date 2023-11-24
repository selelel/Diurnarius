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
    <nav className=" flex gap-3 text-white bg-black justify-center">
      <Link to={"/"}>Home</Link>
      <Link to={"/profile"}>Profile</Link>
      {state.isAuth ? (
        <>
          <Link to={"/create"}>CreateBlog</Link>
          <button onClick={clickHandler}>Log Out</button>
        </>
      ) : (
        <Link to={"/login"}>LogIn</Link>
      )}
    </nav>
  );
}

export default Nav;
