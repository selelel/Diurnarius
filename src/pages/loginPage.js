import React from "react";
import { auth, provider } from "../utils/firebase-utils";
import { signInWithPopup } from "firebase/auth";

function LogIn() {
  const sign_in_with_Google = () => {
    signInWithPopup(auth, provider).then((result) => {});
  };
  return (
    <div>
      <button>Login using google</button>
    </div>
  );
}

export default LogIn;
