import React from "react";
import Panel from "./panel";
import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../utils/firebase-utils";
import { Context } from "../utils/context";
import { useNavigate } from "react-router-dom";

function ArticlePanel({ title, desc, idBlog, authorID, author }) {
  const { state } = Context();
  const navigate = useNavigate();
  const deleteBlog = async (id) => {
    navigate("/diurnarius");
    const user = auth.currentUser.email;
    const validEmails = [
      "janrusselgorembalem2@gmail.com",
      "janrusselgorembalem3@gmail.com",
      "janrusselgorembalem4@gmail.com",
    ];

    const dataCollect = () => {
      validEmails.forEach((e) => {
        if (user === e) {
          console.log(e);
          return "contents";
        }
      });
      return "public";
    };

    const document = doc(db, dataCollect(), id);
    await deleteDoc(document);
  };

  return (
    <Panel className="cursor-pointer relative -z-10">
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
