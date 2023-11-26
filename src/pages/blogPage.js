import { getDocs, collection } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../utils/firebase-utils";
import { Context } from "../utils/context";
import { Fragment } from "react";
import ArticlePanel from "../components/articlePanel";
import Profile from "../components/profile";
import { Link } from "react-router-dom";
import Panel from "../components/panel";

function Blog() {
  const [time, setTime] = useState();
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

  const currentTime = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  const date = new Intl.DateTimeFormat("en", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());

  setInterval(() => {
    setTime(new Intl.DateTimeFormat("en", currentTime).format(new Date()));
  }, 1000);

  return (
    <div className="grid md:grid-cols-8 mt-5 gap-2 place-content-between">
      {/*First Section*/}

      <div className="col-span-6">
        <Panel className="border-none p-0 flex">
          <h1 className="text-3xl">
            {date} <h1 className="text-sm justify-end">{time}</h1>
          </h1>
        </Panel>
        <h1 className="text-2xl font-semibold">Blogs</h1>
        {state.ArrayDB.map((e, i) => {
          return (
            <Fragment key={e.id}>
              <Link to={`/blog/${i}`}>
                <ArticlePanel title={e.title} desc={e.desc} />
              </Link>
            </Fragment>
          );
        })}
      </div>
      {/*Second Section*/}
      <div className="col-span-2 opacity-0 md:opacity-100">
        <Profile />
      </div>
    </div>
  );
}

export default Blog;
