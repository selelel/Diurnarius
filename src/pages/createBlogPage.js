import React, { useEffect, useState } from "react";
import { Context } from "../utils/context";
import { addDoc, collection } from "firebase/firestore";
import { auth, db, storage } from "../utils/firebase-utils";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

function CreateBlog() {
  const [pictureCover, setCover] = useState("");
  const navigate = useNavigate();
  const { state, dispatch, name } = Context();
  const { CONTENTS_, TITLE_, DESCRIPTION_, FILE_, PIC_ } = name;
  const blogCollection = collection(db, "contents");

  const globalRef = ref(storage, `cover/`);
  console.log(pictureCover);
  listAll(globalRef).then((response) => {
    getDownloadURL(response.items.at(-1)).then((url) => {
      setCover(url);
    });
  });

  const createBlog = async () => {
    await addDoc(blogCollection, {
      title: state.Title,
      desc: state.Description,
      content: state.Content,
      pic: pictureCover,
      posted: new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date()),
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });

    const imageRef = ref(storage, `cover/${state.File + v4()}`);
    uploadBytes(imageRef, state.File);
    navigate("/");
  };

  const TitleHandler = (e) => {
    dispatch({
      type: TITLE_,
      payload: e.target.value,
    });
  };

  const DescHandler = (e) => {
    dispatch({ type: DESCRIPTION_, payload: e.target.value });
  };

  const ContentHandler = (e) => {
    dispatch({ type: CONTENTS_, payload: e.target.value });
  };

  const File = (e) => {
    dispatch({ type: FILE_, payload: e.target.files[0] });
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
            <input onChange={File} type="file" required />
          </label>
        </div>

        <div>
          <label>
            Title:
            <input
              onChange={TitleHandler}
              type="text"
              placeholder="Title"
              required
            />
          </label>
        </div>

        <div>
          <label>
            Description:
            <input
              onChange={DescHandler}
              type="text"
              placeholder="Description"
              required
            />
          </label>
        </div>

        <div>
          <label>
            Content:
            <textarea
              onChange={ContentHandler}
              placeholder="Blog Content"
              required
            />
          </label>
        </div>
        <button onClick={createBlog}>Post</button>
      </div>
    </div>
  );
}

export default CreateBlog;
