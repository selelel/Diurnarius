import { getDocs, collection } from "firebase/firestore";
import React from "react";
import { db } from "../utils/firebase-utils";
import { useEffect } from "react";
import { Context } from "../utils/context";
import { Fragment } from "react";

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

  console.log();
  return (
    <div>
      {state.ArrayDB.map((e) => {
        return (
          <Fragment key={e.id}>
            <h1>{e.title}</h1>
          </Fragment>
        );
      })}
    </div>
  );
}

export default Home;
