import React from "react";
import { auth, provider } from "../utils/firebase-utils";
import { signInWithPopup } from "firebase/auth";
import { Context } from "../utils/context";
import { useNavigate } from "react-router-dom";

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
      navigate("/");
    });
  };
  return (
    <div>
      <button onClick={sign_in_with_Google}>Login using google</button>
    </div>
  );
}

export default LogIn;
