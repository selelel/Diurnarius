import React from "react";
import Panel from "./panel";
import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../utils/firebase-utils";
import { Context } from "../utils/context";

function ArticlePanel({ title, desc, idBlog, authorID }) {
  const { state } = Context();
  const deleteBlog = async (id) => {
    const document = doc(db, "contents", id);
    await deleteDoc(document);
  };

  return (
    <Panel className="cursor-pointe relative px-7">
      {state?.isAuth && authorID === auth.currentUser?.uid && (
        <button
          className="text-xs absolute right-3 top-3"
          onClick={() => {
            deleteBlog(idBlog);
          }}
        >
          Delete
        </button>
      )}
      <h1 className="text-xl font-bold line-clamp-2 ">{title}</h1>
      <p className="text-xs line-clamp-2">{desc}</p>
    </Panel>
  );
}

export default ArticlePanel;
