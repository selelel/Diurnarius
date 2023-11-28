import React from "react";
import { auth, provider } from "../utils/firebase-utils";
import { signInWithPopup } from "firebase/auth";
import { Context } from "../utils/context";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

function LogIn() {
  const navigate = useNavigate();
  const { dispatch, name } = Context();
  const { IS_AUTH } = name;
  const sign_in_with_Google = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      dispatch({
        type: IS_AUTH,
        payload: true,
      });
      navigate("/diurnarius");
    });
  };
  return (
    <div>
      <div
        className="border border-black px-1 rounded flex items-center gap-1 cursor-pointer active:scale-[.98]"
        onClick={sign_in_with_Google}
      >
        <FaGoogle className="text-lg" />
        <h1>Login</h1>
      </div>
    </div>
  );
}

export default LogIn;
