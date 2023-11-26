import React from "react";
import Panel from "./panel";
import { Context } from "../utils/context";
import { auth } from "../utils/firebase-utils";
import LogIn from "./loginPage";

function Profile() {
  const { state } = Context();
  return (
    <Panel>
      {state.isAuth ? (
        <div className="flex flex-col justify-center items-center gap-1">
          <img
            className="rounded-full w-24"
            src={auth.currentUser.photoURL}
            alt="profile"
          />
          <h1 className="font-bold text-xs">{auth.currentUser.displayName}</h1>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-1">
          <img
            className="rounded-full w-32"
            src="https://www.acsh.org/sites/default/files/styles/article-content/public/images/shutterstock_134513474.jpg?itok=HboTVgd6"
            alt="profile"
          />
          <h1 className="font-bold text-xs">Panda</h1>
          <LogIn />
        </div>
      )}
    </Panel>
  );
}

export default Profile;
