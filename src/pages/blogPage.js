import { getDocs, collection } from "firebase/firestore";
import React, { useEffect, useMemo } from "react";
import { db } from "../utils/firebase-utils";
import { Context } from "../utils/context";
import { Fragment } from "react";
import ArticlePanel from "../components/articlePanel";
import Profile from "../components/profile";
import { Link } from "react-router-dom";
import Time from "../components/clock";

function Blog() {
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
    <div className="grid md:grid-cols-8 mt-5 gap-2">
      {/*First Section*/}

      <div className="md:col-span-6 flex flex-col gap-3">
        <Time />
        <div>
          <h1 className="text-2xl font-semibold ">Blogs</h1>
          {state.ArrayDB.map((e, i) => {
            return (
              <Fragment key={e.id}>
                <Link to={`/diurnarius/blog/${i}`}>
                  <ArticlePanel
                    title={e.title}
                    desc={e.desc}
                    idBlog={e.id}
                    authorID={e.author.id}
                  />
                </Link>
              </Fragment>
            );
          })}
        </div>
      </div>

      {/*Second Section*/}
      <div className="md:col-span-2 mx-auto">
        <Profile />
      </div>
    </div>
  );
}

export default Blog;
