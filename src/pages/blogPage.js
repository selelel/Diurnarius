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
  const creatorBlog = collection(db, "contents");
  const publicData = collection(db, "public");
  const { dispatch, name, state } = Context();
  const { ARRAY_OF_DB } = name;

  useEffect(() => {
    const getPost = async () => {
      const dbCreator = await getDocs(creatorBlog);
      const dbPublic = await getDocs(publicData);

      const creatorsDatas = dbCreator.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      });
      const publicDatas = dbPublic.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      });

      const mergedData = [...creatorsDatas, ...publicDatas];
      const sortedData = mergedData.sort((a, b) => {
        return b.order - a.order;
      });

      dispatch({
        type: ARRAY_OF_DB,
        payload: sortedData,
      });
    };
    getPost();
  }, []);

  return (
    <div
      className="grid w-fit md:grid-cols-8 mt-20 gap-2 overflow-x-hidden 
    "
    >
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
                    author={e.author.name}
                  />
                </Link>
              </Fragment>
            );
          })}
        </div>
      </div>

      {/*Second Section*/}
      <div className="md:col-span-2 row-start-1 md:row-start-auto  mx-auto">
        <Profile />
      </div>
    </div>
  );
}

export default Blog;
