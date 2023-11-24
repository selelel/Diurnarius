import React, { useEffect } from "react";
import { Context } from "../utils/context";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../utils/firebase-utils";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const navigate = useNavigate();
  const { state, dispatch, name } = Context();
  const { CONTENTS_, TITLE_, DESCRIPTION_ } = name;
  const blogCollection = collection(db, "contents");

  console.log(state);
  const createBlog = async () => {
    await addDoc(blogCollection, {
      title: state.Title,
      desc: state.Description,
      content: state.Content,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
        pic: auth.currentUser.photoURL,
      },
    });
    navigate("/");
  };

  const TitleHandler = (e) => {
    dispatch({
      type: CONTENTS_,
      payload: e.target.value,
    });
  };

  const DescHandler = (e) => {
    dispatch({ type: TITLE_, payload: e.target.value });
  };

  const ContentHandler = (e) => {
    dispatch({ type: DESCRIPTION_, payload: e.target.value });
  };

  useEffect(() => {
    if (!state.isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <div>
        <h1>Create a Post</h1>
        <div>
          <label>
            Title:
            <input onChange={TitleHandler} type="text" placeholder="Title" />
          </label>
        </div>

        <div>
          <label>
            Description:
            <input
              onChange={DescHandler}
              type="text"
              placeholder="Description"
            />
          </label>
        </div>

        <div>
          <label>
            Content:
            <textarea onChange={ContentHandler} placeholder="Blog Content" />
          </label>
        </div>
        <button onClick={createBlog}>Post</button>
      </div>
    </div>
  );
}

export default CreateBlog;
