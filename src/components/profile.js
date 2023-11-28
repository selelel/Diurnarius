import React from "react";
import Panel from "./panel";
import { Context } from "../utils/context";
import { auth } from "../utils/firebase-utils";
import LogIn from "./loginPage";

function Profile() {
  const { state } = Context();
  return (
    <Panel className="border-none">
      {state.isAuth ? (
        <div className="flex flex-col justify-center items-center gap-1">
          <img
            className="rounded-full w-24"
            src={auth.currentUser.photoURL}
            alt="profile"
          />
          <h1 className="font-bold text-xs">
            @{auth.currentUser.displayName.replaceAll(" ", "_")}
          </h1>
          <h1 className="font-bold text-[.5rem]">{auth.currentUser.email}</h1>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-1">
          <img
            className="rounded-full w-1/2"
            src="https://media.tenor.com/o3SXzAksOokAAAAC/anime-meme.gif"
            alt="random_anime_girl_vibing"
          />
          <h1 className="font-bold text-xs">random_anime_girl_vibing</h1>
          <h1 className="text-[0.60rem]">🔽 contribute by logging in 🔽</h1>
          <LogIn />
        </div>
      )}
    </Panel>
  );
}

export default Profile;
