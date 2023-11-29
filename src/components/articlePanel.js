import React, { Fragment } from "react";
import Panel from "./panel";
import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../utils/firebase-utils";
import { Context } from "../utils/context";
import { useNavigate } from "react-router-dom";

function ArticlePanel({ title, desc, idBlog, authorID, author }) {
  const { state } = Context();
  const navigate = useNavigate();

  const deleteBlog = async (id) => {
    console.log(id);
    const user = auth.currentUser.email;
    const validEmails = [
      "janrusselgorembalem2@gmail.com",
      "janrusselgorembalem3@gmail.com",
      "janrusselgorembalem4@gmail.com",
    ];

    const dataCollect = () => {
      if (validEmails.find((use) => user === use)) {
        return "contents";
      }
      return "public";
    };

    const result = dataCollect();

    const document = doc(db, result, id);
    await deleteDoc(document);

    navigate("/diurnarius");
  };

  const buttonDelete = () => {
    return (
      state?.isAuth &&
      authorID === auth.currentUser?.uid && (
        <button
          className="text-xs text-red-400"
          onClick={() => {
            deleteBlog(idBlog);
          }}
        >
          Delete
        </button>
      )
    );
  };

  return (
    <>
      <div className="justify-end flex">{buttonDelete()}</div>
      <Panel className="cursor-pointer relative -z-10">
        <h1 className="text-xl font-bold line-clamp-2 ">{title}</h1>
        <p className="text-xs line-clamp-2">{desc}</p>
      </Panel>
    </>
  );
}

export default ArticlePanel;
