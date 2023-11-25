import { getDocs, collection } from "firebase/firestore";
import React from "react";
import { auth, db } from "../utils/firebase-utils";
import { useEffect } from "react";
import { Context } from "../utils/context";
import { Fragment } from "react";
import Panel from "../components/panel";
import ArticlePanel from "../components/articlePanel";
import Profile from "../components/profile";
import { Link } from "react-router-dom";

function Home() {
  const blogCollection = collection(db, "contents");
  const { dispatch, name, state } = Context();
  const { ARRAY_OF_DB } = name;
  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(blogCollection);

      dispatch({
        type: ARRAY_OF_DB,
        payload: data.docs.map((docs) => {
          return { ...docs.data(), id: docs.id };
        }),
      });
    };
    getPost();
  }, []);

  return (
    <div className="grid grid-cols-7 mt-5 gap-2">
      {/*First Section*/}
      <div className="col-span-5">
        <h1 className="text-2xl font-semibold">Blogs</h1>
        {state.ArrayDB.map((e, i) => {
          return (
            <Fragment key={e.id}>
              <Link to={`/${i}`}>
                <ArticlePanel title={e.title} desc={e.desc} />
              </Link>
            </Fragment>
          );
        })}
      </div>
      {/*Second Section*/}
      <div className="col-span-2">
        <Profile />
      </div>
    </div>
  );
}

export default Home;

/* {state.ArrayDB.map((e) => {
        return (
          <Fragment key={e.id}>
            <h1>{e.title}</h1>
          </Fragment>
        );
      })} */
